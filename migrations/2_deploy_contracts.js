var UploadContract = artifacts.require("../contracts/UploadContract.sol");

module.exports = function(deployer) {
	deployer.deploy(UploadContract);
};