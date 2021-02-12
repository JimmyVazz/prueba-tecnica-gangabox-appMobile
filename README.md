# Prueba técnica para desarrollador full stack Gangabox

![](https://cdn.shopify.com/s/files/1/0127/3161/3243/files/Gangabox_logo_PNG_2_Without_Website_041bfa7f-f819-4ed0-997e-ca71902830a3.png?v=1601139005)

La prueba consiste en crear un funcionalidad en una plataforma administrativa para la importación/exportación de productos por cada categoría. La idea es poder actualizar de forma fácil y rápida datos de los productos, como lo es su orden de aparición en el catalogo. Se debe poder descargar el archivo en **excel**, editar directamente desde el archivo y poder subir de nuevo, donde al subir se visualicen los cambios en el orden o datos de los productos.

![Catalogo](https://prueba-gangabox.netlify.app/assets/img/Ejemplo.png)

Donde el ordenamiento viene desde el valor que se le da.
Ahora para poder actualizarlo de forma más rápida, se tiene un template:

![](https://prueba-gangabox.netlify.app/assets/img/Template.png)

## Propuesta 🚀

_De acuerdo a las instrucciones de la prueba pienso la siguiente propuesta a desarrollo:_

#### Modelo de producto en la base de datos

En este ejemplo de app, para forma más rápida tome un modelo llamado **Producto** que contiene los siguientes atributos

1. CATEGORY
2. PRODUCT_ID
3. PRODUCT_ORDER
4. COST

#### Plataforma web

Para la plataforma que desarrolle, se muestra un inicio de sesión o registro:
![](https://prueba-gangabox.netlify.app/assets/img/IniciarSesi%C3%B3n.png)
En este caso damos click en la parte de registrarse, llenamos los datos y estamos dentro. Después solo damos en iniciar sesión.
![](https://prueba-gangabox.netlify.app/assets/img/Registro.png)

De modo que en el Home de la plataforma web al iniciar sesión, se debe visualizar los productos y las opciones: **Exportar productos a un archivo excel** y **cargar archivo excel**. Esta sería la vista:
![](https://prueba-gangabox.netlify.app/assets/img/Home.png)

Se muestran los productos actuales en la BD y los botones para subir un archivo desde la computadora o descargar en excel los productos para su modificación.
Si descargamos el excel con productos, de acuerdo al template que se proporcionó, use este forma :
![](https://prueba-gangabox.netlify.app/assets/img/ExcelDescarga.png)

Así se ve el archivo al ser descargado desde la plataforma. Podemos editar y subir directamente este mismo archivo para modificar.

#### App Mobile

Para demostrar la actualización de datos al subir un archivo excel, decidí crear una aplicación sencilla que consume una API con los productos y los muestra de forma ordenada como vienen de acuerdo al numero de lista. Al abrir la app se muestra el logo de la empresa:

![](https://prueba-gangabox.netlify.app/assets/img/Splash.png)

Después, en el Home de la app se cargan de acuerdo a como están ordenados los productos:

![](https://prueba-gangabox.netlify.app/assets/img/HomeApp.png)

No realice el grid para que salga por columnas para no gastar tanto tiempo en frontend, pero la funcionalidad del ordenamiento funciona.

**Ahora, podemos probar de la siguiente manera:**

1. Abrir la plataforma web para ver los productos.
2. Abrir también la app mobile y ver los productos.
3. Ver de que manera están ordenados.
4. Descargar o subir el excel cambiando el orden o datos.
5. Cuando se muestre la alerta de actualización exitosa, vamos a la aplicación móvil y la refrescamos de la siguiente manera:

![](https://prueba-gangabox.netlify.app/assets/img/Refresh.png)

Jalamos hacia abajo la pantalla como si estuviéramos actualizando Facebook y soltamos. Al momento de hacer esto, se actualizaran de forma automática los datos. Y nos saldrá un mensaje:

![](https://prueba-gangabox.netlify.app/assets/img/Actuliazada.png)

De esta forma podemos ver como todo se actualiza en nuestra BD.
Por ultimo, el endpoint que consume nuestra app mobile se ve de la siguiente manera:

![](https://prueba-gangabox.netlify.app/assets/img/Json.png)

_Eso sería todo lo que conlleva la tarea que se pidió en la prueba. En la parte de abajo dejo los links de ingreso a la plataforma y descarga de la app._

#### ¿Cómo sería el planteamiento del proyecto de forma más profunda?

En este caso se uso **Laravel 8** para el backend, para la plataforma se uso **Bootstrap**. Hablando de la BD, solo tome de forma rápida Producto pero para su escalabilidad, se tendría que tomar en cuenta todo el diseño de la BD, para checar referencias y relaciones. De forma más profesional o cuestiones de desempeño se podría migrar a **React** para separar nuestro backend en laravel y crear una API donde consuma tanto nuestra App Mobile y nuestra Web. El proceso que hago para la actualización de datos se hace con **Eloquent** que viene con PHP pero no se toma el rendimiento, trabajando en producción podríamos mejor usar procedimientos almacenados en MySQL para que todo ese proceso pesado de tal vez miles de registros se haga directo en la BD.
La API no tiene autenticación, pero en producción se usaría **JWT** para cada petición. Y para la app mobile se uso **React Native**, los datos solo se traen cuando se piden, de modo que en producción podríamos usar un manejador de estados como **Redux** o **React Query**, react native nos ayuda a sacar la app en **Android/IOS**.

### Pre-requisitos para instalar este proyecto 📋

**Para correr el proyecto necesitas:**

```
-NodeJS minimo en versión 12
-PHP Composer instalado
-XAMPP o apache y mysql instalado
-Un navegador web
-Teléfono Android
```

### Instalación 🔧

**Para instalar y configurar el proyecto de la plataforma :**
Nota. Debes crear la BD y crear tu variable de entorno .env para el proyecto laravel. Sino. tendrás problemas al ejecutar. Usa de ejemplo el archivo .example.env

1. Abre una consola, muevete al directorio **plataforma** y ejecuta
   composer install
   php artisan migrate
   npm install
   npm run dev

**Para instalar y configurarel proyecto de la app mobile:**

1. Abre una consola, muévete al directorio **appMobile** y ejecuta
   npm install o yarn install
   npm start o expo start

### Demos en producción 😎

#### Plataforma: Laravel + Bootstrap + MySQL + React Native 🔥

- 👉 [Plataforma web](https://gangabox-admin.herokuapp.com/)
- 👉[API de consulta de productos ](https://gangabox-admin.herokuapp.com/api/v1/gangabox/productos)
- 👉 [Descarga App Mobile](https://drive.google.com/drive/folders/1yTuV135EEtX_HKpCj5HHrrZNPL0YPzgg?usp=sharing) - En esta carpeta de drive se encuentra el archivo APK para probar la app en sus android, solo se tiene que descargar el archivo y abrir desde el administrador de archivos.
  Al instalar, dar click en Play Protect: Instalar de todas formas. Para que deje instalar la app.

## Construido con 🛠️

_Herramientas con las que se construyeron la plataforma y app mobile_

#### Frontend

- [Blade Template](https://laravel.com/docs/7.x/blade) - Template para el frontend de nuestra app
- [Boostrap](https://getbootstrap.com/)- Librería de diseño para iconos, tablas, botones

#### App Mobile (Android/IOS)

- [React Native](https://reactnative.dev/) - Framework basado en react para crear aplicaciones móviles multiplataforma

#### Backend

- [Node JS](https://nodejs.org/es/)-Entorno para preprocesar todo nuestros archivos estáticos o librerías externas de frontend
- [Laravel 8](https://laravel.com/) - Framework para aplicaciones web robustas usando PHP, con el cual creamos nuestra lógica de la plataforma y la API

#### Database

- [MySQL](https://www.mysql.com/) - Nuestro manejador de BD

#### Hosting

- [Heroku](https://www.heroku.com/) - Nuestro hosting para la plataforma web y backend
- [AWS](https://aws.amazon.com/es/) - Nuestro proveedor de servidor
- [Azure](https://azure.microsoft.com/es-mx/) - Nuestro proveedor de servidor para base de datos

## Autores ✒️

- **Jimmy Vasquez** - _Trabajo Inicial_ - [JimmyVazz](https://github.com/JimmyVazz/)

## Licencia 📄

Este proyecto está bajo la Licencia (MIT LICENCE) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

⌨️ con ❤️ por [JimmyVazz](https://github.com/JimmyVazz/) 😊 para [Gangabox](https://www.gangabox.com/)
