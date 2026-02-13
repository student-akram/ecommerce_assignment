const express = require("express");
const router=express.Router();


router.use(express.json());

/* ✅ GET /cart/:userId */
router.get("/:userId", (req, res) => {
  const userId = req.params.userId;

  res.send(`Fetching cart for user with ID: ${userId}`);
});

/* ✅ POST /cart/:userId */
router.post("/:userId", (req, res) => {
  const userId = req.params.userId;

  res.send(`Adding product to cart for user with ID: ${userId}`);
});
module.exports = router;   