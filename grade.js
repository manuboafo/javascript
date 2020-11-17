var gradeLetter =["A","B","C","D","E","F"];
function grade(score){
	 if (score >=80 && score <= 100){
	 	return gradeLetter[0]
	 	} 
	 else if(score >= 70 && score < 80){
	 	return gradeLetter[1];
	 	}
	 else if (score >= 60 && score < 70){
	 	return gradeLetter[2];
	 	}
	 else if(score >= 50 && score < 60){
	 	return gradeLetter[3];
	 	}
	 else if(score >= 40 && score < 50){
	 	return gradeLetter[4];
	 	}
	 else if(score >=0 && score < 40){
	 	return gradeLetter[5];
	 }
	 else {
	 	return "out of range";
	 }
	}
	
console.log(grade(30));
