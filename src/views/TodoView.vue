<template>
    <div>
        <input type="checkbox" :checked="completed">
        {{ todo.title }} - {{ todo.body }}
        <router-link :to="{ name: 'todos.edit', params: { id: todo.identify } }">Edit</router-link>
        <a href="#" @click.prevent="deleteTodo">Deletar</a>
    </div>
</template>

<script>
import TodoService from '@/services/todos.service'
import { computed } from 'vue'

export default {
    name: 'TodoView',
    props: {
        todo: {
            require: true,
            type: Object
        }
    },

    setup(props, { emit }) {

        const completed = computed(() => 
            props.todo.completed == 'S')


        const deleteTodo = () => {
            TodoService.deleteTodo(props.todo.identify)
                .then(() => emit('deleteTodoEmit', props.todo))
        }




        return {
            deleteTodo,
            completed

        }




    }


}
</script>