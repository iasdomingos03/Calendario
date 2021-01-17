
<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" type="text/css" href="css/styleIndex.css" />
</head>
<body>
	<main>
		<table>
			<thead>
				<tr class="mes">
					<th colspan="3" class="mes">
						<select id="ano" onchange="update()">
							<option value='' id="selecioneA">Selecione</option>
							<option value="2020" id="2020">2020</option>
							<option value="2021" id="2021">2021</option>
							<option value="2022" id="2022">2022</option>
							<option value="2023" id="2023">2023</option>
							<option value="2024" id="2024">2024</option>
							<option value="2025" id="2025">2025</option>
							<option value="2026" id="2026">2026</option>
							<option value="2027" id="2027">2027</option>
							<option value="2028" id="2028">2028</option>
							<option value="2029" id="2029">2029</option>
							<option value="2030" id="2030">2030</option>
						</select>
					</th>
					<th class="mes" colspan="5">
						<select id="mes" onchange="update()">
							<option value="" abbr="------" id="selecione">Selecione</option>
							<option value="0" abbr="Jan" id="janeiro">Janeiro</option>
							<option value="1" abbr="Fev"id="fevereiro">Fevereiro</option>
							<option value="2" abbr="Mar" id="março">Março</option>
							<option value="3" abbr="Abr" id="abril">Abril</option>
							<option value="4" abbr="Mai" id="maio">Maio</option>
							<option value="5" abbr="Jun" id="junho">Junho</option>
							<option value="6" abbr="Jul" id="julho">Julho</option>
							<option value="7" abbr="Ago" id="agosto">Agosto</option>
							<option value="8" abbr="Set" id="setembro">Setembro</option>
							<option value="9" abbr="Out" id="outubro">Outubro</option>
							<option value="10" abbr="Nov" id="novembro">Novembro</option>
							<option value="11" abbr="Dez" id="dezembro">Dezembro</option>
						</select>
					</th>

				</tr>
				<tr>
					<th id="Dom" value="0">Dom</th>
					<th id="Seg" value="1">Seg</th>
					<th id="Ter" value="2">Ter</th>
					<th id="Qua" value="3">Qua</th>
					<th id="Qui" value="4">Qui</th>
					<th id="Sex" value="5">Sex</th>
					<th id="Sab" value="6">Sab</th>
				</tr>
			</thead>
			<tbody id="sem" class="sem" onmouseenter="seleciona()" onmouseleave="seleciona()">

			</tbody>

		</table>
	</main>
	<ul id="menu" class="menu" hidden>
		<li onclick="Add()"> Adicionar Evento</li>
		<li onclick="Ver()" id="v_e">Ver Eventos </li>
	</ul>

	<div class="modal" id="modal_cad" hidden>	
		<form method="post" action="cadastraEvento.php" id="cadastro">	
			<div class="modal-title">Cadastrar Evento</div>
			<a href="#fechar" title="Fechar" class="fechar">x</a>
			<div class="modal-body">
				<label>Data Evento:</label>
				<input type="text" name="dia_evento" id="dia_evento" readonly>
				<label>Nome do Evento:</label>
				<input type="text" name="nome_evento" id="nome_evento">
				<label>Descrição Evento:</label>
				<textarea type="text" name="desc_evento"id="desc_evento"></textarea>
				<label>Tipo de Evento:</label>
				<select name="tipo_evento" id="tipo_evento">
					<option value="">Selecione</option>
					<option value="aniversario">Aniversário</option>
					<option value="lembrete">Lembrete</option>
					<option value="meta">Meta</option>
					<option value="evento">Evento</option>
				</select>
			</div>
			<div class="modal-footer">
				<input type="submit" name="btn_cad" id="btn_cad" class="btn-cad" value="Cadastrar">
			</div>
		</form>
	</div>
	<div id="ver" hidden>
		<a class="fechar" id="fecharF">x</a>
		<object></object>
	</div>
</body>	
<script src="js/indexCalendario.js" type="text/javascript"></script>

</html>
