const words = {
  abandon: ["невимушеність", "розв'язність", "нестриманість"],
  ability: ["здатність", "здібність", "обдарованість", "платоспроможність", "правоздатність", "спритність", "спроможність", "талант", "хист"],
  able: ["вдатний", "вправний", "зграбний", "здатний", "здібний", "спроможний", "умілий"],
  about: ["біля", "у зворотному напрямі", "навкруги", "поблизу", "приблизно", "скрізь", "щось", "близько"],
  above: ["вгорі", "зверх", "раніше", "вгору", "звиш", "угорі", "вище", "згори", "наверх"],
  abroad: ["не вдома", "всюди", "поза домівкою", "зовні", "за кордоном", "усюди", "широко"],
  absolute: ["абсолютний", "бездомішковий", "безсумнівний", "дійсний", "максимальний", "необмежений", "повний", "самовладний", "цілковитий", "чистий"],
  absolutely: ["абсолютно", "безумовно", "звичайно", "згола", "незалежно", "повністю", "самостійно", "цілком"],
  academic: ["академічний", "канонічний", "навчальний", "теоретичний", "традиційний", "університетський"],
  accept: ["визнавати", "допускати", "миритися", "погоджуватися", "приймати", "припускати"],
  acceptable: ["бажаний", "жаданий", "підходящий", "підхожий", "приємний", "прийнятний"],
  access: ["доступ", "зростання", "припадок", "вибірка інформації", "приріст", "наближення", "приступ", "підхід", "прохід"],
  accident: ["аварійний", "аварія", "випадок", "нещасний випадок", "збуття", "казус", "катастрофа", "несподіванка"],
  accompany: ["акомпанувати", "проводжати", "проводити", "супроводжувати", "супроводити"],
  according: ["гармонійний", "згідний"],
  account: ["лічильник", "важливість", "вигода", "виказ", "звідомлення", "значення", "оцінка", "виклад", "причина", "звіт", "користь", "перелік"],
  accurate: ["невірник", "докладний", "правильний", "точний"],
  accuse: ["звинувачувати", "викривати", "винити", "завиняти", "заскаржувати", "звинувачувати", "обвинувачувати", "розкривати"],
  achieve: ["досягти", "успішно виконувати", "відбувати", "добиватися", "достигати", "досягати", "досягти"],
  achievement: ["досягнення", "виконання", "досягнення", "завершення", "здобуток", "перемога", "подвиг", "успіх"],
  acknowledge: ["визнати", "виявляти вдячність", "визнавати", "облікувати", "підтверджувати", "висловлювати подяку", "припускати", "усвідомлювати"],
  acquire: ["придбати", "добувати", "досягати", "досягти", "заводити", "здобувати", "набувати", "надбавати", "надбати", "наживати", "напахати", "одержувати", "придбати"],
  across: ["поперек", "на той бік", "навхрест", "упоперек", "хрестом", "впоперек", "наперекіс", "завширшки", "напівперек", "паралельно"],
  act: ["акт", "вчинок", "документ", "постанова", "процес", "діло", "закон", "рішеня", "дія", "справа"],
  action: ["дію", "акція", "судовий процес", "бій", "вплив", "вчинок", "діло", "дія", "діяльність", "діяння", "механізм", "позов", "робота"],
  active: ["активний", "дієвий", "дійовий", "дійсний", "діловитий", "діячий", "діяльність", "енергічний"],
  activity: ["діяльність", "активність", "дії"],
  actor: ["актор", "дійова особа", "діяч"],
  actress: ["актриса"],
  actual: ["фактичний", "дійсний", "поточний", "справжній", "сучасний"],
  actually: ["насправді", "дійсно", "зараз", "насправді", "нині", "справді", "фактично"],
  ad: ["оголошення"],
  adapt: ["адаптуватися", "модлувати", "переробляти", "приганяти", "приладжувати", "пристосовувати"],
  add: ["додати", "добавляти", "додавати", "домішувати", "набавляти", "надавати", "підкидати", "підкладати", "підливати", "приєднувати"],
  addition: ["додаток", "додавання", "доклад", "домішка", "доповнення", "надаток", "поповнення", "приписка", "присадка"],
  additional: ["додатковий"],
  address: ["адреса", "виступ", "вправність", "залицяння", "майстерність", "промова", "звернення"],
  administration: ["адміністрування", "адміністрація", "дирекція", "подання допомоги", "застосування", "керування", "міністерство"],
  admire: ["захоплюватися", "бажати", "захоплюватися", "милуватися", "дуже хотіти"],
  admit: ["визнати", "визнавати", "вміщати", "вміщувати", "впускати"],
  adopt: ["прийняти", "вибирати", "добирати", "запозичувати", "засвоювати", "переймати", "приймати"],
  adult: ["дорослий", "зрілий", "для дорослих", "повнолітні"],
  advance: ["заздалегідь", "аванс", "загравання", "наступ", "підвищення", "прогрес", "просування уперед", "успіх"],
  advanced: ["просунутий", "передовий", "прогресивний", "старезний", "старий"],
  advantage: ["перевага", "вигода", "плюс", "визиск", "користь"],
  adventure: ["пригода", "авантюрний", "пригодницький", "авартюра", "приключка", "випадок", "ризик"],
  advertise: ["рекламувати", "афішувати", "давати оголошення", "оповіщати", "повідомляти", "попереджати"],
  advertisement: ["реклама", "анонс", "звістка", "оголощення", "оповіщення", "реклама"],
  advertising: ["реклама", "рекламний", "рекламна справа", "рекламування"],
  advice: ["поради", "думка", "застерігання", "інформація", "консультація", "повідомлення", "рада", "судження"],
  advise: ["порадити", "застерігати", "повідомляти", "радити", "сповіщати", "консультувати", "нараджувати"],
  affair: ["роман", "бій", "діло", "історія", "справа", "сутичка", "штука"],
  affect: ["впливати", "вадити", "вдавати", "діяти", "зворушувати", "потребувати", "прагнути"],
  afford: ["дозволити собі", "давати", "мати змогу", "надавати", "бути спроможним"],
  afraid: ["боїться", "зляканний", "наляканний"],
  after: ["після", "дальший", "задній", "наступний", "згодом", "пізніше", "позаду", "потім", "після"],
  afternoon: ["полудень", "денний", "післяобідній"],
  afterward: ["потім", "згодом", "пізніше"],
  again: ["знову", "вдруге", "знов", "часто", "ще раз", "крім того", "з другого боку"],
  against: ["проти", "біля", "всупереч", "від", "до", "з", "на", "навпроти", "напроти", "поруч", "про", "проти"],
  age: ["вік", "літа", "старість", "час", "доба", "період", "епоха", "повноліття", "старити", "старіти", "визрівати", "витримувати"],
  agency: ["агентство", "агенція", "засіб", "орган", "сила", "посередництво", "сприяння", "управління", "фактор"],
}

