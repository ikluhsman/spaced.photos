---
title: The Veil Nebula
description: The Veil Nebula
category: Nebulae
image: /catalogue/20201118-Veil-Nebula.jpg
date: 2020-12-07 19:00:00
draft: false
---

## 11-18-2020 Witch's Broom First Attempt

My first attempts at the Veil Nebula were with the Williams Optics ZenithStar 61 scope, at 360mm. It turned out ok, though I think processing could have been much better, and I think at some point I might try to re-process the original data I have from this image. In any case, take a look at this one, and then my better image to see how my processing and equipment have improved the image.  
  
[![w-full 20201118-Veil-Nebula.jpg](/catalogue/20201118-Veil-Nebula.jpg)](/photos/2020/november/20201118-veil-nebula)

* Camera: ZWO CCD ASI183MC Pro
* Telescope: Williams Optics ZenithStar 61
* Mount: Explore Scientific EXOS II w/PMC-Eight
* Aperture: 61mm
* Focal Length: 360mm
* Focal Ratio: f/5.9
* Exposure Length: 240s (4 min)
* Total Exposures: 23
* Integrated Exposures: 23
* Total Exposure Minutes: 92 min
* Integrated Exposure Minutes: 92min
* Calibration Frames: Flat, Dark, Bias
* Image Acquisition Tool: KStars/EKOS
* Guiding Software: KStars/EKOS
* Integration/Calibration: PixInsight
* Image Processing: PixInsight  
  
I became quite fascinated with this target after seeing some other images of it online. This next image is quite possibly my favorite photo that I've taken thus far. I'm really excited about how this one turned out! I used the ED102 Telescope with the L-Extreme Optolong filter to filter in the hydrogen and oxygen strands in the Witch's Broom Nebula, and it turned out very nice.  

## 12-06-2020 Witch's Broom Second Attempt

![w-full 20201206-Veil-Nebula.jpg](/catalogue/20201206-Veil-Nebula.jpg)  
  
* Camera: ZWO CCD ASI183MC Pro
* Filter: Optolong L-Extreme
* Telescope: Explore Scientific ED102-FCD100
* Mount: Explore Scientific EXOS II w/PMC-Eight
* Aperture: 102mm
* Focal Length: 714mm
* Focal Ratio: f/7
* Exposure Length: 300s (5 min)
* Total Exposures: 25
* Integrated Exposures: 23
* Total Exposure Minutes: 125 min
* Total Integrated Minutes: 115 min
* Calibration: Flat, Dark, Bias
* Image Acquisition Tool: KStars/EKOS
* Guiding Software: KStars/EKOS
* Integration/Calibration: PixInsight
* Image Processing: PixInsight

I processed this fairly carefully in PixInsight, my skills are getting better but there are still some pieces I'm putting together in terms of how to properly process nebulae images. I'm getting pretty darn close now though. I now understand having the proper calibration frames for your workflow really helps a lot.

In PixInsight, the process went something like:

1. Dynamic Background Extraction
1. Background Neutralization
1. Color Calibration
1. SCNR
1. Histogram Transformation
1. Multiscale Linear Transform
1. Morphological Transformation on Star Mask
1. Curves Transformation
1. ACDNR on Master
1. Decovolution w/Range Mask
1. Curves Transform w/Range Mask
1. Unsharp Mask to clean up detail
1. Curves Transform to finalize

Update: I don't think this process is quite proper, I've learned a bit since and I think there is a little more to consider before jumping into histogram transformation. In any case I might write a couple articles on processes I use in PixInsight for particular types of targets.
