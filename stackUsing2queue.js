class Queue {
  constructor() {
    this.elements = [];
  }

  insert(item) {
    this.elements.push(item);
  }

  delete() {
    let current = this.elements[0];
    this.elements.shift();
    return current;
  }

  first() {
    // console.log("First Element:", this.elements[0]);
    return this.elements[0];
  }
  size() {
    return this.elements.length;
  }
  toString() {
    let string = "";
    for (let i = 0; i < this.elements.length; i++) {
      string += this.elements[i] + " ";
    }
    return string;
  }
}

const queue1 = new Queue();
const queue2 = new Queue();

// console.log(queue.elements);
// console.log("Deleted: ", queue.delete());
// console.log(queue.elements);
// queue.first();
// console.log(queue.toString());

///Stack Using 2 queue
function stackUsingQueue(q1, q2) {
  function push(value) {
    q1.insert(value);
  }

  push(10);
  push(40);
  push(30);
  push(50);
  push(70);

  console.log("Q1", q1);
  console.log("Q2", q2);

  function pop() {
    let n = q1.size();
    for (let i = 0; i < n - 1; i++) {
      q2.insert(q1.first());
      q1.delete();
    }
    console.log("Poped: ", q1.first());
    q1.delete();
    [q1, q2] = [q2, q1];
  }

  function top() {
    console.log("Top: ", q1.elements[q1.size() - 1]);
  }
  console.log("Q1", q1);
  console.log("Q2", q2);

  top();
  pop();
  pop();
  push(100);
  top();
  console.log("Q1", q1);
  console.log("Q2", q2);
}

stackUsingQueue(queue1, queue2);
