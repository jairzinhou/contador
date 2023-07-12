const botaoCalcular=document.querySelector('#calculando')
const botaoLimpar=document.querySelector('#limpeza')
botaoCalcular.addEventListener('click',calculando)
botaoLimpar.addEventListener('click',limpando)

const inputDataInicio=document.querySelector('#data-inicio')
const inputDatafinal=document.querySelector('#data-final')
const inputResultado=document.querySelector('#resultado')


function calculando(){
    if(inputDataInicio.value==='' || inputDatafinal.value===''){
        window.alert('insira um valor valido')
        return
    }
    const dataInicio=new Date(inputDataInicio.value)
    const dataFinal=new Date(inputDatafinal.value)

    const milissegundosPorDia = 86400000 
    const diferencaEmMilesimos=dataFinal.getTime() - dataInicio.getTime()
    
    const resultado=diferencaEmMilesimos/milissegundosPorDia
    
    inputResultado.value=`${resultado} dias`
}

function limpando(){
    location.reload()
}
