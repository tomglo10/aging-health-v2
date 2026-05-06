document.addEventListener("DOMContentLoaded", function() {
  console.log("Glossary Pulse Check: Searching for clinical terms...");

  fetch('/assets/js/glossary.json')
    .then(response => response.json())
    .then(glossary => {
      // Find the main content area in Chirpy
      const contentArea = document.querySelector('.post-content') || document.querySelector('article');

      if (!contentArea) {
        console.log("Glossary Error: Post content area not found.");
        return;
      }

      let html = contentArea.innerHTML;

      glossary.forEach(entry => {
        const term = entry.term;
        const url = entry.url;
        const definition = entry.definition;

        // REGEX: Matches whole words only, ignores matches inside <a> tags or <img> tags
        const regex = new RegExp(`\\b(${term})\\b(?![^<]*</a>)`, 'gi');

        html = html.replace(regex, (match) => {
          console.log(`Glossary: Linked [${match}] to ${url}`);
          return `<a href="${url}" class="autolink" style="text-decoration: underline; color: var(--link-color);" title="${definition}">${match}</a>`;
        });
      });

      contentArea.innerHTML = html;
    })
    .catch(error => console.error("Glossary Fetch Error:", error));
});
