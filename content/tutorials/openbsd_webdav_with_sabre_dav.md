+++
title="OpenBSD httpd/SabreDAV with Nice URLs"
date="2024-04-25"
+++

I had a bit of heartache trying to get a WebDAV server running alongside OpenBSD's httpd just the way I wanted.
[This](https://www.tumfatig.net/2023/self-hosted-bookmarks-using-dav-and-httpd-on-openbsd/) tutorial was a great start and got me to a working setup in short order.
I crossreferenced with the httpd man pages and the official SabreDAV documentation found [here](https://sabre.io/dav/gettingstarted/) when needed.
After I got my basic setup working, I wanted to have a shorter and more memorable URL.
The only problem was, that I could not find any clear documentation on how to actually achieve this.
The official docs clearly state that URL rewriting would be necessary, but naively doing that with no other changes resulted in errors.
The answer ended up being on [this](https://sabre.io/dav/baseuri/) page that really, really deserves a few more links to it in the official documentation.
I stumbled across it with a precisely crafted search query that I don't remember, and only after searching that URL did I find where it was referenced in the documentation (In an area describing a problem I was not having).
In sum, you cannot naively support both a pretty URL and the full URL as I had originally been attempting.

You must both rewrite the URL, and change the base URI in your PHP code, which should look something like this:

```conf
# httpd conf

location match "^/user(/.*)" {
        request rewrite "/webdav/user.php%1"
}
```

```php
// user.php

$server->setBaseUri('user/');
```
