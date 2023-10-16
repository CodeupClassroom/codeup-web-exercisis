class Car {
    constructor(color,brand,doors) {
        this.color = color;
        this.brand = brand;
        this.doors = doors;
    }
    zoom(){
        console.log(this.color,this.brand,this.doors);
    }
}



let Car1 = new Car("black","chevy",4)
// let car2 = new Car("blue", "honda" ,2 )
// console.log(Car1)
// console.log(car2)
Car1.zoom()