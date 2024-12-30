<?php
$MYKEY = "987b5acb-0748-4bd2-af1e-653a3def039a";
$formData = $_POST;
$formData['access_key'] = $MYKEY;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.web3forms.com/submit");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($formData));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

header('Content-Type: application/json');
echo $response;
?>
