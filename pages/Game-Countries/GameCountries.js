'use strict'

//звук
let audioCardDone = new Audio('/sound/interface-124464_RpPW8qfY.mp3');
let audioComplete = new Audio('/sound/680126__strangehorizon__g_neck_pop.wav');
let audioVictory = new Audio('/sound/successfull.mp3');
let audioStart = new Audio('/sound/start-game.mp3');


//правильные-неправильные ответы
let rightAnswer = 0;
let wrongAnswer = 0;
// переменные с кнопками 
let button1 = document.querySelector('.button-count__1');
let button2 = document.querySelector('.button-count__2');
let button3 = document.querySelector('.button-count__3');
let button4 = document.querySelector('.button-count__4');
let button5 = document.querySelector('.button-count__5');
let button6 = document.querySelector('.button-count__6');
let arrButtons = [button1, button2, button3, button4, button5, button6];
let numbrButtnsForMode;



//переменные с иконками флагов изи мод
let SwitzerlandImg = "/pages/Game-Countries/img/easy-mode/ch.png";
let ArmeniaImg = "/pages/Game-Countries/img/easy-mode/am.png";
let AustriaImg = "/pages/Game-Countries/img/easy-mode/at.png";
let BrazilImg = "/pages/Game-Countries/img/easy-mode/br.png";
let NorwayImg = "/pages/Game-Countries/img/easy-mode/no.png";
let BelarusImg = "/pages/Game-Countries/img/easy-mode/by.png";
let ChinaImg = "/pages/Game-Countries/img/easy-mode/cn.png";
let GermanyImg = "/pages/Game-Countries/img/easy-mode/de.png";
let DenmarkImg = "/pages/Game-Countries/img/easy-mode/dk.png";
let EstoniaImg = "/pages/Game-Countries/img/easy-mode/ee.png";
let FinlandImg = "/pages/Game-Countries/img/easy-mode/fi.png";
let FranceImg = "/pages/Game-Countries/img/easy-mode/fr.png";
let BritishImg = "/pages/Game-Countries/img/easy-mode/gb.png";
let GreeceImg = "/pages/Game-Countries/img/easy-mode/gr.png";
let IsrailImg = "/pages/Game-Countries/img/easy-mode/il.png";
let IndiaImg = "/pages/Game-Countries/img/easy-mode/in.png";
let ItalyImg = "/pages/Game-Countries/img/easy-mode/it.png";
let JapanImg = "/pages/Game-Countries/img/easy-mode/jp.png";
let KoreaImg = "/pages/Game-Countries/img/easy-mode/kr.png";
let KZImg = "/pages/Game-Countries/img/easy-mode/kz.png";
let LatviaImg = "/pages/Game-Countries/img/easy-mode/lv.png";
let NewZilandImg = "/pages/Game-Countries/img/easy-mode/nz.png";
let PolandImg = "/pages/Game-Countries/img/easy-mode/pl.png";
let PortugalImg = "/pages/Game-Countries/img/easy-mode/pt.png";
let RussianImg = "/pages/Game-Countries/img/easy-mode/ru.png";
let SwedenImg = "/pages/Game-Countries/img/easy-mode/se.png";
let SyriaImg = "/pages/Game-Countries/img/easy-mode/sy.png";
let TurkeyImg = "/pages/Game-Countries/img/easy-mode/tr.png";
let USAImg = "/pages/Game-Countries/img/easy-mode/um.png";
let CanadaImg = "/pages/Game-Countries/img/easy-mode/ca.png";
let AustraliaImg = "/pages/Game-Countries/img/easy-mode/hm.png";
let IraqImg = "/pages/Game-Countries/img/easy-mode/iq.png";
let IranImg = "/pages/Game-Countries/img/easy-mode/ir.png";
let SerbiaImg = "/pages/Game-Countries/img/easy-mode/rs.png";
let GruziaImg = "/pages/Game-Countries/img/easy-mode/ge.png";
let KNDRImg = "/pages/Game-Countries/img/easy-mode/kp.png";
let LitvaImg = "/pages/Game-Countries/img/easy-mode/lt.png";
let MoldoviaImg = "/pages/Game-Countries/img/easy-mode/md.png";
let MexicaImg = "/pages/Game-Countries/img/easy-mode/mx.png";
let SaudAraviaImg = "/pages/Game-Countries/img/easy-mode/sa.png";

let arrCounrysImgEasy = [SwitzerlandImg, ArmeniaImg, AustriaImg, BrazilImg, NorwayImg, BelarusImg, ChinaImg, GermanyImg, DenmarkImg, EstoniaImg, FinlandImg, FranceImg, BritishImg, GreeceImg, IsrailImg, IndiaImg, ItalyImg, JapanImg, KoreaImg, KZImg, LatviaImg, NewZilandImg, PolandImg, PortugalImg, RussianImg, SwedenImg, SyriaImg, TurkeyImg, USAImg, CanadaImg, AustraliaImg, IraqImg, IranImg, SerbiaImg, GruziaImg, KNDRImg, LitvaImg, MoldoviaImg, MexicaImg, SaudAraviaImg];
let arrCounrysTextEasy = ['Швейцария', 'Армения', 'Австрия', 'Бразилия', 'Норвегия', 'Беларусь', 'Китай', 'Германия', 'Дания', 'Эстония', 'Финляндия', 'Франция', 'Британия', 'Греция', 'Израиль', 'Индия', 'Италия', 'Япония', 'Корея', 'Казахстан', 'Латвия', 'Нов.Зеландия', 'Польша', 'Португалия', 'Россия', 'Швеция', 'Сирия', 'Турция', 'США', 'Канада', 'Австралия', 'Ирак', 'Иран', 'Сербия', 'Грузия', 'Северн. Корея', 'Литва', 'Молдавия', 'Мексика', 'Сауд. Аравия'];




