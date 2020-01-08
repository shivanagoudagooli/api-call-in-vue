<template>
<div>
    <div v-for="id in res" v-bind:key="id">
      <child-name :set="id"/>
    </div>
  
</div>
</template>
<script>
import Child from './SingleImage.vue'
export default {
    components:{
      'child-name':Child
    },
    data(){
      return{
        res:"",
      }
    },
    mounted(){
        fetch('http://www.splashbase.co/api/v1/images/latest')
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          this.res = myJson;
          /*eslint-disable*/
          console.log(myJson)
        });
    }
}
</script>
<style lang="less" scoped>

</style>