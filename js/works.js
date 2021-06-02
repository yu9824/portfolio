// ===== ここからを更新 =======
var works = [
    {
        fname: 'portfolio.html',
        title: 'Portfolio',
        info: 'Vue.jsで作成した，自分のポートフォリオサイト．',
    },
]
const workslink = 'https://yu-9824.github.io/portfolio/works/'
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
                <p class="works-img"><img v-bind:src="bilinky+workslink+work.fname" v-bindalt="'thumbnail of '+ work.fname" /></p>
                <p class="works-name"> {{ work.title }} </p>
                <p class="works-info"> {{ work.info }} </p>
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