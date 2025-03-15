+++
title="Digital Privacy"
date="2025-03-04"
+++

Non-exhaustive and a work-in-progress.

Before we get started, consider the relative credibility of my website and perhaps read about this topic elsewhere.

The Electronic Frontier Foundation has a Surveillance Self-Defense guide: [https://ssd.eff.org/](https://ssd.eff.org/)

Did you trust me enough to click on that link?

Beginner mistake...

# Digital Privacy
---

Assume that any digital device can be compromised given sufficient time and resources.

It does not matter if you are using a secure app to message someone, if the device you are using has already been compromised.

## Threat Model
---
Security is often in direct conflict with convenience.
Establishing your threat model can help you to make decisions on how to balance the two.

What are the consequences if your privacy is violated?
- embarassment?
- financial loss or change in quality of life?
- physical harm?

Do these consequences affect only you or others?

Who are you worried about violating your privacy?
- Your neighbor?
- Your ISP (Internet service provider)?
- Law enforcement?
- Bored hackers?
- The state?

Have you attracted the attention of a nation state willing to spend millions of dollars in order to gain access to your digital devices?
If you have, many of the suggestions on this page will be insufficient.

You may have excellent digital security, but if you can be coerced into divulging information that doesn't help much.

[Obligatory xkcd](https://xkcd.com/538/)

Phishing and violence can both be effective ways for others to bypass your digital safeguards.

## OPSEC
---

A mindset.

Do not take steps to be anonymous, only to login to an old account or use a credit card.

Defense in depth: do not just take one step to protect yourself, layer.

### Fingerprinting

A change in behavior is suspicious.
Instead of turning your phone off, consider leaving it at home.

What information can be used to uniquely identify you while browsing the web?
- Your choice of browser (User agent headers).
- Plugins (Script and ad blockers).
- The cadence at which you type.
- Linguistic quirks (preferred words, typos, etc.).
- The manner in which you move your mouse.
- The resolution of your monitor.

## Software
---

Keep it up to date!

Be wary of supply chain attacks:
Verify the integrity of software when possible.
Often, a hash or checksum is provided.
After you download the file, use the appropriate tool (sha256sum, etc. on Unix) to verify that the hash of what you downloaded is the same as the provided hash.

The general theory of hashes is that many bits of information can be transformed in to a set number of bits in a non-reversible manner.
If any part of the data changes, the resulting hash will be completely different.

## Passwords
---

[Obligatory xkcd](https://xkcd.com/936/)

### Password Management

A dedicated password manager is a must for ALL passwords.
Use [KeePass](https://keepass.info/download.html) or an equivalent tool.
KeePass can also manage many common forms of 2FA.

For your master password, consider using a method similar to the default settings from [https://www.xkpasswd.net/](https://www.xkpasswd.net/)

For posterity and to fight bit rot:
- Choose a random symbol, pad the front and back of the password with 2-3 of this symbol.
- Choose 2, 2 digit numbers.  Pad the front with one and the back with another.
- Choose another random symbol. Use this symbol in between each word.
- Choose 3 - 4 random words.
- Choose a capitalization scheme for the words, you could capitalize the first or last of each word, or alternate entire words in upper and lower case.

Example:
- `?`
- 95, 14
- `&`
- Stranger, Austria, Glossary, Water
- STRANGER, austria, GLOSSARY, water

Result:
`??95STRANGER&austria&GLOSSARY&water14??`

If everyone follows this guide too exactly, then the overall effectiveness of this scheme is reduced, but not critically so.
This password should be easier to remember than a purely random password, but write it down and store it in as safe a manner as practicable until you have properly memorized it.

### Password Perils

Reusing a password regardless of strength is a surefire way to get your accounts compromised.

The issue is as follows:
- You make an account with a service which requires a password
- The service stores your password incorrectly, perhaps even in plain text.
- The service is compromised and all account information dumped.
- Attackers try other services with your account information (perhaps email and password) and hope to get lucky.

### haveibeenpwned

Make use of [https://haveibeenpwned.com/](https://haveibeenpwned.com/)

You can check if your emails have been involved in publicly known data breaches.
If you are trusting or can read the source code and verify, you can check your passwords too.
You may also enter your email address to be informed of future breaches.

### Not-Passwords

Be wary of biometric authentication measures, many fingerprint scanners have historically been trivial to fool.

Be extremely wary of 2FA that sends codes via email, or worse, via SMS.

## Data at Rest
---

Encrypt!

Consider [VeraCrypt](https://veracrypt.eu/en/).
Read their notes on plausible deniability.

If using Unix, a variety of customizable options will be available to you if you wish to use something besides VeraCrypt.
These other options may or may not provide you with plausible deniability.

## Text Messaging
---

SMS is NOT secure.

End-to-end encryption is the key technology to look for.
Signal is a solid choice.
Matrix may be of interest as an alternative.

## Web Browsing
---

### Browsers

Most browsers are either based on Firefox or based on Chromium, unless you are unfortunate enough to be stuck with an Apple OS.
Firefox and Chrome themselves are not particularly great choices for sensitive web browsing.
Security hardened variations on both browsers exist, as well as instructions for configuring or modifying the browsers to resolve certain concerns.
Be aware that sometimes, your attempts to avoid tracking just make you stand out more.

If you use a browser which is built on top of Chromium or Firefox, critical security updates may be slightly delayed as they are applied to whichever alternate browser you have chosen.

### VPN

If your threat model concerns stop at ISP snooping, a VPN is largely sufficient to protect you.

The general principle of operation of a VPN is:
- You establish a secure connection with a remote computer.
- When you attempt to perform any network action, that action travels over your secure connection, the "tunnel", first.
- The end result is that your traffic appears to be originating from the remote computer, not from your own.

With basic technical knowledge, it is not difficult to create your own VPN.
However, if you are the only one using it, any actions performed by your VPN can still easily be traced back to you.

As of the writing of this article, a helpful method of navigating paid VPN options can be found at [windscribe.com](https://windscribe.com/vpnmap)

### Tor

From the history of the Tor project:
> The goal of onion routing was to have a way to use the internet with as much privacy
as possible, and the idea was to route traffic through multiple servers and encrypt it
each step of the way. This is still a simple explanation for how Tor works today.

If you are going through the trouble of using Tor, use the [Tor Browser](https://www.torproject.org/download/) as well.

Consider first connecting to a VPN, and then using Tor.
Remember, defense in depth!

## Email
---

OpenPGP and [GnuPG](https://gnupg.org/) have been around for some time and can be used to secure any email conversation.
Some consider using it to be high in friction.

[Proton Mail](https://proton.me/mail) offers a free encrypted email account which does not require special effort.
Handy if both sides of the conversation are using encryption.
Otherwise, the unencrypted side is the obvious weak link.

## Phones
---

### Every day

Consider a solution such as [GrapheneOS](https://grapheneos.org/) on a used Pixel phone.
Small things, like turning off Bluetooth and NFC when not in use can also be helpful.

### Burner

Not so simple any more to have a burner phone if you want pay-by-use functionality.
If you just need one for emergencies, you can buy any cheap phone with a monthly contractless plan.
Only activate the phone for the emergency, and discard when done.
Purchase using cash, and be mindful of cameras.
For pay-by-use, there are sketchy SIMs available online obstensibly intended for international travel.

## Printers
---

[Anything you print can be traced to the printer that produced it.](https://en.wikipedia.org/wiki/Printer_tracking_dots)
Printers may also store print jobs.

## Generative AI
---

If the ethical concerns weren't enough for you, the fact that your queries and provided context are being stored may be.
Running a private model should be a priority if you must use it in a sensitive manner.

Devices with built-in AI that function by monitoring your device should be considered compromised.
End-to-end encryption doesn't help if you have malware on your device or the recipient's device that can see everything anyway.

## Operating Systems
---

Linux or BSD.

Windows and MacOS have all sorts of fun telemetry and other privacy concerns.
Steps may be taken to modify these operating systems, although each update may require you to perform those steps again.

For some specific recommendations, consider:
- [QubesOS](https://www.qubes-os.org/)
- [TailsOS](https://tails.net/)
- [OpenBSD](https://www.openbsd.org/)

## Old School Cryptography
---

### One Time Pads

[Unbreakable cryptography.](https://en.wikipedia.org/wiki/One-time_pad)
Not very convenient to use correctly though.
