
class VisibilityToogle extends React.Component {
  constructor (props) {
    super(props)
    this.changeState = this.changeState.bind(this)
    this.state = {
      showDetails: false

    }
  }

  changeState () {
    this.setState((prev) => {
      return {
        showDetails: !prev.showDetails
      }
    })
  }

  render () {
    return (
      <div>
        <h1>Visibility Toggle</h1>

        <button onClick={this.changeState}> {this.state.showDetails ? 'hide details' : 'show Details'}</button>
        {this.state.showDetails && (
          <div>
            <p>This are details yo can now see</p>
          </div>

        )

        }
      </div>

    )
  }
}

ReactDOM.render(<VisibilityToogle />, document.getElementById('app'))
