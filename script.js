// Variables del DOM
const userSession = document.getElementById('userSession')
const container = document.getElementById('container')
const name = document.getElementById('name')

// Variables interactivas
let count = 2;
let discount = 0

// Se oculta el contenedor al cargar la página para mostrar el inicio de sesión
container.style.display = 'none'

// Guarda información del usuario al hacer clic en Iniciar Sesión
userSession.addEventListener('submit', (e) => {
  e.preventDefault()

  // Variables para crear los elementos del DOM
  const greeting = document.createElement('h3')
  const coupon = document.createElement('h5')
  const btn50 = document.createElement('button')
  const btn15 = document.createElement('button')
  const basket = document.createElement('h5')
  const div = document.createElement('div')

  // Texto de los elementos creados
  greeting.textContent = `¡Te damos la bienvenida, ${name.value}!`
  coupon.textContent = `Tienes ${count} cupones disponibles.`
  btn50.textContent = 'CUPÓN 50%'
  btn15.textContent = 'CUPÓN 15%'
  basket.textContent = `Tienes disponible un total de ${discount}% de descuento`

  // Inserción de los elementos en el contenedor
  container.appendChild(greeting)
  container.appendChild(coupon)
  container.appendChild(div).appendChild(btn50)
  container.appendChild(div).appendChild(btn15)
  container.appendChild(basket)

  // Función para abrir el cupón de 50%
  div.firstChild.onclick = function () {

    // Si el usuario confirma se actualizan las variables interactivas y se abre el cupón
    // en una ventana emergente
    if (confirm('¿Deseas utilizar el descuento ahora?')) {
      count--
      discount += 50
      coupon.textContent = `Tienes ${count} cupones disponibles.`
      basket.textContent = `Tienes disponible un total de ${discount}% de descuento`
      btn50.style.display = 'none'
      
      // Se oculta el mensaje de cupones disponibles si no hay ninguno
      if (count === 0) {
        coupon.style.display = 'none'
      }

      // Ventana emergente con las dimensiones de 600px x 400px
      window.open('coupon50.html', '', 'width=600, height=400')
    }
  }

  // Función para abrir el cupón de 15%
  div.lastChild.onclick = function () {

    // Si el usuario confirma se actualizan las variables interactivas y se abre el cupón
    // en una ventana emergente
    if (confirm('¿Deseas utilizar el descuento ahora?')) {
      count--
      discount += 15
      coupon.textContent = `Tienes ${count} cupones disponibles.`
      basket.textContent = `Tienes disponible un total de ${discount}% de descuento`
      btn15.style.display = 'none'

      // Se oculta el mensaje de cupones disponibles si no hay ninguno
      if (count === 0) {
        coupon.style.display = 'none'
      }

      // Ventana emergente con las dimensiones de 400px x 200px
      window.open('coupon15.html', '', 'width=400, height=200')
    }
  }

  // Se muestra el contenedor y se oculta el inicio de sesión
  container.style.display = 'flex'
  userSession.style.display = 'none'
})
