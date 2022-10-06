📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# :bulb: filters custom

### :green_book: Filtros de departamento
![Media Placeholder](https://github.com/daniel17110290/Diesel_store/blob/main/assets/images/filter-departments.PNG)

### :orange_book: Filtros de categorias
![Media Placeholder](https://github.com/daniel17110290/Diesel_store/blob/main/assets/images/filters-categories.PNG)


## :pencil2: Informacion general

Este repositorio contiene el codigo necesario para crear un componente personalizado el cual permite filtrar por departamentos de tienda, posteriormente en cada departamento, filtrara por categorias, usando cards con imagenes donde se podra observar cada seleccion. 

este componente fue creado para una tienda diseñada en vtex io.

## :wrench: Configuracion 

### Paso 1 - Clonacion del repositorio

Primero se debe crear un nuevo repositorio que contiene ([react-app-template](https://github.com/vtex-apps/react-app-template)) de vtex io 

![image](https://user-images.githubusercontent.com/96321122/194419247-940ccb1b-566d-4b25-b5e0-c4ce319bb802.png)

una vez creado el repositorio lo clonarlo y ya estaria listo para empezar a trabajar

### paso 2 - Editar el manifest.json

teniendo el repositorio clonado se debe configurar el manifest.json que llega por defecto en el template

ejemplo:

{
  "vendor": "itgloberspartnercl",
  "name": "filters-custom",
  "version": "0.0.1",
  "title": "Cards de departamento y categoria",
  "description": "Se vera unas cards con los departamentos y cuando click se mostrara las cards con las categorias",
}

Ademas configurar los bulders, agregando store:

"builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
    "store": "0.x"
  },

Agregar la dependencias necesarias para que la app tenga los componentes que se usaran para su funcionamiento.

"dependencies": {
    "vtex.css-handles": "0.x",
    "vtex.store-graphql": "2.x",
    "vtex.store-components": "3.x"
  },
  
### paso 3 - Editar el Package.json

Se modificara el archivo de {package.json} global

{
  "version": "0.0.1",
  "name": "filters-custom",
}

De la misma manera se modifica el archivo {Package.json} que se encuentra en la carpeta react

### Paso - 4 Instalar dependencias en React

Teniendo configurado los pasos anteriores, se procede a instalar las depencias desde la terminal ubicado en la carpeta react, usando el comando {yarn} se instalara todas las dependencias para poder comenzar con el trabajo.

### Paso - 5 Creacion de la carpeta {store}

Se procede a crear una carpeta {store} que se encontrara independiente dentro de la carpeta general del proyecto, dentro de esta carpeta se creara el archivo {manifest.json} donde sera configurado y este permitira ser usado para renderizar el componente en la tienda vtex io

{
  "filters-departmen": {
    "component": "FilterCards",
    "composition": "children",
    "render": "client"
  },
  "filters-departmen.categories": {
    "component": "CardCategories",
    "composition": "children",
    "render": "client"
  }
}

### Paso - 6 Creacion del componente

Despues de las configuraciones generales se procede a la creacion del componente desde {react}, para ver en navegador los cambios y avances del componente se debera linkear la pagina con el comando {vtex link}

## :video_game: Colaboradores

(https://github.com/daniel17110290)




