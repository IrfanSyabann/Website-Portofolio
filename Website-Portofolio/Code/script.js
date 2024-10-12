let page = document.querySelectorAll("section");

window.onscroll = () => {
    page.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add("animation");
        }
        else {
            sec.classList.remove("animation");
        }
    })
}

function getValue(event) {
}

function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_repad3l", "template_tplmaq7", params).then(
        (res) => {
            alert("Success Send Email")
        }, (error) => {
            alert("Failed Send Email");
        }
    )
}