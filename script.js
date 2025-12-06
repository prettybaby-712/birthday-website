/* ========== IMAGES / VIDEOS - update these exactly as in images/ folder ========== */
const galleryImages = [
  "VID_20250322_235329_138.mp4",
  "Snapchat-203516140.mp4",
  "VID_20250320_052447_269.mp4",
  "Snapchat-1807387439.mp4",
  "Snapchat-1418656630.mp4",
  "Screenshot_20250622_223948_WhatsApp.jpg",
  "Screenshot_20250517_153227_Instagram.jpg",
  "Screenshot_20250505_220709_Call.jpg",
  "Screenshot_20250331_220603_Instagram.jpg",
  "IMG_20250524_203534_997.jpg",
  "IMG_20250323_122121_423.jpg",
  "IMG_20250323_122028_572.jpg",
  "IMG-20250621-WA0009.jpg",
  "Snapchat-1334195782.mp4",
];

/* ========== LETTERS: full texts (paste your letters here if you want edits) ========== */
const lettersContent = [
  {title:"The Beginning", text:`My love,
Happy 18th Birthday🫶🏻. I still remember the version of me before you came into my life, quieter, more closed off, a little lost. And then you walked in so suddenly and made everything feel softer. I didn’t even notice when I started depending on you… when your name became my comfort. Even with the distance, you feel close to my heart, like you’re stitched into it. I’m just really grateful that I get to love you😭🤍.`},

  {title:"The Distance", text:`Baby,
Some days the distance hits me like a wave, those evenings when I wish I could just see your face, touch your hand, or rest my head on your shoulder. But even then, the thought of you keeps me going🥺. The late-night calls, your sleepy voice, the way you laugh at my dramatic reactions, it all reminds me that what we have is real. And I’d choose this distance over losing you any day💕.`},

  {title:"The Attachment", text:`I don’t know when it happened, but you became the person I never want to lose🫂. I’ve never been this attached to anyone before, the way I feel for you is new, scary, exciting, everything at once. You made me soft in ways I didn’t even expect. With you, my attitude melts, and the real me comes out, the clingy, emotional, annoying little version who loves you way too much. And you still accept me. That means more than you know💗.`},

  {title:"The 6 Months Gone", text:`My sweetheart✨️,
Six months have passed since we started this journey… and sometimes it shocks me how deeply I’ve fallen for you in such a short time. Every day with you, even from miles away, has been a memory. Your calls, your voice, your comfort, your random teasing… it has all become a part of my routine. I miss you, yes. But I also feel grateful, because these six months made my heart yours in a way nothing else ever did.`},

  {title:"The 6 Months Left", text:`Love,
Six months more until I get to see you again… and yes, it feels long, but it doesn’t scare me anymore. Because I know what we have is worth the wait. I know that the first moment I see you again, all this distance, all this longing, all this missing… it’ll all make sense. I can already imagine running to you and hugging you so tight that even the months apart won’t matter💌. Until then, I’ll hold on to us, and to you.`},

  {title:"Your Voice", text:`My love,
There’s something about your voice that feels like medicine to me💋. Whether you’re teasing me, scolding me, or just talking nonsense, it still makes my heart relax. I don’t think you realise how many times I replay our calls in my mind when I miss you. Your voice has this calm, warm rhythm that makes everything feel okay, even the days where I’m stressed, scared, or overwhelmed. It’s stupid how much I depend on it, but I love that I do.`},

  {title:"Your Smile", text:`Baby,
Your smile is honestly one of my favourite things in this world. I don’t even need a perfect picture, just that half-smile you make when you’re shy, or that wide one when you laugh too hard… it melts me every time. I swear, seeing you smile, even on a screen, fixes my whole day💟. And when I finally get to see it in person again, I’m pretty sure my heart will explode.`},

  {title:"The Bite Marks", text:`You know I’m going to talk about this one😭🤌🏻. I still laugh thinking about how I always end up biting you whenever I get too happy or too clingy. And you just let me?? Like it’s the most normal thing in the world. Those little bite marks on your arm… they’re stupidly precious to me. It’s like my tiny way of claiming you, of saying “you’re mine😏".And don’t lie, you love it too.`},

  {title:"Your Patience with Me", text:`My sweetheart,
I know I have my moments, the attitude, the mood swings, the sensitive reactions, the dramatic breakdowns. But the way you handle me… it makes me feel so safe🥹💗. You never make me feel “too much.” You never make me feel hard to love. Instead, you stay, you comfort, you adjust, and you understand me better than I understand myself sometimes. Your patience is one of the biggest reasons I love you the way I do.`},

  {title:"Your Support", text:`Love,
Thank you for always being there in the ways I needed, even when you were tired or stressed yourself. The way you encourage me before exams, the way you tell me I’m capable, the way you hype me up when I feel low, it has helped me through so many moments😌💜. You don’t even realise how much strength I take from you. You make me want to do better, be better, and grow… just so I can be someone who matches the love you give me.`},

  {title:"Your Little Habits", text:`My love,
There are so many small things about you that I adore. The way you say my name. The way your voice changes when you’re sleepy. The way you get irritated for 2 minutes and then soften again. The way you try to act tough but end up being the softest person🎀 with me. These tiny habits… they’ve become my comfort. I didn’t know a person could feel so familiar, even from miles away.`},

  {title:"When I Miss You", text:`Baby,
When I miss you, it hits differently. It’s not just “oh I wish he was here.” It’s more like… a little ache in my chest, a heaviness in my throat, a soft longing that doesn’t go away until I hear your voice😭✨️. Missing you has become part of my routine, but so has loving you. And somehow, even with all the ache, loving you still feels worth every bit of it.`},

  {title:"The Way You Make Me Feel", text:`There’s this feeling I get only with you, it’s somewhere between butterflies and peace💞. Like my heart is excited but also calm at the same time. You make me feel chosen, wanted, seen. You make me feel like I don’t need to pretend or hide anything🤍. You make me feel like I’m enough. And I don’t think you understand how rare that is.`},

  {title:"Our Future", text:`My sweetheart,
Sometimes I imagine the future, not the big things, but the small ones. Waking up next to you. Eating together. Arguing about stupid things. Watching movies. Going grocery shopping. Holding hands whenever we walk anywhere⭐️. These small dreams feel so real to me. Maybe that’s why I’m holding onto us so strongly… because somewhere in my heart, I already see a life with you in it.`},

  {title:"Why I Choose You", text:`Love,
There are a lot of people in this world, but none of them make me feel the way you do. You understand me, you make me laugh, you calm me down, you challenge me, you comfort me, you do everything without even trying🥺🤌🏻. I choose you every day, in every moment, in every version of my life. And I’ll keep choosing you, no matter the distance, the time, or the challenges.`},

  {title:"The Day I See You Again", text:`My love,
I think about the moment I’ll finally see you again more often than you think. In my head, I’m running to you, literally running, and hugging you so tight that you can’t even breathe for a second🫂🤍. I imagine your arms wrapping around me, your smile, your warmth… everything I’ve missed all these months. That first hug is going to fix every empty moment I’ve felt without you. And I can’t wait for that day.`},

  {title:"What You Are to Me", text:`Baby,
You’re not just my boyfriend. You’re my peace when the world feels too loud. You’re my comfort when I fall apart. You’re my happiness on the days I can’t find any. You’re the one person I trust with the softest parts of me, the parts I hide from everyone else. 😭🎀 Having you in my life feels like having a constant source of warmth, love, and safety. You’re my person. And you always will be.`},

  {title:"My Birthday Wish for You", text:`Sweetheart🎀,
On your 18th birthday, I just want one thing for you, happiness. The kind of happiness that stays with you, even on difficult days. I want your dreams to come true, I want your hard work to pay off, I want you to become everything you’re meant to be. And through all of it, I want to stay by your side, supporting you, loving you, annoying you, biting you, everything.
Thank you for being in my life. Thank you for choosing me.
And happy birthday, my love, today and every year after this, I’m yours. 😚💞` }
];

