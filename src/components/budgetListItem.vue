<template lang="">
    <div id="listItem">
        <div  class="btn-sort">
           <el-button size="medium" type="info" round @click="sortIncome('INCOME')">INCOME</el-button>
           <el-button size="medium" type="info" round @click="sortIncome('OUTCOME')">OUTCOME</el-button>
           <el-button size="medium" type="info" round @click="sortIncome('All')" >All</el-button>
        </div>
   <div class="card-content" v-for="(elem, name) in budgetList" :key="name">
          <i v-if="elem.value > 0" class='el-icon-top icon'></i>
          <i v-else class='el-icon-bottom icon'></i>
          <span class="budget-comment" >{{elem.comment}}</span>
          <span class="budget-value" :style="{color: elem.value > 0 ? 'green' : 'red' }">{{elem.value}}</span>
          <el-button type="danger"  @click="dialogVisible = true">remove</el-button>

             <el-dialog
  title="Tips"
  :visible.sync="dialogVisible"
  width="26%"
  :before-close="handleClose">
  <span>Are you sure to close</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button class="btn"  @click="deliteProduct(name)" type="danger">
            Confirm
         </el-button>
  </span>
</el-dialog>
          </div>
      
    

    </div>
     
</template>
<script>
export default {
  name: "ListItem",
  components: {},
  data() {
    return {
      dialogVisible: false,
    };
  },
  props: {
    budgetList: {
      type: [Object, Array],
      default() {
        return {};
      },
    },
  },
  methods: {
    deliteProduct(name) {
      this.dialogVisible = false;
      return this.$emit("deliteProduct", name);
    },
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    sortIncome(type) {
      return this.$emit("sortIncome", type);
    },
  },
};
</script>
<style>
.el-icon-close:before {
  display: none;
}
.icon {
  margin-right: 10px;
}
.btn-sort {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>