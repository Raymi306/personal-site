+++
title="Basic DNS"
date="2021-10-09"
+++

# Basic DNS

A quick explainer of DNS records as they pertain to hosting a basic page.

---

DNS, or the Domain Name System, is the address book of the internet.
It maps domain names, such as the ubiquitous 'google.com', to IP addresses, what our computers need to actually connect to the end page.
You can register a domain name on a variety of domain registrar sites, in this site's case, namecheap was used.
Once you register your domain name, you must manage the records associated with it in order to associate the domain name with your server.
You can manage these records on the domain registrar's page, or you can manage it elsewhere on someone else's nameservers.
This site's DNS is managed at Digital Ocean, which keeps all the resources for the project together nicely and provides a clean developer UX.
Changing where you manage the domain's records involves the first record type:

## NS
---

NS records, or 'nameserver' records, indicate which server on the internet contains the authoritative records for the domain.
The nameserver with the authoritative records, simply put, is able to create and edit said records.
To allow oneself to edit the domain records on another site than the domain registrars, you must find out what the nameserver addresses are for that other site.
In the case of Digital Ocean, there are three domains, which will equate to creating 3 records.
Point the records with the hostname of your domain to 'ns1.digitalocean.com', 'ns2.digitalocean.com', and 'ns3.digitalocean.com', and you will be able to manage those records from Digital Ocean's portal.
This change isn't instantaneous; DNS is a distributed system, and every change will take some time to propagate across the internet's various name servers.
Patience is a virtue!
The TTL, or time to live, of a record is somewhat associated with the time it takes for record changes to propagate.
When a TTL, given in milliseconds, expires, non-authoritative DNS servers will know that it is time to refresh their copy of that DNS record.
However, they do not HAVE to refresh their information at that time, it is more of a recommendation.
Furthermore, TTL only applies to updates of a record, not the initial creation.

## A, AAAA
---

A and AAAA records are quite simple; They point to an IP address.
When your browser attempts to visit a domain, if you have an A (IPv4) and/or AAAA (IPv6) record, it will know which address to actually visit to find where your content is hosted.

## CNAME
---

You may notice that if you just have an A record for your domain, that if you try to prepend 'www.' to your domain name, domain resolution fails.
You can create a new A record to solve this problem, or, you can create a CNAME record.
CNAME is short for canonical name, and it works as an alias.
Rather than pointing to an IP address, CNAMEs point to other domains with an A record.
This can be convenient, as it means that if you change the record that the CNAME points to, the change propagates without you having to manually change each record.

## CAA
---

CAA stands for certificate authority authorization.
In today's day and age, it is incredibly easy to manage SSL records to secure traffic to your website.
You can use a CAA record to specify which authorities are actually allowed to issue certificates for your domain.
If you are using LetsEncrypt as your authority, you can prevent other authorities from being used in a certificate hijacking attempt from a 3rd party by specifiying letsencrypt.org as the only authority for your domain.

## Tools
---

While making changes to DNS records, knowing how to query the records for your domain manually can be helpful for troubleshooting.
On Unix, `dig` and `host` are two common tools that can be used for this task.
On Windows, the help is less...helpful for their tool, `nslookup`.
To use nslookup, type the command into the command line and hit enter.
Then, you may type `set type=ANY`, if you wish to view ALL record types for an address.
Then, you may type any domains that you wish to see records for.
