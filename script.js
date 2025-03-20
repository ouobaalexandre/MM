// script.js
document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById('modelsContainer');
  
  fetch('models.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors du chargement de models.json');
      }
      return response.json();
    })
    .then(models => {
      models.forEach(model => {
        const card = document.createElement('div');
        card.className = 'model-card';
        card.innerHTML = `
          <img src="${model.thumbnail}" alt="${model.title}">
          <h3>${model.title}</h3>
          <a href="${model.id}/index.html" class="view-model-link">Voir le modèle 3D</a>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => console.error('Erreur:', error));
});
