// Part interface
interface Part {
    partCategory: string;
    quantity: number;
    price: number;
}

// PartType interface
interface PartType extends Part {
    partType: string;
}

// Create a part
let screw: PartType = {
    partCategory: "Screw",
    partType: "Wood Screw",
    quantity: 75,
    price: 2.99,
};

let nut: PartType = {
    partCategory: "Nut",
    partType: "Hex Nut",
    quantity: 150,
    price: 5.5,
};

let bolt: PartType = {
    partCategory: "Bolt",
    partType: "Carriage Bolt",
    quantity: 100,
    price: 5.99,
};

// Create an array of parts
let parts: PartType[] = [screw, nut, bolt]; // Array of PartType objects

// Inserts the output into the DOM
function insertIntoDOM(parts: PartType[]): void {
    let output: string = "";
    parts.forEach((part) => {
        output += `<div class="part">
        <h3>Part Category: ${part.partCategory}</h3>
        <h4>Part Type: ${part.partType}</h4>
        <p>Quantity: ${part.quantity}</p>
        <p>Price: ${part.price}</p>
        </div>`;
    });
    document.body.innerHTML = output;
}

// Insert the output into the DOM
insertIntoDOM(parts);
