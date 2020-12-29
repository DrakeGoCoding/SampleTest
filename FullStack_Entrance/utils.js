/**
 * 
 * @param {Number} num 
 */
export function romanNumberConverter(num){
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

/**
 * 
 * @param {Array} householdList 
 */
export function householdsElectricityChecking(householdList){
    return householdList.filter(household => household.eNum > 100);
}