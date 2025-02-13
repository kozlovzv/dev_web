function initMap(cityName, coordinates) {
    const map = L.map(`${cityName}-map`).setView(coordinates, 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker(coordinates).addTo(map)
        .bindPopup(`Добро пожаловать в ${cityName}!`)
        .openPopup();
}

const cityCoordinates = {
    'paris': [48.8566, 2.3522],
    'tokyo': [35.6762, 139.6503],
    'newyork': [40.7128, -74.0060]
};
