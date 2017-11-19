// LISTAR PRODUTOS
$(document).ready(function(){
    $(".produtos").click(function(){
        $.get("https://projeto-aeso.herokuapp.com/api/produtos", function(result){           
            if($(".produtos").text() == 'Ocultar produtos'){
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

// ADD NOVO PRODUTO
$(document).ready(function(){
    $(".addprodutos").click(function(){
        var today = new Date;
        var id = today.getHours()+""+today.getMinutes()+""+today.getSeconds();
        $.post(
            "https://projeto-aeso.herokuapp.com/api/produtos",
            {
                codigoProduto:"PRD"+id,
                nomeProduto:$('#nome').val(),
                descricaoProduto:$('#descricao').val(),
                valorProduto:$('#valor').val(),
                categoria:$('#categoria').val(),
                estabelecimento_id:$('#estabelecimento').val(),
                itens:$('#descricao').val()
            }, 
            function(returnedData){
                if (window.confirm('Uhu... Produto cadastrado com sucesso!'))
                {
                    location.reload();
                }
                else
                {
                    location.reload();
                }
            }).fail(function(){
                alert("Desculpe, um erro aconteceu!");
        });
    });
});

// EXCLUIR PRODUTO
function deleteProduto(id){
    console.log(id);
    var url = 'https://projeto-aeso.herokuapp.com/api/produtos/' + '?' + $.param({"codigoProduto": id});
    console.log(url);
    $.ajax({
        url: url,
        type: 'DELETE',
        success: function(){
            if (window.confirm('Produto excluído com sucesso!'))
            { location.reload() }
            else
            { location.reload() }
        },
        error: function(){alert("Ops! Um erro ocorreu na exclusão :(")}
    });
};