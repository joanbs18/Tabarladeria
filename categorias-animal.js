$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.categoria_lista .categoria_item[category="todo"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.categoria_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.categoria_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.producto').css('transform', 'scale(0)');
		function hideProduct(){
			$('.producto').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.producto[category="'+catProduct+'"]').show();
			$('.producto[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.categoria_item[category="todo"]').click(function(){
		function showAll(){
			$('.producto').show();
			$('.producto').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});

let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.container-productos .producto').forEach(producto =>{
  producto.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = producto.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});