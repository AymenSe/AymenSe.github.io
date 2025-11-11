---
permalink: /
title: "Aymen Sekhri"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---
<div class="landing-hero">
  <p class="landing-hero__lead">Ph.D. candidate in machine learning · University of Poitiers & NTNU</p>
  <p class="landing-hero__description">
    I design trustworthy computer vision systems for immersive media and clinical imaging, bridging perceptual studies with deep learning models.
  </p>
  <div class="landing-hero__actions">
    <a class="btn btn--large" href="{{ '/publications/' | relative_url }}">Explore publications</a>
    <a class="btn btn--outline btn--large" href="{{ '/cv/' | relative_url }}">View CV</a>
  </div>
</div>

## Research focus

- Machine learning for perceptual image and video quality, with an emphasis on augmented and mixed reality scenarios.
- Deep neural architectures for medical imaging diagnostics, particularly localisation-aware models for musculoskeletal health.
- Human-centric evaluation pipelines that connect subjective experiments with reproducible computational metrics.

## Latest publications

{% assign recent_publications = site.publications | sort: 'date' | reverse %}
<ul class="publication-list">
  {% for pub in recent_publications limit: 3 %}
    <li>{% include publication-card.html entry=pub %}</li>
  {% endfor %}
</ul>

<p><a class="publication-card__link" href="{{ '/publications/' | relative_url }}">Complete list of publications →</a></p>

## Research highlights

<div class="project-grid">
  {% for project in site.data.projects %}
    <article class="project-card">
      <h3 class="project-card__title">{{ project.title }}</h3>
      <p class="project-card__role">{{ project.role }} · {{ project.period }}</p>
      <p>{{ project.description }}</p>
      {% if project.highlights %}
        <ul class="project-card__highlights">
          {% for item in project.highlights %}
            <li>{{ item }}</li>
          {% endfor %}
        </ul>
      {% endif %}
    </article>
  {% endfor %}
</div>

## News

{% assign news_items = site.data.news | sort: 'date' | reverse %}
<ul class="news-feed">
  {% for item in news_items limit: 4 %}
    <li class="news-feed__item">
      <span class="news-feed__date">{{ item.date | date: "%b %Y" }}</span>
      <span>{{ item.text | markdownify | strip_html }}</span>
    </li>
  {% endfor %}
</ul>

## Collaboration

I am co-advised by <a href="https://xlim-sic.labo.univ-poitiers.fr/larabi/" rel="noopener" target="_blank">Mohamed-Chaker Larabi</a> and <a href="https://www.ntnu.edu/employees/s.ali.amirshahi" rel="noopener" target="_blank">Seyed Ali Amirshahi</a> and supported by the Nouvelle-Aquitaine Research Council through the REALISME project. I welcome collaborations on perceptual quality assessment, radiology decision support, and applied machine learning for immersive media. Feel free to reach out at <a href="mailto:aymen.sekhri@univ-poitiers.fr">aymen.sekhri@univ-poitiers.fr</a>.
