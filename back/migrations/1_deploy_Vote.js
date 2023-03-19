const Vote = artifacts.require("Vote");

module.exports = function (deployer) {
  deployer.deploy(Vote, ["투표", "할", "내용", "집어 넣어놔라"]);
};
