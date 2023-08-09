class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }

  run() {
    console.log(`[LOG] Print all data in queue`);
    while (this.queue.length > 0) {
      const item = this.dequeue();
      const delay = Math.floor(Math.random() * 10) + 1;
      setTimeout(() => {
        console.log(`[LOG] Queue: ${item} done in ${delay} seconds`);
      }, delay * 1000);
    }
  }

  get size() {
    return this.queue.length;
  }
}

module.exports = Queue;
