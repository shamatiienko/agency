
$("#contactForm").validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            number: true,
            minlength: 10
        },
        message: "required"
    },
    messages: {
        name: {
            required: "Please enter your name",
            minlength: "Your name must consist of at least 2 characters"
        },
        email: {
            required: "Please enter your email",
            email: "Please enter a valid email"
        },
        phone: {
            required: "Please enter your phone number",
            number: "Your phone number must consist only numbers",
            minlength: "Your phone number must consist of at least 10 numbers"
        },
        message: "Please enter a message"
    }
});