//переменные с иконками флагов нормал мод
let ArabEmiratesImg = "/pages/Game-Countries/img/normal-mode/ae.png";
let AfganistanImg = "/pages/Game-Countries/img/normal-mode/af.png";
let AngolaImg = "/pages/Game-Countries/img/normal-mode/ao.png";
let ArgentinImg = "/pages/Game-Countries/img/normal-mode/ar.png";
let AzerbaijanImg = "/pages/Game-Countries/img/normal-mode/az.png";
let KamerunImg = "/pages/Game-Countries/img/normal-mode/cm.png";
let BelgiumImg = "/pages/Game-Countries/img/normal-mode/be.png";
let BalgarImg = "/pages/Game-Countries/img/normal-mode/bg.png";
let BoliviaImg = "/pages/Game-Countries/img/normal-mode/bo.png";
let BagamesImg = "/pages/Game-Countries/img/normal-mode/bs.png";
let ChiliImg = "/pages/Game-Countries/img/normal-mode/cl.png";
let ColumbiaImg = "/pages/Game-Countries/img/normal-mode/co.png";
let CostaRicaImg = "/pages/Game-Countries/img/normal-mode/cr.png";
let CubaImg = "/pages/Game-Countries/img/normal-mode/cu.png";
let CyprImg = "/pages/Game-Countries/img/normal-mode/cy.png";
let ChehiaImg = "/pages/Game-Countries/img/normal-mode/cz.png";
let DominicanImg = "/pages/Game-Countries/img/normal-mode/do.png";
let AlgirImg = "/pages/Game-Countries/img/normal-mode/dz.png";
let EcuadorImg = "/pages/Game-Countries/img/normal-mode/ec.png";
let EgyptImg = "/pages/Game-Countries/img/normal-mode/eg.png";
let SpainImg = "/pages/Game-Countries/img/normal-mode/es.png";
let ScotlandImg = "/pages/Game-Countries/img/normal-mode/gb-sct.png";
let GrinlandImg = "/pages/Game-Countries/img/normal-mode/gl.png";
let HarvatImg = "/pages/Game-Countries/img/normal-mode/hr.png";
let KeniaImg = "/pages/Game-Countries/img/normal-mode/ke.png";
let MadagascarImg = "/pages/Game-Countries/img/normal-mode/mg.png";
let MakedonImg = "/pages/Game-Countries/img/normal-mode/mk.png";
let NigeriaImg = "/pages/Game-Countries/img/normal-mode/ng.png";
let NiderlandImg = "/pages/Game-Countries/img/normal-mode/nl.png";
let PanamaImg = "/pages/Game-Countries/img/normal-mode/pa.png";
let PacestanImg = "/pages/Game-Countries/img/normal-mode/pk.png";
let YemenImg = "/pages/Game-Countries/img/normal-mode/ye.png";
let HonkongImg = "/pages/Game-Countries/img/normal-mode/hk.png";
let HaitiImg = "/pages/Game-Countries/img/normal-mode/ht.png";
let IndonezImg = "/pages/Game-Countries/img/normal-mode/id.png";
let IrlandImg = "/pages/Game-Countries/img/normal-mode/ie.png";
let IslandImg = "/pages/Game-Countries/img/normal-mode/is.png";
let JamaykaImg = "/pages/Game-Countries/img/normal-mode/jm.png";
let KirgizImg = "/pages/Game-Countries/img/normal-mode/kg.png";
let KombodgaImg = "/pages/Game-Countries/img/normal-mode/kh.png";
let LucsenburgImg = "/pages/Game-Countries/img/normal-mode/lu.png";
let LiviaImg = "/pages/Game-Countries/img/normal-mode/ly.png";
let MorokoImg = "/pages/Game-Countries/img/normal-mode/ma.png";
let PuertoRicoImg = "/pages/Game-Countries/img/normal-mode/pr.png";
let PalestinaImg = "/pages/Game-Countries/img/normal-mode/ps.png";
let RuminiaImg = "/pages/Game-Countries/img/normal-mode/ro.png";
let SudanImg = "/pages/Game-Countries/img/normal-mode/sd.png";
let SingapurImg = "/pages/Game-Countries/img/normal-mode/sg.png";
let SloveniaImg = "/pages/Game-Countries/img/normal-mode/si.png";
let SlovakiaImg = "/pages/Game-Countries/img/normal-mode/sk.png";
let TailandImg = "/pages/Game-Countries/img/normal-mode/th.png";
let TadjicistanImg = "/pages/Game-Countries/img/normal-mode/tj.png";
let TurkmenistanImg = "/pages/Game-Countries/img/normal-mode/tm.png";
let TaivanImg = "/pages/Game-Countries/img/normal-mode/tw.png";
let UzbecistanImg = "/pages/Game-Countries/img/normal-mode/uz.png";
let VaticanImg = "/pages/Game-Countries/img/normal-mode/va.png";
let VenesuelaImg = "/pages/Game-Countries/img/normal-mode/ve.png";
let VietnamImg = "/pages/Game-Countries/img/normal-mode/vn.png";

let arrCounrysImgNormal = [ArabEmiratesImg, AfganistanImg, AngolaImg, ArgentinImg, AzerbaijanImg, KamerunImg, BelgiumImg, BalgarImg, BoliviaImg, BagamesImg, ChiliImg, ColumbiaImg, CostaRicaImg, CubaImg, CyprImg, ChehiaImg, DominicanImg, AlgirImg, EcuadorImg, EgyptImg, SpainImg, ScotlandImg, GrinlandImg, HarvatImg, KeniaImg, MadagascarImg, MakedonImg, NigeriaImg, NiderlandImg, PanamaImg, PacestanImg, YemenImg, HonkongImg, HaitiImg, IndonezImg, IrlandImg, IslandImg, JamaykaImg, KirgizImg, KombodgaImg, LucsenburgImg, LiviaImg, MorokoImg, PuertoRicoImg, PalestinaImg, RuminiaImg, SudanImg, SingapurImg, SloveniaImg, SlovakiaImg, TailandImg, TadjicistanImg, TurkmenistanImg, TaivanImg, UzbecistanImg, VaticanImg, VenesuelaImg, VietnamImg];
let arrCounrysTextNormal = ['Араб. Эмираты', 'Афганистан', 'Ангола', 'Аргентина', 'Азербайджан', ' Камерун', 'Бельгия', 'Балгария', 'Боливия', 'Багамские ост.', 'Чили', 'Колумбия', 'Коста-Рика', 'Куба', 'Кипр', 'Чехия', 'Доминикан', 'Алжир', 'Эквадор', 'Египет', 'Испания', 'Шотландия', 'Гренландия', 'Харватия', 'Кения', 'Мадагаскар', 'Македония', 'Нигерия', 'Нидерланды', 'Панама', 'Пакистан', 'Емен', 'Гонконг', 'Гаити', 'Индонезия', 'Ирландия', 'Исландия', 'Ямайка', 'Киргизия', 'Комбоджа', 'Люксенбург', 'Ливия', 'Мороко', 'Пуэрто-Рико', 'Палестина', 'Румыния', 'Судан', 'Сингапур', 'Словения', 'Словакия', 'Таиланд', 'Таджикистан', 'Туркменистан', 'Тайвань', 'Узбекистан', 'Ватикан', 'Венисуэла', 'Вьетнам'];



