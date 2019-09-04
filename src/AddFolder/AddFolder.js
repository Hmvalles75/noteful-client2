import React from "react";
import "./AddFolder.css";
import ValidationError from "../ValidationError/ValidationError";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

class AddFolder extends React.Component {
  state = {
    name: "",
    error: null,
    hasError: false
  };

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError");
    return { hasError: true };
  }

  handleSubmit = e => {
    e.preventDefault();
    const addedFolder = e.target["folder-name"].value;
    if (addedFolder === "") {
      this.setState({
        error: "Please enter Folder name"
      });
    } else {
      this.props.addFolder(addedFolder);
      e.target["folder-name"].value = "";
    }
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <form className="AddFolder" onSubmit={this.handleSubmit}>
          <label htmlFor="folder-name">Folder Name:</label>
          <input type="text" name="folder-name" id="folder-name" />
          <button type="submit">
            <FontAwesomeIcon icon="plus" />
            <br />
            Add
          </button>
        </form>
        <ValidationError
          hasError={this.state.hasError}
          message={this.state.error}
        />
      </div>
    );
  }
}
AddFolder.propTypes = {
  name: PropTypes.string.isRequired
};

export default AddFolder;
