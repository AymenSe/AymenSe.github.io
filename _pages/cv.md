---
layout: page
permalink: /cv/
title: "CV"
subtitle: "PhD researcher in machine learning and computer vision, Poitiers & Gjøvik."
description: "Curriculum vitae of Aymen Sekhri — education, research positions, publications and research interests."
redirect_from:
  - /resume/
---

## Education

<ul class="timeline">
  <li>
    <span class="timeline__when">2023 – 2026</span>
    <div>
      <p class="timeline__what">PhD in Computer Science (cotutelle)</p>
      <p class="timeline__where">University of Poitiers, France · NTNU, Norway</p>
      <ul>
        <li>Perceptual quality assessment for augmented reality.</li>
        <li>Advisors: Prof. Mohamed-Chaker Larabi and Prof. Seyed Ali Amirshahi.</li>
      </ul>
    </div>
  </li>
  <li>
    <span class="timeline__when">until 2022</span>
    <div>
      <p class="timeline__what">Engineering studies in Computer Science</p>
      <p class="timeline__where">Specialisation in machine learning and computer vision</p>
    </div>
  </li>
</ul>

## Research

<ul class="timeline">
  <li>
    <span class="timeline__when">2023 – present</span>
    <div>
      <p class="timeline__what">Doctoral researcher</p>
      <p class="timeline__where">XLIM, University of Poitiers · Colourlab, NTNU Gjøvik</p>
      <ul>
        <li>Subjective and objective quality assessment for augmented reality, including the ARIQA-3DS stereoscopic dataset and its 36-participant HMD study.</li>
        <li>Blind image quality metrics built on efficient transformer architectures.</li>
        <li>Cross-laboratory experimental design and reproducible evaluation pipelines.</li>
      </ul>
    </div>
  </li>
  <li>
    <span class="timeline__when">2022 – 2024</span>
    <div>
      <p class="timeline__what">Medical imaging AI — collaborative projects</p>
      <p class="timeline__where">With Université d'Orléans (PRISME) and partners</p>
      <ul>
        <li>Knee osteoarthritis severity grading from radiographs with Swin Transformers.</li>
        <li>Domain adaptation and localisation-aware modelling for clinical computer vision.</li>
      </ul>
    </div>
  </li>
</ul>

## Research interests

- Blind / no-reference image quality assessment
- Augmented and mixed reality visual experience modelling
- Transformer architectures and distillation for perceptual AI
- Medical image analysis and trustworthy computer vision

## Publications

{% assign pubs = site.publications | sort: 'date' | reverse %}
<ul class="pub-list">
  {% for p in pubs %}
    {% include pub-item.html p=p %}
  {% endfor %}
</ul>

## Profiles

- **Google Scholar** — <a href="https://scholar.google.com/citations?user=n70fgO4AAAAJ" rel="noopener" target="_blank">citations and metrics</a>
- **ORCID** — <a href="https://orcid.org/0000-0002-0958-9478" rel="noopener" target="_blank">0000-0002-0958-9478</a>
- **ResearchGate** — <a href="https://www.researchgate.net/profile/Aymen-Sekhri" rel="noopener" target="_blank">Aymen Sekhri</a>
- **GitHub** — <a href="https://github.com/AymenSe" rel="noopener" target="_blank">AymenSe</a>
- **LinkedIn** — <a href="https://www.linkedin.com/in/aymensekhri1/" rel="noopener" target="_blank">aymensekhri1</a>
