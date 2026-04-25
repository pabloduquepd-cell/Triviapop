const categories = [
  {
    id: "old-testament",
    name: "Old Testament",
    group: "Bible",
    questions: [
      { q: "Who built the ark?", a: ["Moses", "Noah", "Abraham", "Jonah"], correct: 1 },
      { q: "Which book tells the story of creation?", a: ["Genesis", "Exodus", "Psalms", "Isaiah"], correct: 0 },
      { q: "Who interpreted Pharaoh's dreams in Egypt?", a: ["Daniel", "Joseph", "Samuel", "Elijah"], correct: 1 },
      { q: "What city did Joshua and Israel march around?", a: ["Jericho", "Nineveh", "Bethlehem", "Hebron"], correct: 0 },
      { q: "Who received the Ten Commandments?", a: ["Moses", "David", "Solomon", "Joshua"], correct: 0 },
      { q: "What was Daniel thrown into?", a: ["A furnace", "A prison", "A lions' den", "A pit"], correct: 2 }
    ]
  },
  {
    id: "new-testament",
    name: "New Testament",
    group: "Bible",
    questions: [
      { q: "Where was Jesus born?", a: ["Nazareth", "Bethlehem", "Jerusalem", "Capernaum"], correct: 1 },
      { q: "Who baptized Jesus?", a: ["Peter", "John the Baptist", "Paul", "James"], correct: 1 },
      { q: "How many books are in the New Testament?", a: ["21", "24", "27", "30"], correct: 2 },
      { q: "Which Gospel begins with 'In the beginning was the Word'?", a: ["Matthew", "Mark", "Luke", "John"], correct: 3 },
      { q: "Who wrote many letters to early churches?", a: ["Paul", "Pilate", "Herod", "Zacchaeus"], correct: 0 },
      { q: "What city was Paul traveling to when he met Jesus?", a: ["Rome", "Damascus", "Antioch", "Ephesus"], correct: 1 }
    ]
  },
  {
    id: "general-bible",
    name: "General Bible",
    group: "Bible",
    questions: [
      { q: "How many books are in the Protestant Bible?", a: ["39", "66", "72", "81"], correct: 1 },
      { q: "What is the longest book in the Bible?", a: ["Genesis", "Isaiah", "Psalms", "Romans"], correct: 2 },
      { q: "What does gospel mean?", a: ["Good news", "Old law", "Holy song", "Temple tax"], correct: 0 },
      { q: "Which Bible figure was swallowed by a great fish?", a: ["Jonah", "Noah", "Elisha", "Gideon"], correct: 0 },
      { q: "What is the first book of the Bible?", a: ["Genesis", "Exodus", "Matthew", "Job"], correct: 0 },
      { q: "What is the final book of the Bible?", a: ["Jude", "Revelation", "Acts", "Romans"], correct: 1 }
    ]
  },
  {
    id: "david",
    name: "David",
    group: "Bible",
    questions: [
      { q: "What giant did David defeat?", a: ["Og", "Goliath", "Samson", "Saul"], correct: 1 },
      { q: "What instrument did David play?", a: ["Harp", "Trumpet", "Drum", "Flute"], correct: 0 },
      { q: "David was first known as a what?", a: ["Fisherman", "Shepherd", "Tax collector", "Scribe"], correct: 1 },
      { q: "Which prophet anointed David?", a: ["Samuel", "Nathan", "Isaiah", "Ezekiel"], correct: 0 },
      { q: "Who was David's son known for wisdom?", a: ["Solomon", "Absalom", "Jonathan", "Rehoboam"], correct: 0 },
      { q: "David became king over which nation?", a: ["Egypt", "Israel", "Moab", "Persia"], correct: 1 }
    ]
  },
  {
    id: "disciples",
    name: "12 Disciples",
    group: "Bible",
    questions: [
      { q: "Which disciple denied Jesus three times?", a: ["John", "Peter", "Thomas", "Andrew"], correct: 1 },
      { q: "Which disciple was a tax collector?", a: ["Matthew", "James", "Philip", "Simon"], correct: 0 },
      { q: "Which disciple is often called Doubting Thomas?", a: ["Jude", "Thomas", "Bartholomew", "Andrew"], correct: 1 },
      { q: "Who betrayed Jesus?", a: ["Judas Iscariot", "Peter", "James", "Philip"], correct: 0 },
      { q: "Which brothers were fishermen and sons of Zebedee?", a: ["James and John", "Peter and Andrew", "Philip and Thomas", "Jude and Simon"], correct: 0 },
      { q: "Who was Peter's brother?", a: ["Matthew", "Andrew", "John", "James"], correct: 1 }
    ]
  },
  {
    id: "music",
    name: "Music",
    group: "General",
    questions: [
      { q: "How many strings does a standard guitar have?", a: ["4", "5", "6", "7"], correct: 2 },
      { q: "Which instrument has 88 keys?", a: ["Piano", "Violin", "Trumpet", "Guitar"], correct: 0 },
      { q: "What does BPM stand for?", a: ["Beats Per Minute", "Bass Per Measure", "Band Practice Mode", "Beat Piano Meter"], correct: 0 },
      { q: "Which voice type is usually the lowest male range?", a: ["Tenor", "Alto", "Bass", "Soprano"], correct: 2 },
      { q: "A quartet has how many performers?", a: ["2", "3", "4", "5"], correct: 2 },
      { q: "Which instrument is commonly played with a bow?", a: ["Violin", "Piano", "Drums", "Trumpet"], correct: 0 }
    ]
  },
  {
    id: "sports",
    name: "Sports",
    group: "General",
    questions: [
      { q: "How many players are on a soccer team on the field?", a: ["9", "10", "11", "12"], correct: 2 },
      { q: "In basketball, how many points is a free throw worth?", a: ["1", "2", "3", "4"], correct: 0 },
      { q: "Which sport uses a puck?", a: ["Baseball", "Hockey", "Tennis", "Golf"], correct: 1 },
      { q: "How many bases are on a baseball field?", a: ["3", "4", "5", "6"], correct: 1 },
      { q: "In football, a touchdown is worth how many points?", a: ["3", "6", "7", "10"], correct: 1 },
      { q: "Which sport is played at Wimbledon?", a: ["Golf", "Tennis", "Cricket", "Rugby"], correct: 1 }
    ]
  },
  {
    id: "general-trivia",
    name: "General Trivia",
    group: "General",
    questions: [
      { q: "What is the capital of Australia?", a: ["Sydney", "Canberra", "Melbourne", "Perth"], correct: 1 },
      { q: "Which planet is known as the Red Planet?", a: ["Venus", "Mars", "Jupiter", "Mercury"], correct: 1 },
      { q: "How many sides does a hexagon have?", a: ["5", "6", "7", "8"], correct: 1 },
      { q: "What is the largest ocean on Earth?", a: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
      { q: "What gas do plants absorb from the air?", a: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], correct: 2 },
      { q: "How many colors are in a rainbow?", a: ["5", "6", "7", "8"], correct: 2 }
    ]
  }
];

