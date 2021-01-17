<style type="text/css">

	table{
		position: absolute;
		border-style: 0.5px solid black;
	}
	td, tr{
		align-items: center;
		cursor:pointer;
		text-align: center;
	}

	a{
		text-decoration: none;
		color:rgb(0,0,0);
	}
	.fechar {
		position: absolute;
		width: 25px;
		text-align: center;
		background: #ff4545;
		color: #8d0000;
		font-weight: bolder;
		cursor: pointer;

	}
</style>

<?php

include "conexao.php";
$dia_evento = $_GET['data'];

$dia=date_format (new DateTime($dia_evento), 'Y-m-d');


$sql= $conn->query("SELECT * FROM agenda WHERE 	dia_evento = '$dia'");
?>
<table>
	<?php

	if ($sql->rowCount() == 0){

		echo "Não há eventos para mostrar!";

	}else{
		?>
		<tr>
			<th>Nome Evento</th>
			<th>Descricao</th>
		</tr>
		<?php
		foreach ($sql as $row) {          
			if($row['tipo_evento'] == 'aniversario'){
				echo '<tr name="t_e" style="background-color:lightblue">';
			}else if($row['tipo_evento'] == 'lembrete'){
				echo '<tr name="t_e" style="background-color:lightgreen">';
			}else if($row['tipo_evento'] == 'meta'){	
				echo '<tr name="t_e" style="background-color:lightpink">';
			}else if($row['tipo_evento'] == 'evento'){
				echo '<tr name="t_e" style="background-color:purple; color:white">';
			}
			echo '
			<td id="n_e" value="'.$row['dia_evento'].'"  
			onclick="inicio()"
			onblur=teste("idn.'.$row['id_data'].'") title="Clique duas vezes para editar">		
			'. $row['nome_evento'].'</td>';
			echo 
			'<td id="d_e" value="'.$row['dia_evento'].'"  
			onclick="inicio()" 
			onblur=teste("idd.'.$row['id_data'].'") title="Clique duas vezes para editar">			
			'. $row['desc_evento'].'
			</td> ';
			echo '</tr>';
		}
	}
	?>
</table>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript"></script>

<script src="js/functionsVerEvento.js" type="text/javascript"></script>
</html>
