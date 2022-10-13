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
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/The_Curb_market%2C_New_York_City_LCCN89710076.jpg/405px-The_Curb_market%2C_New_York_City_LCCN89710076.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Family_Buick_Six_railroad_logging_camp_Washington_state_circa_1924.jpg/300px-Family_Buick_Six_railroad_logging_camp_Washington_state_circa_1924.jpg',
    'https://th.bing.com/th/id/R.407e06c5a9137ff04b9bdcf935f9302e?rik=XVwmQndPnI8vKQ&riu=http%3a%2f%2fstatic.zxart.cn%2fUploadFiles%2fimage%2f20170903%2f20170903093434_0168.jpg&ehk=N1Q%2bqJa%2boVx49m2k1%2bSgezCJv2XHg1ebm%2bk2rzV4RWs%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'],
curIndex = 0,
posterArray = ['https://m.media-amazon.com/images/M/MV5BZGY1OTliNmMtYzQ2My00NjI0LWI4MTItNmY1NjA0YzI1ZTdhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX763_.jpg',
    'https://th.bing.com/th/id/R.6bfade826e4a2d46871e9d924a6a7914?rik=h8IWvo7GOOPQrg&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fen%2fthumb%2fd%2fdf%2fDaisy_Buchanan.png%2f220px-Daisy_Buchanan.png&ehk=XCkGf6edqf3%2bI4%2f9HpN9zSFPXgyy%2foONeBg5IMeXFYc%3d&risl=&pid=ImgRaw&r=0',
    'https://m.media-amazon.com/images/M/MV5BMTU4MDE2ODI0OF5BMl5BanBnXkFtZTcwODQ3NTY4OA@@._V1_FMjpg_UX625_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTQ4MjQ0ODI5Ml5BMl5BanBnXkFtZTcwMjI3NTY4OA@@._V1_FMjpg_UX600_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDU5OTg1Mjg3Nl5BMl5BanBnXkFtZTcwMDI3NTY4OA@@._V1_FMjpg_UX764_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjE4MDU4NDA0OF5BMl5BanBnXkFtZTcwODE3NTY4OA@@._V1_FMjpg_UX647_.jpg'
    
],curposters=0
;
function roar() {
    document.getElementById('roar20').className += "fadeOut";
    setTimeout(function() {
        document.getElementById('roar20').src = roarArray[curIndex];
        document.getElementById('roar20').className = "";
    },500);
    curIndex++;
    if (curIndex == roarArray.length) { curIndex = 0; }
}
function post_onclick(){
    curposters++;
    if (curposters == posterArray.length) { curposters = 0; }
    document.getElementById('posters').src = posterArray[curposters];    
}
