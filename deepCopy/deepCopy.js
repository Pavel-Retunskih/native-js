// 1. Simple object
let man = {
  name: "John",
  age: 28,
};

let manFullCopy = { ...man }; //  your code
man.name = "Mark";
console.log("manFullCopy ", manFullCopy);
console.log("man ", man);

// 2. Array of primitives
let numbers = [1, 2, 3];

let numbersFullCopy = [...numbers]; //  your code
numbers[0] = 3;
console.log("numbers ", numbers);
console.log("numbersFullCopy ", numbersFullCopy);

// 3. Object inside an object
let man1 = {
  name: "John",
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
  },
};

let man1FullCopy = { ...man1, mother: { ...man1.mother } }; // your code
man1FullCopy.mother.name = "Maria";
console.log("man1FullCopy ", man1FullCopy);
console.log("man1 ", man1);

// 4. Array of primitives inside an object
let man2 = {
  name: "John",
  age: 28,
  friends: ["Peter", "Steven", "William"],
};

let man2FullCopy = { ...man2, friends: [...man2.friends] }; // your code
man2FullCopy.friends[0] = "John";
console.log("man2 ", man2);
console.log("man2FullCopy ", man2FullCopy);

// 5 Array of objects
let people = [
  { name: "Peter", age: 30 },
  { name: "Steven", age: 32 },
  { name: "William", age: 28 },
];

let peopleFullCopy = people.map((item) => ({ ...item })); // your code
peopleFullCopy[0].name = "Mark";
peopleFullCopy[1].name = "Sergei";
peopleFullCopy[2].name = "Igor";
console.log("peopleFullCopy ", peopleFullCopy);
console.log("people ", people);

// 6 Array of objects inside object
let man3 = {
  name: "John",
  age: 28,
  friends: [
    { name: "Peter", age: 30 },
    { name: "Steven", age: 32 },
    { name: "William", age: 28 },
  ],
};

let man3FullCopy = {
  ...man3,
  friends: man3.friends.map((item) => ({ ...item })),
}; //  your code
man3FullCopy.friends[0].name = "Mark";
man3FullCopy.friends[1].name = "Igor";
man3FullCopy.friends[2].name = "Victor";
console.log("man3FullCopy ", man3FullCopy);
console.log("man3 ", man3);

// 7 Object inside an object, inside an object
let man4 = {
  name: "John",
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15,
    },
  },
};

let man4FullCopy = {
  ...man4,
  mother: { ...man4.mother, work: { ...man4.mother.work } },
}; //  your code

man4FullCopy.mother.work.position = "student";
man4FullCopy.mother.work.experience = 3;
man4FullCopy.mother.name = "Maria";
man4FullCopy.mother.age = 32;
console.log("man4FullCopy ", man4FullCopy);
console.log("man4 ", man4);

// 8 Array of objects inside object -> object
let man5 = {
  name: "John",
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15,
    },
    parents: [
      { name: "Kevin", age: 80 },
      { name: "Jennifer", age: 78 },
    ],
  },
};

let man5FullCopy = {
  ...man5,
  mother: {
    ...man5.mother,
    work: { ...man5.mother.work },
    parents: man5.mother.parents.map((parent) => ({ ...parent })),
  },
}; //  your code
man5FullCopy.mother.work.position = "student";
man5FullCopy.mother.work.experience = 2;
man5FullCopy.mother.name = "Maria";
man5FullCopy.mother.age = 32;
man5FullCopy.mother.parents[0].name = "Max";
man5FullCopy.mother.parents[1].name = "Victor";
console.log("man5FullCopy ", man5FullCopy);
console.log("man5 ", man5);

// 9 Object inside an object -> array -> object ->  object
let man6 = {
  name: "John",
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15,
    },
    parents: [
      {
        name: "Kevin",
        age: 80,
        favoriteDish: {
          title: "borscht",
        },
      },
      {
        name: "Jennifer",
        age: 78,
        favoriteDish: {
          title: "sushi",
        },
      },
    ],
  },
};

let man6FullCopy = {
  ...man6,
  mother: {
    ...man6.mother,
    work: { ...man6.mother.work },
    parents: man6.mother.parents.map((parent) => ({
      ...parent,
      favoriteDish: { ...parent.favoriteDish },
    })),
  },
}; //  your code
man6FullCopy.mother.work.position = "student";
man6FullCopy.mother.work.experience = 2;
man6FullCopy.mother.name = "Maria";
man6FullCopy.mother.age = 32;
man6FullCopy.mother.parents[0].name = "Max";
man6FullCopy.mother.parents[0].age = 31;
man6FullCopy.mother.parents[0].favoriteDish.title = "okroshka";
man6FullCopy.mother.parents[1].name = "Victor";
man6FullCopy.mother.parents[1].age = 22;
man6FullCopy.mother.parents[1].favoriteDish.title = "shaslik";
console.log("man6FullCopy ", man6FullCopy);
console.log("man6 ", man6);
//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
  name: "John",
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15,
    },
    parents: [
      {
        name: "Kevin",
        age: 80,
        favoriteDish: {
          title: "borscht",
          ingredients: [
            { title: "beet", amount: 3 },
            { title: "potatoes", amount: 5 },
            { title: "carrot", amount: 1 },
          ],
        },
      },
      {
        name: "Jennifer",
        age: 78,
        favoriteDish: {
          title: "sushi",
          ingredients: [
            { title: "fish", amount: 1 },
            { title: "rise", amount: 0.5 },
          ],
        },
      },
    ],
  },
};

let man7FullCopy = {
  ...man7,
  mother: {
    ...man7.mother,
    work: { ...man7.mother.work },
    parents: man7.mother.parents.map((parent) => ({
      ...parent,
      favoriteDish: {
        ...parent.favoriteDish,
        ingredients: parent.favoriteDish.ingredients.map((ingredient) => ({
          ...ingredient,
        })),
      },
    })),
  },
}; //  your code
man7FullCopy.mother.work.position = "student";
man7FullCopy.mother.work.experience = 2;
man7FullCopy.mother.name = "Maria";
man7FullCopy.mother.age = 32;
man7FullCopy.mother.parents[0].name = "Max";
man7FullCopy.mother.parents[0].age = 31;
man7FullCopy.mother.parents[0].favoriteDish.title = "okroshka";
man7FullCopy.mother.parents[0].favoriteDish.ingredients[0].title = "her";
man7FullCopy.mother.parents[1].name = "Victor";
man7FullCopy.mother.parents[1].age = 22;
man7FullCopy.mother.parents[1].favoriteDish.title = "shaslik";
console.log("man7FullCopy ", man7FullCopy);
console.log("man7 ", man7);
