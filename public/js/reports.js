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
                    <button onclick="getLocation()">Clique aqui</button>
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
                  <div class="btn_box">
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
                  <div type="submit" id="submit" class="btn_box">
                    <button>
                      Enviar
                    </button>
                  </div>
                  </div>
    `
  tela_reportes2.innerHTML = string;
}


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






