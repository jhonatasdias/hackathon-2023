// Comprimir Documento
function compromir_pdf() {
    const input_pdf = document.getElementById("file_equip");
    const file = input_pdf.files[0]; // Obter o primeiro arquivo selecionado (assumindo que seja apenas um)

    if (!file) {
        console.error("Nenhum arquivo selecionado.");
        return;
    }

    var zip = new JSZip();
    zip.file(file.name, file, { binary: true }); // Adicionar o arquivo ao ZIP usando seu nome original

    zip.generateAsync({ type: "blob" }).then(function (content) {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        var url = window.URL.createObjectURL(content);

        // Criar um nome de arquivo único para o arquivo ZIP
        var nomeArquivoZip = "arquivo_compactado.zip";

        a.href = url;
        a.download = nomeArquivoZip;
        a.click();
        window.URL.revokeObjectURL(url);
    });
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
  

