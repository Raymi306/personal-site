+++
title="Automatically Locking your Screen with Debian and the i3wm"
date="2024-02-12"
+++

Looking up how to automatically lock your laptop screen when using the i3 window manager brought up a variety of methods.
Several sites recommended creating a systemd unit to accomplish the task.
A better solution was waiting in my default i3 config.

```config
# xss-lock grabs a logind suspend inhibit lock and will use i3lock to lock the
# screen before suspend. Use loginctl lock-session to lock your screen.
exec --no-startup-id xss-lock --transfer-sleep-lock -- i3lock --nofork
```

There was already a solution in the config, it simply wasn't working by default as my Debian system did not have xss-lock installed.

```sh
sudo apt install xss-lock
```

Annoyingly, even after refreshing the i3 config, my screen would not lock.
You can test this with `xset dpms force suspend` or by closing your laptop lid.
I suppose you can use `loginctl lock-session` as recommended by the above comment as well.
Sometimes, when things aren't quite working on Linux, logging out and back in again is a good troubleshooting step.
Sure enough, this was enough to get i3lock working as expected whenever my laptop suspends.
