const btn = document.getElementById('showImage');
  const img = document.getElementById('SVMResults');

  // Add click event to the button
  btn.addEventListener('click', () => {
    // Change display from 'none' to 'block' to make it appear
    img.style.display = 'block';
  });