<template>
    <div>
        <h1 class="footer">THIS IS FOOTER</h1>
    </div>
</template>
<script>
export default {
    name: 'Footer',
    data() {
        return {
            name:''
 
        }
    },
    methods: {
        
    },
    created() {
        this.name = this.$appName
    },
}
</script>