const palette = [
  ["#ff6d6d", "#c93f50"],
  ["#52b6ff", "#2369d8"],
  ["#ffd166", "#dc9f18"],
  ["#6ee7a8", "#21a873"],
  ["#b69cff", "#735fe2"],
  ["#ff9fc8", "#d84886"]
];

const difficultyRules = {
  easy: {
    label: "Easy",
    runners: [1, 2],
    toughChance: 0.08,
    mediumChance: 0.34,
    speedBonusBase: 60,
    note: "Friendlier boards with fewer runners and more one-pop balloons."
  },
  medium: {
    label: "Medium",
    runners: [2, 4],
    toughChance: 0.18,
    mediumChance: 0.42,
    speedBonusBase: 55,
    note: "The current feel: a balanced mix of one-pop, multi-click, and runner balloons."
  },
  hard: {
    label: "Hard",
    runners: [4, 5],
    toughChance: 0.3,
    mediumChance: 0.55,
    speedBonusBase: 50,
    note: "More runners, more multi-click balloons, and tighter speed bonuses."
  }
};

const stageColors = [
  { name: "Green", palette: [["#6ee7a8", "#21a873"]], bg: "rgba(110, 231, 168, 0.14)", text: "#6ee7a8" },
  { name: "Orange", palette: [["#ff9f43", "#d55d17"]], bg: "rgba(255, 159, 67, 0.15)", text: "#ffb35c" },
  { name: "Blue", palette: [["#52b6ff", "#2369d8"]], bg: "rgba(82, 182, 255, 0.14)", text: "#52b6ff" },
  { name: "Red", palette: [["#ff6d6d", "#c93f50"]], bg: "rgba(255, 109, 109, 0.14)", text: "#ff8b8b" },
  { name: "Purple", palette: [["#b69cff", "#735fe2"]], bg: "rgba(182, 156, 255, 0.14)", text: "#c8b7ff" },
  { name: "Gold", palette: [["#ffd166", "#dc9f18"]], bg: "rgba(255, 209, 102, 0.15)", text: "#ffd166" },
  { name: "Mixed", palette, bg: "rgba(255, 255, 255, 0.12)", text: "#f5f7fb" }
];

const roomPrefix = "balloon-pop-room:";
const channelName = "balloon-pop-trivia";

const firebaseConfig = {
  apiKey: "AIzaSyCSDbVolzRvoBhTHMEsoBS26XtmDVJPn8Q",
  authDomain: "triviapop-87d53.firebaseapp.com",
  databaseURL: "https://triviapop-87d53-default-rtdb.firebaseio.com",
  projectId: "triviapop-87d53",
  storageBucket: "triviapop-87d53.firebasestorage.app",
  messagingSenderId: "24535786253",
  appId: "1:24535786253:web:ea84610126153a24fd4644",
  measurementId: "G-YYE1CP6ZRS"
};

const firebaseApp = window.firebase ? window.firebase.initializeApp(firebaseConfig) : null;
const realtimeDb = firebaseApp ? window.firebase.database() : null;

const session = {
  role: "landing",
  roomCode: "",
  playerId: "",
  playerName: "",
  room: null,
  timerId: null,
  musicTimerId: null,
  musicTheme: "off",
  popStyle: "classic",
  turnStart: 0,
  balloonsLeft: 0,
  sound: true,
  audioContext: null,
  roomListener: null,
  channel: "BroadcastChannel" in window ? new BroadcastChannel(channelName) : null
};

