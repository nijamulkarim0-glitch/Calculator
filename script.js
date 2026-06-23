// =========================
// SELECT ELEMENTS
// =========================

const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

let expression = "";

// =========================
// UPDATE DISPLAY
// =========================

function updateDisplay() {
    display.textContent = expression || "0";
}

// Initial Display
updateDisplay();

// =========================
// BUTTON CLICK EVENTS
// =========================

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        // Clear Screen
        if (button.id === "clear") {

            expression = "";
            updateDisplay();
            return;
        }

        // Backspace
        if (value === "<") {

            expression = expression.slice(0, -1);
            updateDisplay();
            return;
        }

        // Calculate Result
        if (button.id === "equal") {

            try {

                expression = eval(expression).toString();

            } catch (error) {

                expression = "Error";
            }

            updateDisplay();
            return;
        }

        // Append Input
        expression += value;
        updateDisplay();

    });

});
