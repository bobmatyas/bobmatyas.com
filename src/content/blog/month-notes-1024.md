---
title: "Month Notes - October 2024"
pubDate: "Nov 10 2024"
description: "Professional and professional adjacent things I accomplished in October 2024."
tags: ["month notes"]
---

## At Work

Work has been very busy, not a lot to report. I did manage to get my dev environment configured and made [a small PR](https://github.com/Automattic/jetpack/pull/39974) to [Jetpack Boost](https://wordpress.org/plugins/jetpack-boost/).

## Side Projects

- I configured all of [my WordPress plugins](https://profiles.wordpress.org/lastsplash/#content-plugins) to deploy via GitHub. I'm much more familiar with Git, so it is a lot easier for me to release updates.
- I migrated this site from [GatsbyJS](https://www.gatsbyjs.com/) to [Astro](https://astro.build/). Astro is a lot simpler to use and I haven't spent any time chasing down broken builds. It's nice to see the production site using minimal JavaScript. I'll probably blog about it in more detail at some point in the future.
- I experimented with using ChatGPT to generate some quick Node plugins to scrape data from external sources. I don't do much scraping, so it has been nice to get a quick headstart.

## WordPress Vulnerabilty Research

I found and responsibly disclosed in the following vulnerabilities in WordPress plugins:

- [Media Library Tools < 1.5.0 - Author+ Stored XSS via SVG](https://wpscan.com/vulnerability/46cbd4bb-b6f3-49e8-8d79-8c378c617e7c)
- [Alphabetical List <= 1.0.3 - Settings Update via CSRF](https://wpscan.com/vulnerability/9bc18c41-fc4c-48c9-bcec-323c502ae620)
- [RSS Feed Widget < 3.0.1 - Reflected XSS](https://wpscan.com/vulnerability/0277b060-805d-4b85-b5a4-fa93a731cd8d)
- [RSS Feed Widget < 3.0.0 - Contributor+ Stored XSS](https://wpscan.com/vulnerability/f87af54e-3e58-4c29-8a30-e7d52234c9d4)
- [Registrations for The Events Calendar < 2.12.4 - Unauthenticated Stored XSS](https://wpscan.com/vulnerability/d79e1e9c-980d-4974-bfbd-d87d6e28d9a6)
- [Post From Frontend <= 1.0.0 - Post Deletion via CSRF](https://wpscan.com/vulnerability/ea501d37-1ec2-43ec-873a-ec204e965f60)
- [AVIF & SVG Uploader <= 1.1.0 - Author+ Stored XSS via SVG Uplaod](https://wpscan.com/vulnerability/a7de0cf6-3064-4595-9037-f8407fe40724)
- [Page Builder: Pagelayer < 1.9.0 - Admin+ Stored XSS](https://wpscan.com/vulnerability/acddcf33-0a18-499e-b42d-c8b49f2c4de5)

I found several more, but the disclosure is always somewhat delayed.