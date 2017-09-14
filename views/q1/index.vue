<template>
   <div class="q1">
       <div class="topic_list">
           <!--题目-->
           <div class="topic">
               <div class="topic1">
                 第一题(共四题)
               </div>

               <div class="topic2">
                   <p>{{tit[ind1].title}}</p>
               </div>
           </div>

           <!--选项-->
            <div class="option">
                <!-- <答案-->
                <ul class="uls">
                    <li class="answer" @click="change_bg(0)" :class="{'selected_anwser':bg_list[0]}">
                        <span class="answer1 a"></span>
                        {{tit[ind1].answers[0]}}
                    </li>
                    <li class="answer" @click="change_bg(1)" :class="{'selected_anwser':bg_list[1]}">
                        <span class="answer1 b"></span>
                        {{tit[ind1].answers[1]}}
                    </li>
                    <li class="answer" @click="change_bg(2)" :class="{'selected_anwser':bg_list[2]}">
                        <span class="answer1 c"></span>
                        {{tit[ind1].answers[2]}}
                    </li>
                </ul>

            </div>
       </div>
   </div>
</template>
<script>
    export default {
            beforeMount:function(){
                if(this.$route.query.type==1){
                    this.$store.commit('get_type',"science")
                }
                if(this.$route.query.type==0){
                    this.$store.commit('get_type',"liberal")
                }
                this.tit= this.$store.getters.get_questions
                console.log(this.tit)

            },
            data:function(){
                return{
                    bg_list:[false,false,!0],
                    question_name:"",
                    tit:[],
                    ind1:0

                }
            },
        methods:{
            change_bg:function(ind){
                this.bg_list=[!1,!1,!1]
                this.bg_list[ind]=!0;
                this.ind1++;
                console.log(this.tit.length)
                if(this.ind1>=this.tit.length){
                        this.$router.push("/q2")
                }

            }

        }
    }
</script>
<style>
.q1{
    width: 100%;
    height: 100%;
}
.topic_list{
    width: 100%;
    height: 100%;

}
.topic{
    width: 100%;
    height: auto;

}
.topic1{
    width: 90%;
    height: 60px;
    margin: 0 auto;
    text-align: center;
    background: url("../../imgs/bg-qustion-top.png")no-repeat;
    background-size: 100% 60px;
    margin-top: 20px;
    line-height: 40px;
    color: #22c485;
    /*padding: 0 10px;*/
}
.topic2{
    width: 90%;
    height: auto;
    margin: 0 auto;
    background: url("../../imgs/bg-question-center.png")no-repeat center top;
    background-size: 100% 100%;
}
p{
    padding: 0 22px;
    line-height: 20px;
}
    .option{
        width: 80%;
        height: 70%;
        background: url("../../imgs/bg-question-bottom.png")no-repeat;
        background-size: 100% 100%;
        margin: 0 auto;
        padding: 20px 20px;
    }
    .uls{
        
    }
    .answer{
        height: 48px;
        background: url("../../imgs/btn-bg-select.png")no-repeat center top;
        background-size: 100% auto;
        margin-top: 10px;
        padding-left: 10px;
        line-height: 50px;
    }
.answer1{
        width: 48px;
        height: 48px;
        float: left;
    }
    .a{
        background: url("../../imgs/a.png")no-repeat center center;
        background-size: 60% auto;
    }
    .b{
        background: url("../../imgs/b.png")no-repeat center center;
        background-size: 60% auto;
    }
    .c{
        background: url("../../imgs/c.png")no-repeat center center;
        background-size: 60% auto;
    }
    .selected_anwser{
        background-position: 0 -51px;
    }
</style>