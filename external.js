






const Cards = [
    { 
        image: './images/Cover image1.png',
        title: 'Morbi habitasse felis nulla arcu, morbi ultricies.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus ducimus quasi quae cum, fugit sunt incidunt, unde laudantium aliquid tenetur sint modi molestias architecto hic laboriosam laborum suscipit nostrum.',
        price: '15.99'
    },
    { 
        image: './images/Cover image2.png',
        title: 'Morbi habitasse felis nulla arcu, morbi ultricies.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus ducimus quasi quae cum, fugit sunt incidunt, unde laudantium aliquid tenetur sint modi molestias architecto hic laboriosam laborum suscipit nostrum.',
        price: '12.00'
    },
    { 
        image: './images/Cover image3.png',
        title: 'Morbi habitasse felis nulla arcu, morbi ultricies.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus ducimus quasi quae cum, fugit sunt incidunt, unde laudantium aliquid tenetur sint modi molestias architecto hic laboriosam laborum suscipit nostrum.',
        price: '14.50'
    },
    { 
        image: './images/Cover image4.png',
        title: 'Morbi habitasse felis nulla arcu, morbi ultricies.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus ducimus quasi quae cum, fugit sunt incidunt, unde laudantium aliquid tenetur sint modi molestias architecto hic laboriosam laborum suscipit nostrum.',
        price: '13.99'
    },
    { 
        image: './images/Cover image5.png',
        title: 'Morbi habitasse felis nulla arcu, morbi ultricies.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus ducimus quasi quae cum, fugit sunt incidunt, unde laudantium aliquid tenetur sint modi molestias architecto hic laboriosam laborum suscipit nostrum.',
        price: '14.99'
    },
    { 
        image: './images/Cover image6.png',
        title: 'Morbi habitasse felis nulla arcu, morbi ultricies.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus ducimus quasi quae cum, fugit sunt incidunt, unde laudantium aliquid tenetur sint modi molestias architecto hic laboriosam laborum suscipit nostrum.',
        price: '11.99'
    },
    { 
        image: './images/Cover image7.png',
        title: 'Morbi habitasse felis nulla arcu, morbi ultricies.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus ducimus quasi quae cum, fugit sunt incidunt, unde laudantium aliquid tenetur sint modi molestias architecto hic laboriosam laborum suscipit nostrum.',
        price: '17.99'
    },
    { 
        image: './images/Cover image8.png',
        title: 'Morbi habitasse felis nulla arcu, morbi ultricies.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus ducimus quasi quae cum, fugit sunt incidunt, unde laudantium aliquid tenetur sint modi molestias architecto hic laboriosam laborum suscipit nostrum.',
        price: '10.99'
    },
    { 
        image: './images/Cover image9.png',
        title: 'Morbi habitasse felis nulla arcu, morbi ultricies.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus ducimus quasi quae cum, fugit sunt incidunt, unde laudantium aliquid tenetur sint modi molestias architecto hic laboriosam laborum suscipit nostrum.',
        price: '10.00'
    },
    { 
        image: './images/Cover image10.png',
        title: 'Morbi habitasse felis nulla arcu, morbi ultricies.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus ducimus quasi quae cum, fugit sunt incidunt, unde laudantium aliquid tenetur sint modi molestias architecto hic laboriosam laborum suscipit nostrum.',
        price: '12.00'
    },
    { 
        image: './images/Cover image1.png',
        title: 'Morbi habitasse felis nulla arcu, morbi ultricies.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus ducimus quasi quae cum, fugit sunt incidunt, unde laudantium aliquid tenetur sint modi molestias architecto hic laboriosam laborum suscipit nostrum.',
        price: '13.00'
    }
]



const open = document.getElementById('open')
const modal_container = document.getElementById('modal_container')
const container = document.getElementById('container')
const close = document.getElementById('close')
const name_id = document.getElementById('name_id')

open.addEventListener('click', () => {
    modal_container.classList.add('show');
    container.classList.add('show');
    name_id.classList.add('show');
})

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
    container.classList.remove('show');
    name_id.classList.remove('show');
})

// function buttonClicked(){
//     alert("Do you want to add an item ?");
// }



const addCards = Cards.map((item, id) => {
    const container = document.querySelector('.card-container')
    const row = document.createElement("div");
    row.className = "card-item"

    row.innerHTML = `  <img class="card-image" src="${item.image}" alt="image-${id}">
                        <div class="card-content">
                            <div class="card-title"><h1> ${item.title} </h1> </div>
                            <div class="card-text"> <p> ${item.text} </p> </div>
                        </div>
                        <div class="card-price">   
                            <p> ${item.price}€ </p>
                        </div>`

return container.appendChild(row)
})

console.log(addCards);









