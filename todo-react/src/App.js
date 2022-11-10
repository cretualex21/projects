import React, { useState } from "react";

function App() {
  //light mode change -- start
  const [darkMode, setDarkMode] = useState(false);

  const background = document.querySelector(".top-elements");
  const formContainer = document.querySelector(".todo-container");
  const todoContainer = document.querySelector(".todo-list");
  const todoFilter = document.querySelector(".todo-filter");
  const changeLightTheme = (e) => {
    setDarkMode(!darkMode);
    if (darkMode == true) {
      background.classList.add("top-elements--dark");
      formContainer.classList.add("todo-container--dark");
      todoContainer.classList.add("todo-list--dark");
      todoFilter.classList.add("todo-filter--dark");
      document.body.classList.add("dark");
      e.target.src = "images/icon-sun.svg";
    } else if (darkMode === false) {
      background.classList.remove("top-elements--dark");
      formContainer.classList.remove("todo-container--dark");
      todoContainer.classList.remove("todo-list--dark");
      todoFilter.classList.remove("todo-filter--dark");
      document.body.classList.remove("dark");
      e.target.src = "images/icon-moon.svg";
    }
  };
  //light mode change -- end
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // alert
    } else if (name) {
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
        isCompleted: false,
      };
      setList([...list, newItem]);
      setName("");
    }
  };
  const handleComplete = (e, id) => {
    list.forEach((item) => {
      if (item.id === id) {
        e.target.classList.add("complete");

        item.isCompleted = true;
      }
    });
  };
  const clearCompletedToDo = () => {
    setList(list.filter((item) => item.isCompleted === false));
  };
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const [itemCategory, setItemCategory] = useState("all");
  const filterItem = (category) => {
    if (list.length <= 0) {
      return;
    } else if (category === "all") {
      return;
    } else {
      const newItem = list.filter((item) => {
        setItemCategory(category);
        return item.isCompleted === category;
      });
      setList(newItem);
    }

    console.log("helo");
  };
  return (
    <>
      {/*top background image with light mode changer */}
      <section className="top-elements ">
        <h1>TODO</h1>
        <div className="light-dark">
          <img
            onClick={(e) => changeLightTheme(e)}
            src="images/icon-moon.svg"
          ></img>
        </div>
      </section>
      {/* form container */}
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="todo-container ">
            <div className="circle"></div>
            <input
              type="text"
              placeholder="Create a new todo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
        </form>
      </section>
      {/* container for everything that is about todos */}
      <section className="todo-list ">
        <div className="todos-scroll">
          {list.map((item) => {
            return (
              <div key={item.id} className="todos-container">
                <div className="todos">
                  <div
                    onClick={(e) => handleComplete(e, item.id)}
                    className="circle"
                  >
                    <img
                      className="circle-img"
                      src="images/icon-check.svg"
                    ></img>
                  </div>
                  <p>{item.title}</p>
                  <img
                    className="delete"
                    onClick={() => removeItem(item.id)}
                    src="images/icon-cross.svg"
                  ></img>
                </div>
                <hr></hr>
              </div>
            );
          })}
        </div>
        <div className="items">
          <div className="items--left">
            <p>{list.length} items left</p>
          </div>
          <div onClick={clearCompletedToDo} className="items--clear">
            <p>Clear Completed</p>
          </div>
        </div>
        <section className="todo-filter ">
          <div
            onClick={() => filterItem("all")}
            className={`${
              itemCategory === "all"
                ? "todo-filter__text active"
                : "todo-filter__text"
            }`}
          >
            <p>All</p>
          </div>
          <div
            onClick={() => filterItem(false)}
            className={`${
              !itemCategory ? "todo-filter__text active" : "todo-filter__text"
            }`}
          >
            <p>Active</p>
          </div>
          <div
            onClick={() => filterItem(true)}
            className={`${
              itemCategory === true
                ? "todo-filter__text active"
                : "todo-filter__text"
            }`}
          >
            <p>Completed</p>
          </div>
        </section>
        <section className="drag-text">
          <p>Drag and drop to reorder list</p>
        </section>
      </section>
    </>
  );
}

export default App;
