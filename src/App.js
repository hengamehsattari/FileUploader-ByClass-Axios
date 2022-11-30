import { Component } from "react";
import axios from "axios";

class App extends Component {
  state = { selectedFile: null };

  //for file selection
  onFileChange = (e) => {
    this.setState({ selectedFile: e.target.files[0] });
  };
  //click the upload button
  onFileUpload = () => {
    //create an object of formdata.
    const formData = new FormData();
    //update the formdata object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    //send formData object
    axios.post("api/uploadFile", formData);
  };
  //file content to be displayed after file load is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File name:{this.state.selectedFile.name}</p>
          <p>File Type:{this.state.selectedFile.type}</p>
          <p>
            Last Modified:
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>choose before pressing the upload button</h4>
        </div>
      );
    }
  };
  render(){
    return(
      <div>
        <h3>File upload using React</h3>
        <div>
          <input type="file" onChange={this.onFileChange}/>
          <button onClick={this.onFileUpload}></button>
        </div>
        {this.fileData}
      </div>
    )
  }
}

export default App;
