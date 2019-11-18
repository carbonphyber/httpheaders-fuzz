# httpheaders-fuzz

![License: MIT](https://img.shields.io/github/license/carbonphyber/httpheaders-fuzz?style=for-the-badge)


## What
This project aims to identify and clarify the differences in the ways in which multiple popular reverse proxy web servers treat HTTP headers.

There are multiple RFC specs which define how headers should be handled, but threre is some amibguity in the undefined areas and not all software adheres strictly to spec.

One goal is to make the results both easily digestable and easily reproducible+verifiable.

One hope is that this could become a proving ground for how new web servers could be tested. This is similar to how [Acid Tests](https://www.acidtests.org/) are standardized tests for how web browsers *should* render Cascading Style Sheets ("CSS"), which is the final rendered product of how a plethora of different rules are evaluated, interpreted, and applied.

Clearly major web servers are highly configurable and the reults may not represent *how* they *could* be configured, but how they *are* configured in a default configuration (usually the Docker release based on Alpine Linux images).

## Why
If multiple web servers are set up in series (as is very common in non-trivial web systems), there is the possibility of multiple classes of errors and security vulnerabilities.

Having an easily comprehendable matrix of how different servers handle HTTP headers generated in a reproduceable way would help the entire web development industry (as well as penetration testers and malicious actors) know how best to identify weaknesses in a website system.

Additionally, some web server infrastructure products are asserted to work and be secure *only* *if* the documented configuration is followed, but anytime non-trivial and/or non-default settings are expected, there is the possibility of misconfiguration. At some point in the future, a product of this repo could be used to identify misconfigurations in specific networks.

### Known security weaknesses

Classes of vulnerabilities to web systems which are related or tangentially related to this work include:

  - HTTP Desync attacks
  - Web Cache Deception
  - Web Cache Poisoning


## How
This repo is structured as a client (`fuzzer/`) and multiple servers (`servers/`) including popular reverse proxies such as:

  - [NginX](https://github.com/nginx/nginx)
  - [HAProxy](https://github.com/haproxy/haproxy)
  - [Apache httpd](https://github.com/apache/httpd)

We welcome Pull Requests for new servers (please Dockerize and have the basic server configuration built into the directory and assembled by the Dockerfile) and even just submitting GitHub Issues to request specific servers.

Some interesting future servers could include proprietary servers, SaaS products, major Content Delivery Networks ("CDNs") edge servers, and cloud vendor Load Balancers.

## Who
This repo was created by David WOrtham a security researcher / web applications developer at [Balbix, Inc.](https://www.balbix.com/).
