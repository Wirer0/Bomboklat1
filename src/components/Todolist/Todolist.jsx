import { useState } from "react";
import './Todolist.css';

function Todolist() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  function add() {
    setList(prev => [...prev, { id: new Date().getTime(), text: inputValue, done: false }]);
    setInputValue(''); 
    setIsEditing(false); 
  }

  function change(id) {
    setList(prev => prev.map((element) => {
      if (id === element.id) {
        return { id: element.id, text: element.text, done: !element.done };
      } else {
        return element;
      }
    }));
  }

  function del(id) {
    setList(prev => prev.filter((element) => element.id !== id));
  }

  return (
    <div>
      <div className="baner">
        <div className="daneosobowe"></div>
        <button onClick={() => setIsEditing(true)} className="dodawanie">➕Dodaj zadanie</button>

        {isEditing && (
          <div>
            <input 
              type="text" 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)} 
              placeholder="Wpisz zadanie" 
            />
            <button onClick={add}>Zapisz zadanie</button>
            <button onClick={() => setIsEditing(false)}>Anuluj</button>
          </div>
        )}

        <ul className="menu">
          <li>🔍Szukaj</li>
          <li>📅Dziś</li>
          <li>📆Nadchodzące Wydarzenia</li>
        </ul>
      </div>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => change(item.id)}> ✔️ {item.done && "ZROBIONE"}</button>
            <button onClick={() => del(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;