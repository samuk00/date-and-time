import { useState, useEffect } from 'react'

const App = () => {

  const [today, setDate] = useState(new Date())

  const day = today.toLocaleDateString('en', { weekday: 'long' })
  const month = today.getMonth() + 1
  const date = `${day}, ${month}-${today.getDate()}-${today.getFullYear()}`
  const time = `${today.toLocaleTimeString('en')}`

  useEffect(() => {
    setInterval(() => {
      setDate(new Date())
    }, 1000)
  }, [])

  return (
    <div className='container'>
      <p>{date}</p>
      <p>{time}</p>
    </div>
  );
}

export default App;
