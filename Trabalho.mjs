const alunos = [];

function processar(){
    let opcao = document.getElementById('opcao');
    let opc = Number(opcao.value);
    if(opcao.value.length == 0){
        alert(`[ERRO] Digite um valor válido por favor!`) 
        opcao.value = ""
        return; 
    }else if(opc == 1){
       alert('Cadastramento de alunos');
        while( alunos.length <= 2){
            let nome = prompt('Cadastre um novo aluno. Informe o nome:');
                    if(nome === null){
                        break;
                    }
            let ra = prompt('Entre com o número do RA');
            if(ra.length == 0 || ra.length > 13 ){
                alert('O valor não pode ser vazio ou maior do que 13 digitos!')
                return;
            }
            let idade = prompt('Informe a idade do aluno: ');
            if(idade.length == 0){
                alert('É necessário digitar a idade!')
            }
            let sexo = prompt("Informe o sexo do aluno ( M OU F):");
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
            console.log(alunos);
            
        }
    }
            
    
}



