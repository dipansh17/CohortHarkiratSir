class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }
  destroy() {
    console.log("Destroyed Class");
  }
}

const rect = new Rectangle(2, 4, "red");
const area = rect.area();
rect.paint();
console.log(area);
rect.destroy();

const now = new Date();

const map = new Map();
map.set("name", "Alice");
map.set("age", 30);

console.log(map.get("hello"));

map.set("hello", 12);

console.log(map.get("hello"));
function main() {
  console.log("Main");
}
setTimeout(main, 3000);

//very imp
function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function callback() {
  console.log("3 seconds have passed");
}
setTimeoutPromisified(3000).then(callback);

// promises are just syntactically cleaner than callback

//callback
function cb() {
  console.log("cb called!");
}
setTimeout(cb, 10000);

setTimeoutPromisified(1000).then(cb); //better than callback
