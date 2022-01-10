// Iteration 1: Names and Input

let hacker1 = "Driver";
let hacker2 = "Navigator";

console.log(hacker1);
console.log(hacker2);

// Iteration 2: Conditionals

let length1 = hacker1.length;
let length2 = hacker2.length;

if (length1 > length2) {
    console.log(`The driver has the longest name, it has ${length1} characters.`);
} else if (length1 === length2) {
    console.log(`Wow, you both have equally long names, ${length1} characters!`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${length2} characters.`);
}


// Iteration 3: Loops

let hacker1Space = '';
for (let i = 0; i < hacker1.length; i++) {
        hacker1Space += hacker1.charAt(i) + ' ';
}

// 3.1
console.log(hacker1Space.toUpperCase());

// 3.2
console.log(hacker2.split("").reverse().join(""));

// 3.3
if (hacker1 < hacker2) {
        console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
        console.log("Yo, the navigator goes first definitely.");
} else {
        console.log("What?! You both have the same name?");
}

// Bonus 1
let para1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magnam iste nesciunt perspiciatis temporibus tempore optio delectus vero sapiente? Necessitatibus, hic delectus ut temporibus distinctio ducimus facilis fuga dolor consectetur. Voluptas ea, at temporibus nulla, atque sit deserunt doloribus cupiditate fugit, ipsum recusandae praesentium? Ad.";

let para2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae optio cupiditate facilis eos tempora perspiciatis eius molestias nemo autem est perferendis quae odit aperiam officia ut, quisquam aliquam reiciendis enim ducimus architecto nisi. Et porro ea consectetur debitis repellendus corrupti dolorum rem perferendis, culpa fugiat!";

let para3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem quia necessitatibus odit laudantium repellendus facilis a alias ipsam architecto nulla officia sunt autem nemo perspiciatis id accusantium doloremque ipsa at, fuga ab. Iste ducimus quam natus quo sit id. Recusandae nostrum corrupti soluta deleniti?";

// Count words
let wordCount = para1.split(" ").length;
console.log(wordCount);

// numTimes 'et'
let etTimes = para2.match(/et/g);
console.log(etTimes.length);

// Bonus 2
let phraseToCheck = "taco cat";
let phrase1 = [];
let phrase2 = [];
let check = false;

for (let i = 0; i < phraseToCheck.length / 2 - 1; i++) {
        phrase1.push(phraseToCheck[i]);
}
for (let j = phraseToCheck.length - 1; j > phraseToCheck.length / 2; j--) {
        phrase2.push(phraseToCheck[j]);
}

for (let k = 0; k < phrase1.length; k++) {
        if (phrase1[k] === phrase2[k]) {
                check = true;
        } else {
                check = false;
        }
}

if (check) {
        console.log("This is a Palindrome");
} else {
        console.log("This is not a Palindrome");
}
