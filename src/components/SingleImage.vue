<template>
    <div>
        <h2>images<h2>
        <div id="main">
             <div v-bind:key="i" v-for="i in set" >
                 <img :src="i.url"  width="100px" height="60px" />
                 <p>{{i.id}}</p>
             </div>
               
        </div>
    </div>
</template>
<script>
export default {
    props:["set"],
    data(){
        return{
            id:"",
            url:""
        }
    },
   
}
</script>
<style scoped>
#main {
  width: 100%;
  height: 100%;
  border: 1px solid #c3c3c3;
  display: -webkit-flex; /* Safari */
  -webkit-flex-wrap: wrap; /* Safari 6.1+ */
  display: flex;
  flex-wrap: wrap;
}

#main div {
    margin: 25px;
  width:100px;
  height:150px;
}

</style>