const btnStart = document.querySelector('#start');
const wordsGrid = document.querySelector('#words');
const wordsArr = Object.keys(words);
let wordsForLesson = [];

btnStart.addEventListener('click', lesson)

function lesson() {
  wordsGrid.textContent = '';
  const btnStartLesson = initElement('button', 'words__start-btn', 'Start lesson')
  btnStartLesson.addEventListener('click', () => {
    firstPartOfLesson(wordsForLesson[0]);
  });
  let tenWordForLesson = [];
  checkLength(tenWordForLesson)
  wordsForLesson = [...tenWordForLesson];
  wordsForLesson.forEach(word => wordRender(word))
  document.body.append(btnStartLesson)
}

function wordRender(word) {
  const inner = initElement('div', 'word')
  const title = initElement('h3', 'word__title', word.toUpperCase())
  const btn = initElement('button', 'word__delete', "I know this word")
  inner.setAttribute('data-word', word)
  btn.addEventListener('click', iKnowThisWord);
  inner.append(title, btn)
  wordsGrid.append(inner);
}

function initElement(tag, className, content) {
  const elem = document.createElement(tag);
  elem.classList.add(className);
  if (content) {
    elem.innerHTML = content;
  }
  return elem;
}

function iKnowThisWord(e) {
  const target = e.target;
  const parent = target.closest('.word');
  const wordForDelete = parent.getAttribute('data-word')
  wordsForLesson.splice(wordsForLesson.indexOf(wordForDelete), 1)
  checkLength(wordsForLesson)
  wordsGrid.textContent = '';
  wordsForLesson.forEach(word => wordRender(word))
}


function checkLength(arr) {
  if (arr.length < 10) {
    addWordInArr(arr)
    checkLength(arr)
  }
  return arr
}

function addWordInArr(arr) {
  let randomInt = Math.floor(Math.random() * (wordsArr.length - 0)) + 0;
  if (!arr.includes(wordsArr[randomInt])) {
    arr.push(wordsArr[randomInt])
  } else {
    addWordInArr(arr)
  }
  return arr
}

function firstPartOfLesson(word) {
  document.body.innerHTML = ''
  PartDecore('1 part');
  const indexWordNow = wordsForLesson.indexOf(word)
  const firstLesson = initElement('div', 'first-lesson');
  const title = initElement('h3', 'first-lesson__title', word);
  const inner = initElement('div', 'first-lesson__inner');
  const text = initElement('span', 'first-lesson__text', 'Варианты перевода:');
  const list = initElement('ul', 'first-lesson__list');
  const btnInner = initElement('div', 'first-lesson__inner-btn');
  const prev = initElement('button', 'first-lesson__prev', 'prev');
  const next = initElement('button', 'first-lesson__next', 'next');
  words[word].forEach(word => {
    list.innerHTML += `<li class="word__item">${word}</li>`
  })
  inner.append(text, list)
  firstLesson.append(title, inner)
  document.body.append(firstLesson);
  btnInner.append(prev, next)
  document.body.append(btnInner);
  prev.addEventListener('click', () => {
    if (indexWordNow > 0) {
      firstPartOfLesson(wordsForLesson[indexWordNow - 1])
    }
  })
  next.addEventListener('click', () => {
    if (indexWordNow <= 8) {
      firstPartOfLesson(wordsForLesson[indexWordNow + 1])
    } else {
      secondPartStart(wordsForLesson[0])
    }
  })
}

