
function IniciaJogo(){

    var url =window.location.search; // search recupera os dados a apartir da interrogação

    var nivel_jogo = url.replace("?",""); // replace substitui o caractere, dessa forma é possivel eliminar o sinal de ?

    var tempo_segundos = 0;

    if(nivel_jogo==1){
        tempo_segundos=120;
    }

    if(nivel_jogo==2){
        tempo_segundos=60;
    }
    
    if(nivel_jogo==3){
        tempo_segundos=30;

    }
    
    //Inserindo Segundos no Span
    //InnerHtml insere um conteúdo dentro da tag 

    document.getElementById("cronometro").innerHTML = tempo_segundos; 

    //Quantidade de Baloes

    var quant_baloes = 30;

    //imprimir quant de baloes inteiros e estourados

    document.getElementById("baloes_inteiros").innerHTML = quant_baloes;
    document.getElementById("baloes_estourados").innerHTML = 0;


    Cria_Baloes(quant_baloes);


    function Cria_Baloes(quant_baloes){

        for(var i=0;i<quant_baloes;i++){

            var balao = document.createElement("img");
            balao.src="imagens/balao_azul_pequeno.png";
            balao.style.margin="10px";

            document.getElementById("cenario").appendChild(balao);
            // appendChild irá tratar todos os elementos img como filhos da div cenario, criando os imgs dentro do background

        }


    }
  



}