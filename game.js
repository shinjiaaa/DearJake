"use strict";

const SAVE_KEY = "dear-jake-save-v1";
const SETTINGS_KEY = "dear-jake-settings-v1";

const story = [
  {
    chapter: "프롤로그",
    tone: "ward",
    speaker: "???",
    text: "안녕. 여기는 흔히 뇌에 맛이 간 사람들이 모여 사는 곳이야.",
  },
  {
    speaker: "???",
    text: "나는 Jake.\n음? 내가 이런 얼굴에 남자 이름인 게 이상해?",
  },
  {
    speaker: "Jake",
    text: "너도 뇌에 문제가 있는 게 아니라면 더 이상 따지지 마.\n... 물론 장난이라구. 얼굴 구기지 말아 줘.",
  },
  { speaker: "Jake", text: "내 이름은 그저... 어쩌다 보니 이렇게 됐어." },
  { speaker: "Jake", text: "아 참, 내 개 이름이랑도 똑같아. 봐, 귀엽지?" },

  {
    card: {
      label: "관찰",
      text: "그가 들어 보인 오른손에는\n손가락이 네 개뿐이다.",
    },
    speaker: "Jake",
    text: "왜 그런 표정이야? 산수는 나도 할 줄 알아.",
  },
  {
    speaker: "Jake",
    text: "난 그저 먹어 보지 못한 음식을 Sally에게 주고 싶었어.\n마침 내 눈 앞에는 칼과 내 손이 보였지.",
  },
  {
    speaker: "Jake",
    text: "그때는 이웃 주민인 Sally도 집에 놀러 와 있었어.\n그녀에게도 특식을 제공해 주려 했지만, 정신을 차리고 보니 난 이미 경찰에게 연행되고 있더군.",
    choices: [
      {
        text: "안 아팠어?",
        response:
          "응. 아프지도 않구, 아주 깔끔하게 잘린 거 있지?\n이야, 진짜 전 세계에 생중계했어야 했는데. 아직도 아쉽다니까.",
        flag: ["opening", "doubt"],
      },
    ],
  },

  {
    speaker: "Julia",
    text: "Jake, 시간이 지났어요. 오늘은 상담이 있는 날이에요.",
  },
  {
    speaker: "Jake",
    text: "아, Julia 안녕!\n너도 인사해. 여기에서 가장 정상적인 친구야.",
  },
  { speaker: "Jake", text: "좀 많이 귀찮게 구는 게 단점이긴 하지만...." },
  { speaker: "Julia", text: "Jake?" },
  {
    speaker: "Jake",
    text: "젠장. 이것 봐. 또 시작이야.\n알겠어요, 알겠어. 간다구요.",
  },

  {
    chapter: "1장 · 없는 이웃",
    tone: "office",
    card: { label: "상담 기록 17-A", text: "대상자: Sally\n기록자: Julia" },
    speaker: "Julia",
    text: "자... 그러니까, 오늘은 어떤 일이 있었어요?",
  },
  {
    speaker: "Jake",
    text: "음... 새로운 친구를 사귀었어.\n근데, 얘도 Julia처럼 시시해. 따분하다고 해야 할까?",
    choices: [
      {
        text: "윽....",
        response:
          "뭐야? 같이 온 줄 몰랐네.\n근데 맞잖아! Sally도 인정하니까 아무 말 안 하는 거라구.",
      },
    ],
  },
  { speaker: "Julia", text: "음...." },
  {
    speaker: "Julia",
    text: "혹시 몸에 또 무슨 짓을 하지는 않았죠?",
    choices: [
      { text: "응.", response: "확인해 볼게요." },
      { text: "아니.", response: "확인해 볼게요." },
      { text: "비밀인데?", response: "?" },
    ],
  },
  {
    speaker: "Jake",
    text: "하하, Julia는 언제까지 나한테 속을 거야?\n보다시피 멀쩡하다구.",
  },
  { speaker: "Julia", text: ".... 그래요." },
  {
    speaker: "Julia",
    text: "오늘은 최면 상담을 진행하기로 했는데, 기억해요?",
    choices: [
      {
        text: "응.",
        response: "준비는 됐겠네요.\n그렇다면 이제 눈을 감아 주시죠.",
      },
      {
        text: "아니.",
        response: "그렇군요. 하기로 했어요.\n그러니 이제 눈을 감아 주세요.",
      },
    ],
  },

  { speaker: "Julia", text: "당신은 지금 2010년 12월 21일에 도착했나요?" },
  { speaker: "Jake", text: "...." },
  { speaker: "Julia", text: "대답은 해 주셔야 합니다." },
  { speaker: "Jake", text: ".... 네." },
  {
    speaker: "Julia",
    text: "당신의 눈 앞에는 뭐가 보이나요?",
    choices: [
      {
        text: "엄마",
        response: "당신에게 뭐라고 하고 있나요?",
        flag: ["office1", "deflect"],
      },
      {
        text: "아빠",
        response: "당신에게 뭐라고 하고 있나요?",
        flag: ["office1", "deny"],
      },
      {
        text: "두꺼운 끈",
        response: "주변 상황은 어떤가요?",
        flag: ["office1", "uncertain"],
      },
    ],
  },
  {
    speaker: "Jake",
    text: "음... 시끄럽게 말을 해요. 끈을 놓으라고 해요.\n이유는 모르겠어요. 그냥 너무 시끄러워요.",
  },
  {
    speaker: "Jake",
    text: "아... 시끄러워.... 아........ 아아아아아... 아아아아아아아아아!!!!!!!!!!!!!!!!!!!!!!!!",
  },
  {
    speaker: "Jake",
    text: "아!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11",
  },
  { speaker: "Jake", text: "..." },
  { speaker: "Jake", text: "......" },
  { speaker: "Jake", text: "엄마...? 아빠...?" },
  {
    speaker: "Julia",
    text: "... k. Jake. 눈을 떠요. 이제 괜찮아요. 크게 쉼호흡해요.",
  },
  {
    speaker: "Jake",
    text: "싫어.... 뭐야, 이거.\n너 나한테 무슨 짓을 한 거야? 너, 너....",
  },
  {
    card: { label: "기록", text: "10:43\n대상자 호흡 곤란.\n상담 중단." },
    speaker: "Jake",
    text: "꺼져, Julia\n다시는 너 따위랑 안 놀아.",
  },

  {
    speaker: "Sally",
    text: "부디 날 그렇게 보지 마, Jake....\n너에게는 정말 미안해.",
  },
  { speaker: "Sally", text: "...." },
  {
    card: { label: "Dear Jake", text: ".... Jake, 넌 글자를 모르지? 멍청아." },
  },
  { speaker: "Sally", text: "...." },
  { speaker: "Sally", text: "......." },
  {
    speaker: "Sally",
    text: ".... 마지막으로 Julia, 우리 Jake를 잘 부탁할게... 요.",
  },

  {
    chapter: "6장 · 남은 목소리",
    tone: "black",
    card: { label: "의무 기록", text: "대상자 사망 확인.\n사인 익사." },
    speaker: "Julia",
    text: ".... Sally가 죽었다고요?",
  },
  { speaker: "Julia", text: "최면 치료... 떄문인가." },
  {
    speaker: "Julia",
    text: "사실 그녀를 동정한 적은 없었다.\n아니, 오히려 범죄를 저지른 사람이라 생각했다.",
  },
  {
    speaker: "Julia",
    text: "다만... 나는 그녀의 유서를 읽어 버렸고, 나는 이제 범죄자를 동정하냐 마냐의 기로에 놓여 있다.",
  },
  {
    speaker: "Julia",
    text: "그녀는 자신의 부모를 자신의 손으로 찔렀다.\n그리고는 아무것도 모르는 아이이기 때문에, 가벼운 처벌을 받고 죗값을 치룬 기억조차 사라진 채로 살았다.",
  },
  {
    speaker: "Julia",
    text: "최면 치료를 통해 그 기억을 전부 꺼내게 된 것 같다.\n결론적으로는 자살 트리거를 제공한 셈....",
  },
  { speaker: "Julia", text: "Sally...." },

  { speaker: "Jake", text: "멍." },
  {
    speaker: "Julia",
    text: "아... Jake, 안녕. 이제 너도 돌아갈 곳이 사라졌겠구나.",
  },
  { speaker: "Jake", text: "멍." },
  {
    speaker: "Julia",
    text: "그래. 표정을 보니 못 알아 들은 것 같네. 다행인 건가.",
    choice: [
      {
        text: "Jake에게 편지를 들려 준다.",
        response: "... 괜찮은 방법이 떠올랐어.",
      },
    ],
  },

  {
    card: {
      label: "음성 복원 동의 확인",
      text: "상담 녹음 기반 합성\n용도: 개인 추모 기록 1회\n※ 현재 버전은 자막으로만 재생됩니다.",
    },
    speaker: "한서윤",
    text: "나는 상담 녹음에서 샐리의 목소리를 복원했다. 죽은 사람에게 해 줄 수 있는 일이 고작 이것뿐이라서.",
  },
  {
    tone: "morning",
    speaker: "한서윤",
    text: "보호소의 작은 면회실. 재생 버튼 앞에 제이크가 앉아 있었다.",
  },
  {
    speaker: "복원된 샐리의 목소리",
    text: "제이크에게.\n네 이름을 빌려서 미안해.",
  },
  {
    speaker: "복원된 샐리의 목소리",
    text: "너는 겁이 나도 밥을 먹었고, 비가 와도 산책을 나갔고, 내가 다른 사람이 되어도 나를 알아봤지.",
  },
  {
    speaker: "복원된 샐리의 목소리",
    text: "나는 부모님이 나를 버렸다는 이야기를 만들었어. 그들이 죽었다는 사실보다 미움받는 편이 견디기 쉬웠거든.",
  },
  {
    speaker: "복원된 샐리의 목소리",
    text: "그리고 내가 나로 살 수 없을 때 네가 되었어. 네 이름 안에서는 잠깐 용감할 수 있었어.",
  },
  {
    speaker: "복원된 샐리의 목소리",
    text: "이건 용서를 구하는 편지가 아니야. 네가 나를 용서할 수 있는지도 모르겠어. 그저 마지막만큼은 제대로 말하고 싶었어.",
  },
  { speaker: "복원된 샐리의 목소리", text: "너는 제이크고, 나는 샐리야." },
  {
    speaker: "복원된 샐리의 목소리",
    text: "내가 없어도 네 이름으로 오래 살아 줘.",
  },
  { speaker: "복원된 샐리의 목소리", text: "안녕, 제이크." },
  {
    speaker: "한서윤",
    text: "녹음이 끝난 뒤에도 제이크는 한동안 스피커를 바라보았다.",
  },
  {
    speaker: "한서윤",
    text: "나는 그 기다림을 동정이라고 부르지 않기로 했다. 내게는 그럴 자격이 없었다.",
  },
  { speaker: "한서윤", text: "대신 샐리의 기록 첫 줄을 고쳤다." },
  {
    card: {
      label: "상담 기록 17-A · 정정",
      text: "대상자: 샐리 정\n그는 끝까지 자기 이름을 되찾으려 했다.",
    },
    speaker: "",
    text: "",
  },
  {
    chapter: "에필로그",
    tone: "black",
    card: { label: "DEAR JAKE", text: "끝\n\n플레이해 주셔서 감사합니다." },
    speaker: "",
    text: "",
    ending: true,
  },
];

