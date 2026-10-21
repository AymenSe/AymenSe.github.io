---
title: "Enhancing Content Representation for AR Image Quality Assessment Using Knowledge Distillation"
date: 2026-01-15
authors: "A. Sekhri, S. A. Amirshahi, M.-C. Larabi"
venue: "IEEE Transactions on Circuits and Systems for Video Technology"
venue_short: "IEEE TCSVT"
type: journal
topics: [ar, iqa]
doi: "10.1109/tcsvt.2026.3673101"
arxiv: "2412.06003"
---

Augmented reality enriches our perception of reality by overlaying digital content onto physical environments, but visual confusion and classical distortions can leave users uncomfortable. Measuring AR quality of experience is therefore essential — yet data scarcity and the distinctive characteristics of AR make effective metrics hard to build.

This paper presents a deep-learning objective metric designed specifically for AR image quality. The approach has four steps: (1) fine-tuning a self-supervised pre-trained vision transformer to extract prominent features from reference images and distilling that knowledge to improve representations of distorted images, (2) quantifying distortions by computing shift representations, (3) employing cross-attention-based decoders to capture perceptual quality features, and (4) integrating regularisation and label smoothing to address overfitting.

Extensive experiments on the ARIQA dataset show that all model variants — TransformAR, TransformAR-KD and TransformAR-KD+ — outperform existing state-of-the-art methods.
