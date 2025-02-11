function copyToClipboard(button) {
  // 복사할 텍스트 가져오기
  const locationText = button.previousElementSibling.textContent;

  // 임시로 텍스트를 복사할 input 엘리먼트 만들기
  const tempInput = document.createElement("input");
  document.body.appendChild(tempInput);
  tempInput.value = locationText;
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // 복사 완료 팝업 표시
  showPopup();
}

function showPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "flex"; // 팝업 보이기
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none"; // 팝업 숨기기
}
