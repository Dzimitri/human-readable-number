module.exports = function toReadable (number) {
  let digit = ['',
  				'one',
  				'two',
  				'three',
  				'four',
  				'five',
  				'six',
  				'seven',
  				'eight',
  				'nine',
  				'ten',
  				'eleven',
  				'twelve',
  				'thirteen',
  				'fourteen',
  				'fifteen',
  				'sixteen',
  				'seventeen',
  				'eighteen',
  				'nineteen'];
  	let decimal = [ '',
  					'',
  					'twenty',
  					'thirty',
  					'forty',
  					'fifty',
  					'sixty',
  					'seventy',
  					'eighty',
  					'ninety',];
  	let answer;
  	let first_num = number%100;
  	let second_num = number%10;

  	
  	if (number < 20) {
  		answer = digit[number];
  	} 
    
    else if (number > 19 && number < 100){
    	answer = decimal[Math.trunc(number/10)] + ((number%10!=0)?" " + digit[number%10]:"");
    }
	else if (number>99){
		answer = digit[Math.trunc(number/100)] + " hundred" + ((first_num < 20)?((first_num == 0)?"":" " + digit[number%100]):((second_num == 0)?" " + decimal[Math.trunc(first_num/10)]:" " + decimal[Math.trunc(first_num/10)] + " " + digit[second_num]));
	}
	return answer;
}
