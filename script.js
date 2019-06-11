import nav from './App.vue'
import maincontent from './Content.vue'
import mainfooter from './footer.vue'

var app = new Vue ({
    el:"#app",
    data: {
       items: [
           'home',
           'PA',
           'activityPA',
           'activityIT',
           'mentoring'
       ],
       show:false,
    },
    components: {
        nav,
        maincontent, 
        mainfooter
    }
})