function secondPartStart(word) {
  document.body.innerHTML = ''
  PartDecore('2 part')
  const inner = initElement('div', 'second-lesson__inner');
  const title = initElement('h2', 'second-lesson__task', 'Виберіть правильну відповідь')
  const task = initElement('div', 'task', )
  const translateList = initElement('ul', 'task__translate', )
  words[word].forEach(word => {
    translateList.innerHTML += `<li class="task__item">${word}</li>`
  })
  const wordVariant = initElement('ul', 'task__variant');
  wordVariant.addEventListener('click', (e) => {
    target = e.target;
    if (target.classList.contains('task__choice-variant') && target.textContent === word) {
      const indexWordNow = wordsForLesson.indexOf(word)
      if (indexWordNow !== 9) {
        secondPartStart(wordsForLesson[indexWordNow + 1])
      } else {
        thirdPartSrart(wordsForLesson[0]);
      }
    } else {
      showModal('Неправильный варіант')
    }
  })
  const trueVariant = initElement('li', 'task__choice-variant', word)
  const falseWord = randomWord(word);
  const falseVariant = initElement('li', 'task__choice-variant', falseWord);
  if (Math.floor(Math.random() * (wordsForLesson.length - 0)) + 0 < 5) {
    wordVariant.append(trueVariant, falseVariant)
  } else {
    wordVariant.append(falseVariant, trueVariant)
  }

  task.append(translateList, wordVariant)
  inner.append(title, task)
  document.body.append(inner)
}

function randomWord(word) {
  let randomInt = Math.floor(Math.random() * ((wordsForLesson.length - 1) - 0)) + 0;
  if (word !== wordsForLesson[randomInt]) {
    return wordsForLesson[randomInt]
  } else {
    return randomWord(word)
  }
}

function thirdPartSrart(word) {
  document.body.innerHTML = ''
  PartDecore('3 part')
  const wordInArr = word.split('');
  wordInArr.sort(() => Math.random() - 0.5);
  const inner = initElement('div', 'pazle')
  const title = initElement('h2', 'pazle__title', 'Собери слово')
  const list = initElement('ul', 'pazle__list')
  const btns = initElement('div', 'pazle__btns')
  const reset = initElement('button', 'pazle__btn', 'reset')
  const prompt = initElement('button', 'pazle__btn', 'prompt')
  const itemForWord = initElement('div', 'pazle__word-items')
  const itemsForChoice = initElement('ul', 'pazle__items-choice')
  reset.addEventListener('click', () => {
    myWord = '';
    itemForWord.innerHTML = ''
  })
  prompt.addEventListener('click', () => {
    showModal('Подсказка', word)
  })
  let myWord = '';
  btns.append(reset, prompt);
  words[word].forEach(word => {
    list.innerHTML += `<li class="pazle__item">${word}</li>`
  })
  itemsForChoice.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('pazle__item-choice')) {
      myWord += target.textContent;
      const myItem = initElement('li', 'pazle__word-item', target.textContent);
      itemForWord.append(myItem)
      if (myWord === word) {
        const indexWordNow = wordsForLesson.indexOf(word)
        if (indexWordNow < 9) {
          thirdPartSrart(wordsForLesson[indexWordNow + 1])
        } else {
          showModal("Вітаємо!! Ви вивчили 10 слів", ' ', 'true')
        }
      }
    }
  })
  wordInArr.forEach(item => {
    const choiceItem = initElement('li', 'pazle__item-choice', item);
    itemsForChoice.append(choiceItem)
  })
  inner.append(title, list, itemForWord, itemsForChoice, btns);
  document.body.append(inner);
}

function PartDecore(part) {
  const header = initElement('header', 'header', part);
  document.body.append(header);
}

function showModal(title, word, reset) {
  const modal = initElement('div', 'modal')
  const modalInner = initElement('div', 'modal__inner')
  const titleRender = initElement('h3', 'modal__title', title)
  let wordRender;
  if (word != '') {
    wordRender = initElement('span', 'modal__text', word)
  }
  modalInner.append(titleRender, wordRender);
  modal.append(modalInner)
  document.body.append(modal)
  setTimeout(() => {
    modal.remove();
  }, 2000)
  if (reset == 'true') {
    setTimeout(() => {
      window.location = "";
    }, 2000)

  }
};