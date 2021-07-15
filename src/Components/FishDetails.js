import React from "react";
import Fish from "../Classes/FishClass";
import Modal from "./Modal";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class FishDetails extends React.Component {
  state = { loading: true, showModal: false };

  componentDidMount() {
    Fish.getFish(this.props.id).then((fish) => {
      this.setState({
        url: fish.url,
        name: fish.name,
        type: fish.type,
        waterType: fish.waterType,
        media: fish.media,
        loading: false,
      });
    }, console.error);
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  viewMoreFishInfo = () => window.open(this.state.url);

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { name, type, waterType, media, showModal } = this.state;

    return (
      <div className="fish-details">
        <h1 className="fish-name">{name}</h1>
        <h2 className="fish-info">{`${type} | ${waterType}`}</h2>

        <Carousel media={media} />

        <button className="more-info-btn" onClick={this.toggleModal}>
          See more info about {name}
        </button>

        {showModal ? (
          <Modal toggleModal={this.toggleModal}>
            <>
              <h1>Would you like to see more info about {name} fish?</h1>
              <div className="buttons">
                <button onClick={this.viewMoreFishInfo}>Yes</button>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </>
          </Modal>
        ) : null}
      </div>
    );
  }
}

//to wrap error boundary around FishDetails
export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <FishDetails {...props} />
    </ErrorBoundary>
  );
}
