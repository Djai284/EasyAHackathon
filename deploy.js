require('@nomiclabs/hardhat-ethers');
// scripts/deploy.js
async function main() {
    // 1. Get the contract to deploy
    const Meta = await ethers.getContractFactory('Metadata');
    console.log('Deploying Metadata...');
 
    // 2. Instantiating a new Box smart contract
    const meta = await Meta.deploy();
 
    // 3. Waiting for the deployment to resolve
    await meta.deployed();
 
    // 4. Use the contract instance to get the contract address
    console.log('meta deployed to:', meta.address);

    const NFT = await ethers.getContractFactory('MyToken');
    console.log("Deploying NFT contract...");
    const nft = await NFT.deploy();
    await nft.deployed();
    console.log('NFT deploted to:', nft.address);
 }
 
 main()
    .then(() => process.exit(0))
    .catch((error) => {
       console.error(error);
       process.exit(1);
    });
 