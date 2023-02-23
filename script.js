const place = document.querySelector('.place')
const wrapperBtn = document.querySelector('.wrapper')
const allAmount = document.querySelector('.all-amount')

const amount = document.querySelector('.amount')
const btnGrodno = document.querySelector(`[data-address="гродн"]`)


let arrKey = key.split('\n')

let arrValue = value.split('\n')

let arr = []
let arrSort = []

function pushArr(arrKey, arrValue){
    for (let i=0; i<arrKey.length;i++){
        arr.push(` ${arrKey[i]} - ${arrValue[i]} `)
    } 
}

pushArr(arrKey, arrValue)

allAmount.innerHTML = `Количество организаций в Республике Беларусь ${arr.length}`

 function showGrodno(){
    for (let i = 0; i<arr.length;i++){
        // console.log(typeof arr[i])
        // let y = arr[i].toLoverCase()
        if (arr[i].search('Гродн') !=-1){
            arrSort.push(`<br><br>${arr[i]} `)
        }
    }
    const elements = arrSort.length 
    amount.innerHTML = `Количество организаций в Гродненской области: ${elements}`
    place.innerHTML = arrSort
    // console.log(arrSort)
}
showGrodno()

const arrCity = ['гродн', 'брест', 'минск', 'витебск', 'могилев', 'гомель']
const arrRegion = ['Гродненской', 'Брестской', 'Минской', 'Витебской', 'Могилевской', 'Гомельской']


wrapperBtn.addEventListener('click', ()=>{
    let whereClick = event.target.dataset.address
    if(arrCity.includes( whereClick)){
        let activeBtn = document.querySelector('.border')
        activeBtn.classList.remove('border') 
        event.target.classList.add('border')


        console.log(event.target)


        arrSort = []
        for (let i = 0; i<arr.length; i++){
            if(arr[i].toLowerCase().search(whereClick) !=-1){
                arrSort.push(`<br><br>${arr[i]} `)
            }
        }
        const positionArrCity = arrCity.indexOf(whereClick)
        const nameRegion = arrRegion[positionArrCity]
        // console.log(positionArrCity)
        amount.innerHTML = `Количество организаций в ${nameRegion} области: ${arrSort.length}`
        place.innerHTML = arrSort
    }
    // let t = event.target.dataset
    // console.log(arrSort)
})
// let t = `name: ВикТамГрупп <br> address:  Минская обл г.Борисов, \n пер.Зеленый, 13 ком. 5 `
// place2.innerHTML = t
// place.innerHTML = 'arrSort'
   
// console.log(t.toLocaleLowerCase())
// console.log(t.search('ком.2'))
// console.log(t)
// console.log(arrSort)
// console.log(place2)

