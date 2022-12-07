// Window Reload
function reload(){
    window.location.reload();}

// Set Volume
var audio = document.getElementById("myAudio");
  audio.volume = 0.3;

// Smooth Scrolling
$('a').on('click', function(event){
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset(). top - 76}, 800);}});

// Scroll to Statistic
function started(){
    scrollTo({
        top: 571,
        behavior: 'smooth'})}

// Counter Up
$(document).ready(function(){
    $(".count b").counterUp({
        delay: 20,
        time: 600});
    });

// Styling on Link in About Section
$(".stay").click(function(){
    $(".stay").css("color", "");
    $(this).css("color", "white");});
        
// DOM HTML
function changedContent(){
    let changedText = document.getElementById("textContent");
    changedText.innerHTML = "SamCreative is such a great community established to everyone who looking for the fantastic collaboration and experience in UI <span>/</span> UX design development. It is always works out to visualizing the idea of customer into the top-notch.";
    let changedSpan = document.getElementById("textContent span");
    changedSpan.style.fontFamily = "Noto Sans";}

function changedContent2(){
    let changedText = document.getElementById("textContent");
    changedText.innerHTML = "SamCreative has a primary goals that is becomes a major center of creative design services provider by maintaining international quality standards to build customer's loyalty and trust relationship to get the best possible experience.";}

function changedContent3(){
    let changedText = document.getElementById("textContent");
    changedText.innerHTML = "SamCreative always work professionally to provide the best services for customers. As for some of the service options it can offer is UI <span>/</span> UX design for the use of web applications, mobile applications, and social media content.";
    let changedSpan = document.getElementById("textContent span");
    changedSpan.style.fontFamily = "Noto Sans";}

// Scroll to Services
function readMore(){
    scrollTo({
        top: 1555,
        behavior: 'smooth'})}

// Styling on Link in Slide Button
$(".control").click(function(){
    $(".control").css("background", "");
    $(".control").css("width", "");
    $(this).css("background", "var(--Hover");
    $(this).css("width", "50px")});

// Changed Content Item 1
function changedItem(){
    // ----------------------Item 1-----------------------
    let displayItem = document.getElementById("item-card");
    displayItem.style.filter = 'blur(0px)';
    displayItem.style.padding = '0px';

    let displayContent = document.getElementById("content-card");
    displayContent.style.background = 'rgba(87, 57, 225, 0.2)';
    displayContent.style.border = '1px solid var(--Hover)';
    displayContent.style.borderBottom = '0px';

    let displayBg = document.getElementById("bg-image");
    displayBg.style.background = 'linear-gradient(180deg, rgba(75, 51, 181, 0.5) 0%, rgba(116, 86, 255, 0.5) 100.11%)';

    let displayOverlay = document.getElementById("image-overlay");
    displayOverlay.style.background = 'transparent';

    let displayImage = document.getElementById("socmed");
    displayImage.src = 'assets/socmed-content-hov.png';

    let displayTitle = document.getElementById("title-card");
    displayTitle.style.color = 'white';
    displayTitle.style.textAlign = 'justify';
    displayTitle.style.background = 'linear-gradient(180deg, rgba(90, 64, 192, 0.8) 0%, rgba(53, 31, 152, 0.8) 100%)';
    displayTitle.style.padding = '25px';
    displayTitle.style.boxShadow = '0px 5px 4px rgba(0, 0, 0, 0.25)';

    let displayParagraph = document.getElementById("paragraph");
    displayParagraph.style.color = 'var(--Sr-Color)';
    displayParagraph.style.paddingTop = '15px';
    displayParagraph.innerHTML = 'When social media content has an interesting design layout, it can be used to increase the exposure.';

    // ----------------------Item 2-----------------------
    let displayItem2 = document.getElementById("item-card2");
    displayItem2.style.filter = 'blur(2px)';
    displayItem2.style.padding = '34px 0px';

    let displayContent2 = document.getElementById("content-card2");
    displayContent2.style.background = 'rgba(75, 51, 181, 0.1)';
    displayContent2.style.border = '0px';

    let displayBg2 = document.getElementById("bg-image2");
    displayBg2.style.background = 'transparent';

    let displayOverlay2 = document.getElementById("image-overlay2");
    displayOverlay2.style.background = 'rgba(75, 51, 181, 0.1)';

    let displayImage2 = document.getElementById("mobile");
    displayImage2.src = 'assets/mobile-app-col.png';

    let displayTitle2 = document.getElementById("title-card2");
    displayTitle2.style.color = 'rgba(116, 86, 255, 0.7)';
    displayTitle2.style.textAlign = 'center';
    displayTitle2.style.background = 'rgba(61, 43, 143, 0.4)';
    displayTitle2.style.boxShadow = '0px 5px 4px rgba(0, 0, 0, 0.0)';

    let displayParagraph2 = document.getElementById("paragraph2");
    displayParagraph2.innerHTML = '';
    displayParagraph2.style.paddingTop = '0px';

    // ----------------------Item 3-----------------------
    let displayItem3 = document.getElementById("item-card3");
    displayItem3.style.filter = 'blur(2px)';
    displayItem3.style.padding = '34px 0px';

    let displayContent3 = document.getElementById("content-card3");
    displayContent3.style.background = 'rgba(75, 51, 181, 0.1)';
    displayContent3.style.border = '0px';

    let displayBg3 = document.getElementById("bg-image3");
    displayBg3.style.background = 'transparent';

    let displayOverlay3 = document.getElementById("image-overlay3");
    displayOverlay3.style.background = 'rgba(75, 51, 181, 0.1)';

    let displayImage3 = document.getElementById("web");
    displayImage3.src = 'assets/web-app-col.png';

    let displayTitle3 = document.getElementById("title-card3");
    displayTitle3.style.color = 'rgba(116, 86, 255, 0.7)';
    displayTitle3.style.textAlign = 'center';
    displayTitle3.style.background = 'rgba(61, 43, 143, 0.4)';
    displayTitle3.style.boxShadow = '0px 5px 4px rgba(0, 0, 0, 0)';

    let displayParagraph3 = document.getElementById("paragraph3");
    displayParagraph3.innerHTML = '';
    displayParagraph3.style.paddingTop = '0px';}

