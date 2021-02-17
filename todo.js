
var app = new Vue({
    el:'#app',
    data:{
        Todos:[
            {title:'Learn Django', status:false, edit:false},
            {title:'Learn Golang', status:false, edit:false}
        ],
        newTodo:{title:'', status:false, edit:false}
    },
    methods: {
        addTodo(){
            if(this.newTodo.title != ''){
            this.Todos.push(this.newTodo)
            this.newTodo = {title: '', status:false};
        }
        },
        removeTodo(index){
            this.Todos.splice(index, 1)
        },
        doneTodo(index){
            this.Todos[index].status = !this.Todos[index].status
        },
        editTodo(index){
            this.Todos[index].edit = !this.Todos[index].edit
        }
    },
})