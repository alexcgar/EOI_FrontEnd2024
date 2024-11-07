<?php
  $nombre = $_GET['nombre'];
  $apellidos = $_GET['apellidos'];
  $fecha = $_GET['fecha'];
  $telefono = $_GET['telefono'];
  $correo = $_GET['correo'];
  $github = $_GET['github'];
  $perfil = $_GET['perfil'];
  $salario = $_GET['salario'];

  file_put_contents("solicitudes.csv", "$nombre,$apellidos,$fecha,$telefono,$correo,$github,$perfil,$salario\n", FILE_APPEND);

  echo "<p>Datos guardados</p>";
  echo "<p>Haz click <a href='/index.php'>aquí</a> para ir a la página de inicio</p>";
  echo "<p>Haz click <a href='/solicitudes.csv' target='_blank'>aquí</a> para ver todas las solicitudes</p>";
?>