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
  agenda: ["порядок денний"],
  agent: ["агент", "діюча сила", "кабзан", "посередник", "представник", "речовина", "розвідник", "середовище", "фактор"],
  aggressive: ["агресивний", "зачіпний", "напористий", "активний", "зухвалий", "настирливий", "дійовий", "напасний", "наступаючий", "енергічний", "наполеглевий", "завойовничий", "задирливий"],
  ago: ["тому"],
  agree: ["згоден", "відповідати", "годити", "домовитися", "домовлятися", "бути по душі", "давати згоду", "згоджуватися", "бути корисним", "ладити", "погоджуватися", "умовляти"],
  agreement: ["угода", "договір", "домовленість", "зговорини", "згода", "злагода", "змова", "компроміс", "конвенція", "контракт", "намова", "поразуміння"],
  ahead: ["попереду", "випережаючий", "прогресуючий", "попереду", "спереду", "уперед"],
  aid: ["допомога", "підмога", "сприяння", "поміч", "підтримка", "помічник", "допомогати", "подавати допомогу", "посилкувати"],
  aim: ["мета", "задум", "мішень", "намір", "ціль", "зорення", "добиватися", "кидати", "мірити", "наводити", "націлювати"],
  air: ["повітря", "авіаційний", "льотний", "пневматичний", "атмосфера", "ефір", "нута", "обстановка", "подув", "вентилювати", "провітрювати"],
  aircraft: ["літак", "літальний", "авіація", "літальний апарат", "літаки"],
  airline: ["авіакомпанія", "повітряна траса"],
  airport: ["аеропорт"],
  alarm: ["тривога", "сполошний", "крик", "паніка", "тривожна сигналізація", "страх", "сум'яття", "тривога", "шум", "гуркіт", "метушня"],
  album: ["альбом"],
  alcohol: ["алкоголь", "есенція", "квінтесенція", "алкогольні напої", "спирт", "сутність"],
  alcoholic: ["алкоголік", "спиртний", "заспиртований", "пияка"],
  alive: ["живий", "бадьорий", "діючий", "жвавий", "живцем", "заповнений", "існуючий", "продуктовий", "сприятливий", "чуйний"],
  all: ["все", "будь-який", "всілякий", "усякий", "цілий", "який-небудь", "всякий", "найбільший", "повністю", "цілком"],
  "all-right": ["все в порядку", "гаразд"],
  allow: ["дозволяють", "вважати", "видавати", "визнавати", "враховувати", "давати", "давати дозвіл", "дозволяти", "допускати", "робити знижку", "надавати", "погоджуватися"],
  almost: ["майже", "мало не"],
  alone: ["один", "поодинці", "сам", "самітний", "самотній", "одинокий", "виключно", "одиноко", "само", "тільки", "єдино", "сама", "лише", "самі"],
  along: ["разом", "вздовж", "разом з", "уперед", "далі", "уже", "з"],
  already: ["вже", "раніше", "уже"],
  also: ["також", "теж", "до того ж"],
  alter: ["змінювати", "видозмінювати", "відмінити", "змінити", "змінювати", "змінюватися", "мінятися", "перемінити"],
  alternative: ["альтернатива", "змінний", "альтернативний", "вибір", "дублет"],
  although: ["хоча", "коли б навіть", "незважаючи на те, що", "хоч"],
  always: ["завжди", "вічно", "за всіх обставин", "завжди", "постійно"],
  amazed: ["вражений", "здивований", "уражений"],
  amazing: ["вражений", "дивний", "дивовижний", "разючий"],
  ambition: ["честолюбство", "амбіція", "мета", "мрія", "честолюбство", "владолюбство", "домагатися"],
  among: ["серед", "в епоху", "з", "крізь", "між", "поміж", "посеред", "проміж", "разом", "серед", "у", "через"],
  amount: ["сума", "вага", "кількість", "важливість", "обсяг", "підсумок", "досягати", "складати", "становити"],
  analysis: ["аналіз", "алгебраїчний аналіз", "аналітичний метод", "докладний розгляд", "дослідження", "проба", "психоаналіз", "розбір", "розклад"],
  analyze: ["аналізувати", "досліджувати", "розбирати", "докладно розбирати", "розкладати"],
  ancient: ["давній", "античний", "колишній", "старезний", "стародавній", "ветхий", "минулий", "старий", "старомодний", "давній", "древній", "звічний", "здавній"],
  and: ["і", "а", "же", "й", "невже", "проте", "та"],
  anger: ["гнів", "лють", "роздратування", "гнівити", "сердити", "злити", "злитися", "лютити"],
  angel: ["ангел"],
  angle: ["кут", "кутовий", "вудіння", "косинець", "куток", "підхід", "ситуація", "куточок", "погляд", "стан"],
  angry: ["злий", "гнівний", "запалений", "лютий", "почервонілий", "роздратований", "сердитий"],
  animal: ["тварина", "животний", "тваринний", "звір"],
  ankle: ["щиколотка", "кісточка"],
  anniversary: ["ювілей", "річний", "щорічний", "річниця", "роковини"],
  announce: ["оголосити", "докладати", "доповідати", "заявляти", "зголошувати", "наголосити", "наголошувати", "оголошувати", "сповіщати"],
  announcement: ["оголошення", "анонс", "відозва", "об'ява", "повідомлення", "сповіщення"],
  annoy: ["дратувати", "довадити", "докучати", "досаждати", "дратувати", "морочити", "набридати", "нагабати", "надокучити", "назолити", "налазити", "натирати", "непокоїти", "сердити", "тривожити", "турбувати"],
  annoyed: ["роздратований", "невдоволений", "роздратований", "розсерджений"],
  annoying: ["дратує", "докусливий", "досадний", "дошкульний", "дратівний", "набридливий", "навісний", "навратливий", "налазливий", "настирливий", "прикрий"],
  annual: ["річний", "однорічний", "щорічний", "річний", "однолітник", "річник"],
  another: ["інший", "ще", "відмінний", "інакший", "несхожий", "подібний", "другий", "інший", "новий"],
  answer: ["відповідь", "вирішення", "запаречення", "захист", "рішення", "розв'язання", "розгадка", "виконати", "відзиватися", "відповісти", "заперечувати"],
  anxious: ["тривожний", "заклопотаний", "занепокоєний", "клопітний", "неспокійний", "прагнуючий", "стривожений", "стурбований", "тривожний"],
  any: ["будь-який", "абиякий", "всякий", "ніякий", "усякий", "який-небудь", "будь-який", "взагалі", "загалом"],
  anybody: ["будь-хто", "незначна людина", "важна особа", "ніхто", "усякий", "хто-небудь", "будь-який", "всякий", "хтось", "кожний"],
  anymore: ["більше"],
  anyone: ["хто завгодно", "будь-кто", "будь-який", "всякий", "кожний", "ніхто", "усякий", "хто-небудь", "хтось"],
  anything: ["що завгодно", "будь-що", "леда-що", "якоюсь-мірою", "ніщо", "скільки-небудь", "усе", "що-небудь", "щось"],
  anyway: ["все одно", "абияк", "у всякому разі", "що б там не було", "як-небудь"],
  anywhere: ["де завгодно", "всюди", "де-небудь", "десь", "інкуди", "куди-небудь", "кудись", "якоюсь мірою", "нікуди", "скрізь", "усюди"],
  apart: ["окремо", "не віддалі", "відособлено", "зокрема", "наодлуці", "нарізно", "наубочі", "осторонь", "роздільно", "на частини", "на шматки"],
}

const btnStart = document.querySelector('#start');
const wordsGrid = document.querySelector('#words');
const wordsArr = Object.keys(words);
let wordsForLesson = [];

btnStart.addEventListener('click', lesson)

function lesson() {
  wordsGrid.textContent = '';
  const btnStartLesson = initElement('button', 'words__start-btn', 'Старт')
  btnStartLesson.addEventListener('click', () => {
    firstPartOfLesson(wordsForLesson[0]);
  });
  let tenWordForLesson = [];
  checkLength(tenWordForLesson)
  wordsForLesson = [...tenWordForLesson];
  wordsForLesson.forEach(word => wordRender(word))
  if (!document.querySelector('.words__start-btn')) {
    document.body.append(btnStartLesson)
  }
}

function wordRender(word) {
  const inner = initElement('div', 'word')
  const title = initElement('h3', 'word__title', word.toUpperCase())
  const btn = initElement('button', 'word__delete', "заменить")
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
  const text = initElement('span', 'first-lesson__text', 'Варіант перекладу:');
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
  const title = initElement('h2', 'second-lesson__task', 'Выберите правильные ответ')
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
  const title = initElement('h2', 'pazle__title', 'Збери слово')
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