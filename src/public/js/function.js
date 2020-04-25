
function precofinal(){
    
    var cesta1 = document.getElementById('cesta1').value;
    var cesta2 = document.getElementById('cesta2').value;
    var cesta3 = document.getElementById('cesta3').value
    var valor = cesta1*10 + cesta2*17 + cesta3*30;
    
    return valor;

}
function total(){
										
    var cesta1 = document.getElementById('cesta1').value;
    var cesta2 = document.getElementById('cesta2').value;
    var cesta3 = document.getElementById('cesta3').value
    var valor =(cesta1*10 + cesta2*17 + cesta3*30)+5;
    //Document.getElementById('total1').innerhtml= "cesta1*10";
    document.getElementById("valortotal").innerHTML ="R$"+valor+".00";
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
