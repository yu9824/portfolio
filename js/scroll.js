// モダンなスクロール機能
document.addEventListener('DOMContentLoaded', function () {
  // スムーススクロール機能
  const scrollLinks = document.querySelectorAll('a[data-scroll-to]');

  scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('data-scroll-to');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ページトップボタン
  const pageTopButton = document.getElementById('page-top');

  if (pageTopButton) {
    // スクロール位置に応じてボタンの表示/非表示を切り替え
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 300) {
        pageTopButton.style.display = 'block';
        pageTopButton.style.opacity = '1';
      } else {
        pageTopButton.style.opacity = '0';
        setTimeout(() => {
          if (window.pageYOffset <= 300) {
            pageTopButton.style.display = 'none';
          }
        }, 300);
      }
    });

    // ページトップボタンのクリックイベント
    pageTopButton.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
