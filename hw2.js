const person = {
    name: "David",
    city: "London",
    age: 30,
};

// for...in 사용
for (let key in person) {
    if (typeof person[key] === "string") {
        person[key] = person[key] + " (확인됨)";
    }
}

console.log(person);

const words = ["apple", "banana", "cherry", "fig", "grape", "melon"];
const filteredWords = [];

// for...of 사용
for (let word of words) {
    if (word.length >= 5) {
        filteredWords.push(word);
    }
}

console.log(filteredWords);
