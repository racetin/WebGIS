var map = L.map('map').setView([43.511180, 16.464904], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([43.511180, 16.464904]).addTo(map)
		.bindPopup('FGAG<br> Where Ivan is sitting this very moment')
		.openPopup();	
