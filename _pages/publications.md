---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
<div class="wordwrap">For citation metrics and updates, see <a href="{{site.author.googlescholar}}">Google Scholar</a>.</div>
{% endif %}

## Topics

- Augmented Reality and immersive media quality assessment
- Blind image quality assessment (BIQA)
- Lightweight and transformer-based perceptual models
- Medical imaging AI (knee osteoarthritis, domain adaptation)

## Full list

{% include base_path %}

{% assign pubs = site.publications | sort: 'date' | reverse %}
{% for post in pubs %}
  {% include archive-single.html %}
{% endfor %}
