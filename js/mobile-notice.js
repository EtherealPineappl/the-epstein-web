(function () {
  if (sessionStorage.getItem('mobileNoticeDismissed')) return;

  var notice = document.getElementById('mobileNotice');
  var closeBtn = document.getElementById('mobileNoticeClose');

  if (!notice || !closeBtn) return;

  if (window.innerWidth <= 900 || 'ontouchstart' in window) {
    notice.classList.add('visible');
  }

  closeBtn.addEventListener('click', function () {
    notice.classList.remove('visible');
    sessionStorage.setItem('mobileNoticeDismissed', '1');
  });
}());
