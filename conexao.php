<?php
$db="agenda";
$host="localhost";
$username="root";
$password="password";
$dsn_Options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];


try {
	$conn = new PDO("mysql:host=$host;dbname=$db", $username, $password,$dsn_Options);
	// echo "Conectado a $db em $host com sucesso.";
} catch (PDOException $pe) {
	die("Não foi possível se conectar ao banco de dados $dbname :" . $pe->getMessage());
}
?>