//переменные с иконками флагов хард мод
let AndorraImg = "/pages/Game-Countries/img/hard-mode/ad.png";
let AlbaniaImg = "/pages/Game-Countries/img/hard-mode/al.png";
let AntarcticaImg = "/pages/Game-Countries/img/hard-mode/aq.png";
let AmericanSamoaImg = "/pages/Game-Countries/img/hard-mode/as.png";
let BosniaAndHerzegovinaImg = "/pages/Game-Countries/img/hard-mode/ba.png";
let BarbadosImg = "/pages/Game-Countries/img/hard-mode/bb.png";
let BangladeshImg = "/pages/Game-Countries/img/hard-mode/bd.png";
let BahrainImg = "/pages/Game-Countries/img/hard-mode/bh.png";
let BurundiImg = "/pages/Game-Countries/img/hard-mode/bi.png";
let BermudaImg = "/pages/Game-Countries/img/hard-mode/bm.png";
let BhutanImg = "/pages/Game-Countries/img/hard-mode/bt.png";
let BotswanaImg = "/pages/Game-Countries/img/hard-mode/bw.png";
let CentralAfricanRepublicImg = "/pages/Game-Countries/img/hard-mode/cf.png";
let CongoImg = "/pages/Game-Countries/img/hard-mode/cg.png";
let CookIslandsImg = "/pages/Game-Countries/img/hard-mode/ck.png";
let CaboVerdeImg = "/pages/Game-Countries/img/hard-mode/cv.png";
let WesternSaharaImg = "/pages/Game-Countries/img/hard-mode/eh.png";
let GabonImg = "/pages/Game-Countries/img/hard-mode/ga.png";
let GhanaImg = "/pages/Game-Countries/img/hard-mode/gh.png";
let GambiaImg = "/pages/Game-Countries/img/hard-mode/gm.png";
let GuatemalaImg = "/pages/Game-Countries/img/hard-mode/gt.png";
let GuamImg = "/pages/Game-Countries/img/hard-mode/gu.png";
let GuineaBissauImg = "/pages/Game-Countries/img/hard-mode/gw.png";
let GuyanaImg = "/pages/Game-Countries/img/hard-mode/gy.png";
let HondurasImg = "/pages/Game-Countries/img/hard-mode/hn.png";
let HungaryImg = "/pages/Game-Countries/img/hard-mode/hu.png";
let JerseyImg = "/pages/Game-Countries/img/hard-mode/je.png";
let JordanImg = "/pages/Game-Countries/img/hard-mode/jo.png";
let KuwaitImg = "/pages/Game-Countries/img/hard-mode/kw.png";
let CaymanIslandsImg = "/pages/Game-Countries/img/hard-mode/ky.png";
let LaoPeoplesDemocraticRepublicImg = "/pages/Game-Countries/img/hard-mode/la.png";
let LebanonImg = "/pages/Game-Countries/img/hard-mode/lb.png";
let SriLankaImg = "/pages/Game-Countries/img/hard-mode/lk.png";
let LiberiaImg = "/pages/Game-Countries/img/hard-mode/lr.png";
let MonacoImg = "/pages/Game-Countries/img/hard-mode/mc.png";
let MaliImg = "/pages/Game-Countries/img/hard-mode/ml.png";
let MongoliaImg = "/pages/Game-Countries/img/hard-mode/mn.png";
let MaltaImg = "/pages/Game-Countries/img/hard-mode/mt.png";
let MalaysiaImg = "/pages/Game-Countries/img/hard-mode/my.png";
let MozambiqueImg = "/pages/Game-Countries/img/hard-mode/mz.png";
let NamibiaImg = "/pages/Game-Countries/img/hard-mode/na.png";
let NigerImg = "/pages/Game-Countries/img/hard-mode/ne.png";
let NorfolkIslandImg = "/pages/Game-Countries/img/hard-mode/nf.png";
let NicaraguaImg = "/pages/Game-Countries/img/hard-mode/ni.png";
let NepalImg = "/pages/Game-Countries/img/hard-mode/np.png";
let NauruImg = "/pages/Game-Countries/img/hard-mode/nr.png";
let OmanImg = "/pages/Game-Countries/img/hard-mode/om.png";
let FrenchPolynesiaImg = "/pages/Game-Countries/img/hard-mode/pf.png";
let PapuaNewGuineaImg = "/pages/Game-Countries/img/hard-mode/pg.png";
let PhilippinesImg = "/pages/Game-Countries/img/hard-mode/ph.png";
let ParaguayImg = "/pages/Game-Countries/img/hard-mode/py.png";
let QatarImg = "/pages/Game-Countries/img/hard-mode/qa.png";
let SolomonIslandsImg = "/pages/Game-Countries/img/hard-mode/sb.png";
let SeychellesImg = "/pages/Game-Countries/img/hard-mode/sc.png";
let SomaliaImg = "/pages/Game-Countries/img/hard-mode/so.png";
let SurinameImg = "/pages/Game-Countries/img/hard-mode/sr.png";
let SouthSudanImg = "/pages/Game-Countries/img/hard-mode/ss.png";
let ElSalvadorImg = "/pages/Game-Countries/img/hard-mode/sv.png";
let TogoImg = "/pages/Game-Countries/img/hard-mode/tg.png";
let TunisiaImg = "/pages/Game-Countries/img/hard-mode/tn.png";
let UgandaImg = "/pages/Game-Countries/img/hard-mode/ug.png";
let UruguayImg = "/pages/Game-Countries/img/hard-mode/uy.png";
let VirginIslandsBritishImg = "/pages/Game-Countries/img/hard-mode/vg.png";
let VirginIslandsUSImg = "/pages/Game-Countries/img/hard-mode/vi.png";
let SamoaImg = "/pages/Game-Countries/img/hard-mode/ws.png";
let KosovoImg = "/pages/Game-Countries/img/hard-mode/xk.png";
let SouthAfricaImg = "/pages/Game-Countries/img/hard-mode/za.png";
let ZambiaImg = "/pages/Game-Countries/img/hard-mode/zm.png";
let ZimbabweImg = "/pages/Game-Countries/img/hard-mode/zw.png";


