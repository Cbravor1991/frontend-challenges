# Simulador de Tienda en Línea

## Descripción del Proyecto
Desarrollar una simulación de una tienda en línea utilizando React. La aplicación permitirá a los usuarios explorar productos, agregar productos al carrito de compras, y proceder a un proceso de pago simulado. El objetivo es evaluar las habilidades del candidato en el manejo de estados, componentes, enrutamiento, formularios, y diseño de interfaces en React.

## Requisitos Técnicos

### Estructura y Configuración del Proyecto
- Utilizar `create-react-app` o una configuración personalizada para iniciar el proyecto.
- Organizar el proyecto en componentes reutilizables, siguiendo buenas prácticas de arquitectura.
- Utilizar `React Router` para la navegación entre diferentes páginas (inicio, detalles de productos, carrito de compras, y checkout).

### Visualización de Productos
- **Datos**: Utilizar un archivo JSON o una API externa (puede ser mockeada) para simular la lista de productos disponibles en la tienda.
- **Componente de Listado de Productos**: Mostrar todos los productos en una cuadrícula, incluyendo la imagen, nombre, precio, y un botón para agregar al carrito.
- **Filtro y Clasificación**: Implementar una barra lateral o superior que permita a los usuarios filtrar productos por categoría, rango de precios, y ordenar por precio o popularidad.

### Carrito de Compras
- **Gestión del Estado**: Utilizar el hook `useState` o `useReducer` para gestionar el estado del carrito de compras. Alternativamente, si se desea, se puede usar una librería como Redux.
- **Visualización del Carrito**: Crear un componente que muestre los productos agregados al carrito, la cantidad de cada producto, y el costo total. Incluir botones para aumentar o disminuir la cantidad de un producto o eliminarlo del carrito.
- **Persistencia del Carrito**: Almacenar el contenido del carrito en `localStorage` para que los productos permanezcan en el carrito tras recargar la página.

### Vista Detallada del Producto
- **Descripción Completa**: Al hacer clic en un producto desde la página principal, dirigir al usuario a una página de detalles donde se muestre una descripción completa del producto, especificaciones, y una opción para agregarlo al carrito.
- **Componentes Reutilizables**: Reutilizar componentes para la visualización de imágenes y detalles en diferentes partes de la aplicación.

### Proceso de Pago Simulado
- **Formulario de Checkout**: Crear una página de checkout donde el usuario pueda ingresar información básica como nombre, dirección, y detalles de pago (simulados).
- **Validación de Formulario**: Implementar validación de formulario para asegurarse de que todos los campos requeridos estén completos y en el formato correcto.
- **Resumen del Pedido**: Mostrar un resumen final del pedido antes de confirmar la compra, incluyendo productos, cantidades, y el precio total.
- **Confirmación**: Al completar el formulario, mostrar un mensaje de éxito simulando que la compra se ha realizado.

### Estilos y Diseño
- **CSS/Frameworks**: Utilizar CSS personalizado o un framework de diseño como Material-UI, Bootstrap, o Tailwind CSS para crear una interfaz moderna y atractiva.
- **Diseño Responsivo**: Asegurarse de que la aplicación sea completamente responsiva, adaptándose bien a dispositivos móviles y de escritorio.

## Entrega y Documentación
- **Repositorio**: Subir el código a un repositorio en GitHub (o la plataforma que se indique), asegurándose de incluir un archivo `README.md` con instrucciones claras sobre cómo ejecutar el proyecto.
- **Documentación**: Incluir comentarios en el código donde sea necesario, explicando la lógica y las decisiones clave. También se debe incluir una breve explicación sobre cómo se gestionó el estado, cómo se implementó el proceso de pago simulado, y cualquier otro aspecto relevante del desarrollo.

## Evaluación
La prueba será evaluada en función de:
- **Calidad del Código**: Limpieza, organización, y uso adecuado de las funcionalidades de React.
- **Funcionalidad**: Que todas las características solicitadas estén implementadas y funcionen correctamente.
- **Experiencia de Usuario**: Diseño, usabilidad, y experiencia general al interactuar con la aplicación.
- **Documentación**: Claridad y detalle en la documentación del proyecto y comentarios en el código.
