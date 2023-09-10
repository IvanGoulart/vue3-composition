
<template>
  <div style="text-align: left;">
    <h1>
      Lista de Tarefas
      <router-link :to="{ name: 'todos.create' }"> + </router-link>
    </h1>

    <div v-if="loading">
      <h4>Carregando informações</h4>
    </div>
    <ul>
      <li v-for="todo in todos" :key="todo.identify">

        <TodoView :todo="todo" @deleteTodoEmit="removeTodoList"></TodoView>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import TodosService from '@/services/todos.service'
import TodoView from './TodoView.vue'


export default {
  name: 'TodosView',
  setup() {

    const todos = ref([])
    const loading = ref(false);

    onMounted(() => {
      loading.value = true;

      TodosService.getAll()
        .then(response => {
          todos.value = response.data.data;
          console.log(response.data);
        })
        .catch(error => console.log(error))
        .finally(() => {
          loading.value = false;
        });
    })
    const removeTodoList = (todo) => {
      const index = todos.value.indexOf(todo);
      if (index !== -1) {
        todos.value.splice(index, 1);
      }
    }

    return {
      todos,
      loading,
      removeTodoList
    }
  }, components: {
    TodoView
  }
}
</script>
