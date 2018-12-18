function caluculte(op){
	var val1 = document.getElementById('val1').value;
	var val2 = document.getElementById('val2').value;

	var ans = perform(op, val1, val2);

	console.log('ans: ' + ans);

	var display = document.getElementById('ans');

	display.innerHTML = '';

	display.innerHTML = '<p> Answer: ' + ans + '</p>';
}

function perform(op, val1, val2){

	if ((val1 == 0 && val2 == 0) || (val1.length == 0 && val2.length == 0)) {
		console.log('Invalid div input');
		return '';
	}

	val1 = validate(val1);
	val2 = validate(val2);

	var ans;

	if(op == 'add'){
		ans = parseInt(val1) + parseInt(val2);
	} else if(op == 'sub'){
		ans = parseInt(val1) - parseInt(val2);
	} else if(op == 'mul'){
		ans = parseInt(val1) * parseInt(val2);
	} else if(op == 'div'){
	 	ans = parseInt(val1) / parseInt(val2);
	} else {
		ans = 'This operation is not implemented';
	}

	return ans;
	
}

function validate(val){

	if(val == null || val == undefined || isNaN(val) || val.length == 0) {
		console.log("Invalid input: " + val);
		return 0;
	} 
	return val;

}

