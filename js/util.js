$(document).ready(function(){
    $(".novoProduto").click(function(){
        if($(".formNovoProduto").css('display') == 'block'){
            $(".formNovoProduto").css('display','none');
        } else {
            $(".formNovoProduto").css('display','block');
        }        
    });
});