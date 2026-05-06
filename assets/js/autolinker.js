document.addEventListener("DOMContentLoaded", function() {
  fetch('/assets/js/autolink-map.json')
    .then(response => response.json())
    .then(linkMap => {
      const postContent = document.querySelector('.content.post-content') || document.querySelector('.content');
      if (!postContent) return;

      let html = postContent.innerHTML;
      const currentPath = window.location.pathname;

      Object.keys(linkMap).forEach(keyword => {
        const targetPath = linkMap[keyword];

        // GHOST-LINK PREVENTION: Skip if we are already on that page
        if (currentPath === targetPath || currentPath === targetPath + '/') {
          return;
        }

        const regex = new RegExp(`(?<!<[^>]*)${keyword}(?![^<]*</a>|[###])`, 'i');

        html = html.replace(regex, (match) => {
          return `<a href="${targetPath}" class="autolink" style="text-decoration: underline; color: var(--link-color);" title="Learn more about ${match}">${match}</a>`;
        });
      });

      postContent.innerHTML = html;
    });
});
