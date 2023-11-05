// Champs
let $NomProprio = $("#NomProprio")
let $courriel = $("#Courriel")
let $NumTel = $("#NumTel")
let $NomAnimal = $("#NomAnimal")
let $AgeAnimal = $("#AgeAnimal")
let $PoidsAnimal = $("#PoidsAnimal")
let $TypeAnimal = $("#TypeAnimal")
let $DateRdv = $("#DatePicker")

// Labels erreur
let $LabelCourriel = $("#ErreurCourriel")
let $LabelProprio = $("#ErreurNomProprio")
let $LabelNumTel = $("#ErreurNumTel")
let $LabelNomAnimal = $("#ErreurNomAnimal")

// Boutons
const $btn_annuler = $("#BoutonAnnuler")

//Autres selecteurs
let $form = $("#Form")
let $ListeRDV = $("#ListeRDV")
let $compteur = 0
let $ChaineBold = ("Informations du rendez-vous : ")

//Code JS pour avoir la date du jour comme date minimale (valider que le rdv n'est pas à une date passée)
let date = new Date().toISOString().split('T')[0]
$DateRdv[0].setAttribute('min', date);



// SECTION FONCTIONS VALIDATION/LABEL ERREUR

//Validation nom du propriétaire
$NomProprio.on('blur', function ()
{
    if (!$NomProprio.val().match("^[A-Z]{1}[a-zA-Z]{2,10}\\s[a-zA-Z\\-\\/]{5,15}$"))
    {
        $LabelProprio.text("Le nom doit être entre 3-25 caractères et débuter par une majuscule.")  // Afficher erreur
    }
    else
    {
        $LabelProprio.text("")  // Vider/Garder vide si valide
    }
})

//Validation du courriel
$courriel.on('blur', function ()
{
    if (!$courriel.val().match("^[a-zA-Z0-9.!#$%&’*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"))
    {
        $LabelCourriel.text("Il faut entrer un courriel comme exemple@gmail.com")  // Afficher l'erreur
    }
    else
    {
        $LabelCourriel.text("")  // Vider/garder vide si bon
    }

})

//Validation numéro de telephone
$NumTel.on('blur', function ()
{
    if (!$NumTel.val().match("^[0-9]{3}-[0-9]{3}-[0-9]{4}$"))
    {
        $LabelNumTel.text("Le numéro doit suivre l'exemple suivant: 819-555-5555 (tiret entre les chiffres)") // Afficher l'erreur
    }
    else
    {
        $LabelNumTel.text("") // Vider/garder vide si bon
    }
})

//Validation du nom de l'animal
$NomAnimal.on('blur', function ()
{
    if (!$NomAnimal.val().match("^[A-Z]{1}[a-zA-Z]{2,10}\\s[a-zA-Z\\-\\/]{5,15}$"))
    {
        $LabelNomAnimal.text("Le nom doit débuter par une majuscule et entre 3-25 caractères")
    }
    else
    {
        $LabelNomAnimal.text("")
    }
})

$form.on("submit", function ()
{
    //Récupérer le sexe de l'animal
    let $SexeAnimal = $("input[type='radio'][name=SexeAnimal]:checked", '#Form')

    $compteur++  // Incrémenter de 1
    if ($compteur === 1)
    {
        $ListeRDV.append( "Courriel : "+ "<span>" + $courriel.val() + "</span>" + "<br>" +
            "Nom propriétaire : " + "<span>" + $NomProprio.val() + "</span>" + "<br>" +
            "Numéro de cellulaire : " + "<span>" + $NumTel.val() + "</span>" + "<br>" +
            "Nom de l'animal : " + "<span>" + $NomAnimal.val() + "</span>" +  "<br>" +
            "Age de l'animal : " + "<span>" + $AgeAnimal.val() + "</span>" + "<br>" +
            "Type d'animal : " + "<span>" + $TypeAnimal.val() + "</span>" + "<br>" +
            "Poids de l'animal : " + "<span>" + $PoidsAnimal.val() +" lbs" + "</span>" + "<br>" +
            "Sexe de l'animal : " + "<span>" + $SexeAnimal.val() + "</span>" + "<br>" +
            "Date du rendez-vous :" + "<span>" + $DateRdv.val() + "</span>" +
            "<br>" + "<br>")
    }

    else if ($compteur > 1)
    {
        $ListeRDV.append($ChaineBold + "<br>" + "Courriel : "+ "<span>" + $courriel.val() + "</span>" + "<br>" +
            "Nom propriétaire : " + "<span>" + $NomProprio.val() + "</span>" + "<br>" +
            "Numéro de cellulaire : " + "<span>" + $NumTel.val() + "</span>" + "<br>" +
            "Nom de l'animal : " + "<span>" + $NomAnimal.val() + "</span>" +  "<br>" +
            "Age de l'animal : " + "<span>" + $AgeAnimal.val() + "</span>" + "<br>" +
            "Type d'animal : " + "<span>" + $TypeAnimal.val() + "</span>" + "<br>" +
            "Poids de l'animal : " + "<span>" + $PoidsAnimal.val() +" lbs" + "</span>" + "<br>" +
            "Sexe de l'animal : " + "<span>" + $SexeAnimal.val() + "</span>" + "<br>" +
            "Date du rendez-vous :" + "<span>" + $DateRdv.val() + "</span>" +
            "<br>" + "<br>")
    }

})

//Pour repartir de 0
$btn_annuler.on('click', function ()
{
    window.location.reload()
})




