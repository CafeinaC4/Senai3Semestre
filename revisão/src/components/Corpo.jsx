import "./Corpo.css"

function Corpo() {
    function clicou(){
        alert("Clicou no botão");
        console.log("Botão clicado");
        console.log("Nome: Vitor");
        console.log("Idade: 25");
        console.log("Endereço: Rua XYZ, 123");
        console.log("Email: vitor@email.com");
        console.log("Telefone: (11) 9999-9999");
        console.log("Data de Nascimento: 01/01/2000");
        console.log("Sexo: Masculino");
        console.log("Profissão: Desenvolvedor Frontend");
        console.log("Cursos: React, Vue.js, Angular");
        console.log("Hobbies: Ler, Programar, Futebol");
    }
    
    return(
        <div className="container-corpo">
            Corpo
            <button className="container-botao" onClick={clicou}>Clica aqui</button>
            <button className="container-botao" onClick={() => {alert("Clicou no botão da arrow")}}>Clica aqui</button>
        </div>
    )
}

export default Corpo