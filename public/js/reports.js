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
                    <input required="required" name="image1_url" type='file' accept='application/pdf|image/*' id='file-input' />
                    <input required="required" name="image2_url" type='file' accept='application/pdf|image/*' id='file-input' />
                    <input required="required" name="image3_url" type='file' accept='application/pdf|image/*' id='file-input' />
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
                    <input required="required" name="image1_url" type='file' accept='application/pdf|image/*' id='file-input' />
                    <input required="required" name="image2_url" type='file' accept='application/pdf|image/*' id='file-input' />
                    <input required="required" name="image3_url" type='file' accept='application/pdf|image/*' id='file-input' />
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









