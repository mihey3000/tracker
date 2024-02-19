<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <button type="submit" class="btn">Create</button>
  </form>
</template>

<script>
import { computed, ref } from "vue";
export default {
  setup(props, { emit }) {
    const title = ref("");

    function onSubmit() {
      if (title.value.trim()) {
        const newTodo = {
          id: Date.now(),
          title: title.value,
          completed: false,
        };
        emit("add-todo", newTodo);
        title.value = "";
      }
    }

    return { title, onSubmit };
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  justify-content: space-evenly;
}

input {
  width: 370px;
}
</style>
