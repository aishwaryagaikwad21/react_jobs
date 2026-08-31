import React from 'react'

const App = () => {
  //can write JavaScript here
  const name = 'John'
  const x = 20
  const y = 30
  const names = ['Jane', 'John', 'Sara', 'Mary']
  const loggedIn = true
  const styles = {
    color: 'red',
    fontSize: '55px'
  }


  return (
     <div> // OR can use <></>
        <div className='text-5xl'>App</div>
        <p style={styles}>Hello { name }</p>
        <p>
          The sum of {x} and {y} is { x + y }
        </p>
        <ul>
          {names.map((name, index) => {
            return <li key={index}>{ name }</li>  
          })}
        </ul>

        {/* { loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1> }  */}
        {loggedIn && <h1>Hello Member</h1>}
    </div>
    // <p>Hello</p> --> this will give error because only 1 element has to be returned as we are returning div and p element -> to avoid this wrap it into single element
  )
}

export default App