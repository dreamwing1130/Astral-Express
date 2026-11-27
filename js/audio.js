
// BGM settings are independent of the game save.
const bgm=(()=>{const key='startrain-bgm-v1';let cfg={enabled:true,volume:40};try{const x=JSON.parse(localStorage.getItem(key)||'{}');cfg={enabled:x.enabled!==false,volume:Number.isFinite(x.volume)?Math.max(0,Math.min(100,x.volume)):40}}catch{}
const tracks=['day','night'].map(()=>{const a=new Audio();a.loop=true;a.preload='none';a.volume=0;return a});const urls=['assets/bgm-day.ogg','assets/bgm-night.m4a'];tracks.forEach((a,i)=>{a.src=urls[i]});let desired=-1,epoch=0,unlocked=false;const status=['白天：Beautiful Piano','晚上：Clouds'];
function persist(){try{localStorage.setItem(key,JSON.stringify(cfg))}catch{}}
function ui(){const b=document.getElementById('bgmToggle');b.textContent=cfg.enabled?'音樂：開':'音樂：關';b.setAttribute('aria-pressed',String(cfg.enabled));document.getElementById('bgmVolume').value=cfg.volume;document.getElementById('bgmLevel').textContent=cfg.volume+'%';document.getElementById('bgmStatus').textContent=status.join(' ／ ')}
function mix(){const token=++epoch,target=cfg.enabled&&unlocked?desired:-1;const start=performance.now(),from=tracks.map(a=>a.volume);if(target>=0&&urls[target]){const a=tracks[target];a.play().catch(()=>{if(token===epoch){status[target]='播放未成功，請重新開啟音樂';ui()}})}function tick(now){if(token!==epoch)return;const t=Math.min(1,(now-start)/2000);tracks.forEach((a,i)=>{const goal=i===target&&urls[i]?cfg.volume/100:0;a.volume=Math.max(0,Math.min(1,from[i]+(goal-from[i])*t));if(t===1&&i!==target)a.pause()});if(t<1)requestAnimationFrame(tick)}requestAnimationFrame(tick)}
function sync(state){const next=state&&!state.end?(state.p>=3?1:0):-1;if(next!==desired){desired=next;mix()}}
function unlock(){if(!unlocked){unlocked=true;mix()}}
tracks.forEach((a,i)=>{a.onerror=()=>{status[i]='音樂載入失敗';ui()}});
document.getElementById('bgmToggle').onclick=()=>{cfg.enabled=!cfg.enabled;persist();ui();unlock();mix()};
document.getElementById('bgmVolume').oninput=e=>{cfg.volume=Number(e.target.value);persist();ui();mix()};

document.addEventListener('click',unlock,{once:true});ui();return {sync};})();
