<template>


  <div class="component">
    <div class="container">
      <div class="row" v-for="song in songs" :key="song.trackId">
        <div class="row">
          <div class=" delete col-xs-1"><img :src="song.artworkUrl60">
            <button @click="removeTrack(song)">X</button>
          </div>
          <div class="col-xs-1">
            <p>{{song.artistName}}</p>
            <p>{{song.primaryGenreName}}</p>
          </div>

          <div class="col-xs-2">
            <p>{{song.trackName}}</p>
            <button class="btn btn-default btn-sm" @click="promoteTrack(song)">
          <span class="glyphicon glyphicon-arrow-up"></span>
          </button>

        <button class="btn btn-default btn-sm" @click="demoteTrack(song)">
          <span class="glyphicon glyphicon-arrow-down"></span>
          </button>
          </div>

          <div class="col-xs-2">
          </div>
        </div>

        <div class="row">
          <div class="col-xs-4">
          </div>
          <div class="col-xs-12">
            <audio controls>
              <source :src="song.previewUrl" type="audio/ogg">
            </audio>


          </div>
        </div>
      </div>
    </div>
  </div>


  <!----------------------------------------------------------->
  <!--<div class="component">
    <div class="container">
      <div class="row" v-for="song in songs" :key="song.trackId">
        <div class="row">
        <div class="col-xs-2">
          <img :src="song.artworkUrl60"></div>
        <div class="col-xs-3">
          <p>{{song.artistName}}</p>
          <p>{{song.trackId}}</p>
        <div class="col-xs-1">
          <p>{{song.trackName}}</p>
        </div>
        </div>
    <div class="col-xs-1">
      <audio controls>
        <source :src="song.previewUrl" type="audio/ogg">
      </audio>
      <div class="row">

        <button @click="removeTrack(song)">X</button>
        <br>
        <button class="btn btn-default btn-sm" @click="promoteTrack(song)">
          <span class="glyphicon glyphicon-arrow-up"></span>
          </button>

        <button class="btn btn-default btn-sm" @click="demoteTrack(song)">
          <span class="glyphicon glyphicon-arrow-down"></span>
          </button>

      </div>

    </div>
  </div>

  </div>

  </div>-->

</template>


<script>
  import mytunesService from "../services/mytunes-service"

  export default {
    name: 'mytunes',
    data() {
      return {
        songs: mytunesService.getTracks()
      }
    },
    // computed: {},
    methods: {
      removeTrack(song) {
        mytunesService.removeTrack(song);
      },
      promoteTrack(song) {
        this.songs = mytunesService.promoteTrack(song);
        console.log("promote")
      },
      demoteTrack(song) {
        mytunesService.demoteTrack(song);
        this.songs = mytunesService.getTracks()
        console.log("demote")
      },
      addSong(event) {
        var song = JSON.parse(event.dataTransfer.getData('text/javascript'));
        myTunesService.addTrack(song);
      }
    }
  }

</script>


<style scoped>
.delete {
  color: black;
}

 
 
</style>