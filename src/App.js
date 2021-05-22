import React, { useState } from 'react'
import FilterButton from './components/FilterButton.js'
import AddButton from './components/AddButton.js'
import NumberInput from './components/NumberInput.js'
import NameInput from './components/NameInput.js'

const Persons = (props) => {
  return (
      <p><strong>{props.name} says:</strong> {props.number}</p>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([{ name: 'Davitt Barry', number: 'Welcome to the chat! Leave a message.', }]) 
  const [ newName, setNewName ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    return
  }
  const handleFilter = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
    return
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
    return
  }

  const addPerson = (event) => {
    console.log('testi', event.target)
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      id: persons.length + 1,
    }
    if (
      personsAlreadyExists(newName)) {
        window.alert(newName + ' is already added to phonebook'
        );
        const personCopy = {
          name: persons,
          newName: ''
        }
        setPersons(persons.splice(personCopy))
        return personCopy
      }
    
    setPersons(persons.concat(personObject))
    setNewName('')
    return personObject
  }

  const personsAlreadyExists = (name) => {
    return persons.find(person => person.name === name)
}
  
  return (
    <div>
      <h2>Live Chat</h2>
      <form onSubmit={addPerson}>
        <NameInput  onChange={handlePersonChange} value={newName}/>
        <NumberInput onChange={handleNumberChange} value={newNumber}/>   
        <div>
          <AddButton />
        </div>
      </form>
      <form>
        <div>
          <div>
            Filter with: <input onChange={handleFilter} value={newFilter}/>
          </div>
          <FilterButton />
        </div>
      </form>
      <h2>Messages</h2> 
        <div>
         {persons.map(person => <Persons key={person.name} name={person.name} number={person.number} /> )} 
        </div>
    </div>
  )
}

export default App
