# AdSilence for Firefox — Free Ad Blocker Add-on (Manifest V3)

[![Firefox Add-ons](https://img.shields.io/badge/Firefox-Add--ons-FF7139?logo=firefoxbrowser&logoColor=white)](https://addons.mozilla.org/firefox/addon/adsilence/)
[![License: GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](LICENSE)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-success)](https://github.com/businessLNU/adsilence)

The built release of **AdSilence**, a free, open-source **ad blocker for Mozilla Firefox** on desktop and **Firefox for Android**. Version 1.0.3.

AdSilence is an **ad blocker**, **pop-up blocker**, **tracker blocker** and **cookie banner blocker** in one Firefox add-on. It does **not** request the `webRequest` permission: Firefox applies the rules itself through `declarativeNetRequest`, so your browsing history never passes through us. No telemetry, no account, no acceptable-ads whitelist.

## What it blocks — free, no account

- Ads, video ads and sponsored content
- **YouTube ads**, using uBlock Origin's YouTube filters and scriptlets
- Pop-ups, pop-unders and forced redirects
- Trackers, analytics and disguised first-party trackers
- Malware and malvertising domains (URLhaus)
- Cookie consent banners (GDPR pop-ups)
- Sponsored posts on Facebook and Instagram

32 filter lists including EasyList, EasyPrivacy and uBlock filters; the regional list for your browser language is switched on automatically.

**Premium (optional):** fingerprint protection, automatic cookie consent answers and phishing warnings.

## Install in Firefox

The easiest way: **[AdSilence on Firefox Add-ons](https://addons.mozilla.org/firefox/addon/adsilence/)**. Requires Firefox 140 or newer, Firefox for Android 142 or newer.

To load this build temporarily for testing:

1. Download the ZIP from [Releases](../../releases)
2. Open `about:debugging#/runtime/this-firefox`
3. Click **Load Temporary Add-on** and select the ZIP file

## Measured

100 of 100 points on [adblock-tester.com](https://adblock-tester.com/) with factory settings (5 September 2026, version 1.0.0, measured in Chrome). Method and comparison: [adsilence.net/en/adblocker-test](https://adsilence.net/en/adblocker-test)

## FAQ

**Is this the same as the Firefox Add-ons version?**
Yes. This repository is written automatically by the release pipeline, and every version matches the package on Firefox Add-ons file for file — so you can check exactly what you install.

**Does it work on Firefox for Android?**
Yes, from Firefox 142 on Android.

**Where is the source code?**
In [businessLNU/adsilence](https://github.com/businessLNU/adsilence), under the GNU GPL v3.

## Links

- Website: [adsilence.net](https://adsilence.net)
- Ad blocker for Firefox: [adsilence.net/en/adblocker-for-firefox](https://adsilence.net/en/adblocker-for-firefox)
- Chrome version: [adsilence-chromium](https://github.com/businessLNU/adsilence-chromium)
- Bugs and questions: [Issues](../../issues)

---

**Keywords:** Firefox ad blocker · ad blocker for Firefox · adblock Firefox · Firefox add-on · Firefox for Android ad blocker · free ad blocker · open source ad blocker · Manifest V3 · YouTube ad blocker · pop-up blocker · tracker blocker · anti-tracking · cookie banner blocker · privacy add-on · malware blocker · Werbeblocker für Firefox · bloqueur de pub Firefox

