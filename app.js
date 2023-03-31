const inputs = document.querySelectorAll('#input');

let clipboardPaste;

inputs.forEach((item, index) => {
  item.addEventListener('input', () => {
    if (item.value.length >= item.maxLength && index !== 3) {
      inputs[index + 1].focus();
    }
  });
});

document.addEventListener('paste', pasteFromClipboard);

function pasteFromClipboard() {
  navigator.clipboard.readText().then((clipText) => {
    //document.getElementById("outbox").innerText = clipText;
    clipText = clipText.split('');

    inputs.forEach((input, index) => {
      input.value = clipText[index];
    });
  });
}