const ui = {
  app: document.querySelector("#app"),
  title: document.querySelector("#title-screen"),
  game: document.querySelector("#game-screen"),
  newGame: document.querySelector("#new-game"),
  continueGame: document.querySelector("#continue-game"),
  chapter: document.querySelector("#chapter-label"),
  dialogueBox: document.querySelector("#dialogue-box"),
  speaker: document.querySelector("#speaker"),
  dialogue: document.querySelector("#dialogue"),
  choices: document.querySelector("#choices"),
  sceneCard: document.querySelector("#scene-card"),
  sceneCardLabel: document.querySelector("#scene-card-label"),
  sceneCardText: document.querySelector("#scene-card-text"),
  progress: document.querySelector("#progress-bar"),
  openLog: document.querySelector("#open-log"),
  openSettings: document.querySelector("#open-settings"),
  logPanel: document.querySelector("#log-panel"),
  logList: document.querySelector("#log-list"),
  settingsPanel: document.querySelector("#settings-panel"),
  speed: document.querySelector("#text-speed"),
  autoPlay: document.querySelector("#auto-play"),
  fullscreen: document.querySelector("#fullscreen"),
  restart: document.querySelector("#restart"),
  backToTitle: document.querySelector("#back-to-title"),
  scrim: document.querySelector("#scrim"),
  restartDialog: document.querySelector("#restart-dialog"),
  cancelRestart: document.querySelector("#cancel-restart"),
  confirmRestart: document.querySelector("#confirm-restart"),
};

