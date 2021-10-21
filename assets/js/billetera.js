const getItem = (key) => {
    const data = localStorage.getItem(key)
    return data
}

const available = document.getElementById('available')
const quantity = document.getElementById('quantity')
const bs = document.getElementById('bolsillos')
const b1_n = document.getElementById('b1-n')
const b2_n = document.getElementById('b2-n')
const b3_n = document.getElementById('b3-n')
const b1_q = document.getElementById('b1-q')
const b2_q = document.getElementById('b2-q')
const b3_q = document.getElementById('b3-q')

let cantidad = parseFloat(getItem('quantity'))
let bolsillos = JSON.parse(getItem('bolsillos'))

const changeVal = (key, value) => {
    switch(key){
        case 'available':
            available.innerHTML = '$' + value
            break;
        case 'b1':
            b1_q.value = value
            break;
        case 'b2':
            b2_q.value = value
            break;
        case 'b3':
            b3_q.value = value
            break;
    }
}

const getVal = (key) => {
    switch(key){
        case 'available':
            return parseFloat(available.value)
            break;
        case 'b1':
            return parseFloat(b1_q.value)
            break;
        case 'b2':
            return parseFloat(b2_q.value)
            break;
        case 'b3':
            return parseFloat(b3_q.value)
            break;
        default:
            return 0
            break;
    }
}

bs.innerHTML = `
    <option value='b1'>${bolsillos.b1}</option>
    <option value='b2'>${bolsillos.b2}</option>
    <option value='b3'>${bolsillos.b3}</option>
`

b1_n.innerHTML = bolsillos.b1
b2_n.innerHTML = bolsillos.b2
b3_n.innerHTML = bolsillos.b3

changeVal('available', cantidad)
changeVal('b1', 0)
changeVal('b2', 0)
changeVal('b3', 0)

if(!cantidad || cantidad <= 0){
    window.location.href = 'index.html'
}

document.getElementById('send').addEventListener('click', (e) => {
    e.preventDefault()
    let can = quantity.value
    if(can && can > 0){
        if(can <= cantidad){
            cantidad -= can
            let bol = bs.value
            changeVal('available', cantidad)
            let res = can + getVal(bol)
            console.log(res, getVal(bol))
            changeVal(bol, res)
        }else{
            alert('El valor a asignar no debe ser mayor a la cantidad total')
        }
    }else{
        alert('El valor a añadir debe ser mayor a 0')
    }
})