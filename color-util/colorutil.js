
module.exports = {
    // sets luminosity equal to the function to calculate luminosity and places it in exports so it can be accessed by other files
    luminosity: function(r, g, b) {return (0.2126 * r) + (0.7152 * g) + (0.0722 * b);},
    darken: function (r,g,b) {return (0.8 * r) + ' ' + (0.8 * g) + ' ' + (0.8 * b);}
};