let arrCounrysImgHard = [AndorraImg, AlbaniaImg, AntarcticaImg, AmericanSamoaImg, BosniaAndHerzegovinaImg, BarbadosImg, BangladeshImg, BahrainImg, BurundiImg, BermudaImg, BhutanImg, BotswanaImg, CentralAfricanRepublicImg, CongoImg, CookIslandsImg, CaboVerdeImg, WesternSaharaImg, GabonImg, GhanaImg, GambiaImg, GuatemalaImg, GuamImg, GuineaBissauImg, GuyanaImg, HondurasImg, HungaryImg, JerseyImg, JordanImg, KuwaitImg, CaymanIslandsImg, LaoPeoplesDemocraticRepublicImg, LebanonImg, SriLankaImg, LiberiaImg, MonacoImg, MaliImg, MongoliaImg, MaltaImg, MalaysiaImg, MozambiqueImg, NamibiaImg, NigerImg, NorfolkIslandImg, NicaraguaImg, NepalImg, NauruImg, OmanImg, FrenchPolynesiaImg, PapuaNewGuineaImg, PhilippinesImg, ParaguayImg, QatarImg, SolomonIslandsImg, SeychellesImg, SomaliaImg, SurinameImg, SouthSudanImg, ElSalvadorImg, TogoImg, TunisiaImg, UgandaImg, UruguayImg, VirginIslandsBritishImg, VirginIslandsUSImg, SamoaImg, KosovoImg, SouthAfricaImg, ZambiaImg, ZimbabweImg]
let arrCounrysTextHard = ['Андорра', 'Албания', 'Антарктика', 'Америк. Самоа', 'Босн. и Герцег.', 'Барбадос', 'Бангладеш', 'Бахрейн', 'Бурунди', 'Бермудские Ост.', 'Бутан', 'Ботсвана', 'Центр. Африкан. Респ.', 'Респ. Конго', 'Ост. Кука', 'Кабо-Верде', 'Запад. Сахара', 'Габон', 'Гана', 'Гамбия', 'Гватемала', 'Гуам', 'Гвинея-Бисау', 'Гайана', 'Гондурас', 'Венгрия', 'Джерси', 'Иордания', 'Кувейт', 'Ост. Кайман', 'Лаос', 'Ливан', 'Шри-Ланка', 'Либерия', 'Монако', 'Мали', 'Монголия', 'Мальта', 'Малайзия', 'Мозамбик', 'Намибия', 'Нигер', 'Ост. Норфолк', 'Никарагуа', 'Непал', 'Науру', 'Оман', 'Французская Полинезия', 'Папуа-Нов.Гвинея', 'Филиппины', 'Парагвай', 'Катар', 'Соломоновы Ост.', 'Сейшельские Ост.', 'Сомали', 'Суринам', 'Южный Судан', 'Сальвадор', 'Того', 'Тунис', 'Уганда', 'Уругвай', 'Виргинские Ост. (Великобритания)', 'Виргинские Ост. (США)', 'Самоа', 'Респ. Косово', 'Южно-Африкан. Респ.', 'Замбия', 'Зимбабве']




