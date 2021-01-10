<?php
include "conexao.php";

$dia_evento=filter_input(INPUT_POST,"dia_evento",FILTER_DEFAULT);
$nome_evento=filter_input(INPUT_POST,"nome_evento",FILTER_DEFAULT);
$desc_evento=filter_input(INPUT_POST,"desc_evento",FILTER_DEFAULT);
$tipo_evento=filter_input(INPUT_POST,"tipo_evento",FILTER_DEFAULT);

$dia=date_format (new DateTime($dia_evento), 'Y-m-d');
$sql1=$conn->prepare("SELECT * FROM $db WHERE dia_evento = '$dia'");

$i=0;
// print_r($sql1);
if($sql1->execute()){
	if($sql1->rowCount() > 0){
		$l=$sql1->rowCount();
		$i=$l+1;
	}else{
		$i=1;
	}
}else{
	echo $sql1->errorInfo();
}

$sql = $conn->prepare("INSERT INTO $db (dia_evento, id_data, nome_evento, desc_evento, tipo_evento) VALUES (:dia, :i, :nome_evento, :desc_evento, :tipo_evento)");

$sql->bindParam(':dia', $dia);
$sql->bindParam(':i', $i);
$sql->bindParam(':nome_evento', $nome_evento);
$sql->bindParam(':desc_evento', $desc_evento);
$sql->bindParam(':tipo_evento', $tipo_evento);
print_r($sql);

if ($sql->execute()) {
header('location:index.php');
} else {
echo "Problemas para cadastrar";
echo $sql->errorInfo();
}

?>