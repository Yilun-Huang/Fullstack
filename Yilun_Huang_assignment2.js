const itemObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

/*Q1*/
let newItemObject = itemObject.map((item) => {
  return { quantity: item.quantity * 2, price: item.price * 2 };
});
console.log(newItemObject);

/*Q2*/
newItemObject = itemObject.filter(
  (item) => item.quantity > 2 && item.price > 300
);
console.log(newItemObject);

/*Q3*/
const total = itemObject.reduce((acc, item) => {
  return acc + item.quantity * item.price;
}, 0);
console.log(total);

/*Q4*/
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";
const newString = string
  .trim()
  .replace(/-/g, "")
  .replace(/\s+/g, " ")
  .toLowerCase();
console.log(newString);
