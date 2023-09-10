<template>
    <div>
        <h1>Adicionar Nova Tarefa</h1>
        <form method="post" action="#" @submit.prevent="addTodo">
            <input type="text" name="title" placeholder="Title" v-model="name">
            <input type="text" name="description" placeholder="Description" v-model="description">
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>

import { ref } from 'vue'
import TodosService from '@/services/todos.service'
import router from '@/router'

export default {
    name: 'AddTodoView',
    setup() {
        const name = ref('')
        const description = ref('')

        const addTodo = () => {
            const params = {
                name: name.value,
                description: description.value,
                completed: false
            }
            TodosService.addTodo(params)
                .then(() => router.push({ name: 'todos.index' }))
        }
        return {
            addTodo,
            name,
            description
        }

    }
}
</script>