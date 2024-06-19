function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount={ };
	for(let i=0;i<str.length;i++){
		if(charCount[i]){
			charCount[i]++;
		}else{
			charCount=1;
		}
	}
	for(let i=0;i<str.length;i++){
		if(charCount[i]===1){
			return i;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
