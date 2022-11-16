import './App.css';
import Box from './components/Box';
import {useState} from 'react';

function App() {

  const choice = {
      rock: {
        name:'rock',
        img: 'https://www.thoughtco.com/thmb/Uh06xuGPA6HKNbaxpNsOjR7CjPY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rhyolite-1057171452-5c911d4b46e0fb000187a397.jpg'
      },
      scissor:{
        name:'scissor',
        img:'https://www.tefal.co.kr/medias/?context=bWFzdGVyfGltYWdlc3wzNzE2NHxpbWFnZS9qcGVnfGltYWdlcy9oZWMvaDkwLzE2MDE2OTAwOTgwNzY2LmpwZ3xmNGEwMjM4MmZlODc3OTcyYzRkMGRiNzFjYTg0MmNjYTc0NjM2YzM0MTI4Mjg3NmI0NzlmYzJhODY2OGM0ZmFi'
      },
      paper:{
        name:'paper',
        img: 'https://christianlife.nz/wp-content/uploads/2018/11/the-palm-of-your-hand-2704015_640.jpg'
      }
  }

  const [userChoice, setChoice] = useState(null)
  const [computerChoice, setcomputerChoice] = useState(null)
  const [result, setResult] = useState('')
  const computerResult = result == '비겼음' ? '비겼음' : result == '이김' ? '졌음' : '이김'
  function play(U_choice){
     setChoice(choice[U_choice])
     let C_choice = ramdom()
     판단(U_choice,C_choice)
  }
///

  function ramdom(){
      const computer = Object.keys(choice);
      const ramdomNum = Math.floor(Math.random() * 3);

      setcomputerChoice(choice[computer[ramdomNum]])
      return choice[computer[ramdomNum]]
  }

  function 판단(U,C){

    console.log(U);

      if(U === C.name){
          setResult('비겼음')
      }
      else if(U === 'rock' && C.name == 'scissor'){
          setResult('이김')
      }
      else if(U === 'scissor' && C.name == 'paper'){
        setResult('이김')
      }
      else if( U === 'paper' && C.name == 'rock'){
        setResult('이김')
      }
      else{
        setResult('졌음')
      }
  }

  return (
    <>
    <div className="App">
      <Box result={result} item={userChoice} title='You'/>
      <Box result={computerResult} item={computerChoice} title='computer'/>
    </div>
      <div className='button'>
        <button onClick={() => play('scissor')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </>
  );
}

export default App;
