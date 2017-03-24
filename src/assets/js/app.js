$(document).foundation();

Vue.component('message', {

  props: ['title', 'body'],

  data() {
    return {
      isVisible: true
    };
  },

  template: '<div class="card" v-show="isVisible"><div class="card-divider"> {{title}} <button type="button" @click="isVisible = false">x</button> </div><div class="card-section">{{ body }}</div></div>'

});

new Vue({

  el: '#root'

});
