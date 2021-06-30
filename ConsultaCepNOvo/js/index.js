$.support.cors = true;

const CEP = document.querySelector("#cep")

$('#cep').blur(
    function(){
        GetCadastro();
    }
)

const showData = (result)=>{
     console.log(result)
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}

function GetCadastro(){
    let search = CEP.value.replace(".","")
    let novo = search.replace(".","")
    let novo1 = novo.replace("/","")
    let CEP_ = novo1.replace("-","")
    $.ajax({
        
        type:'GET',
        url:'https://viacep.com.br/ws/'+CEP_+'/json/' ,
        crossDomain: true,
        dataType: 'jsonp',
        success: function(data){showData(data)
        },
        error: function(data){
            console.log(search);
        }
    })
}