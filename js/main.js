//Mes variables//
var nom ="";
var pseudo =";"

//On crée une fonction pour pouvoir modifier les champs d'entrés//
function defineChamps() {
nom=$('#nom').val();//On récupère l'input du pseudo et on modifie la valeur avec val//
message=$('#write').val();//On récupère la textarea et on modifie sa valeur avec val//
}

//On crée une fonction pour afficher la conversation//
function monChat(){
  if(nom!=""&& message!=""){ // si les champs sont remplis//
  $('#conversation').append("<p>" + nom + " " + 'dit:'+ " " + message+ "</p>"); //ajout texte dans ma fenetre de conversation//
}
}

//fonction au click sur le bouton envoyer//
  $('#send').click(function()  {
    defineChamps(); //On appelle la fonction qui recupère mes champs d'entrées//
    setTimeout(monChat,2000); //Toute les 3 secondes envoie du texte//
})
