const { ethers } = require('hardhat');


async function main() {
  const contract = await ethers.getContractFactory('Whitelist');
  const deployed = await contract.deploy(10);

  await deployed.deployed();
  console.log('Address:', deployed.address);
}

main().then(() => process.exit(0)).catch(console.error);
