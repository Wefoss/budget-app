<template>
  <div id="balance">
    <span class="total-balance" :style="{color: valueColor()}">Balance: {{ total }}</span>
  </div>
</template>
<script>
export default {
  name: "Balance",
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      valueColor: function () {
         let color = ''
        if(this.total > 0) {
          color = 'green'
        } else if(this.total === 0) {
          color = 'black'
        }else color = 'red'
        return color
      }
    }
  },
 watch: {
   changeColor() {
    
   }
 }
};
</script>
<style >
#balance {
 padding: 15px;
 font-weight: bold;
}

.colorChange {
  color: green;
}

</style>