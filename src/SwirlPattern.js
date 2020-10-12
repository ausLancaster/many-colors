import { Noise } from 'noisejs';

// On construction create an 2d swirl pattern represented by a 2D array holding values either 0, 1, or 2.
// Values at particular points can accessed with get().
let SwirlPattern = {
    create: function(seed, width, height) {
        let ns = new Noise(seed);
        this.width = width;
        this.height = height;
        this.map = new Array(this.width);
        for (var i = 0; i < width; i++) {
            this.map[i] = new Array(this.height);
            for (var j = 0; j < this.height; j++) {
                // normalize pixel coordinates
                let uv_x = i / this.width;
                let uv_y = j / this.height;
                uv_x /= 20;
                uv_y /= 20;
                // sine wave pattern
                let jitter_x = ns.perlin2(20*uv_x, 20*uv_y);
                let jitter_y = ns.perlin2(20*uv_x, 20*uv_y);
                let h = 0.25 * (Math.sin((uv_x + jitter_x) * 20) + Math.sin((uv_y + jitter_y) * 80))+0.5;
                h = h + 0.3 * ns.perlin2(20*uv_x, 20*uv_y);
                h /= 1.3;
                // create bands
                if (h < 0.33)
                {
                    this.map[i][j] = 0;
                } else if (h < 0.67)
                {
                    this.map[i][j] = 1;
                } else{
                    this.map[i][j] = 2;
                }
            }
        }
    },
    get: function (x, y) {
        return this.map[x][y];
    }
}
export default SwirlPattern
