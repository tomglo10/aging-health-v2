document.addEventListener("DOMContentLoaded", function() {
  // 1. THE PULSE CHECK - If you see this in the F12 Console, the script is LOADED.
  console.log("Glossary Engine: Starting up...");

  fetch('/assets/js/glossary.json')
    .then(response => response.json())
    .then(glossary => {
      // 2. THE TARGET CHECK - Trying all possible Chirpy content areas
      const contentArea = document.querySelector('.post-content') ||
                          document.querySelector('.content') ||
                          document.querySelector('article');

      if (!contentArea) {
        console.error("Glossary Error: Could not find the post body.");
        return;
      }

      let html = contentArea.innerHTML;

      // 3. THE SUTURING - Loop through terms
      glossary.forEach(entry => {
        const term = entry.term;
        const url = entry.url;
        const definition = entry.definition;

        // Regex: Matches whole words, skips terms already inside <a> tags
        const regex = new RegExp(`\\b(${term})\\b(?![^<]*</a>)`, 'gi');

        if (html.match(regex)) {
          console.log(`Glossary: Successfully linked [${term}]`);
          html = html.replace(regex, `<a href="${url}" class="autolink" style="text-decoration: underline; color: var(--link-color);" title="${definition}">$1</a>`);
        }
      });

      contentArea.innerHTML = html;
    })
    .catch(error => console.error("Glossary Fetch Error:", error));
});
