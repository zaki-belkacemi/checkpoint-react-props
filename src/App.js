import './App.css';
import Profile from "./profiles/Profile.js"

function App() {
  const handleName=(fullName)=>alert(fullName)
  return (
    <div className="App">
     <Profile 
     fullName="Belkacemi Zakaria"
     profession="developer"
     bio=""
     handleName={handleName}>
       <img src='https://cdn-icons-png.flaticon.com/512/1202/1202376.png' alt="profile" className='picture-profile'></img>
     </Profile>
    </div>
  );
}

export default App;