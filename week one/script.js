// 1. let examples
let age = 25;
let city = 'London';
let temperature = 15.6;
console.log('=========');
console.log(age, city, temperature);

// 2. const examples
const pi = 3.14;
const appName = 'Task Manager';
const isOnline = true;
console.log('=========');
console.log(pi, appName, isOnline);

// 3. Arrow functions
const greet = (name) => `Hello, ${name}!`;
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
console.log('=========');
console.log('Greet Function: ', greet('John'));
console.log('6 + 5 = ', add(6, 5));
console.log('6 * 5 = ', multiply(6, 5));

// 4. Objects
const car = { brand: 'Toyota', model: 'Camry', year: 2020 };
const user = { name: 'John Doe', email: 'john@example.com', age: 30 };
const book = { title: '1984', author: 'George Orwell', pages: 328 };
console.log('=========');
console.log('Car: ', car);
console.log('User: ', user);
console.log('Book: ', book);

// 5. Arrays with methods
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((n) => n % 2 === 0);
const doubledNumbers = numbers.map((n) => n * 2);
const sum = numbers.reduce((total, n) => total + n, 0);
console.log('=========');
console.log('Even numbers: ', evenNumbers);
console.log('Doubled numbers: ', doubledNumbers);
console.log('Sum of [1, 2, 3, 4, 5] = ', sum);

// Display Cart Item to show filter, map, and reduce examples
const cart = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Smartphone', price: 500 },
  { id: 3, name: 'Headphones', price: 100 },
  { id: 4, name: 'Keyboard', price: 50 },
  { id: 5, name: 'Mouse', price: 30 },
  { id: 6, name: 'Monitor', price: 300 },
];

const cartItemsDiv = document.getElementById('cart-items');
const cartTotalDiv = document.getElementById('cart-total');

const updateCart = () => {
  // Clear current items
  cartItemsDiv.innerHTML = '';

  // Display items
  cart.forEach((item) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';

    itemDiv.innerHTML = `
          <h4>${item.name} - $${item.price}</h4>
          <button onclick="removeItem(${item.id})">Delete</button>
        `;

    cartItemsDiv.appendChild(itemDiv);
  });

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotalDiv.textContent = `Total: $${total}`;
};

const removeItem = (id) => {
  const itemIndex = cart.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
    updateCart();
  }
};

// Initial cart rendering
updateCart();
