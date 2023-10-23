// Add your code here
let form = document.querySelector("form");

form.onsubmit = (event) => {
    event.preventDefault();
    const selectedCheckboxes = document.getElementsByName("courses");
    const courses = [];
    selectedCheckboxes.forEach((course) => {
        if (course.checked) {
            courses.push(course.value);
        }
    });
    if (form.elements.email.value && form.elements.fullName.value) {
        console.group("========== Form Submission ========== ");
        console.log("Full Name:", form.elements.fullName.value);
        console.log("Email:", form.elements.email.value);
        console.log("Registration Status:", form.elements.status.value);
        console.log("Courses:", courses.join(", "));
        console.log("Anything Else:", form.elements.moreInfo.value);
        console.groupEnd();
    } else {
        console.warn("Please enter full name and email to submit the form");
    }
};

// Referred https://getbootstrap.com/docs/5.0/forms/overview/
// Referred https://www.javatpoint.com/how-to-get-all-checked-checkbox-value-in-javascript