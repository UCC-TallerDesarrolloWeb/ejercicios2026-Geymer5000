const productos = [
  {
    nombre: "Cabezal Sparring",
    description: "Cabezal de Sparring.",
    categoria: "Protectores",
    marca: "Gran Marc",
    talle: ["1", "2", "3"],
    precio: 35000,
    web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
    imagen: "cabezal-cerrado.webp",
  },
  {
    nombre: "Dobok Dan",
    description: "Bobok aprobado para torneos internacionales.",
    categoria: "Dobok",
    marca: "Daedo",
    talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
    precio: 115000,
    web: "https://www.daedo.com/products/taitf-10813",
    imagen: "dobok.webp",
  },
  {
    nombre: "Escudo de Potencia",
    description: "Escudo de potencia para entrenamientos.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 51700,
    web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
    imagen: "escudo-potencia.webp",
  },
  {
    nombre: "Par de focos redondos",
    description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 15000,
    web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
    imagen: "foco-con-dedos.webp",
  },
  {
    nombre: "Guantes 10 onzas",
    description:
      "Guantes de Sparring de 10 onzas habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["s/talle"],
    precio: 35000,
    web: "https://www.daedo.com/products/pritf-2020",
    imagen: "protectores-manos.webp",
  },
  {
    nombre: "Protectores Pie",
    description: "Protectores de Pie habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["XXS", "XS", "S", "M", "L", "XL"],
    precio: 35000,
    web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
    imagen: "protectores-manos.webp",
  },
];

/* Descripción
 * @method MostrarModal
 * @param {string} valor = valor del id del radio butoon seleccionado
 */

mostrarModal = (num) => {
  document.getElementById("nombre-producto").innertext = productos[num].nombre;
  document.getElementById("descripcion.producto").innertext =
    productos[num].description;
  document.getElementById("modal").style.display = "block";
};
cerrarModal = () => {
  document.getElementById("modal").style.display = "none";
};

/** Descripción
 * @method AgregarAlCarrito Agrega a un array en el localStorage los productos selecionados.
 * @param {number} num = id del producto seleccionado
 */

agregarAlCarrito = (num) => {
  let carritoList = localStorage.getItem("carrito");
 

  if (carritoList == null || carritoList == 0) {
    carritoList = [];
  } else {
    carritoList = JSON.parse(carritoList);
  }
  carritoList.push(num);

  localStorage.setItem("carrito", JSON.stringify(carritoList));
  contarProductos();
};

/** Muestra dinamicamente los producyos que estan en el localStorage
 * @method MostrarCatalogo Muestra el catálogo de productos en la página.
 * @param {array} newlist = array de productos a mostrar
 */

let mostrarCatalogo = (newlist = productos) => {
  let contenido = "";

  newlist.forEach((producto, id) => {
    contenido += `<div> 
                    <img src="https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>${formatPrice(producto.precio)}</p>
                    <button type="button" onclick="mostrarModal(${id})">Ver Detalles del Producto</button>
                    <button type="button" onclick="agregarAlCarrito(${id})">Agregar al Carrito</button>
                </div>`;
  });
  document.getElementById("catalogo").innerHTML = contenido;
};

/** Muestra dinamicamente los productos que estan en el localStorage
 * @method MostrarCarrito Muestra el carrito de compras en la página
 */
mostrarCarrito = () => {
  let contenido = "";
  let carritoList = localStorage.getItem("carrito");
  
  if (carritoList == [] || carritoList == null) {
    carritoList = [];
    contenido = `<div>El carrito esta vacio</div>`;
  } else {
    carritoList = JSON.parse(carritoList);
    let total = 0;
    const listProod = [];
    const listCant = [];
    
    carritoList.forEach((num) => {
      if(!listProod.includes(num)){
        listProod.push(num);
        listCant.push(1);
      } else {
        const inx = listProod.indexOf(num);
        listCant[inx] += 1;
      }
    });
    listProod.forEach((num, id) =>
        {contenido += `<div>
                    <h3>${productos[num].nombre}</h3>
                    <p>${formatPrice(productos[num].precio)}</p>
                    <button type="button" onclick="eliminarProducto(${id})">Eliminar producto</button>
                    </div>`;
                    total += productos[num].precio * listCant[id];
        });
        
    contenido += `<button type="button" onclick="vaciarCarrito()">Vaciar Carrito</button>`;
  }
  
  document.getElementById("carrito").innerHTML = contenido;
};

/**
 * Elimina todos los productos del carrito.
 * @method vaciarCarrito
 *
 */

let vaciarCarrito = () => {
  localStorage.removeItem("carrito");
  window.location.reload();
};

/**
 * Elimina un producto del carrito.
 * @method eliminarProducto
 * @param {number} id = índice del producto a eliminar
 */

let eliminarProducto = (id) => {
  let carritoList = localStorage.getItem("carrito");
  carritoList = JSON.parse(carritoList);
  carritoList.splice(id, 1);
  localStorage.setItem("carrito", JSON.stringify(carritoList));
  window.location.reload();
};

/**
 * filtra el catelogo de productos según los filtros seleccionados
 * @method filtrarProductos
 */

let filtrarProductos = () => {
  let searchWord = document.getElementById("search").value;
  let min = document.getElementById("price-min").value;
  let max = document.getElementById("price-max").value;
  let marca = document.getElementById("marca").value;
  let prot = document.getElementById("protectores").checked;
  let entr = document.getElementById("entrenamiento").checked;
  let dob = document.getElementById("dobok").checked;
  let newlist = productos;

  console.log(searchWord, min, max, marca, prot, entr, dob);
  console.log(newlist);
  if (searchWord) {
    newlist = newlist.filter((prod) =>
      prod.nombre.toLowerCase().includes(searchWord.toLowerCase()),
    );
  }
  if (min) {
    newlist = newlist.filter((prod) => prod.precio >= min);
  }
  if (max) {
    newlist = newlist.filter((prod) => prod.precio <= max);
  }
  if (marca != "Todas") {
    newlist = newlist.filter((prod) => prod.marca == marca);
  }
  let category = [];
  prot ? category.push("protectores") : "";
  entr ? category.push("entrenamiento") : "";
  dob ? category.push("dobok") : "";

  if (category.length > 0) {
    newlist = newlist.filter((prod) => category.includes(prod.categoria));
  }

  console.log(newlist);
  mostrarCatalogo(newlist);
};

/** Formatea el precio
 * @method formatPrice
 * @param {number} price = precio a formatear
 */

let formatPrice = (price) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(price);
};

/** cuenta los prodcutos que estan en el carrito
 * @method contarProductos
 */

let contarProductos = () => {
  let carritoList = localStorage.getItem("carrito");
  carritoList = JSON.parse(carritoList);

  if (carritoList.length > 0) {
    document.getElementById("cant-prod").innerHTML = carritoList.length; 
  }
};

let ordenarCatalogo = () => {
  const opt = document.getElementById("order").value;
  let newProductos;
  console.log(opt);
  switch (opt){
    case "Mayor":
      newProductos = productos.sort((a, b) => b.precio - a.precio);
      break;
    case "menor":
      newProductos = productos.sort((a, b) => a.precio - b.precio);
      break;
    case "a-z":
      newProductos = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
      break;
    case "z-a":
      newProductos = productos.sort((a, b) => b.nombre.localeCompare(a.nombre));
      break;
    default:
      newProductos = productos;
      break;
  } 

  mostrarCatalogo(newProductos);
}