const els = {
  homeButton: document.querySelector("#homeButton"),
  landingView: document.querySelector("#landingView"),
  hostSetupView: document.querySelector("#hostSetupView"),
  joinView: document.querySelector("#joinView"),
  hostRoomView: document.querySelector("#hostRoomView"),
  playerRoomView: document.querySelector("#playerRoomView"),
  finalView: document.querySelector("#finalView"),
  hostModeButton: document.querySelector("#hostModeButton"),
  joinModeButton: document.querySelector("#joinModeButton"),
  categorySelect: document.querySelector("#categorySelect"),
  categoryChips: document.querySelector("#categoryChips"),
  difficultySelect: document.querySelector("#difficultySelect"),
  difficultyHint: document.querySelector("#difficultyHint"),
  balloonCount: document.querySelector("#balloonCount"),
  roundLimit: document.querySelector("#roundLimit"),
  createRoomButton: document.querySelector("#createRoomButton"),
  joinCodeInput: document.querySelector("#joinCodeInput"),
  playerNameInput: document.querySelector("#playerNameInput"),
  joinRoomButton: document.querySelector("#joinRoomButton"),
  joinError: document.querySelector("#joinError"),
  roomCodeDisplay: document.querySelector("#roomCodeDisplay"),
  copyJoinLinkButton: document.querySelector("#copyJoinLinkButton"),
  startRoundButton: document.querySelector("#startRoundButton"),
  endGameButton: document.querySelector("#endGameButton"),
  hostPhaseText: document.querySelector("#hostPhaseText"),
  hostRoundNow: document.querySelector("#hostRoundNow"),
  hostRoundTotal: document.querySelector("#hostRoundTotal"),
  hostStagePill: document.querySelector("#hostStagePill"),
  hostPlayers: document.querySelector("#hostPlayers"),
  hostQuestion: document.querySelector("#hostQuestion"),
  playerStatusName: document.querySelector("#playerStatusName"),
  playerRoomCode: document.querySelector("#playerRoomCode"),
  playerPhaseText: document.querySelector("#playerPhaseText"),
  playerWaiting: document.querySelector("#playerWaiting"),
  playerLobbyList: document.querySelector("#playerLobbyList"),
  playerGameArea: document.querySelector("#playerGameArea"),
  playerRoundNow: document.querySelector("#playerRoundNow"),
  playerRoundTotal: document.querySelector("#playerRoundTotal"),
  playerStagePill: document.querySelector("#playerStagePill"),
  timerValue: document.querySelector("#timerValue"),
  arena: document.querySelector("#arena"),
  playerQuestionCard: document.querySelector("#playerQuestionCard"),
  questionCategory: document.querySelector("#questionCategory"),
  questionText: document.querySelector("#questionText"),
  answerGrid: document.querySelector("#answerGrid"),
  answerFeedback: document.querySelector("#answerFeedback"),
  playerResults: document.querySelector("#playerResults"),
  playerResultsText: document.querySelector("#playerResultsText"),
  playerScores: document.querySelector("#playerScores"),
  finalScores: document.querySelector("#finalScores"),
  winnerText: document.querySelector("#winnerText"),
  playAgainButton: document.querySelector("#playAgainButton"),
  soundToggle: document.querySelector("#soundToggle"),
  musicThemeSelect: document.querySelector("#musicThemeSelect"),
  popStyleSelect: document.querySelector("#popStyleSelect"),
  musicUpload: document.querySelector("#musicUpload"),
  musicPlayer: document.querySelector("#musicPlayer")
};

function init() {
  renderCategoryControls();
  renderDifficultyHint();
  bindEvents();
  handleUrlJoin();
}

function renderCategoryControls() {
  els.categorySelect.innerHTML = categories.map((category) => (
    `<option value="${category.id}">${category.name}</option>`
  )).join("");
  renderCategoryChips(els.categorySelect.value);
}

function renderCategoryChips(selectedId) {
  els.categoryChips.innerHTML = categories.map((category) => (
    `<button class="chip ${category.id === selectedId ? "active" : ""}" type="button" data-category="${category.id}">
      <strong>${category.name}</strong>
      <span>${category.group} / ${category.questions.length} questions</span>
    </button>`
  )).join("");
}

