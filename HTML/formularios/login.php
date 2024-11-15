<?php

    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    if ($usuario == 'fernando' && $contrasena == '1234') {
        echo "Eres Fernando, y acabas de hacer login";
    }
    else if ($usuario == 'alejandro' && $contrasena == 'realmadridelmejor') {
        echo "Eres Alejandro y acabas de hacer login, y te gusta el Real Madrid";
    }
    else if ($usuario == 'leoncalavera2021@hotmal.com' && $contrasena == 'CaballoBruto') {
        echo "Eres Juan Seoane";
    }
    else {
        echo "Usuario o contraseña incorrectos";
    }
?>