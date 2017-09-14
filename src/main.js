import Vue from 'vue';
import App from './App.vue';
import axios from "../js/axios.js"
import router from "../router/index";
import vuex from "../js/vuex";

//import store from "../store/store.js";

//ajax请求挂载到 Vue原型上
Vue.prototype.$http=axios;
Vue.use(vuex)
let store=new vuex.Store({
  state:{
    question:null,
    type:null,
    selected_question:[]
  },
  mutations:{
    set_question:function(state,data){
      state.question=data
    },
    get_type:function(state,type){

      state.type=type
    },
    set_selected_question:function(){


}
  },
  actions:{
    get_question:function({commit},data){
      commit("set_question",data)
    }
  },
  getters:{
    get_questions:function(state,type){
        let arr=[]
      function getfrom(arr){//取值
        let tmp_arr=[];
        for(let i=0;i<4;i++){
          let tmp=random(0,arr.length);
          if(tmp_arr.indexOf(tmp)==-1){
            tmp_arr.push(tmp)
          }else{
            i--;
          }
        }
        return [arr[tmp_arr[0]],arr[tmp_arr[1]],arr[tmp_arr[2]],arr[tmp_arr[3]]];
      }
      function random(min,max){//随机数
        return Math.floor(Math.random()*max-min)
      }
        if(state.type=="liberal"){
          for(let obj in state.question.data){
            if(state.question.data[obj].type!==1){
              arr.push(state.question.data[obj])
            }

          }
        }
          if(state.type=="science"){
            for(let obj in state.question.data){
              if(state.question.data[obj].type==1 || state.question.data[obj].type==2){
                //console.log(state.question.data[obj].title)
                arr.push(state.question.data[obj])
              }
            }
          }
      console.log(getfrom(arr));
      return getfrom(arr)
    }
  }
})
new Vue({
  el: '#app',
  store:store,
  beforeCreate:function(){
    this.$http.get("../service/question.json").then((res)=>{
      this.$store.dispatch("get_question",res)
    })

  },
  router:router,
  render: h => h(App)
})
