const designs=[
 {id:1,title:"Bold Campaign Poster",cat:"Posters",tone:"#c52e4d",accent:"#f6c747",tag:"EDITORIAL"},
 {id:2,title:"Golden Celebration",cat:"Celebrations",tone:"#f2bd31",accent:"#1d5b43",tag:"FESTIVE"},
 {id:3,title:"Modern Business Flyer",cat:"Business",tone:"#d9e7dc",accent:"#174b3b",tag:"BUSINESS"},
 {id:4,title:"Event Night Poster",cat:"Events",tone:"#252b4c",accent:"#e7a9b6",tag:"EVENT"},
 {id:5,title:"Creative Studio Pack",cat:"Business",tone:"#e8ded0",accent:"#c52e4d",tag:"CREATIVE"},
 {id:6,title:"Wedding Invitation",cat:"Celebrations",tone:"#e9d6c8",accent:"#6d3e4c",tag:"WEDDING"},
 {id:7,title:"Music Festival Poster",cat:"Posters",tone:"#b9d5d0",accent:"#d34b37",tag:"FESTIVAL"},
 {id:8,title:"Grand Opening Design",cat:"Business",tone:"#dfb4a1",accent:"#3b3027",tag:"LAUNCH"}
];
let activeCat="All",visible=8,lang="en";
const grid=document.getElementById("productGrid");
function render(){const q=document.getElementById("searchInput").value.toLowerCase();const list=designs.filter(d=>(activeCat==="All"||d.cat===activeCat)&&(d.title+" "+d.cat).toLowerCase().includes(q)).slice(0,visible);grid.innerHTML=list.map(d=>`<article class="product-card"><div class="product-art" style="background:${d.tone}"><div class="sample" style="background:${d.accent};color:${d.tone}"><small>${d.tag} / ANAND DESIGNS</small><strong>${d.title.split(" ").slice(0,2).join("<br>").toUpperCase()}</strong><small>DESIGN RESOURCE · 2026</small></div></div><div class="product-info"><div><h3>${d.title}</h3><p>${d.cat} · PSD template</p></div><span class="price">₹200</span></div><a class="buy-link" href="https://wa.me/919626434799?text=${encodeURIComponent("Hi Anand, I am interested in "+d.title+". Please share purchase details.")}" target="_blank" rel="noreferrer">ENQUIRE TO PURCHASE ↗</a></article>`).join("");document.getElementById("resultCount").textContent=`Showing ${list.length} sample designs · Catalogue will be connected later`;document.getElementById("loadMore").style.display=visible>=designs.length?"none":"inline-block";}
document.getElementById("filters").addEventListener("click",e=>{const b=e.target.closest("button[data-cat]");if(!b)return;activeCat=b.dataset.cat;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));visible=8;render()});
document.getElementById("searchInput").addEventListener("input",render);
document.getElementById("loadMore").addEventListener("click",()=>{visible=designs.length;render()});
document.getElementById("themeToggle").addEventListener("click",()=>{const dark=document.documentElement.dataset.theme!=="dark";document.documentElement.dataset.theme=dark?"dark":"light";document.getElementById("themeToggle").textContent=dark?"☀":"☾"});
document.getElementById("langToggle").addEventListener("click",()=>{lang=lang==="en"?"ta":"en";document.getElementById("langToggle").textContent=lang==="en"?"தமிழ்":"English";document.querySelectorAll("[data-en]").forEach(el=>el.textContent=el.dataset[lang]);document.getElementById("toast").textContent=lang==="ta"?"தமிழ் மொழி தேர்வு செய்யப்பட்டது.":"English selected.";showToast()});
document.getElementById("menuBtn").addEventListener("click",()=>{const nav=document.querySelector(".desktop-nav");nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.top="70px";nav.style.left="0";nav.style.right="0";nav.style.padding="20px";nav.style.background="var(--bg)";nav.style.flexDirection="column"});
function showToast(){const t=document.getElementById("toast");t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
document.getElementById("year").textContent=new Date().getFullYear();render();
