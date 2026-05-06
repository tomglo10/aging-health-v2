document.addEventListener('DOMContentLoaded', function () {
  fetch('/assets/js/autolink-map.json')
    .then((response) => response.json())
    .then((linkMap) => {
      // Scopes the search specifically to the post content area in Chirpy
      const postContent =
        document.querySelector('.content.post-content') ||
        document.querySelector('.content');
      if (!postContent) return;

      let html = postContent.innerHTML;

      Object.keys(linkMap).forEach((keyword) => {
        // RegEx: Finds the keyword but ignores it if it's already inside a link, heading, or code block
        const regex = new RegExp(
          `(?<!<[^>]*)${keyword}(?![^<]*</a>|[###])`,
          'i',
        );

        // We replace only the FIRST occurrence to prevent "link-bloat"
        html = html.replace(regex, (match) => {
          return `<a href="${linkMap[keyword]}" class="autolink" style="text-decoration: underline; color: var(--link-color);" title="Learn more about ${match}">${match}</a>`;
        });
      });

      postContent.innerHTML = html;
    });
});
