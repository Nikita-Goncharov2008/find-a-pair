let card = document.querySelectorAll('.card')

let tries = document.querySelector('.tries')

let card1, card2

let canClick = true

let boolian = false

let tryNumber = 10

tries.innerHTML = tryNumber

function setOrder(){
    [...card].forEach(item =>{
        let random = Math.floor(Math.random()*12)
        item.style.order = random
    })
}
setOrder()

function FlipCard(event) {
    let target = event.target.parentElement

    if (card1 === target) {
        return
    }

    target.classList.add('flip')

    if (!boolian) {
        boolian = true
        card1 = target
        return
    }

    card2 = target

    if (card1.dataset && card2.dataset && card1.dataset.img === card2.dataset.img) {
        console.log('!')
        disableCar()
    } else {
        tryForLoose()
        setTimeout(() => {
            if (card1 && card2) {
                card1.classList.remove('flip')
                card2.classList.remove('flip')
                zero()
            }
        }, 1000)
    }
}

function disableCar() {
    card1.removeEventListener('click', FlipCard)
    card2.removeEventListener('click', FlipCard)
    zero()
    
}

function zero() {
    [card1, card2] = [null, null];
    [boolian, canClick] = [false, true];
}

card.forEach(cards => cards.addEventListener('click', FlipCard))

function tryForLoose(){
    tryNumber--
    tries.innerHTML = tryNumber

    if(tryNumber<=0){
        setTimeout(()=>{
            alert('Вы проиграли')
            card.forEach(cards => cards.removeEventListener('click', FlipCard))
            location.reload()
        },1200)

    }
}