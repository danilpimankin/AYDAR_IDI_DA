export const contractABI = [{
    "anonymous": false, "inputs": [
        { "indexed": true, "internalType": "address", "name": "_buyer", "type": "address" },
        { "indexed": true, "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
        { "indexed": false, "internalType": "uint256", "name": "_price", "type": "uint256" }
    ], "name": "BuyItem", "type": "event"
},
{
    "anonymous": false, "inputs": [
        { "indexed": true, "internalType": "address", "name": "_seller", "type": "address" },
        { "indexed": true, "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ], "name": "CancelListing", "type": "event"
},
{
    "anonymous": false, "inputs": [
        { "indexed": true, "internalType": "address", "name": "_seller", "type": "address" },
        { "indexed": true, "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
        { "indexed": false, "internalType": "address", "name": "_tokenAddress", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "_price", "type": "uint256" }
    ], "name": "ListItem", "type": "event"
},
{
    "inputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
    ], "name": "_listings", "outputs": [
        { "internalType": "address", "name": "owner", "type": "address" },
        { "internalType": "address", "name": "tokenAddress", "type": "address" },
        { "internalType": "uint256", "name": "price", "type": "uint256" }
    ], "stateMutability": "view", "type": "function"
},
{
    "inputs": [
        { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ], "name": "buyItem", "outputs": [], "stateMutability": "payable", "type": "function"
},
{
    "inputs": [
        { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ], "name": "cancelListing", "outputs": [], "stateMutability": "nonpayable", "type": "function"
},
{
    "inputs": [
        { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
        { "internalType": "uint256", "name": "_price", "type": "uint256" },
        { "internalType": "address", "name": "_tokenAddress", "type": "address" }
    ], "name": "listItem", "outputs": [], "stateMutability": "nonpayable", "type": "function"
},
{
    "inputs": [
        { "internalType": "address", "name": "", "type": "address" },
        { "internalType": "address", "name": "", "type": "address" },
        { "internalType": "uint256", "name": "", "type": "uint256" },
        { "internalType": "bytes", "name": "", "type": "bytes" }
    ], "name": "onERC721Received", "outputs": [
        { "internalType": "bytes4", "name": "", "type": "bytes4" }
    ], "stateMutability": "pure", "type": "function"
}
]