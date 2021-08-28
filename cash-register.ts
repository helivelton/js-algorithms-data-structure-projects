{
  const strToValue = (str) => {
    const values = {
      'ONE HUNDRED': 100.0,
      'TWENTY': 20.0,
      'TEN': 10.0,
      'FIVE': 5.0,
      'ONE': 1.0,
      'QUARTER': 0.25,
      'DIME': 0.1,
      'NICKEL': 0.05,
      'PENNY': 0.01
    }

    return values[str];
  }

  const checkCashRegister = (price, cash, cid) => {
    const cidBkp = cid.map(elem => {
      return [...elem];
    });
    cid.reverse();

    let changeDue = cash - price;
    let changeArray = [];

    cid.forEach(element => {
      const billValue = strToValue(element[0]);

      if(changeDue >= billValue) {
        let cnt = 0;
        while(element[1] > 0 && changeDue >= billValue) {
          element[1] -= billValue;
          changeDue = changeDue - billValue;
          changeDue = +changeDue.toFixed(2);
          cnt += billValue;
          
        }
        
        if(cnt > 0) {
          changeArray.push([
            element[0],
            +cnt.toFixed(2)
          ])
        }

      }
    });

    if (changeDue > 0) {
      return {status: 'INSUFFICIENT_FUNDS', change: []};
    }

    const usedAllCash = cid.every(element => {
      return element[1].toFixed(2) == 0;
    });
    if (usedAllCash) {

      return {status: 'CLOSED', change: cidBkp};
    }

    return {status: 'OPEN', change: changeArray};
  }

  const result = checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]);

  console.log(result);
}
