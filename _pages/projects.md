---
layout: page
permalink: /projects/
title: "Projects"
subtitle: "The research threads behind the papers, and the code that came out of them."
description: "Research projects by Aymen Sekhri — AR quality datasets, lightweight perceptual metrics, and medical imaging models."
---

<ul class="cards">
  {% for p in site.data.projects %}
  <li class="card">
    <h2 class="card__title">{{ p.title }}</h2>
    <p class="card__meta">{{ p.period }}</p>
    <p class="card__desc">{{ p.description }}</p>

    {% if p.points %}
    <ul>
      {% for point in p.points %}<li>{{ point }}</li>{% endfor %}
    </ul>
    {% endif %}

    {% if p.links %}
    <p class="pub-links" style="margin-top:.9rem">
      {% for l in p.links %}
        <a class="pub-links__item" href="{{ l.url }}" rel="noopener" target="_blank">{{ l.label }}</a>
      {% endfor %}
    </p>
    {% endif %}

    {% if p.tags %}
    <ul class="card__tags">
      {% for t in p.tags %}<li><span class="tag">{{ t }}</span></li>{% endfor %}
    </ul>
    {% endif %}
  </li>
  {% endfor %}
</ul>

<div class="section-head">
  <h2>Code</h2>
  <a href="https://github.com/AymenSe" rel="noopener" target="_blank">github.com/AymenSe →</a>
</div>

Reference implementations for the papers, plus experiments that did not make it into one,
are on GitHub. Anything released alongside a publication is linked from that paper's page.
