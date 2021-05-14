<template lang="">
    <div id="budget">
      
      <el-card class="box-card" :header="cardHeader">
        <template v-if="budgetListLength">
         
         <listItem :budgetList="budgetList"
                   @deliteProduct="deliteProduct"
                   @sortIncome="sortIncome"
                   
          />  
        </template>
        <el-alert v-else  type="info" :title="emptyTitle"></el-alert>
      </el-card>
     
   
    </div>
</template>
<script>
import ListItem from './budgetListItem'

export default {
  name: "Budget",
  components: {
    ListItem
  },
  data() {
    return {
      cardHeader: "Card Item",
      emptyTitle: 'Empty list'
    };
  },
  props: {
    budgetList: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
   budgetListLength () {
       return  Object.keys(this.budgetList).length;
    },
  },
 methods: {
    deliteProduct(name) {
      return this.$emit('deliteProduct', name)
    },
    sortIncome(type) {
    return this.$emit('sortIncome', type)
    },
   
  }
};
</script>
<style>
#budget {
  max-width: 500px;
  margin: auto;
}

.card-content {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.budget-value {
  margin-left: auto;
  margin-right: 15px;
  font-weight: bold;
}
</style>