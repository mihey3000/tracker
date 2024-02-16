<template>
  <div class="tracker">
    <AddTodo @addTodo="AddTodo" />
    <Divider />
    <ul class="list">
      <li v-for="(todo, i) in todos" :key="i">
        <TaskItem :todo="todo" @removeTodo="removeTodo" :index="i" />
      </li>
    </ul>
  </div>
</template>

<script>
import Divider from "./Divider.vue";
import TaskItem from "./TaskItem.vue";
import AddTodo from "./AddTodo.vue";
import { ref } from "vue";

export default {
  name: "MyTaskTracker",
  components: {
    TaskItem,
    AddTodo,
    Divider,
  },
  setup() {
    const todos = ref([]);

    function removeTodo(id) {
      todos.value = todos.value.filter((t) => t.id !== id);
    }

    function AddTodo(todo) {
      todos.value.push(todo);
    }

    return {
      todos,
      removeTodo,
      AddTodo,
    };
  },
};
</script>

<style lang="scss" scoped>
.tracker {
  margin-bottom: 20px;
}
.list {
  margin: 0;
  list-style: none;
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
  margin-right: 20px;
  border: 1px solid white;
  border-radius: 5px;
}
</style>
