const APP_HTML = "<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n<meta name=\"theme-color\" content=\"#080808\">\n<title>MovieFlix — Movies & TV</title>\n<script src=\"https://cdn.jsdelivr.net/npm/hls.js@1\"></script>\n<style>\n:root{color-scheme:dark;--red:#e50914;--bg:#080808;--muted:#b3b3b3;--surface:#181818;font-family:Arial,Helvetica,sans-serif}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:#fff;overflow-x:hidden}.nav{height:68px;position:fixed;z-index:30;inset:0 0 auto;display:flex;align-items:center;gap:34px;padding:0 4.2%;background:linear-gradient(180deg,#050505f2,transparent);transition:background .2s}.nav.solid{background:#080808f5;backdrop-filter:blur(14px)}.logo{font-size:27px;font-weight:900;color:var(--red);letter-spacing:-1.8px;text-decoration:none;white-space:nowrap}.navlinks{display:flex;align-items:center;gap:22px}.navlinks button{border:0;background:none;color:#ddd;font-size:14px;cursor:pointer;padding:8px 0}.navlinks button.active,.navlinks button:hover{color:#fff;font-weight:700}.navright{margin-left:auto;display:flex;align-items:center;gap:18px}.search{width:min(250px,30vw);position:relative}.search input{width:100%;background:#111;border:1px solid #777;color:white;padding:10px 12px 10px 36px;outline:0;font-size:14px}.search:before{content:'⌕';position:absolute;left:11px;top:3px;font-size:25px;color:#bbb}.profile{width:30px;height:30px;border-radius:4px;background:linear-gradient(135deg,#d2d2d2,#565656);display:grid;place-items:center;font-weight:700;font-size:13px}.hero{height:min(78vh,760px);min-height:570px;position:relative;display:flex;align-items:center;padding:120px 4.2% 90px;background:#141414;isolation:isolate}.hero:before{content:'';position:absolute;inset:0;z-index:-2;background:linear-gradient(90deg,#080808 0%,#080808d9 27%,#0808084d 62%,#08080820 100%),linear-gradient(0deg,#080808 0%,transparent 42%)}.hero:after{content:'';position:absolute;z-index:-1;inset:0;background:linear-gradient(0deg,#080808 0%,transparent 28%)}.hero-content{max-width:570px;margin-top:25px}.eyebrow{font-size:13px;letter-spacing:4px;text-transform:uppercase;color:#ddd;margin-bottom:16px}.hero h1{font-size:clamp(38px,5vw,68px);line-height:.98;letter-spacing:-1.8px;margin:0 0 18px;font-weight:900;text-shadow:0 2px 20px #0008}.hero p{font-size:17px;line-height:1.5;color:#eee;text-shadow:0 1px 3px #000;max-width:560px;margin:0 0 24px;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}.hero-meta{display:flex;gap:12px;align-items:center;color:#ddd;font-size:14px;margin-bottom:15px}.rating{color:#46d369;font-weight:700}.hero-actions{display:flex;gap:12px;flex-wrap:wrap}.btn{border:0;border-radius:4px;cursor:pointer;padding:12px 23px;font-size:15px;font-weight:700;display:inline-flex;align-items:center;gap:9px}.btn-primary{background:#fff;color:#111}.btn-primary:hover{background:#ddd}.btn-secondary{background:#6d6d6eb3;color:white}.btn-secondary:hover{background:#6d6d6e}.content{position:relative;margin-top:-55px;z-index:2;padding:0 4.2% 65px}.row-section{margin:0 0 34px;position:relative}.row-heading{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}.row-heading h2{font-size:21px;margin:0;font-weight:700}.row-controls{display:flex;gap:6px}.row-controls button{width:31px;height:27px;border:1px solid #777;background:#181818;color:#fff;border-radius:3px;cursor:pointer}.movie-row{display:flex;gap:9px;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;scroll-behavior:smooth;padding:5px 0 14px}.movie-row::-webkit-scrollbar{display:none}.card{flex:0 0 clamp(135px,13.2vw,205px);position:relative;cursor:pointer;transition:transform .2s;transform-origin:center center;border-radius:4px;overflow:visible}.card:hover{transform:scale(1.075);z-index:5}.poster-wrap{aspect-ratio:2/3;background:#202020;border-radius:4px;overflow:hidden;box-shadow:0 5px 18px #0008}.poster{width:100%;height:100%;object-fit:cover;display:block;transition:filter .2s}.card:hover .poster{filter:brightness(.75)}.poster-fallback{width:100%;height:100%;display:grid;place-items:center;background:linear-gradient(135deg,#292929,#111);color:#777;font-size:12px}.card-title{font-size:13px;font-weight:700;margin-top:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.card-meta{display:flex;gap:7px;color:#aaa;font-size:11px;margin-top:4px}.match{color:#46d369;font-weight:700}.empty{color:#aaa;padding:30px 0;font-size:14px}.skeleton{flex:0 0 clamp(135px,13.2vw,205px);aspect-ratio:2/3;border-radius:4px;background:linear-gradient(100deg,#181818 20%,#252525 38%,#181818 55%);background-size:200% 100%;animation:shine 1.4s infinite}@keyframes shine{to{background-position-x:-200%}}.page-title{padding:105px 4.2% 20px;font-size:29px}.page-title small{display:block;color:#aaa;font-size:13px;margin-top:6px;font-weight:400}.results{padding:0 4.2% 80px;display:grid;grid-template-columns:repeat(auto-fill,minmax(145px,1fr));gap:26px 12px}.results .card{flex:auto;min-width:0}.results .poster-wrap{aspect-ratio:2/3}.results .card:hover{transform:translateY(-4px) scale(1.02)}.shade{position:fixed;inset:0;background:#000c;z-index:50;display:none;overflow:auto;padding:5vh 18px}.shade.show{display:block}.detail-box{max-width:900px;margin:auto;background:#181818;border-radius:7px;overflow:hidden;box-shadow:0 20px 80px #000b;position:relative}.detail-backdrop{height:310px;background:linear-gradient(0deg,#181818 0%,#18181805 100%),#252525 center/cover no-repeat;position:relative}.detail-close{position:absolute;top:15px;right:15px;border:0;width:36px;height:36px;border-radius:50%;background:#181818;color:#fff;font-size:20px;cursor:pointer}.detail-body{padding:0 34px 34px;margin-top:-35px;position:relative}.detail-body h2{font-size:32px;margin:0 0 10px}.detail-meta{color:#aaa;font-size:13px;display:flex;gap:12px;flex-wrap:wrap;margin-bottom:18px}.detail-overview{font-size:14px;line-height:1.6;color:#ddd;max-width:720px}.detail-actions{display:flex;gap:10px;margin:20px 0;flex-wrap:wrap}.detail-actions .btn{padding:10px 18px}.seasons{display:flex;gap:8px;flex-wrap:wrap;margin:20px 0 12px}.seasons button{background:#333;border:1px solid #555;color:white;padding:9px 13px;border-radius:3px;cursor:pointer}.seasons button.active{background:var(--red);border-color:var(--red)}.episodes{display:grid;gap:8px}.episode{display:flex;align-items:center;gap:15px;background:#242424;padding:12px;border-radius:4px;cursor:pointer}.episode:hover{background:#303030}.episode-no{color:#aaa;width:28px}.episode img{width:110px;aspect-ratio:16/9;object-fit:cover;border-radius:3px;background:#111}.episode-copy{flex:1}.episode-copy strong{display:block;font-size:14px;margin-bottom:5px}.episode-copy span{font-size:12px;color:#aaa;line-height:1.4}.toast{position:fixed;bottom:25px;left:50%;transform:translateX(-50%);background:#252525;color:#fff;padding:12px 18px;border-radius:4px;z-index:100;box-shadow:0 4px 20px #0008;opacity:0;pointer-events:none;transition:opacity .2s}.toast.show{opacity:1}.footer{border-top:1px solid #222;padding:25px 4.2% 50px;color:#777;font-size:12px;line-height:1.7}.footer a{color:#aaa}.hidden{display:none!important}\n@media(max-width:800px){.nav{height:60px;padding:0 4%}.logo{font-size:23px}.navlinks{gap:13px}.navlinks button{font-size:12px}.navright{gap:10px}.search{width:150px}.hero{min-height:520px;height:70vh;padding:100px 4% 90px}.hero-content{max-width:520px}.hero p{font-size:15px}.content{padding:0 4% 50px}.row-heading h2{font-size:18px}.card{flex-basis:145px}.page-title{padding:90px 4% 18px}.results{padding:0 4% 60px;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:22px 10px}}\n@media(max-width:560px){.nav{gap:12px}.navlinks{gap:11px}.navlinks button{font-size:11px}.navlinks button[data-view=\"tv\"]{display:none}.navright{gap:8px}.search{width:112px}.search input{padding:8px 8px 8px 30px;font-size:12px}.profile{width:26px;height:26px}.hero{min-height:510px;height:72vh;align-items:flex-end;padding:100px 5% 100px}.hero-content{margin:0}.hero:before{background:linear-gradient(0deg,#080808 0%,#080808b0 42%,#08080825 100%)}.hero h1{font-size:39px}.hero p{font-size:14px;-webkit-line-clamp:3}.eyebrow{font-size:11px}.btn{padding:10px 15px;font-size:13px}.content{margin-top:-42px;padding-left:5%;padding-right:5%}.row-heading h2{font-size:16px}.card{flex-basis:120px}.card-title{font-size:12px}.row-controls{display:none}.shade{padding:0}.detail-box{min-height:100vh;border-radius:0}.detail-backdrop{height:250px}.detail-body{padding:0 19px 25px}.detail-body h2{font-size:26px}.episode{gap:9px;padding:9px}.episode img{width:85px}.episode-no{width:16px;font-size:12px}.episode-copy strong{font-size:12px}.episode-copy span{font-size:11px}}\n</style>\n</head>\n<body>\n<header class=\"nav\" id=\"nav\"><a class=\"logo\" href=\"/\">MOVIEFLIX</a><nav class=\"navlinks\"><button class=\"active\" data-view=\"home\">Home</button><button data-view=\"movie\">Movies</button><button data-view=\"tv\">TV Shows</button><button data-view=\"list\">My List</button></nav><div class=\"navright\"><label class=\"search\"><input id=\"search\" type=\"search\" placeholder=\"Titles, people...\" autocomplete=\"off\"></label><div class=\"profile\">M</div></div></header>\n<section class=\"hero\" id=\"hero\"><div class=\"hero-content\"><div class=\"eyebrow\">MOVIEFLIX ORIGINAL</div><h1 id=\"heroTitle\">Discover something great</h1><div class=\"hero-meta\" id=\"heroMeta\"></div><p id=\"heroOverview\">Browse trending movies and TV shows.</p><div class=\"hero-actions\"><button class=\"btn btn-primary\" id=\"heroPlay\">▶ Play</button><button class=\"btn btn-secondary\" id=\"heroInfo\">ⓘ More Info</button></div></div></section>\n<main class=\"content\" id=\"homeContent\"><div id=\"rows\"><section class=\"row-section\"><div class=\"row-heading\"><h2>Trending Now</h2></div><div class=\"movie-row\" id=\"row-trending\"><div class=\"skeleton\"></div><div class=\"skeleton\"></div><div class=\"skeleton\"></div><div class=\"skeleton\"></div><div class=\"skeleton\"></div></div></section></div></main>\n<div id=\"browseTitle\" class=\"page-title hidden\"></div><div id=\"results\" class=\"results hidden\"></div>\n<div id=\"detailOverlay\" class=\"shade\"><section class=\"detail-box\"><div class=\"detail-backdrop\" id=\"detailBackdrop\"><button class=\"detail-close\" id=\"detailClose\">×</button></div><div class=\"detail-body\" id=\"detailBody\"><div class=\"empty\">Loading title...</div></div></section></div>\n<div id=\"toast\" class=\"toast\"></div>\n<footer class=\"footer\">MovieFlix is a discovery interface. Movie and television metadata and artwork are supplied by TMDB. Availability of playback sources may vary.</footer>\n<script>\nconst IMG='https://image.tmdb.org/t/p';\nconst $=id=>document.getElementById(id);\nlet debounce=null,activeItem=null,heroItem=null,view='home',toastTimer=null;\nconst rowsConfig=[\n ['trending','Trending Now','/api/trending/all/week'],\n ['movies','Popular Movies','/api/trending/movie/week'],\n ['shows','Popular TV Shows','/api/trending/tv/week'],\n ['today','Trending Today','/api/trending/all/day']\n];\nconst listKey='movieflix-my-list-v1';\nfunction esc(value){return String(value??'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[c]));}\nfunction year(item){return (item.release_date||item.first_air_date||'').slice(0,4)||'—';}\nfunction titleOf(item){return item.title||item.name||'Untitled';}\nfunction typeOf(item){return item.media_type||(item.first_air_date?'tv':'movie');}\nfunction myList(){try{return JSON.parse(localStorage.getItem(listKey)||'[]')}catch{return []}}\nfunction inList(item){return myList().some(x=>String(x.id)===String(item.id)&&x.type===typeOf(item));}\nfunction saveList(list){localStorage.setItem(listKey,JSON.stringify(list));}\nfunction toggleList(item){const list=myList(),type=typeOf(item),index=list.findIndex(x=>String(x.id)===String(item.id)&&x.type===type);if(index>=0){list.splice(index,1);toast('Removed from My List')}else{list.unshift({id:Number(item.id),type,title:titleOf(item),poster_path:item.poster_path||'',backdrop_path:item.backdrop_path||'',release_date:item.release_date||item.first_air_date||'',vote_average:item.vote_average||0});toast('Added to My List')}saveList(list);return index<0;}\nfunction toast(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),1900)}\nasync function api(path){const response=await fetch(path);if(!response.ok){let message=response.statusText;try{const d=await response.json();message=d.error||d.status_message||message}catch{}throw new Error(message||'Request failed')}return response.json()}\nfunction card(item){const type=typeOf(item),poster=item.poster_path?`${IMG}/w342${esc(item.poster_path)}`:'';return `<article class=\"card\" data-id=\"${Number(item.id)}\" data-type=\"${type}\"><div class=\"poster-wrap\">${poster?`<img class=\"poster\" loading=\"lazy\" src=\"${poster}\" alt=\"${esc(titleOf(item))}\">`:'<div class=\"poster-fallback\">No artwork</div>'}</div><div class=\"card-title\">${esc(titleOf(item))}</div><div class=\"card-meta\"><span class=\"match\">${Math.round((item.vote_average||0)*10)}% Match</span><span>${year(item)}</span><span>${type==='tv'?'Series':'Movie'}</span></div></article>`;}\nfunction renderRow(id,items){const el=$(`row-${id}`);if(!el)return;el.innerHTML=items.length?items.map(card).join(''):'<div class=\"empty\">No titles found.</div>';}\nfunction makeRows(){ $('rows').innerHTML=rowsConfig.map(([id,name])=>`<section class=\"row-section\"><div class=\"row-heading\"><h2>${name}</h2><div class=\"row-controls\"><button data-scroll=\"-1\" data-row=\"${id}\" aria-label=\"Scroll left\">‹</button><button data-scroll=\"1\" data-row=\"${id}\" aria-label=\"Scroll right\">›</button></div></div><div class=\"movie-row\" id=\"row-${id}\"><div class=\"skeleton\"></div><div class=\"skeleton\"></div><div class=\"skeleton\"></div><div class=\"skeleton\"></div><div class=\"skeleton\"></div></div></section>`).join('');}\nfunction setHero(item){if(!item)return;heroItem=item;const title=titleOf(item);$('heroTitle').textContent=title;$('heroOverview').textContent=item.overview||'Discover this title on MovieFlix.';$('heroMeta').innerHTML=`<span class=\"rating\">${Math.round((item.vote_average||0)*10)}% Match</span><span>${esc(year(item))}</span><span>${typeOf(item)==='tv'?'TV Series':'Movie'}</span>`;const path=item.backdrop_path||item.poster_path;$('hero').style.backgroundImage=path?`linear-gradient(90deg,#080808 0%,#080808d9 27%,#0808084d 62%,#08080820 100%),linear-gradient(0deg,#080808 0%,transparent 50%),url(\"${IMG}/original${path}\")`:'linear-gradient(120deg,#282828,#090909)';$('hero').style.backgroundSize='cover';$('hero').style.backgroundPosition='center 25%';}\nasync function loadHome(){makeRows();const settled=await Promise.all(rowsConfig.map(async ([id,,path])=>{try{const d=await api(path);const items=(d.results||[]).filter(x=>x.media_type==='movie'||x.media_type==='tv');renderRow(id,items);return items;}catch(e){const el=$(`row-${id}`);if(el)el.innerHTML=`<div class=\"empty\">${esc(e.message)}</div>`;return []}}));const candidates=settled[0].filter(x=>x.backdrop_path);if(candidates.length)setHero(candidates[0]);}\nfunction showView(next){view=next;$('search').value='';$('homeContent').classList.toggle('hidden',next!=='home');$('browseTitle').classList.add('hidden');$('results').classList.add('hidden');document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===next));if(next==='home'){loadHome();return;}let items=[];if(next==='list'){items=myList().map(x=>({...x,media_type:x.type}));$('browseTitle').innerHTML='My List<small>Your saved movies and shows</small>';}else{$('browseTitle').textContent=next==='movie'?'Movies':'TV Shows';api(`/api/trending/${next}/week`).then(d=>renderResults(d.results||[])).catch(e=>renderResults([],e.message));$('browseTitle').classList.remove('hidden');return;}renderResults(items);}\nfunction renderResults(items,error){$('homeContent').classList.add('hidden');$('browseTitle').classList.remove('hidden');$('results').classList.remove('hidden');$('results').innerHTML=items.length?items.map(card).join(''):`<div class=\"empty\">${esc(error||'Your list is empty. Add titles with the + My List button.')}</div>`;}\nasync function runSearch(query){$('homeContent').classList.add('hidden');$('browseTitle').classList.remove('hidden');$('browseTitle').textContent='Search results';$('results').classList.remove('hidden');$('results').innerHTML=Array.from({length:10},()=>'<div class=\"skeleton\"></div>').join('');try{const d=await api('/api/search/multi?query='+encodeURIComponent(query));renderResults((d.results||[]).filter(x=>x.media_type==='movie'||x.media_type==='tv'));}catch(e){renderResults([],e.message)}}\nasync function openDetails(id,type){$('detailOverlay').classList.add('show');$('detailBackdrop').style.backgroundImage='linear-gradient(0deg,#181818 0%,#18181805 100%)';$('detailBody').innerHTML='<div class=\"empty\">Loading title...</div>';try{const data=await api(`/api/${type}/${id}`);activeItem={...data,id:Number(data.id),media_type:type};const path=data.backdrop_path||data.poster_path;$('detailBackdrop').style.backgroundImage=path?`linear-gradient(0deg,#181818 0%,#18181805 100%),url(\"${IMG}/w1280${path}\")`:'linear-gradient(135deg,#303030,#161616)';let html=`<h2>${esc(titleOf(data))}</h2><div class=\"detail-meta\"><span class=\"rating\">${Math.round((data.vote_average||0)*10)}% Match</span><span>${esc(year(data))}</span><span>${type==='tv'?'TV Series':(data.runtime?data.runtime+' min':'Movie')}</span><span>★ ${Number(data.vote_average||0).toFixed(1)}</span></div><p class=\"detail-overview\">${esc(data.overview||'No description available.')}</p><div class=\"detail-actions\">${type==='movie'?'<button class=\"btn btn-primary\" id=\"detailPlay\">▶ Play</button>':'<button class=\"btn btn-primary\" id=\"detailEpisodes\">▶ Choose Episode</button>'}<button class=\"btn btn-secondary\" id=\"detailList\">${inList(activeItem)?'✓':'＋'} My List</button></div>`;if(type==='tv'){const seasons=(data.seasons||[]).filter(s=>s.season_number>=0);html+=`<h3>Episodes</h3><div class=\"seasons\">${seasons.map(s=>`<button data-season=\"${s.season_number}\">${esc(s.name||('Season '+s.season_number))}</button>`).join('')}</div><div id=\"episodes\" class=\"episodes\"><div class=\"empty\">Choose a season to view episodes.</div></div>`;}$('detailBody').innerHTML=html;if(type==='movie')$('detailPlay').onclick=()=>goPlayer(id,'movie');$('detailList').onclick=()=>{$('detailList').textContent=toggleList(activeItem)?'✓ My List':'＋ My List';if(view==='list')showView('list')};if(type==='tv')$('detailBody').querySelector('.seasons')?.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$('detailBody').querySelectorAll('.seasons button').forEach(x=>x.classList.toggle('active',x===b));loadEpisodes(id,Number(b.dataset.season),data.name||data.title||'');});}catch(e){$('detailBody').innerHTML=`<div class=\"empty\">${esc(e.message)}</div>`;}}\nasync function loadEpisodes(id,season,showTitle){$('episodes').innerHTML='<div class=\"empty\">Loading episodes...</div>';try{const d=await api(`/api/tv/${id}/season/${season}`);const eps=d.episodes||[];$('episodes').innerHTML=eps.length?eps.map(ep=>`<div class=\"episode\" data-episode=\"${ep.episode_number}\"><span class=\"episode-no\">${String(ep.episode_number).padStart(2,'0')}</span>${ep.still_path?`<img loading=\"lazy\" src=\"${IMG}/w300${esc(ep.still_path)}\" alt=\"\">`:'<div style=\"width:110px;aspect-ratio:16/9;background:#111\"></div>'}<div class=\"episode-copy\"><strong>${esc(ep.name||('Episode '+ep.episode_number))}</strong><span>${esc(ep.overview||'No episode description available.')}</span></div><span>▶</span></div>`).join(''):'<div class=\"empty\">No episodes listed.</div>';$('episodes').onclick=e=>{const row=e.target.closest('.episode');if(row)goPlayer(id,'tv',season,Number(row.dataset.episode));};}catch(e){$('episodes').innerHTML=`<div class=\"empty\">${esc(e.message)}</div>`}}\nfunction goPlayer(id,type,season,episode){const query=type==='tv'?`?type=tv&season=${season}&episode=${episode}`:'';location.href=`/api/${Number(id)}${query}`;}\n$('heroPlay').onclick=()=>{if(heroItem)typeOf(heroItem)==='movie'?goPlayer(heroItem.id,'movie'):openDetails(heroItem.id,'tv')};$('heroInfo').onclick=()=>heroItem&&openDetails(heroItem.id,typeOf(heroItem));$('detailClose').onclick=()=>$('detailOverlay').classList.remove('show');$('detailOverlay').addEventListener('click',e=>{if(e.target===$('detailOverlay'))$('detailOverlay').classList.remove('show')});\n$('nav').addEventListener('click',e=>{const b=e.target.closest('[data-view]');if(b)showView(b.dataset.view)});$('rows').addEventListener('click',e=>{const b=e.target.closest('[data-scroll]');if(!b)return;const row=$(`row-${b.dataset.row}`);row.scrollBy({left:Number(b.dataset.scroll)*row.clientWidth*.82,behavior:'smooth'});});$('grid')?.addEventListener('click',()=>{});document.addEventListener('click',e=>{const card=e.target.closest('.card');if(card)openDetails(Number(card.dataset.id),card.dataset.type)});$('search').addEventListener('input',()=>{clearTimeout(debounce);const q=$('search').value.trim();if(!q){if(view==='home')showView('home');else showView(view);return;}debounce=setTimeout(()=>runSearch(q),320)});window.addEventListener('scroll',()=>$('nav').classList.toggle('solid',window.scrollY>30),{passive:true});document.addEventListener('keydown',e=>{if(e.key==='Escape')$('detailOverlay').classList.remove('show')});loadHome();\n</script>\n</body>\n</html>";