function bindEvents() {
  els.homeButton.addEventListener("click", goHome);
  els.hostModeButton.addEventListener("click", () => showOnly("hostSetupView"));
  els.joinModeButton.addEventListener("click", () => showOnly("joinView"));
  els.categorySelect.addEventListener("change", () => renderCategoryChips(els.categorySelect.value));
  els.difficultySelect.addEventListener("change", renderDifficultyHint);
  els.categoryChips.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-category]");
    if (!chip) return;
    els.categorySelect.value = chip.dataset.category;
    renderCategoryChips(chip.dataset.category);
  });
  els.createRoomButton.addEventListener("click", createRoom);
  els.joinRoomButton.addEventListener("click", joinRoom);
  els.joinCodeInput.addEventListener("input", () => {
    els.joinCodeInput.value = els.joinCodeInput.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
  });
  els.joinCodeInput.addEventListener("keydown", submitJoinOnEnter);
  els.playerNameInput.addEventListener("keydown", submitJoinOnEnter);
  els.copyJoinLinkButton.addEventListener("click", copyJoinLink);
  els.startRoundButton.addEventListener("click", handleHostRoundButton);
  els.endGameButton.addEventListener("click", endGame);
  els.playAgainButton.addEventListener("click", goHome);
  els.soundToggle.addEventListener("click", toggleSound);
  els.musicThemeSelect.addEventListener("change", changeMusicTheme);
  els.popStyleSelect.addEventListener("change", () => {
    session.popStyle = els.popStyleSelect.value;
    playPop();
  });
  els.musicUpload.addEventListener("change", loadMusic);

  window.addEventListener("storage", (event) => {
    if (!event.key || !event.key.startsWith(roomPrefix)) return;
    if (event.key === roomKey(session.roomCode)) loadRoomUpdate();
  });

  if (session.channel) {
    session.channel.addEventListener("message", (event) => {
      if (event.data && event.data.roomCode === session.roomCode) loadRoomUpdate();
    });
  }
}

function renderDifficultyHint() {
  const rules = getDifficultyRules(els.difficultySelect.value);
  els.difficultyHint.innerHTML = `
    <strong>${rules.label} level</strong>
    <span>${rules.runners[0]} to ${rules.runners[1]} runner balloons per board. ${rules.note}</span>
  `;
}

function handleUrlJoin() {
  const params = new URLSearchParams(window.location.search);
  const roomCode = params.get("room");
  if (!roomCode) return;
  els.joinCodeInput.value = roomCode.toUpperCase();
  showOnly("joinView");
}

function submitJoinOnEnter(event) {
  if (event.key === "Enter") joinRoom();
}

async function createRoom() {
  const roomCode = makeRoomCode();
  const categoryId = els.categorySelect.value;
  const room = {
    code: roomCode,
    phase: "lobby",
    round: 0,
    roundLimit: clamp(Number(els.roundLimit.value) || 5, 1, 10),
    balloonCount: clamp(Number(els.balloonCount.value) || 12, 6, 24),
    difficulty: els.difficultySelect.value,
    categoryId,
    players: {},
    roundSeed: "",
    roundWinnerId: "",
    question: null,
    questionPool: shuffle(categories.find((item) => item.id === categoryId).questions.map((_, index) => index)),
    createdAt: Date.now(),
    updatedAt: Date.now()
  };

  session.role = "host";
  session.roomCode = roomCode;
  session.room = room;
  await saveRoom(room);
  subscribeRoom(roomCode);
  showOnly("hostRoomView");
  renderHost();
}

async function joinRoom() {
  const roomCode = els.joinCodeInput.value.trim().toUpperCase();
  const playerName = els.playerNameInput.value.trim();
  els.joinError.textContent = "";

  if (!roomCode || roomCode.length < 4) {
    els.joinError.textContent = "Enter the room code from the host screen.";
    return;
  }
  if (!playerName) {
    els.joinError.textContent = "Enter your player name.";
    return;
  }

  const room = await readRoom(roomCode);
  if (!room) {
    els.joinError.textContent = "Room not found. Check the code with the host.";
    return;
  }
  if (room.phase !== "lobby") {
    els.joinError.textContent = "This room has already started.";
    return;
  }

  const playerId = session.playerId || makeId();
  room.players[playerId] = {
    id: playerId,
    name: playerName,
    score: 0,
    finishedAt: 0,
    elapsed: 0,
    status: "ready",
    answered: 0,
    correct: 0
  };
  room.updatedAt = Date.now();

  session.role = "player";
  session.roomCode = roomCode;
  session.playerId = playerId;
  session.playerName = playerName;
  session.room = room;
  await saveRoom(room);
  subscribeRoom(roomCode);
  showOnly("playerRoomView");
  renderPlayer();
}

function startRound() {
  const room = session.room;
  if (!room || !Object.keys(room.players).length) return;
  const stage = getStage(room.round + 1);

  room.phase = "popping";
  room.round += 1;
  room.roundSeed = `${Date.now()}-${Math.random()}`;
  room.roundWinnerId = "";
  room.question = null;
  room.stageName = stage.name;
  for (const player of Object.values(room.players)) {
    player.status = "popping";
    player.finishedAt = 0;
    player.elapsed = 0;
  }
  room.updatedAt = Date.now();
  saveRoom(room);
  renderHost();
}

function handleHostRoundButton() {
  const room = session.room;
  if (!room) return;
  if (room.round >= room.roundLimit && room.phase === "results") {
    endGame();
    return;
  }
  startRound();
}

function completePlayerBoard() {
  clearInterval(session.timerId);
  const room = session.room;
  const player = room.players[session.playerId];
  if (!room || !player || room.phase !== "popping" || player.status === "finished") return;

  player.status = "finished";
  player.elapsed = getElapsedSeconds();
  player.finishedAt = Date.now();

  if (!room.roundWinnerId) {
    room.roundWinnerId = player.id;
    room.phase = "question";
    room.question = drawQuestion(room);
    const speedBonus = Math.max(5, Math.round(getDifficultyRules(room.difficulty).speedBonusBase - player.elapsed));
    player.score += speedBonus;
    player.speedBonus = speedBonus;
  }

  room.updatedAt = Date.now();
  saveRoom(room);
  renderPlayer();
}

