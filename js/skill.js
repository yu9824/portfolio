// ===== ここからを更新 =======
var skills = [
    {
        tool: 'Python',
        quality: '70%',
    },
    {
        tool: 'HTML/CSS',
        quality: '40%',
    },
    {
        tool: 'Javascript',
        quality: '25%',
    },
    {
        tool: 'Vue.js',
        quality: '10%',
    },
]
// ===== ここまでを更新 =======

const skillComponent = {
    data: function() {
        return {
            skills:skills
        }
    },
    template: `
        <div class="skill-list">
            <div class="skill-item" v-for="skill in skills">
                <div class="skill-body">
                    <h3 class="skill-name"> {{ skill.tool }} </h3>
                    <div class='pie' v-bind:style="generateCss(skill.quality)"> {{ skill.quality }} </div>
                </div>
            </div>
        </div>
        `,
    methods: {
        // 動的に円グラフの割合を変更するCSSを生成する関数．v-bindでstyleに渡している．
        generateCss: function(quality) {
            return {
                "background-image": "radial-gradient(#f2f2f2 60%, transparent 61%), conic-gradient(#022f5e 0%" + quality + ", #d9d9d9 " + quality + " 100%)"
            }
        }
    },
}


const appSkill = new Vue({
    el: '#app-skill',
    components: {
        'skill-component': skillComponent
    },
})
