---
title: "Lightweight Image Quality Prediction Guided by Perceptual Ranking Feedback"
date: 2025-04-06
authors: "A. Sekhri, M.-C. Larabi, S. A. Amirshahi"
venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)"
venue_short: "ICASSP 2025"
type: conference
topics: [iqa, efficiency]
doi: "10.1109/icassp49660.2025.10888173"
code: "https://github.com/AymenSe/LT-QFR-ICASSP-2025"
---

Quality models are usually trained to regress absolute scores, even though human observers are far more consistent when *ranking* two images than when assigning a number to one. This paper exploits that asymmetry.

We introduce a ranking-guided training strategy for lightweight quality prediction: perceptual ordering feedback is folded into the objective so that the model is rewarded for getting pairwise comparisons right, not just for minimising score error. The result is better calibration and stronger pairwise consistency at a small model size.
