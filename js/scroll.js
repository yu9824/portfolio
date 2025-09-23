// モダンなスクロール機能
document.addEventListener('DOMContentLoaded', function () {
  // ハンバーガーメニュー開閉（モバイルのみ）
  const toggleButton = document.querySelector('.header-toggle');
  const nav = document.querySelector('.header-nav');
  const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

  if (toggleButton && nav) {
    const openNav = () => {
      nav.style.display = 'block';
      toggleButton.setAttribute('aria-expanded', 'true');
    };
    const closeNav = () => {
      nav.style.display = 'none';
      toggleButton.setAttribute('aria-expanded', 'false');
    };

    toggleButton.addEventListener('click', function () {
      if (!isMobile()) return; // PCでは無効
      const isOpen = nav.style.display === 'block';
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    // ナビ内リンククリックで自動的に閉じる（モバイルのみ）
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (!isMobile()) return; // PCでは閉じない
        closeNav();
      });
    });

    // リサイズ時にPC幅なら表示状態をリセット
    const handleResize = () => {
      if (!isMobile()) {
        nav.style.display = '';
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
  }
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
