import * as React from 'react'
import axios from 'axios'

export interface Props {
    name: string
    enthusiasmLevel?: number
    onIncrement?: () => void;
    onDecrement?: () => void;
}

interface State {
    currentEnthusiasm: number;
    listJson: any
}

class Home extends React.Component<Props, State> {
    constructor(props: Props){
        super(props)
        this.state = { currentEnthusiasm: props.enthusiasmLevel || 1, listJson: [] }
    }

    componentWillMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            this.setState({ listJson: res.data })
        })
    }

    onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
    onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

    updateEnthusiasm(currentEnthusiasm: number) {
        this.setState({ currentEnthusiasm });
    }

    render() {
      const { name } = this.props;
  
      if (this.state.currentEnthusiasm <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
      }

  
      return (
        <div className="hello">
          <div className="greeting">
            Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
          </div>
            <button onClick={this.onDecrement}>-</button>
            <button onClick={this.onIncrement}>+</button>
            <ul>
                { this.state.listJson.map((listJson:any) => <li key={listJson.id}>{listJson.email}</li>)}
            </ul>
        </div>
      );
    }
  }


export default Home;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
  }