function drawQuestion(room) {
  const category = getCategory(room.categoryId);
  if (!room.questionPool || !room.questionPool.length) {
    room.questionPool = shuffle(category.questions.map((_, index) => index));
  }
  const index = room.questionPool.pop();
  return { categoryId: category.id, questionIndex: index, answeredBy: "", selected: null };
}

function answerQuestion(selectedIndex) {
  const room = session.room;
  if (!room || !room.question || room.question.answeredBy) return;
  if (room.roundWinnerId !== session.playerId) return;

  const player = room.players[session.playerId];
  const question = getQuestion(room.question);
  room.question.answeredBy = session.playerId;
  room.question.selected = selectedIndex;
  player.answered += 1;

  if (selectedIndex === question.correct) {
    player.score += 100;
    player.correct += 1;
  }

  room.phase = room.round >= room.roundLimit ? "final" : "results";
  for (const current of Object.values(room.players)) {
    if (current.status !== "finished") current.status = "missed";
  }
  room.updatedAt = Date.now();
  saveRoom(room);
  renderPlayer();
}

function endGame() {
  const room = session.room;
  if (!room) return;
  room.phase = "final";
  room.updatedAt = Date.now();
  saveRoom(room);
  renderHost();
}

async function loadRoomUpdate(roomFromFirebase) {
  if (!session.roomCode) return;
  const room = roomFromFirebase || await readRoom(session.roomCode);
  if (!room) return;
  const previousPhase = session.room ? session.room.phase : "";
  const previousSeed = session.room ? session.room.roundSeed : "";
  session.room = room;

  if (session.role === "host") renderHost();
  if (session.role === "player") {
    renderPlayer();
    if (room.phase === "popping" && room.roundSeed !== previousSeed) beginPlayerRound();
    if (room.phase !== "popping" && previousPhase === "popping") clearInterval(session.timerId);
  }
}

function renderHost() {
  const room = session.room;
  if (!room) return;

  els.roomCodeDisplay.textContent = room.code;
  els.hostRoundNow.textContent = Math.max(1, room.round);
  els.hostRoundTotal.textContent = room.roundLimit;
  applyStagePill(els.hostStagePill, room);
  els.hostPhaseText.textContent = hostPhaseLabel(room);
  els.startRoundButton.disabled = !["lobby", "results"].includes(room.phase);
  els.startRoundButton.textContent = room.round === 0 ? "Start Round" : "Next Round";
  if (room.round >= room.roundLimit && room.phase === "results") {
    els.startRoundButton.textContent = "Show Final";
  }

  const players = sortedPlayers(room);
  els.hostPlayers.innerHTML = players.length ? players.map((player) => playerRow(player, room)).join("") : (
    `<div class="score-row"><div><strong>No players yet</strong><br><span>Send the room code to join.</span></div><strong>0</strong></div>`
  );
  els.hostQuestion.innerHTML = hostQuestionMarkup(room);

  if (room.phase === "final") renderFinal(room);
}

function renderPlayer() {
  const room = session.room;
  if (!room) return;
  const player = room.players[session.playerId];
  if (!player) {
    goHome();
    return;
  }

  els.playerStatusName.textContent = player.name;
  els.playerRoomCode.textContent = room.code;
  els.playerPhaseText.textContent = playerPhaseLabel(room, player);
  els.playerRoundNow.textContent = Math.max(1, room.round);
  els.playerRoundTotal.textContent = room.roundLimit;
  applyStagePill(els.playerStagePill, room);
  els.playerLobbyList.innerHTML = sortedPlayers(room).map((current) => playerRow(current, room)).join("");
  els.playerScores.innerHTML = sortedPlayers(room).map((current) => playerRow(current, room)).join("");

  els.playerWaiting.classList.toggle("hidden", room.phase !== "lobby");
  els.playerGameArea.classList.toggle("hidden", room.phase !== "popping" || player.status !== "popping");
  els.playerQuestionCard.classList.toggle("hidden", room.phase !== "question" || room.roundWinnerId !== player.id);
  els.playerResults.classList.toggle("hidden", !["results", "final"].includes(room.phase) && !(room.phase === "question" && room.roundWinnerId !== player.id));

  if (room.phase === "popping" && player.status === "popping" && !els.arena.children.length) beginPlayerRound();
  if (room.phase === "question" && room.roundWinnerId === player.id) renderQuestion(room);
  if (room.phase === "question" && room.roundWinnerId !== player.id) {
    const winner = room.players[room.roundWinnerId];
    els.playerResultsText.textContent = `${winner ? winner.name : "The winner"} is answering the question.`;
  }
  if (room.phase === "results") {
    els.playerResultsText.textContent = "Round complete. Waiting for the host.";
  }
  if (room.phase === "final") renderFinal(room);
}

function beginPlayerRound() {
  clearInterval(session.timerId);
  session.balloonsLeft = session.room.balloonCount;
  session.turnStart = performance.now();
  els.arena.innerHTML = "";
  applyArenaStage(session.room);
  renderBalloons(session.room);
  session.timerId = setInterval(updateTimer, 100);
  updateTimer();
}

