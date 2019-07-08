import React, { Component } from "react";
import PropTypes from "prop-types";

//cannot use state
// function Contact() {
//   return (
//     <div>
//       <h4>John Doe</h4>
//       <ul>
//         <li>Email: jdoe@example.com</li>
//         <li>Phone: 123 234 213</li>
//       </ul>
//     </div>
//   );
// }

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};
export default Contact;
