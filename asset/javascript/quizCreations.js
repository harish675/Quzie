console.log("script is loading.........");

let questionCount = 1;
                
function addQuestion() {
        const questionsDiv = document.getElementById('questions');
        const newQuestionDiv = document.createElement('div');
        newQuestionDiv.classList.add('question');

        newQuestionDiv.innerHTML = `
        <label for="questionText${questionCount}">Question text:</label>
        <input type="text" id="questionText${questionCount}" name="questions[${questionCount}][text]" required>
        <br>
        <label for="options${questionCount}">Options (comma-separated):</label>
        <input type="text" id="options${questionCount}" name="questions[${questionCount}][options]" required>
        <br>
        <label for="correctAnswer${questionCount}">Correct Answer Index:</label>
        <input type="text" id="correctAnswer${questionCount}" name="questions[${questionCount}][rightAnswer]" required>
        `;

        questionsDiv.appendChild(newQuestionDiv);
        questionCount++;
} 
function toggleContent() {
        const originalContent = document.getElementById('originalContent');
        const questionsDiv = document.getElementById('questions');
        originalContent.style.display = 'none'; // Hide original content
        questionsDiv.style.display = 'block'; // Show dynamically added questions
}

   //fetch quiz data and display titles
   fetch('/api/quiz/get-quiz')
   .then(response => response.json())
   .then(data => {
           const quizListDiv = document.getElementById('quizList');
           data.quizzes.forEach(quiz => {
                   const quizTitleDiv = document.createElement('div');
                   quizTitleDiv.innerHTML = `<p>${quiz.title}</p><button onclick="startQuiz('${quiz._id}')">Solve</button>`;
                   quizListDiv.appendChild(quizTitleDiv);
           });
   })
   .catch(err => console.error('Error fetching quizzes', err));

   function startQuiz(quizId) {
       window.location.href = `/solve/${quizId}`;
   }