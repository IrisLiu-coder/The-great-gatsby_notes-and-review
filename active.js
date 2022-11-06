//1107
window.onload;
var index_status=0;
function info(){
    if(index_status==0){
        $("#index").hide("normal");
        index_status++;
    }else{
        $("#index").show("normal");
        index_status--;
    }
}
function ecomoyAnimation(){
    var fp=1,annualGDPchange=[5.97,12.68,3.75,2.41,5.88,1.11,1.10,6.52,-8.50,-6.40,-12.90,-1.20,10.80,8.90,12.90,5.10,-3.30,8.00,8.80];
    
    for(var j=0;j<100;j++){
       setTimeout(Animation, 60); 
    }
    function Animation(){
        var grow=12.9*7/100;
        for(var i=0;i<19;i++){
            GDPchangectx.fillStyle = "#ffffff"
            if(Math.abs(annualGDPchange[i]*7)>=grow*fp){
                if(annualGDPchange[i]>0)
                GDPchangectx.fillRect(60+30*i, 170,2,-grow*fp);
                else
                GDPchangectx.fillRect(60+30*i, 170,2,grow*fp);
            }
            GDPchangectx.fill();
        }
        console.log(fp); 
        if(fp<=100)
        fp++;
    
    }
}
const GDPchange = document.getElementById('GDPchange');
const GDPchangectx = GDPchange.getContext('2d');
GDPchangectx.fillStyle = "rgba(0, 0, 0,0.5)"
GDPchangectx.fillRect(0, 0, 640, 360);

for(var i=0;i<19;i++){
    GDPchangectx.font="12px Arial";
    GDPchangectx.fillStyle="#ffe12b";
    GDPchangectx.fillText(1922+i,50+30*i,320);
    GDPchangectx.fill();
}
for(var i=0;i<4;i++){
    GDPchangectx.font="12px Arial";
    GDPchangectx.fillStyle="#ffe12b";
    GDPchangectx.fillText(Math.round(i*0.05 * 100) / 100,20,170-i*35);
    GDPchangectx.fill();
    GDPchangectx.font="12px Arial";
    GDPchangectx.fillStyle="#ffe12b";
    GDPchangectx.fillText(Math.round(-i*0.05 * 100) / 100,20,170+i*35);
    GDPchangectx.fill();
}

