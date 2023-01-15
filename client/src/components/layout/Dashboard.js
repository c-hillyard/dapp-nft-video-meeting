import React from 'react'
import Admin from './admin'

const Dashboard = () => {
  const [test, setTest] = React.useState(false)

  React.useEffect(() => {
    setTest(true)
  }, [])
  
  if (test) {
    return (
      <Admin />
    )
  } else {
    return (
      <div>
        Test
      </div>
    )
  }
}

export default Dashboard