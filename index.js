const Blockchain = require('./Blockchain');
const Block = require('./Block');

const kubaCoin = new Blockchain();

kubaCoin.addNewBlock(new Block(1, "01/06/2020", { sender: "Jakub Kaczmarek", recepient: "Jan Kaczmarek", quantity: 50 }));
kubaCoin.addNewBlock(new Block(2, "01/07/2020", { sender: "Jan Kaczmarek", recepient: "Jakub Kaczmarek", quantity: 100 }));

console.log(kubaCoin);