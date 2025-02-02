<?php
// web3forms-proxy.php

// Votre clé Web3Forms (gardée secrète)
$MYKEY = "987b5acb-0748-4bd2-af1e-653a3def039a";

// Récupérer les données POST
$formData = $_POST;

// Ajouter la clé Web3Forms aux données
$formData['access_key'] = $MYKEY;

// Préparer la requête vers Web3Forms
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.web3forms.com/submit");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($formData));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Exécuter la requête
$response = curl_exec($ch);
curl_close($ch);

// Retourner la réponse de Web3Forms au client
header('Content-Type: application/json');
echo $response;
?>
