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
        return `<polygon points="200,10 300,190 100,190 fill= "${this.color}" />`;
    }
};

class Circle extends Shapes {
    render(){
        return `<circle cx="25" cy="75" r="20" fill= "${this.color}"/>`;
    }
};

class Square extends Shapes {
    render(){
        return `<rect x="10" y="10" width="30" height="30" fill = "${this.color}" />`;
    }
};

module.exports ={Triangle, Circle, Square};