---
title: Equipment I Use
description: Wondering what kind of equipment I use to take these fantastic pictures? Read on!
image: /articles/equipment/ASI183mc-460x460.jpg
date: 2020-12-29 00:00:00
category: Equipment
draft: false
---

Below is a listing of the astrophotography equipment I'm currently using. Here you'll see some pictures of complete setups I've used, power sources, and a listing of all the gear.

## Power

If you've seen telescopes being used in the wild, you probably have asked at some point, how do you power all that stuff? Well first, since I'm just in the back yard most of the time, I can just plug it in to a power outlet. But what if I want to go mobile, say, to a dark site or maybe in my RV in the dark mountains in Colorado?

Well as it turns out, most if not all astronomy equipment runs on 12 volts. I decided I just needed enough 12v amp hours to run the equipment all night, so I put together a battery box. See my [battery box build](/articles/equipment/battery-box) for more details about how I built it and the components I used. Weight isn't so much an issue since the mount and tripod are probably the heaviest piece of gear and they're not exactly very portable. If you want a more portable setup check out my [article on portable astrophotography setups](/articles/equipment/portable-astrophotography).

![justify-self-center 12v-Lithium-Battery-Box.jpg](/articles/equipment/12v-Lithium-Battery-Box.jpg)

## Telescopes

- [Explore Scientific ED102-FCD100](https://explorescientificusa.com/products/ed102-fcd-100) is an Air-Spaced Triplet Refractor with a 119mm diameter, 712mm focal length at f/7 focal ratio, magnitude 12.5 and 1.14 arc-second resolution.

- [iOptron Photron™ 6 inch Ritchey-Chrétien Telescope (RC6)](https://www.ioptron.com/product-p/6111.htm) 150mm optical aperture, 1370mm focal length, and f/9 focal ratio.

- [Williams Optics ZenithStar 61 Doublet Refractor](https://williamoptics.com/zenithstar-61) is a portable telescope with a 61mm aperture at f/5.9. It has a focal length of 360mm and a Synthetic Flourite FPL-53 objective lens. It weighs 3.2 lbs and has a dedicated field flattener on the back of it that holds a 2" filter. Its a great little portable scope.

## Cameras

The cameras I use are a combination of DSLR and astrophotography cameras.

- [Nikon D850 (Image courtesy of Nikon, USA)](https://www.nikonusa.com/en/nikon-products/product/dslr-cameras/d850.html) - Top-notch Nikon full-frame DSLR. This camera is a monster.

![D850](/articles/equipment/D850_feature-825x465.jpg)

- [Nikon D5300](https://www.nikonusa.com/en/nikon-products/product/dslr-cameras/d5300.html) - Great all-around half-frame DSLR. Excellent for portability and night sky shots.

![D5300](/articles/equipment/nikon_d5300.jpg)

- [ASI 183MC Pro (color)](https://astronomy-imaging-camera.com/product/asi183mc-pro-color) - a budget color astronomy camera with a decent resolution and pixel size.

![ASI183MC](/articles/equipment/ASI183mc-460x460.jpg)

## Mounts

- iOptron Sky-Guider Pro

![SkyGuiderPro](/articles/equipment/ioptron_skyguider_pro.jpg)

- Explore Scientific EXOS II / PMC-Eight

## Filters & Wheels

- L-Enhance Filter
- L-Extreme Narrowband Filter
- ASI 7-position electronic filter wheel

## Focusers

- Pegasus Focus-Cube 2

## Controllers & Computers

- PMC-Eight Controller for EXOS II mount
- Raspberry Pi Custom Controller for iOptron Skyguider
- Intel NUC for computing platform
- ASUS ZenScreen for visual interaction

### Raspberry Pi

The KStars and EKOS environments can be run on Raspberry Pi under Ubuntu. There are marketed Raspberry Pi projects that cost hundreds of dollars, though the same thing can be achieved using plain Ubuntu Linux and a decent Raspberry Pi. See my Raspberry Pi project write-up to learn more about the project.

### Intel Nuc

An Intel NUC was what I finally decided on for the computer automation involved in taking pictures with the Telescope. I use it with a ASUS Zenscreen which is a portable monitor that has its own battery in it. It was a good choice because the computer has it all - I'm able to run it off of a 12 volt Lithium 100Ah battery, it has a power-efficient CPU, large storage options, I can run dual-boot Windows and Ubuntu Linux, its very small and fits on top of the PMC 8 controller on my mount, and has usb 3 so I can hook as many devices as needed to it. There are more pros as well to having a full-blown computer onboard over a Raspberry Pi, the main one for me being speed. Having a computer next to the telescope in comparison to trying to operate the Raspberry Pi remotely speeds up the process of doing things like manually dialing in your equipment, focusing, framing objects, or taking calibration frames. Lets face it, with calibration frames you're going to need to be next to the telescope anyways at some point.

### Other controller options I've tried

I've tried hand controllers, they're ok if you know how to read the coordinates. I struggled with this for a while until I figured out what DEC and RA is.
