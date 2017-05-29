<template>
  <div class="home container">
    <div class="row">
      <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
       <h1>Itunes Music</h1>
      <Itunes class="itunes col-xs-9 iTunes"></Itunes>    
      <h1 class="myMusicTitle">Mytunes Music</h1>
      <Mytunes class="myMusicTitle my-tunes col-xs-3 my-Tunes"></Mytunes>
     
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
    min-height: 200px;
    background: purple;
  }

  .itunes {
    min-height: 500px;
    background: lime;
  }
</style>