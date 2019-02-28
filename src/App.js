import React, { Component } from "react";
import { Route } from "react-router-dom";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import "./index.css";

class App extends Component {
  state = {
    contacts: [
      {
        id: "ryan",
        name: "Ryan Florence",
        email: "ryan@reacttraining.com",
        avatarURL: "http://localhost:5001/ryan.jpg"
      },
      {
        id: "michael",
        name: "Michael Jackson",
        email: "michael@reacttraining.com",
        avatarURL: "http://localhost:5001/michael.jpg"
      },
      {
        id: "tyler",
        name: "Tyler McGinnis",
        email: "tyler@reacttraining.com",
        avatarURL: "http://localhost:5001/tyler.jpg"
      },
      {
        id: "rich",
        name: "Richard Gomez",
        email: "rich@reacttraining.com",
        avatarURL: "http://localhost:5001/rich.jpg"
      }
    ]
  };

  removeContact = contact => {
    this.setState(state => ({
      contacts: state.contacts.filter(c => c.id !== contact.id)
    }));
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <ListContacts
              onDeleteContact={this.removeContact}
              contacts={this.state.contacts}
            />
          )}
        />
        <Route path="/create" component={CreateContact} />
      </div>
    );
  }
}

export default App;
