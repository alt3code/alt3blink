import brain from './brain.js';
var net = new brain.NeuralNetwork();

export default function run_color(r, g, b) {
	net.train([{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
	           {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
	           {input: { r: 0.5, g: 0.5, b: 1 }, output: { white: 1 }},
	           {input: { r: 0.78, g: 0.47, b: 0.1 }, output: { black: 1 }}]);

	var { white, black } = net.run({ r: r, g: g, b: b });  // { white: 0.99, black: 0.002 }
	return white > black ? "#FFFFFF" : "#000000";
}