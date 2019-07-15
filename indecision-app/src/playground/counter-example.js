
class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: 0
    }
  }

  componentDidMount () {
    try {
      const json = localStorage.getItem('count')
      const counter = parseInt(json, 10)
      if (!isNaN(counter)) {
        this.setState(() => ({ count: counter }))
      }
    } catch (e) {

    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.count != this.state.count) {
      localStorage.setItem('count', this.state.count)
    }
  }

  handleAddOne () {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1

      }
    })
  }
  handleMinusOne () {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  handleReset () {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render () {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>

      </div>

    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))

// console.log('running')

// const userName = 'Andrea'
// const userAge = 29
// const userLocation = 'México'

// const titles = {
//   title: 'Indecision App',
//   subtitle: 'This is some info',
//   options: ['One', 'Two']
// }

// const user = {
//   nombre: 'Andrea',
//   age: '29',
//   location: 'Alemania'
// }

// const templateOne = (
//   <div>
//     {titles.title && <h1>{titles.title}</h1>}
//     {titles.subtitle && <h2>{titles.subtitle}</h2>}
//     <p>{titles.options.length > 0 ? titles.options : 'no options'}</p>
//   </div>

// )
// function getLocation (location) {
//   if (location) {
//     return <p>Location: {location}</p>
//   }
// }

// let template = (<div>

//   <h1>{ user.nombre ? user.nombre : 'no existe'}</h1>
//   {user.age >= 18 && <p>{user.age}</p>}
//   {getLocation(user.location)}
// </div>)

// let count = 0

// const addOne = () => {
//   count++
//   renderCountApp()
// }
// const minusOne = () => {
//   count--
//   renderCountApp()
// }

// const resetCount = () => {
//   count = 0
//   renderCountApp()
// }

// const root = document.getElementById('app')
// const renderCountApp = () => {
//   const templateTwo = (
//     <div>

//       <h1>Count : {count}</h1>
//       <button id='myId' className='button' onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={resetCount}> Reset</button>
//     </div>

//   )
//   ReactDOM.render(templateTwo, root)
// }
// renderCountApp()
