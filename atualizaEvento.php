<?php
include "conexao.php";

//
$dia_evento=filter_input(INPUT_POST,"dia_evento",FILTER_DEFAULT);
$dia=date_format (new DateTime($dia_evento), 'Y-m-d');
//
$id=filter_input(INPUT_POST,"id_data",FILTER_DEFAULT);

$nome_evento=filter_input(INPUT_POST,"nome_evento",FILTER_DEFAULT);
$desc_evento=filter_input(INPUT_POST,"desc_evento",FILTER_DEFAULT);
print_r("id".$id);
print_r("nome".$nome_evento);
print_r("desc".$desc_evento);

if($id==""){

	echo "Erro";

}else if($nome_evento == ''){

	$sql = $conn->prepare("UPDATE $db SET desc_evento='$desc_evento' WHERE id_data='$id' AND dia_evento='$dia'");
	print_r($sql);

	if ($sql->execute() === TRUE) {
		echo "Evento Atualizado com Sucesso!";
	} else {
		echo "Erro na Atualização do Evento: " . $conn->errorInfo();
	}

}else if($desc_evento == ''){

	$sql = $conn->prepare("UPDATE $db SET nome_evento = '$nome_evento' WHERE id_data='$id'  AND dia_evento='$dia'");
	print_r($sql);

	if ($sql->execute() === TRUE) {
		echo "Evento Atualizado com Sucesso!";
	} else {
		echo "Erro na Atualização do Evento: " . $conn->errorInfo();
	}

}else{
echo "erro";
}




?>