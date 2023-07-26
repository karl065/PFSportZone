Para realizar las conexiones al server en deploy

https://backsportzone.onrender.com/users => usuarios

https://backsportzone.onrender.com/auth => autenticaciones

https://backsportzone.onrender.com/persons => personas

https://backsportzone.onrender.com/inventory => inventarios - productos

https://backsportzone.onrender.com/category => Categorias

https://backsportzone.onrender.com/deporte => Deportes => get por ID, Nombre y Status

https://backsportzone.onrender.com/filters => para filtros de usuarios e inventario === filtros listos para usuarios => userStatus - role y para inventarios => status

Para realizar las conexiones al server en local.. para esto tienen que levantar el back en local con npm run dev

http://localhost:3000/users => usuarios

http://localhost:3000/auth => autenticaciones

http://localhost:3000/persons => personas

http://localhost:3000/inventory => inventarios - productos

http://localhost:3000/category => Categorias

http://localhost:3000/deporte => Deportes => get por ID, Nombre y Status

http://localhost:3000/filters => para filtros de usuarios e inventario === filtros listos para usuarios => userStatus - role y para inventarios => status

http://localhost:3000/carrito => para agregar un prod al carrito se envían los siguientes datos por body, este mismo sirve para sumar o restar la cantidad del producto

{
"idCar":1, == id del carrito va vinculado al usuario
"id_inventory":"t01", == id del producto que se va a agregar
"cant":2 == cantidad del producto que va a agregar
}

http://localhost:3000/carrito/:idCar/:id_inventory => para eliminar un producto del carrito
1 t01 primero el id del carrito y después el del producto, se envían por params

http://localhost:3000/carrito/:idCar => para eliminar todos los productos del carrito
