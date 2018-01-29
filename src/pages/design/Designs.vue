<template>
<div id="designs" ref="curWin">
    <h1 class="titleF title">设<span class="titleB">计</span></h1>

    <ul class="designs">
        <li class="design" :key="index" v-for="(item,index) in designs" @click="$store.commit('SET_CURDESIGN',item); $router.push(`/design/${item.id}`)">
            <span class="designTitle">{{item.name}}</span>
            <span class="author">{{item.author}}</span>
            <span class="update">{{new Date(item.updateAt).toLocaleString()}}</span>
        </li>
    </ul>
</div>
</template>

<script>
import api from "../../service/api.js";

export default {
    name: "designs",
    data(){
        return{
            designs: []
        }
    },
    created(){
        this.getDesigns();
    },
    methods:{
        async getDesigns(){
            let r = await api.getDesigns();
            console.log("%c [getDesigns]", "color: green", r);
            if(r.success){
                this.designs = r.designs;
            }
        }
    }
}
</script>

<style>
#designs{
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
    .designs{
        position: relative;
        width: 80%;
        left: 10%;
    }
    .design{
        position: relative;
        width: 100%;
        height: 3rem;
        display: flex;
        align-items: center;
        border-bottom: 0.5px solid #eee;
    }
    .design:hover{
        cursor: pointer;
        background-color: #eee;
    }
    .designTitle{
        font-size: 1.2rem !important;
        flex: 0 1 50%;
    }
    .author{
        flex: 0 1 20%;
    }
    .update{
        flex: 0 1 30%;
    }
    .update,.author{
        display: inline-block;
        position: relative;
        text-align: right;
        font-size: 0.8rem;
        color: #676767;
    }
</style>

