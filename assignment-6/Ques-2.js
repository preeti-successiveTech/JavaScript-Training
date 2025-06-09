// 2. Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and
// Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {}
}
class Rectangle extends shape {
  super(length, width) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    console.log("Area of rectangle  " + this.width * this.height);
  }
}
class Triangle extends shape {
  super(length, width) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    console.log("Area of Triangle  " + 0.5 * this.width * this.height);
  }
}

const objRectangle = new Rectangle(30, 20);
objRectangle.getArea();
const objTriangle = new Triangle(20, 10);
objTriangle.getArea();
