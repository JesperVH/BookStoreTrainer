import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

interface IRecord {
    title: string;
    artist: string;
    duration: number;
    yearOfProduction: number;
}

let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("GetAllButton");
buttonElement.addEventListener("click", showAllRecords);
let specificButtonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("GetSpecificButton")
specificButtonElement.addEventListener("click", showRecordByTitle);
let SearchInputField: HTMLInputElement = <HTMLInputElement>document.getElementById("SearchField")
let baseUri: string = "https://drrecordsservice.azurewebsites.net/api/Records";
let outputElement: HTMLDivElement = <HTMLDivElement>document.getElementById("content");

function showAllRecords(): void {
    axios.get<IRecord[]>(baseUri)
        .then(function (response: AxiosResponse<IRecord[]>): void {
            // element.innerHTML = generateSuccessHTMLOutput(response);
            // outputHtmlElement.innerHTML = generateHtmlTable(response.data);
            // outputHtmlElement.innerHTML = JSON.stringify(response.data);
            let result: string = "<ul id='recordlist'>";
            response.data.forEach((record: IRecord) => {
                result += "<li>" + record.title + " " + record.artist + " " + record.duration + " " + record.yearOfProduction + "</li>";
            });
            result += "</ul>";
            outputElement.innerHTML = result;
        })
        .catch(function (error: AxiosError): void { // error in GET or in generateSuccess?
            if (error.response) {
                // the request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index
                outputElement.innerHTML = error.message;
            } else { // something went wrong in the .then block?
                outputElement.innerHTML = error.message;
            }
        });

}
function showRecordByTitle(): void {
    axios.get<IRecord[]>(baseUri, { params: { title = SearchInputField.value } })
        .then(function (response: AxiosResponse<IRecord[]>): void {
            // element.innerHTML = generateSuccessHTMLOutput(response);
            // outputHtmlElement.innerHTML = generateHtmlTable(response.data);
            // outputHtmlElement.innerHTML = JSON.stringify(response.data);
            let result: string = "<ul id='recordlist'>";
            response.data.forEach((record: IRecord) => {
                result += "<li>" + record.title + " " + record.artist + " " + record.duration + " " + record.yearOfProduction + "</li>";
            });
            result += "</ul>";
            outputElement.innerHTML = result;
        })
        .catch(function (error: AxiosError): void { // error in GET or in generateSuccess?
            if (error.response) {
                // the request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index
                outputElement.innerHTML = error.message;
            } else { // something went wrong in the .then block?
                outputElement.innerHTML = error.message;
            }
        });

}
