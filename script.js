
let $form = $("form")
const $ListeRDV = $("#ListeRDV")

// Boutons
const $btn_annuler = $("#BoutonAnnuler")
const $btn_submit = $("#BoutonEnvoyer")


//Pour repartir de 0
$btn_annuler.on('click', function ()
{
    window.location.reload()
})

$form.on('submit', function ()
{
    alert("Submitted")
})