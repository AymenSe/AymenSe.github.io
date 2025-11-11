---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Profile

Doctoral researcher focusing on machine learning for perceptual quality assessment and medical image analysis. I work across the University of Poitiers (France) and the Norwegian University of Science and Technology (Norway) to design computer vision systems that align quantitative metrics with human visual perception.

## Education

* **Ph.D. in Machine Learning (cotutelle)** — University of Poitiers & NTNU, 2022 – present  
  Advisors: Mohamed-Chaker Larabi & Seyed Ali Amirshahi · Thesis focus on perceptual quality for immersive media and diagnostic imaging.
* **Graduate studies in Computer Science** — Algeria, 2018 – 2022  
  Coursework and research centred on computer vision, signal processing, and applied machine learning.

## Research experience

* **Doctoral Researcher, REALISME Project** — University of Poitiers & NTNU, 2022 – present  
  Lead the development of multimodal datasets and deep learning pipelines for evaluating visual comfort in augmented reality. Coordinate experimentation across French and Norwegian laboratories and supervise student projects on perceptual studies.
* **Machine Learning Researcher, Medical Imaging Collaborations** — 2023 – present  
  Design transformer-based architectures for automatic grading of knee osteoarthritis severity. Responsible for benchmarking across public radiographic datasets and aligning outputs with clinical decision workflows.

## Technical skills

* Machine learning: deep representation learning, transformer architectures, domain adaptation.
* Computer vision: perceptual quality assessment, radiographic image analysis, 3D/AR rendering pipelines.
* Tooling: Python, PyTorch, TensorFlow, OpenCV, Docker, Git, experiment tracking with Weights & Biases.

## Publications

<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

## Talks

<ul>{% for post in site.talks reversed %}
  {% include archive-single-talk-cv.html  %}
{% endfor %}</ul>

## Teaching

<ul>{% for post in site.teaching reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

## Service and outreach

* Reviewer for IEEE conferences and journals in multimedia signal processing.
* Mentor for student-led projects exploring augmented reality and medical imaging applications of AI.
