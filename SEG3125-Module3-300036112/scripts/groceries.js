// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 


var products = [
	{
		name: "brocoli	",
		image: "/images/broccoli.JPG",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category:"fruit & vegetable",
		price: 1.99
	},
		{
		name: "brocoli organic	",
		image: "/images/broccoli.JPG",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category:"fruit & vegetable",
		price: 3.99
	},
	{
		name: "bread	",
		image: "images/bread.JPG",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		category:"bakery",
		price: 2.35
	},
	{
		name: "bread organic	",
		image: "images/bread.JPG",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		category:"bakery",
		price: 4.35

	},
	{
		name: "salmon	",
		image: "images/salmon.JPG",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category:"seafood",
		price: 10.00
	},
	{
		name: "salmon organic	",
		image: "images/salmon.JPG",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		category:"seafood",
		price: 15.00
	},
	{
		name: "oatmeal	",
		image: "images/oatmeal.JPG",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		category:"grain",
		price: 4.99

	},
	{
		name: "oatmeal organic	",
		image: "images/oatmeal.JPG",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		category:"grain",
		price: 7.99
	},
	{
		name: "groudbeef	",
		image: "images/groundbeef.JPG",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category:"meat",
		price: 13.00
	},
	{
		name: "groudbeef organic	",
		image: "images/groundbeef.JPG",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		category:"meat",
		price: 18.00
	},
	{
		name: "pineapple	",
		image: "images/pineapple.JPG",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category:"fruit & vegetable",
		price: 3.50
	},
	{
		name: "pineapple organic	",
		image: "images/pineapple.JPG",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category:"fruit & vegetable",
		price: 5.50
	},
	{
		name: "tomato	",
		image: "images/tomato.JPG",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category:"fruit & vegetable",
		price: 3.70
	},
	{
		name: "tomato organic	",
		image: "images/tomato.JPG",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "fruit & vegetable",
		price: 5.20
	},
	{
		name: "frozen pepperoni pizza	",
		image: "images/pizza.JPG",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		category: "frozen products",
		price: 7.60
	},
	{
		name: "croissant	",
		image: "images/croissant.JPG",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		category:"bakery",
		price: 1.70
	},
	{
		name: "chicken breast	",
		image: "images/chickenbreast.JPG",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category:"meat",
		price: 7.30
	},
	{
		name: "chicken breast organic	",
		image: "images/chickenbreast.JPG",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		category:"meat",
		price: 9.99
	},


];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian and GlutenFree") && (prods[i].vegetarian == true)
														 && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "None"){
			product_names.push(prods[i]);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
