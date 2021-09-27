require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth place million hope open furnace gentle'; 
let testAccounts = [
"0x276618478888292f54792aedf56e3f744e4c3d301c2293cd3f8bef15bd52bbce",
"0x3764cab47983563eb3857896f4492ad4011ba20d334fd2fcc5ef5b69697f131c",
"0x2840ebd9ef5995b1bfd59ca2909c1f7761c79e1df5eba5979ac8185dc4fc4278",
"0xca33cb4479056524a6eab1f30403d7513c850299f5c6f859b7810b45cbd886b3",
"0xec1a0c4d7946ca54d179ca30b0765903268970e4ad1756893a3459c53a8231a5",
"0xdb209e7b0cc07cbb962b569dad6d35700a9d9f0ae1714583a876b02d1451e332",
"0x159bbb282936c8168d23dbfa8878e5b740c66dfe0cc3beff789ac9320f4092dc",
"0x362085f0a0fd71ba0aac2945ab8c5c61b322f7289485a35fc68f321210101ed9",
"0x473f949cc845538eeca4a08e9e159f06735b7107876b1958624209338e08f2c8",
"0x3b6568c8cd72ed1529af9ff1819a5a64ebe1aaad3b33ae2db80190998f02e57b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

