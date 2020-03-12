let element: HTMLDivElement = <HTMLDivElement>document.getElementById("content");

let AlterTextButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("AlterTextButton")
AlterTextButton.addEventListener("click", caseApplicator);

let inputSpace: HTMLInputElement = <HTMLInputElement>document.getElementById("TextInputField");


let caseSelector: HTMLSelectElement = <HTMLSelectElement>document.getElementById("CapsOptions");



function caseApplicator() {
    let enteredString: string = inputSpace.value;
    let caseState: string = caseSelector.value;
    console.log(caseState);
    if (caseState === "ToUpper") {
        console.log("ToUpper foretaget")
        enteredString = enteredString.toUpperCase();
        console.log(enteredString)
        element.innerHTML = enteredString;

    }

    if (caseState === "ToLower") {
        element.innerHTML = enteredString.toLowerCase();
    }
}

