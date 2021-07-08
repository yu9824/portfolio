// ===== ここからを更新 =======
var works = [
    {
        fname: 'portfolio.html',
        title: 'Portfolio',
        info: '<span>Vue.jsで作成した</span><span>自分のポートフォリオサイト．</span>',
    },
]
const workslink = 'https://yu9824.github.io/portfolio/works/'
const bilinky = 'https://blinky.nemui.org/shot/large?'
// ===== ここまでを更新 =======

const workComponent = {
    data: function() {
        return {
            works:works,
            workslink: workslink,
            bilinky: bilinky,
        }
    },
    template: `
        <div class="work-list" v-for="work in works">
            <a class="works-item" v-bind:href="workslink+work.fname">
                <div class="works-img"><img v-bind:src="bilinky+workslink+work.fname" v-bindalt="'thumbnail of '+ work.fname" /></div>
                <p class="works-name"> {{ work.title }} </p>
                <!-- HTMLとして読ませるための参考: https://jp.vuejs.org/v2/guide/syntax.html -->
                <p class="works-info"> <span v-html="work.info"/> </p>
            </a>
        </div>
        `,
}


const appwork = new Vue({
    el: '#app-work',
    components: {
        'work-component': workComponent
    },
})
