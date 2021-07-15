import React from "react";

class Carousel extends React.Component {
  state = { photos: [], active: 0 };

  static getDerivedStateFromProps({ media }) {
    let photos = [require("../Images/SVGimages/fish11.svg")];

    if (media.length) {
      photos = media;
    }

    return { photos };
  }

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img className="large-img" src={photos[active]} alt="fish" />
        <div className="carousel-thumbnails">
          {photos.map((photo, index) => (
            <button onClick={this.handleIndexClick}>
              <img
                key={photo}
                data-index={index}
                src={photo}
                className={index === active ? "active" : ""}
                alt="fish thumbnail"
              />
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
