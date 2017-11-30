<?php

$user_valido = true;
$FILE = "usuarios.txt";
$fichero = fopen($FILE, "r+") or die("NO SE PUEDE ABRIR");
if ($fichero) {
    while (($linea = fgets($fichero)) !== false) {
        $user_escrito = isset($_GET['username']);
        if ($user_escrito == $linea){
            $user_valido = false;
            echo 'Usuario no valido';
            }
        }
    fclose($fichero);
    }

return $user_valido;

?>

