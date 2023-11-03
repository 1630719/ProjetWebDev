
let $form = $("#Form")
let $ListeRDV = $("#ListeRDV")
let $compteur = 0


// Boutons
const $btn_annuler = $("#BoutonAnnuler")

// Champs
let $courriel = $("#Courriel")
let $NomProprio = $("#NomProprio")
let $NumTel = $("#NumTel")

// Labels erreur
let $LabelCourriel = $("#ErreurCourriel")
let $LabelPrprio = $("#ErreurNomProprio")
let $LabelNumTel = $("#ErreurNumTel")

//Pour repartir de 0
$btn_annuler.on('click', function ()
{
    window.location.reload()
})

// SECTION FONCTIONS VALIDATION/LABEL ERREUR

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

//Validation nom du propriétaire
$NomProprio.on('blur', function ()
{
    if (!$NomProprio.val().match("^[A-Z]{1}[a-zA-Z]{2,10}\\s[a-zA-Z\\-\\/]{5,15}$"))
    {
        $LabelPrprio.text("Le nom doit être entre 5-25 caractères et débuter par une majuscule.")  // Afficher erreur
    }
    else
    {
        $LabelPrprio.text("")  // Vider/Garder vide si valide
    }
})

//Validation numéro de telephone
$NumTel.on('blur', function ()
{
    if (!$NumTel.val().match("^[0-9]{3}-[0-9]{3}-[0-9]{4}$"))
    {
        $LabelNumTel.text("Le numéro doit suivre l'exemple suivant: 819-555-5555 (tiret entre les chiffres)")
    }
    else
    {
        $LabelNumTel.text("")
    }
})

$form.on("submit", function ()
{
    $compteur++  // Incrémenter de 1

    $ListeRDV.append("Courriel : "+ "<span>" + $courriel.val() + "</span>" + "<br>" +
                     "Nom propriétaire : " + "<span>" + $NomProprio.val() + "</span>" + "<br>")

})


