 const menuData = {
    title: "Vegetarian Appetizers",
    subtitle: "Golden Crispy Starters & Indian Street Favorites",
    sectionHeading: "Veg Starters",
    leftColumn: [
      {
        title: "Vegetable Samosa (3pcs)",
        price: "9.99",
        subtitle: "Pastry • Potato • Peas",
        description: "A crispy, golden pastry filled with spiced potatoes and peas (3pcs).",
        image: "https://d1w7312wesee68.cloudfront.net/xM7I8MWrWhLZBTyOqk9guCPZmr5Wdr-CPlXz1mQQ73M/resize:fit:360:360/plain/s3://toasttab/restaurants/restaurant-210974000000000000/menu/items/7/item-100000057984951017_1755823389.jpg"
      },
      {
        title: "Onion Spinach Pakoda",
        price: "9.99",
        subtitle: "Onion • Spinach • Gram Flour",
        description: "Crispy onion and spinach fritters in spiced gram flour batter.",
        image: "https://media.istockphoto.com/id/1254198647/photo/palak-pakoras-fried-hot-and-tasty.jpg?s=612x612&w=0&k=20&c=K4LK0v0zazVqH5DMeb_0Z7BUFj7ThhlRhLnlQBqZUds="
      },
      {
        title: "Paneer Tikka",
        price: "15.99",
        subtitle: "Paneer • Yogurt • Spices",
        description: "Smoky, spiced cottage cheese cubes marinated in yogurt and grilled to perfection.",
        image: "https://d1w7312wesee68.cloudfront.net/2Gf18Vq52vpQUkHWa8oq9UP26hnMf1Go7A4Hj_BuoHQ/resize:fit:360:360/plain/s3://toasttab/restaurants/restaurant-210974000000000000/menu/items/1/item-100000057984951021_1755823601.jpg"
      },
      {
        title: "Paneer Malai Tikka",
        price: "16.99",
        subtitle: "Paneer • Yogurt • Cream • Spices",
        description: "Cottage cheese marinated in yogurt, cream, and mild spices, then grilled until tender.",
        image: "https://orders.popskitchen.in/storage/2024/09/image-355.png"
      },
      {
        title: "Veg Seekh Kebab",
        price: "14.99",
        subtitle: "Vegetables • Herbs • Skewers",
        description: "A flavorful mix of spiced vegetables and herbs shaped onto skewers and grilled.",
        image: "https://d1w7312wesee68.cloudfront.net/BtDUU9AjrN3Lqs3EgVsKkaTsz1hdhVgdY-8FsTwQfF0/resize:fit:360:360/plain/s3://toasttab/restaurants/restaurant-210974000000000000/menu/items/5/item-100000057984951025_1755823667.jpg"
      },
      {
        title: "Paneer 65",
        price: "15.99",
        subtitle: "Paneer • Curry Leaves • Spices",
        description: "Crisp fried paneer tossed in a tangy, spicy 65 sauce with curry leaves.",
        image: "https://static.toiimg.com/photo/75490988.cms"
      },
      {
        title: "Gobi Manchurian",
        price: "15.99",
        subtitle: "Cauliflower • Garlic • Indo-Chinese Sauce",
        description: "Crispy cauliflower tossed in a garlicky, tangy Indo-Chinese Manchurian sauce.",
        image: "https://d1w7312wesee68.cloudfront.net/nmNqL47cOOM9dduMDXZcWQcr3XeJaWzklutSh3R7foM/resize:fit:360:360/plain/s3://toasttab/restaurants/restaurant-210974000000000000/menu/items/9/item-100000057984951029_1755823720.jpg"
      },
      {
        title: "Mirch Ka Pakoda",
        price: "9.99",
        subtitle: "Green Chilies • Gram Flour",
        description: "Crispy fritters of whole green chilies in spiced gram flour batter.",
        image: "https://d1w7312wesee68.cloudfront.net/JuR7W6StPHKwKxHuktFRNj-v_rN9mcFZ9W2taUz8aVQ/resize:fit:360:360/plain/s3://toasttab/restaurants/restaurant-210974000000000000/menu/items/1/item-100000057984951031_1755823763.jpg"
      },
      {
        title: "Samosa Chaat",
        price: "11.99",
        subtitle: "Samosa • Chutneys • Yogurt",
        description: "Tangy and spicy street-food delight of samosa topped with chutneys and yogurt.",
        image: "https://masalaandchai.com/wp-content/uploads/2021/10/Samosa-Chaat-with-Chai.jpg"
      }
    ],
    rightColumn: [
      {
        title: "Paneer Angar 🌶️",
        price: "14.99",
        subtitle: "Paneer • Angara Masala",
        description: "Fiery, coal-smoked paneer tossed in spicy Angara masala.",
        image: "https://d1w7312wesee68.cloudfront.net/GqrrOYqUvAwitQ4mZ1kJfZvShP4oMiA5SrSuKLgrYBk/resize:fit:360:360/plain/s3://toasttab/restaurants/restaurant-210974000000000000/menu/items/5/item-100000057984951035_1755823814.jpg"
      },
      {
        title: "Aloo Tikki Chaat",
        price: "11.99",
        subtitle: "Potato Patty • Chutneys • Yogurt",
        description: "A potato patty topped with tangy chutneys and creamy yogurt.",
        image: "https://t4.ftcdn.net/jpg/08/48/56/35/360_F_848563541_AohoxRUoldkBYmMdn5t6miKMXJ6be2of.jpg"
      },
      {
        title: "Dahi Puri",
        price: "10.99",
        subtitle: "Puri • Potato • Chickpeas • Chutneys",
        description: "Crispy puris stuffed with potato & chickpeas, topped with yogurt, chutneys, sev, and chaat masala.",
        image: "https://d1w7312wesee68.cloudfront.net/a3lapqIoXL0VSPWfoCObJ2rbM2qqs7Kpk90uvEaEPGQ/resize:fit:360:360/plain/s3://toasttab/restaurants/restaurant-210974000000000000/menu/items/9/item-100000057984951039_1755823863.jpg"
      },
      {
        title: "Dahi Bhalla",
        price: "13.99",
        subtitle: "Lentil Dumplings • Yogurt • Chutneys",
        description: "Fluffy lentil dumplings in chilled yogurt, finished with tamarind-mint chutneys and chaat masala.",
        image: "https://d1w7312wesee68.cloudfront.net/F0UbDnJI12u03X55WCiykdTdmcE8EBoUFH8IRO88GoQ/resize:fit:360:360/plain/s3://toasttab/restaurants/restaurant-210974000000000000/menu/items/1/item-100000057984951041_1755823887.jpg"
      },
      {
        title: "Palak Patta Chaat",
        price: "10.99",
        subtitle: "Spinach • Yogurt • Chutneys",
        description: "Crisp, batter-fried spinach leaves topped with yogurt, chutneys, sev, and chaat masala.",
        image: "https://d1w7312wesee68.cloudfront.net/MlUuEAPU-n3eQ2fMu4Gk3NfWBg5Rz21zSdglNAR-SkQ/resize:fit:360:360/plain/s3://toasttab/restaurants/restaurant-210974000000000000/menu/items/3/item-100000057984951043_1755823908.jpg"
      },
      {
        title: "Kurkuri Makkai",
        price: "15.99",
        subtitle: "Corn • Chilies • Chaat Masala",
        description: "Crispy fried corn kernels tossed with chilies and chaat masala.",
        image: "https://rakskitchen.net/wp-content/uploads/2022/01/crisp-corn.jpg"
      },
      {
        title: "Crispy Tofu",
        price: "14.99",
        subtitle: "Tofu • Sesame • Scallions",
        description: "Lightly fried tofu in sesame-ginger dressing, topped with sesame seeds and scallions.",
        image: "https://cookingwithayeh.com/wp-content/uploads/2022/09/Sticky-Tofu-0.jpg"
      },
      {
        title: "Bang Bang Broccoli",
        price: "15.99",
        subtitle: "Broccoli • Panko • Spicy Sauce",
        description: "Fried broccoli coated in panko, drizzled with a sweet and spicy bang bang sauce.",
        image: "https://foodsharingvegan.com/wp-content/uploads/2023/10/Bang-Bang-Broccoli-Plant-Based-on-a-Budget-17.jpg"
      },
      {
        title: "Masala Momos 🌶️",
        price: "10.99",
        subtitle: "Vegetables • Tandoori Spices",
        description: "Dumplings stuffed with mixed vegetables, marinated, and pan-tossed in tandoori tikka spices.",
        image: "https://d1w7312wesee68.cloudfront.net/AbSYpihWi04bEXxu_dzbNzzrkTeByJo8NW3ji2zBD4c/resize:fit:360:360/plain/s3://toasttab/restaurants/restaurant-210974000000000000/menu/items/1/item-100000057984951651_1755824013.jpg"
      }
    ]
  };
  

  export default menuData;