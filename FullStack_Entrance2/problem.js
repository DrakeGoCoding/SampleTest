/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
export function removeDupFrom2Array(arr1, arr2) {
    let arr = [];
    arr1.forEach(elem => {
        if (!arr2.includes(elem)) arr.push(elem)
    })
    arr2.forEach(elem => {
        if (!arr1.includes(elem)) arr.push(elem);
    })
    return arr;
}

/**
 * 
 * @param {Array} teamList 
 */
export function sortRank(teamList) {
    let newTeamList = teamList.sort(function(team1, team2){
        if (team1.points === team2.points) return team1.GD - team2.GD;
        return team2.points - team1.points;
    })
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