const {Triangle, Circle, Square} = require('./shapes');

describe ('Triangle test',()=>{
    describe('render', ()=>{
        it('should create a triangle', ()=>{
            const shape = new Triangle();
            shape.setColor("purple");
            expect(shape.render()).toEqual(
                `<polygon points="150,10 50,190 250,190"  fill= "purple"/>`
            );
        });
    });
});

describe ('Circle test',()=>{
    describe('render', ()=>{
        it('should create a circle', ()=>{
            const shape = new Circle();
            shape.setColor("purple");
            expect(shape.render()).toEqual(
                `<circle cx="150" cy="115" r="65" fill= "purple"/>`
            );
        });
    });
});

describe ('Square test',()=>{
    describe('render', ()=>{
        it('should create a square', ()=>{
            const shape = new Square();
            shape.setColor("purple");
            expect(shape.render()).toEqual(
                `<rect x="100" y="70" width="100" height="100" height="30" fill= "purple"/>`
            );
        });
    });
});