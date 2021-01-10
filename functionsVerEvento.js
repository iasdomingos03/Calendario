	function inicio() {

		var n_e=document.querySelectorAll('#n_e');
		var d_e=document.querySelectorAll('#d_e');
		var idd;
		var idn;
		

		for (var i = 0; i < n_e.length; i++) {
		//console.log(n_e[i]);
		n_e[i].addEventListener("dblclick", function (e) {
			this.contentEditable="true";
			var idn=i+1;
		})
	}
	for (var i = 0; i < d_e.length; i++) {
		//console.log(d_e[i]);
		d_e[i].addEventListener("dblclick", function (e) {
			this.contentEditable="true";
			var idd=i+1;
		})
	}
	
}

function teste(val){
	val=val.split(".");

	console.log(val);

	if(val[0]=="idd"){
		var idd=val[1];
	}else if(val[0]=="idn"){
		var idn=val[1];
	}else{
		console.log(val);
	}	
	// if(idd != undefined){
	// 	console.log("IDD:"+idd);
	// }else if(idn != undefined){
	// 	console.log("IDN"+idn);
	// }else{
	// 	console.log("ERRO");
	// }

	
	if(idn != undefined){
		var nome = document.querySelectorAll('#n_e');		
		var nome_e = nome[idn-1].textContent;
		var data=nome[idn-1].getAttribute("value");
		console.log("idd nome_e"+nome_e);
		console.log("value"+data);
		nome_e=nome_e.toString();
		var desc_e=undefined;

	}else if(idd != undefined){
		var descricao = document.querySelectorAll('#d_e');
		var desc_e = descricao[idd-1].textContent;
		var data=descricao[idd-1].getAttribute("value");

		// console.log("idd desc_e"+desc_e);
		// console.log("value"+data);
		desc_e=desc_e.toString();
		// var tamanho = descricao.length;
		// console.log("tamanho"+ tamanho);
		// for (var i = 0; i < tamanho; i++) {
		// 	console.log("Valores:"+descricao[i].textContent + '\n');
		// }
		var nome_e=undefined;
	}else{
		var nome_e = document.querySelectorAll('#n_e')[idn];
		var desc_e = document.querySelectorAll('#d_e')[idd];
	}
	if(nome_e == undefined){
		// console.log("Desc" + typeof desc_e);
		// console.log("IDTYPE" + typeof idd);

		$.post('atualizaEvento.php', {desc_evento:desc_e, id_data:idd, dia_evento:data},function(retorno){
			console.log(retorno);
		});
	}else if(desc_e == undefined){
		$.post('atualizaEvento.php', {nome_evento:nome_e, id_data:idn, dia_evento:data},function(retorno){
			console.log(retorno);
		});
	}else{
		if(idn == idd){
			var id=idn;
			console.log("IDD"+id);
			$.post('atualizaEvento.php', {nome_evento:nome_e, desc_evento:desc_e, id_data:id, dia_evento:data},function(retorno){
				console.log(retorno);
			});
		}else{
			console.log("Erro");
		}
	}
}
