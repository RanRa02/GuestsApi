const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ======================
// Data
// ======================
const peopleData = [
  {
    id: 6,
    uuid: "a3c9f2e1-4b7d-4e9c-9a12-6f8b1c2d3e40",
    name: "លី សុវណ្ណា",
    nickname: "សម្លាញ់ សុវណ្ណា",
  },
  {
    id: 7,
    uuid: "b5e1a9d4-2f8c-4a91-8c34-7e9d1a2b3f56",
    name: "ម៉ៅ រតនា",
    nickname: "សម្លាញ់ រតនា",
  },
  {
    id: 8,
    uuid: "c7d2f4a1-9b3e-42c8-9d11-5a6e7f8b2c90",
    name: "ឈុន វិសាល",
    nickname: "សម្លាញ់ វិសាល",
  },
  {
    id: 9,
    uuid: "d9a8b7c6-5e4f-43a2-9b18-1c2d3e4f5a67",
    name: "កែវ ចាន់រ័ត្ន",
    nickname: "សម្លាញ់ ចាន់រ័ត្ន",
  },
  {
    id: 10,
    uuid: "e1f2a3b4-5c6d-47e8-9a10-b1c2d3e4f590",
    name: "ប៊ុន សុភា",
    nickname: "ប្អូន សុភា",
  }
];

// ======================
// Routes
// ======================

// Get all people
app.get("/api/people", (req, res) => {
  res.json({
    success: true,
    data: peopleData,
  });
});

// Get person by ID
app.get("/api/people/id/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const person = peopleData.find((p) => p.id === id);

  if (!person) {
    return res.status(404).json({
      success: false,
      message: "Person not found",
    });
  }

  res.json({
    success: true,
    data: person,
  });
});

// Get person by UUID
app.get("/api/people/uuid/:uuid", (req, res) => {
  const { uuid } = req.params;
  const person = peopleData.find((p) => p.uuid === uuid);

  if (!person) {
    return res.status(404).json({
      success: false,
      message: "Person not found",
    });
  }

  res.json({
    success: true,
    data: person,
  });
});

// ======================
// Server
// ======================
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
