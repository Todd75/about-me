'use strict';

let correctAnswers = 0;
let userName = prompt('What is your name?');
while (userName === ''){
  userName = prompt('What is your name? Please type a response.');
}
// console.log(userName);
alert('Hi there, ' + userName + ' welcome to my website. Have a wonderful day and thanks for visiting.');


let likeDogs = prompt('Do you think I like dogs?').toLowerCase();
while (likeDogs !== 'no' && likeDogs !== 'n' && likeDogs !== 'yes' && likeDogs !== 'y'){
  likeDogs = prompt('I do not understand. Please reply with a yes or no ' + userName + '.').toLowerCase();}
//console.log(likeDogs);
if (likeDogs === 'yes' || likeDogs === 'y')
{ //console.log('That is correct I do like dogs.');
  alert('That is correct I do like dogs ' + userName + '.');
  correctAnswers++;
}
if (likeDogs === 'no' || likeDogs === 'n')
{ //console.log('That is correct. I do not like dogs ... I LOVE them.');
  alert('That is correct ' + userName + '. I do not like dogs ... I LOVE them.');
}

let service = prompt('Did I serve in the US military?').toLowerCase();
while (service !== 'no' && service !== 'n' && service !== 'yes' && service !== 'y'){ 
  service = prompt('Please reply with a yes or a no ' + userName + '. Thanks!').toLowerCase();}
// console.log(service);
if (service === 'yes' || service === 'y'){
  console.log('That is correct I served in the US Army at Fort Bragg in North Carolina.');
  alert('That is correct ' + userName + ' I served in the US Army at Fort Bragg in North Carolina.');
  correctAnswers++;
}
if (service === 'no' || service === 'n'){
  console.log('That is incorrect I served at Fort Bragg in the US Army.');
  alert('That is incorrect ' + userName + ' I served at Fort Bragg in the US Army.');
}

let homeTown = prompt('Do you think I am from Illinois?').toUpperCase();
while (homeTown !== 'NO' && homeTown !== 'N' && homeTown !== 'YES' && homeTown !== 'Y'){
  homeTown = prompt('Please answer with a yes or a no... Thank you!').toUpperCase();
}
// console.log(homeTown);
if (homeTown === 'YES' || homeTown === 'Y'){
  console.log('That is correct I am from Illinois.');
  alert(userName + ', you were right I am from Illinois');
  correctAnswers++;
}
if (homeTown === 'NO' || homeTown === 'N'){
  console.log('Sorry, that is incorrect I am from Illinois.');
  alert('Sorry, that is incorrect I am from Illinois ' + userName + '.');
}

let loveBacon = prompt('Do you think bacon is one of my favorite foods ' + userName + '?').toUpperCase();
while (loveBacon !== 'YES' && loveBacon !== 'Y' && loveBacon !== 'NO' && loveBacon !== 'N'){
  loveBacon = prompt('I am sorry ' + userName + ' but please respond with a yes or no.').toUpperCase();}
console.log(loveBacon);
if (loveBacon === 'YES' || loveBacon === 'Y'){
  console.log('That is correct ' + userName + ' almost everybody loves bacon.');
  alert('That is correct ' + userName + ' almost everybody loves bacon.');
  correctAnswers++;
}
if (loveBacon === 'NO' || loveBacon === 'N'){
  console.log('What!? That is incorrect ' + userName + ' I definately love bacon.');
  alert('What!? That is incorrect ' + userName + ' I definately love bacon.');
}

let videoGames = prompt('Do you think I play video games ' + userName + '?').toLowerCase();
while (videoGames !== 'yes' && videoGames !== 'y' && videoGames !== 'no' && videoGames !== 'n'){
  videoGames = prompt('I am sorry ' + userName + ', but please respond with a yes or a no.').toLowerCase();
}
console.log(videoGames);
if (videoGames === 'yes' || videoGames === 'y'){
  console.log('That is correct ' + userName + ' I got my first Nintendo in 1985.');
  alert('That is correct ' + userName + ' I got my first Nintendo in 1985.');
  correctAnswers++;
}
if (videoGames === 'no' || videoGames === 'n'){
  console.log('That is incorrect ' + userName + ' I have been playing video games for over thirty years.');
  alert('That is incorrect ' + userName + ' I have been playing video games for over thirty years.');
}


//Question 6

let magicNumber = 4;

let userAttempt = 4;

let correct = false;

petGuess: while (userAttempt){
  let userGuess = prompt('Guess how many pets I have?');
  userAttempt--;
  if (parseInt(userGuess) > magicNumber) {
    //console.log(`Whoah, that is alot of pets. I am sorry ${userName} try guessing a smaller number. You have ${userAttempt} tries left.`);
    alert(`Whoah, that is alot of pets. I am sorry ${userName} try guessing a smaller number. You have ${userAttempt} tries left.`);
  }
  if (parseInt(userGuess) < magicNumber) {
    //console.log(`That guess is a little low. How about you guess a larger number ${userName}. You have ${userAttempt} attempts left.`);
    alert(`That guess is a little low. How about you guess a larger number ${userName}. You have ${userAttempt} attempts left.`);
  }
  if (parseInt(userGuess) === magicNumber) {
    correct = true;
  }
  if (correct) {
    //console.log(`That is correct ${userName} I have 3 cats and 1 dog.`);
    alert(`That is correct ${userName} I have 3 cats and 1 dog.`);
    correctAnswers++;
    break petGuess;
  }
  if (userAttempt === 0 && parseInt(userGuess) !== magicNumber) {
    //console.log(`I am sorry you did not guess that I have four pets ${userName} better luck next time.`);
    alert(`I am sorry you did not guess that I have four pets ${userName} better luck next time.`);
  }
}
// Question 7

let cities = ['chicago', 'denver', 'dallas', 'boston', 'laramie', 'fort collins'];

let totalUserGuesses = 6;

correct = false;

cityGuess: while (totalUserGuesses) {
  let userCityGuess = prompt('Guess a city in the United States I have lived in.').toLowerCase();
  totalUserGuesses--;
  for (let j = 0; j < cities.length; j++) {
    if (userCityGuess === cities[j]) {
      correct = true;
    }
    if (correct) {
      alert(`That is correct ${userName} your stalker skills have improved by +1.`);
      correctAnswers++;
      break cityGuess;
    }
  }
  alert(`That is incorrect ${userName} you have ${totalUserGuesses} guesses left.`);
}
if (! totalUserGuesses) {
  alert(`Looks like you ran out of guesses ${userName} these are the correct answers ${cities}`);
}
// How Well You Did ---------------------------------------------------------------------------------------

alert(`${userName} you got ${correctAnswers} questions out of 7 correct. I hope you enjoyed getting to know me better.`);
