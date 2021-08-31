{
  const converter = (srcNumber) => {
    let romanNumeral = '';
    
    const romanAlgarisms = [
      {letter: 'M', value: 1000},
      {letter: 'D', value: 500},
      {letter: 'C', value: 100},
      {letter: 'L', value: 50},
      {letter: 'X', value: 10},
      {letter: 'V', value: 5},
      {letter: 'I', value: 1}
    ];

    romanAlgarisms.forEach(algarism => {
      while(srcNumber >= algarism.value) {
        romanNumeral+= algarism.letter;
        srcNumber-= algarism.value;
      }
    });

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
}
