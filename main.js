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
      },
      {
        text: "أي صورة تمثل القطة؟",
        image: "https://img.pikbest.com/png-images/20240902/cute-cat-cartoon-images-free-download_10784154.png!w700wp", // صورة فيها قطة
        correct: "🐱",
        answers: ["🐶", "🐱", "🐰"],
      },
      {
        text: "ما هو لون السماء؟",
        image: "https://img.pikbest.com/backgrounds/20190407/cartoon-blue-sky-poster-background-image_1808776.jpg!sw800", // صورة سماء
        answers: ["أزرق", "أخضر", "أحمر"],
        correct: "أزرق"
      },
      {
        text: "أي صورة تمثل السيارة؟",
        image: "https://media.istockphoto.com/id/1303481342/vector/red-car-mascot-cartoon-isolated-on-white-bachground.jpg?s=612x612&w=0&k=20&c=918xI8VDhx1YQofBibvCpHua-rOY0fBuRS76dOuSrmQ=", // صورة فيها سيارة
        answers: ["🚗", "🚕", "🚙"],
        correct: "🚗"
      },
      {
        text: "ما هو الحيوان الذي ينبح؟",
        image: "https://img.pikbest.com/png-images/20240902/cute-dog-cartoon-images-free-download_10784155.png!w700wp", // صورة فيها كلب
        answers: ["🐱", "🐶", "🐰"],
        correct: "🐶"
      },
      {
        text: "أي صورة تمثل الكرة؟",
        image: "https://img.pikbest.com/png-images/20240902/cute-ball-cartoon-images-free-download_10784156.png!w700wp", // صورة فيها كرة
        answers: ["⚽", "🏀", "🎾"],
        correct: "⚽"
      },
      {
        text: "ما هو لون التفاح؟",
        image: "https://img.pikbest.com/png-images/20240902/cute-apple-cartoon-images-free-download_10784157.png!w700wp", // صورة تفاح
        answers: ["أحمر", "أصفر", "أخضر"],
        correct: "أحمر"
      },
      {
        text: "أي صورة تمثل السمكة؟",
        image: "https://img.pikbest.com/png-images/20240902/cute-fish-cartoon-images-free-download_10784158.png!w700wp", // صورة فيها سمكة
        answers: ["🐠", "🐟", "🐡"],
        correct: "🐠"
      },
      {
        text: "ما هو الرقم الذي يأتي بعد 10؟",
        image: "https://i.imgur.com/DyXAGMN.png", // صورة أرقام
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