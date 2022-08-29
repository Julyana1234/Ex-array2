/*  - Criar um input para o usuário inserir os números no array
    -  Ir envinado os números do array para uma variavel
    - Colocar esse array ao contrario
    - mostrar o array ao usuário*/

    var cliqueE = document.getElementById('btn-envNum'); //Pega a ação do clique no botão de "Enviar número"
    var cliqueV = document.getElementById('btn-veriNum'); //Pega a ação do clique no botão de "Verificar número"

    var numRecebido = document.querySelector(".input-num"); //Pega o número digitado
    var recebido;
    
    var numeros = [];

    function adicionaNumero() { // Função para adiconar o número no array
       recebido = numRecebido.value
        numeros.push(recebido); // Adiciona o número digitado no array
        numeros.reverse(); // Coloca o array no reverso
        //FALTA VER UM JEITO QUE FAÇA A REVERSÃO DEPOIS DE TODO O ARRAY FINALIZAR
        return numeros;
    }
    function limpar(){ //Função para limpar o input
        numRecebido.value = '';
    }
    
    cliqueE.addEventListener('click', function(e){ //Adiciona um evento ao clicar no botão de "Enviar número"
        e.preventDefault();
        console.log(recebido);
        adicionaNumero(numRecebido.value); // Função que deve ser executada quando o botão for clicado
        limpar();
    });


    cliqueV.addEventListener('click', function(e){ //Adiciona um evento ao clicar no botão de "Verificar número"
        document.querySelector('#resultado').innerHTML = `O array ao contrário é ${adicionaNumero(numeros)}`;
        numeros = []; //Limpa o array para recomeçar
        
    }); 

