const container = document.getElementById('main_container');
const num_elementos = document.getElementById('items');

const flex = document.getElementsByName('flex');
const flex_elements = document.getElementById('flex_elements');

function setGenerarCodigo(e) {
	$('#codigo').modal('show');
	let codigohtml = ' &lt;div class=main-container id=main_container>';
	const num_elementos = document.querySelectorAll('#main_container .display_block');
	for (let index = 0; index < num_elementos.length; index++) {
		codigohtml += '&lt;div class=item>' + (index + 1) + '&lt;/div&gt;';
	}
	codigohtml += ' &lt/div&gt&lt/div&gt;';
	document.querySelector('.codigo_html').innerHTML = codigohtml;

	let codigocss = '.main-container{display:' + document.querySelector('input[name="display"]:checked').value + ';' + '<br>';
	codigocss += 'flex-direction:' + document.querySelector('input[name="flex-direction"]:checked').value + ';' + '<br>';
	codigocss += 'flex-wrap:' + document.querySelector('input[name="flex-wrap"]:checked').value + ';' + '<br>';
	codigocss += 'justify-content:' + document.querySelector('input[name="justify-content"]:checked').value + ';' + '<br>';
	codigocss += 'align-items:' + document.querySelector('input[name="align-items"]:checked').value + ';' + '<br>';
	codigocss += 'align-content:' + document.querySelector('input[name="align-content"]:checked').value + ';' + '<br>';

	document.querySelector('.codigo_css').innerHTML = codigocss;
}

function resetElements(e) {
	//Reseteamos todos los elementos haciendo que no se vean
	const reset = document.querySelectorAll('.main-container .item:nth-child(-n+10)');
	for (let index = 0; index < reset.length; index++) {
		reset[index].classList.add('display_none');
		reset[index].classList.remove('display_block');
	}
	//Hacemos visible la propiedad flex
	document.getElementById('flex_elements').classList.add('flex_show');
	//Eliminamos todos los option creados
	const option = document.querySelectorAll('#flex_elements_select option');
	for (let index = 0; index < option.length; index++) {
		option[index].remove();
		$('#flex_elements_select').selectpicker('refresh');
	}
}

//Mostrar el número de elementos seleccionados
function setElementos(e) {
	if (e.target.value != '') {
		//Si no hemos seleccionado algún valor
		resetElements(e); //Reseteamos valores

		//Mostramos solo el número de elementos que hemos elegido
		const elementos = document.querySelectorAll('.main-container .item:nth-child(-n+' + e.target.value + '');
		for (let index = 0; index < elementos.length; index++) {
			elementos[index].classList.remove('display_none');
			elementos[index].classList.add('display_block');
		}

		//dibujar los elementos del modal
		const select = document.getElementById('flex_elements_select');
		for (let index = elementos.length; index > 0; index--) {
			let opt = document.createElement('option');
			let attr = document.createAttribute('value');
			attr.value = index;
			opt.setAttributeNode(attr);
			let content = document.createTextNode(index);
			opt.appendChild(content);
			select.insertAdjacentElement('afterbegin', opt);
		}
		$('#flex_elements_select').selectpicker('refresh');
	} else {
		const reset = document.querySelectorAll('.main-container .item:nth-child(-n+10)');
		for (let index = 0; index < reset.length; index++) {
			reset[index].classList.add('display_none');
			reset[index].classList.remove('display_block');
		}
		document.getElementById('flex_elements').classList.remove('flex_show');
		document.getElementById('flex_elements').classList.add('flex_hidden');
	}
}

function setDisplay(e) {
	container.classList.remove('display_inline-flex');
	container.classList.remove('display_flex');
	container.classList.add('display_' + e.target.value);
}
function setFlexDirection(e) {
	container.classList.remove('flex_direction_row');
	container.classList.remove('flex_direction_row-reverse');
	container.classList.remove('flex_direction_column');
	container.classList.remove('flex_direction_column-reverse');
	container.classList.add('flex_direction_' + e.target.value);
}

function setFlexWrap(e) {
	container.classList.remove('flex_wrap_nowrap');
	container.classList.remove('flex_wrap_wrap');
	container.classList.remove('flex_wrap_wrap-reverse');
	container.classList.add('flex_wrap_' + e.target.value);
}

function setJustifyContent(e) {
	container.classList.remove('justify_content_flex-start');
	container.classList.remove('justify_content_center');
	container.classList.remove('justify_content_space-between');
	container.classList.remove('justify_content_space-around');
	container.classList.remove('justify_content_space-evenly');
	container.classList.remove('justify_content_flex-end');
	container.classList.add('justify_content_' + e.target.value);
}

function setAlignItems(e) {
	container.classList.remove('align_items_flex-start');
	container.classList.remove('align_items_center');
	container.classList.remove('align_items_flex-end');
	container.classList.remove('align_items_stretch');
	container.classList.add('align_items_' + e.target.value);
}

function setAlignContent(e) {
	container.classList.remove('align_content_flex-start');
	container.classList.remove('align_content_center');
	container.classList.remove('align_content_flex-end');
	container.classList.remove('align_content_stretch');
	container.classList.add('align_content_' + e.target.value);
}

function setFlex(e) {
	$('#choose_items').modal('hide');
	//Borrar todas las clases de todos los elementos
	const elementos = document.querySelectorAll('#main_container .item');
	for (let index = 0; index < elementos.length; index++) {
		elementos[index].classList.remove('flex-1');
		elementos[index].classList.remove('flex-2');
		elementos[index].classList.remove('flex-3');
	}

	const selected = document.querySelectorAll('#flex_elements_select option:checked');
	const values = Array.from(selected).map((el) => el.value);

	const clase = document.querySelector('input[name="flex"]:checked').id;
	for (let index = 0; index < values.length; index++) {
		document.querySelector('.main-container .item:nth-child(' + values[index] + '').classList.add(clase);
	}
}

function setPropiedad(e) {
	switch (e.target.name) {
		case 'display':
			setDisplay(e);
			break;
		case 'flex-direction':
			setFlexDirection(e);
			break;
		case 'flex-wrap':
			setFlexWrap(e);
			break;
		case 'justify-content':
			setJustifyContent(e);
			break;
		case 'align-items':
			setAlignItems(e);
			break;
		case 'align-content':
			setAlignContent(e);
			break;

		default:
			break;
	}
}

const input = document.querySelectorAll('.form-check-input');

for (let index = 0; index < input.length; index++) {
	input[index].addEventListener('click', setPropiedad);
}

num_elementos.addEventListener('change', setElementos); //Cuando elegimos un numero de elementos
document.getElementById('elegir_elementos').addEventListener('click', setFlex);
document.getElementById('generar_codigo').addEventListener('click', setGenerarCodigo);