//переменные с иконками флагов крейзи мод
let AntiguaandBarbudaImg = "/pages/Game-Countries/img/crazy-mode/ag.png";
let AnguillaImg = "/pages/Game-Countries/img/crazy-mode/ai.png";
let ArubaImg = "/pages/Game-Countries/img/crazy-mode/aw.png";
let ÅlandIslandsImg = "/pages/Game-Countries/img/crazy-mode/ax.png";
let BurkinaFasoImg = "/pages/Game-Countries/img/crazy-mode/bf.png";
let SaintBarthélemyImg = "/pages/Game-Countries/img/crazy-mode/bl.png";
let BruneiDarussalamImg = "/pages/Game-Countries/img/crazy-mode/bn.png";
let BonaireSintEustatiusandSabaImg = "/pages/Game-Countries/img/crazy-mode/bq.png";
let BelizeImg = "/pages/Game-Countries/img/crazy-mode/bz.png";
let CocosKeelingIslandsImg = "/pages/Game-Countries/img/crazy-mode/cc.png";
let CongoDemocraticRepublicImg = "/pages/Game-Countries/img/crazy-mode/cd.png";
let CuraçaoImg = "/pages/Game-Countries/img/crazy-mode/cw.png";
let ChristmasIslandImg = "/pages/Game-Countries/img/crazy-mode/cx.png";
let DjiboutiImg = "/pages/Game-Countries/img/crazy-mode/dj.png";
let DominicaImg = "/pages/Game-Countries/img/crazy-mode/dm.png";
let EritreaImg = "/pages/Game-Countries/img/crazy-mode/er.png";
let EthiopiaImg = "/pages/Game-Countries/img/crazy-mode/et.png";
let FijiImg = "/pages/Game-Countries/img/crazy-mode/fj.png";
let FalklandIslandsMalvinasImg = "/pages/Game-Countries/img/crazy-mode/fk.png";
let MicronesiaFederatedStatesImg = "/pages/Game-Countries/img/crazy-mode/fm.png";
let FaroeIslandsImg = "/pages/Game-Countries/img/crazy-mode/fo.png";
let NorthernIrelandImg = "/pages/Game-Countries/img/crazy-mode/gb-nir.png";
let WalesImg = "/pages/Game-Countries/img/crazy-mode/gb-wls.png";
let GrenadaImg = "/pages/Game-Countries/img/crazy-mode/gd.png";
let FrenchGuianaImg = "/pages/Game-Countries/img/crazy-mode/gf.png";
let GuernseyImg = "/pages/Game-Countries/img/crazy-mode/gg.png";
let GibraltarImg = "/pages/Game-Countries/img/crazy-mode/gi.png";
let GuadeloupeImg = "/pages/Game-Countries/img/crazy-mode/gp.png";
let EquatorialGuineaImg = "/pages/Game-Countries/img/crazy-mode/gq.png";
let SouthGeorgiaSouthSandwichIslandsImg = "/pages/Game-Countries/img/crazy-mode/gs.png";
let IsleofManImg = "/pages/Game-Countries/img/crazy-mode/im.png";
let KiribatiImg = "/pages/Game-Countries/img/crazy-mode/ki.png";
let ComorosImg = "/pages/Game-Countries/img/crazy-mode/km.png";
let SaintKittsNevisImg = "/pages/Game-Countries/img/crazy-mode/kn.png";
let SaintLuciaImg = "/pages/Game-Countries/img/crazy-mode/lc.png";
let LiechtensteinImg = "/pages/Game-Countries/img/crazy-mode/li.png";
let LesothoImg = "/pages/Game-Countries/img/crazy-mode/ls.png";
let MontenegroImg = "/pages/Game-Countries/img/crazy-mode/me.png";
let MarshallIslandsImg = "/pages/Game-Countries/img/crazy-mode/mh.png";
let MyanmarImg = "/pages/Game-Countries/img/crazy-mode/mm.png";
let MacaoImg = "/pages/Game-Countries/img/crazy-mode/mo.png";
let MartiniqueImg = "/pages/Game-Countries/img/crazy-mode/mq.png";
let MauritaniaImg = "/pages/Game-Countries/img/crazy-mode/mr.png";
let MontserratImg = "/pages/Game-Countries/img/crazy-mode/ms.png";
let MauritiusImg = "/pages/Game-Countries/img/crazy-mode/mu.png";
let MaldivesImg = "/pages/Game-Countries/img/crazy-mode/mv.png";
let MalawiImg = "/pages/Game-Countries/img/crazy-mode/mw.png";
let NewCaledoniaImg = "/pages/Game-Countries/img/crazy-mode/nc.png";
let NiueImg = "/pages/Game-Countries/img/crazy-mode/nu.png";
let SaintPierreMiquelonImg = "/pages/Game-Countries/img/crazy-mode/pm.png";
let PitcairnImg = "/pages/Game-Countries/img/crazy-mode/pn.png";
let PalauImg = "/pages/Game-Countries/img/crazy-mode/pw.png";
let RwandaImg = "/pages/Game-Countries/img/crazy-mode/rw.png";
let SaintHelenaAscensionTristandaCunhaImg = "/pages/Game-Countries/img/crazy-mode/sh.png";
let SierraLeoneImg = "/pages/Game-Countries/img/crazy-mode/sl.png";
let SanMarinoImg = "/pages/Game-Countries/img/crazy-mode/sm.png";
let SenegalImg = "/pages/Game-Countries/img/crazy-mode/sn.png";
let SaoTomePrincipeImg = "/pages/Game-Countries/img/crazy-mode/st.png";
let SintMaartenDutchpartImg = "/pages/Game-Countries/img/crazy-mode/sx.png";
let EswatiniImg = "/pages/Game-Countries/img/crazy-mode/sz.png";
let TokelauImg = "/pages/Game-Countries/img/crazy-mode/tk.png";
let TimorLesteImg = "/pages/Game-Countries/img/crazy-mode/tl.png";
let TongaImg = "/pages/Game-Countries/img/crazy-mode/to.png";
let TrinidadTobagoImg = "/pages/Game-Countries/img/crazy-mode/tt.png";
let TuvaluImg = "/pages/Game-Countries/img/crazy-mode/tv.png";
let TanzaniaUnitedRepublic = "/pages/Game-Countries/img/crazy-mode/tz.png";
let VanuatuImg = "/pages/Game-Countries/img/crazy-mode/vu.png";

let arrCounrysImgcrazy = [AntiguaandBarbudaImg, AnguillaImg, ArubaImg, ÅlandIslandsImg, BurkinaFasoImg, SaintBarthélemyImg, BruneiDarussalamImg, BonaireSintEustatiusandSabaImg, BelizeImg, CocosKeelingIslandsImg, CongoDemocraticRepublicImg, CuraçaoImg, ChristmasIslandImg, DjiboutiImg, DominicaImg, EritreaImg, EthiopiaImg, FijiImg, FalklandIslandsMalvinasImg, MicronesiaFederatedStatesImg, FaroeIslandsImg, NorthernIrelandImg, WalesImg, GrenadaImg, FrenchGuianaImg, GuernseyImg, GibraltarImg, GuadeloupeImg, EquatorialGuineaImg, SouthGeorgiaSouthSandwichIslandsImg, IsleofManImg, KiribatiImg, ComorosImg, SaintKittsNevisImg, SaintLuciaImg, LiechtensteinImg, LesothoImg, MontenegroImg, MarshallIslandsImg, MyanmarImg, MacaoImg, MartiniqueImg, MauritaniaImg, MontserratImg, MauritiusImg, MaldivesImg, MalawiImg, NewCaledoniaImg, NiueImg, SaintPierreMiquelonImg, PitcairnImg, PalauImg, RwandaImg, SaintHelenaAscensionTristandaCunhaImg, SierraLeoneImg, SanMarinoImg, SenegalImg, SaoTomePrincipeImg, SintMaartenDutchpartImg, EswatiniImg, TokelauImg, TimorLesteImg, TongaImg, TrinidadTobagoImg, TuvaluImg, TanzaniaUnitedRepublic, VanuatuImg]
let arrCounrysTextcrazy = ['Антигуа и Барбуда', 'Ангилья', 'Аруба', 'Эландские ост.', 'Буркина-Фасо', 'Сен-Бартельми', 'Бруней-Даруссалам', 'Бонайре,Саба и Синт-Эстатиус', 'Белиз', 'Кокосовые(Килинг)ост.', 'Конго, Демократ. Респ.', 'Кюрасао', 'Ост. Рождества', 'Джибути', 'Доминика', 'Эритрея', 'Эфиопия', 'Фиджи', 'Фолклендские ост.(Мальвинские)', 'Микронезия, Федеративные Штаты', 'Фарерские острова', 'Северная Ирландия', 'Уэльс', 'Гренада', 'Французская Гвиана', 'Гернси', 'Гибралтар', 'Гваделупа', 'Экваториальная Гвинея', 'Юж. Джорджия и Юж.Сандвичевы ост.', 'Ост. Мэн', 'Кирибати', 'Коморы', 'Сент-Китс и Невис', 'Сент-Люсия', 'Лихтенштейн', 'Лесото', 'Черногория', 'Маршалловы ост.', 'Мьянма', 'Макао', 'Мартиника', 'Мавритания', 'Монтсеррат', 'Маврикий', 'Мальдивы', 'Малави', 'Новая Каледония', 'Ниуэ', 'Сент-Пьер и Микелон', 'Питкерн', 'Палау', 'Руанда', 'Ост. Св. Елены, вознесения и Тристан-да-Кунья', 'Сьерра-Леоне', 'Сан-Марино', 'Сенегал', 'Сан-Томе и Принсипи', 'Синт-Мартен', 'Эсватини', 'Токелау', 'Тимор-Лесте', 'Тонга', 'Тринидад и Тобаго', 'Тувалу', 'Танзания (Об. Респ.)', 'Вануату']




