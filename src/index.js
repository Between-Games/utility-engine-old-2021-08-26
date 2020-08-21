// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔════╗╔═╗   ╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═════╝╚══╗ ║║ ║   ╚═══╗ ╔═╝║ ╔═════╝
//    ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ╚═════╗╔══╝ ╚╝ ║       ║ ║  ║ ╚═════╗
//    ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ╔═════╝║ ╔╗ ╔══╝       ║ ║  ╚═════╗ ║
// ╔══╝ ╚══╗║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═════╗║ ║║ ╚══╗╔═╗╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═╝╚════╝╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
// ╚╗ ╔══╗ ║║ ╔═════╝║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝
//  ║ ║  ║ ║║ ╚═════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗
//  ║ ║  ║ ║║ ╔═════╝║ ║      ║ ║      ║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═════╝
// ╔╝ ╚══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║   ║ ║║ ║ ║ ╚═╗║ ╚═════╗
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═╝ ╚═══╝╚═══════╝

const _symbolRegex = new RegExp(/[!-/:-@[-`{-~¡-©«-¬®-±´¶-¸»¿×÷˂-˅˒-˟˥-˫˭˯-˿͵;΄-΅·϶҂՚-՟։-֊־׀׃׆׳-״؆-؏؛؞-؟٪-٭۔۩۽-۾܀-܍߶-߹।-॥॰৲-৳৺૱୰௳-௺౿ೱ-ೲ൹෴฿๏๚-๛༁-༗༚-༟༴༶༸༺-༽྅྾-࿅࿇-࿌࿎-࿔၊-၏႞-႟჻፠-፨᎐-᎙᙭-᙮᚛-᚜᛫-᛭᜵-᜶។-៖៘-៛᠀-᠊᥀᥄-᥅᧞-᧿᨞-᨟᭚-᭪᭴-᭼᰻-᰿᱾-᱿᾽᾿-῁῍-῏῝-῟῭-`´-῾‐-‧‰-⁞⁺-⁾₊-₎₠-₵℀-℁℃-℆℈-℉℔№-℘℞-℣℥℧℩℮℺-℻⅀-⅄⅊-⅍⅏←-⏧␀-␦⑀-⑊⒜-ⓩ─-⚝⚠-⚼⛀-⛃✁-✄✆-✉✌-✧✩-❋❍❏-❒❖❘-❞❡-❵➔➘-➯➱-➾⟀-⟊⟌⟐-⭌⭐-⭔⳥-⳪⳹-⳼⳾-⳿⸀-⸮⸰⺀-⺙⺛-⻳⼀-⿕⿰-⿻、-〄〈-〠〰〶-〷〽-〿゛-゜゠・㆐-㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉃㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꘍-꘏꙳꙾꜀-꜖꜠-꜡꞉-꞊꠨-꠫꡴-꡷꣎-꣏꤮-꤯꥟꩜-꩟﬩﴾-﴿﷼-﷽︐-︙︰-﹒﹔-﹦﹨-﹫！-／：-＠［-｀｛-･￠-￦￨-￮￼-�]|\ud800[\udd00-\udd02\udd37-\udd3f\udd79-\udd89\udd90-\udd9b\uddd0-\uddfc\udf9f\udfd0]|\ud802[\udd1f\udd3f\ude50-\ude58]|\ud809[\udc70-\udc73]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83-\udd84\udd8c-\udda9\uddae-\udddd\ude00-\ude41\ude45\udf00-\udf56]|\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud83c[\udc00-\udc2b\udc30-\udc93]/g);
const _extendedLetterRegex = new RegExp(/[A-Za-zµÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]|[\ud840-\ud868][\udc00-\udfff]|\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c-\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1e\udf30-\udf40\udf42-\udf49\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc00-\udc9d]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37-\udc38\udc3c\udc3f\udd00-\udd15\udd20-\udd39\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude33]|\ud808[\udc00-\udf6e]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e-\udc9f\udca2\udca5-\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud869[\udc00-\uded6]|\ud87e[\udc00-\ude1d]/g);
const _extendedLowercaseLetterRegex = new RegExp(/[a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķ-ĸĺļľŀłńņň-ŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌ-ƍƒƕƙ-ƛƞơƣƥƨƪ-ƫƭưƴƶƹ-ƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜ-ǝǟǡǣǥǧǩǫǭǯ-ǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿ-ɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐ-ϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻ-ϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎ-ӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣա-ևᴀ-ᴫᵢ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶ-ᾷιῂ-ῄῆ-ῇῐ-ΐῖ-ῗῠ-ῧῲ-ῴῶ-ῷⁱⁿℊℎ-ℏℓℯℴℹℼ-ℽⅆ-ⅉⅎↄⰰ-ⱞⱡⱥ-ⱦⱨⱪⱬⱱⱳ-ⱴⱶ-ⱼⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣ-ⳤⴀ-ⴥꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌﬀ-ﬆﬓ-ﬗａ-ｚ]|\ud801[\udc28-\udc4f]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]/g);
const _extendedUppercaseLetterRegex = new RegExp(/[A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸ-ŹŻŽƁ-ƂƄƆ-ƇƉ-ƋƎ-ƑƓ-ƔƖ-ƘƜ-ƝƟ-ƠƢƤƦ-ƧƩƬƮ-ƯƱ-ƳƵƷ-ƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺ-ȻȽ-ȾɁɃ-ɆɈɊɌɎͰͲͶΆΈ-ΊΌΎ-ΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹ-ϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀ-ӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԱ-ՖႠ-ჅḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾ-ℿⅅↃⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱯⱲⱵⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽ-ꝾꞀꞂꞄꞆꞋＡ-Ｚ]|\ud801[\udc00-\udc27]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e-\udc9f\udca2\udca5-\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]/g);

