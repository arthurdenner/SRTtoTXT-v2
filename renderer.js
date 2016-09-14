// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

function toText(text){
    return text.replace(/(<([^>]+)>)/ig, "").split(/(\r\n|\r|\n)?\d+(\r\n|\r|\n)\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}(\r\n|\r|\n)/gi).join(" ").split(/\n+/).join(" ").replace(/((\.|\?|\!)+)\s+/g,"$1\n").split("\n ").join("\n").trim();
}

function tratarSRT() {
    console.log("entrou na função");
    var file = document.getElementById("uploadButton").files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            document.getElementById("output").innerHTML = toText(evt.target.result.toString());
            console.log("saiu da função com sucesso");
        }
        reader.onerror = function (evt) {
            document.getElementById("output").innerHTML = "error reading file";
            console.log("saiu da função com falha");
        }
    }
}

window.tratarSRT = tratarSRT;