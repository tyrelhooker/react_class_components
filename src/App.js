import React from 'react';
import './App.css';

function App() {
  // const myGreetings = [
  //   {
  //     normal: 'Hello Function Component', 
  //     happy: 'HELLO!!!!! Function Component',
  //     sad: '...hellooo, function compooonent'
  //   }
  // ];

  const getDummyData = (count = 5) => {
    fetch(`https://api.randomuser.me/?nat=US&results=${count}`)
    .then(response => response.json())
    .then(data => {
      const myData = data;
      console.log(myData);
      // return myData
      return (

       
        <p>
          {myData}
        </p>
      )
    })
    .catch(err => console.error(`There has been an error with your fetch operation ${err.message}`))
  }
  
  console.log(getDummyData(10));

  return (getDummyData(10))

}
  
// const Headline = ({ dummyData }) => {
//   console.log({dummyData})
//   return (
//     dummyData.map(items => 
//       <p>{items.results}</p>
//     )
//   )
// }

 

export default App;
