$(function() {
  monChat();
//fonction au click sur le bouton envoyer//
  $('#send').click(function(){ //On recupère le bouton envoyer//
    var nom=$('#nom').val();//On récupère l'input du pseudo et on modifie la valeur avec val//
    var message=$('write').val();//On récupère la textarea et on modifie sa valeur avec val//
  })
});

function monChat (){
  if(pseudo!=""&&message!==""){
  $(#write).append("<p>"+pseudo+'dit:'+message+"</p>");

  set interval(monChat,3000);
}
}
