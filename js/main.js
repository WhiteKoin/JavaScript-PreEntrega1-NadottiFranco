function crearUsuario() {
    let mail = String(prompt("Ingresa tu mail para iniciar la creacion del usuario"))
    alert("Siguiente paso coloque su contraseña")
    let password = String(prompt("Ingrese su contraseña deseada"))
    console.log(mail)
    console.log(password)
    alert("Usuario creado")
}

function pedidoBitcoin() {
    let bitcoin = prompt("¿En que desea invertir? - Bitcoin - Ether - Tether - DogeCoin -")
    let bitcoinAmount = Number(prompt("¿Cuanto desea adquirir para su inversion?"))
    if (bitcoinAmount >= 100) {
        alert("Lo sentimos, no contamos con esa cantidad para realizar su inversion, le solicitamos que recargue la pagina.")

    }
    if (bitcoinAmount < 100) {
        let costoBitcoin = bitcoinAmount * 150
alert("Su total a abonar en U$S es de:" + costoBitcoin)
    }

}
function formaPago(){
        alert ("Elija metodo de pago")
        let formaPago = prompt("Credito, Debito, MercadoPago o Criptomoneda") 
        let datosPago = prompt("Por favor coloque datos de tarjeta/billetera digital")
    }

crearUsuario();
pedidoBitcoin();
formaPago();