// ╔═══════╗╔══════╗ ╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═══╗ ║║ ╔══╗ ║ ╚═══╗ ╔═╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝
// ║ ║   ║ ║║ ╚══╝ ╚╗    ║ ║  ║ ╚═════╗║ ║         ║ ║
// ║ ║   ║ ║║ ╔═══╗ ║    ║ ║  ║ ╔═════╝║ ║         ║ ║
// ║ ╚═══╝ ║║ ╚═══╝ ║╔═══╝ ║  ║ ╚═════╗║ ╚═════╗   ║ ║
// ╚═══════╝╚═══════╝╚═════╝  ╚═══════╝╚═══════╝   ╚═╝

export function deflateObject(object, propertyKeyReference = '', deflatedObject = {}) {                         // Deflate object literal but stack property key path
    if (!isObjectLiteral(object)) throw new TypeError('Cannot deflate the non-object value that was given');    // The provided value was found to be of invalid type

    for (const propertyKey in object) {                                                                         // Loop through the properties of the provided object
        const propertyValue = object[propertyKey];                                                              // Get the value associated with current property ket

        if (isObjectLiteral(propertyValue)) {                                                                   // The property value was found to be a filled object
            deflateObject(propertyValue, `${propertyKeyReference}${propertyKey}.`, deflatedObject);             // Deflate object literal but stack property key path
        } else deflatedObject[`${propertyKeyReference}${propertyKey}`] = propertyValue;                         // Populate property of the submitted deflated object
    }

    return deflatedObject;                                                                                      // Return the newly deflated object that was provided
}

export function isObject(value) {   //
    return value === Object(value); //
}

export function isFilledObject(value) {     //
    return isObjectLiteral(value) &&        //
        Object.entries(value).length > 0;   //
}

export function isEmptyObject(value) {      //
    return isObjectLiteral(value) &&        //
        Object.entries(value).length === 0; //
}

export function isObjectLiteral(value) {        //
    return isObject(value) &&                   //
        value.constructor.name === 'Object';    //
}

// ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
// ║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗
// ║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║
// ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║
// ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝

