$('form.ajax').on('submit',function(){

	var that = $(this),
		url = that.attr('action'),
		method = that.attr('method'),
		data = {};

	that.find('[name]').each(function(index, input_field){
		var that = $(this),
			name = that.attr('name'),
			value = that.val();
		data[value] = value;
	});

	$.ajax({
		url: url,
		type: method,
		data: data,
		success: function(response){
			console.log(response);
		}
	});

	return false;
});