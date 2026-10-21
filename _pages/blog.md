---
layout: page
permalink: /blog/
title: "Writing"
subtitle: "Notes and articles, mostly about getting started in machine learning and image processing."
description: "Articles and blog posts by Aymen Sekhri on machine learning, computer vision and image processing."
---

{% assign local = site.posts %}
{% assign external = site.data.writing %}

{% if local.size == 0 and external.size == 0 %}
<p class="muted">Nothing here yet.</p>
{% endif %}

<ul class="cards">
  {% for post in local %}
  <li>
    <a class="card" href="{{ post.url | relative_url }}">
      <h2 class="card__title">{{ post.title }}</h2>
      <p class="card__meta"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d %B %Y" }}</time></p>
      {% if post.description or post.excerpt %}
      <p class="card__desc">{{ post.description | default: post.excerpt | strip_html | truncate: 180 }}</p>
      {% endif %}
    </a>
  </li>
  {% endfor %}

  {% for item in external %}
  <li>
    <a class="card" href="{{ item.url }}" rel="noopener" target="_blank">
      <h2 class="card__title">
        <span>{{ item.title }}</span>
        {% include icon.html name='external' %}
      </h2>
      <p class="card__meta">
        <time datetime="{{ item.date | date_to_xmlschema }}">{{ item.date | date: "%-d %B %Y" }}</time>
        {% if item.venue %} · {{ item.venue }}{% endif %}
      </p>
      {% if item.description %}<p class="card__desc">{{ item.description }}</p>{% endif %}
    </a>
  </li>
  {% endfor %}
</ul>
