function number(num) {
	switch(num){
		case 1:
		case 2:
		case 3:
		case 4:
			return "low";
			break;
		case 5:
		case 6:
		case 7:
			return "average";
			break;
		case 8:
		case 9:
		case 10:
			return "high";
			break;
		default :
		return "Out of range";
	}
	
}

console.log(number(4));
