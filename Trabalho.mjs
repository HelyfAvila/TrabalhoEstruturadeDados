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
        res.innerHTML += `
                        Nome: ${alunos[i].nome}<br>
                        RA: ${alunos[i].ra}<br>
                        Idade: ${alunos[i].idade}<br>
                        Sexo: ${alunos[i].sexo}<br>
                        Média: ${alunos[i].media}<br>
                        Resultado: ${alunos[i].resultado}<br><br>`;
        }
}
function nomesCrescente(alunos) {
    res.innerHTML = "";
    const n = alunos.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        const nomeAtual = alunos[j].nome.toLowerCase();
        const proximoNome = alunos[j + 1].nome.toLowerCase();
        if (nomeAtual > proximoNome) {
          const temp = alunos[j];
          alunos[j] = alunos[j + 1];
          alunos[j + 1] = temp;
        }
      }
    }
    gerarRelatorio(alunos);
}
function bubbleSort(alunos, fnComp){
  let swap
  do{        
      swap = false
      for(let i = 0; i < alunos.length - 1; i++){            
          if( fnComp(alunos[i] , alunos[i+1]) ){
              [ alunos[i], alunos[i+1] ] = [ alunos[i+1], alunos[i] ]
              swap = true                
          }  
      }
  } while(swap)
}

function ordenarRADecrescente(alunos){
  bubbleSort(alunos, (obj1, obj2) => obj1.ra < obj2.ra)  

  gerarRelatorio(alunos); // Chame a função com o array de alunos ordenado
}

function crescenteAprovados(alunos) {
  res.innerHTML = "";
  const n = alunos.length;
  const alunosAprovados = []; 

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      const nomeAtual = alunos[j].nome.toLowerCase();
      const proximoNome = alunos[j + 1].nome.toLowerCase();
      if (nomeAtual > proximoNome) {
        const temp = alunos[j];
        alunos[j] = alunos[j + 1];
        alunos[j + 1] = temp;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (alunos[i].resultado === "Aprovado") {
      alunosAprovados.push(alunos[i]);
    }
  }

  gerarRelatorio(alunosAprovados);
}
function encerrarPrograma(alunos){
    let tabela = document.querySelector('table.tabelaRelatorio');
    tabela.innerHTML = "";
    alert("Encerrando o programa!");
    return;

}

  function gerarRelatorio(alunos){
    let tabela = document.querySelector('table.tabelaRelatorio');
    tabela.innerHTML = "";
    primeiraLinha(alunos);
    for(let i=0; i < alunos.length; i++){
        let linha = document.createElement('tr');
        let nomes = document.createElement('td');
        let ra = document.createElement('td');
        let idade = document.createElement('td');
        let sexo = document.createElement('td');
        let media = document.createElement('td');
        let resultado = document.createElement('td');
        tabela.appendChild(linha);
        linha.appendChild(nomes);
        linha.appendChild(ra);
        linha.appendChild(idade);
        linha.appendChild(sexo);
        linha.appendChild(media);
        linha.appendChild(resultado);
        nomes.textContent=`${alunos[i].nome}`;
        ra.textContent=`${alunos[i].ra}`;
        idade.textContent=`${alunos[i].idade}`;
        sexo.textContent=`${alunos[i].sexo}`;
        media.textContent=`${alunos[i].media}`;
        resultado.textContent=`${alunos[i].resultado}`;
    }
  }
  function primeiraLinha(alunos){
    let tabela = document.querySelector('table.tabelaRelatorio');
        let linha = document.createElement('tr');
        let nomes = document.createElement('th');
        let ra = document.createElement('th');
        let idade = document.createElement('th');
        let sexo = document.createElement('th');
        let media = document.createElement('th');
        let resultado = document.createElement('th');
        tabela.appendChild(linha);
        linha.appendChild(nomes);
        linha.appendChild(ra);
        linha.appendChild(idade);
        linha.appendChild(sexo);
        linha.appendChild(media);
        linha.appendChild(resultado); 
        nomes.textContent = `NOME DO ALUNO:`;
        ra.textContent = `RA DO ALUNO:`;
        idade.textContent = `IDADE:`;
        sexo.textContent = `SEXO:`;
        media.textContent = `MÉDIA:`;
        resultado.textContent = `RESULTADO:`

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
            nomesCrescente(alunos);
        }else if(opc === 3){
            res.innerHTML = ""
            ordenarRADecrescente(alunos);
        }else if(opc === 4){
          res.innerHTML = ""
          crescenteAprovados(alunos);
        }else if(opc === 5){
          res.innerHTML = ""
          encerrarPrograma(alunos);
        }
    }
    
