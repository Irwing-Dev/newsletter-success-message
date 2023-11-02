const btnSend = document.querySelector(".send-email");
const formSect = document.querySelector(".form-section");
const successSect = document.querySelector(".section-success-message");
const mailInput = document.querySelectorAll(".mail-input")[0];
const errorSpan = document.querySelector(".error-span");
const userSpan = document.querySelector(".user-mail");

const errorMessage = "Valid email required"

btnSend.addEventListener("click", (e) => {
    e.preventDefault()

    if (mailInput.style.borderColor == "var(--Tomato)" || mailInput.value == 0) {
        errorSpan.innerHTML = errorMessage
    } else {
        formSect.style.display = "none"
        successSect.style.display = "flex"
        userSpan.innerHTML = mailInput.value
        userMail.push(mailInput.value)
    }
})

