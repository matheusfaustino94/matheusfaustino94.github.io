// LISTAR PRODUTOS
$(document).ready(function(){
    $(".produtos").click(function(){
        $.get("https://projeto-aeso.herokuapp.com/api/usuarios", function(result){           
            if($(".usuarios").text() == 'Ocultar produtos'){
                $(".retorno").text('');  
                $(".produtos").text('Exibir produtos');
            } else {
                $(".retorno").text('');
                $(".produtos").text('Ocultar produtos');
                $.each(result, function(i, field){
                    $(".retorno").append(
                                        field.nomeProduto + " - " + 
                                        field.descricaoProduto + " - " + 
                                        "R$ " + field.valorProduto + 
                                        "<a href='#' id='"+field.codigoProduto+"' onclick='deleteProduto(this.id)'>"+
                                        "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a>"+
                                        "</br>");
                });
            }
        });
    });
});