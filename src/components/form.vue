<template lang="">
    <div id="formSubmit">
        <el-card class="card-form">
         <el-form class="form-main" :model="formData" ref="addItemForm" :rules="rules">
              <el-form-item label="User Balance" prop="type">
    <el-select  placeholder="please select" v-model="formData.type" >
      <el-option label="INCOME" value="INCOME"></el-option>
      <el-option label="OUTCOME" value="OUTCOME"></el-option>
    </el-select>
              </el-form-item>
       
         <el-form-item label="Comments" prop="comment">
    <el-input v-model="formData.comment">
        
    </el-input>
          </el-form-item>   

               <el-form-item label="Value" prop="value">
    <el-input v-model.number="formData.value">
 
    </el-input>
             </el-form-item>  

           <el-button class="btn" @click="submitForm" type="submit">
               submit
               </el-button>
 
         </el-form>
        </el-card>
    </div>
</template>
<script>
export default {
  name: "formSubmit",
  data() { 
       let checkAge = (rule, value, callback) => {
           if(!value) {
               return callback(new Error("should not be zero"))
           }
           setTimeout(() => {
              if (!Number.isInteger(value)) {
              callback(new Error('must be a number'));
            } else {
              callback();
            }
          
        }, 100);
       }
      return {
         formData: {
              type: 'INCOME',
              value: 0,
              comment: ""
         },
         rules: {
             type: [{required: true, message: 'please select', trigger: "blur"}],
             comment: [{required: true, message: 'please input comment', trigger: 'change'}],
             value: [{required: true, message: 'not found', trigger: 'change'},
                     {type: 'number', validator: checkAge, trigger: 'blur'}]
         }
      }
  },
  methods: {
      submitForm() {
         this.$refs.addItemForm.validate((valid) => {
            if(valid) {
                this.$emit('ValidForm', {...this.formData})
                this.$refs.addItemForm.resetFields()
            }
         })
      }
  }
};
</script>
<style>
#formSubmit {
    max-width: 500px;
    margin: auto;
}
</style>