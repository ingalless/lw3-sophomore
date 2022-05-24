const { ethers } = require('hardhat');

async function main() {
  const whitelistContract = "0xaE1218AbcdEAB3b963342990928A5CaD83c4e6C0";
  const metadataUrl = 'https://nft-collection-sneh1999.vercel.app/api/';

  const contract = await ethers.getContractFactory('CryptoDevs');
  const deployed = await contract.deploy(metadataUrl, whitelistContract);
  console.log('Address:', deployed.address);
}

main().catch(console.error);
