
const dateOptions = { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric'};

var dfev;
var iniD=0;
var meses=12;
var iniM=1;
var d=1;
var m=1;
let time;
var sem=document.querySelector('.sem');



function calculo(valorA) {
	var mes=document.getElementById('mes');
	var valor=mes.options[mes.selectedIndex].value;


	switch(valor){
		case '0':
		var D = [];	
		var M = [];
		var d=1;
		var dia=1;
		var ttime=document.querySelectorAll('time');

		var jan = new Date(Date.UTC(valorA,valor,dia,+3,0,0));
		jan.toLocaleDateString('pt-BR', dateOptions); 
		var diaJ = jan.getUTCDay();
		var mesJ= jan.getUTCMonth();
		valor= parseInt(valor);

		iniD=0;

		for(iniD=0;iniD<ttime.length; iniD++){

			if(iniD>=diaJ && d<=31){

				D[iniD]=d;
				d++;
					// console.log("Valor Inid:"+D[iniD]);
					// console.log("Valor Ttime:"+ttime[iniD]);


					ttime[iniD].textContent=D[iniD];
					ttime[iniD].setAttribute("datetime", D[iniD]+'-'+(valor+1)+'-'+valorA);
					ttime[iniD].setAttribute("id",'d'+D[iniD]+'m'+valor);
				//Feriados
				if(D[iniD]==1){
					ttime[iniD].style.color='red';
				}
			}
		}


		break;
		case '1':
		var D = [];	
		var M = [];
		var d=1;
		var dia=1;
		var ttime=document.querySelectorAll('time');

		var fev = new Date(Date.UTC(valorA,valor,dia,+3,0,0));
		fev.toLocaleDateString('pt-BR', dateOptions); 
		var diaF = fev.getUTCDay();
		var mesF= fev.getUTCMonth();
		valor= parseInt(valor);

		iniD=0;
		for(iniD=0;iniD<ttime.length; iniD++){

			if(iniD>=diaF && d<=dfev){
				
				D[iniD]=d;
				d++;
				ttime[iniD].textContent=D[iniD];
				ttime[iniD].setAttribute("datetime", D[iniD]+'-'+(valor+1)+'-'+valorA);
				ttime[iniD].setAttribute("id",'d'+D[iniD]+'m'+valor);

			}
		}

		break;

		case '2':
		var D = [];	
		var M = [];
		var d=1;
		var dia=1;
		var ttime=document.querySelectorAll('time');

		var mar = new Date(Date.UTC(valorA,valor,dia,+3,0,0));
		mar.toLocaleDateString('pt-BR', dateOptions); 
		var diaMar = mar.getUTCDay();
		var mesMar= mar.getUTCMonth();
		valor= parseInt(valor);

		iniD=0;

		for(iniD=0;iniD<ttime.length; iniD++){

			if(iniD>=diaMar && d<=31){

				D[iniD]=d;
				d++;
				ttime[iniD].textContent=D[iniD];
				ttime[iniD].setAttribute("datetime", D[iniD]+'-'+(valor+1)+'-'+valorA);
				ttime[iniD].setAttribute("id",'d'+D[iniD]+'m'+valor);
				//Feriado
				if(D[iniD]==8){
					ttime[iniD].style.color='red';
				}
			}
		}


		break;
		case '3':
		var D = [];	
		var M = [];
		var d=1;
		var dia=1;
		var ttime=document.querySelectorAll('time');

		var abr = new Date(Date.UTC(valorA,valor,dia,+3,0,0));
		abr.toLocaleDateString('pt-BR', dateOptions); 
		var diaAbr = abr.getUTCDay();
		var mesAbr= abr.getUTCMonth();
		valor= parseInt(valor);

		iniD=0;

		for(iniD=0;iniD<ttime.length; iniD++){

			if(iniD>=diaAbr && d<=30){
				
				D[iniD]=d;
				d++;
				ttime[iniD].textContent=D[iniD];
				ttime[iniD].setAttribute("datetime", D[iniD]+'-'+(valor+1)+'-'+valorA);
				ttime[iniD].setAttribute("id",'d'+D[iniD]+'m'+valor);
				//Feriados
				
				if(D[iniD]==21){
					ttime[iniD].style.color='red';
				}
			}
		}

		break;
		case '4':
		var D = [];	
		var M = [];
		var d=1;
		var dia=1;
		var ttime=document.querySelectorAll('time');

		var mai = new Date(Date.UTC(valorA,valor,dia,+3,0,0));
		mai.toLocaleDateString('pt-BR', dateOptions); 
		var diaMai = mai.getUTCDay();
		var mesMai= mai.getUTCMonth();
		valor= parseInt(valor);


		iniD=0;

		for(iniD=0;iniD<ttime.length; iniD++){

			if(iniD>=diaMai && d<=31){

				D[iniD]=d;
				d++;
				ttime[iniD].textContent=D[iniD];
				ttime[iniD].setAttribute("datetime", D[iniD]+'-'+(valor+1)+'-'+valorA);
				ttime[iniD].setAttribute("id",'d'+D[iniD]+'m'+valor);

			}
		}

		break;
		case '5':
		var D = [];	
		var M = [];
		var d=1;
		var dia=1;
		var ttime=document.querySelectorAll('time');

		var jun = new Date(Date.UTC(valorA,valor,dia,+3,0,0));
		jun.toLocaleDateString('pt-BR', dateOptions); 
		var diaJun = jun.getUTCDay();
		var mesJun= jun.getUTCMonth();
		valor= parseInt(valor);

		
		iniD=0;

		for(iniD=0;iniD<ttime.length; iniD++){

			if(iniD>=diaJun && d<=30){

				D[iniD]=d;
				d++;
				ttime[iniD].textContent=D[iniD];
				ttime[iniD].setAttribute("datetime", D[iniD]+'-'+(valor+1)+'-'+valorA);
				ttime[iniD].setAttribute("id",'d'+D[iniD]+'m'+valor);
				if(D[iniD]==1){
					ttime[iniD].style.color='red';
				}

			}
		}

		break;
		case '6':
		var D = [];	
		var M = [];
		var d=1;
		var dia=1;
		var ttime=document.querySelectorAll('time');

		var jul = new Date(Date.UTC(valorA,valor,dia,+3,0,0));
		jul.toLocaleDateString('pt-BR', dateOptions); 
		var diaJul = jul.getUTCDay();
		var mesJul= jul.getUTCMonth();
		valor= parseInt(valor);

		
		iniD=0;

		for(iniD=0;iniD<ttime.length; iniD++){

			if(iniD>=diaJul && d<=31){

				D[iniD]=d;
				d++;
				ttime[iniD].textContent=D[iniD];
				ttime[iniD].setAttribute("datetime", D[iniD]+'-'+(valor+1)+'-'+valorA);
				ttime[iniD].setAttribute("id",'d'+D[iniD]+'m'+valor);
				//Feriados
				if(D[iniD]==9){
					ttime[iniD].style.color='red';
				}


			}
		}

		break;
		case '7':
		var D = [];	
		var M = [];
		var d=1;
		var dia=1;
		var ttime=document.querySelectorAll('time');

		var ago = new Date(Date.UTC(valorA,valor,dia,+3,0,0));
		ago.toLocaleDateString('pt-BR', dateOptions); 
		var diaAgo = ago.getUTCDay();
		var mesAgo= ago.getUTCMonth();
		valor= parseInt(valor);

		iniD=0;

		for(iniD=0;iniD<ttime.length; iniD++){

			if(iniD>=diaAgo && d<=31){
				
				D[iniD]=d;
				d++;
				ttime[iniD].textContent=D[iniD];
				ttime[iniD].setAttribute("datetime", D[iniD]+'-'+(valor+1)+'-'+valorA);
				ttime[iniD].setAttribute("id",'d'+D[iniD]+'m'+valor);
			}
		}

		break;
		case '8':
		var D = [];	
		var M = [];
		var d=1;
		var dia=1;
		var ttime=document.querySelectorAll('time');

		var set = new Date(Date.UTC(valorA,valor,dia,+3,0,0));
		set.toLocaleDateString('pt-BR', dateOptions); 
		var diaSet = set.getUTCDay();
		var mesSet= set.getUTCMonth();
		valor= parseInt(valor);


		iniD=0;

		for(iniD=0;iniD<ttime.length; iniD++){

			if(iniD>=diaSet && d<=30){

				D[iniD]=d;
				d++;
				ttime[iniD].textContent=D[iniD];
				ttime[iniD].setAttribute("datetime", D[iniD]+'-'+(valor+1)+'-'+valorA);
				ttime[iniD].setAttribute("id",'d'+D[iniD]+'m'+valor);
				if(D[iniD]==7){
					ttime[iniD].style.color='red';
				}
			}
		}

		break;
		case '9':
		var D = [];	
		var M = [];
		var d=1;
		var dia=1;
		var ttime=document.querySelectorAll('time');

		var out = new Date(Date.UTC(valorA,valor,dia,+3,0,0));
		out.toLocaleDateString('pt-BR', dateOptions); 
		var diaOut = out.getUTCDay();
		var mesOut= out.getUTCMonth();
		valor= parseInt(valor);

		
		iniD=0;

		for(iniD=0;iniD<ttime.length; iniD++){

			if(iniD>=diaOut && d<=31){

				D[iniD]=d;
				d++;
				ttime[iniD].textContent=D[iniD];
				ttime[iniD].setAttribute("datetime", D[iniD]+'-'+(valor+1)+'-'+valorA);
				ttime[iniD].setAttribute("id",'d'+D[iniD]+'m'+valor);
				if(D[iniD]==12){
					ttime[iniD].style.color='red';
				}
			}
		}

		break;
		case '10':
		var D = [];	
		var M = [];
		var d=1;
		var dia=1;
		var ttime=document.querySelectorAll('time');

		var nov = new Date(Date.UTC(valorA,valor,dia,+3,0,0));
		nov.toLocaleDateString('pt-BR', dateOptions); 
		var diaNov = nov.getUTCDay();
		var mesNov= nov.getUTCMonth();
		valor= parseInt(valor);

		
		iniD=0;

		for(iniD=0;iniD<ttime.length; iniD++){

			if(iniD>=diaNov && d<=30){

				D[iniD]=d;
				d++;
				ttime[iniD].textContent=D[iniD];
				ttime[iniD].setAttribute("datetime", D[iniD]+'-'+(valor+1)+'-'+valorA);
				ttime[iniD].setAttribute("id",'d'+D[iniD]+'m'+valor);

				//Fwriado
				if(D[iniD]==2 || D[iniD]==15){
					ttime[iniD].style.color='red';
				}
			}
		}

		break;
		case '11':
		var D = [];	
		var M = [];
		var d=1;
		var dia=1;
		var ttime=document.querySelectorAll('time');

		var dez = new Date(Date.UTC(valorA,valor,dia,+3,0,0));
		dez.toLocaleDateString('pt-BR', dateOptions); 
		var diaDez = dez.getUTCDay();
		var mesDez= dez.getUTCMonth();
		valor= parseInt(valor);


		iniD=0;

		for(iniD=0;iniD<ttime.length; iniD++){

			if(iniD>=diaDez && d<=31){
				
				D[iniD]=d;
				d++;
				ttime[iniD].textContent=D[iniD];
				ttime[iniD].setAttribute("datetime", D[iniD]+'-'+(valor+1)+'-'+valorA);
				ttime[iniD].setAttribute("id",'d'+D[iniD]+'m'+valor);
				if(D[iniD]==25){
					ttime[iniD].style.color='red';
				}
			}
		}

		break;
	}
}		


function update() {

	let sem=document.getElementById("sem");
	sem.innerText = "";

	for (var semana=6; semana>=1; semana--) {
		var tr = document.createElement('tr');
		sem.appendChild(tr);
	for (var dS=1; dS<=7; dS++) {//Dia semana
		var td=document.createElement('td');
		tr.appendChild(td);
		time=document.createElement('time');
		inp=document.createElement('input');
		inp.setAttribute("type","hidden");
		inp.setAttribute("name","datas");
		inp.setAttribute("id","datas");
		inp.setAttribute("readonly","readonly");
		td.appendChild(time);
		td.appendChild(inp);

	}
}

anoB();
}

function seleciona() {
//Tirar a classe ao clicar em outro
//Falta colocar arquivos CSS no lugar deles
var men=document.querySelector("ul");
var tmes = document.querySelectorAll("#sem td");
for (var i = 0; i < tmes.length; i++) {
	tmes[i].addEventListener("click", function (e) {
		this.classList.toggle("celhover");
		if (this.className == "celhover") {
			men.style.display="block";
			men.style.position = 'absolute';
			men.style.marginLeft = e.clientX + 'px';
			men.style.marginTop= e.clientY + 'px';
			e.preventDefault();
			if(men.eventListener=='click'){
				men.style.display='none';
			}
		} else {
			men.style.display="none";
			men.style.position = 'absolute';
			men.style.marginLeft = e.clientX + 'px';
			men.style.marginTop = e.clientY + 'px';
		}
	})
}
}



function Add(){
	var men=document.querySelector("ul");
	var tmes = document.querySelectorAll("#sem td");
	var time=document.querySelectorAll('time');
	var modal=document.getElementById("modal_cad");
	var body=document.querySelector("body");
	var mes=document.querySelector(".mes");
	var dia_evento=document.getElementById("dia_evento");
	
	for (var i = 0; i < tmes.length; i++) {

		if (tmes[i].className == "celhover") {
			data=time[i].getAttribute("datetime");	
			var partesData = data.split("-");
			var dataa = new Date(partesData[2], partesData[1] - 1, partesData[0]);
			if(new Date() > dataa){
				alert("Não é possivel criar um evento anterior a data atual.Por favor tente novante!");	
			}else{
				body.style.background="rgba(0,0,0,0.7)";
				men.style.display="none";
				modal.style.display="block";
				modal.style.position="fixed";
				modal.style.opacity="1";
				modal.style.pointerEvents="auto";
				mes.style.background="rgba(0,0,0,0.7)";
				data=time[i].getAttribute("datetime");	
				dia_evento.value=data;
			}
		}	
	}

	var fechar = document.getElementsByClassName("fechar")[0];

	fechar.onclick = function() {
		modal.style.display = "none";
		body.style.background="white";
		mes.style.background="white";
	}

}
function Ver(){
	var tmes = document.querySelectorAll("#sem td");
	var time=document.querySelectorAll('time');
	var a=document.getElementById('datas');
	var ver=document.getElementById('ver');
	var v_e=document.getElementById("v_e");
	var object=document.querySelector("object");
	var men=document.querySelector("ul");


	for (var i = 0; i < tmes.length; i++) {

		if (tmes[i].className == "celhover") {
			data=time[i].getAttribute("datetime");	
			a.setAttribute("value",data);
			object.setAttribute("data","verEvento.php?data="+a.getAttribute('value'));



			v_e.addEventListener("click", function (e) {
				men.style.display="none";
				ver.style.display="block";
				object.style.display="block";
				e.preventDefault();
			})
		}
	}

	var fecharF=document.getElementById("fecharF");

	fecharF.onclick=function(){
		ver.style.display="none";
		object.style.display="none";
	}
	var modal=document.getElementById("modal_cad");

	if(modal.style["display"] == "block"){
		ver.style.visibility="hidden";
		object.style.visibility="hidden";
	}else{
		ver.style.visibility="block";
		object.style.visibility="block";
	}	
}

function anoB() {
	var ano=document.getElementById('ano');
	var valorA=ano.options[ano.selectedIndex].value;
		// console.log("Ano:"+valorA);	
		// console.log("Tipo:"+ typeof(valorA));

		if(valorA % 400 ==0){

		}else if(valorA % 4 == 0 && valorA % 100 != 0){
			dfev=29;
		}else{
			dfev=28;
		}
		return calculo(valorA);

	}
