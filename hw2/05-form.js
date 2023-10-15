// Add your code here
let form = document.querySelector("form");

form.onsubmit = (event) => {
    event.preventDefault();
    const selectedCheckboxes = document.querySelectorAll(
        "input[type=checkbox]:checked"
    );
    if (form.elements.email.value && form.elements.fullName.value) {
        console.group("========== Form Submission ========== ");
        console.log("Full Name:", form.elements.fullName.value);
        console.log("Email:", form.elements.email.value);
        console.log("Registration Status:", form.elements.status.value);
        console.log(
            "Courses:",
            Array.from(selectedCheckboxes)
                .map((checkbox) => checkbox.value)
                .join(", ")
        );
        console.log("Anything Else:", form.elements.moreInfo.value);
        console.groupEnd();
    } else {
        console.warn("Please enter full name and email to submit the form");
    }
};
