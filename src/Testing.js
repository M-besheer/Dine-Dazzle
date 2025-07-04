const express = require("express");
const app = express();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  database: "dine-&-dazzle",
  user: "root",
  connectionLimit: 10
});

cart = {};

app.use(express.json());

///////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/menu", function (req, res) {
  pool.getConnection(function (err, connection) {
    const sql = 'SELECT food_name, food_description, food_price, image FROM menu';
    connection.query(sql, (err, results) => {
      pool.releaseConnection(connection);
      if (err) throw err;

      // Convert BLOB image to Base64
      results.forEach(item => {
        if (item.image && item.image.length > 0) {
          const base64String = Buffer.from(item.image).toString('base64');
          item.image = "data:image/jpeg;base64," + base64String;
        } else {
          item.image = null; // Or handle default image if necessary
        }
      });

      res.send(results);
    });
  });
});


// Add to cart function
app.post('/add-to-cart/:itemName', (req, res) => {
  const itemName = req.params.itemName;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      return res.status(500).send('Error getting MySQL connection');
    }

    console.log('Connection acquired. Fetching item details...');

   
    connection.query('SELECT food_name, food_price FROM menu WHERE food_name = ?', [itemName], (error, results) => {
    
      connection.release();

      console.log('Connection released.');

      if (error) {
        console.error('Error fetching item details from database:', error);
        return res.status(500).send('Error occurred while adding item to cart');
      }

      if (results.length === 0) {
        console.log('Item not found:', itemName);
        return res.status(404).send('Item not found');
      }

      const item = results[0];
      
      // Update or add the item to the cart
      cart[itemName] = {
        quantity: (cart[itemName]?.quantity || 0) + 1,
        price: item.food_price
      };

      console.log('Item added to cart:', itemName);

      // Send response
      res.send('Item added to cart');
    });
  });
});


// Remove from cart function
app.post('/remove-from-cart/:itemName', (req, res) => {
  const itemName = req.params.itemName;

  // Check if the item exists in the cart
  if (!cart || !cart[itemName]) {
    return res.status(404).send('Item not found in cart');
  }


  if (cart[itemName].quantity > 1) {
  
    cart[itemName].quantity -= 1;
  } else {
    delete cart[itemName];
  }

  res.send('Item removed from cart');
});


// View cart
app.get('/view-cart', (req, res) => {
  const results = cart;
  res.send(results);
});

// Checkout function
app.post('/checkout', (req, res) => {
  const cart2 = cart;

  // Calculate total price
  let totalPrice = 0;

for (const itemName in cart2) {
  if (cart2.hasOwnProperty(itemName)) {
    const item = cart2[itemName];
    totalPrice += item.price * item.quantity;
  }
}
  // Create order object
  const order = {
    order_details: JSON.stringify(cart2),
    total_price: totalPrice,
    status: 'not paid',
    table_number: 1
  };

  // Get a connection from the pool
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      return res.status(500).send('Error getting MySQL connection');
    }

    // Insert order into database
    connection.query('INSERT INTO order_table SET ?', order, (error, results) => {
      // Release the connection back to the pool
      connection.release();

      if (error) {
        console.error('Error inserting order:', error);
        return res.status(500).send('Error occurred while processing order');
      }

      console.log('Order inserted successfully:', results.insertId);

      res.send('Order placed successfully');

      cart = {};
    });
  });
});

app.listen(3010, () => console.log("Example app is listening on port 3010."));