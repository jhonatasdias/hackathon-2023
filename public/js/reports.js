// se usuario selecionou anonimo:

let tela_reportes = document.querySelector(".tela_reports");
document.getElementById("btn_anonimo").onclick = function () {
  let texto = "";
  texto += `
    <div>
                    <input type="text" name="centro" placeholder="Informe o Centro de Custo" required="required" />
                  </div>
                  <div>
                    <input type="text" name="area" placeholder="Referência da Área de atuação" required="required" />
                  </div>
                  <div>
                    <textarea id="msg" name="descricao" rows="4" placeholder="Descreva o acontecimento" cols="50"
                      required="required"></textarea>
                  </div>
                  <div>
                    <p id="demo">Clique para informar a localização do Report:</p>
                    <button onclick="getLocation()">Emitir localização</button>
                    <div id="mapholder"></div>
                  </div>
                  <br>
                  <p>Coordenadas da Localização:</p>
                    <div id="loc"></div>
                  <br>
                  <div>
                    <label for="anexos">Anexe imagens do report</label>
                    <input  name="image1_url" type='file' accept='application/pdf|image/*' id='file_equip' />
                    <input  name="image2_url" type='file' accept='application/pdf|image/*' id='file_equip' />
                    <input  name="image3_url" type='file' accept='application/pdf|image/*' id='file_equip' />
                  </div>
                  <p id="verificationResult"></p>
                  <div type="submit" id="submit" class="btn_box">
                    <button>
                      Enviar
                    </button>
                  </div>
                  </div>
    `
  tela_reportes.innerHTML = texto;
}

//se usuario optou em nao ser anonimo

let tela_reportes2 = document.querySelector(".tela_reports");
document.getElementById("btn_naoanonimo").onclick = function () {
  let string = "";
  string += `
    <div>
                    <input type="text" name="nome" placeholder="Digite seu nome" required="required" />
                  </div>
                  <div>
                    <input type="text" name="centro" placeholder="Informe o Centro de Custo" required="required" />
                  </div>
                  <div>
                    <input type="text" name="area" placeholder="Referência da Área de atuação" required="required" />
                  </div>
                  <div>
                    <textarea id="msg" name="descricao" name="msg" rows="4" placeholder="Descreva o acontecimento" cols="50"
                      required="required"></textarea>
                  </div>
                  <div>
                    <p id="demo">Clique para informar a localização do Report:</p>
                    <button onclick="getLocation()">Emitir Localização</button>
                    <div id="mapholder">
                    </div>
                  </div>
                  <br>
                  <p>Coordenadas da Localização:</p><br>
                    <div id="loc"></div>
                  <br>
                  <div>
                    <label for="anexos">Anexe imagens do report</label>
                    <input name="image1_url" type='file' accept='application/pdf|image/*' id='file_equip' />
                    <input name="image2_url" type='file' accept='application/pdf|image/*' id='file_equip' />
                    <input name="image3_url" type='file' accept='application/pdf|image/*' id='file_equip' />
                    
                    </div>
                    <p id="verificationResult"></p>
                  <div type="submit" id="submit" class="btn_box">
                    <button>
                      Enviar
                    </button>
                  </div>
                  </div>
    `
  tela_reportes2.innerHTML = string;
}

//Comprimir pdf
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




