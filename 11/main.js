const queue = require("./queue");

const q = new queue();

q.enqueue("A");
q.enqueue("B");
q.enqueue("C");
q.enqueue("D");
q.enqueue("E");
q.enqueue("F");
q.enqueue("G");
q.enqueue("H");
q.enqueue("I");
q.enqueue("J");

q.run();
