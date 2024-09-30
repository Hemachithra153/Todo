import './CSS/TodoItems.css';
import noTick from './Assets/noTick_Box.png';
import doneTick from './Assets/done_tick.jpg';
import wrongIcon from './Assets/wrong_icon.jpg';

const TodoItems = ({ no, display, text, setTodos}) => {

  const deleteTodo = (no) =>{
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no!==no);
    setTodos(data);
  }

    const toggle = (no) =>{
      let data = JSON.parse(localStorage.getItem("todos"));
      for(let i=0;i < data.length;i++)
      {
        if (data[i].no===no){
          if (data[i].display===""){
             data[i].display = "line-through"; 
          }
          else{
            data[i].display = ""; 
          }
          break;
        }
      }
      setTodos(data);
    }

  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}} > 
        {display===""?<img src={noTick} alt="No Tick Box"/>:<img src={doneTick} alt="Done Tick" />}
        
        <div className="todoitems-text">{text}</div>       
      </div>
      <img className='todoitems-wrongicon'onClick={()=>{deleteTodo(no)}} src={wrongIcon} alt="Wrong Icon"/>
    </div>
  )
}

export default TodoItems;
