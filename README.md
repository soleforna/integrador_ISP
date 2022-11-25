# 🚀 Rocket Team - Comanda Online
## Proyecto Integrador ISPC Tecnicatura Superior en Desarrollo Web y Aplicaciones Digitales.

<div style="display: inline_block">
  <a href="https://es.wikipedia.org/wiki/Python" target="_blank"><img align="center" alt="Made With PYTHON"  src="https://img.shields.io/badge/Made%20With-PHYTON-brightgreen"></a>
  <a href="https://es.wikipedia.org/wiki/JavaScript" target="_blank"><img align="center" alt="Made With JAVASCRIPT"  src="https://img.shields.io/badge/Made%20With-JavaScript-yellow"></a>
  <a href="#" target="_blank"><img align="center" alt="POSTMAN DOC"  src="https://img.shields.io/badge/Postman-ApiDoc-orange"></a>
  <a href="https://github.com/soleforna/integrador_ISP/graphs/contributors" target="_blank"><img align="center" alt="COMMITS/Y"  src="https://img.shields.io/github/commit-activity/y/soleforna/integrador_ISP"></a>
  <a href="https://youtu.be/HmA-erkNQzA" target="_blank"><img align="center" alt="YOUTUBE" src="https://img.shields.io/youtube/views/HmA-erkNQzA?label=View%20Video&style=social"></a>
</div>

-------

Comanda OnLine es un aplicativo web que permite gestionar el funcionamiento de un emprendimiento gastronómico. En términos generales, dicho sistema, dará la posibilidad de aumentar la visibilidad online del comercio, aumentar la rentabilidad, incrementar las reservas, mejorar la atención al cliente, y conocer las necesidades de los clientes para una mejora constante de los servicios ofrecidos.

-------

## Grupo 10:
*  Maria Soledad Fornasier
*  Ariel Ricardo Micoli
*  Marcos Barey
*  Leonel Casi
*  Johana Martinez
*  Luciano Toro Gutierrez
*  Matias De La Fuente
*  Adrian Camus

-------

El proyecto esta desarrollo con las siguientes tecnologias:

FrontEnd:
* HTML5 - CSS3
* Bootstrap
* JavaScript

BackEnd:
* Python3
* Django (Django Rest Framework)
* MySQL

Pasos para crear entorno virtual en local y lanzar el servidor django:

1) Crear entorno virtual:  py -m venv env
2) Activar entorno virtual: ./env/scripts/activate
3) Instalar los siguientes paquetes:
   *  pip install django 
   *  pip install mysqlclient
   *  pip install py mysql
   *  pip install djangorestframework
   *  pip install django-allauth
   *  pip install django-cors-headers
   *  pip install dj_rest_auh
   *  pip install django-cors-headers
4) Crear BD en algún manejador de BD (ej: PHPmyAdmin)
5) Realizar las migraciones: py manage.py makemigrations 
6) Crear un superusuario: py manage.py createsuperuser
7) Levantar el servidor: py manage.py runserver
   *  Ingresar con el superusuario: (Nombre de usuario - Contraseña - E mail)
Listo!!
