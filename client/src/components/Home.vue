<template>
  <div class="container">
    <div class="create-task">
      <div class="form-group col-md-8">
        <label for="inputEmail4">Create a Task</label>
        <v-text-field
          type="text"
          name="tname"
          id="taskname"
          v-model="task"
          placeholder="Post a Task..."
          required
        ></v-text-field>
        <v-btn @click="submit" class="btn btn-primary">Send</v-btn>
    
      </div>
    </div>
    <div class="list" v-for="t  in tasks" :item="t" :key="t.id">
      <div class="items">
        <v-flex>
          <p>{{`${t.created_at.getDate()}/${t.created_at.getMonth()}/${t.created_at.getFullYear()}`}}</p>
          <p>{{t.task}}</p>
        </v-flex>
      </div>
    </div>
  </div>
</template>
<script>
import TaskService from "../service";
export default {
  name: "Home",
  data() {
    return {
      tasks: [],
      task: "",
      error: ""
    };
  },
  mounted() {
    this.requestData();
  },
  methods: {
    async requestData() {
      try {
        this.tasks = await TaskService.getData();
        console.log(tasks);
      } catch (err) {
        this.error = err.message;
      }
    },
    async submit(){
        await TaskService.createTask(this.task)
    }
  }
};
</script>
<style scoped>
.container {
  max-width: 800px;
  margin-top: 15px;
  margin: 0 auto;
  padding: 7rem;
  text-align: center;
}
.items {
  background-color: limegreen;
}
</style>
