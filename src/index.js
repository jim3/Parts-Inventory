// Create a part
var screw = {
    partCategory: "Screw",
    partType: "Wood Screw",
    quantity: 75,
    price: 2.99,
};
var nut = {
    partCategory: "Nut",
    partType: "Hex Nut",
    quantity: 150,
    price: 5.5,
};
var bolt = {
    partCategory: "Bolt",
    partType: "Carriage Bolt",
    quantity: 100,
    price: 5.99,
};
// Create an array of parts
var parts = [screw, nut, bolt]; // Array of PartType objects
// Inserts the output into the DOM
function insertIntoDOM(parts) {
    var output = "";
    parts.forEach(function (part) {
        output += "<div class=\"part\">\n        <h3>Part Category: ".concat(part.partCategory, "</h3>\n        <h4>Part Type: ").concat(part.partType, "</h4>\n        <p>Quantity: ").concat(part.quantity, "</p>\n        <p>Price: ").concat(part.price, "</p>\n        </div>");
    });
    document.body.innerHTML = output;
}
// caller
insertIntoDOM(parts);
