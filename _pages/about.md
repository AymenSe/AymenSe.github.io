---
permalink: /
title: "Aymen Sekhri"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

## Aymen Sekhri

Ph.D. candidate in machine learning (cotutelle) at **University of Poitiers (France)** and **NTNU (Norway)**.

My research sits at the intersection of **computer vision**, **augmented reality**, and **medical imaging**. I develop learning-based methods that connect **human visual perception** with **objective image quality assessment**, with a focus on immersive AR experiences and clinically relevant imaging workflows.

## Current PhD research

- **AR visual quality assessment:** building blind/no-reference quality metrics for augmented reality content.
- **Perceptual modeling:** designing lightweight transformer models guided by human ranking feedback.
- **Reliable AI for imaging:** improving interpretability and robustness for medical imaging tasks, including knee osteoarthritis severity grading.

## Academic affiliations

- **Université de Poitiers**, XLIM Laboratory, France.
- **Norwegian University of Science and Technology (NTNU)**, Colourlab / Department of Computer Science, Gjøvik, Norway.

## Selected publications

{% assign recent_publications = site.publications | sort: 'date' | reverse %}
<ul class="publication-list">
  {% for pub in recent_publications limit: 6 %}
    <li>{% include publication-card.html entry=pub %}</li>
  {% endfor %}
</ul>

[Full publication list →]({{ '/publications/' | relative_url }})

## Research themes and contributions

### Immersive media and AR quality
- Proposed AR-focused blind IQA approaches (including ARaBIQA and transformer-based lightweight metrics).
- Worked on model distillation strategies to improve efficiency while preserving perceptual performance.

### Medical imaging AI
- Developed Swin Transformer-based systems for automated knee osteoarthritis assessment.
- Explored domain adaptation and localization-aware modeling in clinically oriented computer vision pipelines.

## Collaboration

I am co-advised by **Prof. Mohamed-Chaker Larabi** and **Prof. Seyed Ali Amirshahi**. I welcome collaborations in AR/VR quality assessment, perceptual modeling, and applied machine learning for medical imaging.

Contact: <a href="mailto:aymen.sekhri@univ-poitiers.fr">aymen.sekhri@univ-poitiers.fr</a>
