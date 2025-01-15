import './App.css';
import Counter from './components/Counter';
// import ListPost from './components/ListPost';
// import PostForm from './components/PostForm';
// import GrandParent from './components/GrandParent';
// import { UserProvider } from './components/useContext';
// import RefsDemo from './components/RefsDemo';

function App() {
  return (
    <div className="App">
      {/* <UserProvider value="Nabendu">
        <GrandParent />
      </UserProvider> */}
      <Counter />
    </div>
  );
}

export default App;
