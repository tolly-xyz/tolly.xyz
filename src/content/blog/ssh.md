---
title: My New Blog Post
date: 2024-09-09
tags: [test, post]
draft: false
---

# ssh for webdev

## why care?

if you have spent any time on x dot com, the everything app, the past few
weeks, you have probably seen mentions of hosting websites on a VPS (in
contrast to a managed platform like v\*rcel). while it probably doesn't matter
what method you choose to host your side project receiving peak traffic of 17
requests/week, getting familiar with remote servers and how to use them is a
great way to grow your skillset as a developer. it's also a great way to get
practice using the terminal, especially if you don't have access to a linux
machine otherwise. while the overall idea behind connecting to a remote server
with ssh is fairly simple, there are some minor details that are helpful to
understand when doing so for development, especially if you are someone that
often finds yourself running `npm run dev` or similar.

## what is ssh?

[ssh](https://en.wikipedia.org/wiki/Secure_Shell) is short for "secure
shell". as the name suggests, it provides a secure way to get command line
access to a remote computer (such as a VPS in the cloud). it was introduced
intending to improve on insecure protocols such as
[telnet](https://en.wikipedia.org/wiki/Telnet), which transmit all data
(including passwords for authenticating the connection) in plain text. ssh, in
contrast, authenticates with public key cryptography, and encrypts all traffic
it sends and receives.
