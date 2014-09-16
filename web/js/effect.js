// <!--

;(function($) {

	$.fn.effect = function(options)
	{ 
    	return this.each(function(){
			
    			var element = $(this);
    		
				if( element.data('effect') )
				{
					//Object already assigned, palce for re-init code
				}
				else
				{
					var obj = jQuery.extend( {}, new effectImpl(), options );
					element.data('effect', obj);
				
					obj.init(element);
				}
			});
	}
	
	var effectImpl = function()
	{
		this.oldButtonNumber = '1';
		this.newButtonNumber = '1';
		this.element = null;
		/**************************/
		
		this.init = function(element)
		{
				var _this = this;
				
				_this.element = element;
				
				/* inicializamos el menu */
				$('#contentFrame #content').css('display','none');
				$('#contentFrame #title').css('display','none');
				var counterTitles = 1;
				$('#contentFrame #title').each(function(){
					if(counterTitles == 1)
					{
						$(this).css('display','block');
					}
					counterTitles++;
				});
				var counterContents = 1;
				$('#contentFrame #content').each(function(){
					if(counterContents == 1)
						$(this).css('display','block');
					counterContents++;
				});
				
				
				
				_this.element.find('.moveable').click(function(){
				
				
						_this.setButtonNumber($(this).attr('id'));
						
						//cambiamos el boton seleccionado
						var oldSelected = _this.element.find('.selected')
						oldSelected.attr('class','moveable');
						$(this).attr('class','selected');
						
						//buscamos el titulo visible
						var counter = 1;
						$('#contentFrame #title').each(function(){
							
							if(counter == _this.oldButtonNumber)
							{
								_this.oldButtonNumber = _this.newButtonNumber;
								$(this).flip({
									direction:'lr',
									color: '#9092C5',
									onAnimation: function(){
										//buscamos el titulo nuevo y borramos el anterior
										$('#contentFrame #content').css('display','none');
										$('#contentFrame #title').css('display','none');
										
										var contentCounter = 1;
										$('#contentFrame #content').each(function(){
											if(contentCounter == _this.newButtonNumber)
											{
												_this.oldButtonNumber = _this.newButtonNumber;
												$(this).css('display','block');
											}
											contentCounter++;
										});
										
										var titleCounter = 1;
										$('#contentFrame #title').each(function(){
											if(titleCounter == _this.newButtonNumber)
											{
												$(this).css('display','block');
											}
											titleCounter++;
										});
									}
								});
							}
						
							counter++;
						
						
						});
						
						
				})
				
		}
		
		this.setButtonNumber = function(buttonID)
		{
			var _this = this;
			
			_this.newButtonNumber = buttonID;
		}
		
		
	}


	

})(jQuery);
// -->
