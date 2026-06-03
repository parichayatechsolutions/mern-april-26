# Express CRUD with MongoDB

A simple Express.js CRUD API using the MongoDB local client.

## Setup

1. Make sure **MongoDB** is running locally on `mongodb://127.0.0.1:27017`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

Server runs on `http://localhost:5000`

## Files

- **db.js** — connects to MongoDB
- **server.js** — Express app with CRUD routes

## API Endpoints

| Method | Route          | Description       |
| ------ | -------------- | ----------------- |
| POST   | /users         | Create a user     |
| GET    | /users         | Get all users     |
| GET    | /users/:id     | Get one user      |
| PUT    | /users/:id     | Update a user     |
| DELETE | /users/:id     | Delete a user     |

## Example Request

Create a user:
```bash
curl -X POST http://localhost:5000/users \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"John\",\"age\":25}"
```