/* ---------- build grid (polaroids + video support) ---------- */
const grid = document.getElementById('polaroid-grid');

/* helper to check video */
function isVideo(filename){
  return /\.(mp4|webm|mov)$/i.test(filename);
}

function makePolaroid(src, idx){
  const wrap = document.createElement('div');
  wrap.className = 'polaroid';
  wrap.style.setProperty('--rand', Math.random().toFixed(3));
  const outer = document.createElement('div');
  outer.className = 'outer';
  const card = document.createElement('div');
  card.className = 'card';

  const front = document.createElement('div'); front.className = 'face front';
  const strip = document.createElement('div'); strip.className = 'white-strip';

  if(isVideo(src)){
    const thumbVid = document.createElement('video');
    thumbVid.className = 'thumb video-thumb';
    thumbVid.src = `images/${src}`;
    thumbVid.muted = true; thumbVid.loop = true; thumbVid.playsInline = true;
    thumbVid.autoplay = true; // autoplay on small thumb — may be blocked on some devices
    thumbVid.setAttribute('webkit-playsinline','true');
    front.appendChild(thumbVid);
  } else {
    const thumb = document.createElement('img');
    thumb.className = 'thumb';
    thumb.src = `images/${src}`;
    thumb.alt = src;
    front.appendChild(thumb);
  }
  front.appendChild(strip);

  const back = document.createElement('div'); back.className = 'face back';
  if(isVideo(src)){
    const bigVid = document.createElement('video');
    bigVid.className = 'fullphoto';
    bigVid.src = `images/${src}`;
    bigVid.controls = true; bigVid.playsInline = true;
    back.appendChild(bigVid);
  } else {
    const full = document.createElement('img');
    full.className = 'fullphoto';
    full.src = `images/${src}`;
    full.alt = src;
    back.appendChild(full);
  }

  card.appendChild(front); card.appendChild(back);
  outer.appendChild(card); wrap.appendChild(outer);

  wrap.addEventListener('click', function(e){
    // close any other flipped cards first
    document.querySelectorAll('.polaroid.flipped').forEach(p=>{
      if(p !== wrap) p.classList.remove('flipped');
    });
    wrap.classList.toggle('flipped');
    if(wrap.classList.contains('flipped')){
      setTimeout(()=> wrap.scrollIntoView({behavior:'smooth', block:'center'}), 260);
      // if video on back, autoplay it when flipped
      const v = wrap.querySelector('.face.back video');
      if(v){
        try{ v.play(); }catch(e){}
      }
    } else {
      const v = wrap.querySelector('.face.back video');
      if(v) try{ v.pause(); }catch(e){}
    }
  });

  return wrap;
}

