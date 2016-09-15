function downloadFile(content, fileName) {
    var fs = require('fs');

    var app = require('electron').remote.app;
    console.log();

    var FilePath= app.getPath('downloads') + '/' + fileName;
    var encode='utf8';
    fs.writeFileSync(FilePath, content, encode);
}

function toText(text){
    return text.replace(/(<([^>]+)>)/ig, "").split(/(\r\n|\r|\n)?\d+(\r\n|\r|\n)\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}(\r\n|\r|\n)/gi).join(" ").split(/\n+/).join(" ").replace(/((\.|\?|\!)+)\s+/g,"$1\n").split("\n ").join("\n").trim();
}

function tratarSRT() {
    console.log("entrou na função");
    var file = document.getElementById("uploadButton").files[0];
    var fileName = file.name.replace(/.srt/gi, ".doc");
    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "windows-1252");
        reader.onload = function (evt) {
            var finalText = toText(evt.target.result.toString());
            //console.log(finalText);
            downloadFile(finalText, fileName);
            console.log("saiu da função com sucesso");
        }
        reader.onerror = function (evt) {
            document.getElementById("output").innerHTML = "error reading file";
            console.log("saiu da função com falha");
        }
    }
}

window.tratarSRT = tratarSRT;