const defaultState = () => ({
  index: 0,
  chapter: "프롤로그",
  history: [],
  flags: {},
  choiceResponse: null,
  finished: false,
});

let state = loadJson(SAVE_KEY, null) || defaultState();
let settings = loadJson(SETTINGS_KEY, { speed: 22, auto: false });
let typingTimer = null;
let autoTimer = null;
let fullText = "";
let isTyping = false;
let choiceLocked = false;

function loadJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function hasSave() {
  return Boolean(localStorage.getItem(SAVE_KEY)) && state.index < story.length;
}

function showTitle() {
  clearTimers();
  closePanels();
  ui.game.hidden = true;
  ui.title.hidden = false;
  ui.continueGame.hidden = !hasSave();
  ui.continueGame.textContent = state.finished
    ? "마지막 장면 보기"
    : "이어하기";
}

function startNewGame() {
  state = defaultState();
  saveState();
  startGame();
}

function startGame() {
  ui.title.hidden = true;
  ui.game.hidden = false;
  closePanels();
  renderNode();
}

function clearTimers() {
  window.clearInterval(typingTimer);
  window.clearTimeout(autoTimer);
  typingTimer = null;
  autoTimer = null;
}

function renderNode() {
  clearTimers();
  choiceLocked = false;
  const node = story[state.index];
  if (!node) {
    state.finished = true;
    saveState();
    showTitle();
    return;
  }

  if (node.chapter) state.chapter = node.chapter;
  if (node.tone) ui.app.dataset.tone = node.tone;
  ui.chapter.textContent = state.chapter;
  ui.progress.style.width = `${Math.max(1, ((state.index + 1) / story.length) * 100)}%`;

  if (node.card) {
    ui.sceneCard.hidden = false;
    ui.sceneCardLabel.textContent = node.card.label;
    ui.sceneCardText.textContent = node.card.text;
  } else {
    ui.sceneCard.hidden = true;
  }

  const restoredChoice =
    state.choiceResponse?.index === state.index ? state.choiceResponse : null;
  ui.speaker.textContent = restoredChoice?.speaker || node.speaker || "";
  fullText = restoredChoice?.text ?? node.text ?? "";
  ui.dialogue.textContent = "";
  ui.dialogueBox.classList.remove("ready");
  ui.dialogueBox.disabled = false;
  ui.choices.hidden = true;
  ui.choices.replaceChildren();

  addHistory(node);
  typeText(fullText, () => {
    if (node.choices && !restoredChoice) showChoices(node.choices);
    else {
      ui.dialogueBox.classList.add("ready");
      scheduleAuto();
    }
  });
  saveState();
}

