zola build &&
    gzip -vrk9 --rsyncable public &&
    rsync -rvz --progress -e 'ssh -p 57018' public/* andrew@let-them.cyou:/srv/www/lt/andrew
