const { Block, Blockchain, SBChain } = require("./index");
// Block is a class for creating blocks.
// Blockchain is the blockchain class, which means you can inherit this class and upgrade JeChain if you want.
// JeChain is a "Blockchain" object, which is ready to use.

// JeChain.chain // The whole chain
// JeChain.difficulty // The difficulty
// JeChain.getLastBlock() // The latest block
// JeChain.isValid() // "true" if chain is valid, "false" otherwise.
// new Block(timestamp /*string - "optional"*/, data /*array - "optional"*/) // Creates a new "Block" object.
// JeChain.addBlock(block) // Mines the block and add the block to the chain.

// A transaction example:
SBChain.addBlock(new Block(Date.now().toString(), [{ from: "nguyenphuminh", to: "girlfriend", amount: 100 }]));
// Note that this is only an example, transactions often need more steps before being pushed to the chain.