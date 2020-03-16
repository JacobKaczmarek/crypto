const SHA256 = require('crypto-js/sha256');

module.exports = class Block {
  constructor (index, timeStamp, data, precedingHash = "") {
    this.index = index;
    this.timeStamp = timeStamp;
    this.data = data;
    this.precedingHash = precedingHash;
    this.nonce = 0
    this.hash = this.computeHash()
  }

  computeHash () {
    return SHA256(this.index + this.precedingHash + this.timeStamp + JSON.stringify(this.data) + this.nonce).toString();
  }

  proofOfWork (difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}