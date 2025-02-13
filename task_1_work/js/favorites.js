function initFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    function toggleFavorite(cityName) {
        const index = favorites.indexOf(cityName);
        if (index === -1) {
            favorites.push(cityName);
        } else {
            favorites.splice(index, 1);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateFavoriteButtons();
    }

    function updateFavoriteButtons() {
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            const cityName = btn.dataset.city;
            btn.classList.toggle('active', favorites.includes(cityName));
            btn.innerHTML = favorites.includes(cityName) ? '★' : '☆';
        });
    }

    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', () => toggleFavorite(btn.dataset.city));
    });

    updateFavoriteButtons();
}
