<template>
    <div>
        <h1>Editar Tarefa</h1>
        <form method="post" action="#" @submit.prevent="editTodo">
            <input type="text" name="title" placeholder="Title" v-model="todo.name">
            <input type="text" name="description" placeholder="Description" v-model="todo.description">
            <button type="submit" :disabled="todo.loading">
                <span v-if="todo.loading">Enviando</span>
                <span v-else>Enviar</span>
            </button>
            
        </form>
    </div>
</template>

<script>

import { onMounted, reactive} from 'vue'
import TodosService from '@/services/todos.service'
import router from '@/router'

export default {
    name: 'EditTodoView',

    props: {
        id: {
            required: true
        }
    },

    setup(props) {
        const todo = reactive({
            name: '',
            description: '',
            completed: false,
            loading: false
        })

        onMounted(async () => {
            TodosService.getTodo(props.id)
            .then(response =>{
                const todoR = response.data.data
                todo.name = todoR.title
                todo.description = todoR.body
                console.log(todoR)

            })

        })
    
        const editTodo = () => {
            todo.loading = true

            console.log(todo.name); // Valor do campo "name"
            console.log(todo.description); // Valor do campo "description"
            TodosService.editTodo(props.id,{...todo})
            .then(() => router.push({ name: 'todos.index' })
            .finally(todo.loading = false))
        }
        return {
            editTodo,
            todo
        }

    }
}
</script>