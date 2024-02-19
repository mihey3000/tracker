<template>
  <div>
    <div class="edit-group" v-if="!toEdit">
      <div class="counter">{{ index + 1 }}</div>

      <input
        type="checkbox"
        class="checkbox"
        v-model="todo.completed"
        id="checkbox1"
      />
      <label
        for="checkbox1"
        :class="{ done: todo.completed }"
        @click="toEdit = !toEdit"
      >
        {{ todo.title }}
      </label>
    </div>

    <div v-if="toEdit">
      <input type="text" v-model="titleField" />
      <button class="btn" @click="(todo.title = titleField), (toEdit = false)">
        Edit
      </button>
    </div>
    <div class="btn-container" @click="emit('removeTodo', todo.id)">
      <div class="btn-delete"><DeleteIcon /></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import DeleteIcon from "./DeleteIcon.vue";
export default {
  emits: ["removeTodo"],
  components: { DeleteIcon },
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
  },
  setup(props, { emit }) {
    const toEdit = ref(false);
    const titleField = ref(props.todo.title);

    return {
      toEdit,
      titleField,
      emit,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Sans&display=swap");

.counter {
  padding-right: 5px;
  color: grey;
}

span {
  font-family: "PT Sans", sans-serif;
  word-break: break-all;
  margin-bottom: 4px;
  cursor: pointer;
}

div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: white;
}

input {
  margin-right: 10px;
}

.checkbox {
  cursor: pointer;
}

.done {
  text-decoration: line-through;
}

.btn-container {
  height: 20px;
  cursor: pointer;
  opacity: 0.5;
}
</style>
