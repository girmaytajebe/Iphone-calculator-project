let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
	button.addEventListener("click", (e) => {
		if (e.target.innerHTML === "=") {
			string = evaluateExpression(string);
			document.querySelector("input").value = string;
		} else if (e.target.innerHTML === "AC") {
			string = "";
			document.querySelector("input").value = string;
		} else {
			console.log(e.target);
			string = string + e.target.innerHTML;
			document.querySelector("input").value = string;
		}
	});
});

function evaluateExpression(expression) {
	// Replace the multiplication symbol (×) with an asterisk (*)
	expression = expression.replace(/×/g, "*");

	// Replace the division symbol (÷) with a forward slash (/)
	expression = expression.replace(/÷/g, "/");

	// Use the eval() function to evaluate the expression
	const result = eval(expression);

	// Round the result to a maximum of 2 decimal places
	return Math.round(result * 100) / 100;
}

