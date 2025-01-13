const questionDisplay = document.querySelector("#questions");
const answerDisplay = document.querySelector("#answer");

const questions = [
    {
        id: 0,
        text: "Pick a vacation destination",
        answers: [
            {
                text: "New York",
                image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt: "Photo of the Empire State building during daytime",
                credit: "Oliver Niblett"
            },
            {
                text: "Austin",
                image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt: "Time-lapse photography car lights on bridge",
                credit: "Carlos Alfonso",
            },
            {
                text: "Portland",
                image: "https://images.unsplash.com/photo-1541457523724-95f54f7740cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                alt: "High-rise buildings",
                credit: "Elena Kuchko"
            },
            {
                text: "New Orleans",
                image: "https://images.unsplash.com/photo-1549965738-e1aaf1168943?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt: "Road with people and house",
                credit: "João Francisco"
            }
        ]
    },
    {
        id: 1,
        text: "Pick some food:",
        answers: [
            {
                text: "Pizza",
                image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt: "Pepperoni Pizza",
                credit: "Alan Hardman"
            },
            {
                text: "Sandwich",
                image: "https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt: "Ham Sandwich on white surface",
                credit: "Eaters Collective"
            },
            {
                text: "Pasta",
                image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt: "Pasta in Tomato Sauce",
                credit: "Mgg Vitchakorn"
            },
            {
                text: "Hamburger",
                image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt: "Hamburger",
                credit: "sk"
            }
        ]
    },
    {
        id: 2,
        text: "Pick a home",
        answers: [
            {
                text: "Traditional",
                image: "https://images.unsplash.com/photo-1555040479-c949debe66c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt: "Focus photography of building windows",
                credit: "Burgess Milner"
            },
            {
                text: "Modern",
                image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt: "Low angle view of building",
                credit: "Brandon Giggs"
            },
            {
                text: "House",
                image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt: "Trees beside white house",
                credit: "Phil Hearing"
            },
            {
                text: "Mountains",
                image: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt: "Brown wooden cabin infront of forest",
                credit: "eulauretta"
            }
        ]
    }
];

const possibleAnswerCombos = [
    {
        combination: ["New York", "Pizza", "Traditional"],
        text: "Blue Cheese",
        image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&w=400&h=400&fit=fillmax",
        alt: "Blue cheese"
    },
    {
        combination: ["Austin", "Pasta", "Modern"],
        text: "Cheddar",
        image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Cheddar cheese"
    },
    {
        combination: ["Portland", "Sandwich", "Mountains"],
        text: "Feta",
        image: "https://images.unsplash.com/photo-1626957341926-98752fc2ba90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Feta cheese"
    },
    {
        combination: ["New Orleans", "Hamburger", "House"],
        text: "Halloumi",
        image: "https://images.unsplash.com/photo-1505281036624-fac2862357b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        alt: "Halloumi"
    }
];

// @desc: we need to have a default answer to compensate for the lack of combination data

const unansweredQuestions = [];
const chosenAnswers = [];




const showAnswer = () => {

    let result;
    possibleAnswerCombos.forEach((answerCombo) => {
        if (
            chosenAnswers.includes(answerCombo.combination[0]) +
            chosenAnswers.includes(answerCombo.combination[1]) + chosenAnswers.includes(answerCombo.combination[2])
        ) {
            result = answerCombo;
            return;

        } else if (!result) {
            // @desc: first "answerCombo" object is default
            result = possibleAnswerCombos[0];
        }
    });

    console.log(result);

    const resultBlock = document.createElement("DIV");
    resultBlock.classList.add("result-block");

    const resultText = document.createElement("H3");
    resultText.textContent = result.text;

    const resultImage = document.createElement("IMG");
    resultImage.setAttribute("src", result.image);
    resultImage.setAttribute("alt", result.alt);

    resultBlock.append(resultText, resultImage);
    answerDisplay.append(resultBlock);

    const allAnswerBlocks = document.querySelectorAll(".answer-block");
    Array.from(allAnswerBlocks).forEach((answerBlock) => {
        return answerBlock.replaceWith(answerBlock.cloneNode(true));
    });


}

const disableQuestionBlock = (questionID, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionID + "-questions");

    Array.from(currentQuestionBlock.children).forEach((block) => {
        if (block.children.item(1).innerText != chosenAnswer) {
            block.style.opacity = "50%";
        }
    })
}


const handleClick = (questionID, chosenAnswer) => {

    // @desc: originally "unansweredQuestions" array will have all the questions and "chosenAnswers" array will be empty
    // @desc: we then remove those questions from the "unansweredQuestions" that have been answered and push their answers to the "chosenAnswers" array
    if (unansweredQuestions.includes(questionID)) {
        chosenAnswers.push(chosenAnswer);
        const itemToRemove = unansweredQuestions.indexOf(questionID);

        if (itemToRemove > -1) {
            unansweredQuestions.splice(itemToRemove, 1);
        }

        console.log(chosenAnswers);
        console.log(unansweredQuestions);

        // @desc: scroll to the first of the yet unanswered questions block
        disableQuestionBlock(questionID, chosenAnswer);
        const lowestQuestionID = Math.min(...unansweredQuestions);
        location.href = "#" + lowestQuestionID;

    }

    // @desc: if all the questions are answered, scroll to answer div
    if (!unansweredQuestions.length) {
        location.href = '#answer';
        showAnswer();
    }

}

const populateQuestions = () => {
    questions.forEach((question) => {

        // @desc: questions div block
        const titleBlock = document.createElement("DIV");
        titleBlock.id = question.id;
        titleBlock.classList.add("title-block");

        // @desc: question title text
        const titleHeading = document.createElement("H2");
        titleHeading.textContent = question.text;
        titleBlock.append(titleHeading);

        questionDisplay.append(titleBlock);


        // @desc: answers div block
        const answersBlock = document.createElement("DIV");
        answersBlock.id = question.id + "-questions";
        answersBlock.classList.add("answer-options");


        unansweredQuestions.push(question.id);




        // @desc: for each answer we have, a div containing:
        // an image, a h3 and a couple of links
        question.answers.forEach((answer) => {
            const answerBlock = document.createElement("DIV");
            answerBlock.classList.add("answer-block");

            answerBlock.addEventListener("click", () => handleClick(question.id, answer.text));

            const answerImage = document.createElement("IMG");
            answerImage.setAttribute("src", answer.image);
            answerImage.setAttribute("alt", answer.alt);

            const answerTitle = document.createElement("H3");
            answerTitle.textContent = answer.text;

            const answerInfo = document.createElement("P");
            const imageLink = document.createElement("A");
            imageLink.setAttribute("href", answer.image);
            imageLink.textContent = answer.credit;

            const sourceLink = document.createElement("A");
            sourceLink.textContent = "Unsplash";
            sourceLink.setAttribute("src", "https://www.unsplash.com");

            answerInfo.append(imageLink, " to ", sourceLink);

            answerBlock.append(answerImage, answerTitle, answerInfo);
            answersBlock.append(answerBlock);
        });
        questionDisplay.append(answersBlock);

    });
}

populateQuestions();