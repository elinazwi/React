import './App.css'
import Card from './components/pages/Card'

function App() {
  const people = [
    { name: "Elina", description: "Student" },
    { name: "John", description: "Developer" },
    { name: "Sarah", description: "Designer" },
    { name: "Mike", description: "Engineer" }
  ]

  return (
    <div className='grid grid-cols-4 gap-2'>
      {people.map((person, index) => (
        <Card 
          key={index} 
          name={person.name} 
          description={person.description} 
        />
      ))}
      <div className='bg-green-300'>hello</div>
    </div>
  )
}

export default App
