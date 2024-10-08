export const data = {
  blocks: [
    "БЛОК 1 - УВЕРЕННОСТЬ",
    "БЛОК 2 - КОММУНИКАЦИЯ",
    "БЛОК  3 - СЦЕНА",
    "БЛОК 4 - ГОЛОC",
    "БЛОК 5 - СЛОВАРНЫЙ ЗАПАС",
  ],
  questions: [
    {
      question:
        "Представьте: всё внимание в незнакомой компании переключилось на вас. Как вы себя чувствуете?",
      block: 1,
      answers: [
        "Уверенно, знаю, как сразу влюбить в себя людей и какую шутку вставить.",
        "Немного нервничаю, но начинаю раскрываться.",
        "Чуть ли не впадаю в ступор, ощущаю сильное напряжение и мандраж.",
      ],
    },
    {
      question:
        "Вас попросили выступить с речью на важном мероприятии. Ваша первая реакция:",
      block: 1,
      answers: [
        "Воодушевлюсь, сразу начну готовиться и продумывать выступление.",
        "Нехотя соглашусь, но это выступление будет маячить каторгой для меня, буду оттягивать подготовку.",
        "Откажусь, потому что не хочу стыдиться.",
      ],
    },
    {
      question:
        "Если вы находитесь в новой для себя обстановке и/или компании, то чаще всего принимаете позу:",
      block: 1,
      answers: ["/1.png", "/2.png", "/3.png"],
    },
    {
      question:
        "Вы стали участником спора с более авторитетным лицом. Как вы, скорее всего, поведёте себя в такой ситуации?",
      block: 2,
      answers: [
        "Быстро найду нужные аргументы и расположу к себе даже оппонентов.",
        "Скорее всего, буду очень эмоционально что-то доказывать.",
        "Почувствую, что меня «задавят» авторитетом, скорее не найду нужных слов в моменте, а лежа в кровати ночью подумаю: «Надо было сказать так…»",
      ],
    },
    {
      question:
        "Вам нужно представиться так, чтобы зацепить и запомниться. Вы...",
      block: 2,
      answers: [
        "Знаю, как выгодно преподнести факты из своей биографии, понимаю, по какой структуре лучше себя презентовать.",
        "Я, в принципе, могу рассказать о себе, но вот запомниться — задачка, которую я пока не решил.",
        "Испытаю сложность даже просто с тем, чтобы нормально рассказать о себе. 100% буду недоволен потом собой.",
      ],
    },
    {
      question:
        "Когда вы приходите в новое место, сколько полезных контактов вы забираете с собой?",
      block: 2,
      answers: ["4-5 и больше.", "2-3.", "0 или 1."],
    },
    {
      question:
        "На вас направляют камеру и предлагают микрофон на мероприятии. Вы...",
      block: 3,
      answers: [
        "С удовольствием беру микрофон и начинаю разговаривать на любую тему.",
        "Напрягаюсь, неохотно беру микрофон и жду подвоха.",
        "От этой мысли бросает в жар. Категорически отказываюсь.",
      ],
    },
    {
      question:
        "Спикер со сцены просит вас выйти из зала и подняться к нему, чтобы сказать пару слов. Как вы расположитесь на сцене?",
      block: 3,
      answers: [
        "Встану по центру впереди спикера.",
        "Встану по центру на уровне со спикером.",
        "Встану прямо рядом, сбоку от спикера.",
      ],
    },
    {
      question:
        "Когда вы представляете, что стоите в свете прожектора перед огромным залом людей, вы...",
      block: 3,
      answers: [
        "Наслаждаетесь моментом, чувствуете свой золотой час.",
        "Находитесь в замешательстве, вроде «и хочется, и колется».",
        "Такое даже представить сложно, в фантазиях уже ловите приступ паники.",
      ],
    },
    {
      question: "Как вы относитесь к своему голосу?",
      block: 4,
      answers: [
        "Очень нравится, считаю его приятным и выразительным.",
        "Нейтрально, однозначно есть куда расти.",
        "Если честно, не принимаю свой голос, особенно тяжело слушать себя на видео или в аудиозаписях.",
      ],
    },
    {
      question: "Чаще всего ваши собеседники:",
      block: 4,
      answers: [
        "Cлушают вас, затаив дыхание.",
        "Переспрашивают из-за того, что вы можете тараторить или невнятно выговаривать слова.",
        "Просят говорить громче.",
      ],
    },
    {
      question: "Вы умеете управлять своим голосом?",
      block: 4,
      answers: [
        "Да, у меня поставлен голос, могу сделать его низким бархатным, как у актера озвучки.",
        "Иногда получается управлять, но постоянно не могу контролировать.",
        "Не чувствую свой голос.",
      ],
    },
    {
      question: "Вы считаете себя интеллектуальным собеседником?",
      block: 5,
      answers: [
        "Да, я легко подбираю нужные слова, владею интересными выражениями, которыми расставляю акценты в разговоре.",
        "В принципе, хорошо разговариваю, но очень просто, без изюминки.",
        "Чувствую, что часто не могу связать два слова.",
      ],
    },
    {
      question:
        "Как часто вы испытываете трудности с запоминанием информации в важной ситуации?",
      block: 5,
      answers: [
        "Никогда: полностью помню, что хотел сказать, от начала до конца.",
        "Иногда: есть некоторые пробелы, но в целом могу вспомнить основное.",
        "Часто: сумбур в голове, много чего забываю или теряю нить речи.",
      ],
    },
    {
      question:
        "ВНИМАНИЕ! Вам нужно сейчас импровизировать на определенную тему, вы...",
      block: 5,
      answers: [
        "Берётесь за это с азартом, развиваете любую тему, даже если знакомы с ней отдалённо.",
        "Начинаете это делать неуверенно и, скорее всего, не блещете в монологе.",
        "Чувствуете, как сердце опускается в пятки… В голове крутится: «За что мне это???»",
      ],
    },
  ],
  results: [
    {
      9: "Вы проявляете уверенность в любых социальных ситуациях. Когда внимание переключается на вас, вы легко находите способ завоевать интерес аудитории и поддерживать разговор. Вы воодушевляетесь возможностью выступить и активно готовитесь к важным мероприятиям, что говорит о вашем высоком уровне подготовки и стремлении к совершенству. В новой обстановке вы занимаете открытую и уверенную позу, что свидетельствует о вашем комфорте и уверенности. Эти навыки способствуют вашему карьерному успеху, укрепляют ваш профессиональный имидж и обеспечивают эффективное взаимодействие в различных ситуациях.",
      8: "В новых социальных ситуациях вы ощущаете небольшую нервозность, но быстро адаптируетесь и начинаете раскрывать свои сильные стороны. Несмотря на первоначальное волнение, вы готовы к публичным выступлениям и приступаете к подготовке, хотя иногда это может быть источником стресса. В новой обстановке ваша поза скорее полуоткрытая, что показывает вашу готовность взаимодействовать, но и некоторое чувство неуверенности. Эти аспекты могут указывать на некоторые области для дальнейшего развития, но в целом вы уверенно справляетесь с социальными вызовами.",
      7: "Вы испытываете некоторые трудности, когда всё внимание сосредоточено на вас, и, хотя начинаете нервничать, вы постепенно раскрываетесь. Вы можете неохотно соглашаться на публичные выступления и иногда откладываете подготовку, что может создавать дополнительные стрессовые факторы. В новой обстановке вы принимаете полуоткрытую позу, что указывает на стремление к взаимодействию, но с элементами неуверенности. Эти особенности могут ограничивать вашу эффективность в публичных ситуациях и взаимодействии с аудиторией",
      6: "В ситуациях, когда внимание сосредоточено на вас, вы чувствуете значительное напряжение и мандраж. Ваше отношение к публичным выступлениям скорее негативное; вы можете откладывать подготовку или испытывать трудности при выступлениях. В новой обстановке вы склонны принимать закрытую позу, что свидетельствует о значительной неуверенности и страхе. Эти факторы могут негативно сказываться на вашем взаимодействии и профессиональном успехе, подчеркивая необходимость работы над уверенностью и навыками публичного выступления.",
      5: "Вы начинаете нервничать, когда внимание сосредоточено на вас, и, хотя стараетесь раскрыться, это дается вам с трудом. При подготовке к публичным выступлениям вы испытываете стресс и откладываете работу, что может затруднять выполнение задач. В новой обстановке ваша поза часто закрытая, что указывает на большую неуверенность. Эти трудности могут ограничивать вашу способность эффективно взаимодействовать и достигать успеха в профессиональной сфере.",
      4: "В ситуациях с фокусом внимания вы часто впадаете в ступор и чувствуете сильное напряжение. Вы склонны отказываться от публичных выступлений из-за страха позора, а подготовка может быть затруднена. В новой обстановке вы принимаете закрытую позу, что показывает значительное чувство неуверенности и страх перед взаимодействием. Эти проблемы могут серьезно ограничивать ваши возможности и негативно влиять на вашу профессиональную и личную жизнь, подчеркивая необходимость серьезного развития ваших коммуникационных навыков и уверенности.",
      3: "Когда внимание сосредоточено на вас, вы испытываете сильное напряжение и мандраж, что может приводить к ступору и затруднять взаимодействие. Вы склонны отказываться от публичных выступлений из-за страха позора и часто не готовы к подготовке. В новой обстановке ваша поза закрытая, что подчеркивает значительную неуверенность и страх перед общением. Эти проблемы могут существенно ограничивать ваш карьерный и личный успех, указывая на необходимость значительного улучшения навыков общения и уверенности.",
    },
    {
      9: "Характеристика: Вы демонстрируете высокий уровень уверенности и умения справляться с публичными ситуациями и спорами. Ваши сильные стороны уже впечатляют, но даже у опытных ораторов иногда возникают ситуации, где требуется дополнительное усовершенствование навыков и стратегий. Несмотря на высокий уровень, есть возможности для дальнейшего роста, которые могут сделать вашу коммуникацию ещё более эффективной и убедительной.",
      8: "Характеристика: Вы уверенно справляетесь с большинством ситуаций, однако иногда можете испытывать волнение или сталкиваться с трудностями при самопрезентации. Ваши навыки уже достаточно развиты, но есть аспекты, где дополнительная проработка может помочь вам преодолеть оставшиеся трудности и повысить уверенность. Работая над этими аспектами, вы сможете ещё более эффективно управлять вниманием аудитории и улучшить свою технику публичных выступлений.",
      7: "Характеристика: Вы уверенно ведёте себя в большинстве социальных ситуаций, но иногда сталкиваетесь с трудностями и стрессом. Ваши навыки уже хорошие, но в некоторых случаях стоит обратить внимание на преодоление эмоциональных трудностей и неуверенности. Улучшение этих аспектов поможет вам стать более уверенным в публичных ситуациях и повысит общую эффективность ваших выступлений.",
      6: "Характеристика:  Вы испытываете напряжение и трудности в сложных ситуациях, что может влиять на вашу способность эффективно представлять свои идеи и взаимодействовать с другими. Эти проблемы могут затруднять карьерный рост и социализацию, ограничивая возможности для профессионального и личного развития. Работа над улучшением навыков поможет вам стать более уверенным и успешным в различных ситуациях.",
      5: "Характеристика: Вы сталкиваетесь с трудностями в общении и публичных выступлениях, что может затруднять взаимодействие с коллегами и создание нужных связей. Это может замедлить ваш карьерный рост и затруднить достижение личных целей. Усиление уверенности и улучшение коммуникативных навыков помогут вам более эффективно справляться с профессиональными вызовами и улучшат взаимодействие в социальной среде.",
      4: "Характеристика: Ваши трудности с коммуникацией и стресс при публичных выступлениях могут негативно сказываться на вашей профессиональной репутации и личных отношениях. Неуверенность в себе может ограничивать ваши возможности на работе и мешать созданию полезных связей. Работая над улучшением этих навыков, вы сможете улучшить свою социальную адаптацию и профессиональные перспективы.",
      3: "Характеристика: Частое напряжение и неуверенность в публичных ситуациях могут серьёзно препятствовать вашим карьерным достижениям и социальной интеграции. Эти трудности могут привести к упущенным возможностям и затруднить налаживание связей как в профессиональной, так и в личной сферах. Сфокусировавшись на преодолении этих проблем, вы сможете значительно улучшить свою способность справляться с вызовами и достичь желаемых целей.",
    },
    {
      9: "Вы уверенно справляетесь с публичными ситуациями. Когда на вас направляют камеру и предлагают микрофон, вы с удовольствием берёте его и начинаете разговор. При просьбе спикера выйти на сцену, вы встаете по центру, показывая готовность управлять вниманием. Вы наслаждаетесь моментом в свете прожекторов и чувствуете себя уверенно перед залом. Это способствует вашему карьерному и социальному росту, открывая новые возможности. Даже с вашими высокими навыками есть потенциал для ещё большего мастерства и эффективного взаимодействия.",
      8: "Вы уверенно ведёте себя в большинстве ситуаций. Когда на вас направляют камеру и предлагают микрофон, вы немного напрягаетесь, но берёте его и начинаете говорить. Если спикер просит вас выйти на сцену, вы встаете по центру на уровне с ним, показывая готовность участвовать, но с некоторым волнением. Вы испытываете замешательство перед залом, что указывает на хорошие навыки, но также на возможность дальнейшего развития, чтобы полностью раскрыть свой потенциал и повысить карьерные и социальные возможности.",
      7: "Вы уверенно ведёте себя в большинстве социальных ситуаций, но иногда испытываете стресс. При предложении микрофона вы испытываете некоторое напряжение, но всё же берёте его. Если спикер просит вас выйти на сцену, вы встаете по центру на уровне с ним, что демонстрирует готовность, но с некоторыми сомнениями. Вы чувствуете замешательство в свете прожекторов, что показывает, что несмотря на ваши способности, есть пространство для улучшения, что может положительно повлиять на вашу карьеру и личные достижения.",
      6: "Вы испытываете значительное напряжение в публичных ситуациях. При предложении микрофона вы неохотно берёте его, что указывает на трудности с уверенностью. Когда спикер просит вас выйти на сцену, вы встаете сбоку от него, показывая желание избегать центра внимания. Вы испытываете сильное волнение, представляя себя перед залом. Такие трудности могут ограничивать ваши возможности в карьерном и социальном аспектах, затрудняя взаимодействие и продвижение. Развитие уверенности и коммуникационных навыков поможет вам справляться с этими ситуациями более эффективно и расширить ваши горизонты.",
      5: "Вы сталкиваетесь с трудностями в публичных ситуациях. При предложении микрофона вы чувствуете напряжение и берёте его неохотно. Если спикер просит вас выйти на сцену, вы встаете на уровне с ним, но с заметным беспокойством. Вы находитесь в замешательстве перед залом, что может затруднять вашу способность эффективно взаимодействовать и справляться с публичными выступлениями. Это может повлиять на вашу карьеру, ограничивая возможности для продвижения и создания сетей контактов. Улучшение уверенности и навыков поможет вам преодолеть эти препятствия и достичь большего успеха.",
      4: "Вы сталкиваетесь с заметными трудностями и неуверенностью. При предложении микрофона вы испытываете значительное напряжение и можете отказаться. Если спикер просит вас выйти на сцену, вы встаете сбоку от него, показывая высокий уровень неуверенности. В свете прожекторов вы испытываете сильное волнение, что ограничивает вашу способность успешно выступать и взаимодействовать с аудиторией. Эти трудности могут серьёзно повлиять на вашу карьеру, затрудняя продвижение и создание профессиональных контактов. Развитие уверенности и коммуникационных навыков поможет вам улучшить эти аспекты жизни и открыть новые возможности.",
      3: "Вы серьёзно затрудняетесь в публичных ситуациях. При предложении микрофона вы категорически отказываетесь, что указывает на значительное волнение и страх. Если спикер просит вас выйти на сцену, вы отказываетесь или встаете сбоку, демонстрируя крайнюю неуверенность. В свете прожекторов вы испытываете паническое состояние, что сильно ограничивает ваши возможности и эффективность в публичных выступлениях и взаимодействиях. Такие проблемы могут существенно затруднить карьерное развитие и создание важных контактов. Работая над уверенностью и навыками, вы сможете значительно улучшить свою жизнь и расширить горизонты.",
    },
    {
      9: "Cвидетельствует о высокой уверенности и комфорте в публичных ситуациях. Ваш голос способствует эффективному взаимодействию с аудиторией и создаёт положительное впечатление, что содействует карьерному успеху и личной удовлетворённости. Ваше умение управлять голосом и удерживать внимание собеседников делает ваши выступления убедительными и открывает новые возможности для роста. Даже с сильными навыками дальнейшее развитие может помочь поддерживать и укреплять ваши достижения, а также открывать новые горизонты в карьере и личной жизни.",
      8: "Вы в целом удовлетворены своим голосом, хотя понимаете, что есть пространство для улучшения. Это говорит о приличной уверенности в публичных ситуациях и способности взаимодействовать с аудиторией. Ваша речь уже привлекает внимание и создаёт положительное впечатление, что способствует вашему карьерному росту и личной удовлетворённости. Хотя ваши навыки хорошие, работа над дополнительными аспектами может помочь вам ещё лучше управлять своим голосом и поддерживать интерес аудитории. Продолжение развития в этой области поможет вам укрепить свои достижения и открыть новые возможности для успешного общения и карьерного роста.",
      7: "Вы удовлетворены своим голосом, но иногда чувствуете, что есть над чем поработать. Это показывает, что вы уверены в большинстве публичных ситуаций и способны взаимодействовать с аудиторией, хотя иногда могут возникать сложности. Ваше умение держать внимание собеседников и управлять голосом уже положительно влияет на вашу карьеру и личные достижения. Тем не менее, дальнейшее совершенствование голосовых навыков может помочь вам преодолеть оставшиеся трудности и улучшить ваше взаимодействие с аудиторией. Это поможет вам укрепить свои позиции и создать новые возможности для успешного общения и карьерного роста.",
      6: "Вы испытываете некоторую нейтральность к своему голосу, понимая, что есть области для улучшения. Это указывает на то, что в публичных ситуациях вы можете чувствовать себя не совсем уверенно, а ваше взаимодействие с аудиторией может быть не таким эффективным. Это может негативно влиять на вашу карьеру и личное развитие. Улучшение навыков управления голосом поможет вам повысить уверенность и качество вашего общения. Это позволит вам справляться с трудностями и создать более положительное впечатление, что важно для достижения успеха в профессиональной и личной жизни.",
      5: "Вы имеете нейтральное отношение к своему голосу и осознаёте необходимость работы над ним. Это может означать, что в публичных ситуациях вам не всегда удаётся уверенно взаимодействовать с аудиторией, что может негативно сказываться на вашем профессиональном имидже и личной удовлетворённости. Работа над улучшением голосовых навыков поможет вам повысить уверенность и качество общения, что приведёт к лучшему взаимодействию с аудиторией и улучшению ваших карьерных перспектив. Это также может предотвратить возможные трудности в будущих публичных ситуациях.",
      4: "Вы не совсем довольны своим голосом и чувствуете, что есть значительные области для улучшения. Это может свидетельствовать о том, что в публичных ситуациях вы часто испытываете трудности, и ваша способность эффективно взаимодействовать с аудиторией ограничена. Такие сложности могут негативно влиять на вашу карьеру и личное развитие. Фокус на развитии голосовых навыков поможет вам преодолеть эти трудности и повысить уверенность в публичных ситуациях. Это создаст более положительное впечатление и улучшит ваши возможности для карьерного роста и успешного общения.",
      3: "Вы испытываете значительное недовольство своим голосом и находите его трудным для восприятия, особенно в аудио и видео записях. Это может указывать на значительные трудности в публичных ситуациях и неуверенность при взаимодействии с аудиторией, что может негативно сказаться на вашей карьере и личной жизни. Работа над улучшением голосовых навыков поможет вам преодолеть эти трудности, повысить уверенность и качество общения. Это важно для успешного взаимодействия с аудиторией и достижения профессиональных и личных целей.",
    },
    {
      9: "Вы уверенно и легко справляетесь с общением, подбирая нужные слова и выражения, что делает ваши разговоры глубокими и убедительными. Вы не испытываете трудностей с запоминанием информации и всегда помните, что хотели сказать. Когда вам предлагают импровизировать, вы берёте это с азартом и успешно развиваете тему, даже если она вам не совсем знакома. Эти навыки способствуют вашему профессиональному успеху и укрепляют ваш имидж как компетентного и уверенного собеседника, открывая новые карьерные возможности.",
      8: "Вы хорошо общаетесь, хотя ваш стиль может быть несколько простым. Важную информацию вы помните с некоторыми пробелами, но в целом можете восстановить основное. При необходимости импровизировать вы начинаете неуверенно, что может затруднить развитие темы. Несмотря на это, ваши навыки общения и способность запоминать информацию положительно влияют на ваш профессиональный имидж, хотя есть место для улучшения в области уверенности и выразительности.",
      7: "Вы ощущаете трудности в поддержании интересных и связных разговоров, и ваши навыки могут нуждаться в улучшении. Иногда у вас возникают проблемы с запоминанием информации, что может приводить к путанице и потере нити речи. При импровизации вы испытываете значительное напряжение и страх, что затрудняет успешное выполнение задачи. Эти трудности могут негативно сказываться на вашем успехе и взаимодействии, указывая на необходимость работы над уверенностью и техникой общения.",
      6: "Вы часто сталкиваетесь с проблемами в поддержании связных и убедительных разговоров, что затрудняет ваше общение. Запоминание информации также вызывает трудности, и вы можете терять нить речи, что сказывается на ваших выступлениях. Импровизация вызывает у вас страх и неуверенность, что затрудняет выполнение задач в стрессовых ситуациях. Эти проблемы могут негативно влиять на вашу профессиональную эффективность и успешность в публичных ситуациях, подчеркивая необходимость улучшения ваших навыков общения и уверенности.",
      5: "Ваши разговоры могут быть довольно простыми и лишены выразительности. Вы испытываете трудности с запоминанием важной информации и часто теряете нить речи. При необходимости импровизировать вы начинаете неуверенно, что может снижать эффективность ваших выступлений. Эти проблемы могут ограничивать ваш профессиональный успех и взаимодействие с аудиторией, указывая на потребность в улучшении ваших навыков общения и уверенности.",
      4: "Вы часто испытываете затруднения в поддержании связных и интересных разговоров, что может затруднять ваше общение и влияние на других. Запоминание информации в важных ситуациях становится проблематичным, приводя к сумбурности и потере нити речи. Импровизация вызывает у вас значительное напряжение и страх, что затрудняет успешное выполнение задач. Эти трудности могут ограничивать вашу эффективность и профессиональный успех, подчеркивая необходимость работы над улучшением коммуникационных навыков и уверенности.",
      3: "Вы испытываете значительные трудности в ведении связных и убедительных разговоров, что может сильно ограничивать ваше взаимодействие и профессиональные возможности. Запоминание информации становится серьёзной проблемой, что приводит к частым сбоям и потере нити речи. Импровизация вызывает у вас страх и сильное напряжение, затрудняя выполнение задач и взаимодействие с аудиторией. Эти проблемы могут существенно негативно сказаться на вашем профессиональном успехе, указывая на необходимость значительной работы над улучшением ваших коммуникационных навыков и уверенности.",
    },
  ],
};
