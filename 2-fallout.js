await contract.Fal1out.sendTransaction({
    gasPrice: web3.utils
        .toBN(await web3.eth.getGasPrice())
        .mul(web3.utils.toBN('2'))
        .toString(),
});
