import { useState } from "react";
import { THOUGHTS } from "./config/firebase";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";

import { AuthProvider } from "./contexts/AuthContext";

import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  const [thoughts, setThoughts] = useState([]);

  /* Create */
  const addThought = () => {
    const id = uuid();
    const data = {
      id,
      title: `Thought no: ${id}`,
      content: `Thought no: ${id} content`,
      author: `Creator no. ${id}`,
      date: new Date(),
    };

    THOUGHTS.doc(id)
      .set(data)
      .catch((err) => console.log(err));
  };

  /* Read */
  const getThoughts = () => {
    THOUGHTS.onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => data.push(doc.data()));
      console.log({ data });
      setThoughts(data);
    });
  };

  /* Update */
  const updateThougth = (thougth) => {
    THOUGHTS.doc(thougth.id)
      .update({ ...thougth, content: "Updated this from UI" })
      .catch((e) => console.log(e));
  };

  /* Delete */
  const deleteThought = (id) => {
    THOUGHTS.doc(id)
      .delete()
      .catch((e) => console.log(e));
  };

  return (
    <div className="App">
      <button onClick={getThoughts}>Get thoughts</button>
      <button onClick={addThought}>Add thought</button>
      {thoughts.map((thought, i) => (
        <>
          <p key={thought?.id || i}>
            {thought?.content} by {thought?.author}
          </p>
          <button onClick={() => deleteThought(thought.id)}>
            Delete thought
          </button>
          <button onClick={() => updateThougth(thought)}>Update thought</button>
        </>
      ))}

      {/* Auth */}
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
