/**
 * 
 * @param {Number} num 
 */
function romanNumberConverter(num){
    const romanTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let roman = '';
    for (const i in romanTable){
        while (num >= romanTable[i]){
            roman += i;
            num -= romanTable[i];
        }
    }
    return roman;
}

console.log(romanNumberConverter(1234));

/**
 * 
 * @param {Array} householdList 
 */
function householdsElectricityChecking(householdList){
    return householdList.filter(household => household.eNum > 100);
}

const householdList = [
    {
        addressNum: '1',
        eNum: '90'
    },
    {
        addressNum: '2',
        eNum: '100'
    },
    {
        addressNum: '3',
        eNum: '105'
    },
    {
        addressNum: '4',
        eNum: '120'
    },
    {
        addressNum: '5',
        eNum: '95'
    },
]

console.log(householdsElectricityChecking(householdList));