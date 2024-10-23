---
title: "Month Notes - August 2024"
pubDate: "Sep 01 2024"
description: "Professional and professional adjacent things I accomplished in August 2024"
tags: ["month notes"]
---

This is the first in a series of [month notes](/blog/tags/month-notes) where I am going to share things I have been working on. 

## At Work

I became the Editor-in-Chief of documentation on [Jetpack.com](https://jetpack.com/). I'll be reviewing new documentation and finding gaps in existing documentation.

## WordPress Plugins

I published a new plugin for WordPress called [Pretty RSS Feeds](https://wordpress.org/plugins/pretty-rss-feeds/) It applies an XML Stylesheet ([pretty-feed-v3](https://github.com/genmon/aboutfeeds/blob/main/tools/pretty-feed-v3.xsl) to make the default RSS feed display in a more inviting way to newcomers to RSS feeds.

I also published a new version of my [Block AI Crawlers](https://wordpress.org/plugins/block-ai-crawlers/) plugin that fixes a bug in the settings display and blocks new crawlers.

## WordPress Vulnerability Research

The following plugin vulnerabilities were responsibly disclosed:

- [Sign-up Sheets < 2.2.13 - Reflected XSS](https://wpscan.com/vulnerability/f3526320-3abd-4ddb-8f73-778741bd9c48)
- [CTT Expresso para WooCommerce < 3.2.13 - Admin+ Stored XSS](https://wpscan.com/vulnerability/39a78741-eeae-4a27-8136-7d0bb0bf2263)
- [Secure Copy Content Protection and Content Locking < 4.1.7 - Admin+ Stored XSS](https://wpscan.com/vulnerability/f4df74c2-4c95-4d1c-97c1-ebfc225f6b93)
- [DN Popup <= 1.2.2 - Settings Update via CSRF](https://wpscan.com/vulnerability/1f941d51-1eaf-424a-95b8-ccaa3fdd339b)
- [Flaming Forms <= 1.0.1 - Unauthenticated Stored XSS](https://wpscan.com/vulnerability/d30a3b95-5d1f-4755-8b61-19946afc51ef)
- [Flaming Forms <= 1.0.1 - Reflected XSS](https://wpscan.com/vulnerability/5e9f98ef-5a44-4a0c-b9cd-ce750bec74f9)
- [SmartSearchWP <= 2.4.4 - Unauthenticated Log Purge](https://wpscan.com/vulnerability/d48fdab3-669c-4870-a2f9-6c39a7c25fd8)
- [NinjaTeam Header Footer Custom Code <= 1.2 - Admin+ Stored XSS via CSS Styles](https://wpscan.com/vulnerability/9c5efe3c-95a8-4647-86c0-20aa7dd92b66)
- [Pocket Widget <= 0.1.3 - Admin+ Stored XSS](https://wpscan.com/vulnerability/b1697646-1090-4a2b-9987-cec07428378e)
- [AZIndex <= 0.8.1 - Stored XSS via CSRF](https://wpscan.com/vulnerability/b861f18a-40ae-4989-a8e4-37df1771ae23)
- [AZIndex <= 0.8.1 - Index Deletion via CSRF](https://wpscan.com/vulnerability/6c1d4354-b88b-46ca-b25a-efb9518f4955)
- [Snapshot Backup <= 2.1.1 - Stored XSS via CSRF](https://wpscan.com/vulnerability/4463785c-55db-4f86-80a2-ada4d2241e5e)
- [kbucket < 4.1.5 - Reflected XSS](https://wpscan.com/vulnerability/d2b8ca6c-2b14-4d72-8e39-0f3ca5c23f56)
- [WP Content Copy Protection & No Right Click (premium) <= 15.0 - Admin+ Stored XSS](https://wpscan.com/vulnerability/2b1af7eb-452a-43f4-aae9-edd8e7312fe8)
- [Logo Manager For Enamad <= 0.7.1 - Admin+ Stored XSS via Widget](https://wpscan.com/vulnerability/37b5ed06-0633-49e0-b47d-8aa2f4510179)
