# Untested as I am not deploying manually anymore
SSH_PORT=xxxx
USER=xxxx
HOST=xxxx
TARGET_DIR=xxxx

echo 'Did you run `zola check`?'
zola build &&
    gzip -vrk9 --rsyncable public &&
    rsync -rvz --progress -e 'ssh -p $SSH_PORT' public/* $USER@$HOST:$TARGET_DIR