function renderBalloons(room) {
  const width = Math.max(320, els.arena.clientWidth);
  const height = Math.max(420, els.arena.clientHeight);
  const rand = seededRandom(hashString(`${room.roundSeed}-${session.playerId}`));
  const rules = getDifficultyRules(room.difficulty);
  const runnerTarget = randomRange(rand, rules.runners[0], rules.runners[1]);
  const runnerIndexes = pickIndexes(room.balloonCount, runnerTarget, rand);
  const stage = getStage(room.round);

  for (let i = 0; i < room.balloonCount; i += 1) {
    const typeRoll = rand();
    const hits = typeRoll < rules.toughChance ? randomRange(rand, 4, 6) : typeRoll < rules.mediumChance ? randomRange(rand, 2, 3) : 1;
    const escapes = runnerIndexes.has(i);
    const size = randomRange(rand, 58, 92);
    const [color, shade] = stage.palette[i % stage.palette.length];
    const button = document.createElement("button");
    button.type = "button";
    button.className = `balloon ${escapes ? "escape" : ""}`;
    button.dataset.hits = hits;
    button.dataset.remaining = hits;
    button.dataset.escapes = escapes ? "1" : "0";
    button.style.setProperty("--size", `${size}px`);
    button.style.setProperty("--color", color);
    button.style.setProperty("--shade", shade);
    placeBalloon(button, width, height, size, rand);
    button.addEventListener("pointerenter", handleBalloonNear);
    button.addEventListener("click", handleBalloonClick);
    els.arena.appendChild(button);
  }
}

function handleBalloonNear(event) {
  const button = event.currentTarget;
  if (button.dataset.escapes !== "1") return;
  const size = Number.parseInt(button.style.getPropertyValue("--size"), 10) || 70;
  const width = Math.max(320, els.arena.clientWidth);
  const height = Math.max(420, els.arena.clientHeight);
  placeBalloon(button, width, height, size, Math.random);
  playTone(420, 0.035, "triangle", 0.04);
}

function handleBalloonClick(event) {
  const button = event.currentTarget;
  let remaining = Number(button.dataset.remaining);
  remaining -= 1;
  button.dataset.remaining = remaining;
  button.dataset.hits = remaining;
  button.style.transform = `translate(-50%, -50%) scale(${1 - Math.min(0.22, remaining * 0.03)})`;
  playTone(260 + remaining * 70, 0.045, "sine", 0.07);

  if (remaining > 0) return;

  button.classList.add("pop");
  button.disabled = true;
  playPop();
  setTimeout(() => button.remove(), 170);
  session.balloonsLeft -= 1;

  if (session.balloonsLeft === 0) completePlayerBoard();
}

function renderQuestion(room) {
  const category = getCategory(room.question.categoryId);
  const question = getQuestion(room.question);
  const player = room.players[room.roundWinnerId];
  els.questionCategory.textContent = `${category.name} / ${player.speedBonus || 0} speed bonus`;
  els.questionText.textContent = question.q;
  els.answerFeedback.textContent = "";
  els.answerGrid.innerHTML = question.a.map((answer, index) => (
    `<button class="answer-btn" type="button" data-answer="${index}">${escapeHtml(answer)}</button>`
  )).join("");
  els.answerGrid.querySelectorAll(".answer-btn").forEach((button) => {
    button.addEventListener("click", () => answerQuestion(Number(button.dataset.answer)));
  });
}

function renderFinal(room) {
  clearInterval(session.timerId);
  showOnly("finalView");
  const players = sortedPlayers(room);
  els.winnerText.textContent = players.length ? `${players[0].name} wins` : "Game ended";
  els.finalScores.innerHTML = players.map((player, index) => (
    `<div class="score-row ${index === 0 ? "winner" : ""}">
      <div><strong>${index + 1}. ${escapeHtml(player.name)}</strong><br><span>${player.correct}/${player.answered} correct</span></div>
      <strong>${player.score}</strong>
    </div>`
  )).join("");
}

function hostQuestionMarkup(room) {
  if (room.phase === "lobby") {
    const rules = getDifficultyRules(room.difficulty);
    return `${rules.label} difficulty. ${rules.runners[0]} to ${rules.runners[1]} runner balloons per board. Stage colors change each round; stage 7 and above becomes mixed.`;
  }
  if (room.phase === "popping") return sortedPlayers(room).map((player) => (
    `<div class="score-row ${player.status === "finished" ? "ready" : ""}">
      <div><strong>${escapeHtml(player.name)}</strong><br><span>${player.status === "finished" ? `${player.elapsed.toFixed(1)} seconds` : "Popping balloons"}</span></div>
      <strong>${player.score}</strong>
    </div>`
  )).join("");
  if (!room.question) return "Waiting for round results.";

  const question = getQuestion(room.question);
  const category = getCategory(room.question.categoryId);
  const winner = room.players[room.roundWinnerId];
  const selected = room.question.selected;
  return `
    <strong>${winner ? escapeHtml(winner.name) : "Winner"} earned the question</strong>
    <span>${category.name}</span>
    <h2>${escapeHtml(question.q)}</h2>
    ${question.a.map((answer, index) => (
      `<div class="score-row ${index === question.correct ? "ready" : selected === index ? "active" : ""}">
        <div><strong>${escapeHtml(answer)}</strong><br><span>${index === question.correct ? "Correct answer" : selected === index ? "Selected answer" : "Option"}</span></div>
        <strong>${String.fromCharCode(65 + index)}</strong>
      </div>`
    )).join("")}
  `;
}

