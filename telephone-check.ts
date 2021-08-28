{
  const telephoneCheck = (str) => {
    const regexValidations = [
      /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/,
      /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
      /^[0-9]{3}[0-9]{3}[0-9]{4}$/,
      /^1\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/,
      /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/,
      /^[0-9]{3} [0-9]{3} [0-9]{4}$/,
      /^1 [0-9]{3} [0-9]{3} [0-9]{4}$/,
      /^1 [0-9]{3}-[0-9]{3}-[0-9]{4}$/,
      /^1 \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/
    ];

    return regexValidations.some(validation => {
      return str.match(validation) !== null;
    });
  }
  
  console.log(telephoneCheck("1 555-555-5555"));
  console.log(telephoneCheck("1 (555) 555-5555"));
}