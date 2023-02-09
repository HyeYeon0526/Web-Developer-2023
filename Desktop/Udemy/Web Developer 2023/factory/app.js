// function makeColor(r,g,b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     }
//     color.hex = function() {
//         const { r, g, b } = this;
//         return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     return color;
// }

// const firstColor = makeColor(35,255,150);
// firstColor.hex()

// const purple = makeColor(155,0,155)
// purple.rgb()



function Color(r,g,b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
}

Color.prototype.hex = function() {
    const { r, g, b } = this;
    return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b},${a})`;
}

const color1 = Color(1,2,3); // 내부에서 암묵적으로 객체가 생성되지 않았기 때문에 undefined
const color2 = new Color(40, 50, 60);

console.log(color2.rgb());
console.log(color2.hex());
console.log(color2.rgba(0.3));



