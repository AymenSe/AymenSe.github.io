---
layout: home
permalink: /
title: "About"
description: "PhD researcher working on perceptual image quality assessment for augmented reality and trustworthy computer vision for medical imaging."
redirect_from:
  - /about/
  - /about.html
---

<section class="intro">
  <div>
    <h1 class="intro__name">Aymen Sekhri</h1>
    <p class="intro__role">
      PhD researcher in machine learning and computer vision.<br>
      Cotutelle between <strong>XLIM, University of Poitiers</strong> and <strong>Colourlab, NTNU</strong>.
    </p>
    {% include social-links.html %}
  </div>
  <img class="intro__photo" src="{{ site.author.avatar | relative_url }}" alt="Aymen Sekhri" width="120" height="120">
</section>

<p class="lead">
I build models that measure what people actually see. My work sits between
<strong>perceptual science</strong> and <strong>efficient deep learning</strong>: image quality
metrics for augmented reality, and trustworthy computer vision for medical imaging.
</p>

Augmented reality breaks most of the assumptions image quality metrics are built on. The
viewport is a composite — a captured real scene underneath, a rendered virtual layer on
top — and the two interfere perceptually in a way that no reference image can describe.
I work on blind metrics that handle this directly, and on making them small enough to run
on the device doing the rendering.

The same question shows up in medical imaging from the other side: when a model's output
feeds a diagnosis, you need to know which local structures it is actually looking at.

## Research directions

- **Blind quality assessment for AR** — metrics for composited real/virtual content, including the distortions and visual confusion unique to immersive pipelines.
- **Perceptual supervision** — training on human ranking feedback rather than absolute scores, because that is what observers are consistent at.
- **Efficient perceptual models** — knowledge distillation and compact transformers that keep perceptual accuracy at a fraction of the compute.
- **Trustworthy medical imaging AI** — localisation-aware architectures and domain adaptation for radiographic severity grading.

<div class="section-head">
  <h2>Selected publications</h2>
  <a href="{{ '/publications/' | relative_url }}">All {{ site.publications | size }} →</a>
</div>

{% assign selected = site.publications | sort: 'date' | reverse %}
<ul class="pub-list">
  {% for p in selected limit: 5 %}
    {% include pub-item.html p=p %}
  {% endfor %}
</ul>

<div class="section-head">
  <h2>News</h2>
</div>

<ul class="news">
  {% for item in site.data.news limit: 5 %}
    <li>
      <time datetime="{{ item.date }}">{{ item.date | append: '-01' | date: "%b %Y" }}</time>
      <p>{{ item.text }}</p>
    </li>
  {% endfor %}
</ul>

<div class="section-head">
  <h2>Get in touch</h2>
</div>

I am co-advised by **Prof. Mohamed-Chaker Larabi** (University of Poitiers) and
**Prof. Seyed Ali Amirshahi** (NTNU). I am happy to hear from anyone working on AR/VR
quality, perceptual modelling, or applied machine learning for medical imaging —
collaborations, reviews, or just a question about one of the papers.

<a class="pub-links__item" href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
