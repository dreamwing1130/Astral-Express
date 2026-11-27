const sceneBase={"engine":"推開厚重的金屬門，一股熱浪迎面而來。\n\n巨大的鍋爐占據了車廂的大半空間，粗大的銅製管線沿著牆壁延伸，數個儀表上的指針隨著引擎的運轉微微顫動。\n\n鍋爐旁堆放著大量煤炭，空氣中瀰漫著煤煙與金屬受熱後的氣味。腳下的地板不斷傳來低沉而規律的震動。","dining":"深色的木質地板與金色壁燈相互映襯，兩側整齊排列著鋪有潔白桌巾的餐桌。\n\n銀製餐具與玻璃杯在燈光下泛著微光，車廂的一側設有供應餐點的櫃檯，旁邊則是一扇通往員工工作區的門。\n\n列車寬大的車窗提供了極佳的視野，坐在窗邊便能欣賞沿途的景色。","kitchen":"與餐廳華麗的裝潢不同，廚房內的擺設以實用為主。\n\n一整排料理檯沿著牆壁設置，上方掛著各式刀具、鍋鏟與烹飪器具。另一側則擺放著食材儲藏櫃、冷藏櫃與酒櫃。\n\n爐火散發著溫熱的氣息，料理的香味充斥著整個空間。","hall":"交誼廳比其他車廂更加寬敞，數張柔軟的沙發圍繞著木製矮桌，桌上擺放著茶具與幾本供旅客閱讀的書籍。\n\n牆面掛滿了大小不一的肖像畫，畫中的人物衣著各異，似乎來自不同的年代。\n\n靠近車窗的位置擺放著一架保養良好的鋼琴，琴蓋上沒有半點灰塵。","corr":"狹長的走廊鋪著柔軟的地毯，金色壁燈沿著牆面依序排列。牆壁上的木質飾板雕刻著精緻的花紋。\n\n第一扇客房門旁掛著刻有數字「1」的銅牌，這裡便是你的房間。","own":"推開房門，一間整潔而舒適的客房映入眼簾。\n\n柔軟的單人床靠著牆壁擺放，床尾鋪著一張繡有金色花紋的地毯。窗邊設有一張小桌與座椅，桌上放著列車的旅行指南及一壺飲用水，旁邊設有一盞壁燈。\n\n你的行李已經安置在床邊，房間內還留有足夠的空間供你活動。\n\n關上房門後，車廂外的聲音變得微弱，只剩下列車行進時輕微的震動。","corr2":"走廊繼續向列車後方延伸，牆上的壁燈隨著車身輕微晃動。\n\n第二間客房的門旁掛著數字「2」的銅牌。依照乘務員先前的介紹，這裡是那位法師的房間。","mageRoom":"房間內的家具與你的客房大致相同，但窗邊的小桌幾乎被書籍與紙張占滿。\n\n幾張繪有星辰與天體運行軌跡的圖紙攤開在桌面上，旁邊擺放著墨水瓶、羽毛筆，以及一具小巧的黃銅製觀星儀器。\n\n床邊放著整理妥當的旅行袋，換洗衣物也整齊地疊放在一旁。\n\n整個房間除了書桌略顯擁擠之外，其餘地方都維持得相當整潔。","corr3":"這一段走廊與前方的裝潢大致相同，牆面掛著幾幅描繪山川與湖泊的風景畫。\n\n第三間客房位於走廊的一側，門旁的銅牌上刻著數字「3」。","boyRoom":"房門一打開，便能看見一個鼓鼓囊囊的旅行背包靠在床邊。\n\n背包的袋口敞開著，露出繩索、換洗衣物與一些旅行用品。床上隨意放著一件短斗篷，旁邊還有幾張折得不太整齊的地圖。\n\n窗邊的小桌上擺著一本薄薄的旅行筆記，書頁間夾著幾張手繪的圖畫。\n\n一雙沾有些許泥土的旅行靴被擺在床底，房間雖然有些凌亂，卻不至於骯髒。","corr4":"走廊在此抵達盡頭。\n\n第四間客房的門旁掛著數字「4」的銅牌，而走廊最末端則是一面雕刻著裝飾花紋的木質牆板。\n\n這裡沒有窗戶，僅靠兩盞壁燈提供照明。","boss":"與其他客房相比，這間房間多了不少昂貴的私人物品。\n\n床上鋪著一條質地細緻的深紅色毯子，座椅上放著額外的刺繡靠墊。床邊擺著一只做工精緻的皮革行李箱，箱扣上刻有金色的徽記。\n\n窗邊的小桌上整齊疊放著數份商業文件，旁邊擺著鋼筆、印章與一只精緻的懷錶。\n\n一件帶有毛皮領口的外套掛在牆邊，空氣中帶著淡淡的香水氣味。","shrine":"穿過入口，一間沒有窗戶的幽靜車廂出現在你的面前。\n\n深色的牆面雕刻著星辰與天體的圖案，地板中央鋪著一張繡有星空紋樣的圓形地毯。\n\n車廂的中央矗立著一座黑色的圓形祭壇，表面刻有細緻的紋路，中央排列著三處凹槽。\n\n與列車其他地方不同，這裡幾乎感受不到引擎運轉所帶來的震動。"};
function sceneDescription(){const loc=s.loc, lines=[sceneBase[loc]], at=n=>npcRoom(n)===loc, add=x=>lines.push(x);
if(loc==='engine'){if(at('captain')){add('一團比你還高大的熔岩史萊姆守在鍋爐旁，體內流動著橘紅色的光芒，頭頂戴著一頂與身形極不相稱的列車長帽。');add(s.flags.snackDisk?'牠瞥了你一眼，便繼續照看鍋爐中的煤火。':'牠注意到了你的到來，緩緩轉過身，發出低沉的咕嚕聲。')}else if(s.flags.captainDead)add('鍋爐仍在運轉，卻已無人照看。儀表上的指針開始不規律地跳動。')}
if(loc==='dining'){if(at('staff'))add('乘務員站在餐廳入口附近，手中拿著一本名冊，偶爾向旅客點頭致意。');if(at('mage'))add('法師獨自坐在桌旁，手邊放著一本書，偶爾抬頭望向窗外。');if(at('boy')&&!boyFollowing())add(s.flags.staffDead?'橘髮少年坐在餐桌旁，雙手握著胸前的墜飾，不時望向入口。':'橘髮少年坐在餐桌旁，饒有興致地打量著來回工作的史萊姆。');if(at('boss'))add('衣著華貴的老者坐在靠窗的位置，手杖倚在座椅旁，桌上擺放著精緻的餐點。');if(!s.flags.chefDead&&[0,1,3].includes(s.p))add('懸浮在半空中的白色手套端著餐盤，將餐點依序送往各張餐桌。')}
if(loc==='kitchen'){if(at('chef'))add('一把菜刀懸浮在砧板上方，有節奏地切割著食材。不遠處的鍋鏟自行翻動著鍋中的料理，幾個空盤則依序從櫃子中飛出。儘管廚房內看不見任何人影，所有料理工作仍有條不紊地進行著。');else if(s.flags.chefDead)add('料理器具散落在工作檯上，原本忙碌的廚房變得異常安靜。爐火仍未熄滅，鍋中的料理卻已無人翻動。')}
if(loc==='hall'){if(at('staff'))add('乘務員站在沙發旁，雙手交疊於身前，隨時準備回應旅客的需求。');if(at('mage'))add(s.day===1&&s.p===3&&s.flags.staffDead?'法師跪坐在三尊女神雕塑前，雙手交握，低聲念誦著祈禱詞。':'法師坐在靠窗的沙發上，膝上攤開一本厚重的書籍。');if(at('boy')&&!boyFollowing())add('橘髮少年站在一幅肖像畫前，歪著頭仔細端詳畫中的人物。');if(at('boss'))add('老者靠坐在沙發上，一手搭著扶手，另一手握著他的手杖。');if(!normal())add('幾幅肖像中的人物似乎正在緩緩轉動目光。')}
if(loc==='mageRoom'&&at('mage'))add(s.flags.staffDead?'桌上攤開了更多星圖，法師不時翻閱手中的筆記，眉頭微微皺起。':s.p===0?'法師坐在書桌前，手持羽毛筆，在筆記上記錄著些什麼。':s.p===4?'法師坐在床邊，手中握著胸前的聖徽，低聲念誦著祈禱詞。':'法師站在窗邊，手中拿著一張星圖，目光在圖紙與窗外的天空之間來回移動。');
if(loc==='boyRoom'&&at('boy')&&!boyFollowing())add(s.flags.boyRest?'少年將背包抱在懷中，見到你時，原本緊繃的肩膀稍微放鬆了些。':s.flags.staffDead?'少年坐在床沿，雙手緊緊握著胸前的墜飾。聽見房門傳來聲響，他立刻抬起頭。':s.p===4?'少年躺在床上，身旁放著他的旅行背包。':'少年盤腿坐在床上，低頭翻找著自己的背包，幾件旅行用品散落在他身旁。');
if(loc==='boss'&&at('boss'))add(s.flags.staffDead?'老者握著手杖，在狹小的房間內來回踱步，偶爾停下來查看窗外。':s.p===0?'老者坐在桌前翻閱文件，不時拿起鋼筆在紙上留下批註。':s.p===4?'老者仍坐在桌前，桌上的懷錶已被打開。':'老者靠坐在椅子上，手中端著一杯飲品，神情略顯不耐。');
if(loc==='corr3'){if(at('boy')&&!boyFollowing())add('橘髮少年站在自己的房門前，低頭整理著腰間的皮帶與隨身袋。');if(boyLocked())add('第三間客房的房門緊閉，轉動門把也無法將其打開。')}
if(loc==='corr4'&&!normal())add('走廊末端的木質牆板上，似乎多了一道先前未曾注意到的細微接縫。');
if(at('wu'))add(s.flags.carryWu?'黑色史萊姆正待在你的懷裡。':loc==='dining'&&!s.flags.wuLoc?'一隻黑色史萊姆守著裝滿綠色乖乖的籃子，前方立著一塊小小的販售告示牌。':'黑色史萊姆在你附近輕輕晃動。');
if(at('slime'))add(loc==='dining'?'圓滾滾的史萊姆在桌椅之間穿梭，忙著擦拭桌面與清理地板。':'一隻圓滾滾的史萊姆在附近緩緩移動。');
if(boyFollowing())add('冒險者緊緊跟在你身旁。');
return lines.join('\n\n')}
const sceneShort={engine:'巨大的鍋爐散發熱浪，銅製管線不斷震動。',dining:'餐桌整齊排列，銀器與玻璃杯映著燈光。',kitchen:'料理檯旁排列著刀具、爐灶與食材櫃。',hall:'沙發、肖像畫與鋼琴裝飾著寬敞的交誼廳。',corr:'鋪有地毯的走廊旁，是你的一號房。',own:'整潔的單人客房，備有床鋪、小桌與行李。',corr2:'金色壁燈照亮通往法師房間的走廊。',mageRoom:'桌上堆滿星圖與書籍，其餘地方十分整潔。',corr3:'風景畫裝飾著通往冒險者房間的走廊。',boyRoom:'旅行背包、地圖與衣物散放在床邊。',corr4:'四號房旁是走廊末端的雕花木質牆板。',boss:'精緻的行李箱與商業文件擺放在房內。',shrine:'星辰雕刻環繞著具有三處凹槽的黑色祭壇。'};
function sceneSummary(){const loc=s.loc, at=n=>npcRoom(n)===loc;let base=sceneShort[loc], extra=[];
if(loc==='engine'&&s.flags.captainDead)base='鍋爐無人照看，儀表指針不規律地跳動。';
if(loc==='kitchen'&&s.flags.chefDead)base='料理器具散落在工作檯上，爐火仍未熄滅。';
if(loc==='hall'&&!normal())base='沙發與鋼琴依舊，幾幅肖像似乎正在轉動目光。';
if(loc==='corr4'&&!normal())base='走廊末端的木質牆板上出現細微接縫。';
if(loc==='corr3'&&boyLocked())extra.push('三號房已上鎖');
const labels={staff:'乘務員',mage:'法師',boy:'冒險者',boss:'財團老闆',captain:'列車長',wu:'烏',slime:'史萊姆',chef:'無形廚師'};
const people=Object.keys(labels).filter(at).map(n=>labels[n]);
if(loc==='hall'&&at('mage')&&s.day===1&&s.p===3&&s.flags.staffDead){extra.push('法師正在祈禱');people.splice(people.indexOf('法師'),1)}
if(boyFollowing()){extra.push('冒險者跟隨中');const i=people.indexOf('冒險者');if(i>=0)people.splice(i,1)}
if(people.length)extra.push(people.join('、')+'在場');
let suffix=extra.length?extra.join('；')+'。':'';
if(base.length+suffix.length>50)base=({dining:'餐廳桌椅整齊。',hall:'交誼廳內有沙發與肖像。'})[loc]||'';
if(base.length+suffix.length>50)base='';
return base+suffix}
let sceneExpanded=false,sceneLast=null;
function scenePanel(){if(sceneLast!==s.loc){sceneExpanded=false;sceneLast=s.loc}return '<details id="sceneDetails" class="scene-details" '+(sceneExpanded?'open':'')+'><summary>'+sceneSummary()+'<span class="scene-toggle"></span></summary><div class="scene-full">'+sceneDescription()+'</div></details>'}
