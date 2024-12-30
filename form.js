document.querySelector('.php-email-form').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
    const loading = document.querySelector('.loading');
    const sentMessage = document.querySelector('.sent-message');
    const submitButton = form.querySelector('button[type="submit"]'); // Bouton d'envoi
  
    // Empêche une double soumission en vérifiant si le bouton est déjà désactivé
    if (submitButton.disabled) return;
  
    // Désactive le bouton d'envoi pour éviter les soumissions multiples
    submitButton.disabled = true;
  
    // Affiche le message de chargement
    loading.style.display = 'block';
    sentMessage.style.display = 'none';
  
    try {
      // Envoie les données à Web3Forms
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });
  
      const result = await response.json();
  
      if (response.ok && result.success) {
        // Succès : affiche le message
        loading.style.display = 'none';
        sentMessage.style.display = 'block';
        form.reset(); // Réinitialise le formulaire
  
        // Cache le message après 2 secondes
        setTimeout(() => {
          sentMessage.style.display = 'none';
          submitButton.disabled = false; // Réactive le bouton après 2 secondes
        }, 2000);
      } else {
        loading.style.display = 'none';
        submitButton.disabled = false; // Réactive le bouton en cas d'échec
      }
    } catch (error) {
      // En cas d'erreur (réseau ou autre), on cache le loading
      loading.style.display = 'none';
      submitButton.disabled = false; // Réactive le bouton
    }
  });
  