export function isClass(value, superclassValue) {                                           //
    return isObject(value) &&                                                               //
        isObject(value.prototype) &&                                                        //
        isObject(value.prototype.constructor) &&                                            //
        value.prototype.constructor.toString().substring(0, 5) === 'class' &&               //
        (isUndefined(superclassValue) || isSubclassOfSuperclass(value, superclassValue));   //
}

export function isClassInstance(value, superclassValue) {                                               //
    return isObject(value) &&                                                                           //
        value.constructor.toString().substring(0, 5) === 'class' &&                                     //
        (isUndefined(superclassValue) || isClass(superclassValue) && value instanceof superclassValue); //
}

export function isSuperclassOfSubclass(superclassValue, subclassValue) {    //
    return isClass(superclassValue) &&                                      //
        isClass(subclassValue) &&                                           //
        subclassValue.prototype instanceof superclassValue;                 //
}

export function isSubclassOfSuperclass(subclassValue, superclassValue) {    //
    return isSuperclassOfSubclass(superclassValue, subclassValue);          //
}

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
// ║ ╔═════╝╚══╗ ╔══╝║ ╔═══╗ ║╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔═════╝
// ║ ╚═════╗   ║ ║   ║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║ ╔═══╗
// ╚═════╗ ║   ║ ║   ║ ╔═╗ ╔═╝   ║ ║   ║ ║║ ║║ ║║ ║ ╚═╗ ║
// ╔═════╝ ║   ║ ║   ║ ║ ║ ╚═╗╔══╝ ╚══╗║ ║║ ╚╝ ║║ ╚═══╝ ║
// ╚═══════╝   ╚═╝   ╚═╝ ╚═══╝╚═══════╝╚═╝╚════╝╚═══════╝

export function isString(value, minimumLength = 0, maximumLength = Number.POSITIVE_INFINITY) {  // The submitted value was found to be a valid string
    return isNumber(minimumLength, 0, maximumLength) &&                                         //
        isNumber(maximumLength, minimumLength) &&                                               //
        value != null &&                                                                        //
        value.constructor === String &&                                                         //
        value.length >= minimumLength &&                                                        //
        value.length <= maximumLength;                                                          //
}

export function isFilledString(value, maximumLength = Number.POSITIVE_INFINITY) {   // The provided value was found to be a filled string
    return isString(value, 1, maximumLength) && '' !== value.trim();                // The provided value was found to be a filled string
}

export function isEmptyString(value) {              // The provided value was found to be an empty string
    return isString(value) && '' === value.trim();  // The provided value was found to be an empty string
}

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚╗ ╔══╗ ║╚══╗ ╔══╝║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝
//  ║ ║  ║ ║   ║ ║   ║ ║ ╔═══╗   ║ ║      ║ ║
//  ║ ║  ║ ║   ║ ║   ║ ║ ╚═╗ ║   ║ ║      ║ ║
// ╔╝ ╚══╝ ║╔══╝ ╚══╗║ ╚═══╝ ║╔══╝ ╚══╗   ║ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝   ╚═╝

export function isDigit(value, minimumLength = 1, maximumLength = 1) {  //
    return isNumber(minimumLength, 0, maximumLength) &&                 //
        isNumber(maximumLength, minimumLength) &&                       //
        isString(value, minimumLength, maximumLength) &&                //
        isEmptyArray((value.match(/[^0-9]/g) || []));                   //
}

export function hasDigits(value, minimumCount = 1, maximumCount = Number.POSITIVE_INFINITY) {   //
    return isNumber(minimumCount, 0, maximumCount) &&                                           //
        isNumber(maximumCount, minimumCount) &&                                                 //
        isString(value, minimumCount) &&                                                        //
        isArray((value.match(/[0-9]/g) || []), minimumCount, maximumCount);                     //
}

// ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║
// ║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║
// ║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝
// ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗
// ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝

export function isLetter(value, minimumLength = 1, maximumLength = 1) { //
    return isNumber(minimumLength, 0, maximumLength) &&                 //
        isNumber(maximumLength, minimumLength) &&                       //
        isString(value, minimumLength, maximumLength) &&                //
        isEmptyArray((value.match(/[^a-zA-Z]/g) || []));                //
}

