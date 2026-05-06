document.addEventListener("DOMContentLoaded", function() {
  fetch('/assets/js/glossary.json')
    .then(response => response.json())
    .then(glossaryArray => {
      const postContent = document.querySelector('.content.post-content') || document.querySelector('.content');
      if (!postContent) return;

      let html = postContent.innerHTML;
      const currentPath = window.location.pathname;

      glossaryArray.forEach(entry => {
        const keyword = entry.term;
        const targetPath = entry.url;

        // SKIP: Don't link if we are already on the glossary or target page
        if (currentPath.includes('/glossary')) return;

        // REGEX: Matches the term but avoids breaking existing links/images
        const regex = new RegExp(`(?<!<[^>]*)${keyword}(?![^<]*</a>|[###])`, 'gi');

        html = html.replace(regex, (match) => {
          return `<a href="${targetPath}" class="autolink" style="text-decoration: underline; color: var(--link-color);" title="${entry.definition}">${match}</a>`;
        });
      });

      postContent.innerHTML = html;
    });
});
