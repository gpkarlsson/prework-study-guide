<<<<<<< HEAD
/*
if (topic === 'HTML') {
    console.log("Let's study HTML!");
} else if (topic === 'CSS') {
    console.log("Let's study CSS!");
} else if (topic === 'Git') {
    console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
    console.log("Let's study Javascript!");
} else {
    console.log('Please try again!');
}*/

var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

for(var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
}
=======
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for(var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study Javascript!");
    } else {
        console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();
>>>>>>> b7e221b00014197b85d53385fa08210cffb2733a
