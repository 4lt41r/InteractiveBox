document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', () => {
    document.querySelectorAll('.box').forEach(b => b.classList.remove('active'));
    box.classList.add('active');
    box.querySelector('input[type="radio"]').checked = true;
  });
});
