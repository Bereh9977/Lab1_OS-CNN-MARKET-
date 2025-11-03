document.addEventListener('DOMContentLoaded', search);

function search(){
  const main = document.querySelector('main');
    if (!main) return;

    const searchContainer = document.createElement('div');
    searchContainer.classList.add('searchContainer');
    searchContainer.innerHTML = `
      <label for="search">Search</label>
      <input type="text" id="search" placeholder="Що шукатимемо?">
    `;
    main.prepend(searchContainer);

    const searchInput = document.querySelector('#search');
    const items = document.querySelectorAll('.items');
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      items.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        item.classList.toggle('hidden', !title.includes(query));
      });
    });
}