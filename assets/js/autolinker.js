document.addEventListener("DOMContentLoaded", function() {
  console.log("Glossary Engine: Starting up...");

  // Fetching directly from the root
  fetch('/glossary.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Glossary file not found at root (Check if file is actually named glossary.json)");
      }
      return response.json();
    })
    .then(glossary => {
      console.log("Glossary Engine: Success! Found " + glossary.length + " terms.");

      // Target the Chirpy post content area
      const contentArea = document.querySelector('.post-content') ||
                          document.querySelector('.content') ||
                          document.querySelector('article');

      if (!contentArea) {
        console.error("Glossary Error: Content area not found.");
        return;
      }

      let html = contentArea.innerHTML;

      // Sort terms by length (longest first) so 'Blood Pressure' links before 'Blood'
      glossary.sort((a, b) => b.term.length - a.term.length);

      glossary.forEach(entry => {
        const term = entry.term;
        const url = entry.url;
        const definition = entry.definition;

        // Regex: Matches whole words, skips terms already inside <a> tags
        const regex = new RegExp(`\\b(${term})\\b(?![^<]*</a>)`, 'gi');

        if (html.match(regex)) {
          console.log(`Glossary: Linking [${term}] to ${url}`);
          html = html.replace(regex, `<a href="${url}" class="autolink" style="text-decoration: underline; color: var(--link-color);" title="${definition}">$1</a>`);
        }
      });

      contentArea.innerHTML = html;
    })
    .catch(error => {
      console.error("Glossary Fetch Error:", error);
    });
});
