const alunos = [];

function processar(){
    let opcao = document.getElementById('opcao');
    let opc = Number(opcao.value);
    if(opcao.value.length == 0){
        alert(`[ERRO] Digite um valor válido por favor!`) 
        opcao.value = ""
        return; 
    }else if(opc == 1){
        alert('Cadastre os alunos');
       
            
    }
}