function buildGallery(){
  grid.innerHTML = '';
  galleryImages.forEach((fn, i)=>{
    if(!fn) return;
    const p = makePolaroid(fn, i);
    grid.appendChild(p);
  });
}

/* ------------------ page switching (nav) ------------------ */
function showPage(name){
  document.querySelectorAll('.page').forEach(p=> p.classList.remove('active'));
  const el = document.getElementById(`page-${name}`);
  if(el) el.classList.add('active');
  // small UX: scroll top
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ------------------ letters UI ------------------ */
const lettersContainer = document.querySelector('.letter-box');
function renderLetterCards(){
  lettersContainer.innerHTML = '';
  lettersContent.forEach((L,i)=>{
    const d = document.createElement('div');
    d.className = 'letter-card';
    d.dataset.idx = i;
    d.innerText = `Letter ${i+1} — ${L.title}`;
    d.addEventListener('click', ()=> openLetter(i));
    lettersContainer.appendChild(d);
  });
}
function openLetter(i){
  const popup = document.getElementById('letters-popup');
  const txt = popup.querySelector('.popup-content p');
  popup.classList.remove('hidden');
  popup.querySelector('h3').innerText = lettersContent[i].title;
  txt.innerText = lettersContent[i].text;
  // scroll popup into view (for small screens)
  setTimeout(()=> popup.scrollIntoView({behavior:'smooth'}), 80);
}
function closeLettersPopup(){ document.getElementById('letters-popup').classList.add('hidden'); }

/* ------------------ audio play helper ------------------ */
/* ------------------ background music (plays on every page) ------------------ */
const audio = document.getElementById('bgm');

function tryPlayMusic(){
  if(!audio) return;
  if(audio.paused){
    audio.volume = 0.4;
    audio.play().catch(()=>{});
  }
}

// play after any user interaction (mobile-safe)
['click','touchstart','scroll','keydown'].forEach(ev=>{
  document.addEventListener(ev, tryPlayMusic, {once:false});
});

// play on page load if browser allows
window.addEventListener('load', ()=> {
  setTimeout(tryPlayMusic, 200);
});

/* ---------------- init ---------------- */
document.addEventListener('DOMContentLoaded', ()=>{
  buildGallery();
  renderLetterCards();

  // wire nav
  document.querySelectorAll('.top-nav button').forEach(b=>{
    b.addEventListener('click', ()=> {
      const page = b.dataset.page;
      showPage(page);
    });
  });

  // letters popup close
  document.getElementById('close-letters').addEventListener('click', closeLettersPopup);

  // default landing page = memories
  showPage('memories');
});
