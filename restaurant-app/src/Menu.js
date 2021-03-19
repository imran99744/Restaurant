import React, { Component } from "react";
import Menuitem from "./Menuitem";
import DishDetails from "./DishDetails";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";
import { addComment, fetchDishes } from "./redux/actionCreators";
import Loading from "./Loading";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, rating, author, comment) =>
      dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => dispatch(fetchDishes()),
  };
};

class Menu extends Component {
  state = {
    selectedDish: null,
    modalOpen: false,
  };

  onDishSelect = (dish) => {
    this.setState({
      selectedDish: dish,
      modalOpen: !this.state.modalOpen,
    });
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    document.title = "Menu";

    if (this.props.dishes.isLoading) {
      return <Loading />;
    } else {
      const menu = this.props.dishes.dishes.map((item) => {
        return (
          <Menuitem
            dish={item}
            key={item.id}
            DishSelect={() => this.onDishSelect(item)}
          />
        );
      });

      let dishDetails = null;
      if (this.state.selectedDish != null) {
        const comments = this.props.comments.filter(
          (comments) => comments.dishId === this.state.selectedDish.id
        );
        dishDetails = (
          <DishDetails
            dish={this.state.selectedDish}
            comments={comments}
            addComment={this.props.addComment}
          />
        );
      }

      return (
        <div className="container">
          <div className="row">
            <CardColumns>{menu}</CardColumns>
            <Modal isOpen={this.state.modalOpen}>
              <ModalBody>{dishDetails}</ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggleModal}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
