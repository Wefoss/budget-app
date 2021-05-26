<template >
    <div id="budget">
      
      <el-card class="box-card" :header="cardHeader">
         <div  class="btn-sort">
           <el-button  class="btn-income" size="medium" type="info" round @click="sortIncome('INCOME')">INCOME</el-button>
           <el-button  size="medium" type="info" round @click="sortIncome('OUTCOME')">OUTCOME</el-button>
           <el-button size="medium" type="info" round @click="sortIncome('All')" >All</el-button>
        </div>
        <template v-if="budgetListLength">
         
       
              <div v-for="(list, prop) in budgetList" :key="prop" class="listItem">
                 <listItem  :list="list"
                   @deliteProduct="deliteProduct"
          />  
              </div>
        
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
       this.$emit('deliteProduct', name)
    },
    sortIncome(type) {
     this.$emit('sortIncome', type)
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