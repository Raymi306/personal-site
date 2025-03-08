+++
title="Linux Command History"
date="2025-03-07"
+++

# Command History

Using the up and down arrows to cycle through your command history is pretty common knowledge.
Here are some simple alternative ways to work with your command history.

## history dot files 

Many shells store a user's history in a dot file in the home directory.
A few examples:
- .bash\_history
- .mysql\_history
- .python\_history

You can search these with a variety of tools, here is an example using `grep`:
```sh
grep $command .bash_history
```

## Bash and friends

### The !! event designator

Ran a command, but forgot to put `sudo` up front?
In bash, you can use `sudo !!` to rerun the last command, but this time with sudo up front.
If your shell does not have similar tools to work with history, up arrow followed by the home key isn't that much more strenous.

[Bash manual entry on "Event Designators"](https://www.gnu.org/software/bash/manual/bash.html#Event-Designators)

*(If you search the bash manual for "history", you'll find a variety of handy tricks)*

### The `history` command
Bash and some other shells also provide a `history` command which can allow for a variety of ways to view and manipulate history.
It also provides a slightly shorter grep option:
```sh
history | grep $command
```

### reverse-i-search

Available not only on bash, but on several other shells and tools as well.
Press `<Ctrl + r>` to enter a reverse-i-search.
Begin typing a command, and you will receive the most recent matching result.
To travel back in history, press `<Ctrl + r>` again.
Use the arrow keys to keep the command without running it.
Hit the Enter key to run the command.

### HISTCONTROL environment variable

If you've ever had to run the same command hundreds of times, you have probably been annoyed when you try to cycle through your history with the arrow keys.
There is also a limit to how many items can be in your history, so rerunning the same command can push out other unique commands that you probably wanted to keep around.
Setting the HISTCONTROL variable in your .bashrc to "ignoredups" will keep your history much more usable.

[Bash manual entry on the HISTCONTROL variable](https://www.gnu.org/software/bash/manual/bash.html#index-HISTCONTROL)
