const alunos = [];
function cadastrarAluno() {
    let res = document.getElementById('res');
    
       alert('Cadastramento de alunos');
        while( alunos.length < 2){
            let nome = prompt('Cadastre um novo aluno. Informe o nome:');
                    if(nome.length == 0){
                        alert('É necessário informar o nome do aluno!')
                        break;
                    }
            let ra = prompt('Entre com o número do RA');
            if(ra.length == 0 || ra.length > 13 ){
                alert('O valor não pode ser vazio ou maior do que 13 digitos!')
                break;
            }
            let idade = prompt('Informe a idade do aluno: ');
            if(idade.length == 0){
                alert('É necessário digitar a idade!')
                break;
            }
            let sexo = prompt("Informe o sexo do aluno ( M OU F ):");
            let media = Number(prompt("Informe a média do aluno: "));
            let resultado = "";
            if(!isNaN(media)){
                resultado = media >= 6 ? "Aprovado":"Reprovado";
            }else{
                resultado = "Média inválida";
                alert(`${resultado}, não aceitamos letras nesse campo!`)
            }

            let aluno = {
                nome: nome,
                ra: ra,
                idade: idade,
                sexo: sexo,
                media: media,
                resultado: resultado
            };
            
            alunos.push(aluno);
          
        }
        res.innerHTML = "";
        for (let i = 0; i < alunos.length; i++) {
        res.innerHTML += `Aluno ${i + 1}:<br>
                        Nome: ${alunos[i].nome}<br>
                        RA: ${alunos[i].ra}<br>
                        Idade: ${alunos[i].idade}<br>
                        Sexo: ${alunos[i].sexo}<br>
                        Média: ${alunos[i].media}<br>
                        Resultado: ${alunos[i].resultado}<br><br>`;
        }
    
}
    function nomesCrescente() {
        alert("kdskdjskj")
    }

    function escolherOpcao(){
        let opcao = document.getElementById('opcao');
        let opc = Number(opcao.value);
        
        if(opcao.value.length == 0){
            alert(`[ERRO] Digite um valor válido por favor!`) 
            opcao.value = ""
            res.innerHTML = ""
            return; 
        }else if(opc === 1){
            res.innerHTML = ""
            cadastrarAluno();
        }else if(opc === 2){
            res.innerHTML = ""
            nomesCrescente();
        }else if(opc === 3){
            res.innerHTML = ""
            
        }
    }
    
