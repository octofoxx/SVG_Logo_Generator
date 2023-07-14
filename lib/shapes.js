class Shapes {
    constructor() {
        this.color = "";
    }

    setColor(shapeColor) {
        this.color = shapeColor;
    }

};

class Triangle extends Shapes {
    render(){
        return //define triangle here
    }
};

class Circle extends Shapes {
    render(){
        return //define circle here
    }
};

class Square extends Shapes {
    render(){
        return //define square here
    }
};

module.exports ={Triangle, Circle, Square};