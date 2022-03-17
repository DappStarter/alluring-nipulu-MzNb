require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remember snake idea problem bubble giggle'; 
let testAccounts = [
"0xbc5a2a754e87262cbf8a9e7ba05ef9a9800ca30f545b1aa775fcd713c5e674d0",
"0xf863f39de0a621a36681fcee8848bec1209e4c889b7a1d89aa6115ec53ae30f1",
"0x4729011b8f54de54037f7defa80f8fe037158a485d59364b525160150d03073f",
"0x6366e7c55469baec48c526be1d1dea15d399c96d8c59ac56a37c4e8534bb6d05",
"0x2807fccd80a50d4ea12ecbbe836a5918d2743032cf1c4a56ac2b736c75c2da70",
"0x4685ff9170c49dd4adf48f0fc0b393b8eb35f7df9bd70fb83f18c8a2cc200604",
"0x39fbade921041e744e5d90c51a4b611ea3f05b7e6bc569018f655a6707040a09",
"0x0a159139ebc4139eea9b6bc465c922db360eda0fe6ab570f9874b32df4b60fa2",
"0x04f325ff4e2fb9d5b803d30ee0c5efd3670cd955f9cf36b4b3b7547cd8d854e0",
"0xe16356e045ce37228118acb3dfafc272aec2bac68a0a0a87abfe7968cfcf3b94"
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

