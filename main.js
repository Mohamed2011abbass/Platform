    const questions = [
      {
        text: "أي صورة تمثل التفاحة؟",
        image: "Apple.png", // صورة فيها تفاحة
        answers: ["🍌", "🍎", "🍇"],
        correct: "🍎"
      },
      {
        text: "ما هو الرقم التالي: 2, 4, 6, ...؟",
        image: "8.png", // صورة أرقام
        answers: ["7", "8", "9"],
        correct: "8"
      },
      {
        text: "أي صورة تمثل القطة؟",
        image: "Cat.png", // صورة فيها قطة
        correct: "🐱",
        answers: ["🐶", "🐱", "🐰"],
      },
      {
        text: "ما هو لون السماء؟",
        image: "Sky.jpg", // صورة سماء
        answers: ["أزرق", "أخضر", "أحمر"],
        correct: "أزرق"
      },
      {
        text: "أي صورة تمثل السيارة؟",
        image: "Car.jpg", // صورة فيها سيارة
        answers: ["🚗", "🚕", "🚙"],
        correct: "🚗"
      },
      {
        text: "ما هو الحيوان الذي ينبح؟",
        image: "dog.jpg", // صورة فيها كلب
        answers: ["🐱", "🐶", "🐰"],
        correct: "🐶"
      },
      {
        text: "أي صورة تمثل الكرة؟",
        image: "ball.png", // صورة فيها كرة
        answers: ["⚽", "🏀", "🎾"],
        correct: "⚽"
      },
      {
        text: "ما هو لون التفاح؟",
        image: "Apple.png", // صورة تفاح
        answers: ["أحمر", "أصفر", "أخضر"],
        correct: "أحمر"
      },
      {
        text: "أي صورة تمثل السمكة؟",
        image: "fish.webp", // صورة فيها سمكة
        answers: ["🐠", "🐟", "🐡"],
        correct: "🐠"
      },
      {
        text: "ما هو الرقم الذي يأتي بعد 10؟",
        image: "11.avif", // صورة أرقام
        answers: ["11", "12", "13"],
        correct: "11"
      }
    ];
    const question = [
    ]
      questions.sort(() => Math.random() - 0.5); 

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