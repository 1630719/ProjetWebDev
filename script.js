
let $form = $("#Form")
let $ListeRDV = $("#ListeRDV")
let $courriel = $("#Courriel")
let $compteur = 0
let $ChaineBold = $("#ChaineBold")
let $NomProprio = $("#NomProprio")

// Boutons
const $btn_annuler = $("#BoutonAnnuler")
const $btn_submit = $("#BoutonEnvoyer")


//Pour repartir de 0
$btn_annuler.on('click', function ()
{
    window.location.reload()
})

$form.on("submit", function ()
{
    $compteur++  // Incrémenter de 1

    $ListeRDV.append("Courriel : "+ $courriel.val() + "<br>" +
                     "Nom propriétaire : " + $NomProprio.val() + "<br>")

})

