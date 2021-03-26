var root = new Vue({
  el: '#root',
  data: {
    inputText: '',
    todos: [
      // {
      //   title: 'Fare la spesa',
      //   status: 'done'
      // },
      // {
      //   title: 'Allenamento calcetto',
      //   status: 'todo'
      // },
      // {
      //   title: 'Leggere e-mail',
      //   status: 'todo'
      // },
      // {
      //   title: 'Telefonare medico',
      //   status: 'todo'
      // },
      // {
      //   title: 'Pagare bolletta',
      //   status: 'todo'
      // }
    ]
  },

  computed: {
    todosComputed: function() {
      let todosTodo = this.todos.filter((todo) => todo.status == 'todo');
      let todosDone = this.todos.filter((todo) => todo.status == 'done');

      return [...todosTodo, ...todosDone];
    }
  },

  methods: {
    // ALL'ENTER SULL'INPUT CREO UN OGGETTO CHE HA COME TITLE L'INPUTTEXT E LO PUSHO NELL'ARRAY DI TODOS, DOPO ASSEGNO STRINGA VUOTA AL VALUE INPUTTEXT
    add: function () {
      if (this.inputText != '') {
        let obj = {
          title: this.inputText,
          status: 'todo'
        }
        this.todos.push(obj);
        this.inputText = '';
      }
    },

    // AL CHECK PER OGNI TODO IN todosComputed
    check: function(todo) {
      let index = this.todos.indexOf(todo);
      this.todos[index].status = 'done';

      console.log(this.todos.indexOf(todo));
      console.log(this.todosComputed.indexOf(todo));
    },

    remove: function(todo) {
      let index = this.todos.indexOf(todo);

      this.todos.splice(index, 1);
    }

  }



});
