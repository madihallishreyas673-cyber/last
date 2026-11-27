// CHANGE YOUR MENU HERE: names, prices, cafe name, number of tables.
// Every item needs its own different id. Do not delete ids of items already ordered.
const MENU = {
  "cafeName": "MOREA CAFE",
  "tagline": "Good coffee, slow evenings",
  "currency": "₹",
  "tables": 10,
  "categories": [
    {
      "name": "Coffee",
      "items": [
        {
          "id": "c1",
          "name": "Espresso",
          "price": 90,
          "desc": "A short, strong single shot",
          "veg": true
        },
        {
          "id": "c2",
          "name": "Cappuccino",
          "price": 150,
          "desc": "Espresso, steamed milk and thick foam",
          "veg": true
        },
        {
          "id": "c3",
          "name": "Cafe Latte",
          "price": 160,
          "desc": "Smooth and milky",
          "veg": true
        },
        {
          "id": "c4",
          "name": "Cold Coffee",
          "price": 170,
          "desc": "Chilled, blended and creamy",
          "veg": true
        }
      ]
    },
    {
      "name": "Tea & Coolers",
      "items": [
        {
          "id": "t1",
          "name": "Masala Chai",
          "price": 60,
          "desc": "Spiced milk tea",
          "veg": true
        },
        {
          "id": "t2",
          "name": "Lemon Iced Tea",
          "price": 120,
          "desc": "Fresh lemon over ice",
          "veg": true
        },
        {
          "id": "t3",
          "name": "Mint Mojito",
          "price": 140,
          "desc": "Mint, lime and soda",
          "veg": true
        }
      ]
    },
    {
      "name": "Snacks",
      "items": [
        {
          "id": "s1",
          "name": "French Fries",
          "price": 120,
          "desc": "Crisp and lightly salted",
          "veg": true
        },
        {
          "id": "s2",
          "name": "Veg Grilled Sandwich",
          "price": 160,
          "desc": "Vegetables and cheese, grilled",
          "veg": true
        },
        {
          "id": "s3",
          "name": "Chicken Burger",
          "price": 220,
          "desc": "Crispy chicken with house sauce",
          "veg": false
        },
        {
          "id": "s4",
          "name": "Margherita Pizza",
          "price": 260,
          "desc": "Tomato, mozzarella and basil",
          "veg": true
        }
      ]
    },
    {
      "name": "Desserts",
      "items": [
        {
          "id": "d1",
          "name": "Chocolate Brownie",
          "price": 140,
          "desc": "Warm and fudgy",
          "veg": true
        },
        {
          "id": "d2",
          "name": "Cheesecake Slice",
          "price": 190,
          "desc": "Baked and creamy",
          "veg": true
        }
      ]
    }
  ]
};
