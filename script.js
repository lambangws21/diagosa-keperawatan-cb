function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(function () {
      showNotification("Teks telah disalin ke Clipboard!", "bg-green-500");
    })
    .catch(function (error) {
      showNotification("Gagal menyalin teks ke Clipboard.", "bg-red-500");
    });
}
function copyTableToClipboard() {
  var table = document.querySelector("table");
  var range = document.createRange();
  range.selectNode(table);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  try {
    var successful = document.execCommand("copy");
    if (successful) {
      showNotification("Tabel telah disalin ke Clipboard!", "bg-green-500");
    } else {
      showNotification("Gagal menyalin tabel ke Clipboard.", "bg-red-500");
    }
  } catch (error) {
    showNotification("Gagal menyalin tabel ke Clipboard.", "bg-red-500");
  }

  window.getSelection().removeAllRanges();
}

function showNotification(message, className) {
  var notification = document.createElement("div");
  notification.textContent = message;
  notification.classList.add(
    "fixed",
    "bottom-0",
    "right-0",
    "p-4",
    "m-4",
    "text-white",
    "font-bold",
    "rounded",
    className
  );
  document.body.appendChild(notification);

  setTimeout(function () {
    document.body.removeChild(notification);
  }, 13000);
}
