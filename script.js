const codes = document.querySelectorAll('.code');

codes.forEach((code, index) => {
  code.addEventListener('input', (e) => {
    const input = e.target;
    const nextCode = codes[index + 1];
    if (input.value !== '' && nextCode) {
      nextCode.focus();
    }
  });

  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (code.value === '') {
        const prevCode = codes[index - 1];
        if (prevCode) {
          prevCode.focus();
        }
      }
    }
  });
});
