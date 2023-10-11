const bookLibrary = function(){
    fetch('https://striveschool-api.herokuapp.com/books')
    .then((response) => {
        if (response.ok){
            return response.json()
        } else {
            throw new Error ('Error')
        }
    })
    .then((bookData) => {
        for (let i=0; i<bookData.length;  i++){
            const col = document.createElement('div')
            const row = document.getElementById('row')
            col.classList.add('col', 'col-4')
            row.appendChild(col)

            const card = document.createElement('div')
            card.classList.add('card')
            col.appendChild(card)

            const image = document.createElement('img')
            image.classList.add('card-img-top')
            const bookImageUrl = bookData[i].img
            image.setAttribute('src', `${bookImageUrl}`)
            card.appendChild(image)

            const divMain = document.createElement('div')
            divMain.classList.add('card-body')
            card.appendChild(divMain)

            const titleBook = document.createElement('h5')
            titleBook.classList.add('card-title')
            titleBook.innerText = bookData[i].title
            divMain.appendChild(titleBook)

            const parag = document.createElement('p')
            parag.classList.add('card-text')
            parag.innerText = bookData[i].price + '€'
            titleBook.appendChild(parag)

            const button = document.createElement('button')
            button.classList.add('btn', 'btn-primary')
            button.setAttribute('href', '#' )
            button.innerText = 'SCARTA'
            parag.appendChild(button)

            const deleteBook = () => {
                const card = document.getElementsByClassName('card')[i]
                card.style.display = 'none'
            }
            
            const buttonDelete = document.getElementsByClassName('btn')[i]
            buttonDelete.addEventListener('click', deleteBook)
        }

    })
    .catch((error) => {
        console.log(error)
    })
}
bookLibrary()

