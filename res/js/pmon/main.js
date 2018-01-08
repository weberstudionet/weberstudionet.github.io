/*
$('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left' // Displays dropdown with edge aligned to the left of button
  }
);*/

Vue.component('pokemon-item', {
  props: ['pokemon'],
  template: '#pokemonCard'
});
var idMapper = {"BULBASAUR":1,"IVYSAUR":2,"VENUSAUR":3,"CHARMANDER":4,"CHARMELEON":5,"CHARIZARD":6,"SQUIRTLE":7,"WARTORTLE":8,"BLASTOISE":9,"CATERPIE":10,"METAPOD":11,"BUTTERFREE":12,"WEEDLE":13,"KAKUNA":14,"BEEDRILL":15,"PIDGEY":16,"PIDGEOTTO":17,"PIDGEOT":18,"RATTATA":19,"RATICATE":20,"SPEAROW":21,"FEAROW":22,"EKANS":23,"ARBOK":24,"PIKACHU":25,"RAICHU":26,"SANDSHREW":27,"SANDSLASH":28,"NIDORAN_FEMALE":29,"NIDORINA":30,"NIDOQUEEN":31,"NIDORAN_MALE":32,"NIDORINO":33,"NIDOKING":34,"CLEFAIRY":35,"CLEFABLE":36,"VULPIX":37,"NINETALES":38,"JIGGLYPUFF":39,"WIGGLYTUFF":40,"ZUBAT":41,"GOLBAT":42,"ODDISH":43,"GLOOM":44,"VILEPLUME":45,"PARAS":46,"PARASECT":47,"VENONAT":48,"VENOMOTH":49,"DIGLETT":50,"DUGTRIO":51,"MEOWTH":52,"PERSIAN":53,"PSYDUCK":54,"GOLDUCK":55,"MANKEY":56,"PRIMEAPE":57,"GROWLITHE":58,"ARCANINE":59,"POLIWAG":60,"POLIWHIRL":61,"POLIWRATH":62,"ABRA":63,"KADABRA":64,"ALAKAZAM":65,"MACHOP":66,"MACHOKE":67,"MACHAMP":68,"BELLSPROUT":69,"WEEPINBELL":70,"VICTREEBEL":71,"TENTACOOL":72,"TENTACRUEL":73,"GEODUDE":74,"GRAVELER":75,"GOLEM":76,"PONYTA":77,"RAPIDASH":78,"SLOWPOKE":79,"SLOWBRO":80,"MAGNEMITE":81,"MAGNETON":82,"FARFETCHD":83,"DODUO":84,"DODRIO":85,"SEEL":86,"DEWGONG":87,"GRIMER":88,"MUK":89,"SHELLDER":90,"CLOYSTER":91,"GASTLY":92,"HAUNTER":93,"GENGAR":94,"ONIX":95,"DROWZEE":96,"HYPNO":97,"KRABBY":98,"KINGLER":99,"VOLTORB":100,"ELECTRODE":101,"EXEGGCUTE":102,"EXEGGUTOR":103,"CUBONE":104,"MAROWAK":105,"HITMONLEE":106,"HITMONCHAN":107,"LICKITUNG":108,"KOFFING":109,"WEEZING":110,"RHYHORN":111,"RHYDON":112,"CHANSEY":113,"TANGELA":114,"KANGASKHAN":115,"HORSEA":116,"SEADRA":117,"GOLDEEN":118,"SEAKING":119,"STARYU":120,"STARMIE":121,"MR_MIME":122,"SCYTHER":123,"JYNX":124,"ELECTABUZZ":125,"MAGMAR":126,"PINSIR":127,"TAUROS":128,"MAGIKARP":129,"GYARADOS":130,"LAPRAS":131,"DITTO":132,"EEVEE":133,"VAPOREON":134,"JOLTEON":135,"FLAREON":136,"PORYGON":137,"OMANYTE":138,"OMASTAR":139,"KABUTO":140,"KABUTOPS":141,"AERODACTYL":142,"SNORLAX":143,"ARTICUNO":144,"ZAPDOS":145,"MOLTRES":146,"DRATINI":147,"DRAGONAIR":148,"DRAGONITE":149,"MEWTWO":150,"MEW":151,"CHIKORITA":152,"BAYLEEF":153,"MEGANIUM":154,"CYNDAQUIL":155,"QUILAVA":156,"TYPHLOSION":157,"TOTODILE":158,"CROCONAW":159,"FERALIGATR":160,"SENTRET":161,"FURRET":162,"HOOTHOOT":163,"NOCTOWL":164,"LEDYBA":165,"LEDIAN":166,"SPINARAK":167,"ARIADOS":168,"CROBAT":169,"CHINCHOU":170,"LANTURN":171,"PICHU":172,"CLEFFA":173,"IGGLYBUFF":174,"TOGEPI":175,"TOGETIC":176,"NATU":177,"XATU":178,"MAREEP":179,"FLAAFFY":180,"AMPHAROS":181,"BELLOSSOM":182,"MARILL":183,"AZUMARILL":184,"SUDOWOODO":185,"POLITOED":186,"HOPPIP":187,"SKIPLOOM":188,"JUMPLUFF":189,"AIPOM":190,"SUNKERN":191,"SUNFLORA":192,"YANMA":193,"WOOPER":194,"QUAGSIRE":195,"ESPEON":196,"UMBREON":197,"MURKROW":198,"SLOWKING":199,"MISDREAVUS":200,"UNOWN":201,"WOBBUFFET":202,"GIRAFARIG":203,"PINECO":204,"FORRETRESS":205,"DUNSPARCE":206,"GLIGAR":207,"STEELIX":208,"SNUBBULL":209,"GRANBULL":210,"QWILFISH":211,"SCIZOR":212,"SHUCKLE":213,"HERACROSS":214,"SNEASEL":215,"TEDDIURSA":216,"URSARING":217,"SLUGMA":218,"MAGCARGO":219,"SWINUB":220,"PILOSWINE":221,"CORSOLA":222,"REMORAID":223,"OCTILLERY":224,"DELIBIRD":225,"MANTINE":226,"SKARMORY":227,"HOUNDOUR":228,"HOUNDOOM":229,"KINGDRA":230,"PHANPY":231,"DONPHAN":232,"PORYGON2":233,"STANTLER":234,"SMEARGLE":235,"TYROGUE":236,"HITMONTOP":237,"SMOOCHUM":238,"ELEKID":239,"MAGBY":240,"MILTANK":241,"BLISSEY":242,"RAIKOU":243,"ENTEI":244,"SUICUNE":245,"LARVITAR":246,"PUPITAR":247,"TYRANITAR":248,"LUGIA":249,"HO_OH":250,"CELEBI":251,"TREECKO":252,"GROVYLE":253,"SCEPTILE":254,"TORCHIC":255,"COMBUSKEN":256,"BLAZIKEN":257,"MUDKIP":258,"MARSHTOMP":259,"SWAMPERT":260,"POOCHYENA":261,"MIGHTYENA":262,"ZIGZAGOON":263,"LINOONE":264,"WURMPLE":265,"SILCOON":266,"BEAUTIFLY":267,"CASCOON":268,"DUSTOX":269,"LOTAD":270,"LOMBRE":271,"LUDICOLO":272,"SEEDOT":273,"NUZLEAF":274,"SHIFTRY":275,"TAILLOW":276,"SWELLOW":277,"WINGULL":278,"PELIPPER":279,"RALTS":280,"KIRLIA":281,"GARDEVOIR":282,"SURSKIT":283,"MASQUERAIN":284,"SHROOMISH":285,"BRELOOM":286,"SLAKOTH":287,"VIGOROTH":288,"SLAKING":289,"NINCADA":290,"NINJASK":291,"SHEDINJA":292,"WHISMUR":293,"LOUDRED":294,"EXPLOUD":295,"MAKUHITA":296,"HARIYAMA":297,"AZURILL":298,"NOSEPASS":299,"SKITTY":300,"DELCATTY":301,"SABLEYE":302,"MAWILE":303,"ARON":304,"LAIRON":305,"AGGRON":306,"MEDITITE":307,"MEDICHAM":308,"ELECTRIKE":309,"MANECTRIC":310,"PLUSLE":311,"MINUN":312,"VOLBEAT":313,"ILLUMISE":314,"ROSELIA":315,"GULPIN":316,"SWALOT":317,"CARVANHA":318,"SHARPEDO":319,"WAILMER":320,"WAILORD":321,"NUMEL":322,"CAMERUPT":323,"TORKOAL":324,"SPOINK":325,"GRUMPIG":326,"SPINDA":327,"TRAPINCH":328,"VIBRAVA":329,"FLYGON":330,"CACNEA":331,"CACTURNE":332,"SWABLU":333,"ALTARIA":334,"ZANGOOSE":335,"SEVIPER":336,"LUNATONE":337,"SOLROCK":338,"BARBOACH":339,"WHISCASH":340,"CORPHISH":341,"CRAWDAUNT":342,"BALTOY":343,"CLAYDOL":344,"LILEEP":345,"CRADILY":346,"ANORITH":347,"ARMALDO":348,"FEEBAS":349,"MILOTIC":350,"CASTFORM":351,"KECLEON":352,"SHUPPET":353,"BANETTE":354,"DUSKULL":355,"DUSCLOPS":356,"TROPIUS":357,"CHIMECHO":358,"ABSOL":359,"WYNAUT":360,"SNORUNT":361,"GLALIE":362,"SPHEAL":363,"SEALEO":364,"WALREIN":365,"CLAMPERL":366,"HUNTAIL":367,"GOREBYSS":368,"RELICANTH":369,"LUVDISC":370,"BAGON":371,"SHELGON":372,"SALAMENCE":373,"BELDUM":374,"METANG":375,"METAGROSS":376,"REGIROCK":377,"REGICE":378,"REGISTEEL":379,"LATIAS":380,"LATIOS":381,"KYOGRE":382,"GROUDON":383,"RAYQUAZA":384,"JIRACHI":385,"DEOXYS":386}
var idImage = {"1":"oGJj5qy","2":"zh8mJfU","3":"DmSBrtH","4":"4es3eXd","5":"6JRn7Lx","6":"84hdMEv","7":"9SaxfOt","8":"p711nUm","9":"bVBYr8w","10":"CzemKQB","11":"uYCLD64","12":"1FJ3gmE","13":"5moHUsr","14":"iWqQ1w5","15":"KPebOkX","16":"hgPpn2J","17":"JX1BEbD","18":"tffcjAB","19":"urVOOvp","20":"coGwoq0","21":"3k7vOQl","22":"AJ7fh6L","23":"NE5aXkf","24":"gGWdwGw","25":"YVjRXvu","26":"Sm4peAw","27":"UuTQXBX","28":"a0Dm3UY","29":"y8nL9bd","30":"Bd9A6hv","31":"nRQ8nQA","32":"0UtuyS5","33":"LzY0bvh","34":"C0gJcr7","35":"uoMS1YL","36":"yFJYHlm","37":"fK3Pl9Y","38":"8dx36u6","39":"Qtvnuek","40":"SOYGdhK","41":"1ivGbcX","42":"OQ73JkD","43":"M1zy9Z3","44":"gnt8FHD","45":"PFpR9AU","46":"qh9oqWZ","47":"uKSEoaP","48":"3VgshrJ","49":"VV7Bn0H","50":"5svqDrV","51":"qIqgmxV","52":"KYSp3fL","53":"hY8ftYk","54":"tZKiQUE","55":"SxtlemS","56":"40zkSrH","57":"nuiEXYj","58":"b8MtcOP","59":"ZHCDpyQ","60":"o4kRBww","61":"dXMLcHi","62":"0TFgn5Y","63":"JeWi011","64":"wzJ7LmI","65":"aiVNSRR","66":"gGnsayA","67":"ZYgi4YT","68":"bSHfXlQ","69":"DHp1XID","70":"oPwuF5a","71":"0vaeztP","72":"dNM7T17","73":"1kurBgu","74":"eXUdWO6","75":"8ICNPay","76":"ZYa32Yi","77":"x9lUoUq","78":"3sQISZ9","79":"vfC1BvE","80":"FbG0Q2p","81":"zeSbXYA","82":"MqGSJ25","83":"19fKYB1","84":"a8TODE1","85":"nDxmQjT","86":"u4wA4jr","87":"hO05TEq","88":"spwczu2","89":"9m53xID","90":"o4FCGbS","91":"mXXREW1","92":"ATixXAh","93":"OifNLu1","94":"nrob6Pq","95":"8wvtR88","96":"IU0hBWF","97":"zf7zmKJ","98":"1cwRvxr","99":"SH8uhrP","100":"zaFhZBX","101":"ygvXnLc","102":"5hN3TIf","103":"zpo8aCn","104":"WhOxYyS","105":"0a1rwzw","106":"Wy2cgu6","107":"wO8WuyM","108":"siTPAZD","109":"5Yo8V5G","110":"LovpRfq","111":"PAEVtCb","112":"nF75Qnu","113":"RMyJ46G","114":"fPdjFJm","115":"VBPkr6X","116":"6nNutUC","117":"zuMfjQT","118":"H6i4P3L","119":"dcnAARz","120":"zuLYVJY","121":"5jMaAYf","122":"d778Qqs","123":"TspP2VX","124":"MSNFCwL","125":"uzLDC1S","126":"SgVDpeG","127":"7FR1Xrn","128":"ofFGB3b","129":"SSTtGVE","130":"3rM3RZ1","131":"dfPDWOz","132":"i5AtqjK","133":"Xf4vTeb","134":"1XyUAvX","135":"OMT9Ekx","136":"jwuAxQi","137":"UktA0V5","138":"fYK60Ta","139":"Dq1hB0V","140":"nKWMm16","141":"GdGSixJ","142":"tutXIhG","143":"3zfhcYL","144":"igl9Ehz","145":"4M6pucq","146":"yr7MPHN","147":"bug3F79","148":"VC6vX1B","149":"xuhqxX9","150":"iPdUXFM","151":"yj1T5zF","152":"D0Cjyfq","153":"rlf30ql","154":"lA6M4z9","155":"OXm4VGK","156":"uidbvqc","157":"bwdOKOG","158":"LEriDJR","159":"p7fJMYB","160":"mREDJs9","161":"RAaJrwa","162":"CvgtCDp","163":"8QV22MF","164":"7e5cgT8","165":"QVDcMYP","166":"ciDgRUy","167":"pkhXVKq","168":"qsnyffP","169":"cW38Vwz","170":"juNwyQF","171":"Vf7oZ5E","172":"J9AJKQX","173":"Gq3FK6I","174":"0O2FbFI","175":"s3v7JNg","176":"i2X8ppt","177":"yFxdaRi","178":"DAhMKhM","179":"UJZn3gU","180":"3x4HXic","181":"hffdGhj","182":"KJmLg1q","183":"xIDLC6H","184":"RHVAl2F","185":"kjek4IZ","186":"M8qtlQM","187":"BWYBVZV","188":"L5NFZPM","189":"8oC1LjR","190":"PWi628w","191":"7XtF7i7","192":"aZrhPho","193":"K98vFBS","194":"3GXOkA9","195":"cv4fPLg","196":"FDxk1E3","197":"VROD4mx","198":"5bq0PF5","199":"oYCvUCI","200":"v3MhVt1","201":"GHUdl9Z","202":"lnFtZjs","203":"Z2Djpu6","204":"iWqdS0D","205":"TyyzN2L","206":"nM2emf8","207":"lKLQsDM","208":"wB2bAFi","209":"xhtk5mp","210":"GSD4hVd","211":"CDGL8xt","212":"ohDc4Pr","213":"CMgOZZR","214":"idddqiS","215":"F8QB0V4","216":"SHP0WCz","217":"hid73Nh","218":"dBoU9SK","219":"7zFGXnQ","220":"kZ8bJiY","221":"8yjTdBH","222":"PHFMjja","223":"JFNXxIX","224":"TzMMniI","225":"qmlmIws","226":"NlPKmmR","227":"03rjQY5","228":"czzOMGh","229":"btDuW7l","230":"FIU24dB","231":"GmlJrbM","232":"9FJDNlM","233":"9bWqHfF","234":"4Ys5I9R","235":"zZ7Mz6J","236":"plYDHDS","237":"TR6WgCW","238":"LKOxh9m","239":"1527ufQ","240":"mMik1fA","241":"0t7p5se","242":"u2tmrNR","243":"flWLIBY","244":"R7z5y63","245":"lEUJ9nM","246":"vdd2y5L","247":"1PTHLnz","248":"JVbp3xa","249":"ZwjDY7I","250":"rc2TF5c","251":"3mny4vD","252":"UbJS0Mh","253":"z282jLq","254":"ztuSAa3","255":"alwfkNz","256":"LhgciAO","257":"0vM03Xa","258":"HmQoATX","259":"g4UEyNz","260":"bsQ5Geu","261":"qCKtLKo","262":"vAhDitx","263":"2dp1mM5","264":"u7XhtxY","265":"G6goGzD","266":"NTbsida","267":"1RRdR3J","268":"6TdpbRp","269":"KahgNqB","270":"4ZKfFUJ","271":"fD1gLEj","272":"n3T4fc1","273":"dxyGYbR","274":"K5h1DRz","275":"8kY295B","276":"g5xQZv3","277":"AwL6aHU","278":"sliAkJc","279":"2OwrjeT","280":"Mp4z48t","281":"J1E7jco","282":"KgpGqx7","283":"nvG0ZeL","284":"OtlZG77","285":"pMPDOPW","286":"Y4YtjRI","287":"vnn121T","288":"LEycAT0","289":"ohKaWWM","290":"W9IEvwq","291":"koOLY3g","292":"2vLKLBz","293":"pWV6DQT","294":"Yx1bleX","295":"g11uwIL","296":"5Ebhw94","297":"alw7EZw","298":"q3rchQ0","299":"2ghz4NA","300":"ZuoXrFC","301":"9ns7VgX","302":"pzV9M1l","303":"d9a8yyx","304":"ZPggC9k","305":"apoSkUi","306":"QTzPPL1","307":"1oygB20","308":"hPlK9Hb","309":"OO797kN","310":"lZrcuQc","311":"6Ai1wKY","312":"FWecMZV","313":"KB2bkw7","314":"s22f1dY","315":"Sr7teSi","316":"ku5E2UB","317":"8HBzn2F","318":"6oLcWr1","319":"D6knkam","320":"5heyexx","321":"DEHXXnj","322":"Rua9Nbb","323":"u6B1nvd","324":"Muzi5rh","325":"7BT4Jph","326":"Mkfi6ki","327":"50zH5Xz","328":"D5vrKUD","329":"aeKxExe","330":"zPStNaG","331":"BxwHGsA","332":"M1YOieQ","333":"iUHYtJY","334":"JT5q7Wx","335":"UmFSWG2","336":"PeunD7I","337":"sB4vuwa","338":"z91JyYA","339":"pla3FLZ","340":"2oRO6ml","341":"UzDQ9Up","342":"W2VBbuC","343":"jspCT4V","344":"APHlWLx","345":"9BY8GBu","346":"APuQ62z","347":"vrYKheD","348":"UWMUK4B","349":"fqLbLQl","350":"qKNzD7y","351":"mr9qqsr","352":"D9GD5od","353":"3rOVKlp","354":"0Ev050Q","355":"IXHAZJo","356":"MniChsU","357":"8x322Y5","358":"8Cdkgfs","359":"0WwPKLW","360":"59e0Jv7","361":"ndUi5kX","362":"IF0qXun","363":"tpzErsg","364":"hNayXjH","365":"ClxGVkj","366":"iVWblqV","367":"J5WMBIq","368":"JZmc9gy","369":"vr275YB","370":"1VNfZUK","371":"eTrfANf","372":"vF2XHSl","373":"8J84QSC","374":"YbswOSW","375":"viu9IGb","376":"46vHxxY","377":"zEw5fAf","378":"erFfw3C","379":"bLYvzGS","380":"ZUVEYOG","381":"Izc2ZDG","382":"ScitepI","383":"aNyJYEr","384":"LzArLDt","385":"eHcvUcm","386":"KYpGUns"};
 /*
var idMapper = {"BULBASAUR":1,"IVYSAUR":2,"VENUSAUR":3,"CHARMANDER":4,"CHARMELEON":5,"CHARIZARD":6,"SQUIRTLE":7,"WARTORTLE":8,"BLASTOISE":9,"CATERPIE":10,"METAPOD":11,"BUTTERFREE":12,"WEEDLE":13,"KAKUNA":14,"BEEDRILL":15,"PIDGEY":16,"PIDGEOTTO":17,"PIDGEOT":18,"RATTATA":19,"RATICATE":20,"SPEAROW":21,"FEAROW":22,"EKANS":23,"ARBOK":24,"PIKACHU":25,"RAICHU":26,"SANDSHREW":27,"SANDSLASH":28,"NIDORAN_FEMALE":29,"NIDORINA":30,"NIDOQUEEN":31,"NIDORAN_MALE":32,"NIDORINO":33,"NIDOKING":34,"CLEFAIRY":35,"CLEFABLE":36,"VULPIX":37,"NINETALES":38,"JIGGLYPUFF":39,"WIGGLYTUFF":40,"ZUBAT":41,"GOLBAT":42,"ODDISH":43,"GLOOM":44,"VILEPLUME":45,"PARAS":46,"PARASECT":47,"VENONAT":48,"VENOMOTH":49,"DIGLETT":50,"DUGTRIO":51,"MEOWTH":52,"PERSIAN":53,"PSYDUCK":54,"GOLDUCK":55,"MANKEY":56,"PRIMEAPE":57,"GROWLITHE":58,"ARCANINE":59,"POLIWAG":60,"POLIWHIRL":61,"POLIWRATH":62,"ABRA":63,"KADABRA":64,"ALAKAZAM":65,"MACHOP":66,"MACHOKE":67,"MACHAMP":68,"BELLSPROUT":69,"WEEPINBELL":70,"VICTREEBEL":71,"TENTACOOL":72,"TENTACRUEL":73,"GEODUDE":74,"GRAVELER":75,"GOLEM":76,"PONYTA":77,"RAPIDASH":78,"SLOWPOKE":79,"SLOWBRO":80,"MAGNEMITE":81,"MAGNETON":82,"FARFETCHD":83,"DODUO":84,"DODRIO":85,"SEEL":86,"DEWGONG":87,"GRIMER":88,"MUK":89,"SHELLDER":90,"CLOYSTER":91,"GASTLY":92,"HAUNTER":93,"GENGAR":94,"ONIX":95,"DROWZEE":96,"HYPNO":97,"KRABBY":98,"KINGLER":99,"VOLTORB":100,"ELECTRODE":101,"EXEGGCUTE":102,"EXEGGUTOR":103,"CUBONE":104,"MAROWAK":105,"HITMONLEE":106,"HITMONCHAN":107,"LICKITUNG":108,"KOFFING":109,"WEEZING":110,"RHYHORN":111,"RHYDON":112,"CHANSEY":113,"TANGELA":114,"KANGASKHAN":115,"HORSEA":116,"SEADRA":117,"GOLDEEN":118,"SEAKING":119,"STARYU":120,"STARMIE":121,"MR_MIME":122,"SCYTHER":123,"JYNX":124,"ELECTABUZZ":125,"MAGMAR":126,"PINSIR":127,"TAUROS":128,"MAGIKARP":129,"GYARADOS":130,"LAPRAS":131,"DITTO":132,"EEVEE":133,"VAPOREON":134,"JOLTEON":135,"FLAREON":136,"PORYGON":137,"OMANYTE":138,"OMASTAR":139,"KABUTO":140,"KABUTOPS":141,"AERODACTYL":142,"SNORLAX":143,"ARTICUNO":144,"ZAPDOS":145,"MOLTRES":146,"DRATINI":147,"DRAGONAIR":148,"DRAGONITE":149,"MEWTWO":150,"MEW":151,"CHIKORITA":152,"BAYLEEF":153,"MEGANIUM":154,"CYNDAQUIL":155,"QUILAVA":156,"TYPHLOSION":157,"TOTODILE":158,"CROCONAW":159,"FERALIGATR":160,"SENTRET":161,"FURRET":162,"HOOTHOOT":163,"NOCTOWL":164,"LEDYBA":165,"LEDIAN":166,"SPINARAK":167,"ARIADOS":168,"CROBAT":169,"CHINCHOU":170,"LANTURN":171,"PICHU":172,"CLEFFA":173,"IGGLYBUFF":174,"TOGEPI":175,"TOGETIC":176,"NATU":177,"XATU":178,"MAREEP":179,"FLAAFFY":180,"AMPHAROS":181,"BELLOSSOM":182,"MARILL":183,"AZUMARILL":184,"SUDOWOODO":185,"POLITOED":186,"HOPPIP":187,"SKIPLOOM":188,"JUMPLUFF":189,"AIPOM":190,"SUNKERN":191,"SUNFLORA":192,"YANMA":193,"WOOPER":194,"QUAGSIRE":195,"ESPEON":196,"UMBREON":197,"MURKROW":198,"SLOWKING":199,"MISDREAVUS":200,"UNOWN":201,"WOBBUFFET":202,"GIRAFARIG":203,"PINECO":204,"FORRETRESS":205,"DUNSPARCE":206,"GLIGAR":207,"STEELIX":208,"SNUBBULL":209,"GRANBULL":210,"QWILFISH":211,"SCIZOR":212,"SHUCKLE":213,"HERACROSS":214,"SNEASEL":215,"TEDDIURSA":216,"URSARING":217,"SLUGMA":218,"MAGCARGO":219,"SWINUB":220,"PILOSWINE":221,"CORSOLA":222,"REMORAID":223,"OCTILLERY":224,"DELIBIRD":225,"MANTINE":226,"SKARMORY":227,"HOUNDOUR":228,"HOUNDOOM":229,"KINGDRA":230,"PHANPY":231,"DONPHAN":232,"PORYGON2":233,"STANTLER":234,"SMEARGLE":235,"TYROGUE":236,"HITMONTOP":237,"SMOOCHUM":238,"ELEKID":239,"MAGBY":240,"MILTANK":241,"BLISSEY":242,"RAIKOU":243,"ENTEI":244,"SUICUNE":245,"LARVITAR":246,"PUPITAR":247,"TYRANITAR":248,"LUGIA":249,"HO-OH":250,"CELEBI":251,"TREECKO":252,"GROVYLE":253,"SCEPTILE":254,"TORCHIC":255,"COMBUSKEN":256,"BLAZIKEN":257,"MUDKIP":258,"MARSHTOMP":259,"SWAMPERT":260,"POOCHYENA":261,"MIGHTYENA":262,"ZIGZAGOON":263,"LINOONE":264,"WURMPLE":265,"SILCOON":266,"BEAUTIFLY":267,"CASCOON":268,"DUSTOX":269,"LOTAD":270,"LOMBRE":271,"LUDICOLO":272,"SEEDOT":273,"NUZLEAF":274,"SHIFTRY":275,"TAILLOW":276,"SWELLOW":277,"WINGULL":278,"PELIPPER":279,"RALTS":280,"KIRLIA":281,"GARDEVOIR":282,"SURSKIT":283,"MASQUERAIN":284,"SHROOMISH":285,"BRELOOM":286,"SLAKOTH":287,"VIGOROTH":288,"SLAKING":289,"NINCADA":290,"NINJASK":291,"SHEDINJA":292,"WHISMUR":293,"LOUDRED":294,"EXPLOUD":295,"MAKUHITA":296,"HARIYAMA":297,"AZURILL":298,"NOSEPASS":299,"SKITTY":300,"DELCATTY":301,"SABLEYE":302,"MAWILE":303,"ARON":304,"LAIRON":305,"AGGRON":306,"MEDITITE":307,"MEDICHAM":308,"ELECTRIKE":309,"MANECTRIC":310,"PLUSLE":311,"MINUN":312,"VOLBEAT":313,"ILLUMISE":314,"ROSELIA":315,"GULPIN":316,"SWALOT":317,"CARVANHA":318,"SHARPEDO":319,"WAILMER":320,"WAILORD":321,"NUMEL":322,"CAMERUPT":323,"TORKOAL":324,"SPOINK":325,"GRUMPIG":326,"SPINDA":327,"TRAPINCH":328,"VIBRAVA":329,"FLYGON":330,"CACNEA":331,"CACTURNE":332,"SWABLU":333,"ALTARIA":334,"ZANGOOSE":335,"SEVIPER":336,"LUNATONE":337,"SOLROCK":338,"BARBOACH":339,"WHISCASH":340,"CORPHISH":341,"CRAWDAUNT":342,"BALTOY":343,"CLAYDOL":344,"LILEEP":345,"CRADILY":346,"ANORITH":347,"ARMALDO":348,"FEEBAS":349,"MILOTIC":350,"CASTFORM":351,"KECLEON":352,"SHUPPET":353,"BANETTE":354,"DUSKULL":355,"DUSCLOPS":356,"TROPIUS":357,"CHIMECHO":358,"ABSOL":359,"WYNAUT":360,"SNORUNT":361,"GLALIE":362,"SPHEAL":363,"SEALEO":364,"WALREIN":365,"CLAMPERL":366,"HUNTAIL":367,"GOREBYSS":368,"RELICANTH":369,"LUVDISC":370,"BAGON":371,"SHELGON":372,"SALAMENCE":373,"BELDUM":374,"METANG":375,"METAGROSS":376,"REGIROCK":377,"REGICE":378,"REGISTEEL":379,"LATIAS":380,"LATIOS":381,"KYOGRE":382,"GROUDON":383,"RAYQUAZA":384,"JIRACHI":385,"DEOXYS":386}
var idImage = {"1":"oGJj5qy","2":"zh8mJfU","3":"DmSBrtH","4":"4es3eXd","5":"6JRn7Lx","6":"84hdMEv","7":"9SaxfOt","8":"p711nUm","9":"bVBYr8w","10":"CzemKQB","11":"uYCLD64","12":"1FJ3gmE","13":"5moHUsr","14":"iWqQ1w5","15":"KPebOkX","16":"hgPpn2J","17":"JX1BEbD","18":"tffcjAB","19":"urVOOvp","20":"coGwoq0","21":"3k7vOQl","22":"AJ7fh6L","23":"NE5aXkf","24":"gGWdwGw","25":"YVjRXvu","26":"Sm4peAw","27":"UuTQXBX","28":"a0Dm3UY","29":"y8nL9bd","30":"Bd9A6hv","31":"nRQ8nQA","32":"0UtuyS5","33":"LzY0bvh","34":"C0gJcr7","35":"uoMS1YL","36":"yFJYHlm","37":"fK3Pl9Y","38":"8dx36u6","39":"Qtvnuek","40":"SOYGdhK","41":"1ivGbcX","42":"OQ73JkD","43":"M1zy9Z3","44":"gnt8FHD","45":"PFpR9AU","46":"qh9oqWZ","47":"uKSEoaP","48":"3VgshrJ","49":"VV7Bn0H","50":"5svqDrV","51":"qIqgmxV","52":"KYSp3fL","53":"hY8ftYk","54":"tZKiQUE","55":"SxtlemS","56":"40zkSrH","57":"nuiEXYj","58":"b8MtcOP","59":"ZHCDpyQ","60":"o4kRBww","61":"dXMLcHi","62":"0TFgn5Y","63":"JeWi011","64":"wzJ7LmI","65":"aiVNSRR","66":"gGnsayA","67":"ZYgi4YT","68":"bSHfXlQ","69":"DHp1XID","70":"oPwuF5a","71":"0vaeztP","72":"dNM7T17","73":"1kurBgu","74":"eXUdWO6","75":"8ICNPay","76":"ZYa32Yi","77":"x9lUoUq","78":"3sQISZ9","79":"vfC1BvE","80":"FbG0Q2p","81":"zeSbXYA","82":"MqGSJ25","83":"19fKYB1","84":"a8TODE1","85":"nDxmQjT","86":"u4wA4jr","87":"hO05TEq","88":"spwczu2","89":"9m53xID","90":"o4FCGbS","91":"mXXREW1","92":"ATixXAh","93":"OifNLu1","94":"nrob6Pq","95":"8wvtR88","96":"IU0hBWF","97":"zf7zmKJ","98":"1cwRvxr","99":"SH8uhrP","100":"zaFhZBX","101":"ygvXnLc","102":"5hN3TIf","103":"zpo8aCn","104":"WhOxYyS","105":"0a1rwzw","106":"Wy2cgu6","107":"wO8WuyM","108":"siTPAZD","109":"5Yo8V5G","110":"LovpRfq","111":"PAEVtCb","112":"nF75Qnu","113":"RMyJ46G","114":"fPdjFJm","115":"VBPkr6X","116":"6nNutUC","117":"zuMfjQT","118":"H6i4P3L","119":"dcnAARz","120":"zuLYVJY","121":"5jMaAYf","122":"d778Qqs","123":"TspP2VX","124":"MSNFCwL","125":"uzLDC1S","126":"SgVDpeG","127":"7FR1Xrn","128":"ofFGB3b","129":"SSTtGVE","130":"3rM3RZ1","131":"dfPDWOz","132":"i5AtqjK","133":"Xf4vTeb","134":"1XyUAvX","135":"OMT9Ekx","136":"jwuAxQi","137":"UktA0V5","138":"fYK60Ta","139":"Dq1hB0V","140":"nKWMm16","141":"GdGSixJ","142":"tutXIhG","143":"3zfhcYL","144":"igl9Ehz","145":"4M6pucq","146":"yr7MPHN","147":"bug3F79","148":"VC6vX1B","149":"xuhqxX9","150":"iPdUXFM","151":"yj1T5zF","152":"D0Cjyfq","153":"rlf30ql","154":"lA6M4z9","155":"OXm4VGK","156":"uidbvqc","157":"bwdOKOG","158":"LEriDJR","159":"p7fJMYB","160":"mREDJs9","161":"RAaJrwa","162":"CvgtCDp","163":"8QV22MF","164":"7e5cgT8","165":"QVDcMYP","166":"ciDgRUy","167":"pkhXVKq","168":"qsnyffP","169":"cW38Vwz","170":"juNwyQF","171":"Vf7oZ5E","172":"J9AJKQX","173":"Gq3FK6I","174":"0O2FbFI","175":"s3v7JNg","176":"i2X8ppt","177":"yFxdaRi","178":"DAhMKhM","179":"UJZn3gU","180":"3x4HXic","181":"hffdGhj","182":"KJmLg1q","183":"xIDLC6H","184":"RHVAl2F","185":"kjek4IZ","186":"M8qtlQM","187":"BWYBVZV","188":"L5NFZPM","189":"8oC1LjR","190":"PWi628w","191":"7XtF7i7","192":"aZrhPho","193":"K98vFBS","194":"3GXOkA9","195":"cv4fPLg","196":"FDxk1E3","197":"VROD4mx","198":"5bq0PF5","199":"oYCvUCI","200":"v3MhVt1","201":"GHUdl9Z","202":"lnFtZjs","203":"Z2Djpu6","204":"iWqdS0D","205":"TyyzN2L","206":"nM2emf8","207":"lKLQsDM","208":"wB2bAFi","209":"xhtk5mp","210":"GSD4hVd","211":"CDGL8xt","212":"ohDc4Pr","213":"CMgOZZR","214":"idddqiS","215":"F8QB0V4","216":"SHP0WCz","217":"hid73Nh","218":"dBoU9SK","219":"7zFGXnQ","220":"kZ8bJiY","221":"8yjTdBH","222":"PHFMjja","223":"JFNXxIX","224":"TzMMniI","225":"qmlmIws","226":"NlPKmmR","227":"03rjQY5","228":"czzOMGh","229":"btDuW7l","230":"FIU24dB","231":"GmlJrbM","232":"9FJDNlM","233":"9bWqHfF","234":"4Ys5I9R","235":"zZ7Mz6J","236":"plYDHDS","237":"TR6WgCW","238":"LKOxh9m","239":"1527ufQ","240":"mMik1fA","241":"0t7p5se","242":"u2tmrNR","243":"flWLIBY","244":"R7z5y63","245":"lEUJ9nM","246":"vdd2y5L","247":"1PTHLnz","248":"JVbp3xa","249":"ZwjDY7I","250":"rc2TF5c","251":"3mny4vD","252":"UbJS0Mh","253":"z282jLq","254":"ztuSAa3","255":"alwfkNz","256":"LhgciAO","257":"0vM03Xa","258":"HmQoATX","259":"g4UEyNz","260":"bsQ5Geu","261":"qCKtLKo","262":"vAhDitx","263":"2dp1mM5","264":"u7XhtxY","265":"G6goGzD","266":"NTbsida","267":"1RRdR3J","268":"6TdpbRp","269":"KahgNqB","270":"4ZKfFUJ","271":"fD1gLEj","272":"n3T4fc1","273":"dxyGYbR","274":"K5h1DRz","275":"8kY295B","276":"g5xQZv3","277":"AwL6aHU","278":"sliAkJc","279":"2OwrjeT","280":"Mp4z48t","281":"J1E7jco","282":"KgpGqx7","283":"nvG0ZeL","284":"OtlZG77","285":"pMPDOPW","286":"Y4YtjRI","287":"vnn121T","288":"LEycAT0","289":"ohKaWWM","290":"W9IEvwq","291":"koOLY3g","292":"2vLKLBz","293":"pWV6DQT","294":"Yx1bleX","295":"g11uwIL","296":"5Ebhw94","297":"alw7EZw","298":"q3rchQ0","299":"2ghz4NA","300":"ZuoXrFC","301":"9ns7VgX","302":"pzV9M1l","303":"d9a8yyx","304":"ZPggC9k","305":"apoSkUi","306":"QTzPPL1","307":"1oygB20","308":"hPlK9Hb","309":"8KFjU","310":"rZzFU","311":"8cZm2sY","312":"UbJS0Mh","313":"z282jLq","314":"ztuSAa3","315":"alwfkNz","316":"LhgciAO","317":"0vM03Xa","318":"HmQoATX","319":"g4UEyNz","320":"bsQ5Geu","321":"qCKtLKo","322":"vAhDitx","323":"2dp1mM5","324":"u7XhtxY","325":"G6goGzD","326":"NTbsida","327":"1RRdR3J","328":"6TdpbRp","329":"KahgNqB","330":"4ZKfFUJ","331":"fD1gLEj","332":"n3T4fc1","333":"dxyGYbR","334":"K5h1DRz","335":"8kY295B","336":"g5xQZv3","337":"AwL6aHU","338":"sliAkJc","339":"2OwrjeT","340":"Mp4z48t","341":"J1E7jco","342":"KgpGqx7","343":"nvG0ZeL","344":"OtlZG77","345":"pMPDOPW","346":"Y4YtjRI","347":"vnn121T","348":"LEycAT0","349":"ohKaWWM","350":"W9IEvwq","351":"koOLY3g","352":"2vLKLBz","353":"pWV6DQT","354":"Yx1bleX","355":"g11uwIL","356":"5Ebhw94","357":"alw7EZw","358":"q3rchQ0","359":"2ghz4NA","360":"ZuoXrFC","361":"9ns7VgX","362":"pzV9M1l","363":"d9a8yyx","364":"ZPggC9k","365":"apoSkUi","366":"QTzPPL1","367":"1oygB20","368":"hPlK9Hb","369":"vr275YB","370":"1VNfZUK","371":"eTrfANf","372":"vF2XHSl","373":"8J84QSC","374":"YbswOSW","375":"viu9IGb","376":"46vHxxY","377":"zEw5fAf","378":"erFfw3C","379":"bLYvzGS","380":"ZUVEYOG","381":"Izc2ZDG","382":"ScitepI","383":"aNyJYEr","384":"LzArLDt","385":"eHcvUcm","386":"KYpGUns"};
*/
var init = {
  method: 'get'
};

