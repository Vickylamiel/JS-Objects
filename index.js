// Question 1

/**
 * create an instagramPost object
 * properties: handle of author, content, an image link, number of views, number of likes
 * using constructor method create an object
 */

const instagramPost = new Object();
instagramPost.handleOfAuthor = 'Lamiel';
instagramPost.content = 'Travelblog';
instagramPost.imageLink = 'www.lamiel.com';
instagramPost.numberOfViews = 100;
instagramPost.numberOfLikes = 200;

console.log(instagramPost);
 // {handleOfAuthor: 'Lamiel', content: 'Travelblog', imageLink: 'www.lamiel.com', numberOfViews: 100, numberOfLikes: 200}

// Question 2

function IgPost(handleOfAuthor, content, imageLink, number0fViews, numberOfLikes) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.number0fViews = number0fViews;
    this.numberOfLikes = numberOfLikes;
}

const post1 = new IgPost('Mike', 'Makeup Videos', 'www.mike.com', 300, 200);
console.log(post1);
 // {handleOfAuthor: 'Mike', content: 'Makeup Videos', imageLink: 'www.mike.com', numberOfViews: 300, numberOfLikes: 200}

const post2 = new IgPost('Chi', 'Cooking Videos', 'www.chi.com', 400, 500);
console.log(post2);
 // {handleOfAuthor: 'Chi', content: 'Cooking Videos', imageLink: 'www.chi.com', numberOfViews: 400, numberOfLikes: 500}

// Question 3

/**
 * Using factory method implement a function
 * properties: name, age, location
 * ENG - 70, GOVT - 85, LIT - 82, CRK - 94
 */


function createJambScores(ENG, GOVT, LIT, CRK) {
    this.ENG = ENG;
    this.GOVT = GOVT;
    this.LIT = LIT;
    this.CRK = CRK;

    return ({ENG, GOVT, LIT, CRK})
}

const score = createJambScores(70, 85, 82, 94);
console.log(score);
// {ENG: 70, GOVT: 85, LIT: 82, CRK: 94}



function createPerson(name, age, location, scores) {
    this.name = name;
    this.age = age;
    this.location = location;

    this.scores = scores;
    return ({name, age, location, scores})
}

const student = createPerson('Musa Dawodu', 19, 'Lekki', score);
console.log(student);
/**
 * {
 *    name: 'Musa Dawodu',
 *    age: 19,
 *    location: 'Lekki',
 *    scores: {ENG: 70, GOVT: 85, LIT: 82, CRK: 94}
 * }
 */

// Question 4

// Different ways to clone an Object

// Option 1
/**
 * Object.assign(): This method creates a shallow copy of an object by copying the enumerable properties of the source objects to a target object. It returns the target object after copying all the properties
 * e.g
 */
const firstPerson = {
    firstName: 'Jane',
    age: 18,
}

const secondPerson = Object.assign({}, firstPerson);
secondPerson.age = 20;
console.log(secondPerson);
//{firstName: 'Jane', age: 20}

/**
 * Option 2
 * Spread Operator: This method also creates a shallow copy of an object, similar to Object.assign(). However, it is a more concise way to achieve the same result.
 * e.g
 */
const thirdPerson = {...firstPerson};
thirdPerson.age = 30;
console.log(thirdPerson);
// {firstName: 'Jane', age: 30}

/**
 * Option 3
 * JSON.parse() and JSON.stringify(): This method creates a deep copy of an object, including properties that are objects themselves.
 * e.g
 */
const fourthPerson = JSON.parse(JSON.stringify(firstPerson));
fourthPerson.age = 35;
console.log(fourthPerson);
// {firstName: 'Jane', age: 35}

// Qestion 4

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar'
}

for (const key in presidentialCandidates) {
        console.log(`${presidentialCandidates[key]} is the presidential candidate of ${key}`)
}
/**
 * Omoyele Sowore is the presidential candidate of AAC
 * Christopher Imumolen is the presidential candidate of ACCORD
 * Bola Ahmed Tinubu is the presidential candidate of APC
 * Peter Obi is the presidential candidate of LP
 * Rabiu Kwankwaso is the presidential candidate of NNPP
 * Atiku Abubakar is the presidential candidate of PDP
 *  */