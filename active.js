window.onload;
var index_status=0;
function fun(){
    if(index_status==0){
        $("#index").hide("normal");
        index_status++;
    }else{
        $("#index").show("normal");
        index_status--;
    }
}