const express = require('express');
const app = express();
const port = 3000;

// Serve static files from 'public' folder
app.use(express.static('public'));

// Sample products data
const products = [
    { id: 1, name: 'Laptop', price: '$1200' },
    { id: 2, name: 'Smartphone', price: '$700' },
    { id: 3, name: 'Headphones', price: '$150' },
];

// Route to display products
app.get('/', (req, res) => {
    let html = `
    <html>
      <head>
        <title>Mini E-Commerce Store</title>
        <style>
          body { font-family: Arial; margin: 20px; }
          h1 { color: #2c3e50; }
          .product { border: 1px solid #ccc; padding: 10px; margin: 10px; width: 200px; display: inline-block; }
        </style>
      </head>
      <body>
        <h1>Welcome to My Store (v1)</h1>
        <div class="products">
    `;

    products.forEach(p => {
        html += `<div class="product">
                    <h3>${p.name}</h3>
                    <p>Price: ${p.price}</p>
                 </div>`;
    });

    html += `</div></body></html>`;
    res.send(html);
});

app.listen(port, () => {
    console.log(`Mini e-commerce app v1 listening at http://localhost:${port}`);
});
