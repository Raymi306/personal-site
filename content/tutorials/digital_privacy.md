+++
title="Digital Privacy"
date="2025-03-04"
updated="2026-02-07"
+++

# Digital Privacy
---

## Resources
---

- [Electronic Frontier Foundation's Surveillance Self Defense Guides](https://ssd.eff.org/)
- [Privacy Guides](https://www.privacyguides.org/)
  - particularly helpful if you are looking for specific tool guidance

## Threat Model
---
Security is often in direct conflict with convenience.
Establishing your threat model can help you to make decisions on how to balance the two, and should be the first step on your digital privacy journey.

Consider the following questions when developing your threat model:

1. What are the consequences if your privacy is violated?
- embarassment?
- financial loss or change in quality of life?
- physical harm?

2. Do these consequences affect only you, or will others be harmed?

3. Who are you worried about violating your privacy?
- Your neighbor?
- Your ISP (Internet service provider)?
- Law enforcement?
- Bored hackers?
- Incentivized hackers?
- The state?

Have you attracted the attention of a nation state willing to spend millions of dollars in order to gain access to your digital devices?
If you have, many of the suggestions on this page will be insufficient.
Assume that any digital device can be compromised with sufficient time and resources.

Many privacy decisions that you make will center around trust.
You may not trust your ISP with knowing your browsing habits, but do you trust the free VPN you saw an ad for with the same?

## Operational Security (OPSEC)
---

There is more to digital privacy than choosing the "right" tools.
Adopting a security focused mindset will help to keep you safe as landscapes change.

Consider how actions may link together.

Do not take steps to be anonymous, only to login to a preexisting personal account or use your credit card.

You may have excellent digital security, but if you can be coerced into divulging information that doesn't help much.

[(Obligatory xkcd)](https://xkcd.com/538/)

Phishing and violence can both be effective ways for others to bypass your digital safeguards.
If you are using a secure tool such as Signal to communicate, but someone can see your screen or the device you are using has been compromised with malware, the secureness of the tool is irrelevant.

Embrace the principle of defense in depth: do not just take one step to protect yourself, layer.

## Software
---

### Updates

There is a constant arms race involving software exploitation and mitigations of said exploits.
Timely software updates help prevent easy, widely known attacks against your devices.

### Supply Chain Attacks

A supply chain attack can take a few forms.

Malicious actors may offer unofficial downloads to try and confuse the end user into downloading modified software.
This can take the form of [typosquatting](https://en.wikipedia.org/wiki/Typosquatting), or an ad campaign advertising a free or "enhanced" software download.

Malicious actors may attempt to take over a download link or otherwise modify the software you wish to use.
One protection sometimes available against this is checksum validation.
If a [checksum](https://en.wikipedia.org/wiki/Checksum) is available on the official website, using it to validate your download can provide piece of mind that the software was not tampered with or corrupted.
How to compare checksums against your download will vary from device to device.

### Settings

Explore application and device settings.
Of particular interest are settings pertaining to advertising, advertising or other unique identifiers, telemetry, and AI.

[EFF article on disabling ad ID tracking on phones](https://www.eff.org/deeplinks/2022/05/how-disable-ad-id-tracking-ios-and-android-and-why-you-should-do-it-now)

## Passwords
---

### Password Perils

Reusing a password regardless of strength is a very poor idea.

1. You make an account with a service which requires a password
2. The service stores your password incorrectly, perhaps even in plain text.
3. The service is compromised and your password and other account information is dumped.
4. Attackers try other services with your account information (perhaps email and password) and hope to get lucky.

See: [Credential stuffing](https://en.wikipedia.org/wiki/Credential_stuffing)


### Password Management

A dedicated password manager is a must.
My personal preference are password managers which I can use offline, such as [KeePass](https://keepass.info/download.html) or [KeePassXC](https://keepassxc.org/).
These sometimes require extra steps to sync across devices.

For your master password, consider using a method similar to the default settings from [https://www.xkpasswd.net/](https://www.xkpasswd.net/)
This website does a good job of quantifying the security of its generated passwords with a concept known as [entropy](https://userguide.xkpasswd.net/#/statistics-entropy).
When using a scheme to generate a password, it is important to consider scenarios where an attacker knows the scheme you used.
A good scheme will still be secure in this worst case scenario.

Schemes leveraging words may be easier to remember and to type for confident typists.
For slower typists, a shorter password consisting of random letters, numbers and symbols may be quicker to type at the potential cost of being harder to memorize.
Typing on a phone can also be frustrating relative to a fullsized keyboard when special characters and numbers are involved.

A variation of the default scheme xkpasswd.net has used is described below:
- Choose a random symbol. This symbol will be used after each word.
    - `?`
- Choose another random symbol. Use this symbol at the front or back of the password.
    - `&`
- Choose a 4 digit number. Place this number at the front or back of the password.
    - `9514`
- Choose 3 - 4 random words.
    - `Stranger, Austria, Glossary, Water`
- Choose a capitalization scheme for the words, consider alternating each word between upper and lower case.
    - `STRANGER, austria, GLOSSARY, water`

Result:
`STRANGER&austria&GLOSSARY&water&9514?`

Your master password, if forgotten, will prevent you from accessing your other passwords.
This is one situation where you may write the password down and store it in a safe place.
If you are completely confident in your memorization, you may wish to destroy the paper copy by shredding and/or burning.

#### Aside on the security consequences of generating a password in your web browser

The thought of generating your password in a web site is uncomfortable for many.
The claim that the website is not sending data to a server is verifiable with a web browser's development tools, but this is not a verification task an average user is likely to undertake.

I made an offline variant which may interest you: [fmn-passgen](https://github.com/Raymi306/fmn-passgen)

[The Electronic Frontier Foundation offers a system allowing you to generate your passphrase with dice as well.](https://www.eff.org/dice)

### haveibeenpwned

Using [https://haveibeenpwned.com/](https://haveibeenpwned.com/) may encourage you to use a password manager.

This website allows you to check if your emails or passwords have been involved in publicly known data breaches.
You may also enter your email address to be informed of future breaches.

Using seperate passwords for every website makes it such that a breach cannot compromise other accounts with a credential stuffing attack.
However, sometimes information leaked from breaches has consequences related to scamming and doxxing.

### Not-Passwords

Do not use biometric authentication as the sole means of authentication for a device.
Historically, individuals have been legally compelled by state actors to open devices biometrically.
Any unscrupulous entity will also find it easier to force you to open a device with your fingerprint or face rather than make you divulge a password.

Some biometric authentication devices are also trivial to fool.
Several fingerprint scanner designs were defeatable with a black and white paper printout of your fingerprint.

In the realm of multifactor authentication, SMS is not a secure delivery method under any circumstance.
Prefer time-based challenges which can be stored in your password manager or on a phone app when possible.

## Data at Rest
---

Encrypt!
Encrypted data cannot be read without knowledge of the key.

Consider [VeraCrypt](https://veracrypt.eu/en/).
Read their notes on plausible deniability.

If using Unix, a variety of customizable options will be available to you if you wish to use something besides VeraCrypt.
These other options may or may not provide you with plausible deniability.

## Communication
---

### Text Messaging

SMS is NOT secure, assume anything you text is being stored by your service provider and intercepted by anyone interested.

End-to-end encrypted messaging is the goal.
[Signal](https://signal.org/) is a solid choice which also offers audio and video calls.

### Email

[Proton Mail](https://proton.me/mail) offers a free encrypted email account which does not require special effort.
Communication between Proton accounts will also be encrypted.
However, it is still possible to send unencrypted messages to non-Proton accounts.
Thus while your account may be safe from legal requests to divulge your inbox contents, the account you are communicating with may not be.

### PGP

OpenPGP and [GnuPG](https://gnupg.org/) can be used to secure any text conversation regardless of medium or the security of the underlying transport.
It can allow for private communication between parties on an insecure platform such as SMS.
PGP has a perhaps undeserved reputation of being inconvenient for the average user.

### Old School Cryptography

Unbreakable cryptography for securing your messages that can be done with pen and paper has been around since at least 1882 in the form of the [one-time pad](https://en.wikipedia.org/wiki/One-time_pad).
Not very convenient to use correctly though.

## Web Browsing
---

### Browsers

Most browsers are either based on Firefox or based on Chromium, unless you are unfortunate enough to be stuck with an Apple system.
Firefox and Chrome themselves are not particularly great choices for sensitive web browsing.
Security hardened variations on both browsers exist, as well as instructions for configuring or modifying the browsers to resolve certain concerns.

My personal preference remains Firefox, and I strongly recommend installing [UBlock Origin](https://ublockorigin.com/)

### VPN

If your threat model concerns stop at ISP snooping where you are visiting, a VPN is largely sufficient to protect you.
If your concern is that your ISP or another malicious actor monitoring your web traffic can see what you send and receive from websites, [HTTPS](https://en.wikipedia.org/wiki/HTTPS) is generally sufficient protection.

The general principle of operation of a VPN is:
- You establish a secure connection with a remote computer.
- When you attempt to perform any network action, that action travels over your secure connection, the "tunnel", first.
- The end result is that your traffic appears to be originating from the remote computer, not from your own. In other words, your web browsing actions appear to be coming from the remote computer's address rather than yours.

With basic technical knowledge, it is not difficult to create your own VPN.
However, if you are the only one using it, any actions performed by your VPN can still easily be traced back to you if it is clear that you are the owner and operator of the VPN server.

A helpful method of navigating paid VPN options can be found at [windscribe.com](https://windscribe.com/vpnmap).
The service offers context as to the commercial ties that various VPN providers have, and whether or not a provider's claims have been verified by a third party or survived legal attempts to force the provider to divulge information that they claim to not keep.
At the time of writing, [Mullvad](https://mullvad.net/en) is a good choice.

### Tor

From the history of the Tor project:
> The goal of onion routing was to have a way to use the internet with as much privacy
as possible, and the idea was to route traffic through multiple servers and encrypt it
each step of the way. This is still a simple explanation for how Tor works today.

The [Tor Browser](https://www.torproject.org/download/) is the recommended way to use Tor and is fairly user friendly.

Tor can not guarantee your anonymity, individual Tor users have been deanonymized in the past and reading about the mistakes these users made or didn't make may improve your understanding of what Tor can offer.

Security tools such as VPNs and Tor can be layered together as well.

## Phones
---

### Every day

Pixel phones and iPhones generally have the best security hardware and reasonable support periods in which the devices will receive updates.

You may be interested in [GrapheneOS](https://grapheneos.org/) for use on Pixel phones.

Small things, like turning off Bluetooth and NFC when not in use can also be helpful.

### Burners

Depending on your reasoning for using a burner phone, you may want to discard and start over after specific events or on a periodic basis.
Purchase the phone and plan using cash, and be mindful of what personal information you associate with the plan.
For certain threat models, obscuring your appearance and covering your face at time of purchase may be an additional thing to consider.
Your mode of transportation to point of sale is also relevant at this point.
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
Scams leveraging AI can be significantly harder to detect, as images and voices can be generated.
Verify suspicious queries from friends and family with a different band of communication or in person.

## Operating Systems
---

Windows and MacOS have all sorts of fun telemetry and other privacy concerns.
Steps may be taken to modify these operating systems, although each update may require you to perform those steps again.

A commonly recommended entry point into Linux at the time of writing is [Linux Mint](https://linuxmint.com/).
For common computer tasks such as word processing, web browser usage, and most gaming, Linux can at times be indistinguishable from MacOS or Windows.

For operating systems with a specific privacy or security focus, consider:
- [QubesOS](https://www.qubes-os.org/)
- [TailsOS](https://tails.net/)
- [OpenBSD](https://www.openbsd.org/)

## WIPs, TODOs, and things without a proper category yet
---

### Fingerprinting and Metadata

A change in behavior may be suspicious on its own.
Instead of turning your phone off, consider leaving it at home.

What information can be used to uniquely identify you while browsing the web?
- Your choice of browser (User agent headers).
- Plugins (Script and ad blockers).
- The cadence at which you type.
- Linguistic quirks (preferred words, typos, etc.).
- The manner in which you move your mouse.
- The resolution of your monitor.