function playerRow(player, room) {
  const isWinner = room.roundWinnerId === player.id;
  return `
    <div class="score-row ${isWinner ? "winner" : player.status === "finished" ? "ready" : ""}">
      <div><strong>${escapeHtml(player.name)}</strong><br><span>${statusText(player, room)}</span></div>
      <strong>${player.score}</strong>
    </div>
  `;
}

function statusText(player, room) {
  if (room.phase === "lobby") return "Ready";
  if (room.phase === "popping") return player.status === "finished" ? `${player.elapsed.toFixed(1)} seconds` : "Popping";
  if (room.phase === "question") return room.roundWinnerId === player.id ? "Answering" : "Waiting";
  if (room.phase === "results") return `${player.correct}/${player.answered} correct`;
  if (room.phase === "final") return `${player.correct}/${player.answered} correct`;
  return player.status;
}

function hostPhaseLabel(room) {
  const labels = {
    lobby: "Waiting for players",
    popping: "Players are popping balloons",
    question: "Round winner is answering",
    results: "Round results",
    final: "Final results"
  };
  return labels[room.phase] || "Room";
}

function playerPhaseLabel(room, player) {
  if (room.phase === "question" && room.roundWinnerId === player.id) return "Answer now";
  if (room.phase === "question") return "Question";
  return hostPhaseLabel(room);
}

function copyJoinLink() {
  const url = new URL(location.href);
  url.searchParams.set("room", session.roomCode);
  navigator.clipboard?.writeText(url.toString()).catch(() => {});
  els.copyJoinLinkButton.textContent = "Link Copied";
  setTimeout(() => {
    els.copyJoinLinkButton.textContent = "Copy Join Link";
  }, 1200);
}

function showOnly(viewKey) {
  for (const key of ["landingView", "hostSetupView", "joinView", "hostRoomView", "playerRoomView", "finalView"]) {
    els[key].classList.toggle("hidden", key !== viewKey);
  }
}

function goHome() {
  clearInterval(session.timerId);
  unsubscribeRoom();
  session.role = "landing";
  session.roomCode = "";
  session.playerId = "";
  session.room = null;
  els.arena.innerHTML = "";
  showOnly("landingView");
}

function saveRoom(room) {
  room.updatedAt = Date.now();
  session.room = room;
  localStorage.setItem(roomKey(room.code), JSON.stringify(room));
  if (realtimeDb) {
    realtimeDb.ref(firebaseRoomPath(room.code)).set(room).catch(() => {});
  }
  if (session.channel) session.channel.postMessage({ roomCode: room.code, updatedAt: room.updatedAt });
}

async function readRoom(code) {
  if (realtimeDb) {
    const snap = await realtimeDb.ref(firebaseRoomPath(code)).once("value");
    if (snap.exists()) {
      const room = snap.val();
      localStorage.setItem(roomKey(code), JSON.stringify(room));
      return room;
    }
  }
  try {
    return JSON.parse(localStorage.getItem(roomKey(code)));
  } catch {
    return null;
  }
}

function subscribeRoom(code) {
  if (!realtimeDb) return;
  unsubscribeRoom();
  session.roomListener = (snap) => {
    if (!snap.exists()) return;
    const room = snap.val();
    localStorage.setItem(roomKey(code), JSON.stringify(room));
    loadRoomUpdate(room);
  };
  realtimeDb.ref(firebaseRoomPath(code)).on("value", session.roomListener);
}

function unsubscribeRoom() {
  if (!realtimeDb || !session.roomListener || !session.roomCode) return;
  realtimeDb.ref(firebaseRoomPath(session.roomCode)).off("value", session.roomListener);
  session.roomListener = null;
}

function roomKey(code) {
  return `${roomPrefix}${code}`;
}

function firebaseRoomPath(code) {
  return `rooms/${code}`;
}

function sortedPlayers(room) {
  return Object.values(room.players).sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
}

function getCategory(categoryId) {
  return categories.find((category) => category.id === categoryId) || categories[0];
}

function getQuestion(questionRef) {
  return getCategory(questionRef.categoryId).questions[questionRef.questionIndex];
}

function getDifficultyRules(difficulty) {
  return difficultyRules[difficulty] || difficultyRules.medium;
}

function getStage(round) {
  if (round >= 7) return stageColors[6];
  return stageColors[Math.max(0, Math.min(stageColors.length - 2, round - 1))];
}

function applyStagePill(element, room) {
  const stage = getStage(Math.max(1, room.round || 1));
  element.textContent = `Stage ${Math.max(1, room.round || 1)} / ${stage.name}`;
  element.style.setProperty("--stage-bg", stage.bg);
  element.style.setProperty("--stage-color", stage.text);
}

function applyArenaStage(room) {
  const stage = getStage(Math.max(1, room.round || 1));
  const color = stage.text;
  els.arena.style.setProperty("--arena-glow", stage.bg);
  els.arena.style.setProperty("--arena-top", blendStageColor(color, "#12324f"));
  els.arena.style.setProperty("--arena-bottom", blendStageColor(color, "#071423"));
}

