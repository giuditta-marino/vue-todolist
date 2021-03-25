var root = new Vue({
  el: '#root',
  data: {
    inputText: '',
    todos: [
      {
        title: 'Fare la spesa',
        status: 'done'
      },
      {
        title: 'Allenamento calcetto',
        status: 'todo'
      },
      {
        title: 'Leggere e-mail',
        status: 'todo'
      },
      {
        title: 'Telefonare medico',
        status: 'todo'
      },
      {
        title: 'Pagare bolletta',
        status: 'todo'
      }
    ]
  },

  methods: {
    // ALL'ENTER SULL'INPUT CREO UN OGGETTO CHE HA COME TITLE L'INPUTTEXT E LO PUSHO NELL'ARRAY DI TODOS
    add: function () {
      let obj = {
        title: this.inputText,
        status: 'todo'
      }
      this.todos.push(obj);
      this.inputText = '';
    }
  }



})
