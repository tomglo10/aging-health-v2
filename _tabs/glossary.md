---
layout: page
title: Glossary of Health Literacy
icon: fas fa-book-medical
order: 7
permalink: /glossary/
---
<div class="card mb-4 shadow-sm" style="border-left: 5px solid #00796b; background-color: #fdfdfd;">
  <div class="card-body">
    <h3 class="card-title h5 mb-4" style="color: #00796b;">🧩 Clinical Research Glossary</h3>
    <dl class="mb-0">
      {% for item in site.data.glossary %}
      <div id="{{ item.term | slugify }}" class="mb-4 pb-2" style="border-bottom: 1px solid #eee; scroll-margin-top: 100px;">
        <dt class="d-flex align-items-center">
          <span class="me-2" style="font-size: 1.2rem;">{{ item.icon }}</span>
          <span class="h6 mb-0"><strong>{{ item.term }}</strong></span>
          <span class="badge rounded-pill ms-auto px-3 py-2" style="background-color: #e0f2f1; color: #004d40; font-size: 0.75rem;">
            {{ item.category }}
          </span>
        </dt>
        <dd class="mt-2 text-muted" style="font-size: 0.95rem; line-height: 1.5;">
          {{ item.definition }}
        </dd>
      </div>
      {% endfor %}
    </dl>
  </div>
</div>
