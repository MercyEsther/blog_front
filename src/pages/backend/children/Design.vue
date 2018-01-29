<template>
<div id="design" ref="curWin">
    <div class="row addWrapper">
        <button class="add" @click="addDesign">添加</button>
    </div>

    <ul class="designs">
        <li class="design" :key="index" v-for="(item,index) in designs">
            <div class="row">
                <input type="text" class="name" placeholder="名称" v-model="item.name">
                <input type="text" class="author" placeholder="作者" v-model="item.author">
                <span class="update">更新:{{new Date(item.updateAt).toLocaleString()}}</span>
                <span class="create">创建:{{new Date(item.createAt).toLocaleString()}}</span>
                <button class="deleteDesign" @click="deleteDesign(item)">删除</button>
                <button class="saveDesign" @click="updateDesign(item)">保存</button>
            </div>
            <div class="row">
                <textarea class="desc" cols="30" rows="5" v-model="item.desc"></textarea>
            </div>
            <div class="row imgWrapper">
                <span>图片:</span>
                <div class="img" :key="imgIndex" v-for="(img,imgIndex) in item.imgs">
                    <input type="file" class="imgPickeer" @change="submitImg($event,index,imgIndex)">
                    <button class="delImg" @click="delImg(item,index)">-</button>
                </div>
                <button class="addImg" @click="addImg(item)">+</button>
            </div>
        </li>
    </ul>

    <div class="placeholder"></div>
</div>
</template>

<script>
import api from "../../../service/api.js";

export default {
    name: "backendDesign",
    data(){
        return {
            designs: []
        }
    },
    created(){
        this.getDesigns();
    },
    mounted(){
        this.$refs.curWin.style.height = window.screen.availHeight + "px";
    },
    methods:{
        async getDesigns(){
            let r = await api.getDesigns();
            if(r.success){
                let designs = r.designs;
                designs.forEach((item,index) => {
                    item.imgs = JSON.parse(item.imgs);
                })
                this.designs = designs;
                console.log("%c [getDesigns]", "color: green", r);
            }
        },
        async addDesign(){
            let r = await api.addDesign();
            if(r.success){
                console.log("%c [addDesign]", "color: green");
                this.getDesigns();
            }
            else{

            }
        },
        async deleteDesign(design){
            let r = await api.deleteDesign(design);
            if(r.success){
                console.log("%c [deleteDesign]", "color: green");
                this.getDesigns();
            }
            else{

            }
        },
        async updateDesign(design){
            design.imgs = JSON.stringify(design.imgs);
            let r = await api.updateDesign(design);
            if(r.success){
                console.log("%c [updateDesign]", "color: green");
                this.getDesigns();
            }
            else{

            }
        },
        addImg(item){
            if(!item.imgs){
                item.imgs = [];
            }
            item.imgs.push("");
        },
        delImg(item,index){
            item.imgs.splice(index, 1);
        },
        submitImg(e,index,imgIndex){
            console.log(e);
            let self = this;
            let file = e.currentTarget.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                let base64 = reader.result;
                this.designs[index].imgs[imgIndex] = base64;
            }
        }
    }
}
</script>

<style scoped>
#design{
    position: relative;
    width: 100%;
    overflow-y: scroll;
}
.addWrapper{
    justify-content: flex-end !important;
}
.add{
    position: relative;
    width: 6rem;
    height: 2rem;
    background-color: #12b8ff;
    color: white;
}
.add:hover{
    cursor: pointer;
}
.design{
    position: relative;
    width: 100%;
    display: flex;
    margin-bottom: 2rem;
    flex-direction: column;
    justify-content: space-around;
}
.row{
    position: relative;
    width: 100%;
    margin: 0.5rem 0px;
    padding: 0px 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.desc{
    position: relative;
    width: 100%;
}
.saveDesign, .deleteDesign{
    position: relative;
    width: 6rem;
    height: 2rem;
    color: white;
}
.design input{
    height: 2rem;
    width: 12rem;
}
.saveDesign{
    background-color: #12b8ff;
}
.deleteDesign{
    background-color: #FF4E17;
}
.imgWrapper{
    justify-content: flex-start !important;    
}
.addImg, .delImg{
    position: relative;
    width: 2rem;
    height: 2rem;
    margin: 0px 0.5rem;
    border: 1px solid #ddd;
}
.update, .create, .imgWrapper span{
    color: #676767;
    font-size: 0.8rem;
}
.img{
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
}
.imgPicker{
    position: relative;
    display: flex;
    align-items: center;
}
.placeholder{
    position: relative;
    height: 10rem;
    width: 100%;
}
</style>
