<template>
  <div id="app">
    <headerr/>
    <div class="blocks">
        <left-side/>
        <center-side/>
        <right-side/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {

    }
  }
} 
</script>


<style>
#app{
  padding: 0;
  margin:0 90px;
  box-sizing: border-box;
}
body{
  margin: 0;
}
.blocks{
  display: flex;
}

</style>
