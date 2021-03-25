var root = new Vue({
  el: '#root',
  data: {
    inputText: '',
    todos: [
      {
        title: 'Fare la spesa',
      },
      {
        title: 'Allenamento calcetto',
      },
      {
        title: 'Leggere e-mail',
      },
      {
        title: 'Telefonare medico',
      },
      {
        title: 'Pagare bolletta',
      }
    ]
  },

  methods: {
    // ALL'ENTER SULL'INPUT CREO UN OGGETTO CHE HA COME TITLE L'INPUTTEXT E LO PUSHO NELL'ARRAY DI TODOS
    add: function () {
      let obj = {
        title: this.inputText
      }
      this.todos.push(obj);
    }
  }



})