function blendStageColor(color, fallback) {
  if (color === "#f5f7fb") return fallback;
  return color;
}

function updateTimer() {
  els.timerValue.textContent = getElapsedSeconds().toFixed(1);
}

function getElapsedSeconds() {
  return (performance.now() - session.turnStart) / 1000;
}

function placeBalloon(button, width, height, size, rand) {
  const pad = size;
  button.style.left = `${randomRange(rand, pad, Math.max(pad, width - pad))}px`;
  button.style.top = `${randomRange(rand, pad, Math.max(pad, height - pad))}px`;
}

function makeRoomCode() {
  const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 4; i += 1) code += letters[Math.floor(Math.random() * letters.length)];
  return localStorage.getItem(roomKey(code)) ? makeRoomCode() : code;
}

function makeId() {
  return Math.random().toString(36).slice(2, 10);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function randomRange(rand, min, max) {
  return Math.floor(rand() * (max - min + 1)) + min;
}

function pickIndexes(total, count, rand) {
  const available = Array.from({ length: total }, (_, index) => index);
  const picked = new Set();
  while (picked.size < Math.min(total, count) && available.length) {
    const index = randomRange(rand, 0, available.length - 1);
    picked.add(available[index]);
    available.splice(index, 1);
  }
  return picked;
}

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

function hashString(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return hash >>> 0;
}

function seededRandom(seed) {
  let value = seed || 1;
  return function random() {
    value += 0x6D2B79F5;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function toggleSound() {
  session.sound = !session.sound;
  els.soundToggle.textContent = session.sound ? "S" : "X";
  els.soundToggle.title = session.sound ? "Sound on" : "Sound off";
  if (!session.sound) {
    els.musicPlayer.pause();
    stopProceduralMusic();
  } else if (session.musicTheme !== "off" && !els.musicPlayer.src) {
    startProceduralMusic(session.musicTheme);
  } else if (els.musicPlayer.src) {
    els.musicPlayer.play().catch(() => {});
  }
}

function loadMusic(event) {
  const [file] = event.target.files;
  if (!file) return;
  stopProceduralMusic();
  els.musicPlayer.src = URL.createObjectURL(file);
  els.musicPlayer.volume = 0.22;
  session.sound = true;
  session.musicTheme = "off";
  els.soundToggle.textContent = "S";
  els.musicThemeSelect.value = "off";
  els.musicPlayer.play().catch(() => {});
}

function changeMusicTheme() {
  session.musicTheme = els.musicThemeSelect.value;
  els.musicPlayer.pause();
  els.musicPlayer.removeAttribute("src");
  stopProceduralMusic();
  if (session.musicTheme !== "off") {
    session.sound = true;
    els.soundToggle.textContent = "S";
    startProceduralMusic(session.musicTheme);
  }
}

function startProceduralMusic(theme) {
  if (!session.sound) return;
  stopProceduralMusic();
  const patterns = {
    celebration: { tempo: 520, notes: [392, 494, 587, 659, 587, 494], bass: [196, 196, 247, 220] },
    arcade: { tempo: 310, notes: [523, 659, 784, 659, 880, 784], bass: [130, 164, 196, 164] },
    chill: { tempo: 780, notes: [330, 392, 494, 392, 440, 392], bass: [165, 147, 196, 175] }
  };
  const pattern = patterns[theme];
  if (!pattern) return;
  let step = 0;
  session.musicTimerId = setInterval(() => {
    if (!session.sound) return;
    const note = pattern.notes[step % pattern.notes.length];
    const bass = pattern.bass[step % pattern.bass.length];
    playTone(note, pattern.tempo / 1400, theme === "arcade" ? "square" : "triangle", theme === "chill" ? 0.018 : 0.025);
    if (step % 2 === 0) playTone(bass, pattern.tempo / 900, "sine", 0.018);
    step += 1;
  }, pattern.tempo);
}

function stopProceduralMusic() {
  clearInterval(session.musicTimerId);
  session.musicTimerId = null;
}

function getAudioContext() {
  if (!session.audioContext) {
    session.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return session.audioContext;
}

function playTone(frequency, duration, type = "sine", volume = 0.08) {
  if (!session.sound) return;
  const context = getAudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gain.gain.value = volume;
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + duration);
}

function playPop() {
  if (!session.sound) return;
  if (session.popStyle === "soft") {
    playTone(randomRange(Math.random, 140, 190), 0.11, "sine", 0.07);
    setTimeout(() => playTone(randomRange(Math.random, 260, 340), 0.08, "triangle", 0.035), 28);
    return;
  }
  if (session.popStyle === "spark") {
    playTone(randomRange(Math.random, 280, 360), 0.05, "square", 0.09);
    setTimeout(() => playTone(randomRange(Math.random, 650, 820), 0.05, "triangle", 0.07), 18);
    setTimeout(() => playTone(randomRange(Math.random, 920, 1180), 0.04, "sine", 0.045), 48);
    return;
  }
  playTone(randomRange(Math.random, 180, 260), 0.08, "square", 0.1);
  setTimeout(() => playTone(randomRange(Math.random, 420, 620), 0.04, "triangle", 0.06), 24);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

init();
