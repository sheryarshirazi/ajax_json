$('#add').on('submit',function(){
	var that = $(this),
		contents = that.serialize();

	$.ajax({
		url: 'add.php',
		dataType: 'json',
		type: 'POST',
		data: contents,
		success:function(data){
			console.log(data);
			if (data.success){
				alert(data.result);
			}
		}
	});
	return false;
});