// Changed Content Item 2
function changedItem2(){
    // ----------------------Item 2-----------------------
    let displayItem = document.getElementById("item-card2");
    displayItem.style.filter = 'blur(0px)';
    displayItem.style.padding = '0px';

    let displayContent = document.getElementById("content-card2");
    displayContent.style.background = 'rgba(87, 57, 225, 0.2)';
    displayContent.style.border = '1px solid var(--Hover)';
    displayContent.style.borderBottom = '0px';

    let displayBg = document.getElementById("bg-image2");
    displayBg.style.background = 'linear-gradient(180deg, rgba(75, 51, 181, 0.5) 0%, rgba(116, 86, 255, 0.5) 100.11%)';

    let displayOverlay = document.getElementById("image-overlay2");
    displayOverlay.style.background = 'transparent';

    let displayImage = document.getElementById("mobile");
    displayImage.src = 'assets/mobile-app-hov.png';

    let displayTitle = document.getElementById("title-card2");
    displayTitle.style.color = 'white';
    displayTitle.style.textAlign = 'justify';
    displayTitle.style.background = 'linear-gradient(180deg, rgba(90, 64, 192, 0.8) 0%, rgba(53, 31, 152, 0.8) 100%)';
    displayTitle.style.padding = '25px';
    displayTitle.style.boxShadow = '0px 5px 4px rgba(0, 0, 0, 0.25)';

    let displayParagraph = document.getElementById("paragraph2");
    displayParagraph.style.color = 'var(--Sr-Color)';
    displayParagraph.style.paddingTop = '15px';
    displayParagraph.innerHTML = 'Creative design takes an important role on mobile applications as user attraction to the interfaces.';

    // ----------------------Item 3-----------------------
    let displayItem3 = document.getElementById("item-card3");
    displayItem3.style.filter = 'blur(2px)';
    displayItem3.style.padding = '34px 0px';

    let displayContent3 = document.getElementById("content-card3");
    displayContent3.style.background = 'rgba(75, 51, 181, 0.1)';
    displayContent3.style.border = '0px';

    let displayBg3 = document.getElementById("bg-image3");
    displayBg3.style.background = 'transparent';

    let displayOverlay3 = document.getElementById("image-overlay3");
    displayOverlay3.style.background = 'rgba(75, 51, 181, 0.1)';

    let displayImage3 = document.getElementById("web");
    displayImage3.src = 'assets/web-app-col.png';

    let displayTitle3 = document.getElementById("title-card3");
    displayTitle3.style.color = 'rgba(116, 86, 255, 0.7)';
    displayTitle3.style.textAlign = 'center';
    displayTitle3.style.background = 'rgba(61, 43, 143, 0.4)';
    displayTitle3.style.boxShadow = '0px 5px 4px rgba(0, 0, 0, 0)';

    let displayParagraph3 = document.getElementById("paragraph3");
    displayParagraph3.innerHTML = '';
    displayParagraph3.style.paddingTop = '0px';

    // ----------------------Item 1-----------------------
    let displayItem1 = document.getElementById("item-card");
    displayItem1.style.filter = 'blur(2px)';
    displayItem1.style.padding = '34px 0px';

    let displayContent1 = document.getElementById("content-card");
    displayContent1.style.background = 'rgba(75, 51, 181, 0.1)';
    displayContent1.style.border = '0px';

    let displayBg1 = document.getElementById("bg-image");
    displayBg1.style.background = 'transparent';

    let displayOverlay1 = document.getElementById("image-overlay");
    displayOverlay1.style.background = 'rgba(75, 51, 181, 0.1)';

    let displayImage1 = document.getElementById("socmed");
    displayImage1.src = 'assets/socmed-content-col.png';

    let displayTitle1 = document.getElementById("title-card");
    displayTitle1.style.color = 'rgba(116, 86, 255, 0.7)';
    displayTitle1.style.textAlign = 'center';
    displayTitle1.style.background = 'rgba(61, 43, 143, 0.4)';
    displayTitle1.style.boxShadow = '0px 5px 4px rgba(0, 0, 0, 0)';

    let displayParagraph1 = document.getElementById("paragraph");
    displayParagraph1.innerHTML = '';
    displayParagraph1.style.paddingTop = '0px';}

