(
	function($)
	{  
		$.fn.buscoloquemesaledelospeones = function (idInput) 
		{
			var tabla = '#' + $(this).attr('id');
			var item = 'tr:not([id="titulo"])';
			var cssSelector = tabla + ' ' + item;
			
			$('#' + idInput).keyup(function() {
				var filtro = $(this).val();
				$(cssSelector).hide();
				$(cssSelector + ':Contains("' + filtro + '")').show();			
			});
			
			jQuery.expr[':'].Contains = function(a, i, m){
				return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase())>=0;
			};
		}
	}
)(jQuery);
