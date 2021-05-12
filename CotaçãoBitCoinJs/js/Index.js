$.support.cors = true;

$(document).ready(
    function(){
        ConsultaValor();
    
    }
  
)

setInterval("ConsultaValor()", 1000);

function ConsultaValor(){
    $.ajax({
        type:'GET',
        url:'https://www.mercadobitcoin.net/api/BTC/ticker/',
        datatype : 'json',
        success: function(data){
         var  vlr = data.ticker.last;

         if (document.getElementById('valor').value > vlr) {
            document.getElementById('valor').style.backgroundColor = '#006400';

         } else {
            document.getElementById('valor').style.backgroundColor = '#FF0000'; 
         } 
        document.getElementById('valor').value = (parseFloat(vlr)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

             
        },
        error: function(data){
            document.getElementById('valor').value = 'Sem conexão com a internet!';
        }
    })
}