function addHistory(node) {
  if (!node.text || state.history.some((entry) => entry.index === state.index))
    return;
  state.history.push({
    index: state.index,
    speaker: node.speaker || "서술",
    text: node.text,
  });
  if (state.history.length > 160) state.history.shift();
}

function typeText(text, onComplete) {
  const delay = Number(settings.speed);
  if (
    !text ||
    delay === 0 ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    ui.dialogue.textContent = text;
    isTyping = false;
    onComplete();
    return;
  }

  isTyping = true;
  let cursor = 0;
  typingTimer = window.setInterval(() => {
    cursor += 1;
    ui.dialogue.textContent = text.slice(0, cursor);
    if (cursor >= text.length) {
      window.clearInterval(typingTimer);
      typingTimer = null;
      isTyping = false;
      onComplete();
    }
  }, delay);
}

function revealText() {
  if (!isTyping) return false;
  window.clearInterval(typingTimer);
  typingTimer = null;
  isTyping = false;
  ui.dialogue.textContent = fullText;
  const node = story[state.index];
  const restoredChoice = state.choiceResponse?.index === state.index;
  if (node.choices && !restoredChoice) showChoices(node.choices);
  else {
    ui.dialogueBox.classList.add("ready");
    scheduleAuto();
  }
  return true;
}

function showChoices(choices) {
  choiceLocked = true;
  ui.dialogueBox.disabled = true;
  ui.choices.hidden = false;
  choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    const marker = document.createElement("span");
    marker.className = "choice-index";
    marker.textContent = String(index + 1);
    button.append(marker, document.createTextNode(choice.text));
    button.addEventListener("click", () => selectChoice(choice));
    ui.choices.append(button);
  });
}

function selectChoice(choice) {
  if (!choiceLocked) return;
  choiceLocked = false;
  const [group, value] = choice.flag || [];
  if (group) state.flags[group] = value;
  state.choiceResponse = {
    index: state.index,
    speaker: story[state.index].speaker || "",
    text: choice.response,
  };
  state.history.push({
    index: state.index + 0.1,
    speaker: "선택",
    text: choice.text,
  });
  ui.choices.hidden = true;
  ui.choices.replaceChildren();
  ui.dialogueBox.disabled = false;
  ui.speaker.textContent = story[state.index].speaker || "";
  fullText = choice.response;
  ui.dialogue.textContent = "";
  typeText(fullText, () => {
    state.history.push({
      index: state.index + 0.2,
      speaker: story[state.index].speaker || "서술",
      text: choice.response,
    });
    ui.dialogueBox.classList.add("ready");
    scheduleAuto();
    saveState();
  });
}

