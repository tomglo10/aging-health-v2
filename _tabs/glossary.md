---
layout: page
title: Glossary of Health Literacy
icon: fas fa-book-medical
order: 7
permalink: /glossary/
---

<input type="text" id="glossarySearch" placeholder="Search for a clinical term (e.g., Sarcopenia)..." style="width: 100%; padding: 12px; margin-bottom: 20px; border-radius: 8px; border: 1px solid #dee2e6;">

<div id="glossaryContainer">
  <p>Loading the research database...</p>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  fetch('/glossary.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('glossaryContainer');
      const searchInput = document.getElementById('glossarySearch');
      
      const renderGlossary = (filter = "") => {
        container.innerHTML = "";
        const filtered = data.filter(item => 
          item.term.toLowerCase().includes(filter.toLowerCase()) || 
          item.definition.toLowerCase().includes(filter.toLowerCase())
        );

        filtered.forEach(item => {
          const div = document.createElement('div');
          div.id = item.term.replace(/\s+/g, '-'); // Creates the #Anchor
          div.style.marginBottom = "30px";
          div.style.padding = "15px";
          div.style.borderLeft = "4px solid #1565c0";
          div.style.background = "#f8f9fa";
          
          div.innerHTML = `
            <h3 style="margin-top:0;">${item.icon} ${item.term}</h3>
            <p><strong>Definition:</strong> ${item.definition}</p>
            <span style="font-size: 0.8rem; background: #e9ecef; padding: 2px 8px; border-radius: 4px;">${item.category}</span>
          `;
          container.appendChild(div);
        });
      };

      searchInput.addEventListener('input', (e) => renderGlossary(e.target.value));
      renderGlossary();
    });
});
</script>
