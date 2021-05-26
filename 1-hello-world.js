var i=setInterval(fn,1000);
var count=0;
function fn(){
    console.log("hello hai");
    count++;
    if(count>3)
    {
        fn1();
    }
    
}
function fn1(){
    console.log("done");
    clearInterval(i);
}