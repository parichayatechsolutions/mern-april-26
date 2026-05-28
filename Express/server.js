const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const { ObjectId } = require("mongodb");
const { connectDB, getDB } = require("./db");
const swaggerSpec = require("./swagger");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Swagger UI route -> http://localhost:5000/api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *     responses:
 *       200:
 *         description: User created
 */
app.post("/users", async (req, res) => {
  const db = getDB();
  const result = await db.collection("users").insertOne(req.body);
  res.send({ message: "User created", id: result.insertedId });
});

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 */
app.get("/users", async (req, res) => {
  const db = getDB();
  const users = await db.collection("users").find().toArray();
  res.send(users);
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a single user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A user object
 */
app.get("/users/:id", async (req, res) => {
  const db = getDB();
  const user = await db
    .collection("users")
    .findOne({ _id: new ObjectId(req.params.id) });
  res.send(user);
});

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *     responses:
 *       200:
 *         description: User updated
 */
app.put("/users/:id", async (req, res) => {
  const db = getDB();
  await db
    .collection("users")
    .updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
  res.send({ message: "User updated" });
});

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted
 */
app.delete("/users/:id", async (req, res) => {
  const db = getDB();
  await db
    .collection("users")
    .deleteOne({ _id: new ObjectId(req.params.id) });
  res.send({ message: "User deleted" });
});

// Start server after DB connects
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`Swagger docs on http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((err) => {
    console.error("Failed to start:", err);
  });
