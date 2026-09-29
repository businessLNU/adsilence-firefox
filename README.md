# AdSilence for Firefox — built add-on (Manifest V3)

[![Firefox Add-ons](https://img.shields.io/badge/Firefox-Add--ons-FF7139?logo=firefoxbrowser&logoColor=white)](https://addons.mozilla.org/firefox/addon/adsilence/)
[![License: GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](LICENSE)

The built release of **AdSilence**, a free, open-source ad blocker for Firefox on desktop and Android. Version 1.0.3.

It blocks ads, trackers, pop-ups, malware addresses and cookie banners, and it does **not** request the `webRequest` permission: Firefox applies the rules itself.

## Install

The easiest way: [AdSilence on Firefox Add-ons](https://addons.mozilla.org/firefox/addon/adsilence/). Requires Firefox 140 or newer (Android: 142 or newer).

To load this build temporarily for testing:

1. Download the ZIP from [Releases](../../releases)
2. Open `about:debugging#/runtime/this-firefox`
3. Click **Load Temporary Add-on** and select the ZIP file

## About this repository

This repository is written automatically by the release pipeline. Every version matches, file for file, what is published on Firefox Add-ons — so you can check exactly what you install.

The source code lives in [businessLNU/adsilence](https://github.com/businessLNU/adsilence).

## Links

- Website: [adsilence.net](https://adsilence.net)
- Chrome version: [adsilence-chromium](https://github.com/businessLNU/adsilence-chromium)
- Bugs and questions: [Issues](../../issues)
