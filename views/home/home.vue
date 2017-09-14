<template>
    <div class="box">
        <div class="person">
            <router-link :to="{name:'q1',query:{type:1}}"><div class="wenke"></div></router-link>
            <router-link :to="{name:'q1',query:{type:0}}"><div class="like"></div></router-link>
        </div>
    </div>
</template>
<script>
    export default {
    }
</script>
<style>
    .box{
        width: 100%;
        height:100%;
    }
    .person{
        width: 78%;
        background: url("../../imgs/home-pepole.png")no-repeat;
        padding: 0 100px;
        background-size:100% 80%;
        height: 100%;
        position: relative;
        box-sizing: border-box;
        margin: 0 auto;
    }
    .wenke{
        width:30%;
        height: 16%;
        background: url("../../imgs/f-like.png")no-repeat;
        background-size: 90px 90px;
        position: absolute;
        left: 32px;
        top: 42%;
    }
    .like{
        width:30%;
        height: 16%;
        background: url("../../imgs/f-wenke.png")no-repeat;
        background-size: 90px 90px;
        position: absolute;
        right: 20px;
        top: 42%;
    }
</style>