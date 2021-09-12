// artifacts.require is like NPM's require, but returns contract abstraction
const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  // Deployer is main interface into staging deployment tasks
  deployer.deploy(Migrations);
};
