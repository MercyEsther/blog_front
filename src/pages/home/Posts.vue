<template>
<div id="posts" ref="curWin">
    <h1 class="titleF title">日<span class="titleB">志</span></h1>

    <ul class="posts">
        <li class="post" :key="index" v-for="(item,index) in posts">
            <span class="postTitle">{{item.title}}</span>
            <span class="author">{{item.author}}</span>
            <span class="update">{{item.updateAt}}</span>
        </li>
    </ul>
</div>
</template>

<script>
import api from "../../service/api.js";

export default {
    name: "post",
    data(){
        return{
            posts: []
        }
    },
    mounted(){
        this.$refs.curWin.style.height = window.screen.availHeight + "px";
    },
    created(){
        this.getPosts();
    },
    methods:{
        async getPosts(){
            let result = await api.getPosts();
            console.log("%c getPosts", "color: green", posts);
            if(result.success){
                this.posts = result.posts;
            }
        }
    }
}
</script>

<style scoped>
    #posts{
        position: relative;
        width: 100%;
    }
    .title{
        position: relative;
        width: 80%;
        left: 10%;
        height: 6rem;
        line-height: 6rem;
        font-size: 3rem;
        font-weight: lighter;
        text-align: center;
        border-bottom: 1px solid #9B9B9B;
    }
    .titleF{
        color: #9B9B9B;
    }
    .titleB{
        margin: 0;
        color: #FFAFB6;
    }
</style>
