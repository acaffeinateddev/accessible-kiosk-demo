let interactionArea = document.getElementsByClassName("interaction-area")[0];
let interactionAreaPosition = Number(interactionArea.style.bottom) 
let movementAmount = 50

disableOrEnableMoveButtons();

function moveInteractionAreaDown() {
    if (interactionAreaPosition != -300) {        
        let newInteractionAreaPosition = interactionAreaPosition -= movementAmount;

        interactionArea.style.bottom = `${newInteractionAreaPosition}px`
        disableOrEnableMoveButtons();
    } 
}

function moveInteractionAreaUp() {
    if (interactionAreaPosition != 432 || interactionAreaPosition >= 432) {        
        let newInteractionAreaPosition = interactionAreaPosition += movementAmount;

        interactionArea.style.bottom = `${newInteractionAreaPosition}px`
        disableOrEnableMoveButtons();
    }
}

function disableOrEnableMoveButtons() {
    let buttonsDown = document.querySelectorAll(".move-down");
    let buttonsUp = document.querySelectorAll(".move-up");

    if (interactionAreaPosition == -300) {
        buttonsDown.forEach(buttonDown => {
            buttonDown.disabled = true;
        });
    } else if (interactionAreaPosition == 432 || interactionAreaPosition >= 432) {
        buttonsUp.forEach(buttonUp => {
            buttonUp.disabled = true;
        });
    }
    else {
        let moveButtons = document.querySelectorAll(".move-up, .move-down")
        moveButtons.forEach(moveButton => {
            moveButton.disabled = false;
        });
    }
}