const express = require("express");
const fs = require('fs');
const path = require('path');
const users = require('./MOCK_DATA.json');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 8000;
const filePath = path.join(__dirname, 'MOCK_DATA.json');

// HTML route
app.get("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});

// GET all users (API)
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// Routes for specific user by ID
app.route('/api/users/:id')
  // GET user by ID
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    return res.json(user);
  })

  // PATCH user by ID
  .patch((req, res) => {
    const id = Number(req.params.id);
    const updatedData = req.body;
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }

    users[userIndex] = { ...users[userIndex], ...updatedData };

    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to update user' });
      }
      res.json({ status: 'User updated', user: users[userIndex] });
    });
  })

  // DELETE user by ID
  .delete((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }

    const deletedUser = users.splice(userIndex, 1);

    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to delete user' });
      }
      res.json({ status: 'User deleted', user: deletedUser[0] });
    });
  });

// POST: Create new user
app.post('/api/users', (req, res) => {
  const body = req.body;

  const newUser = { ...body, id: users.length + 1 };
  users.push(newUser);

  fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to write file' });
    }
    res.status(201).json({ status: 'success', user: newUser });
  });
});

// Start the server
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
