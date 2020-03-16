const Blockchain = require('./Blockchain');

const kubaCoin = new Blockchain();

kubaCoin.addNewBlock(1, "01/06/2020", { sender: "Jakub Kaczmarek", recepient: "Jan Kaczmarek", quantity: 50 });
kubaCoin.addNewBlock(2, "01/07/2020", { sender: "Jan Kaczmarek", recepient: "Jakub Kaczmarek", quantity: 100 });

console.log(kubaCoin);