// меню результатов 
let menuResultsContainer = document.querySelector(".container-results-menu");
let menuResultsRedRectangle = document.querySelector(".box-informations-orange__rectangle-red");
let menuResultsGreenRectangle = document.querySelector(".box-informations-orange__rectangle-green");
let menuResultsCercleProcents = document.querySelector('.box-informations-orange__circle-procent-results');
let menuResultsTimer = document.querySelector(".box-informations-orange__time");

let settings = document.querySelector(".pop-up__container");
let comeback = document.querySelector(".pop-up__container2");
let restart = document.querySelector(".pop-up__container3");


//считает время с начала игры
let seconds = 0;
let minutes = 0;
let expUpForMode;
let iqUpForMode;
let gameModeId;
let winForResults = 0;
let looseForResults = 0;
let statusLoosOrWin;
let rangeForMode;//до какого значения ранд числа
let ModeTimeAnim;
let chosenGameMode; //в неё записываем режим после выбора режима пользователем
let arrGameMode;//в неё записываем массив с флагами
let arrTextGameMode;
let randomNumberBtn;
let arrAlredyExistNumbrs = [];
let conditionPress = false;//при нажатии на кнопку будет true
let countRightBody = document.querySelector(".count-right");
let countWrongBody = document.querySelector(".count-wrong");
let hardModeButtonsContainer = document.querySelector('.button-hardMode-container');
let arrayRandomNumbers = [];//массив рандобных чисел для блоков без повторения
let flagsBody = document.querySelector(".flags-body-img");
let deadeLine = document.getElementById("deadeLine");
let easyModeButton = document.querySelector('.easy-mode-button');
let normalModeButton = document.querySelector('.normal-mode-button');
let hardModeButton = document.querySelector('.hard-mode-button');
let crazyModeButton = document.querySelector('.crazy-mode-button');
let modeOptionsContainer = document.querySelector('.mode-options-container');
let gameMode = document.querySelector('.game-mode');
let gameModeStyleEasy = document.querySelector('.game-mode-style-easy');
const startButtonContainer = document.querySelector('.button-start-container');
const startButtonGameMode = document.querySelector('.start-menu__game-mode');
const victoryLooseScreenContainer = document.querySelector('.victory-loose-screen-container');
const victoryLooseScreenGameMode = document.querySelector('.victory-loose-screen__mode');
const victoryLooseScreenWinLooseText = document.querySelector('.victory-loose-screen__win-loose-text');
const victoryLooseScreenResultsButton = document.querySelector('.victory-loose-screen__results-button');
const resultsMenuContainer = document.querySelector('.results-menu-container');
const resultsMenuMode = document.querySelector('.results-menu__mode');
const resultsMenuWinLooseItem = document.querySelector('.items-container__win-loose-item');
const resultsMenuTimeItem = document.querySelector('.items-container__time-item');
const resultsMenuOpenedCardsItem = document.querySelector('.opened-cards');
const resultsMenuDoneCardsItem = document.querySelector('.items-container__done-cards-item');
const resultsMenuWinLooseIcon = document.querySelector('.items-container__win-loose-icon');
const resultsMenuTime = document.querySelector('.results-menu__time');
const resultsMenuIqItem = document.querySelector('.items-container__iq-item');
const resultsMenuExpItem = document.querySelector('.items-container__exp-item');
const hintsButton = document.querySelector('.hints');
let hintCounter = document.querySelector('.hint-counter');
let eyeValueForJS = 0;
eyeValueForJS = eyeValue;//записываю из переменной с инфой из базы данных в обычн js переменную для динамич. показа на экране

//z
//AJAX запрос на сервер для добавления в базу данных инфы 
function doAjaxExperience() {

   let expUpForModeAjax;

   if (statusLoosOrWin == "win") {//проверка на победу или луз
      expUpForModeAjax = `${expUpForMode}`;
   } else {
      expUpForModeAjax = 2;
   }

   $.ajax({
      url: '/dataBase/controllers/bonusSystem/experience.php',
      type: 'POST',
      dataType: "json",
      data: {
         expUpForModeAjax: expUpForModeAjax,

      },
      success: function (data) {
         console.log(data.expUpForModeAjax);
      },
      error: function () {
         console.log('ERROR');
      }
   })
}

function doAjaxMinusHints() {//минусует подсказки


   $.ajax({
      url: '/dataBase/controllers/antiBonusSystem/minusEyeHints.php',
      type: 'POST',
      data: {
      },
      success: function (data) {
         console.log(data);
      },
      error: function () {
         console.log('ERROR');
      }
   })
}

//AJAX запрос на сервер для добавления в базу данных инфы при выйгрыше
function doAjaxWin() {
   let IqUpForModeAjax = `${iqUpForMode}`;


   $.ajax({
      url: '/dataBase/controllers/bonusSystem/bonusForWin copy.php',
      type: 'POST',
      dataType: "json",
      data: {
         IqUpForModeAjax: IqUpForModeAjax,

      },
      success: function (data) {
         console.log(data.IqUpForModeAjax);
      },
      error: function () {
         console.log('ERROR');
      }
   })
}

function doAjaxMinusHints() {


   $.ajax({
      url: '/dataBase/controllers/antiBonusSystem/minusEyeHints.php',
      type: 'POST',
      data: {
      },
      success: function (data) {
         console.log(data);
      },
      error: function () {
         console.log('ERROR');
      }
   })
}


function doAjaxLoose() {
   let IqUpForModeAjax = `2`;

   $.ajax({
      url: '/dataBase/controllers/bonusSystem/bonusForLoose.php',
      type: 'POST',
      dataType: "json",
      data: {
         IqUpForModeAjax: IqUpForModeAjax,

      },
      success: function (data) {
         console.log(data.IqUpForModeAjax);
      },
      error: function () {
         console.log('ERROR');
      }
   })
}

