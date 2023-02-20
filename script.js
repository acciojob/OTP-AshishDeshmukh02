//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes.forEach((code, index) => {
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
