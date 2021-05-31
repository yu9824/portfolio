// jQuery．現在は使用していない．

//共通パーツ読み込み
// $(function() {
//     $("#header").load("common/header.html");
//     $("#footer").load("common/footer.html");
// });


// Vue.js
// あえてヘッダーとフッターで書き方を変えてみてるが，同じ意味．
// → 同じではなく，ヘッダーの書き方がlocal component, フッターの書き方がglobal componentの書き方であり，globalであれば，外部ファイルからも参照が可能．

// ヘッダー
const header = `
<header class = "header">
  <div class="inner">
    <h1 class="header-logo">
      <a href=".">yu-9824</a>
    </h1>
    <nav class="header-nav">
      <div id="app-go-somewhere">
        <go-somewhere></go-somewhere>
      </div>
    </nav>
  </div>
</header>`


const headerChild = `
<header class = "header">
  <div class="inner">
    <h1 class="header-logo">
      <a href="../">yu-9824</a>
    </h1>
    <nav class="header-nav">
      <div id="app-go-somewhere">
        <go-somewhere-child></go-somewhere-child>
      </div>
    </nav>
  </div>
</header>`

appHeader = new Vue({
    el: '#app-header',
    components: {
      'header-component': {
        template: header
      },
      'header-component-child': {
        template: headerChild
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