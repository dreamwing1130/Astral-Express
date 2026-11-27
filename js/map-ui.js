function npcDot(n){return '<span class="npc-dot" style="background:'+npcColors[n]+'" title="'+combatants[n][0]+'" aria-label="'+combatants[n][0]+'"></span>'}

function roomDots(id){return '<span class="npc-dots">'+Object.keys(npcColors).filter(n=>npcRoom(n)===id).map(npcDot).join('')+'</span>'}

function npcLegend(){return '<div class="npc-legend">'+Object.keys(npcColors).filter(n=>{const id=npcRoom(n);return id&&visible(id)}).map(n=>'<span>'+npcDot(n)+combatants[n][0]+'</span>').join('')+'</div>'}

function openGameHelp(){if(!s||pending||$('modal').style.display==='grid')return;let page=0;const m=$('modal');function draw(){$('modalbody').innerHTML=tutorialContent(page,'操作教學')+'<div class="tcontrols"><button id="helpPrev" '+(page===0?'disabled':'')+'>← 上一步</button><button id="helpClose">關閉</button><button id="helpNext" '+(page===tutorialPages.length-1?'disabled':'')+'>下一步 →</button></div>';$('helpPrev').onclick=()=>{page--;draw()};$('helpNext').onclick=()=>{page++;draw()};$('helpClose').onclick=()=>{m.style.display='none'}}draw();m.style.display='grid'}

function syncGameHelp(){const b=$('gameHelp');b.hidden=!s||!!s.end;b.onclick=openGameHelp}
