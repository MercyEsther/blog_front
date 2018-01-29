<template>
<div id="post" v-html="post.content">

</div>
</template>

<script>
    import localStore from "../../store/localStore.js";
    export default {
        name: "post",
        data(){
            return{
                post: ""
            }
        },
        mounted(){
            if(this.$store.state.curPost.id){
                this.post = this.$store.state.curPost;
            }
            else{
                this.post = localStore.getStore("curPost");
            }
        }
    }
</script>
