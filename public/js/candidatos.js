

  let botaoNao = document.querySelector('#btn_nao');
  let botaoSim = document.querySelector('#btn_check');

  function alternarBotoes() {
    if (!botaoSim.disabled) {
      botaoSim.disabled = true;
      botaoSim.style.backgroundColor = "blue";
      botaoSim.style.color = "white";
      botaoNao.style.backgroundColor = "initial";
      botaoNao.style.color = "initial";
    } else {
      botaoSim.disabled = false;
      botaoSim.style.backgroundColor = "initial";
      botaoSim.style.color = "initial";
      botaoNao.style.backgroundColor = "blue";
      botaoNao.style.color = "white";
    }
  }

  botaoSim.addEventListener('click', alternarBotoes);
  botaoNao.addEventListener('click', alternarBotoes);

  // Função para inserir dependentes:
  let tela_dep = document.querySelector(".tela_dependentes");
  document.getElementById("btn_dependentes").onclick = function () {
    let texto = "";
    texto += `
    <label> Digite as informações do dependente: </label>
    <input name="nome" type="text" placeholder="Insira o nome:">
    <input name="cpf" type="number" placeholder="Insira o cpf:">
    <select name="sexo" required="required" id="sexo">
        <option>Informe o sexo</option>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
    </select>
    <input type="date" name="data">
    <input type="text" name="grau" placeholder="Informe o grau de parentesco:">
    `;
    tela_dep.innerHTML = texto;
  };

  // FUnção para inserir parentes
  let tela_parentes = document.querySelector(".tela_parentes");
  document.getElementById("btn_check").onclick = function () {
    let string = "";
    if (botaoSim.disabled) {
      string += `
        <label>Insira o nome:</label>
        <input type="text" name="" placeholder="Insira o nome:">
        <input type="text" name="" placeholder="Insira o cargo:">
        <input type="text" placeholder="Insira a cidade:">
      `;
      tela_parentes.innerHTML = string;
    } else {
      tela_parentes.innerHTML = "";
    }
  };



//Função que envia mensagem para o Wpp ao terminar cadastro
document.querySelector('#submit').addEventListener('click',function(){
    let cliente = document.querySelector('#nome').value;
    let telefone = document.querySelector('#telefone').value;
    let email = document.querySelector('#email').value;
    let rg = document.querySelector('#rg').value;
    if( cliente.length >0 || telefone.length >0 || email.length >0 || rg.length >0 ){
    
    let celular = "55"+telefone;
    let url = `Seu cadastro na Web Tech foi concluído!` ;
    url = window.encodeURIComponent(url);
    

   window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + url,"_blank");
    }
   });

   

   