// Creates a class called `Part` that includes the following properties: partCategory, partType, quantity, and price.

class Part {
    partCategory: string;
    partType: string;
    quantity: number;
    price: number;

    constructor(partCategory: string, partType: string, quantity: number, price: number) {
        this.partCategory = partCategory;
        this.partType = partType;
        this.quantity = quantity;
        this.price = price;
    }
}

// Create a part object
let screw: Part = new Part("Screw", "Wood Screw", 75, 2.99);
let nut: Part = new Part("Nut", "Hex Nut", 150, 5.5);
let bolt: Part = new Part("Bolt", "Carriage Bolt", 100, 5.99);

// Create an array of PartType objects
let parts: Part[] = [screw, nut, bolt];

// Inserts the output into the DOM
function insertIntoDOM(parts: Part[]): void {
    let output: string = "";
    parts.forEach((part) => {
        output += `<div class="part">
        <p>Part Category: ${part.partCategory}</p>
        <p>Part Type: ${part.partType}</p>
        <p>Quantity: ${part.quantity}</p>
        <p>Price: ${part.price}</p>
        </div>
        <code>---------------------------------</code>`;
    });
    document.body.innerHTML = output;
}

insertIntoDOM(parts);
