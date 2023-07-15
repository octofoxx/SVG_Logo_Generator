//parent class Shapes, as all shapes will share having a color
class Shapes {
    constructor() {
        this.color = "";
    }

    setColor(shapeColor) {
        this.color = shapeColor;
    }

};

//extends its parent class and defines what a triangle is
class Triangle extends Shapes {
    render(){
        return `<polygon points="150,10 50,190 250,190"  fill= "${this.color}"/>`;
    }
};

//extends its parent class and defines what a circle is
class Circle extends Shapes {
    render(){
        return `<circle cx="150" cy="115" r="65" fill= "${this.color}"/>`;
    }
};

//extends its parent class and defines what a square is
class Square extends Shapes {
    render(){
        return `<rect x="100" y="70" width="100" height="100" height="30" fill= "${this.color}"/>`;
    }
};

module.exports ={Triangle, Circle, Square};