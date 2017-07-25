<template>
  <div>
    <p class="page-no" v-show="tips!=''">
      {{tips}}
    </p>
    <p class="clock" v-show="clock!=''">
      {{clock}}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clock: '',
      seconds: 0
    }
  },
  computed: {
    tips: {
      get() {
        return this.$store.state.tips;
      },
      set(val) {
        this.$store.commit('setTips', val);
      }
    }
  },
  methods: {
    timeInterval() {
      let curInterval = setInterval(() => {
        this.seconds++;
        this.setClock();
      }, 1000);
    },
    calcTime() {
      let hour = Math.floor(this.seconds / 3600);
      hour = hour % 24;
      let minutes = Math.floor(this.seconds % 3600 / 60);
      let seconds = Math.floor(this.seconds % 60);
      let mmss = `${(minutes > 9 ? '' : '0') + minutes}:${(seconds > 9 ? '' : '0') + seconds}`;
      if (hour > 0) {
        return `${(hour > 9 ? '' : '0') + hour}:${mmss}`;
      }
      return mmss;
    },
    setClock() {
      this.clock = this.calcTime();
    }
  },
  created() {
    this.timeInterval();
  }
};
</script>