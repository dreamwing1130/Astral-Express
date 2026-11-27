function boyLocked(){return alive('boy')&&s.flags.staffDead&&!boyFollowing()&&npcRoom('boy')==='boyRoom'&&!s.flags.boyDoorOpen}

function inviteBoy(){check(2,'charm',7,()=>{s.flags.boyFollowing=true;s.flags.boyFollowDay=s.day;delete s.flags.boyDoorOpen;log('少年猶豫了好一會兒，終於點點頭。「那……你不要丟下我喔。」他走到你身旁。')},()=>log('「對不起……我還是有點怕。」少年低下頭。'))}

function slimeTalk(n){
const topics=[
{title:'列車',line:'「車車！三年！三年前來！乖乖好吃！」',follow:[['這三年都在做什麼？','「學擦桌子！學掃地！做對了有乖乖！好多乖乖！」'],['以前的列車是什麼樣子？','「以前普通車車！在地上跑！最近有人改車車，慢慢改好，現在會飛！乖乖好吃！」']]},
{title:'乖乖',line:'「乖乖好吃！做好工作有乖乖！給我乖乖！」',follow:[['誰訓練你們？','「有人教！做得好就給好吃的！喜歡學！喜歡乖乖！」']]},
{title:'死掉的人',line:'「不動了！死掉了！就是食材！送去廚房！做好工作有乖乖！」',follow:[['你把死掉的人送去哪裡？',s.corpses?.staff?'「還在車車裡！等一下送去廚房！食材要給廚師！」':'「送去後廚了！給廚師做飯飯！乖乖好吃！」']]}
].filter(g=>g.title!=='死掉的人'||s.flags.staffDead);
function reply(g,line){npcResult='';let result='史萊姆發出一連串咕嚕聲。少年仔細聽了聽，替你翻譯：'+line;if(g.title==='死掉的人')result+=' 少年愣住了，臉色發白。「等、等等……牠說的是食材？」';log(result);finish();return result}
function show(title,opts,line){choose(title,opts);const p=document.createElement('p');p.textContent=line;$('modalbody').insertBefore(p,$('modalbody').children[1]||null)}
function follow(g,line){show(g.title+'｜繼續追問',[...g.follow.map(([q,a])=>[q,()=>follow(g,reply(g,a))]),['結束話題',()=>finish()]],line)}
function menu(line){show('透過冒險者與'+combatants[n][0]+'交談',[...topics.map(g=>[g.title,()=>follow(g,reply(g,g.line))]),['結束交談',()=>finish()]],line)}
if(!spend(1))return;npcResult='';const line='少年蹲下來，與史萊姆互相咕嚕了幾聲。「牠說你好，還問你有沒有乖乖……」';log(line);finish();menu(line)}

function npcRoom(n){if(!alive(n))return null;if(n==='boss'&&s.flags.protectBoy)return s.loc;if(n==='boy'&&s.flags.staffDead)return boyFollowing()?s.loc:(s.flags.boyRest?'boyRoom':s.p<2?'dining':'boyRoom');if(schedules[n])return n==='mage'&&s.day===1&&s.p===3&&s.flags.staffDead?'hall':schedules[n][s.p];if(n==='staff')return s.day===1?(s.p<2?'dining':s.p===2?'hall':null):null;if(n==='captain')return 'engine';if(n==='wu')return s.flags.carryWu?s.loc:(s.flags.wuLoc||'dining');if(n==='slime')return s.flags.ballReleasedLoc||'dining';if(n==='chef')return 'kitchen';return null}
