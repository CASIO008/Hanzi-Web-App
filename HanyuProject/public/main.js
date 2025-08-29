    document.addEventListener('DOMContentLoaded', () => {
    // O vocabulário permanece o mesmo
    const vocabulary = [
        { character: "老师", pinyin: "lǎo shī", translation: "professor", answers: ["lao shi", "laoshi", "lǎoshī", "teacher", "professor", "老师"], audio: "audio/HSK1/你的老师是谁 .mp3", left: "你的", right: "是谁?" },
        { character: "菜", pinyin: "cài", translation: "prato / comida", answers: ["cai", "cài", "dish", "food", "prato", "comida", "菜"], audio: "audio/HSK1/今晚我做菜 希望你喜欢 .mp3", left: "今晚我做", right: "，希望你喜欢。" },
        { character: "茶", pinyin: "chá", translation: "chá", answers: ["cha", "chá", "tea", "chá", "茶"], audio: "audio/HSK1/你喜欢喝红茶还是绿茶 .mp3", left: "你喜欢喝红", right: "-还是绿-?" },
        { character: "吃", pinyin: "chī", translation: "comer", answers: ["chi", "chī", "eat", "comer", "吃"], audio: "audio/HSK1/大卫爱吃中国菜 .mp3", left: "大卫爱", right: "中国菜。" },
        { character: "喝", pinyin: "hē", translation: "beber", answers: ["he", "hē", "drink", "beber", "喝"], audio: "audio/HSK1/先生 您喝点什么 .mp3", left: "先生，您", right: "点什么?" },
        { character: "米饭", pinyin: "mǐ fàn", translation: "arroz cozido", answers: ["mi fan", "mifan", "mǐfàn", "rice", "arroz", "arroz cozido", "米饭"], audio: "audio/HSK1/你爱吃米饭还是面条 .mp3", left: "你爱吃", right: "还是面条?" },
        { character: "哪儿", pinyin: "nǎr", translation: "onde", answers: ["nar", "nǎr", "where", "onde", "哪儿"], audio: "audio/HSK1/我的书在哪儿 .mp3", left: "我的书在", right: "" },
        { character: "苹果", pinyin: "píng guǒ", translation: "maçã", answers: ["ping guo", "pingguo", "píngguǒ", "apple", "maçã", "苹果"], audio: "audio/HSK1/小女孩儿正在喝苹果汁 .mp3", left: "小女孩儿正在喝", right: "汁。" },
        { character: "是", pinyin: "shì", translation: "ser / é", answers: ["shi", "shì", "to be", "é", "ser", "是"], audio: "audio/HSK1/这些衣服都是张小姐的 .mp3", left: "这些衣服都", right: "张小姐的。" },
        { character: "水", pinyin: "shuǐ", translation: "água", answers: ["shui", "shuǐ", "water", "água", "水"], audio: "audio/HSK1/请给我一杯水 谢谢 .mp3", left: "请给我一杯", right: "，谢谢。" },
        { character: "那", pinyin: "nà", translation: "aquele / aquela / isso", answers: ["na", "nà", "that", "aquele", "aquela", "isso", "那"], audio: "audio/HSK1/我去过那个地方 .mp3", left: "我去过", right: "个地方。" },
        { character: "哪", pinyin: "nǎ", translation: "qual", answers: ["na", "nǎ", "which", "qual", "哪"], audio: "audio/HSK1/你认识哪个老师 .mp3", left: "你认识", right: "个老师?" },
        { character: "这", pinyin: "zhè", translation: "este / esta / isto", answers: ["zhe", "zhè", "this", "este", "esta", "isto", "这"], audio: "这块手表这是我爸爸的.mp3", left: "-块手表", right: "是我爸爸的。" },
        { character: "东西", pinyin: "dōng xī", translation: "coisa / objeto", answers: ["dong xi", "dongxi", "dōngxī", "thing", "object", "coisa", "objeto", "东西"], audio: "妈妈去超市买东西了.mp3", left: "妈妈去超市买", right: "了。" },
        { character: "多少", pinyin: "duō shǎo", translation: "quanto(s)", answers: ["duo shao", "duoshao", "duōshǎo", "how many", "how much", "quanto", "quantos", "多少"], audio: "一近苹果多少钱.mp3", left: "一近苹果", right: "钱？" },
        { character: "个", pinyin: "gè", translation: "classificador geral", answers: ["ge", "gè", "measure word", "classifier", "classificador", "个"], audio: "", left: "我要告诉你", right: "好消息。" },
        { character: "爱", pinyin: "ài", translation: "amor / amar", answers: ["ai", "ài", "love", "amor", "amar", "爱"], audio: "audio/HSK1/我爱我的妈妈.mp3", left: "我", right: "我的妈妈。" },
        { character: "爱好", pinyin: "ài hào", translation: "hobby", answers: ["ai hao", "aihao", "àihào", "hobby", "爱好"], audio: "audio/HSK1/我的爱好是看书.mp3", left: "我的", right: "是看书。" },
        { character: "八", pinyin: "bā", translation: "oito", answers: ["ba", "bā", "eight", "oito", "八"], audio: "audio/HSK1/我有八本书.mp3", left: "我有", right: "本书。" },
        { character: "爸爸", pinyin: "bàba", translation: "pai", answers: ["baba", "bàba", "dad", "pai", "爸爸", "爸"], audio: "audio/HSK1/我的爸爸是医生.mp3", left: "我的", right: "是医生。" },
        { character: "吧", pinyin: "ba", translation: "partícula de interjeição", answers: ["ba", "particle", "partícula", "吧"], audio: "audio/HSK1/我们走吧.mp3", left: "我们走", right: "。" },
        { character: "白", pinyin: "bái", translation: "branco", answers: ["bai", "bái", "white", "branco", "白"], audio: "audio/HSK1/我喜欢白色的猫.mp3", left: "我喜欢", right: "色的猫。" },
        { character: "白天", pinyin: "bái tiān", translation: "dia / durante o dia", answers: ["bai tian", "baitian", "báitiān", "day", "dia", "白天"], audio: "audio/HSK1/我白天要去学校.mp3", left: "我", right: "要去学校。" },
        { character: "百", pinyin: "bǎi", translation: "cem", answers: ["bai", "bǎi", "hundred", "cem", "百"], audio: "audio/HSK1/这本书一百块钱.mp3", left: "这本书一", right: "块钱。" },
        { character: "班", pinyin: "bān", translation: "classe / turma", answers: ["ban", "bān", "class", "classe", "turma", "班"], audio: "audio/HSK1/我们班有二十个学生.mp3", left: "我们", right: "有二十个学生。" },
        { character: "半", pinyin: "bàn", translation: "metade", answers: ["ban", "bàn", "half", "metade", "半"], audio: "audio/HSK1/现在是三点半.mp3", left: "现在是三点", right: "。" },
        { character: "半年", pinyin: "bàn nián", translation: "meio ano", answers: ["ban nian", "bannian", "bànnián", "half a year", "meio ano", "半年"], audio: "audio/HSK1/我在中国住了半年.mp3", left: "我在中国住了", right: "。" },
        { character: "半天", pinyin: "bàn tiān", translation: "meio dia", answers: ["ban tian", "bantian", "bàntiān", "half day", "meio dia", "半天"], audio: "audio/HSK1/我等了你半天.mp3", left: "我等了你", right: "。" },
        { character: "帮", pinyin: "bāng", translation: "ajudar", answers: ["bang", "bāng", "help", "ajudar", "帮"], audio: "audio/HSK1/你能帮我一下吗.mp3", left: "你能", right: "我一下吗？" },
        { character: "帮忙", pinyin: "bāng máng", translation: "ajudar / prestar ajuda", answers: ["bang mang", "bangmang", "bāngmáng", "help", "ajudar", "帮忙"], audio: "audio/HSK1/谢谢你的帮忙.mp3", left: "谢谢你的", right: "。" },
        { character: "包", pinyin: "bāo", translation: "pacote / embrulhar", answers: ["bao", "bāo", "package", "pacote", "embrulhar", "包"], audio: "audio/HSK1/这个包很重.mp3", left: "这个", right: "很重。" },
        { character: "包子", pinyin: "bāo zi", translation: "pão chinês (cozido no vapor)", answers: ["bao zi", "baozi", "bāozi", "bun", "pão chinês", "包子"], audio: "audio/HSK1/我早饭吃包子.mp3", left: "我早饭吃", right: "。" },
        { character: "杯", pinyin: "bēi", translation: "copo / xícara", answers: ["bei", "bēi", "cup", "copo", "xícara", "杯"], audio: "audio/HSK1/请给我一杯水.mp3", left: "请给我一", right: "水。" },
        { character: "杯子", pinyin: "bēi zi", translation: "copo / xícara", answers: ["bei zi", "beizi", "bēizi", "cup", "copo", "xícara", "杯子"], audio: "audio/HSK1/桌子上有一个杯子.mp3", left: "桌子上有一个", right: "。" },
        { character: "北", pinyin: "běi", translation: "norte", answers: ["bei", "běi", "north", "norte", "北"], audio: "audio/HSK1/北京在中国的北边.mp3", left: "北京在中国的", right: "边。" },
        { character: "北边", pinyin: "běi biān", translation: "lado norte", answers: ["bei bian", "beibian", "běibiān", "North side", "lado norte", "北边"], audio: "audio/HSK1/学校在公园的北边.mp3", left: "学校在公园的", right: "。" },
        { character: "北京", pinyin: "běi jīng", translation: "Pequim", answers: ["bei jing", "beijing", "běijīng", "Beijing", "Pequim", "北京"], audio: "audio/HSK1/我想去北京旅游.mp3", left: "我想去", right: "旅游。" },
        { character: "本", pinyin: "běn", translation: "classificador para livros", answers: ["ben", "běn", "measure word for books", "classificador", "本"], audio: "audio/HSK1/我买了一本书.mp3", left: "我买了 一", right: "书。" },
        { character: "本子", pinyin: "běn zi", translation: "caderno", answers: ["ben zi", "benzi", "běnzi", "book", "caderno", "本子"], audio: "audio/HSK1/请把本子给我.mp3", left: "请把", right: "给我。" },
        { character: "比", pinyin: "bǐ", translation: "partícula de comparação", answers: ["bi", "bǐ", "comparison particle", "comparação", "比"], audio: "audio/HSK1/他比我高.mp3", left: "他", right: "我高。" },
        { character: "别", pinyin: "bié", translation: "não (imperativo)", answers: ["bie", "bié", "Don’t", "não", "别"], audio: "audio/HSK1/别说话.mp3", left: "", right: "说话。" },
        { character: "别的", pinyin: "bié de", translation: "outro(s)", answers: ["bie de", "biede", "biéde", "other", "outro", "outros", "别的"], audio: "audio/HSK1/我还有别的事情.mp3", left: "我还有", right: "事情。" },
        { character: "别人", pinyin: "bié rén", translation: "outras pessoas", answers: ["bie ren", "bieren", "biérén", "other people", "outras pessoas", "别人"], audio: "audio/HSK1/这是别人的东西.mp3", left: "这是", right: "的东西。" },
        { character: "病", pinyin: "bìng", translation: "doença / estar doente", answers: ["bing", "bìng", "disease", "illness", "doença", "doente", "病"], audio: "audio/HSK1/他生病了.mp3", left: "他生", right: "了。" },
        { character: "病人", pinyin: "bìng rén", translation: "paciente / doente", answers: ["bing ren", "bingren", "bìngrén", "patient", "paciente", "doente", "病人"], audio: "audio/HSK1/医生在给病人看病.mp3", left: "医生在给", right: "看病。" },
        { character: "不大", pinyin: "bú dà", translation: "não grande", answers: ["bu da", "buda", "búdà", "not big", "não grande", "不大"], audio: "audio/HSK1/这个苹果不大.mp3", left: "这个苹果", right: "。" },
        { character: "不对", pinyin: "bú duì", translation: "incorreto / errado", answers: ["bu dui", "budui", "búduì", "wrong", "incorreto", "errado", "不对"], audio: "audio/HSK1/你这样做不对.mp3", left: "你这样做", right: "。" },
        { character: "不客气", pinyin: "bú kè qì", translation: "de nada", answers: ["bu ke qi", "bukeqi", "búkèqì", "You’re welcome", "de nada", "不客气"], audio: "audio/HSK1/甲谢谢你乙不客气.mp3", left: "甲：谢谢你！乙：", right: "。" },
        { character: "不用", pinyin: "bú yòng", translation: "não precisa", answers: ["bu yong", "buyong", "búyòng", "No need to", "não precisa", "不用"], audio: "audio/HSK1/不用谢.mp3", left: "", right: "谢。" },
        { character: "不", pinyin: "bù", translation: "não", answers: ["bu", "bù", "No", "não", "不"], audio: "audio/HSK1/我不是学生.mp3", left: "我", right: "是学生。" },
        { character: "差", pinyin: "chà", translation: "faltar / ruim", answers: ["cha", "chà", "differ from", "bad", "short of", "faltar", "ruim", "差"], audio: "audio/HSK1/现在差十分八点.mp3", left: "现在", right: "十分八点。" },
        { character: "常", pinyin: "cháng", translation: "frequentemente", answers: ["chang", "cháng", "often", "frequentemente", "常"], audio: "audio/HSK1/我常去图书馆.mp3", left: "我", right: "去图书馆。" },
        { character: "常常", pinyin: "cháng cháng", translation: "frequentemente", answers: ["chang chang", "changchang", "chángcháng", "often", "frequentemente", "常常"], audio: "audio/HSK1/他常常迟到.mp3", left: "他", right: "迟到。" },
        { character: "唱", pinyin: "chàng", translation: "cantar", answers: ["chang", "chàng", "sing", "cantar", "唱"], audio: "audio/HSK1/你喜欢唱歌吗.mp3", left: "你喜欢", right: "歌吗？" },
        { character: "唱歌", pinyin: "chàng gē", translation: "cantar uma canção", answers: ["chang ge", "changge", "chànggē", "sing", "cantar", "唱歌"], audio: "audio/HSK1/我妹妹喜欢唱歌.mp3", left: "我妹妹喜欢", right: "。" },
        { character: "车", pinyin: "chē", translation: "carro / veículo", answers: ["che", "chē", "car", "carro", "veículo", "车"], audio: "audio/HSK1/那辆红色的车是谁的.mp3", left: "那辆红色的", right: "是谁的？" },
        { character: "车票", pinyin: "chē piào", translation: "passagem (de trem/ônibus)", answers: ["che piao", "chepiao", "chēpiào", "ticket", "passagem", "车票"], audio: "audio/HSK1/我买了一张车票.mp3", left: "我买了 一张", right: "。" },
        { character: "车上", pinyin: "chē shàng", translation: "no carro / no veículo", answers: ["che shang", "cheshang", "chēshàng", "in the car", "no carro", "车上"], audio: "audio/HSK1/车上人很多.mp3", left: "", right: "人很多。" },
        { character: "车站", pinyin: "chē zhàn", translation: "estação / parada", answers: ["che zhan", "chezhan", "chēzhàn", "station", "estação", "parada", "车站"], audio: "audio/HSK1/请问火车站在哪儿.mp3", left: "请问火", right: "在哪儿？" },
        { character: "吃饭", pinyin: "chī fàn", translation: "comer (uma refeição)", answers: ["chi fan", "chifan", "chīfàn", "have meal", "comer", "吃饭"], audio: "audio/HSK1/你吃饭了吗.mp3", left: "你", right: "了吗？" },
        { character: "出", pinyin: "chū", translation: "sair", answers: ["chu", "chū", "out", "sair", "出"], audio: "audio/HSK1/请出去.mp3", left: "请", right: "去。" },
        { character: "出来", pinyin: "chū lái", translation: "vir para fora / sair (em direção a quem fala)", answers: ["chu lai", "chulai", "chūlái", "come out", "vir para fora", "出来"], audio: "audio/HSK1/请你出来一下.mp3", left: "请你", right: "一下。" },
        { character: "出去", pinyin: "chū qù", translation: "ir para fora / sair (se afastando de quem fala)", answers: ["chu qu", "chuqu", "chūqù", "go out", "ir para fora", "出去"], audio: "audio/HSK1/我们出去玩吧.mp3", left: "我们", right: "玩吧。" },
        { character: "穿", pinyin: "chuān", translation: "vestir", answers: ["chuan", "chuān", "wear", "vestir", "穿"], audio: "audio/HSK1/你今天穿得很漂亮.mp3", left: "你今天", right: "得很漂亮。" },
        { character: "床", pinyin: "chuáng", translation: "cama", answers: ["chuang", "chuáng", "bed", "cama", "床"], audio: "audio/HSK1/我的房间里有一张床.mp3", left: "我的房间里有 一张", right: "。" },
        { character: "次", pinyin: "cì", translation: "vez (classificador de frequência)", answers: ["ci", "cì", "measure word for times", "vez", "classificador", "次"], audio: "audio/HSK1/这是我第一次来中国.mp3", left: "这是我第一", right: "来中国。" },
        { character: "从", pinyin: "cóng", translation: "de / desde", answers: ["cong", "cóng", "from", "de", "desde", "从"], audio: "audio/HSK1/我从北京来.mp3", left: "我", right: "北京来。" },
        { character: "错", pinyin: "cuò", translation: "errado / erro", answers: ["cuo", "cuò", "wrong", "errado", "erro", "错"], audio: "audio/HSK1/对不起我错了.mp3", left: "对不起，我", right: "了。" },
        { character: "打", pinyin: "dǎ", translation: "bater / pegar (táxi) / fazer (ligação)", answers: ["da", "dǎ", "hit", "take", "bater", "pegar", "fazer", "打"], audio: "audio/HSK1/别打他.mp3", left: "别", right: "他。" },
        { character: "打车", pinyin: "dǎ chē", translation: "pegar um táxi", answers: ["da che", "dache", "dǎchē", "take a taxi", "pegar um táxi", "打车"], audio: "audio/HSK1/我们打车去机场吧.mp3", left: "我们", right: "去机场吧。" },
        { character: "打电话", pinyin: "dǎ diàn huà", translation: "fazer uma ligação", answers: ["da dian hua", "dadianhua", "dǎdiànhuà", "make a phonecall", "fazer uma ligação", "打电话"], audio: "audio/HSK1/我在给妈妈打电话.mp3", left: "我在给妈妈", right: "。" },
        { character: "打开", pinyin: "dǎ kāi", translation: "abrir / ligar", answers: ["da kai", "dakai", "dǎkāi", "turn on", "open", "abrir", "ligar", "打开"], audio: "audio/HSK1/请打开书.mp3", left: "请", right: "书。" },
        { character: "打球", pinyin: "dǎ qiú", translation: "jogar bola", answers: ["da qiu", "daqiu", "dǎqiú", "play ball", "jogar bola", "打球"], audio: "audio/HSK1/他喜欢打球.mp3", left: "他喜欢", right: "。" },
        { character: "大", pinyin: "dà", translation: "grande", answers: ["da", "dà", "large", "big", "grande", "大"], audio: "audio/HSK1/这个苹果很大.mp3", left: "这个苹果很", right: "。" },
        { character: "大学", pinyin: "dà xué", translation: "universidade", answers: ["da xue", "daxue", "dàxué", "university", "universidade", "大学"], audio: "audio/HSK1/我想上北京大学.mp3", left: "我想上北京", right: "。" },
        { character: "大学生", pinyin: "dà xué shēng", translation: "estudante universitário", answers: ["da xue sheng", "daxuesheng", "dàxuéshēng", "university student", "estudante universitário", "大学生"], audio: "audio/HSK1/他是一名大学生.mp3", left: "他是一名", right: "。" },
        { character: "到", pinyin: "dào", translation: "chegar / a / para", answers: ["dao", "dào", "reach", "chegar", "a", "para", "到"], audio: "audio/HSK1/我到家了.mp3", left: "我", right: "家了。" },
        { character: "得到", pinyin: "dé dào", translation: "obter / conseguir", answers: ["de dao", "dedao", "dédào", "get", "obter", "conseguir", "得到"], audio: "audio/HSK1/他得到了第一名.mp3", left: "他", right: "了第一名。" },
        { character: "地", pinyin: "de", translation: "partícula auxiliar (advérbio)", answers: ["de", "auxiliary word", "partícula", "地"], audio: "audio/HSK1/他高兴地笑了.mp3", left: "他高兴", right: "笑了。" },
        { character: "的", pinyin: "de", translation: "partícula possessiva", answers: ["de", "auxiliary", "partícula", "的"], audio: "audio/HSK1/这是我的书.mp3", left: "这是我", right: "书。" },
        { character: "等", pinyin: "děng", translation: "esperar", answers: ["deng", "děng", "wait", "esperar", "等"], audio: "audio/HSK1/请等一下.mp3", left: "请", right: "一下。" },
        { character: "地", pinyin: "dì", translation: "chão / solo", answers: ["di", "dì", "ground", "chão", "solo", "地"], audio: "audio/HSK1/地上有一本书.mp3", left: "上有一本书。", right: "上有一本书。" },
        { character: "地点", pinyin: "dì diǎn", translation: "localização / local", answers: ["di dian", "didian", "dìdiǎn", "location", "localização", "local", "地点"], audio: "audio/HSK1/开会的地点在哪里.mp3", left: "开会的", right: "在哪里？" },
        { character: "地方", pinyin: "dì fang", translation: "lugar", answers: ["di fang", "difang", "dìfang", "local", "place", "lugar", "地方"], audio: "audio/HSK1/这是一个什么地方.mp3", left: "这是 一个什么", right: "？" },
        { character: "地上", pinyin: "dì shàng", translation: "no chão", answers: ["di shang", "dishang", "dìshàng", "on the ground", "no chão", "地上"], audio: "audio/HSK1/你的书在地上.mp3", left: "你的书在", right: "。" },
        { character: "地图", pinyin: "dì tú", translation: "mapa", answers: ["di tu", "ditu", "dìtú", "Map", "mapa", "地图"], audio: "audio/HSK1/我需要一张中国地图.mp3", left: "我需要 一张中国", right: "。" },
        { character: "弟弟", pinyin: "dì di", translation: "irmão mais novo", answers: ["di di", "didi", "dìdi", "younger brother", "irmão mais novo", "弟"], audio: "audio/HSK1/我有一个弟弟.mp3", left: "我有 一个", right: "。" },
        { character: "第", pinyin: "dì", translation: "prefixo para números ordinais", answers: ["di", "dì", "ordinal numbers", "números ordinais", "第"], audio: "audio/HSK1/这是第一次.mp3", left: "这是", right: "一次。" },
        { character: "点", pinyin: "diǎn", translation: "ponto / hora", answers: ["dian", "diǎn", "spot", "ponto", "hora", "点"], audio: "audio/HSK1/现在几点了.mp3", left: "现在几", right: "了？" },
    ];
        
    const starSVG = `<svg width="40px" height="40px" viewBox="-0.24 -0.24 24.48 24.48" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(270)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" stroke="#525252" stroke-width="1.992"></path></g></svg>`;
    const filledStarSVG = `<svg width="40px" height="40px" viewBox="-8.87 -8.87 144.47 144.47" fill="#fbff00" xmlns="http://www.w3.org/2000/svg" transform="rotate(270)" stroke="#fbff00" stroke-width="12.673"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path d="M121.215,44.212l-34.899-3.3c-2.2-0.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101,0l-12.4,30.3 c-0.8,2.1-2.8,3.5-5,3.7l-34.9,3.3c-5.2,0.5-7.3,7-3.4,10.5l26.3,23.1c1.7,1.5,2.4,3.7,1.9,5.9l-7.9,32.399 c-1.2,5.101,4.3,9.3,8.9,6.601l29.1-17.101c1.9-1.1,4.2-1.1,6.1,0l29.101,17.101c4.6,2.699,10.1-1.4,8.899-6.601l-7.8-32.399 c-0.5-2.2,0.2-4.4,1.9-5.9l26.3-23.1C128.615,51.212,126.415,44.712,121.215,44.212z"></path></g></g></svg>`;

    // Variáveis de Estado
    let wordStars;
    let wordsCompleted;
    let activeWords;
    let nextUnseenWordIndex;
    let currentActiveIndex;
    const starsPerWord = 17;

    // Elementos do DOM
    const starsContainer = document.getElementById('stars');
    const feedbackElement = document.getElementById('feedback');
    const scoreElement = document.getElementById('score-display');
    const answerInput = document.getElementById('answer-input');
    const clearBtn = document.getElementById('clear-btn');
    const characterDisplay = document.getElementById('character-display');
    const translationDisplay = document.getElementById('translation-display');
    const progressBar = document.getElementById('progress-bar');
    const audioBtn = document.getElementById('audio-btn');

    // Funções de Armazenamento Local
    function saveProgress() {
        const progress = {
            wordStars: wordStars,
            wordsCompleted: wordsCompleted,
            activeWords: activeWords,
            nextUnseenWordIndex: nextUnseenWordIndex,
            currentActiveIndex: currentActiveIndex
        };
        localStorage.setItem('hanziProProgress', JSON.stringify(progress));
    }

    function loadProgress() {
        const savedProgress = localStorage.getItem('hanziProProgress');
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            wordStars = progress.wordStars;
            wordsCompleted = progress.wordsCompleted;
            activeWords = progress.activeWords;
            nextUnseenWordIndex = progress.nextUnseenWordIndex;
            currentActiveIndex = progress.currentActiveIndex || 0;
            
            if (wordStars.length !== vocabulary.length) {
                resetProgress();
            }
        } else {
            resetProgress();
        }
    }

    function resetProgress() {
        wordStars = new Array(vocabulary.length).fill(0);
        wordsCompleted = 0;
        activeWords = [0, 1, 2, 3, 4].filter(i => i < vocabulary.length); // Garante que não exceda o vocabulário
        nextUnseenWordIndex = activeWords.length;
        currentActiveIndex = 0;
    }

    // Lógica do Aplicativo
    function initApp() {
        loadProgress();
        updateUI();
        
        clearBtn.addEventListener('click', clearInput);
        answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkAnswer();
            }
        });
        
        answerInput.focus();
        audioBtn.addEventListener('click', () => {
            if (activeWords.length === 0) return;
            const wordIndex = activeWords[currentActiveIndex];
            const currentWord = vocabulary[wordIndex];
            if (currentWord.audio) {
                const audio = new Audio(currentWord.audio);
                audio.play().catch(error => console.error("Erro ao reproduzir áudio:", error));
            }
        });
    }

    function updateUI() {
        updateWordDisplay();
        updateProgressBar();
        scoreElement.textContent = `${wordsCompleted} / ${vocabulary.length}`;
    }
    
    function createStars() {
        starsContainer.innerHTML = '';
        if (activeWords.length === 0 || currentActiveIndex >= activeWords.length) return;
        const wordIndex = activeWords[currentActiveIndex];
        const currentStars = wordStars[wordIndex];
        for (let i = 0; i < starsPerWord; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.innerHTML = i < currentStars ? filledStarSVG : starSVG;
            starsContainer.appendChild(star);
        }
    }

    function updateWordDisplay() {
        if (activeWords.length === 0) {
            feedbackElement.textContent = 'Parabéns! Você completou tudo!';
            answerInput.disabled = true;
            clearBtn.disabled = true;
            characterDisplay.textContent = '🎉';
            document.getElementById('left-context').textContent = '';
            document.getElementById('right-context').textContent = '';
            return;
        }

        // Garante que o índice é válido
        if (currentActiveIndex >= activeWords.length) {
            currentActiveIndex = 0;
        }

        const wordIndex = activeWords[currentActiveIndex];
        const currentWord = vocabulary[wordIndex];
        
        document.getElementById('left-context').textContent = currentWord.left || '';
        document.getElementById('right-context').textContent = currentWord.right || '';
        characterDisplay.textContent = currentWord.character;
        
        translationDisplay.textContent = ''; 
        translationDisplay.style.visibility = 'hidden';
        
        answerInput.value = '';
        feedbackElement.textContent = '';
        feedbackElement.className = 'feedback';
        answerInput.disabled = false;
        answerInput.focus();
        createStars();

        if (currentWord.audio) {
          const audio = new Audio(currentWord.audio);
          audio.play().catch(error => console.error("Erro ao reproduzir áudio automaticamente:", error));
        }
    }
    
    function moveToNextWord() {
        const lastWordIndex = activeWords[currentActiveIndex];
        let wordWasMastered = false;

        if (wordStars[lastWordIndex] === starsPerWord) {
            wordWasMastered = true;
            // Filtra a palavra masterizada
            activeWords = activeWords.filter(index => index !== lastWordIndex);

            // Adiciona uma nova palavra se houver
            if (nextUnseenWordIndex < vocabulary.length) {
                activeWords.push(nextUnseenWordIndex);
                nextUnseenWordIndex++;
            }
        }
        
        if (activeWords.length > 0) {
            if (wordWasMastered) {
                // Se uma palavra foi masterizada e removida, o índice pode precisar de ajuste
                // para não pular uma palavra. Vamos manter o mesmo índice, pois a próxima palavra tomará o lugar da antiga.
                currentActiveIndex = currentActiveIndex % activeWords.length;
            } else {
                 // CORREÇÃO: Incrementa o índice para ciclar entre as palavras
                currentActiveIndex = (currentActiveIndex + 1) % activeWords.length;
            }
        }
        
        updateUI();
    }

    function checkAnswer() {
        if (activeWords.length === 0) return;
        const userAnswer = answerInput.value.trim().toLowerCase();
        if (userAnswer === '') {
            feedbackElement.textContent = 'Por favor, digite uma resposta.';
            feedbackElement.className = 'feedback incorrect';
            return;
        }
        
        const wordIndex = activeWords[currentActiveIndex];
        const currentWord = vocabulary[wordIndex];
        const isCorrect = currentWord.answers.some(answer => userAnswer === answer.toLowerCase());

        answerInput.disabled = true;

        if (isCorrect) {
            handleCorrectAnswer();
        } else {
            handleIncorrectAnswer();
        }
        
        saveProgress();
        setTimeout(moveToNextWord, 1200);
    }

    function handleCorrectAnswer() {
        feedbackElement.textContent = 'Correto!';
        feedbackElement.className = 'feedback correct';
        
        const wordIndex = activeWords[currentActiveIndex];
        const currentWord = vocabulary[wordIndex];

        // NOVO: Mostra a resposta correta mesmo no acerto
        translationDisplay.textContent = `${currentWord.pinyin} - ${currentWord.translation}`;
        translationDisplay.style.visibility = 'visible';
        
        if (wordStars[wordIndex] < starsPerWord) {
            wordStars[wordIndex]++;
            if (wordStars[wordIndex] === starsPerWord) {
                wordsCompleted++;
            }
        }
        
        characterDisplay.classList.add('jump');
        const filledStarIndex = wordStars[wordIndex] - 1;
        if (filledStarIndex >= 0 && starsContainer.children[filledStarIndex]) {
            starsContainer.children[filledStarIndex].classList.add('star-jump');
            createParticles(starsContainer.children[filledStarIndex]);
        }
        
        setTimeout(() => {
            characterDisplay.classList.remove('jump');
            const starElements = document.querySelectorAll('.star-jump');
            starElements.forEach(star => star.classList.remove('star-jump'));
        }, 1200);
        
        setTimeout(createStars, 100);
    }
    
    function createParticles(element) {
        const rect = element.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.classList.add('star-particle');
            const size = Math.random() * 5 + 3;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            
            const angle = (i / 8) * Math.PI * 2;
            const distance = 30 + Math.random() * 40;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);
            
            particle.style.animation = `particle 0.8s ease-out forwards`;
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 800);
        }
    }
    
    function handleIncorrectAnswer() {
        const wordIndex = activeWords[currentActiveIndex];
        const currentWord = vocabulary[wordIndex];

        feedbackElement.innerHTML = `Incorreto. A resposta é: <strong>${currentWord.answers[0]}</strong>`;
        feedbackElement.className = 'feedback incorrect';
        
        translationDisplay.textContent = `${currentWord.pinyin} - ${currentWord.translation}`;
        translationDisplay.style.visibility = 'visible';
            
        if (wordStars[wordIndex] > 0) {
            wordStars[wordIndex]--;
        }
        
        characterDisplay.classList.add('shake');
        answerInput.classList.add('shake');

        setTimeout(() => {
            characterDisplay.classList.remove('shake');
            answerInput.classList.remove('shake');
        }, 1000);

        createStars();
    }

    function updateProgressBar() {
        const progress = (wordsCompleted / vocabulary.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function clearInput() {
        answerInput.value = '';
        answerInput.focus();
    }

    initApp();

    // Adiciona o restante do vocabulário aqui para garantir que o código seja completo.
    // (Omitido aqui para brevidade, mas você deve ter o array `vocabulary` completo no seu arquivo)
});