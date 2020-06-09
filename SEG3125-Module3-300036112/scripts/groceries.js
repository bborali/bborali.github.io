// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99
	},
		{
		name: "brocoli organic",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "bread organic",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 4.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "salmon organic",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 15.00
	},
	{
		name: "oatmeal",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 4.99
	},
	{
		name: "oatmeal organic",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 7.99
	},
	{
		name: "groudbeef",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 13.00
	},
	{
		name: "groudbeef organic",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 18.00
	},
	{
		name: "pineapple",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.50
	},
	{
		name: "pineapple organic",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.50
	},
	{
		name: "tomato",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.70
	},
	{
		name: "tomato organic",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.20
	},
	{
		name: "frozen_pepperoni_pizza",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 7.60
	},
	{
		name: "croissant",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 1.70
	},
	{
		name: "chicken breast",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 7.30
	},
	{
		name: "chicken breast organic",
		vegetarian: false,
		glutenFree: true,
		organic: true,
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
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
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