// Changed Content Item 3
function changedItem3(){
    let displayItem = document.getElementById("item-card3");
    displayItem.style.filter = 'blur(0px)';
    displayItem.style.padding = '0px';

    let displayContent = document.getElementById("content-card3");
    displayContent.style.background = 'rgba(87, 57, 225, 0.2)';
    displayContent.style.border = '1px solid var(--Hover)';
    displayContent.style.borderBottom = '0px';

    let displayBg = document.getElementById("bg-image3");
    displayBg.style.background = 'linear-gradient(180deg, rgba(75, 51, 181, 0.5) 0%, rgba(116, 86, 255, 0.5) 100.11%)';

    let displayOverlay = document.getElementById("image-overlay3");
    displayOverlay.style.background = 'transparent';

    let displayImage = document.getElementById("web");
    displayImage.src = 'assets/web-app-hov.png';

    let displayTitle = document.getElementById("title-card3");
    displayTitle.style.color = 'white';
    displayTitle.style.textAlign = 'justify';
    displayTitle.style.background = 'linear-gradient(180deg, rgba(90, 64, 192, 0.8) 0%, rgba(53, 31, 152, 0.8) 100%)';
    displayTitle.style.padding = '25px';
    displayTitle.style.boxShadow = '0px 5px 4px rgba(0, 0, 0, 0.25)';

    let displayParagraph = document.getElementById("paragraph3");
    displayParagraph.style.color = 'var(--Sr-Color)';
    displayParagraph.style.paddingTop = '15px';
    displayParagraph.innerHTML = 'The web can be said to have good qualities if it does not depend only on the functionality.';

    // ----------------------Item 2-----------------------
    let displayItem2 = document.getElementById("item-card2");
    displayItem2.style.filter = 'blur(2px)';
    displayItem2.style.padding = '34px 0px';

    let displayContent2 = document.getElementById("content-card2");
    displayContent2.style.background = 'rgba(75, 51, 181, 0.1)';
    displayContent2.style.border = '0px';

    let displayBg2 = document.getElementById("bg-image2");
    displayBg2.style.background = 'transparent';

    let displayOverlay2 = document.getElementById("image-overlay2");
    displayOverlay2.style.background = 'rgba(75, 51, 181, 0.1)';

    let displayImage2 = document.getElementById("mobile");
    displayImage2.src = 'assets/mobile-app-col.png';

    let displayTitle2 = document.getElementById("title-card2");
    displayTitle2.style.color = 'rgba(116, 86, 255, 0.7)';
    displayTitle2.style.textAlign = 'center';
    displayTitle2.style.background = 'rgba(61, 43, 143, 0.4)';
    displayTitle2.style.boxShadow = '0px 5px 4px rgba(0, 0, 0, 0)';

    let displayParagraph2 = document.getElementById("paragraph2");
    displayParagraph2.innerHTML = '';
    displayParagraph2.style.paddingTop = '0px';

    // ----------------------Item 1-----------------------
    let displayItem1 = document.getElementById("item-card");
    displayItem1.style.filter = 'blur(2px)';
    displayItem1.style.padding = '34px 0px';

    let displayContent1 = document.getElementById("content-card");
    displayContent1.style.background = 'rgba(75, 51, 181, 0.1)';
    displayContent1.style.border = '0px';

    let displayBg1 = document.getElementById("bg-image");
    displayBg1.style.background = 'transparent';

    let displayOverlay1 = document.getElementById("image-overlay");
    displayOverlay1.style.background = 'rgba(75, 51, 181, 0.1)';

    let displayImage1 = document.getElementById("socmed");
    displayImage1.src = 'assets/socmed-content-col.png';

    let displayTitle1 = document.getElementById("title-card");
    displayTitle1.style.color = 'rgba(116, 86, 255, 0.7)';
    displayTitle1.style.textAlign = 'center';
    displayTitle1.style.background = 'rgba(61, 43, 143, 0.4)';
    displayTitle1.style.boxShadow = '0px 5px 4px rgba(0, 0, 0, 0)';

    let displayParagraph1 = document.getElementById("paragraph");
    displayParagraph1.innerHTML = '';
    displayParagraph1.style.paddingTop = '0px';}
    
// Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 70,
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,},
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',}});
        
// Scroll Reveal
const sr = ScrollReveal ({
    distance: '20px',
    duration: 1000,
    reset: true});

// Hero
sr.reveal(`.identity, .tag-line, .cta-started, .social-media`,{interval: 150, origin: 'right'})
sr.reveal(`.image`,{origin: 'right'})
// Statistic
sr.reveal(`.statistic-container, .vector`,{interval: 150, origin: 'top'})
// About
sr.reveal(`.image-box, .image-box2, .image-box3`, {interval: 150, origin: 'right'})
sr.reveal(`.about-subheading, .about-heading, .about-menu, .about-paragraph, .about-cta`, {interval: 150, origin: 'right'})
// Services
sr.reveal(`.service-subheading, .service-heading, .service-content, .item-box #item-card, .item-box #item-card2, .item-box #item-card3, .service-button`, {interval: 150, origin: 'top'})
// Project
sr.reveal(`.project-vector, .project-subheading, .project-content .content1, .project-content .content2, .project-content .content3, .project-email`, {interval: 150, origin: 'top'})
// Why Choose Us
sr.reveal(`.choose-subheading, .choose-heading, .choose-vector, .choose-content .item-wrapper, .choose-content .item-wrapper2, .choose-content .item-wrapper3, .choose-content .item-wrapper4, .choose-subheading2, .choose-accordion .faq, .choose-accordion .faq2, .choose-accordion .faq3`, {interval: 150, origin: 'top'})
// Testimonial
sr.reveal(`#testimonials .subheading, #testimonials .heading, .swiper, .swiper-pagination`, {interval: 150, origin: 'top'})
// Contact Us
sr.reveal(`#contact-us .heading, #contact-us .left-container .paragraph, #contact-us .office, #contact-us .bg-office`, {interval: 150, origin: 'right'})
sr.reveal(`#contact-us .right-container`, {origin: 'right'})
