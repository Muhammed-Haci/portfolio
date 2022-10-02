function removeActiveClass(e){e.forEach((e=>e.classList.remove("active")))}function addActiveClass(e){e.forEach((e=>e.classList.add("active")))}function createOverlay(){const e=document.createElement("div");e.classList.add("overlay"),document.body.appendChild(e)}let themeIcon=document.querySelector(".theme__mode img"),localData=localStorage.getItem("theme");localData&&(themeIcon.src="light"==localData?"assets/svg/moon.svg":"assets/svg/sun.svg",document.body.classList.add(localData)),themeIcon.addEventListener("click",(()=>{if(document.body.classList.toggle("dark"),document.body.classList.contains("dark")){themeIcon.src="assets/svg/sun.svg",localStorage.setItem("theme","dark"),document.body.classList.remove("light");const e=document.createElement("audio");e.src="assets/audio/audio_light-on.mp3",e.play(),e.remove()}else{themeIcon.src="assets/svg/moon.svg",document.body.classList.add("light"),localStorage.setItem("theme","light");const e=document.createElement("audio");e.src="assets/audio/audio_light-off.mp3",e.play(),e.remove()}}));let toggleBtn=document.querySelector(".toggle__manu");toggleBtn.addEventListener("click",(e=>{e.stopPropagation(),toggleBtn.classList.toggle("open")})),document.addEventListener("click",(e=>{e.target.classList.contains("toggle__manu")||toggleBtn.classList.remove("open")}));let langMenu=document.querySelector(".website__lang");langMenu.addEventListener("click",(e=>{e.stopPropagation(),langMenu.classList.toggle("open")})),document.addEventListener("click",(e=>{e.target.classList.contains("website__lang")||langMenu.classList.remove("open")}));let scrollUp=document.querySelector(".scroll_up");window.onscroll=function(){window.scrollY>=600?scrollUp.style.right="15px":scrollUp.style.right="-35px"},scrollUp.addEventListener("click",(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}));let preloader=document.querySelector(".preloader");window.addEventListener("load",(()=>preloader.style.display="none"));let buttons=document.querySelectorAll("#about .filter > ul li"),divs=document.querySelectorAll("#about .info div");buttons.forEach((e=>{e.addEventListener("click",(e=>{buttons.forEach((e=>e.classList.remove("active"))),e.target.classList.add("active"),divs.forEach((t=>{t.classList.remove("active"),t.dataset.text===e.target.dataset.text&&t.classList.add("active")}))}))}));let skillsSection=document.querySelector(".skills"),progress=document.querySelectorAll(".skills .number"),circle=document.querySelectorAll(".skills .circle"),start=!1;window.addEventListener("scroll",(()=>{window.scrollY>=skillsSection.offsetTop-window.innerHeight/2&&(start||(progress.forEach((e=>{let t=setInterval((()=>{e.textContent++,e.textContent===e.dataset.number&&clearInterval(t)}),1500/e.dataset.number)})),circle.forEach((e=>{e.style.strokeDashoffset=314-e.dataset.number/100*314}))),start=!0)}));let card=document.querySelectorAll(".portfolio .all"),flipBtn=document.querySelectorAll(".portfolio .flip");flipBtn.forEach((e=>{e.addEventListener("click",(e=>{card.forEach((e=>{e.classList.remove("fliped")})),document.querySelector(`.${[e.target.dataset.word]}`).classList.add("fliped")}))})),document.addEventListener("click",(e=>{e.target.classList.contains("flip")||card.forEach((e=>{e.classList.remove("fliped")}))}));let scrollBtn=document.querySelectorAll(".portfolio .sroll"),scrolled=!1;scrollBtn.forEach((e=>{e.addEventListener("click",(e=>{scrolled?(e.currentTarget.parentElement.previousElementSibling.firstElementChild.style.marginTop="0",scrolled=!1):(e.currentTarget.parentElement.previousElementSibling.firstElementChild.style.marginTop=`-${e.target.dataset.height-187}px`,scrolled=!0)}))}));let filterButtons=document.querySelectorAll(".portfolio .filter ul li"),projects=document.querySelectorAll(".portfolio .project .all");filterButtons.forEach((e=>{e.addEventListener("click",(e=>{filterButtons.forEach((e=>e.classList.remove("active"))),e.target.classList.add("active"),projects.forEach((t=>{t.style.cssText="display: none",document.querySelectorAll(`.portfolio .${e.target.dataset.text}`).forEach((e=>{e.style.cssText="display: block"}))}))}))}));const username=document.querySelector("input[name='username']").value;let inputs=document.querySelectorAll("form input"),textarea=document.querySelector("textarea"),btn=document.getElementById("subBtn"),btnInnerText=btn.textContent;document.getElementById("form").addEventListener("submit",(function(e){switch(e.preventDefault(),btnInnerText){case"Send":default:btn.textContent="Sending..";break;case"Gönder":btn.textContent="Gönderiyor..";break;case"إرسال":btn.textContent="جاري الإرسال"}emailjs.sendForm("default_service","template_rfg3boh",this).then((()=>{switch(btn.textContent=btnInnerText,inputs.forEach((e=>{e.value=""})),textarea.value="",btnInnerText){case"Send":alert(`Hello ${username}, Your message has been sent succsessfuly, I will reply as soon as I see your message, Thank You for contacting me 😊`);break;case"Gönder":alert(`Merhaba ${username}, Mesajınız başarıyla gönderildi, mesajınızı görür görmez cevap vereceğim, benimle iletişime geçtiğiniz için teşekkür ederim 😊`);break;case"إرسال":alert("تم إرسال رسالتكم بنجاح ، سأرد عليكم بأقرب وقت ممكن ، شكرًا لكم على التواصل 😊");break;default:btn.textContent="Sending.."}}),(e=>{btn.textContent=btnValue,alert(JSON.stringify(e))}))}));let year=document.querySelector("footer .year");year.textContent=(new Date).getFullYear();
//# sourceMappingURL=main.js.map