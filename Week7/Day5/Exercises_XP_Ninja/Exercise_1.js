const menu = [
    {
      type : "starter",
      name : "Houmous with Pita"
    },
    {
      type : "starter",
      name : "Vegetable Soup with Houmous peas"
    },
    {
      type : "dessert",
      name : "Chocolate Cake"
    }
];

const result = menu.find(value => value.type === "dessert");
console.log(result);

const result1 = menu.every(value => value.type === "starter");
console.log(result1);

const result2 = menu.find(value => value.type === "maincourse");
console.log(result2);

const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ];

