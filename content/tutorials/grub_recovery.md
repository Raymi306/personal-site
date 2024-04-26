+++
title="GRUB Recovery"
date="2023-07-29"
updated="2023-08-02"
+++
# How to Recover From a Bad GRUB Configuration
This tutorial uses the following vdi disk: [download here](https://files.andrew.let-them.cyou/grub-broken.vdi).
You may use free software such as VirtualBox or QEMU to load the disk and follow along.
In VirtualBox, create a Linux 64 bit VM and select grub-broken.vdi as the virtual harddisk file.
It does not need many resources to run, 1 core and 1GB of memory should be more than enough.
I would hazard a guess that you could run it with ~512MB of memory in a pinch.
Once the VM is running, we find ourselves in the GRUB command line.
The first thing we need to do is to explore the layout of our disks.
```
ls
```
In our image, we see that we have one disk, hd0, and 3 partitions, 1-3.
We now need more information about these partitions.
We need to determine which contains the boot partition, and which contains the root file system.
There is a chance that the same partition contains both.
```
ls (hd0,1)
ls (hd0,2)
ls (hd0,3)
ls (hd0,1)/
ls (hd0,3)/
```
When we pass a disk partition combination to `ls`, we can see some information about the file system.
We see that partitions 1 and 3 have an ext variant, and partition 2 has no file system.
It is likely the swap partition.
For partitions with file systems, we can explore their contents.
We see that partition 1 contains the boot partition, and that partition 3 contains the root file system.
If you cannot identify either the boot partition or the root file system partition, it may be that you need to reimage the system and start from scratch.
You can try to use a Linux rescue image to explore further and see if anything is recoverable.

We can now set the boot partition:
```
set root=(hd0,1)
```
Our next task will involve configuring our kernel and root file system.
First, we need a little more information about the file system type.
We know it is an ext variant, but not which one precisely.
We can take advantage of /etc/fstab to get more information:
```
cat (hd0,3)/etc/fstab
```
This shows us that the partition is specifically using ext4.
While GRUB can boot some file systems without extra information, ext4 is one file system that needs to be manually specified.
```
linux /vmlinuz-virt root=/dev/sda3 rootfstype=ext4
```
Note that we specified sda3 here, which corresponds to first disk 3rd partition.
You may also specify with a UUID:
```
root=UUID=xxxx
```
For a full list of options that you can pass to the kernel here, check out the [bootparam(7)](https://www.man7.org/linux/man-pages/man7/bootparam.7.html) man page.

All that remains is to specify our initial RAM disk.
Examining the files in our boot partition, initramfs-virt looks like the best match here:
```
initrd /initramfs-virt
```
If everything has gone according to plan, we should be ready to boot!
```
boot
```
This image has one user, root, with no password.
If you get a login prompt, you're golden!
To fix GRUB, you can uninstall and reinstall it:
```
apk del grub grub-bios
apk add grub grub-bios
grub-install
grub-mkconfig -o /boot/grub/grub.cfg
```
Note that this is an Alpine Linux image, on distributions with different package managers, you will have to adapt the command and targets accordingly.

To summarize, when you are in the GRUB shell, you should first determine your disk layout and the contents of the file system.
This is to support 3 boot prerequisites: setting the boot partition, setting the linux kernel and root file system, and setting the initial RAM disk.
Once these prerequisites are met, you should be ready to boot.
