$("#sedanNav").click(function(){
    
  
   

});


$(function () {
    $("#txtPassword").complexify({}, function (valid, complexity) {
        document.getElementById("PassValue").value = complexity;
    });
});