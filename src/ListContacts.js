import React from "react";
import "./index.css";

// class ListContacts extends Component {
// Convert ListContacts to a Stateless Functional Component

function ListContacts(props) {
  // render() {
  return (
    <ol className="contact-list">
      {props.contacts.map(contact => (
        <li key={contact.id} className="contact-list-item">
          <div
            className="contact-avatar"
            style={{
              backgroundImage: `url(${contact.avatarURL})`
            }}
          />
          <div className="contact-details">
            <p>{contact.name}</p>
            <p>{contact.email}</p>
          </div>
          <button>Remove</button>
        </li>
      ))}
    </ol>
  );
}

export default ListContacts;
