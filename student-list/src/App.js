import { useState } from 'react';
import './App.css';

function App() {

  const [myList, setMyList] = useState([
    {
      id: 1,
      name: 'Aseem',
      age: '27'
    },
    {
      id: 2,
      name: 'Alisha',
      age: '28'
    },
    {
      id: 3,
      name: 'Ronit',
      age: '28'
    }
  ])

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  function handleDelete(id) {

    setMyList(
      myList.filter((item) => item.id !== id))
  };

  // console.log(name, age)
  function handleSubmit(e) {
    //let newList = [...myList, {id:myList.length+1,name:name,age:age}]
    let newList = [...myList]
    newList.push({ id: myList.length + 1, name: name, age: age })
    setMyList(newList)
    setName('')
    setAge('')

    e.preventDefault()
    
  }
  return (
    <div className="App">
      <h1>Student List</h1>
      <div className="container">
        <div className="student-table">
          <table style={{ width: '80%' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                myList.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td><input type="button" className="btn" value='Delete' onClick={() => { handleDelete(item.id) }}></input></td>
                    </tr>)
                })
              }
            </tbody>
          </table>
        </div>
        <div className="add-form">
          <form onSubmit={handleSubmit}>
            <h3>Enter Student Details</h3><br />
            <strong>Name:</strong><br /><input type="text" name="name" id="name" value={name} onChange={(e) => { setName(e.target.value) }} /><br />
            <strong>Age:</strong><br /><input type="text" name="age" id="age" value={age} onChange={(e) => { setAge(e.target.value) }} /><br />
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;