export function isLowercaseLetter(value, minimumLength = 1, maximumLength = 1) {    //
    return isNumber(minimumLength, 0, maximumLength) &&                             //
        isNumber(maximumLength, minimumLength) &&                                   //
        isString(value, minimumLength, maximumLength) &&                            //
        isEmptyArray((value.match(/[^a-z]/g) || []));                               //
}

export function isUppercaseLetter(value, minimumLength = 1, maximumLength = 1) {    //
    return isNumber(minimumLength, 0, maximumLength) &&                             //
        isNumber(maximumLength, minimumLength) &&                                   //
        isString(value, minimumLength, maximumLength) &&                            //
        isEmptyArray((value.match(/[^A-Z]/g) || []));                               //
}

export function isExtendedLetter(value, minimumLength = 1, maximumLength = 1) { //
    return isNumber(minimumLength, 0, maximumLength) &&                         //
        isNumber(maximumLength, minimumLength) &&                               //
        isString(value, minimumLength, maximumLength) &&                        //
        value.toLowerCase() !== value.toUpperCase();                            //
}

export function isExtendedLowercaseLetter(value, minimumLength = 1, maximumLength = 1) {
    throw new Error('The provided function has not yet been implemented');
}

export function isExtendedUppercaseLetter(value, minimumLength = 1, maximumLength = 1) {
    throw new Error('The provided function has not yet been implemented');
}

export function hasLetters(value, minimumCount = 1, maximumCount = Number.POSITIVE_INFINITY) {  //
    return isNumber(minimumCount, 0, maximumCount) &&                                           //
        isNumber(maximumCount, minimumCount) &&                                                 //
        isString(value, minimumCount) &&                                                        //
        isArray((value.match(/[a-zA-Z]/g) || []), minimumCount, maximumCount);                  //
}

export function hasLowercaseLetters(value, minimumCount = 1, maximumCount = Number.POSITIVE_INFINITY) { //
    return isNumber(minimumCount, 0, maximumCount) &&                                                   //
        isNumber(maximumCount, minimumCount) &&                                                         //
        isString(value, minimumCount) &&                                                                //
        isArray((value.match(/[a-z]/g) || []), minimumCount, maximumCount);                             //
}

export function hasUppercaseLetters(value, minimumCount = 1, maximumCount = Number.POSITIVE_INFINITY) { //
    return isNumber(minimumCount, 0, maximumCount) &&                                                   //
        isNumber(maximumCount, minimumCount) &&                                                         //
        isString(value, minimumCount) &&                                                                //
        isArray((value.match(/[A-Z]/g) || []), minimumCount, maximumCount);                             //
}

export function hasExtendedLetters(value, minimumCount = 1, maximumCount = Number.POSITIVE_INFINITY) {  //
    return isNumber(minimumCount, 0, maximumCount) &&                                                   //
        isNumber(maximumCount, minimumCount) &&                                                         //
        isString(value, minimumCount) &&                                                                //
        isArray(value.match(_extendedLetterRegex) || [], minimumCount, maximumCount);                   //
}

export function hasExtendedLowercaseLetters(value, minimumCount = 1, maximumCount = Number.POSITIVE_INFINITY) { //
    return isNumber(minimumCount, 0, maximumCount) &&                                                           //
        isNumber(maximumCount, minimumCount) &&                                                                 //
        isString(value, minimumCount) &&                                                                        //
        isArray(value.match(_extendedLowercaseLetterRegex) || [], minimumCount, maximumCount);                  //
}

export function hasExtendedUppercaseLetters(value, minimumCount = 1, maximumCount = Number.POSITIVE_INFINITY) { //
    return isNumber(minimumCount, 0, maximumCount) &&                                                           //
        isNumber(maximumCount, minimumCount) &&                                                                 //
        isString(value, minimumCount) &&                                                                        //
        isArray(value.match(_extendedUppercaseLetterRegex) || [], minimumCount, maximumCount);                  //
}