var roarArray = [
    'https://upload.wikimedia.org/wikipedia/commons/3/34/GertrudeStein_JackHemingway_Paris.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9b/Chrysler_Building_1_%284684845155%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Douglas_Fairbanks_and_Mary_Pickford_02.jpg/800px-Douglas_Fairbanks_and_Mary_Pickford_02.jpg',
    'https://upload.wikimedia.org/wikipedia/en/d/d9/Unchienandalouposter.jpg'
],
curIndex = 0,
posterArray = ['https://m.media-amazon.com/images/M/MV5BZGY1OTliNmMtYzQ2My00NjI0LWI4MTItNmY1NjA0YzI1ZTdhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX763_.jpg',
    'https://th.bing.com/th/id/R.6bfade826e4a2d46871e9d924a6a7914?rik=h8IWvo7GOOPQrg&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fen%2fthumb%2fd%2fdf%2fDaisy_Buchanan.png%2f220px-Daisy_Buchanan.png&ehk=XCkGf6edqf3%2bI4%2f9HpN9zSFPXgyy%2foONeBg5IMeXFYc%3d&risl=&pid=ImgRaw&r=0',
    'https://m.media-amazon.com/images/M/MV5BMTU4MDE2ODI0OF5BMl5BanBnXkFtZTcwODQ3NTY4OA@@._V1_FMjpg_UX625_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTQ4MjQ0ODI5Ml5BMl5BanBnXkFtZTcwMjI3NTY4OA@@._V1_FMjpg_UX600_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDU5OTg1Mjg3Nl5BMl5BanBnXkFtZTcwMDI3NTY4OA@@._V1_FMjpg_UX764_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjE4MDU4NDA0OF5BMl5BanBnXkFtZTcwODE3NTY4OA@@._V1_FMjpg_UX647_.jpg'
    
],curposters=0,
roarIntroduceArray=[
    "The Lost Generation was composed of young people who came out of World War I disillusioned and cynical about the world. The term usually refers to American literary notables who lived in Paris at the time. Famous members included Ernest Hemingway, F. Scott Fitzgerald, and Gertrude Stein. These authors, some of them expatriates, wrote novels and short stories expressing their resentment towards the materialism and individualism rampant during this era.\n(Gertrude Stein with Ernest Hemingway's son Jack in 1924. Stein is credited with bringing the term 'Lost Generation' into use.)",
    "Art Deco was the style of design and architecture that marked the era. Originating in Europe, it spread to the rest of western Europe and North America towards the mid-1920s.\nIn the U.S., one of the more remarkable buildings featuring this style was constructed as the tallest building of the time: the Chrysler Building. The forms of art deco were pure and geometric, though the artists often drew inspiration from nature. In the beginning, lines were curved, though rectilinear designs would later become more and more popular.",
    "Western fashion in the 1920s underwent a modernization. For women, fashion had continued to change away from the extravagant and restrictive styles of the Victorian and Edwardian periods, and towards looser clothing which revealed more of the arms and legs, that had begun at least a decade prior with the rising of hemlines to the ankle and the movement from the S-bend corset to the columnar silhouette of the 1910s. Men also began to wear less formal daily attire and athletic clothing or 'Sportswear' became a part of mainstream fashion for the first time. The 1920s are characterized by two distinct periods of fashion: in the early part of the decade, change was slower, and there was more reluctance to wear the new, revealing popular styles. From 1925, the public more passionately embraced the styles now typically associated with the Roaring Twenties. These styles continued to characterize fashion until the worldwide depression worsened in 1931.",
    "Un Chien Andalou (French pronunciation: ​[œ̃ ʃjɛ̃ ɑ̃dalu], An Andalusian Dog) is a 1929 French silent short film directed by Luis Buñuel, and written by Buñuel and Salvador Dalí. Buñuel's first film, it was initially released in a limited capacity at Studio des Ursulines in Paris, but became popular and ran for eight months.<br><br>Un Chien Andalou has no plot in the conventional sense of the word. With disjointed chronology, jumping from the initial 'once upon a time' to 'eight years later' without events or characters changing, it uses dream logic in narrative flow that can be described in terms of the then-popular Freudian free association, presenting a series of tenuously related scenes. Un Chien Andalou is a seminal work in the genre of surrealist cinema."
],roarTitle=[
    "The Lost Generation",
    "Art Deco",
    "1920s in Western fashion",
    "Un Chien Andalou-a seminal work in the genre of surrealist cinema(1929)"
]
;
function roar() {
    $("#roar").slideToggle("linear");
    setTimeout(function() {
        document.getElementById('roar20').src = roarArray[curIndex];
        document.getElementById('roarIntroduce').innerHTML="<h3>"+roarTitle[curIndex]+"</h3>"+roarIntroduceArray[curIndex]+'<br><br><br>click picture!';
        $("#roar").slideToggle("linear");
    },500);
    curIndex++;
    if (curIndex == roarArray.length) { curIndex = 0; }
}
function post_onclick(){
    setTimeout(function() {
        document.getElementById('posters').src = posterArray[curposters];    
        
    },500);
    curposters++;
    if (curposters == posterArray.length) { curposters = 0; }   
}
window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    let scrollX = this.scrollX;
    console.log(scrollY);
    console.log(scrollX);
});
// 获取dom
const container = document.querySelector('.container');
const wrap = document.querySelector('.wrap');
const imgList = document.querySelectorAll('.wrap img');
const length = imgList.length;
// 计算图片间隔角度
const angle = 360 / length;
// 开场动画 延时1000 / 60 = 16.666667 ≈ 17，否则transition不会生效
setTimeout(() => {
    for (let i = 0; i < length; i++) {
        // 每张图片过渡效果间隔0.1s
        imgList[i].style.transition = 'transform 1s ease ' + (length - 1 - i) * 0.1 + 's';
        // 沿着z轴偏移320像素（此距离自己设置，觉得合适即可），否则图片会挤在一起
        imgList[i].style.transform = 'rotateY(' + (angle * i) + 'deg) translateZ(320px)';
    }
}, 17);


// wrap沿x轴旋转-10度
const rotate = { x: 0, y: 0 };

let isPointerDown = false;
let point = null;
let last = null;
let diff = null;
let rafId = null;
// 监听pointerdown事件
container.addEventListener('pointerdown', function (e) {
    this.setPointerCapture(e.pointerId);
    isPointerDown = true;
    // 停止动画
    cancelAnimationFrame(rafId);
    point = { x: e.clientX, y: e.clientY };
    last = { x: e.clientX, y: e.clientY };
    diff = { x: 0, y: 0 };
});
// 监听pointermove事件
container.addEventListener('pointermove', function (e) {
    if (isPointerDown) {
        const current = { x: e.clientX, y: e.clientY };
        // 计算相对于上一次移动差值
        diff = { x: current.x - last.x, y: current.y - last.y };
        // 旋转角度，乘以0.1是为了降低旋转敏感度，防止旋转过快。可自行设置合适的值
        rotate.x -= diff.y * 0.05;
        rotate.y += diff.x * 0.05;
        last = { x: current.x, y: current.y };
        wrap.style.transform = 'rotateY(' + rotate.y + 'deg)';
    }
});
// 监听pointerup事件
container.addEventListener('pointerup', function (e) {
    isPointerDown = false;
    // 惯性滚动
    raf();
});
// 监听pointercancel事件
container.addEventListener('pointercancel', function (e) {
    isPointerDown = false;
});
function raf() {
    // ES6解构赋值
    let { x, y } = diff;
    function step() {
        // 摩擦力
        x *= 0.95;
        y *= 0.95;
        rotate.x -= y * 0.1;
        rotate.y += x * 0.05;
        wrap.style.transform ='rotateY(' + rotate.y + 'deg)';
        // 小于1停止动画
        if (Math.abs(x) > 1 || Math.abs(y) > 1) {
            rafId = requestAnimationFrame(step);
        }
    }
    rafId = requestAnimationFrame(step);
}
