var global = "teste";
var ids =[];
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
function total(){
    var soma;
    ids.forEach(id1 => {
        soma = id1.price*id1.quantidade;
        
    })
    var soma= parseFloat(soma.toFixed(3));
    document.getElementById("valortotal").innerHTML ="R$"+soma;
}
function alterou(id,price,name)
{
   // total();
   var cont =0
   var cesta1 = document.getElementById(id).value;
    ids.forEach(id1 => {
        console.log(id1.id + "==" +id)
        if(id == id1.id){
            cont++
            id1.id= id;
            id1.name=name;
            id1.price=price;
            id1.quantidade= cesta1;
        }
        
    })
    
   
    if(cont ==0){
        ids.push({
            id: id,
            name:name,
            price:price,
            quantidade: cesta1
        });
    }
   
    console.log(ids)
    var total = cesta1*price;
    var total= parseFloat(total.toFixed(3));
    
    document.getElementById(id+"total").innerHTML = "R$"+total;
}
