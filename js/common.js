// jQuery．現在は使用していない．

//共通パーツ読み込み
// $(function() {
//     $("#header").load("common/header.html");
//     $("#footer").load("common/footer.html");
// });


// Vue.js
// あえてヘッダーとフッターで書き方を変えてみてるが，同じ意味．

// ヘッダー
const header = `
<header class = "header">
  <div class="inner">
    <h1 class="header-logo">
      <a href=".">yu-9824</a>
    </h1>
    <nav class="header-nav">
      <ul class="header-nav-list">
        <li class="header-nav-item"><a href="#works">WORKS</a></li>
        <li class="header-nav-item"><a href="#skill">SKILL</a></li>
        <li class="header-nav-item"><a href="#about">ABOUT</a></li>
        <li class="header-nav-item"><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  </div>
</header>`

appHeader = new Vue({
    el: '#app-header',
    components: {
        'header-component': {
            template: header
        },
    },
})
// ヘッダー終了

// フッター
const footer = `
<footer class="footer">
  <div class="copyright">&copy; 2021 yu-9824</div>
</footer>`

Vue.component('footer-component', {
    template: footer
})
appFooter = new Vue({
    el: '#app-footer',
    
})
// フッター終了