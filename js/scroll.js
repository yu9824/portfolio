
// ===== 各要素への移動 =====
const goSomewhere = `
<ul class="header-nav-list">
  <li class="header-nav-item" v-for="chapter in chapters"><a v-bind:href=chapter.ref v-scroll-to="{
    el: chapter.to,
    duration: 300,
  }"> {{ chapter.name }} </a></li>
</ul>`

const goSomewhereChild = `
<ul class="header-nav-list">
<li class="header-nav-item" v-for="chapter in chapters"><a v-bind:href=chapter.ref v-on:click.prevent=onClick> {{ chapter.name }} </a></li>
</ul>`


const router = new VueRouter({
  routes // `routes: routes` の短縮表記
})

const app = new Vue({
  router
}).$mount('#app-go-somewhere')


// あえてglobal componentとして定義することでエラーを起こしていない．
Vue.component('go-somewhere', {
    template: goSomewhere,
    // componentにおけるデータは関数の形でなくてはならない．
    data: function() {
      return {
        chapters: [
          {name: 'WORKS', ref: '#works', to: '#works'},
          {name: 'SKILL', ref: '#skill', to: '#skill'},
          {name: 'ABOUT', ref: '#about', to: '#about'},
          {name: 'CONTACT', ref: '#contact', to: '#contact'},
        ]
      }
    },
  }
)

Vue.component('go-somewhere-child', {
  template: goSomewhereChild,
  data: function() {
    return {
      chapters: [
        {name: 'WORKS', ref: '#works', to: '#works'},
        {name: 'SKILL', ref: '#skill', to: '#skill'},
        {name: 'ABOUT', ref: '#about', to: '#about'},
        {name: 'CONTACT', ref: '#contact', to: '#contact'},
      ]
    }
  },
  methods: {
    onClick: function() {
      console.log(this)
      const hash = this.$route.hash
      if (hash && hash.match(/^#.+$/)) {
        this.$scrollTo(hash)
      }
    }
  }
})

appGoSomewhere = new Vue({
  el: '#app-go-somewhere',
  data: {
    chapters: [
      {name: '', ref: '', to: ''},
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