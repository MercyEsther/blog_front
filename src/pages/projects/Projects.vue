<template>
<div id="projects" v-html="html">
</div>
</template>

<script>
import Navbar from "../../components/Navbar";

export default {
    name: "projects",
    components: {Navbar},
    data(){
        return{
            html: ""
        }
    },
    created(){
        // this.html = html.post;
    }
}
</script>

<style scoped>

</style>

