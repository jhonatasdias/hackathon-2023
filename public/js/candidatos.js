let tela_dep = document.querySelector(".tela_dependentes");
document.getElementById("btn_dependentes").onclick = function () {
    let texto = "";
    texto += `
    <label> Digite as informações do dependente: </label>
    <input type="text" placeholder="Insira o nome:">
    <input type="number" placeholder="Insira o cpf:">
    <select name="sexo" required="required" id="sexo">
        <option>Informe o sexo</option>
        <option>Masculino</option>
        <option>Feminino</option>
    </select>
    <input type="date">
    <input type="text" placeholder="Informe o grau de parentesco:">
    `;
    tela_dep.innerHTML = texto;
};


let tela_parentes = document.querySelector(".tela_parentes");
document.getElementById("btn_check").onclick = function () {
        let string = "";
        string += `
    <label>Insira o nome:</label>
    <input type="text" placeholder="Insira o nome:">
    <input type="text" placeholder="Insira o carg:">
    <input type="text" placeholder="Insira a cidade:">
    `
    ;
    tela_parentes.innerHTML = string;
}
