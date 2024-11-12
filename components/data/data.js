const products = [
    {
      id: "Uru1",
      name: "Uruguay, nuestro país",
      description: "Conoce Punta del este y demás ciudades importantes",
      price: 1500,
      stock: 50,
      image: "/img/uruguay.3.jpg",
      category: "america"
    },
    {
      id: "Arg1",
      name: "Argentina",
      description: "Te invitamos a conocer y recorrer la ciudad de la furia",
      price: 4000,
      stock: 40,
      image: "/img/argentina.1.jpg",
      category: "america"
    },
    {
      id: "Bra1",
      name: "   Brasil y sus playas",
      description: "Las mejores playas de Floripa y norte de Brasil",
      price: 20000,
      stock: 30,
      image: "/img/brasil.2.jpg",
      category: "america"
    },
    {
      id: "Caribe1",
      name: "Caribe: CUBA",
      description: "Veni con nosotros a la isla maravillosa",
      price: 50000,
      stock: 15,
      image: "/img/caribe.4.jpg",
      category: "centroamerica"
    },
    {
      id: "Euro1",
      name: "Europa",
      description: "Mejores ciudades del Viejo Continente",
      price: 80000,
      stock: 15,
      image: "/img/europa.5.jpeg",
      category: "eurasia"
    },
    {
      id: "Asia1",
      name: "Asia",
      description: "Veni con nosotros a conocer una de las mavarillas de el mundo",
      price: 100000,
      stock: 10,
      image: "/img/taj mahal.6.jpeg",
      category: "eurasia"
    },
  ]

  const getProducts = () => {
    return new Promise((resolve, reject) => {

      setTimeout( ()=>{
        resolve(products)
      }, 2000 )
    })
  }
  
  export { getProducts }