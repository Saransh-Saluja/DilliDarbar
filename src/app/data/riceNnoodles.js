const riceAndNoodles = {
  title: "Rice & Noodles",
  subtitle: "Fragrant & Flavorful",
  sectionHeading: "Chef’s Special Rice & Noodle Dishes",

  leftColumn: [
    {
      title: "Darbari Dum Biryani",
      price: "15.99",
      subtitle: "Vegetable • Egg • Paneer • Chicken • Shrimp • Goat",
      description:
        "A fragrant rice dish slow-cooked with aromatic spices and layered with marinated meat or vegetables.",
      image: "https://d1w7312wesee68.cloudfront.net/bTCOa0je4y2ay3CO5kQUb47aZjMxUnbHCKWueOkMJxw/resize:fit:360:360/plain/s3://toasttab/restaurants/restaurant-210974000000000000/menu/items/4/item-100000057987128784_1755884361.png",
      options: [
        {
          category: "Choice of Protein",
          choices: [
            { name: "Vegetable", priceModifier: 0 },
            { name: "Egg", priceModifier: 1.0 },
            { name: "Paneer", priceModifier: 2.0 },
            { name: "Chicken", priceModifier: 4.0 },
            { name: "Shrimp", priceModifier: 8.0 },
            { name: "Goat", priceModifier: 9.0 },
          ],
        },
      ],
    },
    {
      title: "Hakka Noodle",
      price: "15.99",
      subtitle: "Vegetable • Egg • Chicken • Shrimp",
      description:
        "Stir-fried noodles tossed with vegetables or meat, flavored with soy sauce, garlic, and spices.",
      image: "https://d1w7312wesee68.cloudfront.net/TOCu6RKA8-EHW39qLhGLaMsupsmrLeQdOwnPVhRgyqA/resize:fit:360:360/plain/s3://toasttab/restaurants/restaurant-210974000000000000/menu/items/0/item-100000057987128790_1755884552.png",
      options: [
        {
          category: "Choice of Protein",
          choices: [
            { name: "Vegetable", priceModifier: 0 },
            { name: "Egg", priceModifier: 2.0 },
            { name: "Chicken", priceModifier: 4.0 },
            { name: "Shrimp", priceModifier: 7.0 },
          ],
        },
      ],
    },
  ],

  rightColumn: [
    {
      title: "Fried Rice",
      price: "14.99",
      subtitle: "Vegetable • Egg • Chicken • Shrimp",
      description:
        "Wok-tossed rice dish flavored with soy sauce, garlic, and spices, mixed with vegetables or meat.",
      image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Fried-Rice-min.jpg",
      options: [
        {
          category: "Choice of Protein",
          choices: [
            { name: "Vegetable", priceModifier: 0 },
            { name: "Egg", priceModifier: 2.0 },
            { name: "Chicken", priceModifier: 4.0 },
            { name: "Shrimp", priceModifier: 7.0 },
          ],
        },
      ],
    },
  ],
};

export default riceAndNoodles;
