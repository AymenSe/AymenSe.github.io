---
layout: page
permalink: /publications/
title: "Publications"
subtitle: "Peer-reviewed papers, preprints and datasets. Citation counts live on Google Scholar."
description: "Full publication list for Aymen Sekhri — AR image quality assessment, perceptual modelling and medical imaging AI."
---

<ul class="filters" data-filters>
  <li><button type="button" data-filter="all" aria-pressed="true">All</button></li>
  <li><button type="button" data-filter="ar" aria-pressed="false">Augmented reality</button></li>
  <li><button type="button" data-filter="iqa" aria-pressed="false">Image quality</button></li>
  <li><button type="button" data-filter="medical" aria-pressed="false">Medical imaging</button></li>
  <li><button type="button" data-filter="efficiency" aria-pressed="false">Efficiency</button></li>
  <li><button type="button" data-filter="forensics" aria-pressed="false">Forensics</button></li>
  <li><button type="button" data-filter="journal" aria-pressed="false">Journals</button></li>
</ul>

{% assign pubs = site.publications | sort: 'date' | reverse %}
<ul class="pub-list">
  {% for p in pubs %}
    {% include pub-item.html p=p abstract=true %}
  {% endfor %}
</ul>

<p class="filters__empty" hidden>No publications match that filter.</p>

<hr>

<p class="muted">
Up-to-date citation metrics are on
<a href="https://scholar.google.com/citations?user=n70fgO4AAAAJ" rel="noopener" target="_blank">Google Scholar</a>,
and the complete record is on
<a href="https://orcid.org/0000-0002-0958-9478" rel="noopener" target="_blank">ORCID</a>.
</p>