// ╔═══════╗╔═╗   ╔═╗╔═══════╗╔══════╗ ╔═══════╗╔═╗
// ║ ╔═════╝║ ║   ║ ║║ ╔╗ ╔╗ ║║ ╔══╗ ║ ║ ╔═══╗ ║║ ║
// ║ ╚═════╗║ ╚═══╝ ║║ ║║ ║║ ║║ ╚══╝ ╚╗║ ║   ║ ║║ ║
// ╚═════╗ ║╚═════╗ ║║ ║║ ║║ ║║ ╔═══╗ ║║ ║   ║ ║║ ║
// ╔═════╝ ║╔═════╝ ║║ ║║ ║║ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗
// ╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═══════╝╚═══════╝

export function isSymbol(value, minimumLength = 1, maximumLength = 1) { //
    return isNumber(minimumLength, 0, maximumLength) &&                 //
        isNumber(maximumLength, minimumLength) &&                       //
        isString(value, minimumLength, maximumLength) &&                //
        isArray(value.match(_symbolRegex), value.length, value.length); //
}

export function hasSymbols(value, minimumCount = 1, maximumCount = Number.POSITIVE_INFINITY) {  //
    return isNumber(minimumCount, 0, maximumCount) &&                                           //
        isNumber(maximumCount, minimumCount) &&                                                 //
        isString(value, minimumCount) &&                                                        //
        isArray((value.match(_symbolRegex) || []), minimumCount, maximumCount);                 //
}

// ╔═╗╔═╗╔═╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ║║ ║║ ║║ ║   ║ ║╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
// ║ ║║ ║║ ║║ ╚═══╝ ║   ║ ║      ║ ║   ║ ╚═════╗║ ╚═════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║      ║ ╚═════╗
// ║ ║║ ║║ ║║ ╔═══╗ ║   ║ ║      ║ ║   ║ ╔═════╝╚═════╗ ║║ ╔═════╝║ ╔═══╗ ║║ ║      ║ ╔═════╝
// ║ ╚╝ ╚╝ ║║ ║   ║ ║╔══╝ ╚══╗   ║ ║   ║ ╚═════╗╔═════╝ ║║ ║      ║ ║   ║ ║║ ╚═════╗║ ╚═════╗
// ╚═══════╝╚═╝   ╚═╝╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═╝      ╚═╝   ╚═╝╚═══════╝╚═══════╝

export function isWhitespace(value, minimumLength = 1, maximumLength = 1) { //
    throw new Error('The provided function has not yet been implemented');  //
}

export function hasWhitespaces(value, minimumCount = 1, maximumCount = Number.POSITIVE_INFINITY) {  // The value was found to be a string with whitespace
    return isNumber(minimumCount, 0, maximumCount) &&                                               //
        isNumber(maximumCount, minimumCount) &&                                                     //
        isString(value, minimumCount) &&                                                            //
        isArray(value.split(' '), minimumCount + 1, maximumCount + 1);                              //
}

// ╔════╗╔═╗╔═╗   ╔═╗╔═══════╗╔══════╗ ╔═══════╗╔═══════╗
// ║ ╔╗ ║║ ║║ ║   ║ ║║ ╔╗ ╔╗ ║║ ╔══╗ ║ ║ ╔═════╝║ ╔═══╗ ║
// ║ ║║ ║║ ║║ ║   ║ ║║ ║║ ║║ ║║ ╚══╝ ╚╗║ ╚═════╗║ ╚═══╝ ║
// ║ ║║ ║║ ║║ ║   ║ ║║ ║║ ║║ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═╗ ╔═╝
// ║ ║║ ╚╝ ║║ ╚═══╝ ║║ ║║ ║║ ║║ ╚═══╝ ║║ ╚═════╗║ ║ ║ ╚═╗
// ╚═╝╚════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═══════╝╚═╝ ╚═══╝

