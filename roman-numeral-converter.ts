const converter = (srcNumber) => {
  let romanNumeral = '';
  
  while(srcNumber >= 1000) {
    romanNumeral+= 'M';
    srcNumber-= 1000;
  }

  while(srcNumber >= 500) {
    romanNumeral+= 'D';
    srcNumber-= 500;
  }

  while(srcNumber >= 100) {
    romanNumeral+= 'C';
    srcNumber-= 100;
  }

  while(srcNumber >= 50) {
    romanNumeral+= 'L';
    srcNumber-= 50;
  }

  while(srcNumber >= 10) {
    romanNumeral+= 'X';
    srcNumber-= 10;
  }

  while(srcNumber >= 5) {
    romanNumeral+= 'V';
    srcNumber-= 5;
  }

  while(srcNumber >= 1) {
    romanNumeral+= 'I';
    srcNumber-= 1;
  }

  romanNumeral = romanNumeral.replace('CCCC', 'CD');
  romanNumeral = romanNumeral.replace('XXXX', 'XL');
  romanNumeral = romanNumeral.replace('IIII', 'IV');

  romanNumeral = romanNumeral.replace('DCD', 'CM');
  romanNumeral = romanNumeral.replace('LXL', 'XC');
  romanNumeral = romanNumeral.replace('VIV', 'IX');

  return romanNumeral;
}

const result = converter(3999);
console.log(result);
