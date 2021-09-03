import './App.css';
import PersonCard from './components/PersonCard'

function App() {
    return (
        <div className="App">
            <PersonCard firstName = "Frida" lastName = "Chavez" age ="49" hairColor = "black"/>
            <PersonCard firstName = "Didi" lastName = "Muse" age ="39" hairColor = "blue"/>
            <PersonCard firstName = "Milly" lastName = "Powers" age ="41" hairColor = "brown"/>
            <PersonCard firstName = "Zora" lastName = "Zeal" age ="42" hairColor = "purple"/>
        </div>
    );
}
export default App;
