const user = document.getElementById('user')
const password = document.getElementById('password')
const quantity = document.getElementById('quantity')
const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')

const setItem = (key, value) => {
    localStorage.setItem(key, value)
}

setItem('quantity', 0)

document.getElementById('wallet').addEventListener('click', (e) => {
    e.preventDefault()
    if(user.value && password.value){
        let cantidad = quantity.value
        if(cantidad && cantidad > 0){
            setItem('quantity', cantidad)
            const data = {
                b1: b1.value ? b1.value : 'bolsillo 1',
                b2: b2.value ? b2.value : 'bolsillo 2',
                b3: b3.value ? b3.value : 'bolsillo 3'
            }
            setItem('bolsillos', JSON.stringify(data))
            window.location.href = 'billetera.html'
        }else{
            alert('la cantidad debe ser ingresada y mayor a 0')
        }
    }else{
        alert('Ingrese su usuario y contraseña')
    }
})
