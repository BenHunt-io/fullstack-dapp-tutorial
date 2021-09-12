const Voting = artifacts.require("Voting");

// Deployment logic
module.exports = function(deployer) {
  // (contract, args..., options)
  let args = ['Rama', 'Nick', 'Jose'].map(name => web3.utils.asciiToHex(name));
  deployer.deploy(Voting, args);
};


/* As you can see above, the deployer expects the first argument to   be the name of the contract followed by constructor arguments. In our case, there is only one argument which is an array of
candidates. The third argument is a hash where we specify the gas required to deploy our code. The gas amount varies depending on the size of your contract.
*/