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
    $(".addpedido").click(function(){
        var today = new Date;
        var id = today.getHours()+""+today.getMinutes()+""+today.getSeconds();
        $.post(
            "https://projeto-aeso.herokuapp.com/api/pedidos",
            {
                codigoPedido:"PD"+id,
                statusPedido:'SOLICITADO',
                mesaPedido:$('#mesaPedido').val(),
                totalPedido:40,
                __v:'',
                usuarioPedido:[{"codigoUsuario":"USER-1","nomeUsuario":"Pedro Gomes","loginUsuario":"pgomes22@email.com","senhaUsuario":"Passwd@1231","tipoUsuario":"ADMIN","statusUsuario":"ATIVO","_id":"5a11c619f724ca1f1c2f9074"}],
                itensPedido:[{"codigoProduto":"PD02","nomeProduto":"Whopper","descricaoProduto":"Whopper Furioso","valorProduto":19,"categoria":"Lanches","_id":"5a11c619f724ca1f1c2f9075","itens":["Pao","Hamburguer","Cebola Furiosa"]}]
            }, 
            function(returnedData){
                if (window.confirm('Uhu... Pedido cadastrado com sucesso!')){
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