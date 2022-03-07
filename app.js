class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    };

    return (
      <ul>
        <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item[0]}</li>
        <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item[1]}</li>
        <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item[2]}</li>
      </ul>

    );
  }
}

var GroceryList = (props) => (
    <ul>
      {props.item.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
);

var App = () => (
    <div>
      <h2>My Todo List</h2>
      <GroceryListItem item={['spaghetti', 'tomato paste', 'anchovies']}/>
    </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);