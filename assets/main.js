function sendMail(contactForm){
    emailjs.send("gmail", "aikido",{
                "from_name": contactForm.name.value,
                "from_tel": contactForm.tel.value,
                "from_email": contactForm.email.value,
                "message": contactForm.contact.value
    })
    .then(
        function(response) {
            alert("SUCCESS! We've got your message and wil answer soon", response);
        },
        function(error) {
            alert("Sending FAILED, please contact Jason via his mobile number underneath.", error);
        }
    );
    return false; 
}
