window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector(".loader").classList.add("hidden");
    }, 0);
});

const button = document.querySelector("#button-log");
const type1 = document.querySelector("#user-info");
const type2 = document.querySelector("#password-info");
const authButton = document.querySelector(".first-authitication");
const authButton2 = document.querySelector(".second-authitication");

authButton &&
    authButton.addEventListener("click", (event) => {
        event.preventDefault();
        alert(
            "Ha'li beri bu qurulmalar ishlamayapti NOQULAYCHILIKLAR UCHUN UZUR"
        );
    });

authButton2 &&
    authButton2.addEventListener("click", (event) => {
        event.preventDefault();
        alert(
            "Ha'li beri bu qurulmalar ishlamayapti NOQULAYCHILIKLAR UCHUN UZUR"
        );
    });

const correctUsername = "admin";
const correctPassword = "12345";

button &&
    button.addEventListener("click", (event) => {
        event.preventDefault();

        if (!type1.value || !type2.value) {
            alert("Iltimos, barcha maydonlarni to'ldiring!");
            return;
        }

        if (
            type1.value === correctUsername &&
            type2.value === correctPassword
        ) {
            alert("parolni togri terdingiz MOLODES");
            window.location.href = "./main.html";
        } else {
            alert("Username yoki Password noto'g'ri!");
        }
        type1.value = "";
        type2.value = "";
    });
