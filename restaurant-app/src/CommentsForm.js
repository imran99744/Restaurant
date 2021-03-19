import React, { Component } from "react";
import { From, Button, Input, Form } from "reactstrap";

class CommentsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      rating: "",
      comment: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    this.props.addComment(
      this.props.dishId,
      this.state.rating,
      this.state.author,
      this.state.comment
    );
    this.setState({
      author: "",
      rating: "",
      comment: "",
    });
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="author"
            value={this.state.author}
            placeholder="Your Name"
            required
            onChange={this.handleInputChange}
          />
          <br />
          <Input
            type="select"
            name="rating"
            value={this.state.rating}
            onChange={this.handleInputChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <br />
          <Input
            type="textarea"
            name="comment"
            value={this.state.comment}
            placeholder="Your Comment"
            required
            onChange={this.handleInputChange}
          ></Input>
          <br />
          <Button type="submit">Submit Comment</Button>
        </Form>
      </div>
    );
  }
}

export default CommentsForm;
