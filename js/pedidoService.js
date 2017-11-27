// LISTAR PRODUTOS
$(document).ready(function(){
    $(".pedidos").click(function(){
        $.get("https://projeto-aeso.herokuapp.com/api/pedidos", function(result){           
            if($(".pedidos").text() == 'Ocultar pedidos'){
                $(".retornoPedidos").text('');  
                $(".pedidos").text('Exibir Pedidos');
            } else {
                $(".retornoPedidos").text('');
                $(".pedidos").text('Ocultar pedidos');
                $.each(result, function(i, field){
                    $(".retornoPedidos").append(
                                        field.codigoPedido + " - " + 
                                        field.statusPedido + " - " + 
                                        "R$ " + field.totalPedido + " - " + 
                                        (field.mesaPedido != '' ? field.mesaPedido : 'Não existe') +
                                        "<a href='#' id='"+field.codigoPedido+"' onclick='deletePedido(this.id)'>"+
                                        "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a>"+
                                        "</br>");
                });
            }
        });
    });
});

// ADD NOVO PEDIDO
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
                if (window.confirm('Uhu... Produto cadastrado com sucesso!')){
                    location.reload();
                } else {
                    location.reload();
                }
            }).fail(function(){
                alert("Desculpe, um erro aconteceu!");
        });
    });
});

// EXCLUIR PRODUTO
function deletePedido(id){
    console.log(id);
    var url = 'https://projeto-aeso.herokuapp.com/api/pedidos/' + '?' + $.param({"codigoPedido": id});
    console.log(url);
    $.ajax({
        url: url,
        type: 'DELETE',
        success: function(){
            if (window.confirm('Pedido excluído com sucesso!'))
            { location.reload() }
            else
            { location.reload() }
        },
        error: function(){alert("Ops! Um erro ocorreu na exclusão :(")}
    });
};