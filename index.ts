// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Types</h1>
<p3>These are different typescript Types and how they are declared:</p3>`

//THE TYPES

let a: number; //type number
let b: "string"; //type string
let c: boolean; //type boolean

let d: any; //type any  =>  meaning variable "d" can be reassigned to a string, boolean, number etc
d = 5;
d = "girl";
d = true;
d = false;

let e: any = [1, 2, 3]; // type any number array
let f: any[] = [1, true, 3, false, "boy"] //type any array

//type enum:
//type enum iterates object, type/position say in an array of objects
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
const ColorYellow = 3;

enum Color { Red, Green, Yellow, Blue}
let backgroungColor = Color.Yellow