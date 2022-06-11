//factory function
function createCircle(redius) {
    return {
        redius,
        draw: function() {
            console.log('draw circle reduis ' + this.redius);
        }
    };
}

const circle1 = createCircle(1);
circle1.draw();
circle1.redius = 2;
circle1.draw();

