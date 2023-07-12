const questions = [
    {
        question: "Con vật nào dưới đây không thể bơi?",
        answers: [
            {text: "Cá", correct: false},
            {text: "Chim cánh cụt", correct: false},
            {text: "Vịt", correct: false},
            {text: "Voi", correct: true},
        ]
    },
    {
        question: "Hình thoi có mấy cạnh?",
        answers: [
            {text: "5", correct: false},
            {text: "4", correct: true},
            {text: "6", correct: false},
            {text: "10", correct: false},
        ]
    },
    {
        question: "Châu lục nào nhỏ nhất thế giới",
        answers:[
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    },
    {
        question: "Đâu là sa mạc lớn nhất thế giới?",
        answers:[
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true},
        ]
    },
    {
        question: "____ space in the bathroom was limited, the contractor managed to fit in two sinks and a shower",
        answers:[
            {text: "Both", correct: false},
            {text: "So that", correct: false},
            {text: "Whether", correct: false},
            {text: "Even though", correct: true},
        ]
    },
    {
        question: "Hiệp khí đạo là tên khác của môn võ nào?",
        answers:[
            {text: "Aikido", correct: true},
            {text: "Judo", correct: false},
            {text: "Karate", correct: false},
            {text: "Vovinam", correct: false},
        ]
    },
    {
        question: "Lễ hội khai ấn Đền Trần diễn ra ở tỉnh nào?",
        answers:[
            {text: "Ninh Bình", correct: false},
            {text: "Bắc Ninh", correct: false},
            {text: "Nam Định", correct: true},
            {text: "Thái Bình", correct: false},
        ]
    },
    {
        question: "Đất nước hình lục lăng là tên gọi khác của quốc gia nào?",
        answers:[
            {text: "Anh", correct: false},
            {text: "Ý", correct: false},
            {text: "Pháp", correct: true},
            {text: "Đức", correct: false},
        ]
    },
    {
        question: "Đàn cổ cầm có mấy dây?",
        answers:[
            {text: "4", correct: false},
            {text: "5", correct: false},
            {text: "6", correct: false},
            {text: "7", correct: true},
        ]
    },
    {
        question: "Sông nào ngăn cách thời kỳ Đàng Trong và Đàng Ngoài?",
        answers:[
            {text: "Sông Gâm", correct: false},
            {text: "Sông Tranh", correct: false},
            {text: "Sông Gianh", correct: true},
            {text: "Sông Thu Bồn", correct: false},
        ]
    },
    {
        question: "Ngân có đồng ý làm vợ tương lai của Lộc khum :> ?",
        answers:[
            {text: "Đồng ý", correct: true},
            {text: "Em đồng ý", correct: true},
            {text: "Dạ", correct: true},
            {text: "Em muốn lắm", correct: true},
        ]
    }

    


];

const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let  currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answersButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answersButtons.firstChild){
        answersButtons.removeChild(answersButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score ++;

    }else{
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answersButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";


}

function showScore(){
    resetState();
    questionElement.innerHTML = `
        Bạn đã đạt được ${score} / ${questions.length} điểm!
    `;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();

    }
});

startQuiz();


