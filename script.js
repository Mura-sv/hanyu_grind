document.addEventListener('DOMContentLoaded', () => {

    // --- FULL HSK 1 DATABASES (Shortened for brevity) ---
    const hsk1_vocab = [ { hanzi: "爱", pinyin: "ài", english: "love" }, { hanzi: "八", pinyin: "bā", english: "eight" }, { hanzi: "爸爸", pinyin: "bàba", english: "father" }, { hanzi: "杯子", pinyin: "bēizi", english: "cup" }, { hanzi: "北京", pinyin: "Běijīng", english: "beijing" }, { hanzi: "本", pinyin: "běn", english: "measure word" }, { hanzi: "不客气", pinyin: "bú kèqi", english: "you're welcome" }, { hanzi: "不", pinyin: "bù", english: "not" }, { hanzi: "菜", pinyin: "cài", english: "dish" }, { hanzi: "茶", pinyin: "chá", english: "tea" }, { hanzi: "吃", pinyin: "chī", english: "eat" }, { hanzi: "出租车", pinyin: "chūzūchē", english: "taxi" }, { hanzi: "打电话", pinyin: "dǎ diànhuà", english: "make a phone call" }, { hanzi: "大", pinyin: "dà", english: "big" }, { hanzi: "的", pinyin: "de", english: "possessive particle" }, { hanzi: "点", pinyin: "diǎn", english: "o'clock" }, { hanzi: "电脑", pinyin: "diànnǎo", english: "computer" }, { hanzi: "电视", pinyin: "diànshì", english: "television" }, { hanzi: "电影", pinyin: "diànyǐng", english: "movie" }, { hanzi: "东西", pinyin: "dōngxi", english: "thing" }, { hanzi: "都", pinyin: "dōu", english: "all" }, { hanzi: "读", pinyin: "dú", english: "read" }, { hanzi: "对不起", pinyin: "duìbuqǐ", english: "sorry" }, { hanzi: "多", pinyin: "duō", english: "many" }, { hanzi: "多少", pinyin: "duōshao", english: "how many" }, { hanzi: "儿子", pinyin: "érzi", english: "son" }, { hanzi: "二", pinyin: "èr", english: "two" }, { hanzi: "饭店", pinyin: "fàndiàn", english: "restaurant" }, { hanzi: "飞机", pinyin: "fēijī", english: "airplane" }, { hanzi: "分钟", pinyin: "fēnzhōng", english: "minute" }, { hanzi: "高兴", pinyin: "gāoxìng", english: "happy" }, { hanzi: "个", pinyin: "gè", english: "measure word" }, { hanzi: "工作", pinyin: "gōngzuò", english: "work" }, { hanzi: "狗", pinyin: "gǒu", english: "dog" }, { hanzi: "汉语", pinyin: "Hànyǔ", english: "chinese language" }, { hanzi: "好", pinyin: "hǎo", english: "good" }, { hanzi: "喝", pinyin: "hē", english: "drink" }, { hanzi: "和", pinyin: "hé", english: "and" }, { hanzi: "很", pinyin: "hěn", english: "very" }, { hanzi: "后面", pinyin: "hòumiàn", english: "behind" }, { hanzi: "回", pinyin: "huí", english: "return" }, { hanzi: "会", pinyin: "huì", english: "can" }, { hanzi: "几", pinyin: "jǐ", english: "how many" }, { hanzi: "家", pinyin: "jiā", english: "home" }, { hanzi: "叫", pinyin: "jiào", english: "call" }, { hanzi: "今天", pinyin: "jīntiān", english: "today" }, { hanzi: "九", pinyin: "jiǔ", english: "nine" }, { hanzi: "开", pinyin: "kāi", english: "open" }, { hanzi: "看", pinyin: "kàn", english: "see" }, { hanzi: "看见", pinyin: "kànjiàn", english: "see" }, { hanzi: "块", pinyin: "kuài", english: "measure word for money" }, { hanzi: "来", pinyin: "lái", english: "come" }, { hanzi: "老师", pinyin: "lǎoshī", english: "teacher" }, { hanzi: "了", pinyin: "le", english: "particle" }, { hanzi: "冷", pinyin: "lěng", english: "cold" }, { hanzi: "里", pinyin: "lǐ", english: "inside" }, { hanzi: "六", pinyin: "liù", english: "six" }, { hanzi: "妈妈", pinyin: "māma", english: "mother" }, { hanzi: "吗", pinyin: "ma", english: "question particle" }, { hanzi: "买", pinyin: "mǎi", english: "buy" }, { hanzi: "猫", pinyin: "māo", english: "cat" }, { hanzi: "没关系", pinyin: "méi guānxi", english: "it's ok" }, { hanzi: "没有", pinyin: "méiyǒu", english: "not have" }, { hanzi: "米饭", pinyin: "mǐfàn", english: "rice" }, { hanzi: "明天", pinyin: "míngtiān", english: "tomorrow" }, { hanzi: "名字", pinyin: "míngzi", english: "name" }, { hanzi: "哪", pinyin: "nǎ", english: "which" }, { hanzi: "那", pinyin: "nà", english: "that" }, { hanzi: "呢", pinyin: "ne", english: "question particle" }, { hanzi: "能", pinyin: "néng", english: "can" }, { hanzi: "你", pinyin: "nǐ", english: "you" }, { hanzi: "年", pinyin: "nián", english: "year" }, { hanzi: "女儿", pinyin: "nǚ'ér", english: "daughter" }, { hanzi: "朋友", pinyin: "péngyou", english: "friend" }, { hanzi: "漂亮", pinyin: "piàoliang", english: "beautiful" }, { hanzi: "苹果", pinyin: "píngguǒ", english: "apple" }, { hanzi: "七", pinyin: "qī", english: "seven" }, { hanzi: "钱", pinyin: "qián", english: "money" }, { hanzi: "前面", pinyin: "qiánmiàn", english: "front" }, { hanzi: "请", pinyin: "qǐng", english: "please" }, { hanzi: "去", pinyin: "qù", english: "go" }, { hanzi: "热", pinyin: "rè", english: "hot" }, { hanzi: "人", pinyin: "rén", english: "person" }, { hanzi: "认识", pinyin: "rènshi", english: "know" }, { hanzi: "三", pinyin: "sān", english: "three" }, { hanzi: "商店", pinyin: "shāngdiàn", english: "store" }, { hanzi: "上", pinyin: "shàng", english: "up" }, { hanzi: "上午", pinyin: "shàngwǔ", english: "morning" }, { hanzi: "少", pinyin: "shǎo", english: "few" }, { hanzi: "谁", pinyin: "shéi", english: "who" }, { hanzi: "什么", pinyin: "shénme", english: "what" }, { hanzi: "十", pinyin: "shí", english: "ten" }, { hanzi: "时候", pinyin: "shíhou", english: "time" }, { hanzi: "是", pinyin: "shì", english: "to be" }, { hanzi: "书", pinyin: "shū", english: "book" }, { hanzi: "水", pinyin: "shuǐ", english: "water" }, { hanzi: "水果", pinyin: "shuǐguǒ", english: "fruit" }, { hanzi: "睡觉", pinyin: "shuìjiào", english: "sleep" }, { hanzi: "说", pinyin: "shuō", english: "speak" }, { hanzi: "四", pinyin: "sì", english: "four" }, { hanzi: "岁", pinyin: "suì", english: "year old" }, { hanzi: "他", pinyin: "tā", english: "he" }, { hanzi: "她", pinyin: "tā", english: "she" }, { hanzi: "太", pinyin: "tài", english: "too" }, { hanzi: "天气", pinyin: "tiānqì", english: "weather" }, { hanzi: "听", pinyin: "tīng", english: "listen" }, { hanzi: "同学", pinyin: "tóngxué", english: "classmate" }, { hanzi: "喂", pinyin: "wèi", english: "hello on phone" }, { hanzi: "我", pinyin: "wǒ", english: "i" }, { hanzi: "我们", pinyin: "wǒmen", english: "we" }, { hanzi: "五", pinyin: "wǔ", english: "five" }, { hanzi: "喜欢", pinyin: "xǐhuan", english: "like" }, { hanzi: "下", pinyin: "xià", english: "down" }, { hanzi: "下午", pinyin: "xiàwǔ", english: "afternoon" }, { hanzi: "下雨", pinyin: "xià yǔ", english: "rain" }, { hanzi: "先生", pinyin: "xiānsheng", english: "mr" }, { hanzi: "现在", pinyin: "xiànzài", english: "now" }, { hanzi: "想", pinyin: "xiǎng", english: "want" }, { hanzi: "小", pinyin: "xiǎo", english: "small" }, { hanzi: "小姐", pinyin: "xiǎojie", english: "miss" }, { hanzi: "些", pinyin: "xiē", english: "some" }, { hanzi: "写", pinyin: "xiě", english: "write" }, { hanzi: "谢谢", pinyin: "xièxie", english: "thanks" }, { hanzi: "星期", pinyin: "xīngqī", english: "week" }, { hanzi: "学生", pinyin: "xuésheng", english: "student" }, { hanzi: "学习", pinyin: "xuéxí", english: "study" }, { hanzi: "学校", pinyin: "xuéxiào", english: "school" }, { hanzi: "一", pinyin: "yī", english: "one" }, { hanzi: "衣服", pinyin: "yīfu", english: "clothes" }, { hanzi: "医生", pinyin: "yīshēng", english: "doctor" }, { hanzi: "医院", pinyin: "yīyuàn", english: "hospital" }, { hanzi: "椅子", pinyin: "yǐzi", english: "chair" }, { hanzi: "有", pinyin: "yǒu", english: "have" }, { hanzi: "月", pinyin: "yuè", english: "month" }, { hanzi: "再见", pinyin: "zàijiàn", english: "goodbye" }, { hanzi: "在", pinyin: "zài", english: "at" }, { hanzi: "怎么", pinyin: "zěnme", english: "how" }, { hanzi: "怎么样", pinyin: "zěnmeyàng", english: "how about it" }, { hanzi: "这", pinyin: "zhè", english: "this" }, { hanzi: "中国", pinyin: "Zhongguó", english: "china" }, { hanzi: "中午", pinyin: "zhōngwǔ", english: "noon" }, { hanzi: "住", pinyin: "zhù", english: "live" }, { hanzi: "桌子", pinyin: "zhuōzi", english: "table" }, { hanzi: "字", pinyin: "zì", english: "character" }, { hanzi: "昨天", pinyin: "zuótiān", english: "yesterday" }, { hanzi: "坐", pinyin: "zuò", english: "sit" }, { hanzi: "做", pinyin: "zuò", english: "do" } ];
    const hsk1_grammar = [ { structure: "Subj. + 是 + Obj.", pinyin: "shì", english: "to be (a is b)" }, { structure: "Subj. + 很 + Adj.", pinyin: "hěn", english: "to be (very)" }, { structure: "... + 吗？", pinyin: "ma", english: "question particle for yes/no" }, { structure: "Subj. + 叫 + Name", pinyin: "jiào", english: "to be called" }, { structure: "Subj. + 在 + Place", pinyin: "zài", english: "to be at a location" }, { structure: "Subj. + 有 + Obj.", pinyin: "yǒu", english: "to have" }, { structure: "Subj. + 会 + Verb", pinyin: "huì", english: "can / know how to" }, { structure: "Subj. + 能 + Verb", pinyin: "néng", english: "can / to be able to" }, { structure: "Subj. + 想 + Verb", pinyin: "xiǎng", english: "to want to do something" }, { structure: "太 + Adj. + 了", pinyin: "tài le", english: "too ..." } ];
    
    function removeToneMarks(pinyin) { const toneMap = {'ā':'a','á':'a','ǎ':'a','à':'a','ē':'e','é':'e','ě':'e','è':'e','ī':'i','í':'i','ǐ':'i','ì':'i','ō':'o','ó':'o','ǒ':'o','ò':'o','ū':'u','ú':'u','ǔ':'u','ù':'u','ǖ':'v','ǘ':'v','ǚ':'v','ǜ':'v'}; return pinyin.replace(/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/g, char => toneMap[char]); }

    const screens = { start: document.getElementById('start-screen'), settings: document.getElementById('settings-screen'), map: document.getElementById('map-screen'), game: document.getElementById('game-screen'), score: document.getElementById('score-screen') };
    const buttons = { start: document.getElementById('start-btn'), settings: document.getElementById('settings-btn'), map: document.getElementById('map-btn'), mapBack: document.getElementById('map-back-btn'), settingsBack: document.getElementById('settings-back-btn'), submit: document.getElementById('submit-btn'), playAgain: document.getElementById('play-again-btn'), stopGame: document.getElementById('stop-game-btn') };
    const settingsElements = { numQuestions: document.getElementById('num-questions'), includeHanzi: document.getElementById('include-hanzi'), includePinyin: document.getElementById('include-pinyin'), includeGrammar: document.getElementById('include-grammar'), timerDifficulty: document.getElementById('timer-difficulty') };
    const gameElements = { question: document.getElementById('question'), questionTypeLabel: document.getElementById('question-type-label'), answerInput: document.getElementById('answer-input'), feedback: document.getElementById('feedback'), timer: document.getElementById('timer'), progressBar: document.getElementById('progress-bar'), appContainer: document.querySelector('.app-container') };
    const scoreElements = { totalScore: document.getElementById('total-score'), finalScore: document.getElementById('final-score'), totalQuestionsSummary: document.getElementById('total-questions-summary'), resultsContainer: document.getElementById('results-container') };
    const mapElements = { progressBar: document.getElementById('map-progress-bar'), score: document.getElementById('map-score') };

    let totalScore = 0; let currentScore = 0; let currentQuestionIndex = 0;
    let gameQuestions = []; let gameResults = []; let timerInterval;
    let isWaitingForContinue = false; 
    let settings = { numQuestions: 10, practiceTypes: ['hanzi', 'pinyin', 'grammar'], timerDuration: 8 };
    const timerDifficulties = { easy: 11, medium: 8, difficult: 5 };
    const numberMap = { '一': '1', '二': '2', '三': '3', '四': '4', '五': '5', '六': '6', '七': '7', '八': '8', '九': '9', '十': '10' };
    
    const savedScore = localStorage.getItem('hanziHeroTotalScore');
    if (savedScore !== null) { totalScore = parseInt(savedScore, 10); }

    function cleanupGame() {
        clearInterval(timerInterval);
        isWaitingForContinue = false;
        buttons.submit.textContent = 'Submit';
        gameElements.answerInput.disabled = false;
        gameElements.appContainer.className = 'app-container';
    }

    function switchScreenAndCleanup(screenName) {
        cleanupGame();
        Object.values(screens).forEach(screen => screen.classList.remove('active'));
        screens[screenName].classList.add('active');
    }

    function continueToNextQuestion() {
        if (!isWaitingForContinue) return;
        isWaitingForContinue = false;
        buttons.submit.textContent = 'Submit';
        gameElements.answerInput.disabled = false;
        currentQuestionIndex++;
        showQuestion();
    }
    
    function updateSettings() {
        settings.numQuestions = parseInt(settingsElements.numQuestions.value);
        settings.timerDuration = timerDifficulties[settingsElements.timerDifficulty.value];
        settings.practiceTypes = [];
        if (settingsElements.includeHanzi.checked) settings.practiceTypes.push('hanzi');
        if (settingsElements.includePinyin.checked) settings.practiceTypes.push('pinyin');
        if (settingsElements.includeGrammar.checked) settings.practiceTypes.push('grammar');
        if (settings.practiceTypes.length === 0) { settingsElements.includeHanzi.checked = true; settings.practiceTypes.push('hanzi'); }
    }

    function prepareQuestions() {
        let questionPool = [];
        const types = settings.practiceTypes;
        if (types.includes('hanzi')) hsk1_vocab.forEach(item => questionPool.push({ type: 'Hanzi', prompt: item.hanzi, answers: item }));
        if (types.includes('pinyin')) hsk1_vocab.forEach(item => questionPool.push({ type: 'Pinyin', prompt: item.pinyin, answers: item }));
        if (types.includes('grammar')) hsk1_grammar.forEach(item => questionPool.push({ type: 'Grammar', prompt: item.english, answers: { ...item, hanzi: item.structure } }));
        const shuffled = questionPool.sort(() => 0.5 - Math.random());
        gameQuestions = shuffled.slice(0, settings.numQuestions);
    }
    
    function showQuestion() {
        if (currentQuestionIndex >= gameQuestions.length) { endGame(); return; }
        gameElements.appContainer.className = 'app-container'; 
        const question = gameQuestions[currentQuestionIndex];
        gameElements.questionTypeLabel.textContent = `Translate the ${question.type}:`;
        gameElements.question.textContent = question.prompt;
        gameElements.answerInput.value = ''; gameElements.feedback.textContent = '';
        gameElements.answerInput.focus(); 
        updateProgressBar(); 
        startTimer();
    }
    
    function updateProgressBar() { const progress = ((currentQuestionIndex) / settings.numQuestions) * 100; gameElements.progressBar.style.width = `${progress}%`; }

    function checkAnswer() {
        if (isWaitingForContinue) return;

        clearInterval(timerInterval);
        const userAnswer = gameElements.answerInput.value.trim().toLowerCase();
        const question = gameQuestions[currentQuestionIndex];
        const { answers, type } = question;
        let isCorrect = false;

        const tonelessPinyin = removeToneMarks(answers.pinyin).toLowerCase();

        if (type === 'Hanzi') { if (userAnswer === answers.english.toLowerCase() || userAnswer === tonelessPinyin || userAnswer === numberMap[answers.hanzi]) isCorrect = true;
        } else if (type === 'Pinyin') { if (userAnswer === answers.english.toLowerCase() || userAnswer === answers.hanzi.toLowerCase() || userAnswer === numberMap[answers.hanzi]) isCorrect = true;
        } else if (type === 'Grammar') { if (userAnswer === tonelessPinyin) isCorrect = true; }
        
        gameResults.push({ question, userAnswer, isCorrect });

        if (isCorrect) {
            currentScore++;
            gameElements.feedback.textContent = 'Correct!';
            gameElements.feedback.className = 'feedback-correct';
            gameElements.appContainer.classList.add('correct-flash');
        } else {
            gameElements.feedback.textContent = `Correct: ${answers.hanzi} (${answers.pinyin}) - ${answers.english}`;
            gameElements.feedback.className = 'feedback-incorrect';
            gameElements.appContainer.classList.add('incorrect-shake');
        }

        gameElements.answerInput.disabled = true;
        buttons.submit.textContent = 'Continue';
        isWaitingForContinue = true;
    }

    function startTimer() {
        clearInterval(timerInterval);
        let timeLeft = settings.timerDuration;
        gameElements.timer.textContent = timeLeft;
        timerInterval = setInterval(() => { 
            if (isWaitingForContinue) {
                clearInterval(timerInterval);
                return;
            }
            timeLeft--; 
            gameElements.timer.textContent = timeLeft; 
            if (timeLeft <= 0) {
                checkAnswer();
            }
        }, 1000);
    }

    function startGame() {
        updateSettings(); prepareQuestions();
        currentScore = 0; currentQuestionIndex = 0; gameResults = [];
        switchScreenAndCleanup('game');
        showQuestion();
    }

    function stopGame() {
        totalScore = Math.max(0, totalScore - 1);
        localStorage.setItem('hanziHeroTotalScore', totalScore);
        scoreElements.totalScore.textContent = totalScore;
        switchScreenAndCleanup('start');
    }
    
    function endGame() {
        cleanupGame();
        totalScore += currentScore;
        localStorage.setItem('hanziHeroTotalScore', totalScore);
        scoreElements.totalScore.textContent = totalScore;
        scoreElements.finalScore.textContent = currentScore;
        scoreElements.totalQuestionsSummary.textContent = settings.numQuestions;
        displayResults();
        switchScreenAndCleanup('score');
    }

    function displayResults() {
        scoreElements.resultsContainer.innerHTML = '';
        gameResults.forEach(result => {
            const item = document.createElement('div');
            item.className = 'result-item';
            const correctAnswerHTML = result.isCorrect ? '' : `<div class="correct-answer">${result.question.answers.hanzi} (${result.question.answers.pinyin}) - ${result.question.answers.english}</div>`;
            const userAnswerClass = result.isCorrect ? 'correct' : 'incorrect';
            item.innerHTML = `<div class="question">${result.question.prompt}</div> <div class="answer-section"> <div class="user-answer ${userAnswerClass}">${result.userAnswer || 'No Answer'}</div> ${correctAnswerHTML} </div>`;
            scoreElements.resultsContainer.appendChild(item);
        });
    }

    function updateMap() {
        const progress = Math.min((totalScore / 500) * 100, 100);
        mapElements.progressBar.style.width = `${progress}%`;
        mapElements.score.textContent = totalScore;
    }

    // --- REVISED EVENT LISTENERS ---
    buttons.start.addEventListener('click', startGame);
    buttons.stopGame.addEventListener('click', stopGame);
    
    // The Submit button now has a single job based on the game state.
    buttons.submit.addEventListener('click', () => {
        if (isWaitingForContinue) {
            continueToNextQuestion();
        } else {
            checkAnswer();
        }
    });
    
    // We now have only ONE "keyup" listener for the Enter key to avoid all conflicts.
    document.addEventListener('keyup', (event) => {
        // We only care about the Enter key.
        if (event.key !== 'Enter') return;
        // And only when the game screen is active.
        if (!screens.game.classList.contains('active')) return;

        if (isWaitingForContinue) {
            continueToNextQuestion();
        } else {
            // We only trigger checkAnswer if the user is currently focused on the input field.
            if (document.activeElement === gameElements.answerInput) {
                checkAnswer();
            }
        }
    });

    buttons.settings.addEventListener('click', () => switchScreenAndCleanup('settings'));
    buttons.settingsBack.addEventListener('click', () => switchScreenAndCleanup('start'));
    buttons.playAgain.addEventListener('click', () => switchScreenAndCleanup('start'));
    buttons.map.addEventListener('click', () => { cleanupGame(); updateMap(); switchScreenAndCleanup('map'); });
    buttons.mapBack.addEventListener('click', () => switchScreenAndCleanup('start'));

    // --- INITIALIZE ---
    scoreElements.totalScore.textContent = totalScore;
    switchScreenAndCleanup('start');
});