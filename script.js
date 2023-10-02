const mugElement = document.getElementById('mug');
const colorSelect = document.getElementById('color');
const designSelect = document.getElementById('design');
const customTextElement = document.getElementById('customText');
const updateButton = document.getElementById('updateMug');
const purchaseButton = document.getElementById('purchase');

updateButton.addEventListener('click', updateMug);
purchaseButton.addEventListener('click', purchaseMug);

function updateMug() {
  const selectedColor = colorSelect.value;
  const selectedDesign = designSelect.value;
  const customText = customTextElement.value;

  mugElement.style.backgroundColor = selectedColor;
  mugElement.innerHTML = `<div id="design">${selectedDesign}</div><div id="text">${customText}</div>`;
}

function purchaseMug() {
  const selectedColor = colorSelect.value;
  const selectedDesign = designSelect.value;
  const customText = customTextElement.value;

  // Perform purchase logic here, e.g., send data to a server, calculate price, etc.
  alert(`Congratulations! You have purchased a custom coffee mug:\nColor: ${selectedColor}\nDesign: ${selectedDesign}\nText: ${customText}`);
}