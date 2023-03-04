class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function getSmallestPrimeDivisor(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0 && isPrime(i)) {
      return i;
    }
  }
  return n;
}

function getModuloWithSmallestPrime(nums) {
  let sum = nums.reduce((acc, cur) => acc + cur);
  let smallestPrime = nums.find((n) => n >= 2 && isPrime(n));
  if (smallestPrime === undefined) {
    smallestPrime = getSmallestPrimeDivisor(sum);
  }
  console.log(sum, smallestPrime, "spin = ", sum % smallestPrime);
  return sum % smallestPrime;
}

function rotateArrayAntiClockwise(arr, n) {
  let arr1 = arr.slice(0, n);

  let arr2 = arr.slice(n);

  return arr2.concat(arr1);
}

function getPassword(nums) {
  let spins = getModuloWithSmallestPrime(nums);
  let password = rotateArrayAntiClockwise(nums, spins);
  return password.join(" ");
}

let nums = [90, 45, 37, 80, 1, 46];
let password = getPassword(nums);
console.log(password); // Output: "80 1 46 90 45 37"

nums = [90, 45, 78, 27, 63];
password = getPassword(nums);
console.log(password); // Output: "90 45 78 27 63"
