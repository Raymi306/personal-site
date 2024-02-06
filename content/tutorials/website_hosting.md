+++
title="Website Hosting"
+++

# How to Host a Website
## Overview
---

This tutorial will explain how to host a static webpage on a server.
A static webpage is a webpage that does not have a backend component.
A backend for a website may consist of things such as code and databases to allow the website to retrieve data and act in a dynamic way.
The website that we will be serving should consist of at least one HTML file, optional CSS files, and other resources such as images.
This tutorial will focus on hosting rather than building the website.
If you wish to host a backend in the future, you will have a solid base with which to do so, as you can easily add functionality to your server.

---
## Other Options
---
If you desire low maintenance hosting or only need one or two websites, many cloud providers offer a convenient static website hosting service.
A few examples of such platforms include [GitHub Pages](https://pages.github.com/), [Netlify](https://www.netlify.com/), and [Cloudflare Pages](https://pages.cloudflare.com/).
Prices can start as low as free, and typically scale depending on how many separate websites you need or how much traffic your site needs to sustain.
Depending on the platform that you choose, you may be limited in what methods of deploying your website are supported.
Hosting websites on your own server requires more maintenance and initial setup.
This tradeoff's primary benefit revolves around control.
This control will result in the gaining of some valuable sysadmin skills and a deeper understanding of how things work.

A quick note on performance:
Even a cheap, weak server can easily host a multitude of low-traffic websites while performing other tasks, such as VPN tunneling or file hosting.
Some may prefer the dashboard views some managed services provide when it comes to maintaining many websites, and some managed services promise extremely high capacity for web traffic and fast access times.

---
## The Server
---
*Cost: $4+ per month.*

For our purposes, a server is a computer with a public IP address that can store the files for your website and present them to the world.
We will be using [Digital Ocean](https://www.digitalocean.com/) to rent a Virtual Private Server, or VPS.
A VPS, as its name implies, is not a physical computer.
A physical computer lies behind the scenes, and is shared by way of virtual machines that allow for the resources of the physical computer to be split and distributed to different users.

Why are we renting a VPS instead of using a spare computer?
Well, using a spare computer is a perfectly valid option, but it comes with several complications.
The main complication has to do with IP addresses.
IP addresses are how computers find other computers on the internet, and in the case of the still ubiquitous version 4 IP address, there are not enough to go around.
This means that your computer is not directly exposed to the internet with a unique address.
Instead, your internet service provider allocates a unique address only for your router.
All devices connected to the router then have a private address, and reach out to the internet through the router.
As an additional complication, for most service plans, you are not guaranteed a static IP address.
Your ISP can change the address at any time, meaning that other computers looking to find you will have a hard time.
This can be solved with a combination of two things, port forwarding and dynamic DNS, but these concepts are out of scope for this article.

Create an account with Digital Ocean.
Then look for the 'Create' dropdown, and select 'Droplets'.
Droplets are Digital Ocean jargon for VPSs.
We now have several options to consider.
For the region, you should choose one close to your desired audience.
If you live on the East coast of the United States, choosing the New York region is a safe bet.
Network performance characters are improved by proximity.

Next, we must choose an OS. Any OS will work, but for the purposes of this tutorial, choose Ubuntu.
For the size, the cheapest option will be "Shared CPU", which should already be selected.
For CPU options, switch to a regular SSD, and scroll the options to the left to unveil a $4/month option.
For simplicity's sake, change the authentication method to password. You can always change it to SSH key authentication later,
but setting up SSH authentication is out of scope for this tutorial.
SSH authentication is a more secure authentication method, and overachievers may be interested in [Digital Ocean's tutorial](https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server).
Feel free to diverge here and explore the SSH key route, especially if you have some Unix experience already.
Enable monitoring in the extra options section, then scroll to the bottom where it says 'Finalize Details'.
You can leave the hostname as is, or name the droplet something memorable.
When all done, click create droplet, wait a few moments, and you have your very own server to play with!

Now that your server is running, you have a few options for logging in to it.
You may use the Digital Ocean dashboard or a terminal on your computer.
Do not fret if you have never used a terminal before - now is a great time to start!
Assuming you have a modern up-to-date installation of Windows, or a Unix system, open up a terminal.
On Windows, you want to hit the Windows key and search for Powershell.
We are going to use a program called ssh to connect with the server.
Look at your droplet on the Digital Ocean dashboard and take note of its public IP address.
Type into your terminal `ssh root@xxx.xxx.xxx.xxx`, replace the x's with the droplet's public IP, and hit enter.
It may give you a notice that you have never connected to this system before - ignore this.
If all goes well, it should prompt you for the password of the root user. You created this password when making the droplet, hopefully you remember it!
Once you enter the correct password, you will then be dropped into a shell on the server.
Congratulations, you have logged in!
If you have never used Linux before, here are some commands and tips to get you oriented:

```
`man`: get the manual for a command, type a space and then the name of the command you wish to learn more about
`pwd`: print working directory
`ls`: list files in current directory, will output nothing if no files exist
`cd`: change directory, type a space and then the path you wish to change into
```

To go up one directory, type `cd ..`, to go up two, type `cd ../..`
Use the up and down arrow keys to browse your command history.
When typing a command or a path, try hitting the Tab key to autocomplete.
To stop a running program, press `<Ctrl + C>`

If you are unfamiliar with directories (AKA folders), or if you want to learn about the differences between directories in Windows and Linux, now may be a good time to do some quick Google searches.

It is important to keep your server up to date.
You can run `apt update` followed by `apt upgrade` to accomplish this.
You may also want to look into 'unattended-upgrades', which can do this for you automatically.
Be aware that sometimes upgrades break things though.
Furthermore, operating systems are only supported for so long.
Ubuntu releases are supported for 5 years, or 10 if you pay for extended support.
Be prepared to upgrade operating system versions after this period.

I alluded to the fact that SSH keys are superior to passwords earlier; I truly, truly hope that if you used a password, that you used a very strong one.
If you check the contents of the file at `/var/log/auth.log` for lines with 'sshd' with a command such as `less`, `cat`, or `grep`, you will see that unauthorized users from around the world have been trying to break into the server since the moment it went online.
Don't let them use your server for their own purposes, they don't even pay rent.
One way that people and bots know to try to log in to your server is by port, by default, sshd runs on port 22.
This means that bad actors can try connecting to IP addresses on port 22 and spam connection attempts, hoping to get lucky.
Let's change the port sshd runs on to make life a bit harder for bad actors.
Note that once you change the port, you must change how you ssh in to the server.
Use the command `ssh -p PORTNUMBER root@IPADDRESS` to accomplish this, substituting your port number and ipaddress in.
To change the port that sshd runs on, run the command `nano /etc/ssh/sshd_config`. This will open the config file in the text editor nano.
Look for a line beginning with a '#' followed by 'Port'. The '#' comments out a line. Commented out lines often function as a type of documentation in config files.
Delete the '#', and change the port number to a number of your choice between 1024 and 65535.
Numbers below this range run a higher risk of running into a common port used for other services, but our server isn't currently running too many things that would conflict with our new port.
Save the file by pressing `<Ctrl + x>` and `y`.
Now we need to restart the sshd service. Run `systemctl restart sshd`, and we're all done!
Remember that you have to always specify the new port when connecting in the future.

One final security note; Using the `root` user is a bad practice as it is possible to inadvertently ruin your system with little to no warning.
As a task for the reader, look up how to create a new user with sudo privileges, in our case, the privilege to perform tasks requiring root when needed.
Then, login to that user, and checkout the sshd config file again and see if you can figure out how to disable root login entirely.

---
## Domains and their Configuration
---

*Cost: ~$15 per year*

Now that we have a server, we can connect to it with its public IP. However, we don't want our website users to have to remember that address.
This is where domains and the Domain Name System (DNS) comes in to play.
You can purchase a domain name and point it to your public IP so that people only need to remember the domain name.
'google.com' is much easier to remember than, say, '172.217.0.174'.
There are several domain name registrars to choose from. For the purposes of this tutorial, we will use [Namecheap](https://namecheap.com).
Domains come in two parts, the domain itself and the Top Level Domain (TLD).
The most recognizable TLD is '.com'.
You may consider other TLDs to potentially save money or to make your full domain name more memorable.
You can also add one or more subdomains to a domain.
Subdomains go before the domain with a dot separator, and are free to configure.
'www' is a very common subdomain.
Go to [namecheap.com](https://namecheap.com) and find a domain that you like, taking note of the initial registration fee and the renewal fee.
The length, potential popularity, and TLD of the domain that you choose all influence the price, but you can get away with only owing $15 a year.
Once you have acquired the domain, you must configure it. This is done by editing DNS records.
The two most important records for our purposes are 'A' records and 'CNAME' records.
Set the 'A' record to point to the public IP of your server. If it asks for a host, you may put '@'. Then, set the CNAME record with the subdomain 'www.' to point to your domain.
CNAMES are aliases, so if you change your 'A' record again for any reason, the 'www.' subdomain follows it for you!
That's about it for domains! Now, you can log in to your server with `ssh -p PORTNUMBER USER@DOMAINNAME`, and we are ready to start serving things on the web.
Check out [this link](@/tutorials/basic_dns.md) for more information about DNS.

---
## Web Server Configuration
---

Back to our server!
We're ready to install, configure, and run a service that can serve our beloved website to the public!
We will be using a program called [nginx](https://nginx.org/en/) for this purpose.
Install nginx with `sudo apt install nginx`.
Then, navigate to `/etc/nginx/conf.d`, and create a file, probably named after your domain, ending in `.conf` with `sudo nano mydomain.conf`.
Enter in the following information:

```
server {
    listen       80;
    server_name  YOUR_FULL_DOMAIN_GOES_HERE www.YOUR_FULL_DOMAIN_GOES_HERE;

    location / {
    root   /srv/www/;
    }
}
```

This configures nginx to look for requests to your domain on port 80, and to serve files from the location `/srv/www`.
Next up, we should go ahead and make sure that the path /srv/www actually exists!
Run `mkdir -p /srv/www` to make the directory.
Before we put our website in this directory, let's go ahead and quickly set up SSL certificates for our domain.
This will encrypt traffic to and from your website, and while it isn't strictly necessary, it is a best practice that is easy to adhere to.
To accomplish this, we will make use of [certbot](https://certbot.eff.org/).
`sudo apt install certbot`
`sudo certbot`
Follow the prompts from certbot, selecting your domain both with and without the 'www' subdomain.
Certbot will edit your configuration file in `/etc/nginx/conf.d` for you, and bam, you have SSL configured and ready to go!

We are finally ready to place our website files on the server! There are several options for this.
You can download a program such as [WinSCP](https://winscp.net/eng/index.php), [rsync](https://rsync.samba.org/), or [Filezilla](https://filezilla-project.org/),
and use them to connect and transfer files to your server with the benefit of a graphical user interface.
Or, you can use the `scp` program, which sends files over ssh and is already installed on both modern Windows and Linux.

`scp -P YOUR_SSH_PORT PATH_TO_LOCAL_FILES/* USER@DOMAIN:/srv/www`

If your path has any spaces in it, wrap the path in quotes "C:\My Path".
Spaces are best to be avoided in paths, they tend to cause little headaches.
This may take a moment to run on Windows.
Once you have placed your files, go ahead and make sure that nginx is running with your latest changes with `sudo systemctl restart nginx`.
Then, try and navigate to your website! If all goes well, and you have an 'index.html' file sitting inside `/srv/www`, your webpage should appear!
