import { createRouter, createWebHistory } from 'vue-router'
import TodosView from '../views/TodosView.vue'
import HomeView from '../views/HomeView.vue'
import AddTodoView from '../views/AddTodoView'
import EditTodoView from '../views/EditTodoView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todos',
    name: 'todos.index',
    component: TodosView
  },
  {
    path: '/todos/create',
    name: 'todos.create',
    component: AddTodoView
  },
  {
    path: '/todos/:id/edit',
    name: 'todos.edit',
    component: EditTodoView,
    props: true
  }


  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
