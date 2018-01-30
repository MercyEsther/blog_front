<template ref="curWin">
<div id="curDesign">
    <div class="row">
        <div class="title">{{curDesign.name}}</div>
    </div>

    <div class="row">
        <div class="author">{{curDesign.author}}</div>
        <div class="update">{{new Date(curDesign.updateAt).toLocaleString()}}</div>
    </div>

    <div class="row">
        <p class="desc">{{curDesign.desc}}</p>
    </div>

    <ul class="imgs">
        <li class="img" :key="index" v-for="(item,index) in imgs">
            <img :src="item">
        </li>
    </ul>

    <div class="placeholder"></div>
</div>
</template>

<script>
import api from "../../service/api.js";
import {mapState} from "vuex";
import localStore from "../../store/localStore.js";

export default {
    name: "curDesign",
    data(){
        return{
            imgs: []
        }
    },
    computed:{
        ...mapState([
            "curDesign"
        ])
    },
    created(){
        this.imgs = JSON.parse(this.curDesign.imgs);
        console.log("curDesign", this.curDesign);
    }
}
</script>

<style scoped>
#design{
    position: relative;
    width: 100%;
}
.designs{
    position: relative;
    width: 100%;
}
.row{
    position: relative;
    width: 100%;
    margin: 1rem 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.title{
    position: relative;
    font-size: 3rem;
    color: #4a4a4a;
}
.author, .update{
    font-size: 1rem;
    color: #676767;
    font-weight: lighter;
    margin: 0px 1rem;
}
.imgs{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.img{
    position: relative;
    width: 60%;
    list-style: none;
}
.img img{
    width: 100%;
    border: 1px solid #888;
    border-radius: 10px;
}
.placeholder{
    position: relative;
    height: 10rem;
}
.desc{
    margin: 2rem;
    color: #676767;
    font-size: 0.9rem;
    font-weight: lighter;
    text-indent: 2rem;
}
</style>