//AJAX запрос на сервер для добавления в базу данных инфы при выйгрыше
function doAjaxResults() {
   let modeID = `${gameModeId}`;
   let win = `${winForResults}`;
   let loose = `${looseForResults}`;
   let time_sec = `${seconds}`;
   let rightAnswerRes = `${rightAnswer}`;

   $.ajax({
      url: '/dataBase/resultsGames/resultsCountriesGame.php',
      type: 'POST',
      dataType: "json",
      data: {
         modeID: modeID,
         win: win,
         loose: loose,
         time_sec: time_sec,
         rightAnswerRes: rightAnswerRes,
      },
      success: function (data) {
         console.log(data);
      },
      error: function () {
         console.log('ERRORчик');
      }
   })
}

//z

//при нажатии на отмену вспл окна настройки 
document.querySelector('.pop-up__cancel').onclick = function () {
   settings.style = 'visibility:hidden;';
};
//при нажатии на иконку настроек
document.querySelector('.linkToTheSettings').onclick = function () {
   settings.style = 'visibility:visible;';
};

//при нажатии на отмену вспл окна назад
document.querySelector('.pop-up__cancel2').onclick = function () {
   comeback.style = 'visibility:hidden;';
};
//при нажатии на иконку назад
document.querySelector('.comeback-button').onclick = function () {
   comeback.style = 'visibility:visible;';
};

//при нажатии на отмену вспл окна рестарт
document.querySelector('.pop-up__cancel3').onclick = function () {
   restart.style = 'visibility:hidden;';
};
//при нажатии на иконку рестарт
document.querySelector('.linkToTheRestart').onclick = function () {
   restart.style = 'visibility:visible;';
};
//при нажатии на иконку подсказок
hintsButton.onclick = function () {
   if (eyeValue > 0) {
      eyeValueForJS -= 1;
      hintCounter.innerHTML = eyeValueForJS;
      audioComplete.play();
      doAjaxMinusHints();
      arrButtons[randomNumberBtn].style = 'background:green;';
      setTimeout(() => {
         arrButtons[randomNumberBtn].style = 'background:#213242;';
      }, 1000);
   }
};

easyModeButton.onclick = function () {//при нажатии на изи кнопку сложности
   chosenGameMode = 'easy';
   rangeForMode = 39;
   modeOptionsContainer.style = 'display: none;';
   gameMode.innerHTML = 'Легко';
   gameMode.classList.add('game-mode-style-easy');
   ModeTimeAnim = '60';
   startButtonContainer.style = 'display: block;';
   startButtonGameMode.innerHTML = 'Легко';
   startButtonGameMode.classList.add('start-menu__easy-game-mode');
   victoryLooseScreenGameMode.classList.add('victory-loose-screen__easy-mode');
   victoryLooseScreenGameMode.innerHTML = 'Легко';
   resultsMenuMode.classList.add('results-menu__easy-mode');
   resultsMenuMode.innerHTML = 'Легко';
   numbrButtnsForMode = 3;
   expUpForMode = 5;
   iqUpForMode = 10;
   gameModeId = 1;
   audioComplete.play();
}
normalModeButton.onclick = function () {
   chosenGameMode = 'normal';
   rangeForMode = 57;
   modeOptionsContainer.style = 'display: none;';
   gameMode.innerHTML = 'Нормально';
   gameMode.classList.add('game-mode-style-normal');
   ModeTimeAnim = '60';
   startButtonContainer.style = 'display: block;'
   startButtonGameMode.innerHTML = 'Нормально';
   startButtonGameMode.classList.add('start-menu__normal-game-mode');
   victoryLooseScreenGameMode.classList.add('victory-loose-screen__normal-mode');
   victoryLooseScreenGameMode.innerHTML = 'Нормально';
   resultsMenuMode.classList.add('results-menu__normal-mode');
   resultsMenuMode.innerHTML = 'Нормально';
   numbrButtnsForMode = 3;
   expUpForMode = 6;
   iqUpForMode = 12;
   gameModeId = 2;
   audioComplete.play();
}
hardModeButton.onclick = function () {
   chosenGameMode = 'hard';
   rangeForMode = 68;
   modeOptionsContainer.style = 'display: none;';
   gameMode.innerHTML = 'Сложно';
   gameMode.classList.add('game-mode-style-hard');
   ModeTimeAnim = '60';
   startButtonContainer.style = 'display: block;'
   startButtonGameMode.innerHTML = 'Сложно';
   startButtonGameMode.classList.add('start-menu__hard-game-mode');
   victoryLooseScreenGameMode.classList.add('victory-loose-screen__hard-mode');
   victoryLooseScreenGameMode.innerHTML = 'Сложно';
   resultsMenuMode.classList.add('results-menu__hard-mode');
   resultsMenuMode.innerHTML = 'Сложно';
   hardModeButtonsContainer.style = "display:flex;";
   numbrButtnsForMode = 5;
   expUpForMode = 8;
   iqUpForMode = 15;
   gameModeId = 3;
   audioComplete.play();
}
crazyModeButton.onclick = function () {
   chosenGameMode = 'crazy';
   rangeForMode = 66;
   modeOptionsContainer.style = 'display: none;';
   gameMode.innerHTML = 'Безумно';
   gameMode.classList.add('game-mode-style-crazy');
   ModeTimeAnim = '60';
   startButtonContainer.style = 'display: block;'
   startButtonGameMode.innerHTML = 'Безумно';
   startButtonGameMode.classList.add('start-menu__crazy-game-mode');
   victoryLooseScreenGameMode.classList.add('victory-loose-screen__crazy-mode');
   victoryLooseScreenGameMode.innerHTML = 'Безумно';
   resultsMenuMode.classList.add('results-menu__crazy-mode');
   resultsMenuMode.innerHTML = 'Безумно';
   hardModeButtonsContainer.style = "display:flex;";
   numbrButtnsForMode = 5;
   expUpForMode = 10;
   iqUpForMode = 20;
   gameModeId = 4;
   audioComplete.play();
}
victoryLooseScreenResultsButton.onclick = function () {
   resultsMenuContainer.style = 'display:block;';
   audioComplete.play();
}

