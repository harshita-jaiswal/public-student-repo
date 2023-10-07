const elem = document.querySelector("input");

const handleInput = function handleInputDisplayResult(e) {
	const input = e.target.value;
	const result = document.getElementById("result");
	if (input < 0) {
		result.innerHTML =
			'<span class="text-danger">Invalid input. Enter a positive number.</span>';
	} else if (input.length == 0) {
		result.innerHTML = "";
	} else {
		result.innerHTML = check(input);
	}
};

const check = function isPalindrome(value) {
	return value == value.toString().split("").reverse().join("")
		? '<span class="text-success">Yes, This is a palindrome!</span>'
		: '<span class="text-danger">No. Try again.</span>';
};
elem.addEventListener("input", handleInput);

// I referred bootstrap guide https://getbootstrap.com/docs/5.0/getting-started/introduction/
// And Airbnb style guide https://github.com/airbnb/javascript
