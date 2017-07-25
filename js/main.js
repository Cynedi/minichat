//Mes variables//
var ordinateur=['hello', 'How are you?', 'Do you want to brush me?','Do you want to drink with me?', 'why not?', 'why are you so stupid?','I must to go, my kittens are waiting for me?'];//tableau des réponses de l'ordinateur//
var x=0;

//1-On crée une fonction pour pouvoir modifier les champs d'entrés//
function defineChamps() {
pseudo=$('#pseudo').val();//On récupère l'input du pseudo et on modifie sa valeur avec val//
message=$('#write').val();//On récupère la textarea et on modifie sa valeur avec val//
}

//2-On crée une fonction pour afficher la conversation//
function monChat(){
  if(pseudo!=""&& message!=""){ // si les champs sont remplis//
  $('#conversation').append("<p>" + pseudo+ " " + 'dit:'+ " " + message+ "</p>"); //affichage de mon pseudo et de mon message dans la fenetre//
}
}

//3-fonction au click sur le bouton envoyer//
  $('#send').click(function()  {

    x++; //On icremente le tableau des réponses de l'ordinateur//
    ordinateur [x];//On appelle une des réponses du tableau//

    defineChamps(); //On appelle la fonction qui recupère mes champs d'entrées//

//4-On crée une fonction qui se déclenche toute les 2 secondes pour afficher la réponse de l'ordi//
    setTimeout(function(){$('#conversation').append("<p>" +'Mon Chat dit:' +" "+ ordinateur[x]+"</p>");},2000)

    monChat() //On appelle la fonction qui affiche mon pseudo et message//

    $('#write').val("");//On efface mon message envoyer de mon textarea//
})
