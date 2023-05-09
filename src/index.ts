// Part interface
interface Part {
    partCategory: string;
    quantity: number;
    price: number;
}

// PartType Class
class PartType implements Part {
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

// Create a part
let screw: PartType = new PartType("Screw", "Wood Screw", 75, 2.99);
let nut: PartType = new PartType("Nut", "Hex Nut", 150, 5.5);
let bolt: PartType = new PartType("Bolt", "Carriage Bolt", 100, 5.99);

// Create an array of parts
let parts: PartType[] = [screw, nut, bolt]; // Array of PartType objects

// Inserts the output into the DOM
function insertIntoDOM(parts: PartType[]): void {
    let output: string = "";
    parts.forEach((part) => {
        output += `<div class="part">
        <p>Part Category: ${part.partCategory}</p>
        <p>Part Type: ${part.partType}</p>
        <p>Quantity: ${part.quantity}</p>
        <p>Price: ${part.price}</p>
        </div>`;
    });
    document.body.innerHTML = output;
}

// caller
insertIntoDOM(parts);
