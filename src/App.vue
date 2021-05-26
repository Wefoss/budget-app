<template>
  <div id="app">
    <formSubmit @ValidForm="addToObject" />
    <balance :total="totalBalance" />
    <budget
      :budgetList="subList"
      @deliteProduct="deliteProduct"
      @sortIncome="sortIncome"
    />
  </div>
</template>
{
<script>
import Budget from "./components/budget";
import formSubmit from "./components/form";
import Balance from "./components/balance";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Budget,
    formSubmit,
    Balance,
  },
  data() {
    return {
      subList: {},
      Includesroperty: true,
    };
  },
  computed: {
   
    totalBalance() {
      return Object.values(this.GET_LIST).reduce(
        (acc, el) => acc + el.value,
        0
      );
    },
    ...mapGetters(["GET_LIST"]),
  },
  created() {
    this.subList = this.GET_LIST;
  },

  watch: {
    "this.GET_LIST": "this.getValueProperty",
  },
  methods: {
    ...mapActions(["ADD_LIST", "DELITE_LIST"]),

    deliteProduct(name) {
      this.DELITE_LIST(name);
    },
    addToObject(data) {
      this.ADD_LIST(data);
    },
    sortIncome(type) {
      if (type === "All") {
        return (this.subList = this.GET_LIST);
      }
      const newObj = Object.values(this.GET_LIST)
        .filter((el) => el.type === type)
        .reduce((acc, el) => {
          acc[el.id] = el;
          return acc;
        }, {});

      return this.subList = newObj
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