//анимация проигриша 
function showLooseMessage() {
   deadeLine.style = "animation-play-state: paused ";
   victoryLooseScreenContainer.style = 'display:flex;';
   victoryLooseScreenWinLooseText.innerHTML = 'Поражение!'
   victoryLooseScreenWinLooseText.classList.add('loose-text-red');
   resultsMenuWinLooseItem.innerHTML = 'Поражение!';
   resultsMenuWinLooseItem.classList.add('items-container__win-loose-item-red');
   resultsMenuOpenedCardsItem.innerHTML = `${rightAnswer}`;
   resultsMenuTime.innerHTML = `${seconds}`;
   resultsMenuDoneCardsItem.classList.add('items-container__done-cards-item-red');
   resultsMenuTimeItem.classList.add('items-container__time-item-red');
   statusLoosOrWin = "loose";
   resultsMenuIqItem.innerHTML = '+2';
   resultsMenuExpItem.innerHTML = `+2`;
   looseForResults = 1;
   doAjaxLoose();//z //вызов запроса в БД
   doAjaxExperience();
   doAjaxResults();

}
function showWinMessage() {
   deadeLine.style = "animation-play-state: paused ";
   victoryLooseScreenContainer.style = 'display:flex;';
   victoryLooseScreenWinLooseText.innerHTML = 'Победа!'
   victoryLooseScreenWinLooseText.classList.add('victory-text-green');
   resultsMenuWinLooseItem.innerHTML = 'Победа!'
   resultsMenuWinLooseItem.classList.add('items-container__win-loose-item-green');
   resultsMenuOpenedCardsItem.innerHTML = `${rightAnswer}`;
   resultsMenuTime.innerHTML = `${seconds}`;
   resultsMenuDoneCardsItem.classList.add('items-container__done-cards-item-green');
   resultsMenuTimeItem.classList.add('items-container__time-item-green');
   resultsMenuIqItem.innerHTML = '+50';
   resultsMenuExpItem.innerHTML = '+20';
   statusLoosOrWin = "win";
   resultsMenuIqItem.innerHTML = `+${iqUpForMode}`;
   resultsMenuExpItem.innerHTML = `+${expUpForMode}`;
   winForResults = 1;
   doAjaxWin();
   doAjaxExperience();
   doAjaxResults();
   audioVictory.play();
}
deadeLine.addEventListener("animationend", showLooseMessage);

function checkPressButton(numberButton) {
   if (arrButtons[randomNumberBtn] == numberButton) {
      rightAnswer += 1;
      if (wrongAnswer > 0 && rightAnswer + wrongAnswer == 10) {
         showLooseMessage();
      }
      if (rightAnswer == 10) {
         showWinMessage();
      }
   } else {
      wrongAnswer += 1;
      if (wrongAnswer > 0 && rightAnswer + wrongAnswer == 10) {
         showLooseMessage();
      }
      if (rightAnswer == 10) {
         showLooseMessage();
      }
   }
   showFlags();
}

button1.onclick = function () {
   conditionPress = true;
   checkPressButton(button1);
   audioCardDone.play();
}
button2.onclick = function () {
   conditionPress = true;
   checkPressButton(button2);
   audioCardDone.play();
}
button3.onclick = function () {
   conditionPress = true;
   checkPressButton(button3);
   audioCardDone.play();
}
button4.onclick = function () {
   conditionPress = true;
   checkPressButton(button4);
   audioCardDone.play();
}
button5.onclick = function () {
   conditionPress = true;
   checkPressButton(button5);
   audioCardDone.play();
}
button6.onclick = function () {
   conditionPress = true;
   checkPressButton(button6);
   audioCardDone.play();
}

function ChoiseGameModeArray() {
   if (chosenGameMode == 'easy') {
      arrGameMode = arrCounrysImgEasy;
      arrTextGameMode = arrCounrysTextEasy;
   } else if (chosenGameMode == 'normal') {
      arrGameMode = arrCounrysImgNormal;
      arrTextGameMode = arrCounrysTextNormal;
   } else if (chosenGameMode == 'hard') {
      arrGameMode = arrCounrysImgHard;
      arrTextGameMode = arrCounrysTextHard;
   } else if (chosenGameMode == 'crazy') {
      arrGameMode = arrCounrysImgcrazy;
      arrTextGameMode = arrCounrysTextcrazy;
   }
}

function randomLoopForArr() {
   const count = 15;  // кол-во требуемых чисел
   let m = {};
   for (let i = 0; i < count; ++i) {
      let r = Math.floor(Math.random() * (rangeForMode - i));
      arrayRandomNumbers.push(((r in m) ? m[r] : r) + 1);
      let l = rangeForMode - i - 1;
      m[r] = (l in m) ? m[l] : l;
   }
   //console.log(arrayRandomNumbers);
}

function showFlags() {
   if (conditionPress == true) {
      arrayRandomNumbers = [];
      randomLoopForArr();
      for (let i = 0; i < arrAlredyExistNumbrs.length; i++) {
         if (arrayRandomNumbers[0] == arrAlredyExistNumbrs[i]) {
            arrayRandomNumbers = [];
            randomLoopForArr();
            //console.log('уже есть ,нужен новый');
         }
      }
      conditionPress = false;
   }
   flagsBody.innerHTML = `<img class="img-country" src="${arrGameMode[arrayRandomNumbers[0]]}">`;//добавляет флаг в html
   arrAlredyExistNumbrs.push(arrayRandomNumbers[0]);
   randomNumberBtn = Math.floor(Math.random() * numbrButtnsForMode);//рандомная кнопка с правильным ответом
   //console.log(randomNumberBtn);
   let iterCount = 1;// нужно чтобы с каждой итерац менялся индекс массива
   for (let k = 0; k <= numbrButtnsForMode; k++) {
      arrButtons[k].innerHTML = arrTextGameMode[arrayRandomNumbers[iterCount]];
      iterCount++;
   }
   arrButtons[randomNumberBtn].innerHTML = arrTextGameMode[arrayRandomNumbers[0]];//вставляет правильный ответ текст в кнопку
}


function game() {
   function timerGame() {
      let timerID = setInterval(function () {

         seconds += 1;
      }, 1000)
   }
   timerGame();
   randomLoopForArr();
   ChoiseGameModeArray();
   showFlags();
   deadeLine.style = `animation: deadeLine ${ModeTimeAnim}s linear `;//запуск анимации,c переменной под каждый мод игы
}

//активация кнопки старт при нажатии
const BUTTON_START = document.querySelector('.button-start');
BUTTON_START.onclick = function () {
   document.querySelector('.start-menu').classList.add('activated');
   BUTTON_START.classList.add('activated');
   if (BUTTON_START.classList.contains('activated')) {
      audioStart.play();
      //при нажатии кнопки старт запускается функция game и начинаеться игра
      game();
   }
}