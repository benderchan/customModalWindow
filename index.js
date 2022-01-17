let fruits = [
  {
    id: 1,
    name: 'Apple',
    price: '19$',
    img: 'https://static3.depositphotos.com/1000955/121/i/600/depositphotos_1219519-stock-photo-red-apple.jpg',
  },
  {
    id: 2,
    name: 'Orange',
    price: '21$',
    img: 'http://orfiagro.com/wp-content/uploads/2020/10/orange-1hoca2l.jpg',
  },
  {
    id: 3,
    name: 'Mango',
    price: '50$',
    img: 'https://amati.shop/img/shop/prodotti/868mangojpg.jpg',
  },
  {
    id: 4,
    name: 'Ananas',
    price: '10$',
    img: 'https://media.istockphoto.com/photos/pineapple-isolated-picture-id90965948?k=20&m=90965948&s=612x612&w=0&h=59577bRdZw6IXfGXQMK3yVNjVowE83tDikNYtfvSbz4=',
  },
]

const cards = document.querySelector('.row')

const toHTML = (fruit) => `
    <div class="col">
    <div class="card">
      <img
        class="card-img-top"
        style="height: 100px, width: 100px"
        src="${fruit.img}"
        alt="Card image cap"
      />
      <div class="card-body" >
        <h5 class="card-title" >${fruit.name}</h5>

        <a href="#"  class="btn btn-primary" data-btn='price' data-id='${fruit.id}'>Price</a>
        <a href="#" class="btn btn-danger" data-btn='remove' data-id='${fruit.id}'>Delete</a>
      </div>
    </div>
    </div>
`

const render = () => {
  const html = fruits.map((fruit) => toHTML(fruit)).join('')
  document.querySelector('#fruits').innerHTML = html
}
render()
const priceModal = $.modal({
  width: '400px',
  title: 'Total price',
  closable: true,
  buttons: [
    {
      text: 'Close',
      type: 'primary',
      handler() {
        priceModal.close()
      },
    },
  ],
})

document.addEventListener('click', (e) => {
  e.preventDefault()
  const id = +e.target.dataset.id
  const btnType = e.target.dataset.btn
  const fruit = fruits.find((el) => el.id === id)
  if (btnType === 'price') {
    priceModal.setContent(`
      <p>Price of ${fruit.name}: <strong>${fruit.price}</strong> </p>
    `)
    priceModal.open()
  } else if (btnType === 'remove') {
    $.removeFruit({
      price: fruit.price,
      title: 'Sure?',
      content: ` <p>Deleting ${fruit.name}</p>`,
    })
      .then(() => {
        fruits = fruits.filter((el) => el.id !== id)
        render()
      })
      .catch(() => console.log('cancel'))
  }
})
