export { getMenu };
import img from './imgs/burntends.jpg';

const meatPlates = [
  'Brisket',
  'Pulled Pork',
  'Turkey',
  'Jalapeno Sausage',
  'Pepperjack Sausage',
];
const sides = [
  "Mac N' Cheese",
  'Collard Greens',
  'Cole Slaw',
  'Fries',
  'Beans',
  'Potato Salad',
];

const sandwiches = [
  'Special BBQ Sandwich',
  'Pulled Pork Sandwich',
  'Brisket Sandwich',
  'Turkey Sandwich',
  'Sausage Sandwich',
];

const kidsMenu = [
  'Grilled Cheese',
  'Brisket Sliders',
  'Corn Dog',
  'Chicken Strips',
];

const drinks = [
    'Soda',
    'Beer',
    'Boba Tea',
    'Iced Tea',
    'Sweet Tea',
    'Lemondae'
]

function getMenu() {
  const mainInfo = document.querySelector('.mainInfo');
  const heading = document.createElement('h1');
  heading.innerHTML = "Menu";
  heading.setAttribute('id', 'menuHeading');
  mainInfo.append(heading);
  const menuList = document.createElement('div');
  menuList.setAttribute('id','menuList');
  mainInfo.append(menuList);
  getPlates(meatPlates);
  getPlates(sides);
  getPlates(sandwiches);
  getPlates(kidsMenu);
  getPlates(drinks);
  const image = new Image();
  image.src = img;
  image.setAttribute('id', 'menuImage');
  menuList.append(image);
}

function getPlates(food) {
  const mainInfo = document.querySelector('.mainInfo');
  mainInfo.setAttribute('id', 'menuInfo');
  const plates = document.createElement('div');
  const platesHeading = document.createElement('h2');
  if (food === meatPlates) {
    platesHeading.innerHTML = 'Meat Plates';
  } else if (food === sides) {
    platesHeading.innerHTML = 'Sides';
  } else if (food === sandwiches) {
    platesHeading.innerHTML = 'Sandwiches';
  } else if (food === kidsMenu) {
    platesHeading.innerHTML = "Kid's Menu"
  } else if (food === drinks) {
    platesHeading.innerHTML = "Drinks's Menu"
  }
  const ul = document.createElement('ul');
  food.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item}`;
    ul.appendChild(li);
  });
  plates.appendChild(platesHeading);
  plates.appendChild(ul);
  menuList.append(plates);
}
