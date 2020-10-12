// increment between discrete colors
const step = 8;
// max color
const max_color = 255;

// Call assignNext() repeatedly and ColorPicker will generate and sequence of colors, with every color  represented once.
let ColorPicker = {
    r : -step,
    g : 0,
    b : 0,
    assignNext : function(data) {

        this.r += step;

        if (this.r > max_color) {
            this.r = 0;
            this.g += step;
            if (this.g > max_color) {
                this.g = 0;
                this.b += step;
                if (this.b > max_color) {
                    this.b = 0;
                }
            }
        }

        data[0] = this.r;
        data[1] = this.b;
        data[2] = this.g;

        //console.log(this.r + ":" + this.g + ":" + this.b);
    }
};

export default ColorPicker