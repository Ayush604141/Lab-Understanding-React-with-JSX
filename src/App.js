import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  let displayImage = [];
  let displayContent = '';
  for(let i=0;i<imageData().length;i++){
    displayContent = 
    <div>
      <img src={elephant} height={500} width={500} alt="Elephant"/>
    </div>
    displayImage.push(displayContent);
  }
  return (
    <div className='gridElement'>
      {displayImage}
    </div>
  )
}

export default App;
