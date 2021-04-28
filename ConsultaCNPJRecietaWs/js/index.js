$.support.cors = true;

$('#cnpj').blur(
    function(){
        GetCadastro();
    }
)

function GetCadastro(){
    $.ajax({
        type:'GET',
        url:'https://www.receitaws.com.br/v1/cnpj/' + document.getElementById('cnpj').value,
        crossDomain: true,
        dataType: 'jsonp',
        success: function(data){
			document.getElementById('nome').value = data.nome, 
            document.getElementById('logradouro').value = data.logradouro,
            document.getElementById('municipio').value = data.municipio , 
            document.getElementById('uf').value = data.uf , 
            document.getElementById('atividades').value = data.atividade_principal[0].text                                
        },
        error: function(data){
            console.log(data);
        }
    })
}