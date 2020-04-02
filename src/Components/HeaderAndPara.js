import React, { Component } from "react";

export default class HeaderAndPara extends Component {
  render() {
    return (
      <div className="ui four column">
        <h2 className="ui header" style={{ color: "white", fontFamily: 'Gotu'}}>Lorem Ipsum</h2>
        <div className="ui container" style={{ textAlign: "left", fontFamily: 'Crimson Text', fontSize : "20px", width: "35rem" }}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. !
          </p>
        </div>
      </div>
    );
  }
}