const PLAYER_HTML = "<!doctype html>\n<html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"theme-color\" content=\"#080808\"><title>Now Playing — MovieFlix</title><script src=\"https://cdn.jsdelivr.net/npm/hls.js@1\"></script><style>\n*{box-sizing:border-box}body{margin:0;background:#050505;color:#fff;font-family:Arial,Helvetica,sans-serif;display:flex;min-height:100vh;flex-direction:column}.bar{height:62px;background:#101010;display:flex;align-items:center;gap:18px;padding:0 24px;border-bottom:1px solid #292929}.back{border:0;background:#303030;color:#fff;border-radius:4px;padding:9px 13px;cursor:pointer}.brand{font-size:23px;font-weight:900;letter-spacing:-1px;color:#e50914}.title{font-size:14px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.status{margin-left:auto;font-size:12px;color:#aaa}.stage{flex:1;display:flex;flex-direction:column;min-height:0}.video-wrap{flex:1;min-height:50vh;display:grid;place-items:center;background:#000;position:relative}.video{width:100%;height:100%;max-height:calc(100vh - 150px);object-fit:contain;background:#000}.sources{display:flex;gap:8px;overflow:auto;padding:14px 20px;background:#111}.source{flex:0 0 auto;border:1px solid #454545;background:#242424;color:#eee;border-radius:4px;padding:8px 12px;font-size:12px;cursor:pointer}.source.active{border-color:#e50914;background:#e50914}.source.dead{opacity:.4;text-decoration:line-through}.hint{color:#888;font-size:12px;text-align:center;padding:10px 20px 16px}.hidden{display:none!important}@media(max-width:600px){.bar{height:56px;padding:0 12px;gap:10px}.brand{font-size:19px}.title{font-size:12px}.status{font-size:10px}.video-wrap{min-height:45vh}.sources{padding:10px;gap:6px}.source{padding:7px 9px}}\n</style></head><body><header class=\"bar\"><button class=\"back\" id=\"back\">← Back</button><div class=\"brand\">MOVIEFLIX</div><strong class=\"title\" id=\"title\">Loading...</strong><span class=\"status\" id=\"status\">Finding a stream...</span></header><main class=\"stage\"><div class=\"video-wrap\"><video id=\"video\" class=\"video\" controls autoplay playsinline></video></div><div id=\"sources\" class=\"sources\"></div><div class=\"hint\" id=\"hint\">Choose a source if playback does not start automatically. Stream availability depends on the provider.</div></main>\n<script>\nconst id=location.pathname.split('/').filter(Boolean).pop();const params=new URLSearchParams(location.search);const type=params.get('type')==='tv'?'tv':'movie';const season=params.get('season')||'1';const episode=params.get('episode')||'1';const $=x=>document.getElementById(x);let streams=[],hls=null,seq=0,activePath='',retryTimer=null;\nfunction esc(v){return String(v??'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[c]));}\nasync function api(path){const r=await fetch(path);if(!r.ok){let t=await r.text();throw new Error(t||r.statusText)}return r.json()}\nfunction cleanup(){clearTimeout(retryTimer);if(hls){hls.destroy();hls=null}const v=$('video');v.pause();v.removeAttribute('src');v.load()}\nfunction proxy(s){let p='/api/proxy?url='+encodeURIComponent(s.url);if(s.headers)p+='&headers='+encodeURIComponent(JSON.stringify(s.headers));return p}\nfunction render(){ $('sources').innerHTML=streams.map((s,i)=>`<button class=\"source${i===0?' active':''}${s.dead?' dead':''}\" data-index=\"${i}\">${esc(s.providerName||s.provider||'Server')}${s.quality?' · '+esc(s.quality):''}</button>`).join('')}\nfunction play(index,automatic){if(index>=streams.length){$('status').textContent='No working sources found';return}cleanup();const current=++seq,s=streams[index];$('sources').querySelectorAll('button').forEach((b,i)=>b.classList.toggle('active',i===index));$('status').textContent='Connecting to '+(s.providerName||s.provider||'source')+'…';let failed=false;const fail=()=>{if(failed||current!==seq)return;failed=true;s.dead=true;$('sources').querySelector(`[data-index=\"${index}\"]`)?.classList.add('dead');if(automatic&&index+1<streams.length){play(index+1,true)}else $('status').textContent='Playback failed — choose another source'};retryTimer=setTimeout(fail,17000);const v=$('video');v.addEventListener('playing',()=>{$('status').textContent='';clearTimeout(retryTimer)},{once:true});v.addEventListener('error',fail,{once:true});const source=proxy(s);if(s.type==='hls'){if(window.Hls&&Hls.isSupported()){hls=new Hls({enableWorker:true,lowLatencyMode:false});hls.loadSource(source);hls.attachMedia(v);hls.on(Hls.Events.MANIFEST_PARSED,()=>v.play().catch(()=>{$('status').textContent='Press play to start'}));hls.on(Hls.Events.ERROR,(_e,d)=>{if(d.fatal)fail()})}else if(v.canPlayType('application/vnd.apple.mpegurl')){v.src=source;v.play().catch(()=>{$('status').textContent='Press play to start'})}else{$('status').textContent='HLS is not supported in this browser';clearTimeout(retryTimer)}}else{v.src=source;v.play().catch(()=>{$('status').textContent='Press play to start'})}}\n$('sources').addEventListener('click',e=>{const b=e.target.closest('[data-index]');if(b)play(Number(b.dataset.index),false)});$('back').onclick=()=>history.length>1?history.back():location.assign('/');\nasync function start(){if(!/^\\d+$/.test(id||'')){$('status').textContent='Invalid movie ID';return}try{const detail=await api(`/api/${type}/${id}`);$('title').textContent=detail.title||detail.name||'Now Playing'}catch{$('title').textContent='MovieFlix Player'}if(type==='tv'&&(!/^\\d+$/.test(season)||!/^\\d+$/.test(episode))){$('status').textContent='Invalid season or episode';return}activePath=type==='movie'?`/api/stream/movie/${id}`:`/api/stream/tv/${id}/${season}/${episode}`;try{const d=await api(activePath);streams=d.streams||[];if(!streams.length){$('status').textContent='No playable sources were returned';return}render();play(0,true)}catch(e){$('status').textContent='Could not load streams: '+e.message}}\nwindow.addEventListener('beforeunload',cleanup);start();\n</script></body></html>";

