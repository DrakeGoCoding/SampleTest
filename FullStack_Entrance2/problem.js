/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
export function removeDupFrom2Array(arr1, arr2) {
    return arr1.concat(arr2).filter(elem => !arr1.includes(elem) || !arr2.includes(elem));
}

/**
 * 
 * @param {Array} teamList 
 */
export function sortRank(teamList) {
    let newTeamList = teamList.sort((team1, team2) => team1.points === team2.points ? team1.GD - team2.GD : team2.points - team1.points);
    for (let i = 0; i < newTeamList.length; i++) {
        const team = newTeamList[i];
        team['position'] = i + 1;
    }
    return newTeamList;
}

const arr1 = [1, 2, "a"]
const arr2 = [1, 3, "b"]
console.log(removeDupFrom2Array(arr1, arr2));

const teamList = [
    {
        name: 'Arsenal',
        points: 99,
        GD: 45
    },
    {
        name: 'Chelsea',
        points: 75,
        GD: 39
    },
    {
        name: 'Manchester United',
        points: 60,
        GD: 29
    },
    {
        name: 'Liverpool',
        points: 88,
        GD: 39
    }
]
console.log(sortRank(teamList));