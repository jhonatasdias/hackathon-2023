// Comprimir Documento
let input_pdf = document.getElementById("file_equip");
function compromir_pdf () {
    const file = input_pdf.files[0]; // Obter o primeiro arquivo selecionado (assumindo que seja apenas um)
    if(!file) {
        console.error("Nenhum arquivo selecionado.");
        return;
    }
    JSZipUtils.getBinaryContent("texto", function (err, data) {
        if (err) {
            throw err;
        }
        var zip = new JSZip();
        zip.file("texto", data, { binary: true });
        zip.generateAsync({ type: "blob" }).then(function (content) {
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            var url = window.URL.createObjectURL(content);
            a.href = url;
            a.download = "arquivo_compactado.zip";
            a.click();
            window.URL.revokeObjectURL(url);
        });
    })

}

// Checagem Documento
document.getElementById('file_equip').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function () {
        const content = reader.result;
        const isDocument = checkIfDocument(file.name);
        const resultElement = document.getElementById('verificationResult');
  
        if (isDocument) {
            resultElement.textContent = "É um documento válido.";
        } else {
            resultElement.textContent = "Não é um documento válido.";
        }
    };
  
    reader.readAsText(file);
  });
  
  function checkIfDocument(filename) {
    const documentExtensions = [".doc", ".docx", ".pdf", ".txt",".jpg",".png"];
    const fileExtension = filename.toLowerCase().substring(filename.lastIndexOf('.'));
    return documentExtensions.includes(fileExtension);
  }
  