const DEFAULT_TMDB_API_KEY = "257654f35e3dff105574f97fb4b97035";
const TMDB_BASE = "https://api.themoviedb.org/3";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
const CACHE_TTL = 20 * 60 * 1000;
const CACHE_MAX = 200;
const STREAM_CACHE = new Map();
const WASM_CACHE = new Map();
const PROVIDER_TIMEOUT = 12000;
const CHECK_TIMEOUT = 6000;

const BLOCKED_HEADERS = new Set([
  "host",
  "content-length",
  "connection",
  "range",
  "origin",
  "access-control-request-headers"
]);

const PASS_HEADERS = [
  "content-type",
  "content-length",
  "content-range",
  "accept-ranges",
  "content-disposition",
  "etag",
  "last-modified"
];


const VIDNEST_SITE = "https://vidnest.fun";
const VIDNEST_API = "https://new.vidnest.fun";
const VIDNEST_FALLBACK_SECRET = "K3p8vQ2mX9rL5wZ0fN7bG1sH4tJ6dC9_y8S3wM1nQ5pL2";
const VIDNEST_SERVERS = {
  catflix: "yflix",
  filxer: "rogflix",
  gama: "vidzee",
  lamda: "ophim",
  beta: "flixhq",
  alfa: "onehd",
  prime: "rpmvid",
  zeta: "nextgencloudfabric",
  ophim: "klikxxi",
  sigma: "hollymoviehd",
  delta: "allmovies"
};
const VIDNEST_ALFA_HOSTS = [
  "https://long-night-d802.streamed-5.workers.dev",
  "https://blue-bush-5977.streamed-7.workers.dev",
  "https://rapid-heart-03c8.streamed-4.workers.dev",
  "https://super-flower-9c85.streamed-2.workers.dev",
  "https://flat-sky-cf20.streamed-850.workers.dev",
  "https://vidrift-cf.streamed-8.workers.dev"
];
let vidnestSecret = VIDNEST_FALLBACK_SECRET;
let vidnestRefreshAt = 0;
let vidnestRefreshPromise = null;

