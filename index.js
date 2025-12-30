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
    id: 2,
    uuid: "4b9a8f3e-7a9c-4d2b-b1a7-21c91f8d5e11",
    name: "នី ផានឹត",
    nickname: "សម្លាញ់ ផានឹត",
  },
  {
    id: 3,
    uuid: "81f5b4cc-9b32-4fda-bc91-3a2e6d4b9f20",
    name: "ផាត សុថាក់",
    nickname: "សម្លាញ់ សុថាក់",
  },
  {
    id: 4,
    uuid: "d2e41a9c-0d87-4f21-a3cc-12a8b91f7c33",
    name: "សែន វីរៈ",
    nickname: "សម្លាញ់ វីរៈ",
  },
  {
    id: 5,
    uuid: "f7a1b2d9-6c3f-41b4-9e72-88a9c1d4e520",
    name: "ហ៊ាន សីហា",
    nickname: "ប្អូន សីហា",
  },
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