var userId = getParameterByName('id');
if (userId != null) {
  userId.replace(/</g, "&lt;").replace(/>/g, "&gt;");
} else {
  userId = 'listings';
}
/**
Vue.component('pokemon-player', {
  props: ['player'],
  template: '#pokemonPlayer'
});
**/
//https://ivgo.info/userdata/?id=ce05160563e1bb1a05
//https://api.ivgo.info/userdata/ce05160563e1bb1a05
<<<<<<< HEAD
  $.get('http://192.168.1.69/res/js/pmon/'+userId+'.json', function(data) {
=======
  $.get('http://weberstudio.net/res/js/pmon/'+userId+'.json', function(data) {
>>>>>>> f3844c42feb9b508df409254aebef9564442245c
    console.log('*');
    console.log(data);
    console.log('*');

    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      hover: false, // force response to clicks only
      //alignment: 'left' // Displays dropdown with edge aligned to the left of button
     });

    var dataArr = [];
    for(var i=0;i<data.length;i++){
      var e=data[i];
      if(e.inventoryItemData !== undefined && e.inventoryItemData.pokemonData && !e.inventoryItemData.pokemonData.isEgg){
        var pokemon = e.inventoryItemData.pokemonData;
        if(idMapper[pokemon.pokemonId]) {
            pokemon.id = idMapper[pokemon.pokemonId];
        } else {
            pokemon.id = pokemon.pokemonId;
        }
        pokemon.individualAttack = pokemon.individualAttack ? pokemon.individualAttack:0;
        pokemon.individualDefense = pokemon.individualDefense ? pokemon.individualDefense:0;
        pokemon.individualStamina = pokemon.individualStamina ? pokemon.individualStamina:0;
        pokemon.imgLink = 'https://i.imgur.com/'+idImage[pokemon.id]+'.jpg';
        pokemon.iv = pokemon.individualAttack + pokemon.individualDefense + pokemon.individualStamina;
        pokemon.name = pokemon.pokemonId;
        if(pokemon.nickname) {
          pokemon.name = pokemon.nickname;
        }
        pokemon.rank = getRank(pokemon.iv);
        pokemon.rankColor = getRankColor(pokemon.iv);
        dataArr.push(pokemon);
      }
    }
    dataArr.sort(function (a, b) {
      if(a.cp && b.cp) {
        return b.cp - a.cp;
      }
      if(a.cp && !b.cp) {
        return 0-a.cp;
      }
      if(!a.cp && b.cp) {
        return b.cp;
      }
      return 0;
    });
  new Vue({
    el: '#app',
    data: {
      pokemons : dataArr,
      sortKey: 'iv'
    },
    computed: {
      sortedData: function () {
        if(this.sortKey == 'cp') {
          return this.pokemons.slice().sort(function (a, b) {
          var aValue = a.cp? a.cp:0;
          var bValue = b.cp? b.cp:0;
          return bValue - aValue;
          });
        } else if(this.sortKey == 'iv') {
          return this.pokemons.slice().sort(function (a, b) {
            var aValue = a.iv? a.iv:0;
            var bValue = b.iv? b.iv:0;
            return bValue - aValue;
          });
        } else if(this.sortKey =='name') {
          return this.pokemons.slice().sort(function (a, b) {
            if(b.name == a.name) {
              var aValue = a.cp? a.cp:0;
              var bValue = b.cp? b.cp:0;
              return bValue - aValue;
            } else if(b.name < a.name) {
              return 1;
            } else {
              return -1;
            }
          });
        } else if(this.sortKey == 'pokedex') {
          return this.pokemons.slice().sort(function (a, b) {
            if(b.id == a.id) {
              var aValue = a.cp? a.cp:0;
              var bValue = b.cp? b.cp:0;
              return bValue - aValue;
            }
            return a.id - b.id;
          });
          // add health
        } else if(this.sortKey == 'health') {
          return this.pokemons.slice().sort(function (a, b) {
            if(b.staminaMax == a.staminaMax) {
              var aValue = a.staminaMax? a.staminaMax:0;
              var bValue = b.staminaMax? b.staminaMax:0;
              return bValue - aValue;
            }
            return b.staminaMax - a.staminaMax; //max health on top
          });
        } else {
          return this.pokemons.slice().sort(function (a, b) {
            var aValue = a.creationTimeMs? a.creationTimeMs:0;
            var bValue = b.creationTimeMs? b.creationTimeMs:0;
            return bValue - aValue;
          });
        }
      },
      sortKeyDisplay: function () {
        if(this.sortKey == 'cp') {
          return 'CP';
        }
        if(this.sortKey == 'iv') {
          return 'IV';
        } else if(this.sortKey =='name') {
          return 'Name';
        } else if(this.sortKey == 'pokedex') {
          return '#';
        } else if(this.sortKey == 'recent') {
          return 'Recent';
        } else if(this.sortKey == 'health') {
          return '<3';
        }
      }
    },
    methods: {
      isSortBy: function(sort) {
        if(this.sortKey == sort) {
          return true;
        }
        return false;
      },
      nameSort: function (event) {
        this.sortKey = 'name';
      },
      cpSort: function (event) {
        this.sortKey = 'cp';
      },
      ivSort: function (event) {
        this.sortKey = 'iv';
      },
      pokedexSort: function(event) {
        this.sortKey = 'pokedex';
      },
      recentSort: function(event) {
        this.sortKey = 'recent';
      },
      healthSort: function(event) {
        this.sortKey = 'health';
      }
    }
  });
});

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getRank(ivSum) {
  if(ivSum==45) {
      return "SSS"
  }
  if(ivSum>=43) {
      return "SS"
  }
  if(ivSum>=41) {
      return "S"
  }
  if(ivSum>=36) {
      return "A"
  }
  if(ivSum>=27) {
      return "B"
  }
  if(ivSum>=18) {
      return "C"
  }
  return "D"
}

function getRankColor(ivSum) {
  if(ivSum==45) {
      return 'rgb(153,0,153)';
  }
  if(ivSum>=43) {
      return 'rgb(153,0,153)';
  }
  if(ivSum>=41) {
      return 'rgb(230, 0, 0)';
  }
  if(ivSum>=36) {
      return 'rgb(255, 128, 0)';
  }
  if(ivSum>=27) {
      return 'rgb(33, 191, 0)';
  }
  if(ivSum>=18) {
      return 'rgb(0, 153, 230)';
  }
  return 'rgb(140,140,140)';
}
