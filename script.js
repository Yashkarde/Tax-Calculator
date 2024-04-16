// Selecting input elements
const annualIncomeInput = document.querySelector("#anual-income");
const extraIncomeInput = document.querySelector("#extra-income");
const ageInput = document.querySelector("#age");
const tDeductionsInput = document.querySelector("#total-aplicable");
const submitButton = document.querySelector("button");
const closeButton = document.querySelector("#close");
const answerBox = document.querySelector(".output-page");

const eIcon = document.querySelectorAll("#error-icon1");
[annualIncomeInput].forEach(input => {
    input.addEventListener("input", () => {
        // Display error icon if the input value is not a number
        eIcon.forEach(icon => {
            if (isNaN(input.value)) {
                icon.style.display = "inline-block";
            } else {
                icon.style.display = "none";
            }
        });
    });
});
const eIcon2 = document.querySelectorAll("#error-icon2");
[extraIncomeInput].forEach(input => {
    input.addEventListener("input", () => {
        // Display error icon if the input value is not a number
        eIcon2.forEach(icon => {
            if (isNaN(input.value)) {
                icon.style.display = "inline-block";
            } else {
                icon.style.display = "none";
            }
        });
    });
});
const eIcon3 = document.querySelectorAll("#error-icon3");
[ tDeductionsInput].forEach(input => {
    input.addEventListener("input", () => {
        // Display error icon if the input value is not a number
        eIcon3.forEach(icon => {
            if (isNaN(input.value)) {
                icon.style.display = "inline-block";
            } else {
                icon.style.display = "none";
            }
        });
    });
});

const quemarkmsg = document.querySelectorAll("#questionMark1");

quemarkmsg.forEach(icon => {
    icon.addEventListener("mouseover", () => {
        const errorMessage = icon.getAttribute("data-message");
        icon.setAttribute("title", errorMessage);
    });
});
quemarkmsg.forEach(icon => {
    icon.addEventListener("mouseleave", () => {
        icon.removeAttribute("title");
    });
});

const quemarkmsg2 = document.querySelectorAll("#questionMark2");

quemarkmsg2.forEach(icon => {
    icon.addEventListener("mouseover", () => {
        const errorMessage = icon.getAttribute("data-message");
        icon.setAttribute("title", errorMessage);
    });
});
quemarkmsg2.forEach(icon => {
    icon.addEventListener("mouseleave", () => {
        icon.removeAttribute("title");
    });
});

const quemarkmsg3 = document.querySelectorAll("#questionMark3");

quemarkmsg3.forEach(icon => {
    icon.addEventListener("mouseover", () => {
        const errorMessage = icon.getAttribute("data-message");
        icon.setAttribute("title", errorMessage);
    });
});
quemarkmsg3.forEach(icon => {
    icon.addEventListener("mouseleave", () => {
        icon.removeAttribute("title");
    });
});

const quemarkmsg4 = document.querySelectorAll("#questionMark4");

quemarkmsg4.forEach(icon => {
    icon.addEventListener("mouseover", () => {
        const errorMessage = icon.getAttribute("data-message");
        icon.setAttribute("title", errorMessage);
    });
});
quemarkmsg4.forEach(icon => {
    icon.addEventListener("mouseleave", () => {
        icon.removeAttribute("title");
    });
});
const tipmsg = document.querySelectorAll("#error-icon1");

tipmsg.forEach(icon => {
    icon.addEventListener("mouseover", () => {
        const errorMessage = icon.getAttribute("data-message");
        icon.setAttribute("title", errorMessage);
    });
});
tipmsg.forEach(icon => {
    icon.addEventListener("mouseleave", () => {
        icon.removeAttribute("title");
    });
});

const tipmsg2 = document.querySelectorAll("#error-icon2");

tipmsg2.forEach(icon => {
    icon.addEventListener("mouseover", () => {
        const errorMessage = icon.getAttribute("data-message");
        icon.setAttribute("title", errorMessage);
    });
});
tipmsg2.forEach(icon => {
    icon.addEventListener("mouseleave", () => {
        icon.removeAttribute("title");
    });
});

const tipmsg3 = document.querySelectorAll("#error-icon3");

tipmsg3.forEach(icon => {
    icon.addEventListener("mouseover", () => {
        const errorMessage = icon.getAttribute("data-message");
        icon.setAttribute("title", errorMessage);
    });
});
tipmsg3.forEach(icon => {
    icon.addEventListener("mouseleave", () => {
        icon.removeAttribute("title");
    });
});

const inputFields = document.querySelectorAll("input");

// Adding event listener to the submit button
submitButton.addEventListener("click", () => {
    clearErrors();

    // Getting input values and converting to floats
    const annualIncomeValue = parseFloat(annualIncomeInput.value);
    const extraIncomeInputValue = parseFloat(extraIncomeInput.value);
    const tDeductionsInputValue = parseFloat(tDeductionsInput.value);
    const ageValue = ageInput.value;

    let isValid = true;

    // Calculation of tax
    if (isNaN(annualIncomeValue) || isNaN(extraIncomeInputValue) || isNaN(tDeductionsInputValue)) {
        showError(annualIncomeInput, "Invalid input");
        isValid = false;
    }

    if (ageValue === "") {
        showError(ageInput, "Age group is required");
        isValid = false;
    }

    if (isValid) {
        let tax = 0;
        let totalIncome = annualIncomeValue + extraIncomeInputValue - tDeductionsInputValue;

        if (totalIncome > 800000) {
            if (ageValue === "<40") {
                tax = 0.3 * (totalIncome - 800000);
            } else if (ageValue === "40-60") {
                tax = 0.4 * (totalIncome - 800000);
            } else if (ageValue === "≥60") {
                tax = 0.1 * (totalIncome - 800000);
            }
        }

        // Displaying result
        const ans = document.querySelector(".ans h2");
        ans.textContent = totalIncome - tax;
        answerBox.style.display = "flex";

        console.log("Tax: ", tax);
    }
});

function clearErrors() {
    const errorIcons = document.querySelectorAll(".error-icon");
    errorIcons.forEach(icon => icon.style.display = "none");
}   

function showError(inputElement, message) {
    const errorIcon = inputElement.parentElement.querySelector(".error-icon");
    errorIcon.style.display = "inline-block";
    errorIcon.setAttribute("title", message);
}

// Adding event listener to the close button
closeButton.addEventListener("click", () => {
    answerBox.style.display = "none";
});
