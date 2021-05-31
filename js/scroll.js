
// ===== 各要素への移動 =====
const goSomewhere = `
<ul class="header-nav-list">
  <li class="header-nav-item" v-for="chapter in chapters"><a v-bind:href=chapter.elem v-scroll-to="{
    el: chapter.elem,
    duration: 300,
  }"> {{ chapter.name }} </a></li>
</ul>`

const goSomewhereChild = `
<ul class="header-nav-list">
  <li class="header-nav-item" v-for="chapter in chapters"><a v-bind:href='"../"+chapter.elem'> {{ chapter.name }} </a></li>
</ul>`

// 共通のアンカー一覧
const chapters = [
  {name: 'WORKS', elem: '#works'},
  {name: 'SKILL', elem: '#skill'},
  {name: 'ABOUT', elem: '#about'},
  {name: 'CONTACT', elem: '#contact'},
]

// あえてglobal componentとして定義することでエラーを起こしていない．
Vue.component('go-somewhere', {
    template: goSomewhere,
    // componentにおけるデータは関数の形でなくてはならない．
    data: function() {
      return {
        chapters: chapters
      }
    },
  }
)

Vue.component('go-somewhere-child', {
  template: goSomewhereChild,
  data: function() {
    return {
      chapters: chapters
    }
  },
})

// 共通のVueオブジェクト
appGoSomewhere = new Vue({
  el: '#app-go-somewhere',
  data: {
    chapters: [
      {name: '', elem: ''},
    ]
  },
})


// ===== ページトップへの移動 =====
const pagetop = `
<div class="page-top" v-scroll-to="{
  el: 'body,html',
  duration:300,
}">
  <span class="material-icons-outlined"><i class="fas fa-angle-down fa-flip-vertical"></i></span>
</div>`

appPageTop = new Vue({
  el: '#app-pagetop',
  components:{
    'page-top': {
      template: pagetop,
    }
  },
})