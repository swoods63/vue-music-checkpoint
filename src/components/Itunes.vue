
<template>
    <div class="itunes">
    <div class="row">
      <div class="col-xs-12">
      <form class="form-inline" @submit.prevent="search">
          <div class="form-group">
            <input type="text" class="form-control" v-model="artist" placeholder="Artist Name" />
            <button type="submit" class="btn btn-primary" id="get-music-button">Get Music</button>
          </div>
        </form>
      </div>
    </div>
     
<hr/>
      <!--SONGS ADDED DYNAMICALLY HERE-->
      <div v-for="song in songs" :key="song.trackId">
          <div class="row">
            <div class="col-xs-2"><img :src="song.artworkUrl60">
            </div>
            <div class="col-xs-2">
              <p>{{song.artistName}}</p>
               <p>{{song.primaryGenreName}}</p>
            </div>
            <div class="col-xs-4">
              <p>{{song.trackName}}</p>
               <p>{{song.collectionName}}</p>
            </div>
            <div class="col-xs-2">
             <button class="btn btn-primary btn-large" @click='addSong(song)'><i class="glyphicon glyphicon-plus"></i></button>
             
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
</template>


<script>
  import itunesService from "../services/itunes-service"
  import mytunesService from "../services/mytunes-service"

  export default {
    name: 'itunes',
    data() {
      return {
        songs: [],
        artist: ''
      }
    },
    computed: {},
    methods: {
      search() {
        itunesService.getMusicByArtist(this.artist).then(res => {
          let resObj = JSON.parse(res)
          this.songs = resObj.results
       
        })
      },
      addSong(song) {
        mytunesService.addTrack(song)
      }
    }
  }

</script>

<style scoped>

</style>