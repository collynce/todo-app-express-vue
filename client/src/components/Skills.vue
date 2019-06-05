<template>
  <div class="hello">
    <div class="holder">

      <form @submit.prevent="addSkill">
        <input type="text" placeholder="Enter a skill you have..." v-model="skill" v-validate="'min:5'" name="skill">
        <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
      </form>
      
      <ul>
        <li v-for="(data, index) in skills" :key='index'>{{data.skill}}</li>
      </ul>
      <p>You have these skills</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data(){
    return{
      skill: '',
      skills: [
        {"skill": "Vue.js"},
        {"skill": "Web Development"}
      ],

    }
  },
  methods: {
    addSkill() {
      this.$validator.validateAll().then((result)=>{
        if (result){
          this.skills.push({skill: this.skill})
          this.skill = '';
        }else {
          console.log('Invalid');
        }
      })
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.holder {
  background: #fff;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}
p {
  color: gray;
  padding: 30px 0;
  text-align: center;
}
.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
body{
  background-color: #eeeeee;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
  width: 50%;
}
</style>
