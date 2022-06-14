function sendMail(contactForm) {
    emailjs.send("service_o5y7y3r", "rosie", {
        "project_request": contactForm.projectsummary.value,
        "from_form_name": contactForm.name.value,
        "from_form_email": contactForm.emailaddress.value
    })
    .then(
        function(reponse) {
            console.log("SUCCESS", reponse);
            console.log(contactForm.name.value)
            console.log(contactForm.emailaddress.value)
            console.log(contactForm.projectsummary.value)
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}