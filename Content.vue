<template>
    <div>
        <card title = 'Card 3'   message = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
			icon = 'far fa-calendar-alt fa-2x'></card>
        <card  title = 'Card 2'   message = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
			icon = 'far fa-calendar-alt fa-2x'></card>
        <card  title = 'Card 4'   message = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
			icon = 'far fa-calendar-alt fa-2x'></card>
    </div>
</template>
<script>
import ChildContent from './content1.vue'
import Card from './card.vue'
export default {
    components: {
        ChildContent,
        Card
    },
    data () {
        return {
            message: 'hello1'
        }
    },
    methods: {
        change (value) {
            console.log(value)
        }
    }
}
</script>

<style>

</style>
