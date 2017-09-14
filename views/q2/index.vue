<template>
   <div class="box">
       <div class="tong">
           <h1>{{res.school01.name}}</h1>
           <b>主修课程: <em>{{res.school01.majors}}</em></b>
           <p>课程介绍：{{res.school01.character}}</p>
       </div>
       <div class="left"></div>
       <div class="right"></div>
       <div class="tubiao">
           
       </div>
   </div>
</template>
<script>
    export default {

        data:function(){
            return{
                res:""
            }
        },
        created:function(){
            this.$http.get("../../service/daxue.json").then((res)=>{
               this.res=res.data;
            })
        },
        methods:{

        }

    }
</script>
<style>
    .box{
        width: 100%;
        height: 100%;
    }
    .tubiao{
        width: 120px;
        height: 120px;
        background:url("../../imgs/seal.png");
        background-size: 100% 100%;
        position: fixed;
        top:10px;
        right: 10px;
    }
    .tong{
        width: 86%;
        background: url("../../imgs/bg-matriculate.png")no-repeat;
        background-size: 100% 100%;
        height: 70%;
        margin: 40px auto;
    }

    .tong h1{
        text-align: center;
        padding-top:160px ;
        font-size: 26px;
        color: blue;
        font-weight: 600;
    }
    .tong p{
        margin-top: 6px;
        line-height: 26px;
    }
    .tong b{
        padding-left: 16px;
    }
    .left{
        width: 120px;
        height: 70px;
        background: url("../../imgs/btn-intr.png");
        background-size: 100% 100%;
        position: absolute;
        bottom:38%;
        left:10%
    }
    .right{
        width: 120px;
        height: 70px;
        background: url("../../imgs/btn-intr.png");
        background-size: 100% 100%;
        position: absolute;
        bottom:38%;
        right:18%
    }
</style>