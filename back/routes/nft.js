const router = require("express").Router();

const { Nft } = require("../models");

router.post("/", async (req, res) => {
  console.log("nft/로 들어왔다.");

  try {
    const Nft = await Nft.create(req.body);
    res.send({ isError: false, list });
  } catch (error) {
    res.send({ isError: true });
  }
});

router.post("/find", async (req, res) => {
  console.log("nft/find로 들어왔다.");
  try {
    const Nftlist = await Nft.findAll(req.body);
    res.send({ isError: false, list });
  } catch (error) {
    res.send({ isError: true });
  }
});

module.exports = router;
