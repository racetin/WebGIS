//globals
let data = [
	{
		'title':'Osaka',
		'lat': 34.6937,
		'lon': 135.5023
	},
	{
		'title':'Cali',
		'lat': 3.4516,
		'lon': -76.5320
	},
	{
		'title':'Bangkok',
		'lat': 13.7563,
		'lon': 100.5018
	},
	{
		'title':'Tokyo',
		'lat': 35.6762,
		'lon': 139.6503
	},
	{
		'title':'LA',
		'lat': 34.0522,
		'lon': -118.2437
	}
]


var map = L.map('map').setView([43.511180, 16.464904], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

data.forEach(function(item){

	var marker = L.marker([item.lat,item.lon]).addTo(map)
	.bindPopup(item.title)
	.openPopup();	

})


