// Elements
const photoInput = document.getElementById('photoInput');
const nameInput = document.getElementById('nameInput');
const bioInput = document.getElementById('bioInput');
const cardPhoto = document.getElementById('cardPhoto');
const cardName = document.getElementById('cardName');
const cardBio = document.getElementById('cardBio');
const themeToggle = document.getElementById('themeToggle');
const downloadBtn = document.getElementById('downloadBtn');
const card = document.getElementById('card');

// Image Upload
photoInput.addEventListener('change', function() {
  const file = photoInput.files[0];
  if(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      cardPhoto.src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
});

// Live Text Update
nameInput.addEventListener('input', () => {
  cardName.textContent = nameInput.value || "Your Name";
});

bioInput.addEventListener('input', () => {
  cardBio.textContent = bioInput.value || "Your bio goes here";
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Download Card
downloadBtn.addEventListener('click', () => {
  html2canvas(card, { scale: 2 }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'CardNova.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
});