function base64UrlBytes(value) {
  let raw = String(value).replace(/-/g, "+").replace(/_/g, "/");
  while (raw.length % 4) raw += "=";
  const binary = atob(raw);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function bytesToBase64Url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

async function discoverVidnestKeys() {
  const pageUrl = VIDNEST_SITE + "/movie/550";
  const page = await requestText(pageUrl, { "User-Agent": UA }, 10000);
  const scripts = [...page.text.matchAll(/<script[^>]+src=["']([^"']+\.js[^"']*)["']/gi)]
    .map(match => new URL(match[1], pageUrl))
    .filter(url => url.origin === VIDNEST_SITE);
  const code = [page.text, ...(await Promise.all(scripts.map(async url => {
    try { return (await requestText(url.href, { "User-Agent": UA }, 10000)).text; }
    catch { return ""; }
  })))].join("\n");
  const escapedHost = VIDNEST_API.replace(/[.\/]/g, "\\$&");
  const near = [...code.matchAll(new RegExp("=[\\\"'`]([^\\\"'`]{16,128})[\\\"'`],\\w+=[\\\"'`]" + escapedHost + "[\\\"'`]", "g"))].map(m => m[1]);
  const literals = [...code.matchAll(/["'`]([A-Za-z0-9_-]{32,64})["'`]/g)].map(m => m[1]);
  return [...new Set([...near, ...literals])];
}

async function withVidnestSecret(fn) {
  try { return await fn(vidnestSecret); }
  catch (originalError) {
    if (!vidnestRefreshPromise && Date.now() - vidnestRefreshAt >= 10 * 60 * 1000) {
      vidnestRefreshAt = Date.now();
      vidnestRefreshPromise = discoverVidnestKeys().catch(() => []).finally(() => { vidnestRefreshPromise = null; });
    }
    const candidates = vidnestRefreshPromise ? await vidnestRefreshPromise : [];
    for (const candidate of candidates) {
      if (!candidate || candidate === vidnestSecret) continue;
      try {
        const value = await fn(candidate);
        vidnestSecret = candidate;
        return value;
      } catch {}
    }
    throw originalError;
  }
}

async function decryptVidnestPayload(value) {
  if (!(value && value.v === 2 && value.d)) return value;
  return withVidnestSecret(async secret => {
    const encrypted = base64UrlBytes(value.d);
    const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${value.n}|${secret}`));
    const key = await crypto.subtle.importKey("raw", digest, "AES-GCM", false, ["decrypt"]);
    const clear = await crypto.subtle.decrypt({ name: "AES-GCM", iv: encrypted.subarray(0, 12) }, key, encrypted.subarray(12));
    const text = new TextDecoder().decode(clear);
    try { return JSON.parse(text); } catch { return text; }
  });
}

async function vidnestApi(path) {
  const nonce = bytesToBase64Url(crypto.getRandomValues(new Uint8Array(16)));
  const data = await requestJSON(`${VIDNEST_API}${path}?_n=${nonce}`, {
    "User-Agent": UA,
    Referer: VIDNEST_SITE + "/",
    Origin: VIDNEST_SITE
  }, 12000);
  return decryptVidnestPayload(data);
}

function vidnestHeaders(value) {
  if (!value || typeof value !== "object") return undefined;
  const result = {};
  for (const [key, item] of Object.entries(value)) {
    if (/^(referer|origin)$/i.test(key) && item != null) {
      result[key.toLowerCase() === "referer" ? "Referer" : "Origin"] = String(item).trim();
    }
  }
  return Object.keys(result).length ? result : undefined;
}

function vidnestStream(server, item, label = "") {
  if (!item?.url || !/^https?:\/\//i.test(item.url)) return null;
  const quality = /\b(\d{3,4})p?\b/i.exec(item.quality || "")?.[1];
  const stream = {
    url: item.url.trim().replace(/\s+/g, ""),
    type: item.type === "mp4" ? "file" : "hls",
    provider: "vidnest",
    providerName: `VidNest ${server}${label ? ` (${label})` : ""}`,
    ...(quality ? { quality: quality + "p" } : {}),
    ...(vidnestHeaders(item.headers) ? { headers: vidnestHeaders(item.headers) } : {})
  };
  return stream;
}

async function vidnestExtract(type, tmdbId, season, episode) {
  const handlers = {
    catflix: d => d?.url ? [vidnestStream("Catflix", { url: d.url, headers: d.headers })].filter(Boolean) : [],
    filxer: d => d?.url ? [vidnestStream("Filxer", { url: d.url })].filter(Boolean) : [],
    gama: d => (d?.streams || []).map(s => vidnestStream("Gama", s, s.language || "")).filter(Boolean),
    lamda: d => (d?.streams || []).map(s => vidnestStream("Lamda", s)).filter(Boolean),
    beta: d => d?.status === "success" && d.url ? [vidnestStream("Beta", d)].filter(Boolean) : [],
    alfa: d => d?.status === "success" ? (d.streams || []).filter(s => s?.url && ["original", "multi"].includes((s.language || "").toLowerCase())).map((s, i) => vidnestStream("Alfa", { ...s, url: /^https?:\/\//.test(s.url) ? s.url : VIDNEST_ALFA_HOSTS[i % VIDNEST_ALFA_HOSTS.length] + s.url })).filter(Boolean) : [],
    prime: d => (d?.streams || []).map(s => vidnestStream("Prime", { ...s, headers: s.type === "mp4" ? undefined : { Referer: "https://vidora.stream/", Origin: "https://vidora.stream" } })).filter(Boolean),
    zeta: d => (d?.streams || []).map(s => vidnestStream("Zeta", s, s.language || "")).filter(Boolean),
    ophim: d => (d?.sources || []).map(s => vidnestStream("Ophim", s)).filter(Boolean),
    sigma: d => (d?.streams || []).filter(s => s?.url && s.type === "hls" && s.language === "GS-25").map(s => vidnestStream("Sigma", s)).filter(Boolean),
    delta: d => (d?.streams || []).map(s => vidnestStream("Delta", s, s.language || "")).filter(Boolean)
  };
  try {
    const isTV = type !== "movie";
    const results = await Promise.all(Object.entries(VIDNEST_SERVERS).map(async ([server, segment]) => {
      const path = isTV ? `/${segment}/tv/${tmdbId}/${season}/${episode}` : `/${segment}/movie/${tmdbId}`;
      try { return handlers[server](await vidnestApi(path)); }
      catch { return []; }
    }));
    return results.flat().filter(stream => !/\/embed[./]/i.test(stream.url));
  } catch (error) {
    console.log("[vidnest]", errorMessage(error));
    return [];
  }
}

const PROVIDERS = [
  { id: "vidsrc", name: "VidSrc", extract: vidsrcWithAutoEmbed },
  { id: "vidspark", name: "VidSpark", extract: vidsparkExtract },
  { id: "vixsrc", name: "VixSrc", extract: vixsrcExtract },
  { id: "vidzee", name: "VidZee", extract: vidzeeExtract },
  { id: "vidrock", name: "VidRock", extract: vidrockExtract },
  { id: "twoembed", name: "2Embed", extract: twoembedExtract },
  { id: "vidprime", name: "VidPrime", extract: vidprimeExtract },
  { id: "vidnest", name: "VidNest", extract: vidnestExtract }
];

function corsHeaders(extra = {}) {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Range",
    "Access-Control-Expose-Headers": "Content-Length, Content-Range, Accept-Ranges, Content-Type",
    ...extra
  };
}

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: corsHeaders({
      "Content-Type": "application/json; charset=utf-8",
      ...headers
    })
  });
}

function errorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}

function timeoutSignal(ms) {
  return AbortSignal.timeout(ms);
}

function withTimeout(promise, ms) {
  let timer;

  return Promise.race([
    Promise.resolve(promise),
    new Promise(resolve => {
      timer = setTimeout(() => resolve([]), ms);
    })
  ]).finally(() => clearTimeout(timer));
}

async function requestText(url, headers = {}, timeout = 8000) {
  const response = await fetch(url, {
    headers,
    signal: timeoutSignal(timeout),
    redirect: "follow"
  });

  if (!response.ok) {
    throw new Error(`Upstream ${response.status}: ${url}`);
  }

  return {
    response,
    text: await response.text()
  };
}

async function requestJSON(url, headers = {}, timeout = 8000) {
  const { text } = await requestText(url, headers, timeout);

  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`Invalid JSON from ${new URL(url).hostname}`);
  }
}

function getTMDBKey(env) {
  return env?.TMDB_API_KEY || DEFAULT_TMDB_API_KEY;
}

async function tmdb(env, path, params = {}) {
  const key = getTMDBKey(env);

  if (!key) {
    throw new Error("TMDB_API_KEY is not configured");
  }

  const url = new URL(TMDB_BASE + path);

  url.searchParams.set("api_key", key);

  for (const [name, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(name, String(value));
    }
  }

  const response = await fetch(url, {
    headers: {
      Accept: "application/json"
    },
    signal: timeoutSignal(10000)
  });

  const body = await response.text();

  if (!response.ok) {
    let message = body;

    try {
      message = JSON.parse(body).status_message || body;
    } catch {}

    const error = new Error(`TMDB ${response.status}: ${message}`);
    error.status = response.status;

    throw error;
  }

  return JSON.parse(body);
}

function b64ToBytes(value) {
  const binary = atob(
    String(value).replace(/-/g, "+").replace(/_/g, "/")
  );

  const bytes = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  return bytes;
}

function bytesToHex(bytes) {
  return [...bytes]
    .map(value => value.toString(16).padStart(2, "0"))
    .join("");
}

async function decryptWasmText(encoded, info, cacheKey = "wasm") {
  let key = info?.wasm_url ||
    info?.w ||
    (info?.wasm
      ? `${cacheKey}:${info.wasm.slice(0, 48)}`
      : "");

  if (!key) {
    throw new Error("Missing WASM decryptor");
  }

  if (!WASM_CACHE.has(key)) {
    const promise = info.wasm_url
      ? fetch(info.wasm_url, {
          headers: {
            "User-Agent": UA
          },
          signal: timeoutSignal(8000)
        }).then(async response => {
          if (!response.ok) {
            throw new Error(`WASM fetch ${response.status}`);
          }

          return WebAssembly.compile(
            await response.arrayBuffer()
          );
        })
      : WebAssembly.compile(b64ToBytes(info.wasm));

    promise.catch(() => WASM_CACHE.delete(key));
    WASM_CACHE.set(key, promise);
  }

  const module = await WASM_CACHE.get(key);
  const instance = await WebAssembly.instantiate(module, {});
  const exports = instance.exports;
  const encrypted = b64ToBytes(encoded);

  const pointer = exports.alloc(encrypted.length);

  new Uint8Array(
    exports.memory.buffer,
    pointer,
    encrypted.length
  ).set(encrypted);

  const length = exports.decrypt(pointer, encrypted.length);

  return new TextDecoder()
    .decode(
      new Uint8Array(
        exports.memory.buffer,
        pointer + 12,
        length
      )
    )
    .split("\n")
    .filter(Boolean);
}

function parseToken(text) {
  const raw = String(text || "").trim();

  if (raw.startsWith("{") || raw.startsWith("[")) {
    try {
      const value = JSON.parse(raw);

      return typeof value === "string"
        ? value
        : value?.token ||
          value?.data ||
          value?.string ||
          value?.result ||
          "";
    } catch {}
  }

  return raw;
}

async function getPlaybackToken(origin, apiToken, headers) {
  try {
    const response = await fetch(
      `${origin}/generate.php?api_token=${encodeURIComponent(apiToken)}`,
      {
        headers,
        signal: timeoutSignal(6000)
      }
    );

    return response.ok
      ? parseToken(await response.text())
      : "";
  } catch {
    return "";
  }
}

function buildTokenizedStreams(
  urls,
  token,
  provider,
  providerName,
  referer,
  quality
) {
  return urls
    .filter(url =>
      typeof url === "string" &&
      /^https?:\/\//i.test(url)
    )
    .map((rawUrl, index) => {
      let url = rawUrl;

      if (token) {
        url = url.includes("__TOKEN__")
          ? url.split("__TOKEN__").join(token)
          : url +
            (url.includes("?") ? "&" : "?") +
            "token=" +
            encodeURIComponent(token);
      }

      return {
        url,
        type: /\.(mp4|mkv|webm)(\?|$)/i.test(rawUrl)
          ? "file"
          : "hls",
        provider,
        providerName: urls.length > 1
          ? `${providerName} ${index + 1}`
          : providerName,
        ...(quality ? { quality } : {}),
        headers: {
          Referer: referer,
          Origin: new URL(referer).origin
        }
      };
    });
}

async function vidsrcExtract(type, tmdbId, season, episode) {
  try {
    const isTV = type === "tv";

    const id = isTV
      ? `${tmdbId}/${season}/${episode}`
      : String(tmdbId);

    const hostHeaders = {
      "User-Agent": UA,
      Referer: "https://vidsrc.sh/"
    };

    const srcData = await requestJSON(
      `https://vidsrc.sh/vs_src.php?type=${isTV ? "tv" : "movie"}&id=${encodeURIComponent(id)}`,
      hostHeaders,
      8000
    );

    if (!srcData?.src) return [];

    const playerUrl = srcData.src;
    const landing = await requestText(
      playerUrl,
      hostHeaders,
      8000
    );

    const cfgText = landing.text.match(
      /window\.CFG\s*=\s*(\{[^}]+\})/
    )?.[1];

    if (!cfgText) return [];

    const cfg = JSON.parse(cfgText);
    const origin = new URL(playerUrl).origin;

    const player = await requestText(
      new URL(cfg.playerUrl, origin).href,
      {
        "User-Agent": UA,
        Referer: origin + "/"
      },
      8000
    );

    const configText = player.text.match(
      /window\.CONFIG\s*=\s*(\{.*?\});/s
    )?.[1];

    if (!configText) return [];

    const config = JSON.parse(configText);

    if (!config.apiToken || config.rateLimited) {
      return [];
    }

    const apiUrl = new URL(
      "https://data.vidsrc.sh/api.php"
    );

    apiUrl.searchParams.set(
      "type",
      isTV ? "tv" : "movie"
    );

    apiUrl.searchParams.set("tmdb", tmdbId);

    if (isTV) {
      apiUrl.searchParams.set("season", season);
      apiUrl.searchParams.set("episode", episode);
    }

    apiUrl.searchParams.set("stream_urls", "");
    apiUrl.searchParams.set("api_token", config.apiToken);

    const data = await requestJSON(
      apiUrl.href,
      {
        ...hostHeaders,
        Referer: origin + "/"
      },
      8000
    );

    if (
      String(data?.status_code) !== "200" ||
      !data?.data
    ) {
      return [];
    }

    let urls = data.data.stream_urls;

    if (typeof urls === "string" && data.vs) {
      urls = await decryptWasmText(
        urls,
        data.vs,
        "vidsrc"
      );
    }

    if (!Array.isArray(urls)) return [];

    const byOrigin = new Map();
    const result = [];

    for (const raw of urls) {
      try {
        const streamOrigin = new URL(raw).origin;

        if (!byOrigin.has(streamOrigin)) {
          byOrigin.set(
            streamOrigin,
            getPlaybackToken(
              streamOrigin,
              config.apiToken,
              {
                "User-Agent": UA,
                Accept: "application/json",
                Origin: origin,
                Referer: origin + "/"
              }
            )
          );
        }

        const token = await byOrigin.get(streamOrigin);

        let streamUrl = raw;

        if (token) {
          streamUrl = streamUrl.includes("__TOKEN__")
            ? streamUrl.split("__TOKEN__").join(token)
            : streamUrl +
              (streamUrl.includes("?") ? "&" : "?") +
              "token=" +
              encodeURIComponent(token);
        }

        result.push({
          url: streamUrl,
          type: /\.(mp4|mkv)(\?|$)/i.test(raw)
            ? "file"
            : "hls",
          provider: "vidsrc",
          providerName: "VidSrc",
          headers: {
            Referer: origin + "/",
            Origin: origin
          }
        });
      } catch {}
    }

    return result;
  } catch (error) {
    console.log("[vidsrc]", errorMessage(error));
    return [];
  }
}

async function autoembedExtract(type, tmdbId, season, episode) {
  try {
    const isTV = type === "tv";

    const path = isTV
      ? `/embed/tv/${tmdbId}/${season}/${episode}`
      : `/embed/movie/${tmdbId}`;

    const player = "https://player.autoembed.me";

    const src = await requestJSON(
      `${player}/embed/va_src.php?path=${encodeURIComponent(path)}`,
      {
        "User-Agent": UA,
        Referer: player + path
      },
      7000
    );

    if (!src?.src) return [];

    const origin = new URL(src.src).origin;

    const landing = await requestText(
      src.src,
      {
        "User-Agent": UA,
        Referer: player + "/"
      },
      7000
    );

    const configText = landing.text.match(
      /const CONFIG = (\{.*?\});\s*\n/s
    )?.[1];

    if (!configText) return [];

    const config = JSON.parse(configText);

    if (
      config.rateLimited ||
      !config.apiToken ||
      !config.streamDataApiUrl
    ) {
      return [];
    }

    const apiUrl = new URL(config.streamDataApiUrl);

    apiUrl.searchParams.set("tmdb", tmdbId);
    apiUrl.searchParams.set(
      "type",
      isTV ? "tv" : "movie"
    );

    if (isTV) {
      apiUrl.searchParams.set("season", season);
      apiUrl.searchParams.set("episode", episode);
    }

    apiUrl.searchParams.set("stream_urls", "");
    apiUrl.searchParams.set("api_token", config.apiToken);

    const data = await requestJSON(
      apiUrl.href,
      {
        "User-Agent": UA,
        Referer: origin + "/",
        Origin: origin,
        Accept: "application/json"
      },
      7000
    );

    if (
      String(data?.status_code) !== "200" ||
      !data.data
    ) {
      return [];
    }

    let urls = data.data.stream_urls;
    const wasmInfo = data.vp || data.va;

    if (typeof urls === "string" && wasmInfo) {
      urls = await decryptWasmText(
        urls,
        wasmInfo,
        "autoembed"
      );
    }

    if (!Array.isArray(urls)) return [];

    const quality = data.data.file_name
      ?.match(/\b(2160|1080|720|480)p\b/)?.[0];

    const tokens = new Map();

    return await Promise.all(
      urls
        .filter(value => /^https?:\/\//.test(value))
        .map(async (raw, index) => {
          const streamOrigin = new URL(raw).origin;

          if (!tokens.has(streamOrigin)) {
            tokens.set(
              streamOrigin,
              getPlaybackToken(
                streamOrigin,
                config.apiToken,
                {
                  "User-Agent": UA,
                  Referer: origin + "/",
                  Origin: origin
                }
              )
            );
          }

          const token = await tokens.get(streamOrigin);

          const url = token
            ? (
                raw.includes("__TOKEN__")
                  ? raw.split("__TOKEN__").join(token)
                  : raw +
                    (raw.includes("?") ? "&" : "?") +
                    "token=" +
                    encodeURIComponent(token)
              )
            : raw;

          return {
            url,
            type: /\.mp4(\?|$)/i.test(raw)
              ? "file"
              : "hls",
            provider: "vidsrc",
            providerName: `AutoEmbed ${index + 1}`,
            ...(quality ? { quality } : {}),
            headers: {
              Referer: origin + "/",
              Origin: origin
            }
          };
        })
    );
  } catch (error) {
    console.log("[autoembed]", errorMessage(error));
    return [];
  }
}

async function vidsrcWithAutoEmbed(
  type,
  tmdbId,
  season,
  episode
) {
  const first = await vidsrcExtract(
    type,
    tmdbId,
    season,
    episode
  );

  return first.length
    ? first
    : autoembedExtract(type, tmdbId, season, episode);
}

async function vidsparkExtract(type, tmdbId, season, episode) {
  try {
    const base = "https://vidspark.to";

    const path = type === "tv"
      ? `/tv/${tmdbId}/${season}/${episode}`
      : `/movie/${tmdbId}`;

    const response = await fetch(
      `${base}/api/vidora/v1${path}`,
      {
        headers: {
          "User-Agent": UA,
          Referer: base + path,
          "x-player-key": "3a67e8866ae1d2bb9e81fe7f73315a56eb3bdf5e3e755c7554c8be6910aa6b13"
        },
        signal: timeoutSignal(9000)
      }
    );

    const data = await response.json().catch(() => null);

    if (!response.ok || !data?.result) return [];

    return (data.sources || [])
      .filter(source => source?.url)
      .map(source => ({
        url: source.url,
        type: source.url.includes(".m3u8")
          ? "hls"
          : "file",
        provider: "vidspark",
        providerName: "VidSpark",
        headers: {
          Referer: base + "/",
          Origin: base
        }
      }));
  } catch (error) {
    console.log("[vidspark]", errorMessage(error));
    return [];
  }
}

async function vixsrcExtract(type, tmdbId, season, episode) {
  try {
    const base = "https://vixsrc.to";

    const path = type === "tv"
      ? `/tv/${tmdbId}/${season}/${episode}`
      : `/movie/${tmdbId}`;

    const headers = {
      "User-Agent": UA,
      Referer: base + path
    };

    const api = await requestJSON(
      base + "/api" + path,
      headers,
      9000
    );

    if (!api?.src) return [];

    const page = await requestText(
      base + api.src,
      headers,
      9000
    );

    const token = page.text.match(
      /["']token["']\s*:\s*["']([^"']+)["']/
    )?.[1];

    const expires = page.text.match(
      /["']expires["']\s*:\s*["']([^"']+)["']/
    )?.[1];

    const playlist = page.text.match(
      /masterPlaylist[\s\S]*?url\s*:\s*["']([^"']+)["']/
    )?.[1];

    if (!token || !expires || !playlist) {
      return [];
    }

    const url = new URL(
      playlist.replace(/\\\//g, "/")
    );

    url.searchParams.set("token", token);
    url.searchParams.set("expires", expires);

    if (/window\.canPlayFHD\s*=\s*true/.test(page.text)) {
      url.searchParams.set("h", "1");
    }

    url.searchParams.set("lang", "en");

    return [{
      url: url.href,
      type: "hls",
      provider: "vixsrc",
      providerName: "VixSrc"
    }];
  } catch (error) {
    console.log("[vixsrc]", errorMessage(error));
    return [];
  }
}

async function vidzeeExtract(type, tmdbId, season, episode) {
  try {
    const player = "https://player.vidzee.wtf";
    const core = "https://core.vidzee.wtf";

    const path = type === "tv"
      ? `tv/${tmdbId}/${season}/${episode}`
      : `movie/${tmdbId}`;

    const headers = {
      "User-Agent": UA,
      Referer: player + "/",
      Origin: player
    };

    const languageData = await requestJSON(
      `${core}/streams/languages/${path}`,
      headers,
      8000
    ).catch(() => ({}));

    const languages = Array.isArray(languageData?.languages)
      ? languageData.languages
      : [];

    const servers = [
      ...(type === "movie"
        ? [{ id: "peak", label: "Peak" }]
        : []),
      { id: "dcloud", label: "Dcloud" },
      ...languages.map(language => ({
        id: "v4:" + language,
        label: "Acme " + language
      })),
      { id: "tik", label: "TCloud" },
      { id: "v6:Hindi", label: "Hindi" },
      { id: "v6:English", label: "English" }
    ];

    const results = await Promise.all(
      servers.map(async server => {
        try {
          const data = await requestJSON(
            `${core}/streams/${path}?s=${encodeURIComponent(server.id)}`,
            headers,
            10000
          );

          if (!data?.url) return null;

          return {
            url: data.url,
            type: /\.(mp4|mkv|webm)(\?|$)/i.test(data.url)
              ? "file"
              : "hls",
            provider: "vidzee",
            providerName: `VidZee ${server.label}`,
            headers: data.headers &&
              Object.keys(data.headers).length
              ? data.headers
              : {
                  Referer: player + "/",
                  Origin: player
                }
          };
        } catch {
          return null;
        }
      })
    );

    return results.filter(Boolean);
  } catch (error) {
    console.log("[vidzee]", errorMessage(error));
    return [];
  }
}

function base64UrlToBytes(value) {
  return b64ToBytes(
    value.replace(/-/g, "+").replace(/_/g, "/")
  );
}

async function vidrockExtract(type, tmdbId, season, episode) {
  try {
    const base = "https://vidrock.net";

    const path = type === "tv"
      ? `tv/${tmdbId}/${season}/${episode}`
      : `movie/${tmdbId}`;

    const headers = {
      "User-Agent": UA,
      Referer: `${base}/${path}`,
      Origin: base
    };

    const data = await requestJSON(
      `${base}/api/${path}`,
      headers,
      10000
    );

    const keyHex = "7f3e9c2a8b5d1f4e6a9c3b7d2e5f8a1c4b6d9e2f5a8c1b4d7e9f2a5c8b1d4e7f";

    const key = await crypto.subtle.importKey(
      "raw",
      Uint8Array.from(
        keyHex.match(/../g),
        byte => parseInt(byte, 16)
      ),
      "AES-GCM",
      false,
      ["decrypt"]
    );

    const rows = await Promise.all(
      Object.entries(data || {}).map(async ([name, source]) => {
        if (!source?.url) return [];

        try {
          const encrypted = base64UrlToBytes(source.url);

          if (encrypted.length < 28) return [];

          const iv = encrypted.slice(0, 12);
          const ciphertext = encrypted.slice(12);

          const clear = await crypto.subtle.decrypt(
            {
              name: "AES-GCM",
              iv,
              tagLength: 128
            },
            key,
            ciphertext
          );

          const url = new TextDecoder().decode(clear);

          if (!/^https?:\/\//.test(url)) return [];

          return [{
            url,
            type: source.type === "mp4" ? "file" : "hls",
            provider: "vidrock",
            providerName: `VidRock ${name}`,
            headers: {
              Referer: base + "/",
              Origin: base
            }
          }];
        } catch {
          return [];
        }
      })
    );

    return rows.flat();
  } catch (error) {
    console.log("[vidrock]", errorMessage(error));
    return [];
  }
}

async function twoembedExtract(type, tmdbId, season, episode) {
  try {
    const base = "https://vidsrc.buzz";
    const api = base + "/pl/api.php";

    const path = type === "tv"
      ? `/embed/tv/${tmdbId}/${season}/${episode}`
      : `/embed/movie/${tmdbId}`;

    const { text: html } = await requestText(
      base + path,
      {
        "User-Agent": UA,
        Referer: "https://www.2embed.cc/"
      },
      9000
    );

    const configText = html.match(
      /var Q = (\{.*?\});\n/s
    )?.[1];

    if (!configText) return [];

    const config = JSON.parse(configText);
    const servers = config.ssr?.servers || [];

    if (!config.t || !servers.length) return [];

    const ordered = [
      ...servers.filter(server => !/XPM/i.test(server.name)),
      ...servers.filter(server => /XPM/i.test(server.name))
    ];

    const groups = [];

    for (let i = 0; i < ordered.length; i += 6) {
      groups.push(
        ordered.slice(i, i + 6).map(server => server.ref)
      );
    }

    const raced = (
      await Promise.all(
        groups.map(async refs => {
          try {
            const d = await requestJSON(
              `${api}?a=race&refs=${encodeURIComponent(refs.join(","))}`,
              {
                "User-Agent": UA
              },
              7000
            );

            return d?.cands || [];
          } catch {
            return [];
          }
        })
      )
    ).flat();

    const have = new Set(
      raced.map(candidate => candidate.ref)
    );

    const toMint = ordered
      .filter(server =>
        !have.has(server.ref) &&
        !/XPM/i.test(server.name)
      )
      .slice(0, 4);

    const minted = await Promise.all(
      toMint.map(async server => {
        try {
          const d = await requestJSON(
            `${api}?a=play&ref=${encodeURIComponent(server.ref)}&t=${encodeURIComponent(config.t)}`,
            {
              "User-Agent": UA
            },
            7000
          );

          return d?.url
            ? {
                url: d.url,
                type: d.type
              }
            : null;
        } catch {
          return null;
        }
      })
    );

    const unique = new Set();

    return [...raced, ...minted.filter(Boolean)]
      .map(candidate => {
        const url = new URL(
          candidate.url,
          base + "/"
        ).href;

        if (unique.has(url)) return null;

        unique.add(url);

        return {
          url,
          type: candidate.type === "mp4"
            ? "file"
            : "hls",
          provider: "twoembed",
          providerName: "2Embed"
        };
      })
      .filter(Boolean);
  } catch (error) {
    console.log("[twoembed]", errorMessage(error));
    return [];
  }
}

async function vidprimeExtract(type, tmdbId, season, episode) {
  const base = "https://vidprime.top";

  const servers = [
    ["x9pv", "Helix"],
    ["w7dn", "Orion"],
    ["vjej", "Zenith"]
  ];

  const path = type === "tv"
    ? `/v1/tv/${tmdbId}/${season}/${episode}`
    : `/v1/movie/${tmdbId}`;

  const page = type === "tv"
    ? `${base}/tv/${tmdbId}/${season}/${episode}`
    : `${base}/movie/${tmdbId}`;

  const results = await Promise.all(
    servers.map(async ([id, label]) => {
      try {
        const response = await fetch(
          `${base}/api/vidora${path}?source=${id}`,
          {
            headers: {
              "User-Agent": UA,
              Referer: page,
              "x-player-key": "f3b72e73c80c9a996574379798703796a1936efa3516a7105cb0e43048b46b5a"
            },
            signal: timeoutSignal(8500)
          }
        );

        if (!response.ok) return null;

        const data = await response.json();

        const url = data?.result &&
          data.sources?.[0]?.url;

        if (!url || /dash-mpd|\.mpd(\?|$)/i.test(url)) {
          return null;
        }

        return {
          url,
          type: /\.mp4(\?|$)/i.test(url)
            ? "file"
            : "hls",
          provider: "vidprime",
          providerName: `VidPrime ${label}`,
          headers: {
            Referer: base + "/",
            Origin: base
          }
        };
      } catch {
        return null;
      }
    })
  );

  return results.filter(Boolean);
}

function parseStreamHeaders(raw) {
  if (!raw) return {};

  try {
    const value = JSON.parse(raw);

    if (
      !value ||
      typeof value !== "object" ||
      Array.isArray(value)
    ) {
      return {};
    }

    return Object.fromEntries(
      Object.entries(value).filter(([key, item]) =>
        (typeof item === "string" || item === null) &&
        !BLOCKED_HEADERS.has(key.toLowerCase())
      )
    );
  } catch {
    return {};
  }
}

function upstreamHeaders(url, extra = {}) {
  const headers = {
    "User-Agent": UA,
    Referer: new URL(url).origin + "/"
  };

  for (const [key, value] of Object.entries(extra)) {
    for (const existing of Object.keys(headers)) {
      if (existing.toLowerCase() === key.toLowerCase()) {
        delete headers[existing];
      }
    }

    if (value !== null) {
      headers[key] = value;
    }
  }

  return headers;
}

function isPrivateIPv4(host) {
  const parts = host.split(".").map(Number);

  if (
    parts.length !== 4 ||
    parts.some(value =>
      !Number.isInteger(value) ||
      value < 0 ||
      value > 255
    )
  ) {
    return false;
  }

  const [a, b] = parts;

  return (
    a === 0 ||
    a === 10 ||
    a === 127 ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) ||
    (a >= 224)
  );
}

function validateProxyUrl(value) {
  let url;

  try {
    url = new URL(value);
  } catch {
    throw new Error("Invalid url");
  }

  if (
    url.protocol !== "http:" &&
    url.protocol !== "https:"
  ) {
    throw new Error("Only HTTP(S) URLs are allowed");
  }

  const host = url.hostname
    .toLowerCase()
    .replace(/^\[|\]$/g, "");

  if (
    !host ||
    host === "localhost" ||
    host.endsWith(".localhost") ||
    host.endsWith(".local") ||
    host.endsWith(".internal") ||
    host === "metadata.google.internal"
  ) {
    throw new Error("Local addresses are not allowed");
  }

  if (
    isPrivateIPv4(host) ||
    host === "::1" ||
    host === "::" ||
    host.startsWith("fc") ||
    host.startsWith("fd") ||
    host.startsWith("fe80:")
  ) {
    throw new Error("Private IP addresses are not allowed");
  }

  return url;
}

function childUrl(ref, base, token) {
  const absolute = new URL(ref, base);

  if (token && !absolute.searchParams.has("token")) {
    absolute.searchParams.set("token", token);
  }

  return absolute.href;
}

async function streamLooksAlive(stream) {
  const controller = new AbortController();

  const timer = setTimeout(
    () => controller.abort(),
    CHECK_TIMEOUT
  );

  const headers = upstreamHeaders(
    stream.url,
    stream.headers
  );

  try {
    if (stream.type !== "hls") {
      headers.Range = "bytes=0-0";

      const response = await fetch(stream.url, {
        headers,
        signal: controller.signal
      });

      response.body?.cancel();

      return (
        response.ok &&
        !(response.headers.get("content-type") || "")
          .includes("text/html")
      );
    }

    let current = stream.url;

    for (let depth = 0; depth < 3; depth++) {
      const response = await fetch(current, {
        headers: upstreamHeaders(
          current,
          stream.headers
        ),
        signal: controller.signal
      });

      if (!response.ok) return false;

      const text = await response.text();

      if (!text.trimStart().startsWith("#EXTM3U")) {
        return false;
      }

      const lines = text
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(Boolean);

      const next = lines.find(
        line => !line.startsWith("#")
      );

      if (!next) return false;

      const token = new URL(current)
        .searchParams.get("token");

      current = childUrl(
        next,
        response.url || current,
        token
      );

      if (!text.includes("#EXT-X-STREAM-INF")) {
        const segment = await fetch(current, {
          headers: upstreamHeaders(
            current,
            stream.headers
          ),
          signal: controller.signal
        });

        if (!segment.ok || !segment.body) {
          return false;
        }

        const reader = segment.body.getReader();

        let size = 0;
        let first = new Uint8Array();

        while (size < 1024) {
          const part = await reader.read();

          if (part.done) break;

          if (!first.length) {
            first = part.value;
          }

          size += part.value.length;
        }

        await reader.cancel().catch(() => {});

        const beginning = new TextDecoder()
          .decode(first.slice(0, 32))
          .trimStart();

        return (
          size >= 1024 &&
          !beginning.startsWith("<") &&
          !beginning.startsWith("{")
        );
      }
    }

    return false;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

async function scrapeStreams(
  env,
  type,
  tmdbId,
  season,
  episode
) {
  const cacheKey = [
    type,
    tmdbId,
    season || "",
    episode || ""
  ].join(":");

  const cached = STREAM_CACHE.get(cacheKey);

  if (
    cached &&
    Date.now() - cached.at < CACHE_TTL
  ) {
    return cached.streams;
  }

  const sets = await Promise.all(
    PROVIDERS.map(async provider => {
      try {
        const extracted = await withTimeout(
          provider.extract(
            type,
            tmdbId,
            season,
            episode
          ),
          PROVIDER_TIMEOUT
        );

        return Array.isArray(extracted)
          ? extracted
          : [];
      } catch (error) {
        console.log(
          `[${provider.id}]`,
          errorMessage(error)
        );

        return [];
      }
    })
  );

  const all = sets.flat();
  const unique = new Map();

  for (const stream of all) {
    if (
      !stream?.url ||
      !/^https?:\/\//i.test(stream.url)
    ) {
      continue;
    }

    if (!unique.has(stream.url)) {
      unique.set(stream.url, stream);
    }
  }

  const candidates = [...unique.values()];

  const checks = await Promise.all(
    candidates.map(async stream =>
      await streamLooksAlive(stream)
        ? stream
        : null
    )
  );

  const streams = checks.filter(Boolean);

  if (streams.length) {
    STREAM_CACHE.delete(cacheKey);

    STREAM_CACHE.set(cacheKey, {
      at: Date.now(),
      streams
    });

    if (STREAM_CACHE.size > CACHE_MAX) {
      STREAM_CACHE.delete(
        STREAM_CACHE.keys().next().value
      );
    }
  }

  return streams;
}

async function handleProxy(request, url) {
  const targetValue = url.searchParams.get("url");

  if (!targetValue) {
    return json({
      error: "url required"
    }, 400);
  }

  let target;

  try {
    target = validateProxyUrl(targetValue);
  } catch (error) {
    return json({
      error: errorMessage(error)
    }, 400);
  }

  const extraHeaders = parseStreamHeaders(
    url.searchParams.get("headers")
  );

  const headers = upstreamHeaders(
    target.href,
    extraHeaders
  );

  const range = request.headers.get("Range");

  if (range) {
    headers.Range = range;
  }

  try {
    const upstream = await fetch(target.href, {
      method: request.method === "HEAD"
        ? "HEAD"
        : "GET",
      headers,
      signal: request.signal,
      redirect: "follow"
    });

    if (!upstream.ok) {
      return new Response(null, {
        status: upstream.status,
        headers: corsHeaders()
      });
    }

    const contentType =
      upstream.headers.get("content-type") || "";

    if (
      request.method !== "HEAD" &&
      !range
    ) {
      const clone = upstream.clone();
      const probe = clone.body?.getReader();

      const first = await probe
        ?.read()
        .catch(() => null);

      await probe?.cancel().catch(() => {});

      const prefix = first?.value
        ? new TextDecoder().decode(
            first.value.slice(0, 256)
          )
        : "";

      const isPlaylist =
        contentType.toLowerCase().includes("mpegurl") ||
        prefix.trimStart().startsWith("#EXTM3U");

      if (isPlaylist) {
        const text = await upstream.text();

        if (text.length > 3_000_000) {
          return json({
            error: "Playlist is too large"
          }, 502);
        }

        const finalUrl = upstream.url || target.href;

        const token = new URL(finalUrl)
          .searchParams.get("token");

        const headersParam =
          url.searchParams.get("headers");

        const extra = headersParam
          ? `&headers=${encodeURIComponent(headersParam)}`
          : "";

        const origin = new URL(request.url).origin;

        const wrap = ref =>
          `${origin}/api/proxy?url=${encodeURIComponent(
            childUrl(ref, finalUrl, token)
          )}${extra}`;

        const rewritten = text
          .replace(
            /^(?!#)(\S+)$/gm,
            line => wrap(line)
          )
          .replace(
            /URI="([^"]+)"/g,
            (_match, ref) => `URI="${wrap(ref)}"`
          );

        return new Response(rewritten, {
          status: 200,
          headers: corsHeaders({
            "Content-Type": "application/vnd.apple.mpegurl; charset=utf-8",
            "Cache-Control": "no-store"
          })
        });
      }
    }

    const responseHeaders = corsHeaders();

    for (const name of PASS_HEADERS) {
      const value = upstream.headers.get(name);

      if (value) {
        responseHeaders[name] = value;
      }
    }

    if (!contentType) {
      responseHeaders["Content-Type"] =
        "application/octet-stream";
    }

    return new Response(
      request.method === "HEAD"
        ? null
        : upstream.body,
      {
        status: upstream.status,
        headers: responseHeaders
      }
    );
  } catch (error) {
    return json({
      error: errorMessage(error)
    }, 502);
  }
}

function matchPath(path, pattern) {
  const match = path.match(pattern);

  return match
    ? match.slice(1).map(decodeURIComponent)
    : null;
}

async function handleRequest(request, env) {
  const url = new URL(request.url);

  const path =
    url.pathname.replace(/\/+$/, "") || "/";

  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders()
    });
  }

  if (
    request.method !== "GET" &&
    request.method !== "HEAD"
  ) {
    return json({
      error: "Method not allowed"
    }, 405, {
      Allow: "GET, HEAD, OPTIONS"
    });
  }

  if (
    path === "/" ||
    path === "/index.html"
  ) {
    return new Response(APP_HTML, {
      status: 200,
      headers: corsHeaders({
        "Content-Type": "text/html; charset=utf-8"
      })
    });
  }

  if (
    path === "/api" ||
    path === "/api/"
  ) {
    return json({
      name: "Movies API",
      runtime: "Cloudflare Workers",
      endpoints: [
        "GET /api/sources",
        "GET /api/search/:type?query=",
        "GET /api/trending/:type/:window",
        "GET /api/movie/:id",
        "GET /api/:movieid (Netflix-style player page)",
        "GET /api/tv/:id",
        "GET /api/tv/:id/season/:season",
        "GET /api/stream/movie/:tmdbId",
        "GET /api/stream/tv/:tmdbId/:season/:episode",
        "GET /api/proxy?url=&headers="
      ],
      note: "Metadata uses TMDB. Streaming support includes the Worker-compatible providers listed by /api/sources."
    });
  }

  if (path === "/api/sources") {
    return json({
      custom: PROVIDERS.map(({ id, name }) => ({ id, name, supported: true })),
      sources: [],
      embeds: [],
      unavailable: [
        { id: "cinesrc", name: "CineSrc", reason: "Requires node:vm and happy-dom, which are unavailable in Cloudflare Workers." },
        { id: "hexa", name: "Hexa", reason: "Requires executing a remote player bundle in node:vm." },
        { id: "xpass", name: "XPass", reason: "Its provider extractor depends on node:vm for player-script decoding." },
        { id: "vidfast", name: "VidFast", reason: "The shared VidFast/VidCore/VidUp extractor requires node:vm and happy-dom." },
        { id: "vidcore", name: "VidCore", reason: "The shared VidFast/VidCore/VidUp extractor requires node:vm and happy-dom." },
        { id: "vidup", name: "VidUp", reason: "The shared VidFast/VidCore/VidUp extractor requires node:vm and happy-dom." },
        { id: "vidlink", name: "VidLink", reason: "Requires node:vm plus Go WebAssembly runtime bootstrapping." }
      ],
      pstream: {
        supported: false,
        knownSources: ["LookMovie", "HDRezka", "FshareTV", "Cuevana3"],
        reason: "The repository's @p-stream/providers dependency is a separate package and is not included in this single-file Worker build."
      },
      note: "Cloudflare Worker-compatible extractors are listed in custom. Provider support can change when upstream sites change."
    });
  }

  if (path === "/api/proxy") {
    return handleProxy(request, url);
  }

  let params;

  try {
    if (
      params = matchPath(
        path,
        /^\/api\/search\/([^/]+)$/
      )
    ) {
      const [type] = params;
      const query = url.searchParams.get("query");

      if (!query) {
        return json({
          error: "query required"
        }, 400);
      }

      if (!["movie", "tv", "multi"].includes(type)) {
        return json({
          error: "type must be movie, tv, or multi"
        }, 400);
      }

      return json(
        await tmdb(env, `/search/${type}`, {
          query,
          page: url.searchParams.get("page")
        })
      );
    }

    if (
      params = matchPath(
        path,
        /^\/api\/trending\/([^/]+)\/([^/]+)$/
      )
    ) {
      const [type, window] = params;

      if (
        !["all", "movie", "tv"].includes(type) ||
        !["day", "week"].includes(window)
      ) {
        return json({
          error: "Invalid trending type or window"
        }, 400);
      }

      return json(
        await tmdb(
          env,
          `/trending/${type}/${window}`,
          {
            page: url.searchParams.get("page")
          }
        )
      );
    }

    if (
      params = matchPath(
        path,
        /^\/api\/movie\/([^/]+)$/
      )
    ) {
      return json(
        await tmdb(env, `/movie/${params[0]}`, {
          append_to_response: "external_ids"
        })
      );
    }

    if (
      params = matchPath(
        path,
        /^\/api\/tv\/([^/]+)\/season\/([^/]+)$/
      )
    ) {
      return json(
        await tmdb(
          env,
          `/tv/${params[0]}/season/${params[1]}`
        )
      );
    }

    if (
      params = matchPath(
        path,
        /^\/api\/tv\/([^/]+)$/
      )
    ) {
      return json(
        await tmdb(env, `/tv/${params[0]}`, {
          append_to_response: "external_ids"
        })
      );
    }

    if (
      params = matchPath(
        path,
        /^\/api\/stream\/movie\/([^/]+)$/
      )
    ) {
      return json({
        streams: await scrapeStreams(
          env,
          "movie",
          params[0]
        )
      });
    }

    if (
      params = matchPath(
        path,
        /^\/api\/stream\/tv\/([^/]+)\/([^/]+)\/([^/]+)$/
      )
    ) {
      return json({
        streams: await scrapeStreams(
          env,
          "tv",
          params[0],
          params[1],
          params[2]
        )
      });
    }

    if (
      params = matchPath(path, /^\/api\/(\d+)$/)
    ) {
      return new Response(request.method === "HEAD" ? null : PLAYER_HTML, {
        status: 200,
        headers: corsHeaders({
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store"
        })
      });
    }
  } catch (error) {
    const status =
      Number(error?.status) || 500;

    return json({
      error: errorMessage(error)
    }, status);
  }

  return json({
    error: "Not found"
  }, 404);
}

export default {
  async fetch(request, env) {
    return handleRequest(request, env);
  }
};
