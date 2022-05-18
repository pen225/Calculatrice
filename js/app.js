let un = document.querySelector(".btn-1");
let deux = document.querySelector(".btn-2");
let trois = document.querySelector(".btn-3");
let quatre = document.querySelector(".btn-4");
let cinq = document.querySelector(".btn-5");
let six = document.querySelector(".btn-6");
let huit = document.querySelector(".btn-8");
let neuf = document.querySelector(".btn-9");
let point = document.querySelector(".point");
let sept = document.querySelector(".btn-7");
let ecran = document.querySelector("input");




 const calcul = (number) =>{
     ecran.value = ecran.value+number;
 }

 //egale
function egale() {
    let valeur_input = ecran.value;
    if (valeur_input) {
        if (valeur_input.includes("sin")) {
            let valeur_convertie = valeur_input.replace("sin", "Math.sin");
            ecran.value = eval(valeur_convertie);
        }else if(valeur_input.includes("cos")){
            let valeur_convertie = valeur_input.replace("cos", "Math.cos");
            ecran.value = eval(valeur_convertie);
        }else if(valeur_input.includes("tan")){
            let valeur_convertie = valeur_input.replace("tan", "Math.tan");
            ecran.value = eval(valeur_convertie);
        }else if (valeur_input.includes("exp")){
            let valeur_convertie = valeur_input.replace("exp", "Math.exp");
            ecran.value = eval(valeur_convertie);
        }else if (valeur_input.includes("log")){
            let valeur_convertie = valeur_input.replace("log", "Math.log10");
            ecran.value = eval(valeur_convertie);
        }else if(valeur_input.includes("ln")){
            let valeur_convertie = valeur_input.replace("ln", "Math.log");
            ecran.value = eval(valeur_convertie);
        }else if (valeur_input.includes("sqrt")){
            let valeur_convertie = valeur_input.replace("sqrt", "Math.sqrt");
            ecran.value = eval(valeur_convertie);
        }else if (valeur_input.includes("abs")) {
            let valeur_convertie = valeur_input.replace("abs", "Math.abs");
            ecran.value = eval(valeur_convertie);
        }else if (valeur_input.includes("abs")) {

        }
    }else{
        ecran.value = eval(valeur_input);
        console.log(valeur_input);
    }
    
}

//egale
const suprAll = () =>{
    ecran.value ="";
}

const supr = () =>{
    let valeur_input = ecran.value;
    ecran.value = valeur_input.substring(0,valeur_input.length-1);
}














// do {
//     var choix = prompt("Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n");
//     choix = Number(choix);
//     var nombreUn, nombreDeux, resultat ;
//     //Condition switch
//     switch (choix) {
        
//         case 1:
//              nombreUn = Number(prompt("Entrez votre premier nombre"))  ;
//              nombreDeux = Number(prompt("Entrez votre second nombre")) ;
//              resultat = nombreUn + nombreDeux;
//             alert("L'addition de "+ nombreUn + " et "+ nombreDeux + " est "+ resultat);
//             break;
//         case 2:
//             nombreUn = Number(prompt("Entrez votre premier nombre"))  ;
//             nombreDeux = Number(prompt("Entrez votre second nombre")) ;
//              resultat = nombreUn * nombreDeux;
//             alert("Le produit de "+ nombreUn + " et "+ nombreDeux + " est "+ resultat);
//             break;
//         case 3:
//             nombreUn = Number(prompt("Entrez votre premier nombre"))  ;
//             nombreDeux = Number(prompt("Entrez votre second nombre")) ;
//              resultat = nombreUn - nombreDeux;
//             alert("La soustraction de "+ nombreUn + " et "+ nombreDeux + " est "+ resultat);
//             break;
//         case 4:
//             nombreUn = Number(prompt("Entrez votre premier nombre"))  ;
//             nombreDeux = Number(prompt("Entrez votre second nombre")) ;
//              resultat = nombreUn - nombreDeux;
//             alert("La division de "+ nombreUn + " et "+ nombreDeux + " est "+ resultat);
//             break;
    
//         default:
//             alert("Vueillez choisir entre les numeros indiqués");
//     }
// } while (choix == "" || choix == null);