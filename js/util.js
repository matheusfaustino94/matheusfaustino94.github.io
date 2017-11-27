$(document).ready(function(){
    $(".novoProduto").click(function(){
        if($(".formNovoProduto").css('display') == 'block'){
            $(".formNovoProduto").css('display','none');
        } else {
            $(".formNovoProduto").css('display','block');
        }        
    });
});

$(document).ready(function(){
    $(".novoPedido").click(function(){
        if($(".formNovoPedido").css('display') == 'block'){
            $(".formNovoPedido").css('display','none');
        } else {
            $(".formNovoPedido").css('display','block');
        }        
    });
});