const router = require("express").Router();

const nft = require("./nft");

router.use("/nft", nft);

module.exports = router;
