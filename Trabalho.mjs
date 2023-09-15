function processar(){
    let opcao =  document.getElementById('opcao');
}

//Função de adicionar aluno 
function cadastraAluno(nome, ra, idade, sexo, media, resultado){
    let aluno = {
        NOME: nome,
        RA: ra,
        IDADE: idade,
        SEXO: sexo,
        MÉDIA: media, 
        RESULTADO: resultado
    };
    alunos.push(aluno);
}
