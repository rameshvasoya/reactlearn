import './App.css';
import Header from './MyComponents/Header';
import Todos from "./MyComponents/Todos";
import TodoItem from "./MyComponents/TodoItem";
import Footer from "./MyComponents/Footer";

function App() {
  let todos = [
      {
        no:1,
        title:"Go to the market",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        no:2,
        title:"Go to the mall",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        no:3,
        title:"Go to the work",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      }
  ]
  return (
    <>
     {/* <Header title="MyTodosList" SearchBar={false}/> */}
     <Header title="MyTodosList" />
     <Todos todos={todos} />
     <Footer/> 
    </>
  );
}

export default App;
