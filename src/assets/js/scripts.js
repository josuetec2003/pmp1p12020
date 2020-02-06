var $ = require('jquery');
var os = require('os');

var pk = 1;

$('#btn-guardar').on('click', function () {
	
	var nombre = $('#nombre');
	var apellido = $('#apellido');
	var fecha = $('#fecha-nacimiento');

	if (nombre.val() === '')
	{
		nombre.focus();
		return;
	}

	if (apellido.val() === '')
	{
		apellido.focus();
		return;
	}

	if (fecha.val() === '')
	{
		fecha.focus();
		return;
	}


	var tr = `
		<tr id="fila-${pk}">
			<td>${nombre.val()}</td>
			<td>${apellido.val()}</td>
			<td>${fecha.val()}</td>
			<td> <a class="a-eliminar" data-pk="${pk}" href="#"><span class="icon icon-trash"></span></a></td>
		</tr>
	`;

	$('#table-data').append(tr)
	nombre.val('')
	apellido.val('')
	fecha.val('')

	pk++;
})

$(document).on('click', '.a-eliminar', function (e) {
	e.preventDefault();

	if (!confirm('Confirme la acción')) return false;

	var id = $(this).data('pk')

	$('#fila-' + id).fadeOut(function () {
		$(this).remove();
	})

})
















