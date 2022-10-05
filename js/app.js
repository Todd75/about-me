'use strict';


let userName = prompt('What is your name?');
/*while (userName === ''){
  userName = prompt('What is your name? Please type a response.');
}*/
// console.log(userName);
document.write('Goodbye, ' + userName + ' have a wonderful day and thanks for visiting.');
alert('Hi there, ' + userName + ' welcome to my website. Have a wonderful day and thanks for visiting.');

// function likeDogs(){
let likeDogs = prompt('Do you think I like dogs?').toLowerCase();
/*while (likeDogs !== 'no' && likeDogs !== 'n' && likeDogs !== 'yes' && likeDogs !== 'y'){
  likeDogs = prompt('I do not understand. Please reply with a yes or no ' + userName + '.').toLowerCase();}*/
// console.log(likeDogs);
if (likeDogs === 'yes' || likeDogs === 'y')
{ /*console.log('That is correct I do like dogs.');*/
  alert('That is correct I do like dogs ' + userName + '.');
}
if (likeDogs === 'no' || likeDogs === 'n')
{ /*console.log('That is correct. I do not like dogs ... I LOVE them.');*/
  alert('That is correct ' + userName + '. I do not like dogs ... I LOVE them.');
}
// }

// likeDogs();

/*function militaryService(){*/
let service = prompt('Did I serve in the US military?').toLowerCase();
/*while (service !== 'no' && service !== 'n' && service !== 'yes' && service !== 'y'){ 
  service = prompt('Please reply with a yes or a no ' + userName + '. Thanks!').toLowerCase();}*/
// console.log(service);
if (service === 'yes' || service === 'y'){
  /*console.log('That is correct I served in the US Army at Fort Bragg in North Carolina.');*/
  alert('That is correct ' + userName + ' I served in the US Army at Fort Bragg in North Carolina.');
}
if (service === 'no' || service === 'n'){
  /*console.log('That is incorrect I served at Fort Bragg in the US Army.');*/
  alert('That is incorrect ' + userName + ' I served at Fort Bragg in the US Army.');
}
//}

// militaryService ();

// function home(){
let homeTown = prompt('Do you think I am from Chicago?').toUpperCase();
/*while (homeTown !== 'NO' && homeTown !== 'N' && homeTown !== 'YES' && homeTown !== 'Y'){
  homeTown = prompt('Please answer with a yes or a no... Thank you!').toUpperCase();}*/
// console.log(homeTown);
if (homeTown === 'YES' || homeTown === 'Y'){
  /*console.log('That is correct I am from Chicago.');*/
  alert(userName + ', you were right I am from Chicago');
}
if (homeTown === 'NO' || homeTown === 'N'){
  /*console.log('Sorry, that is incorrect I am from Chicago.');*/
  alert('Sorry, that is incorrect I am from Chicago ' + userName + '.');
}
// }

// home();

// function bacon(){
let loveBacon = prompt('Do you think bacon is one of my favorite foods ' + userName + '?').toUpperCase();
/*while (loveBacon !== 'YES' && loveBacon !== 'Y' && loveBacon !== 'NO' && loveBacon !== 'N'){
  loveBacon = prompt('I am sorry ' + userName + ' but please respond with a yes or no.').toUpperCase();}*/
// console.log(loveBacon);
if (loveBacon === 'YES' || loveBacon === 'Y'){
  /*console.log('That is correct ' + userName + ' almost everybody loves bacon.');*/
  alert('That is correct ' + userName + ' almost everybody loves bacon.');}
if (loveBacon === 'NO' || loveBacon === 'N'){
  /*console.log('What!? That is incorrect ' + userName + ' I definately love bacon.');*/
  alert('What!? That is incorrect ' + userName + ' I definately love bacon.');}
// }

// bacon();

// function games(){
let videoGames = prompt('Do you think I play video games ' + userName + '?').toLowerCase();
/*while (videoGames !== 'yes' && videoGames !== 'y' && videoGames !== 'no' && videoGames !== 'n'){
    videoGames = prompt('I am sorry ' + userName + ', but please respond with a yes or a no.').toLowerCase();}*/
// console.log(videoGames);
if (videoGames === 'yes' || videoGames === 'y'){
  /*console.log('That is correct ' + userName + ' I got my first Nintendo in 1985.');*/
  alert('That is correct ' + userName + ' I got my first Nintendo in 1985.');}
if (videoGames === 'no' || videoGames === 'n'){
  /*console.log('That is incorrect ' + userName + ' I have been playing video games for over thirty years.');*/
  alert('That is incorrect ' + userName + ' I have been playing video games for over thirty years.');}
// }

// games();