function advance() {
  if (isTyping && revealText()) return;
  if (choiceLocked || isPanelOpen()) return;
  const node = story[state.index];
  if (node?.ending) {
    state.finished = true;
    saveState();
    ui.dialogueBox.classList.remove("ready");
    window.setTimeout(showTitle, 1100);
    return;
  }
  state.choiceResponse = null;
  state.index += 1;
  renderNode();
}

function scheduleAuto() {
  if (!settings.auto || choiceLocked || story[state.index]?.ending) return;
  const readingTime = Math.min(6000, Math.max(1800, fullText.length * 55));
  autoTimer = window.setTimeout(advance, readingTime);
}

function renderLog() {
  ui.logList.replaceChildren();
  if (!state.history.length) {
    const empty = document.createElement("p");
    empty.className = "empty-log";
    empty.textContent = "아직 기록된 대사가 없습니다.";
    ui.logList.append(empty);
    return;
  }
  const list = document.createElement("dl");
  state.history.forEach((entry) => {
    const wrapper = document.createElement("div");
    wrapper.className = "log-entry";
    const term = document.createElement("dt");
    term.textContent = entry.speaker;
    const detail = document.createElement("dd");
    detail.textContent = entry.text;
    wrapper.append(term, detail);
    list.append(wrapper);
  });
  ui.logList.append(list);
  ui.logList.scrollTop = ui.logList.scrollHeight;
}

function openPanel(panel) {
  clearTimers();
  ui.scrim.hidden = false;
  panel.hidden = false;
  panel.querySelector("button, select, input")?.focus();
}

function closePanels() {
  ui.logPanel.hidden = true;
  ui.settingsPanel.hidden = true;
  ui.restartDialog.hidden = true;
  ui.scrim.hidden = true;
}

function isPanelOpen() {
  return (
    !ui.logPanel.hidden || !ui.settingsPanel.hidden || !ui.restartDialog.hidden
  );
}

function requestRestart() {
  ui.settingsPanel.hidden = true;
  ui.restartDialog.hidden = false;
  ui.scrim.hidden = false;
  ui.cancelRestart.focus();
}

function toggleFullscreen() {
  if (!document.fullscreenElement)
    document.documentElement.requestFullscreen?.();
  else document.exitFullscreen?.();
}

ui.newGame.addEventListener("click", () => {
  if (hasSave() && !state.finished) {
    ui.title.hidden = true;
    ui.game.hidden = false;
    requestRestart();
  } else startNewGame();
});
ui.continueGame.addEventListener("click", startGame);
ui.dialogueBox.addEventListener("click", advance);
ui.openLog.addEventListener("click", () => {
  renderLog();
  openPanel(ui.logPanel);
});
ui.openSettings.addEventListener("click", () => openPanel(ui.settingsPanel));
ui.scrim.addEventListener("click", closePanels);
document
  .querySelectorAll("[data-close-panel]")
  .forEach((button) => button.addEventListener("click", closePanels));
ui.speed.addEventListener("change", () => {
  settings.speed = Number(ui.speed.value);
  saveSettings();
});
ui.autoPlay.addEventListener("change", () => {
  settings.auto = ui.autoPlay.checked;
  saveSettings();
  if (settings.auto && !isTyping && !choiceLocked) scheduleAuto();
  else window.clearTimeout(autoTimer);
});
ui.fullscreen.addEventListener("click", toggleFullscreen);
ui.restart.addEventListener("click", requestRestart);
ui.cancelRestart.addEventListener("click", () => {
  ui.restartDialog.hidden = true;
  ui.scrim.hidden = true;
});
ui.confirmRestart.addEventListener("click", startNewGame);
ui.backToTitle.addEventListener("click", showTitle);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (isPanelOpen()) closePanels();
    else openPanel(ui.settingsPanel);
    return;
  }
  if (isPanelOpen() || ui.game.hidden) return;
  if (choiceLocked && /^[1-9]$/.test(event.key)) {
    ui.choices.querySelectorAll("button")[Number(event.key) - 1]?.click();
    return;
  }
  if ((event.key === "Enter" || event.key === " ") && !choiceLocked) {
    event.preventDefault();
    advance();
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) clearTimers();
});

ui.speed.value = String(settings.speed);
ui.autoPlay.checked = settings.auto;
showTitle();
