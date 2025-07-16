    const questions = [
      {
        text: "أي صورة تمثل التفاحة؟",
        image: "https://i.imgur.com/BQ7Zz6A.png", // صورة فيها تفاحة
        answers: ["🍌", "🍎", "🍇"],
        correct: "🍎"
      },
      {
        text: "ما هو الرقم التالي: 2, 4, 6, ...؟",
        image: "https://i.imgur.com/DyXAGMN.png", // صورة أرقام
        answers: ["7", "8", "9"],
        correct: "8"
      }
    ];

    let current = 0, score = 0, playerName = "", timer, timeLeft = 15;

    function startQuiz() {
      playerName = document.getElementById("nameInput").value.trim();
      if (playerName === "") {
        alert("من فضلك أدخل اسمك أولاً");
        return;
      }

      document.getElementById("start").style.display = "none";
      document.getElementById("quiz").style.display = "block";
      showQuestion();
    }

    function showQuestion() {
      clearInterval(timer);
      timeLeft = 15;
      document.getElementById("timer").textContent = `⏱️ ${timeLeft}`;

      timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = `⏱️ ${timeLeft}`;
        if (timeLeft === 0) {
          clearInterval(timer);
          checkAnswer(null); // وقت انتهى
        }
      }, 1000);

      const q = questions[current];
      document.getElementById("question").textContent = q.text;
      document.getElementById("questionImage").src = q.image;

      const answersDiv = document.getElementById("answers");
      answersDiv.innerHTML = "";

      q.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(answer);
        answersDiv.appendChild(btn);
      });
    }

    function checkAnswer(answer) {
      clearInterval(timer);
      if (answer === questions[current].correct) {
        score++;
        alert("✅ إجابة صحيحة!");
      } else {
        alert("❌ الإجابة خاطئة أو انتهى الوقت");
      }

      current++;
      if (current < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    }

    function showResult() {
      document.getElementById("quiz").style.display = "none";
      document.getElementById("result").style.display = "block";
      document.getElementById("result").innerHTML = `
        <h2>🎉 أحسنت يا ${playerName}!</h2>
        <p>نتيجتك: ${score} من ${questions.length}</p>
      `;
    }