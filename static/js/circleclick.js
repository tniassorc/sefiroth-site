---
---
const pageLookup = {
  {% for book in site.books %}
    {% assign cat = book.categories[0] %}
    {% if cat contains 'book' %}
        "{{ cat }}": "{{ book.url | relative_url }}"{% unless forloop.last %},{% endunless %}
      {% endif %}
  {% endfor %}
};

function handleClick(id) {
  const key = 'book' + id.replace('circle', '');
  const url = pageLookup[key];
  if (url) {
    window.location.href = url;
  } else {
    console.warn(`No page found for ${key}`);
  }
}
