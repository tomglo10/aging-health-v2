document.addEventListener("DOMContentLoaded", function() {
  fetch('/glossary.json')
    .then(response => response.json())
    .then(glossary => {
      const content = document.querySelector('.post-content') || document.querySelector('article');
      if (!content) return;

      // Sort: Longest terms first to prevent partial matches
      glossary.sort((a, b) => b.term.length - a.term.length);

      const walk = (node) => {
        let child = node.firstChild;
        while (child) {
          if (child.nodeType === 3) { // Text node
            const parent = child.parentNode.tagName.toLowerCase();
            // SKIP headers, links, and code
            if (!['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code', 'pre'].includes(parent)) {
              let text = child.nodeValue;
              let hasMatch = false;

              glossary.forEach(entry => {
                const regex = new RegExp(`\\b(${entry.term})\\b`, 'i');
                if (text.match(regex)) {
                  const url = `/glossary/#${entry.term.toLowerCase().replace(/\s+/g, '-')}`;
                  text = text.replace(regex, `<a href="${url}" class="glossary-link" title="${entry.definition}">$1</a>`);
                  hasMatch = true;
                }
              });

              if (hasMatch) {
                const temp = document.createElement('span');
                temp.innerHTML = text;
                node.replaceChild(temp, child);
              }
            }
          } else {
            walk(child);
          }
          child = child.nextSibling;
        }
      };
      walk(content);
    });
});
