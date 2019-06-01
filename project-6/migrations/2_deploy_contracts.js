// migrating the appropriate contracts
var Farmer = artifacts.require("./Farmer.sol");
var Distributor = artifacts.require("./Distributor.sol");
var Retailer = artifacts.require("./Retailer.sol");
var Consumer = artifacts.require("./Consumer.sol");
var SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = function(deployer) {
  deployer.deploy(Farmer);
  deployer.deploy(Distributor);
  deployer.deploy(Retailer);
  deployer.deploy(Consumer);
  deployer.deploy(SupplyChain);
};