export function isNumber(value, minimum = Number.NEGATIVE_INFINITY, maximum = Number.POSITIVE_INFINITY) {   // The submitted value was found to be a valid number
    if (typeof minimum !== 'number' || typeof maximum !== 'number' || minimum > maximum) return false;      // The given size parameters were found to be invalid

    return typeof value === 'number' && value >= minimum && value <= maximum;                               // The submitted value was found to be a valid number
}

export function isPositiveNumber(value, maximum = Number.POSITIVE_INFINITY) {   // The given value was found to be a positive number
    return isNumber(maximum, 0) && isNumber(value, 0, maximum);                 // The given value was found to be a positive number
}

export function isNegativeNumber(value, minimum = Number.NEGATIVE_INFINITY) {   // The given value was found to be a negative number
    return isNumber(minimum, undefined, 0) && isNumber(value, minimum, 0);      // The given value was found to be a negative number
}

export function isBit(value) {          // The value was found to be a lone single bit number
    return value === 0 || value === 1;  // The value was found to be a lone single bit number
}

// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ║║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║
//    ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╚═════╗║ ║ ╔═══╗║ ╚═════╗║ ╚═══╝ ║
//    ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╔═════╝║ ║ ╚═╗ ║║ ╔═════╝║ ╔═╗ ╔═╝
// ╔══╝ ╚══╗║ ║║ ╚╝ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗║ ║ ║ ╚═╗
// ╚═══════╝╚═╝╚════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═╝ ╚═══╝

export function isInteger(value, minimum = Number.NEGATIVE_INFINITY, maximum = Number.POSITIVE_INFINITY) {  // The provided value was found to be a valid integer
    if (!isNumber(minimum) || !isNumber(maximum) || minimum > maximum) return false;                        // The given size parameters were found to be invalid

    return Number.isInteger(value) && isNumber(value, minimum, maximum);                                    // The provided value was found to be a valid integer
}

export function isPositiveInteger(value, maximum = Number.POSITIVE_INFINITY) {  // The given value was found to be a positive integer
    return isPositiveNumber(maximum) && isInteger(value, 0, maximum);           // The given value was found to be a positive integer
}

export function isNegativeInteger(value, minimum = Number.NEGATIVE_INFINITY) {      // The given value was found to be a negative integer
    return isNegativeNumber(minimum, undefined, 0) && isInteger(value, minimum, 0); // The given value was found to be a negative integer
}

// ╔═══════╗╔═╗   ╔═╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗
// ║ ╔═════╝║ ║   ║ ║║ ╔╗ ║║ ║║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═══╗ ║║ ╔╗ ║║ ║
// ║ ╚═════╗║ ║   ║ ║║ ║║ ║║ ║║ ║         ║ ║      ║ ║   ║ ║   ║ ║║ ║║ ║║ ║
// ║ ╔═════╝║ ║   ║ ║║ ║║ ║║ ║║ ║         ║ ║      ║ ║   ║ ║   ║ ║║ ║║ ║║ ║
// ║ ║      ║ ╚═══╝ ║║ ║║ ╚╝ ║║ ╚═════╗   ║ ║   ╔══╝ ╚══╗║ ╚═══╝ ║║ ║║ ╚╝ ║
// ╚═╝      ╚═══════╝╚═╝╚════╝╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═╝╚════╝

export function isFunction(value) {         //
    return typeof(value) === 'function';    //
}

// ╔══════╗ ╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔════╗╔═╗
// ║ ╔══╗ ║ ║ ╔═══╗ ║║ ╔═══╗ ║║ ║      ║ ╔═════╝║ ╔═══╗ ║║ ╔╗ ║║ ║
// ║ ╚══╝ ╚╗║ ║   ║ ║║ ║   ║ ║║ ║      ║ ╚═════╗║ ╚═══╝ ║║ ║║ ║║ ║
// ║ ╔═══╗ ║║ ║   ║ ║║ ║   ║ ║║ ║      ║ ╔═════╝║ ╔═══╗ ║║ ║║ ║║ ║
// ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ║   ║ ║║ ║║ ╚╝ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═╝╚════╝

