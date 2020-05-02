const root = document.getElementById("root");

const todos = ["Go to market", "Buy food", "Make dinner"];

const reactLi = todos.map(todo => {
  return React.createElement("li", null, todo);
});

const Todos = React.createElement("ul", null, ...reactLi);

ReactDOM.render(Todos, root);
