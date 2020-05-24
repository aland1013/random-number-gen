var Lighthouse = artifacts.require('Lighthouse');
var Gamble = artifacts.require('Gamble');

module.exports = (deployer) => {
  deployer.deploy(Lighthouse).then(() => {
    return deployer.deploy(Gamble, Lighthouse.address);
  });
};
