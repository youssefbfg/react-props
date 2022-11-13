import "./App.css";
import Profile from "./Profile";

export default function App() {
  const myFunction = (myName) => {
    alert(` ${myName} is a student he is lying `);
  };

  return (
    <div className="App">
      <Profile Fullname="Youssef Boufalgha" myFunction={myFunction} Bio="owner of seven software engineering companies" Proffession="he is lying"/>
          < img src="Jeremy_Spector_MD.png"/>
    </div>
  );
}
