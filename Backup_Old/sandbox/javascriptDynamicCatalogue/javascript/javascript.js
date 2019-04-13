function sayHello() {
	alert("Hello");
}


var centreColumn = document.getElementById("centreColumn");

function populateCentreDiv() {

	var centreColumn = document.getElementById("centreColumn");
	
	
	for(var i = 0; i < catalogue.items.length; i++) {

		var shopItem = document.createElement("div");
		shopItem.id = "shopItem";	

		shopItem.innerHTML += "<p>Experience: " + catalogue.items[i].experience + "</p>";
		shopItem.innerHTML += "<p>Age Rating: " + catalogue.items[i].ageRating + "</p>";
		shopItem.innerHTML += "<p>category: " + catalogue.items[i].category + "</p>";
		shopItem.innerHTML += "<img width= 100% height= 40% src='" + catalogue.items[i].imageSource + "'/>";
		
		centreColumn.appendChild(shopItem);

	}

}


var catalogue = {

	items: [

		item = {

			experience: "Life On Mars",
			ageRating: "18+",
			category: "Explore",
			imageSource: "https://economictimes.indiatimes.com/blogs/wp-content/uploads/2015/10/Mars.jpg"

		},

		item = {

			experience: "Everest",
			ageRating: "15+",
			category: "Explore",
			imageSource: "https://www.nepalsanctuarytreks.com/wp-content/uploads/2018/03/Mount-everest-growing.jpg"

		},

		item = {
			experience: "Everest",
			ageRating: "18+",
			category: "Travel",
			imageSource: "http://www.allsportspk.com/wp-content/uploads/2018/05/Deep-Sea-Diver.jpg"


		}

	]
}