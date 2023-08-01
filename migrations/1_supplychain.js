var supplychain = artifacts.require("./supplychain.sol");

module.exports = function (deployer) {
  deployer.deploy(supplychain);
};