let calcular = document.querySelector('#calcular');

calcular.onclick= function(){

    const distancia = Number(document.querySelector('#distancia').value);
    document.querySelector('#costo-envio').value = calculo(distancia)
    return false;

}
function calculo(distancia){
    if(distancia<40){
        return (distancia*0);
    }else{
        return (distancia*800);
    }
}

