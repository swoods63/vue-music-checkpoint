<template>
  <div class="home container">
    <div class="row">
      <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
       <h1>Itunes Music</h1>
      <Itunes class="itunes col-xs-7 iTunes"></Itunes>    
     <h1 class="myMusicTitle">Mytunes Music</h1>
      <Mytunes class="mytunes w3-col-xs-5 my-Tunes"></Mytunes>
     
    </div>
  </div>  
</template>

<script>
  import Itunes from '@/components/Itunes'
  import Mytunes from '@/components/Mytunes'

  export default {
  name: 'home',
  data(){
    return {
    }
  },
  components: {
      Mytunes,
      Itunes
  }
}


$(function () {
    $("audio").on("play", function () {
      $("audio").not(this).each(function (index, audio) {
        audio.pause();
      });
    });
  });

</script>


<style>
  .mytunes {
    min-height: 500px;
    background: purple;
  }

  .itunes {
    min-height: 500px;
    background: lime;
  }
</style>