const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')



const  converterChanges = (elementInput, elementTarget, elementTarget2, variant) => {
    elementInput.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../data/converter.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            switch (variant) {
                case 'som':
                    elementTarget.value =(elementInput.value / response.usd).toFixed(2)
                    elementTarget2.value =(elementInput.value / response.eurSom).toFixed(2)
                    break
                case 'usd':
                    elementTarget.value =(elementInput.value * response.usd).toFixed(2)
                    elementTarget2.value =(elementInput.value / response.eurUsd).toFixed(2)
                    break
                case 'eur':
                    elementTarget.value =(elementInput.value * response.eurSom).toFixed(2)
                    elementTarget2.value =(elementInput.value * response.eurUsd).toFixed(2)
                    break
                default:
                    break
            }

            elementInput.value === '' &&  (elementTarget.value = '')
            elementInput.value === '' &&  (elementTarget2.value = '')
        }
    }



}
converterChanges(somInput, usdInput, eurInput,'som')
converterChanges(usdInput, somInput, eurInput, 'usd')



converterChanges(eurInput, somInput, usdInput, 'eur')
// Получаем все слайды и преобразуем NodeList в массив



const cardContainer = document.querySelector('.card');
const prevBtn = document.querySelector('#btn-prev');
const nextBtn = document.querySelector('#btn-next');

let id = 0;



function CardSwitcher(direction) {
    if (direction === 'next') {
        id++;
    if (id > 200) {
        id = 1;
    }
    } else if (direction === 'prev') {
        id--;
    }
    if (id < 1) {
        id = 200;
    }
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.json())
    .then(data => {
        cardContainer.innerHTML =`
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>`
    })
}
nextBtn.onclick = () => {
CardSwitcher('next');
}
prevBtn.onclick = () => {
CardSwitcher('prev');
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
















