function init(){
    var html=document.querySelector("#HT");
    var CSS=document.querySelector("#CS");
    var JS=document.querySelector("#JAVA");
    var OutPut=document.querySelector("#code").contentWindow.document;
    document.body.onkeyup=function(){
        OutPut.open();
        OutPut.writeln(
            html.value+
            "<style>"+CSS.value+"</style>"+
            "<script>"+JS.value+"</script>"
        );
        OutPut.close();
    }
    
}
init();
