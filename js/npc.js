function boyLocked(){return alive('boy')&&s.flags.staffDead&&!boyFollowing()&&npcRoom('boy')==='boyRoom'&&!s.flags.boyDoorOpen}

function inviteBoy(){check(2,'charm',7,()=>{s.flags.boyFollowing=true;delete s.flags.boyFollowDay;delete s.flags.boyRest;delete s.flags.boyDoorOpen;log('少年猶豫了好一會兒，終於點點頭。「那……你不要丟下我喔。」他走到你身旁。')},()=>log('「對不起……我還是有點怕。」少年低下頭。'))}

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

const movingNPCs=['mage','boy','boss','staff'];
function npcDestination(n,state=s){
 if(n==='staff')return state.p<2?'dining':'hall';
 if(n==='mage'&&state.day===1&&state.p===3&&state.flags.staffDead)return 'hall';
 if(n==='boy'&&state.flags.staffDead)return state.flags.boyRest?'boyRoom':state.p<2?'dining':'boyRoom';
 return schedules[n][state.p];
}
function initNpcMotion(state){if(state.npcMotion)return;state.npcMotion={};for(const n of movingNPCs)state.npcMotion[n]={loc:npcDestination(n,state),ap:7};state.npcElapsed=0;if(state.flags.boyFollowing)state.npcMotion.boy.loc=state.loc;}
function npcPath(from,to){if(from===to)return [];const queue=[[from,[]]],seen=new Set([from]);while(queue.length){const [at,path]=queue.shift();for(const next of edges[at]||[]){if(seen.has(next))continue;const route=[...path,next];if(next===to)return route;seen.add(next);queue.push([next,route])}}return []}
function resetNpcPhase(){initNpcMotion(s);s.npcElapsed=0;for(const n of movingNPCs)s.npcMotion[n].ap=7}
function npcTick(cost,flush=false){initNpcMotion(s);const old=s.npcElapsed||0;const next=flush?budgets[s.p]:Math.min(budgets[s.p],old+cost);const ticks=Math.floor(next*7/budgets[s.p])-Math.floor(old*7/budgets[s.p]);s.npcElapsed=next;
 for(let i=0;i<ticks;i++){for(const n of movingNPCs){if(!alive(n))continue;const m=s.npcMotion[n];if(n==='boy'&&boyFollowing()){m.loc=s.loc;continue}if(n===activeNpc||n===s.flags.combatTarget||m.ap<=0)continue;const victim=s.p===3&&n==='boss'?(s.day===2?'mage':s.day===3?'boy':null):null;const dest=victim&&alive(victim)&&!s.flags['murderDone'+s.day]?npcRoom(victim):npcDestination(n);const path=npcPath(m.loc,dest);if(path.length){m.loc=path[0];m.ap--}}runScheduledMurders();if(s.flags.protectBoy||s.end)break;}
}
function npcRoom(n){if(!alive(n))return null;if(n==='boy'&&boyFollowing())return s.loc;if(movingNPCs.includes(n)){initNpcMotion(s);return s.npcMotion[n].loc}if(n==='captain')return 'engine';if(n==='wu')return s.flags.carryWu?s.loc:(s.flags.wuLoc||'dining');if(n==='slime')return s.flags.ballReleasedLoc||'dining';if(n==='chef')return 'kitchen';return null}
