function occupationOthers() {
    if (document.getElementById('occupationOther').checked) {
        document.getElementById('other').style.visibility = 'visible';
    } else {
        document.getElementById('other').style.visibility = 'hidden';
    }
}

// let form1 = document.getElementById("basic")
// let form2 = document.getElementById("others")
// let form3 = document.getElementById("work")
// let form4 = document.getElementById("education")
// let form5 = document.getElementById("team")
// let success = document.getElementById("response")

const steps = Array.from(document.querySelectorAll("form.step"));
const nextBtn = document.querySelectorAll("form.next-btn");
const prevBtn = document.querySelectorAll("form.pre-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
    button.addEventListener("click", () => {
        changeStep("Next");
    });
});
prevBtn.forEach((button) => {
    button.addEventListener("click", () => {
        changeStep("Previous");
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = [];
    form.querySelectorAll("input").forEach((input) => {
        const { name, value } = input;
        inputs.push({ name, value });
    });
    console.log(inputs);
    form.reset();
});

function changeStep(btn) {
    let index = 0;
    const active = document.querySelector(".active");
    index = steps.indexOf(active);
    steps[index].classList.remove("active");
    if (btn === "next") {
        index++;
    } else if (btn === "prev") {
        index--;
    }
    steps[index].classList.add("active");
}
