---
title: "Month Notes - September 2024"
pubDate: "Oct 01 2024"
description: "Professional and professional adjacent things I accomplished in September 2024"
tags: ["month notes"]
---

## At Work

I attended WordCamp US in Portland. I have been lucky enough to attend WordCamp for the past three years and always enjoy the opportunity to connect with the larger WordPress community.

This year at Contributor Day I worked with the theme team and made a few small contributions to the TwentyTwenty Five default theme that will be shipping later this year.

## Side Projects

I released a small WordPress plugin called **[Exif Remover](https://wordpress.org/plugins/exif-remover/)** that removes EXIF data from images on upload. If EXIF data isn't removed, it can leak information about the camera used, location data, etc.

I released a new version of my **[Block AI Crawlers](https://wordpress.org/plugins/block-ai-crawlers)** WordPress plugin. It adds blocking for a few additional AI services.

Even though I work in WordPress every day, I don't have an active site running WordPress. To change that, I revised and [an archive of flyers for punk shows in Grand Rapids](https://grpunkflyers.winesapdesign.com/). I had originally launched the archive on WordPress.com but it was just [one big gallery](https://grpunkflyers.winesapdesign.com/flyers/) and there was no text describing the flyers or organization. To change this, I wrote a Node script to parse through the image files, ran OCR against them, and loaded them as draft posts. This will allow the archive to be more useful. I also gave the site a modern theme that I create by modifying the default TwentyTwenty Four theme. Overall, it was a valuable learning opporutunity.

I forked an copy of [an unofficial API for Backloggd](https://github.com/bobmatyas/Backloggd-API) and made a few modifications. I'm planning to eventually use it to track video games I am playing. It was fun way some practice using [Cheerio](https://cheerio.js.org/docs/intro) for web scraping.

## WordPress Vulnerabilty Research

I found and responsibly disclosed in the following vulnerabilities in WordPress plugins:

- [WP ULike < 4.7.4 - Admin+ Stored XSS](https://wpscan.com/vulnerability/9166cf91-69e5-4786-a6a9-816db7d47b07/)
- [Backup Database <= 4.9 - Admin+ Stored XSS](https://wpscan.com/vulnerability/2199ef66-25bd-4eb4-a675-d8b30f047847/)
- [Polls CP <= 1.0.75 - Admin+ Stored XSS via Custom Styles](https://wpscan.com/vulnerability/bffe0f75-33a2-4270-af13-835b8eb65688/)
- [GDPR Cookie Consent <= 2.6.0 - Bulk Delete via CSRF](https://wpscan.com/vulnerability/628bbac0-76b1-4666-9c00-bae84b48f85c/)
- [Page Builder: Pagelayer < 1.9.0- Admin+ Stored XSS](https://wpscan.com/vulnerability/acddcf33-0a18-499e-b42d-c8b49f2c4de5/)
- [Z-Downloads < 1.11.7 - Admin+ Stored XSS via SVG Upload](https://wpscan.com/vulnerability/fed2cd26-7ccb-419d-b589-978410953bf4/)
- [AVIF & SVG Uploader <= 1.1.0 - Author+ Stored XSS via SVG Uplaod](https://wpscan.com/vulnerability/a7de0cf6-3064-4595-9037-f8407fe40724/)
- [Event Calendar <= 1.0.4 - Admin+ Stored XSS](https://wpscan.com/vulnerability/707d4b5b-8efe-4010-ba7d-80538545a2d5/)
- [Event Calendar <= 1.0.4 - Unauthenticated Arbitrary Calendar Deletion](https://wpscan.com/vulnerability/8c48b657-afa1-45e6-ada6-27ee58185143/)