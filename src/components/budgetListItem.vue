<template >
  <div id="listItem">
    <div class="card-content" >
      <i v-if="list.value > 0" class="el-icon-top icon"></i>
      <i v-else class="el-icon-bottom icon"></i>
      <span class="budget-comment">{{ list.comment }}</span>
      <span
        class="budget-value"
        :style="{ color: list.value > 0 ? 'green' : 'red' }"
        >{{ list.value }}</span
      >
      <el-button type="danger" @click="dialogVisible = true">remove</el-button>

      <el-dialog
        title="Tips"
        :visible.sync="dialogVisible"
        width="26%"
        :before-close="handleClose"
      >
        <span>Are you sure to close</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button class="btn" @click="deliteProduct(list.id)" type="danger">
            Confirm
          </el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "ListItem",
  components: {},
  data() {
    return {
      dialogVisible: false,
    };
  },
  props: {
    list: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deliteProduct(id) {
      this.dialogVisible = false;
      console.log(this.list);
      this.$emit("deliteProduct", id);
    },
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
   
    },
  computed: {
    ...mapGetters(["GET_LIST"]),
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