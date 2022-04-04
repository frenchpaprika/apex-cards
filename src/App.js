import "./App.css";
import { useState } from "react";
import JSONDATA from "./cardData.json";
import { Item } from "./components/Item/item.component";
import "./components/Item/item.styles.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <div className="header">
        <input
          type="text"
          placeholder="Search for name, rarity, class or category"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="grid-container">
        {JSONDATA.filter((val) => {
          if (searchTerm == "") {
            {
              return val; //developer view */
            }
          } else if (
            val.search.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return <Item value={val} />;
        })}
      </div>
      <div className="footer">
        {" "}
        This project was made by me,{" "}
        <a href="https://twitter.com/x64french" className="link">
          frenchpaprika
        </a>
        .
        <br />
        Give me a follow me if you want to support me :)
      </div>
    </div>
  );
}

export default App;
