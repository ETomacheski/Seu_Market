var global = "teste"
function precofinal(price, id){
   
    var antigo =  document.getElementById(id+"total").innerHTML;
    console.log(antigo);
    var total = (document.getElementById(id).value)*price;
    
   
    console.log(global);

    global = "funciona";
    var valortotal=document.getElementById(valortotal).value;

    //var soma = valor;
    //document.getElementById("valortotal").innerHTML ="R$"+valor+".00";
    return soma;


}

function zap(){
    
    var preco = precofinal();
    var cesta1 = document.getElementById('cesta1').value;
    var cesta2 = document.getElementById('cesta2').value;
    var cesta3 = document.getElementById('cesta3').value;
    var produto;
    if(cesta1!=0){
        produto="Cesta Pequena, quantidade ="+cesta1+". ";
    }
    if(cesta2!=0){
        produto+="Cesta Média, quantidade = "+cesta2+". ";
    }
    if(cesta3!=0){
        produto+="Cesta Grande, quantidade = "+cesta3+". ";
    }
    var rua = document.getElementById('rua').value;
    var cep = document.getElementById('cep').value;
    var numero = document.getElementById('numero').value;
    var nome = document.getElementById('nome').value;
    
    var mensagem = "Pedido no valor de "+preco+" reais para o cliente "+nome+"%0D"+"Rua: "+rua+"%0D"+"CEP: "+cep+"%0D"+"Número: "+numero+"%0D";
   
    var link = "http://api.whatsapp.com/send?1=pt_BR&phone=558399259116&text="+mensagem+produto;
    
    return window.open(link, "_blank");

    
    

}
function alterou(id,price)
{
   // total();

    var cesta1 = document.getElementById(id).value;
    console.log(global)
    
    document.getElementById(id+"total").innerHTML = "R$"+cesta1*price;
}
function teste(product){
    console.log("agora foi"+product)
}