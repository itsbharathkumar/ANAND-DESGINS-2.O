const designs=[
 {id:1,title:"Bold Campaign Poster",cat:"Posters",tone:"#c52e4d",accent:"#f6c747",tag:"EDITORIAL",taTitle:"துணிச்சலான பிரச்சார போஸ்டர்",taCat:"போஸ்டர்கள்"},
 {id:2,title:"Golden Celebration",cat:"Celebrations",tone:"#f2bd31",accent:"#1d5b43",tag:"FESTIVE",taTitle:"தங்க விழா வடிவமைப்பு",taCat:"கொண்டாட்டங்கள்"},
 {id:3,title:"Modern Business Flyer",cat:"Business",tone:"#d9e7dc",accent:"#174b3b",tag:"BUSINESS",taTitle:"நவீன வணிக விளம்பரம்",taCat:"வணிகம்"},
 {id:4,title:"Event Night Poster",cat:"Events",tone:"#252b4c",accent:"#e7a9b6",tag:"EVENT",taTitle:"நிகழ்ச்சி இரவு போஸ்டர்",taCat:"நிகழ்ச்சிகள்"},
 {id:5,title:"Creative Studio Pack",cat:"Business",tone:"#e8ded0",accent:"#c52e4d",tag:"CREATIVE",taTitle:"கிரியேட்டிவ் ஸ்டுடியோ தொகுப்பு",taCat:"வணிகம்"},
 {id:6,title:"Wedding Invitation",cat:"Celebrations",tone:"#e9d6c8",accent:"#6d3e4c",tag:"WEDDING",taTitle:"திருமண அழைப்பிதழ்",taCat:"கொண்டாட்டங்கள்"},
 {id:7,title:"Music Festival Poster",cat:"Posters",tone:"#b9d5d0",accent:"#d34b37",tag:"FESTIVAL",taTitle:"இசை விழா போஸ்டர்",taCat:"போஸ்டர்கள்"},
 {id:8,title:"Grand Opening Design",cat:"Business",tone:"#dfb4a1",accent:"#3b3027",tag:"LAUNCH",taTitle:"திறப்பு விழா வடிவமைப்பு",taCat:"வணிகம்"}
];
let activeCat="All",visible=8,lang="en";
const grid=document.getElementById("productGrid");
const copy={
 en:{navExplore:"Explore designs",navServices:"Services",navAbout:"About",headerExplore:"Explore",heroEyebrow:"INDEPENDENT CREATIVE STUDIO",heroTitle:'Designs that<br><em>make you stand out.</em>',heroDescription:"Thoughtful visuals, ready-to-use PSD templates and custom creative work. Find the right design for your next big idea.",explore:"Explore designs",customRequest:"Request a custom design ↗",heroProof:"Creative ideas, made visual.",ticker:'VISUAL STORIES <b>✳</b> READY-TO-USE PSDs <b>✳</b> CUSTOM DESIGN <b>✳</b> MADE WITH PURPOSE <b>✳</b> VISUAL STORIES <b>✳</b>',libraryEyebrow:"THE DESIGN LIBRARY",libraryTitle:'Find your next <em>favourite.</em>',libraryDescription:"Browse creative assets made to help your ideas get noticed.",search:"Search designs, categories...",all:"All designs",posters:"Posters",events:"Events",business:"Business",celebrations:"Celebrations",customEyebrow:"HAVE SOMETHING IN MIND?",customTitle:'Made for you.<br><em>Not from a template.</em>',customDescription:"Need a banner, invitation, poster or a design that is uniquely yours? Tell Anand what you have in mind and work directly with the designer.",whatsapp:"Chat on WhatsApp ↗",aboutEyebrow:"A CREATIVE PARTNER",aboutTitle:'Good design is<br><em>good communication.</em>',aboutDescription:"Anand Designs is an independent creative studio by Anand Kumar V. We bring ideas to life through thoughtful visuals, ready-made design resources and custom creative services.",instagram:"Follow our work on Instagram ↗",footer:"© {year} Anand Designs. Made with intention.",contact:"Get in touch ↗",loadMore:"Load more designs ↓",result:"Showing {n} sample designs · Catalogue will be connected later",enquire:"ENQUIRE TO PURCHASE ↗",toast:"English selected."},
 ta:{navExplore:"வடிவமைப்புகள்",navServices:"சேவைகள்",navAbout:"எங்களைப் பற்றி",headerExplore:"பார்க்க",heroEyebrow:"சுயாதீன படைப்பாற்றல் வடிவமைப்பு நிறுவனம்",heroTitle:'உங்கள் தனித்துவத்தை<br><em>வெளிப்படுத்தும் வடிவமைப்புகள்.</em>',heroDescription:"உடனடியாகப் பயன்படுத்தக்கூடிய PSD டெம்ப்ளேட்கள், அழகான காட்சிப்படுத்தல்கள் மற்றும் உங்களுக்கான தனிப்பயன் வடிவமைப்புகள். உங்கள் அடுத்த யோசனைக்கான சரியான வடிவமைப்பைத் தேர்ந்தெடுங்கள்.",explore:"வடிவமைப்புகளைப் பார்க்க",customRequest:"தனிப்பயன் வடிவமைப்பைக் கோருங்கள் ↗",heroProof:"படைப்பாற்றல் மிக்க யோசனைகள், அழகிய வடிவில்.",ticker:'காட்சிக் கதைகள் <b>✳</b> PSD வடிவமைப்புகள் <b>✳</b> தனிப்பயன் வடிவமைப்பு <b>✳</b> நோக்கத்துடன் உருவாக்கப்பட்டது <b>✳</b>',libraryEyebrow:"வடிவமைப்பு தொகுப்பு",libraryTitle:'உங்களுக்கான <em>சிறந்த வடிவமைப்பைக்</em> கண்டறியுங்கள்.',libraryDescription:"உங்கள் யோசனைகள் அனைவரின் கவனத்தையும் ஈர்க்கும் வகையில் வடிவமைக்கப்பட்ட படைப்புகளைப் பாருங்கள்.",search:"வடிவமைப்புகள், வகைகளைத் தேடுங்கள்...",all:"அனைத்து வடிவமைப்புகள்",posters:"போஸ்டர்கள்",events:"நிகழ்ச்சிகள்",business:"வணிகம்",celebrations:"கொண்டாட்டங்கள்",customEyebrow:"உங்களிடம் ஒரு யோசனை உள்ளதா?",customTitle:'உங்களுக்காக உருவாக்கப்படும்.<br><em>டெம்ப்ளேட் அல்ல.</em>',customDescription:"பேனர், அழைப்பிதழ், போஸ்டர் அல்லது தனித்துவமான வடிவமைப்பு வேண்டுமா? உங்கள் தேவையை ஆனந்திடம் நேரடியாகப் பகிர்ந்து கொள்ளுங்கள்.",whatsapp:"WhatsApp-ல் தொடர்புகொள்ளுங்கள் ↗",aboutEyebrow:"உங்கள் படைப்பாற்றல் கூட்டாளர்",aboutTitle:'சிறந்த வடிவமைப்பு என்பது<br><em>சிறந்த தொடர்பாடல்.</em>',aboutDescription:"ஆனந்த் குமார் V அவர்களின் சுயாதீன படைப்பாற்றல் வடிவமைப்பு நிறுவனம் Anand Designs. அழகிய காட்சிகள், தயாராக உள்ள வடிவமைப்புகள் மற்றும் தனிப்பயன் சேவைகள் மூலம் உங்கள் யோசனைகளுக்கு உயிர் கொடுக்கிறோம்.",instagram:"Instagram-ல் எங்கள் படைப்புகளைப் பாருங்கள் ↗",footer:"© {year} Anand Designs. அக்கறையுடன் உருவாக்கப்பட்டது.",contact:"தொடர்புகொள்ளுங்கள் ↗",loadMore:"மேலும் வடிவமைப்புகள் ↓",result:"{n} மாதிரி வடிவமைப்புகள் காட்டப்படுகின்றன · முழு தொகுப்பு விரைவில்",enquire:"வாங்க விசாரிக்க ↗",toast:"தமிழ் மொழி தேர்வு செய்யப்பட்டது."}
};
function t(key){return copy[lang][key]||copy.en[key]||key;}
function render(){
 const q=document.getElementById("searchInput").value.toLowerCase();
 const list=designs.filter(d=>(activeCat==="All"||d.cat===activeCat)&&((d.title+" "+d.cat+" "+d.taTitle+" "+d.taCat).toLowerCase().includes(q))).slice(0,visible);
 grid.innerHTML=list.map(d=>{const title=lang==="ta"?d.taTitle:d.title;const cat=lang==="ta"?d.taCat:d.cat;const short=(lang==="ta"?d.taTitle:d.title).split(" ").slice(0,2).join("<br>").toUpperCase();return `<article class="product-card"><div class="product-art" style="background:${d.tone}"><div class="sample" style="background:${d.accent};color:${d.tone}"><small>${d.tag} / ANAND DESIGNS</small><strong>${short}</strong><small>${lang==="ta"?"வடிவமைப்பு வளம் · 2026":"DESIGN RESOURCE · 2026"}</small></div></div><div class="product-info"><div><h3>${title}</h3><p>${cat} · ${lang==="ta"?"PSD டெம்ப்ளேட்":"PSD template"}</p></div><span class="price">₹200</span></div><a class="buy-link" href="https://wa.me/919626434799?text=${encodeURIComponent(lang==="ta"?`வணக்கம் ஆனந்த், ${title} வடிவமைப்பை வாங்க விரும்புகிறேன். விவரங்களைப் பகிரவும்.`:`Hi Anand, I am interested in ${d.title}. Please share purchase details.`)}" target="_blank" rel="noreferrer">${t("enquire")}</a></article>`}).join("");
 document.getElementById("resultCount").textContent=t("result").replace("{n}",list.length);
 document.getElementById("loadMore").textContent=t("loadMore");
 document.getElementById("loadMore").style.display=visible>=designs.length?"none":"inline-block";
}
function applyLanguage(){
 const c=copy[lang];document.documentElement.lang=lang;
 document.querySelector('.desktop-nav a[href="#marketplace"]').textContent=c.navExplore;
 document.querySelector('.desktop-nav a[href="#services"]').textContent=c.navServices;
 document.querySelector('.desktop-nav a[href="#about"]').textContent=c.navAbout;
 document.getElementById("headerExplore").firstChild.textContent=c.headerExplore+" ";
 document.getElementById("heroEyebrow").textContent=c.heroEyebrow;
 document.getElementById("heroTitle").innerHTML=c.heroTitle;
 document.getElementById("heroDescription").textContent=c.heroDescription;
 document.getElementById("heroExplore").firstChild.textContent=c.explore+" ";
 document.getElementById("customRequest").textContent=c.customRequest;
 document.getElementById("heroProof").textContent=c.heroProof;
 document.getElementById("tickerText").innerHTML=c.ticker;
 document.getElementById("libraryEyebrow").textContent=c.libraryEyebrow;
 document.getElementById("libraryTitle").innerHTML=c.libraryTitle;
 document.getElementById("libraryDescription").textContent=c.libraryDescription;
 document.getElementById("searchInput").placeholder=c.search;
 document.getElementById("searchInput").setAttribute("aria-label",c.search);
 document.querySelectorAll(".filter").forEach(b=>{const key={All:"all",Posters:"posters",Events:"events",Business:"business",Celebrations:"celebrations"}[b.dataset.cat];b.textContent=c[key]});
 document.getElementById("customEyebrow").textContent=c.customEyebrow;
 document.getElementById("customTitle").innerHTML=c.customTitle;
 document.getElementById("customDescription").textContent=c.customDescription;
 document.getElementById("whatsappChat").textContent=c.whatsapp;
 document.getElementById("aboutEyebrow").textContent=c.aboutEyebrow;
 document.getElementById("aboutTitle").innerHTML=c.aboutTitle;
 document.getElementById("aboutDescription").textContent=c.aboutDescription;
 document.getElementById("instagramLink").textContent=c.instagram;
 document.getElementById("footerCopyright").innerHTML=c.footer.replace("{year}",`<span id="year">${new Date().getFullYear()}</span>`);
 document.getElementById("footerContact").textContent=c.contact;
 document.getElementById("langToggle").textContent=lang==="en"?"தமிழ்":"English";
 render();
}
document.getElementById("filters").addEventListener("click",e=>{const b=e.target.closest("button[data-cat]");if(!b)return;activeCat=b.dataset.cat;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));visible=8;render()});
document.getElementById("searchInput").addEventListener("input",render);
document.getElementById("loadMore").addEventListener("click",()=>{visible=designs.length;render()});
document.getElementById("themeToggle").addEventListener("click",()=>{const dark=document.documentElement.dataset.theme!=="dark";document.documentElement.dataset.theme=dark?"dark":"light";document.getElementById("themeToggle").textContent=dark?"☀":"☾"});
document.getElementById("langToggle").addEventListener("click",()=>{lang=lang==="en"?"ta":"en";applyLanguage();document.getElementById("toast").textContent=t("toast");showToast()});
document.getElementById("menuBtn").addEventListener("click",()=>{const nav=document.querySelector(".desktop-nav");nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.top="70px";nav.style.left="0";nav.style.right="0";nav.style.padding="20px";nav.style.background="var(--bg)";nav.style.flexDirection="column"});
function showToast(){const tEl=document.getElementById("toast");tEl.classList.add("show");setTimeout(()=>tEl.classList.remove("show"),2200)}
document.getElementById("year").textContent=new Date().getFullYear();render();
