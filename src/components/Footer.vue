<template>
<div id="footer">
    <div class="row">
        <a href="https://github.com/MercyEsther" class="githubHref" target="__black">
            <svg aria-hidden="true" class="githubIcon" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
            github
        </a>
    </div>
    <div class="row">
        <p class="author">HuangYH</p>
        <p class="version">v1.0.0</p>
        <p class="date">2017</p>
    </div>
</div>
</template>

<script>
export default {
    name: "footer",
    data(){
        return {

        }
    }
}
</script>

<style scoped>
#footer{
    position: absolute;
    width: 100%;
    height: 8rem;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background-color: #4a4a4a;
    color: white;
}
.githubIcon{
    position: relative;
    fill: white;
    height: 1.5rem;
    top: 0.3rem;
}
.githubHref{
    color: white;
    font-size: 0.9rem;
    font-weight: lighter;
    line-height: 3rem;
}
.row{
    position: relative;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.row p{
    position: relative;
    font-size: 0.8rem;
    font-weight: lighter;
    margin: 0 1rem;
}
</style>

