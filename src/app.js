//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(name, age, team, trophy) {
  return [
    name,age,team,trophy
  ];
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
function createFormation(n) {
  const formation = {
    defender: undefined,
    midfield: undefined,
    forward: undefined
  };

  if (n.length >= 1) {
    formation.defender = n[0];
  }

  if (n.length >= 2) {
    formation.midfield = n[1];
  }

  if (n.length === 3) {
    formation.forward = n[2];
  }

  return n.length > 0 ? formation : null;
}
//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  return players.filter(player => player.debut === year);
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  return players.filter(player => player.position === position);
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(award) {
  return players.filter(player =>
    player.awards.some(playerAward => playerAward.name === award)
  );
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(award, t) {
  return players.filter(player =>
    player.awards.filter(playerAward => playerAward.name === award).length === t
  );
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(award, country) {
  return filterByAward(award).filter(player => player.country === country);
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noaward, team, age) {
  return players.filter(
    player =>
      player.age < age &&
      player.team === team &&
      player.awards.length >= noaward
  );
}
//Progression 9 - Sort players in descending order of their age
function AgeSorter() {
  return [...players].sort((a, b) => b.age - a.age);
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function filterByTeamnamexNoofAwards(team) {
  const teamMembers = players.filter(player => player.team === team);

  return [...teamMembers].sort((a, b) => b.awards.length - a.awards.length);
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function filterByAwardsxNOofAwardsxName(award, no, country) {
  const numberAward = filterByAwardxTimes(award, no);
  const nameCountry = numberAward.filter(player => player.country === country);

  return [...nameCountry].sort((a, b) => a.name.localeCompare(b.name));
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function filterByNamexAgeOlder(age) {
  const olderPlayers = players.filter(player => player.age > age);

  olderPlayers.sort((a, b) => b.awards[0].year - a.awards[0].year);

  return [...olderPlayers];
}