export function isBoolean(value) {              //
    return value === true || value === false;   //
}

export function isFalsy(value) {    //
    return !!value;                 //
}

export function isTruthy() {                                                //
    throw new Error('The provided function has not yet been implemented');  //
}

// ╔════╗╔═╗╔═╗   ╔═╗╔═╗      ╔═╗      ╔═══════╗╔═══════╗╔═╗   ╔═╗
// ║ ╔╗ ║║ ║║ ║   ║ ║║ ║      ║ ║      ╚══╗ ╔══╝║ ╔═════╝║ ║   ║ ║
// ║ ║║ ║║ ║║ ║   ║ ║║ ║      ║ ║         ║ ║   ║ ╚═════╗║ ╚═══╝ ║
// ║ ║║ ║║ ║║ ║   ║ ║║ ║      ║ ║         ║ ║   ╚═════╗ ║║ ╔═══╗ ║
// ║ ║║ ╚╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔══╝ ╚══╗╔═════╝ ║║ ║   ║ ║
// ╚═╝╚════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝

export function isUndefined(value) { //
    return value === undefined;      //
}

export function isNullish(value) {  //
    return value == null;           //
}

export function isNull(value) { //
    return value === null;      //
}

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗
// ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ║   ║ ║
// ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║
// ║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═╗ ╔═╝║ ╔═══╗ ║╚═════╗ ║
// ║ ║   ║ ║║ ║ ║ ╚═╗║ ║ ║ ╚═╗║ ║   ║ ║╔═════╝ ║
// ╚═╝   ╚═╝╚═╝ ╚═══╝╚═╝ ╚═══╝╚═╝   ╚═╝╚═══════╝

export function toArray(value) {            //
    return isArray(value) ? value :         //
        isUndefined(value) ? [] : [value];  //
}

export function isArray(value, minimumLength = 0, maximumLength = Number.POSITIVE_INFINITY) {   //
    return isPositiveNumber(minimumLength) &&                                                   //
        isPositiveNumber(maximumLength) &&                                                      //
        maximumLength >= minimumLength &&                                                       //
        Array.isArray(value) &&                                                                 //
        value.length >= minimumLength &&                                                        //
        value.length <= maximumLength;                                                          //
}

export function isFilledArray(value, maximumLength = Number.POSITIVE_INFINITY) {    //
    return isArray(value, 1, maximumLength);                                        //
}

export function isEmptyArray(value) {   //
    return isArray(value, 0, 0);        //
}

// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝╚══╗ ║║ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
// ║ ╚═════╗╔══╝ ╚╝ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
// ║ ╔═════╝║ ╔╗ ╔══╝║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ║ ╚═════╗║ ║║ ╚══╗║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚════╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

export default {
    isString,
    isFilledString,
    isEmptyString,

    isWhitespace,
    hasWhitespaces,

    isDigit,
    hasDigits,

    isSymbol,
    hasSymbols,

    isLetter,
    isLowercaseLetter,
    isUppercaseLetter,
    hasLetters,
    hasLowercaseLetters,
    hasUppercaseLetters,

    isExtendedLetter,
    isExtendedLowercaseLetter,
    isExtendedUppercaseLetter,
    hasExtendedLetters,
    hasExtendedLowercaseLetters,
    hasExtendedUppercaseLetters,

    isNumber,
    isPositiveNumber,
    isNegativeNumber,

    isInteger,
    isPositiveInteger,
    isNegativeInteger,
    isBit,

    isObject,
    isEmptyObject,
    isFilledObject,
    isObjectLiteral,
    deflateObject,

    isClass,
    isClassInstance,
    isSubclassOfSuperclass,
    isSuperclassOfSubclass,

    isFunction,

    isBoolean,
    isTruthy,
    isFalsy,

    isNull,
    isNullish,
    isUndefined,

    toArray,
    isArray,
    isEmptyArray,
    isFilledArray,
};
