import Markdown from "markdown-to-jsx";
import * as React from "react";
import { Button, List, ListItem } from "react-onsenui";
import getUrlParam from "../misc/getUrlParam";
import markdownOverrides from "../overrides/markdown";
import { DetailsProps, DetailsState } from "../typings/interface/Details";
import Slider from "./Slider";

class Details extends React.Component<DetailsProps, DetailsState> {
  public state = {
    isOpen: false,
  };

  public componentDidMount = () => {
    if (getUrlParam("id") === this.props.id) {
      this.setState({ isOpen: true });
    }
  };

  private handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  private handleDownload = () => {
    window.open(this.props.download, "_blank");
  };

  public render() {
    return (
      <div className={this.state.isOpen ? `kard is-open` : `kard`}>
        <div
          className={`kard-image ${this.props.className || ""}`}
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(" +
              this.props.image +
              ")",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          {this.props.title && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
              }}
            >
              <h1>{this.props.title}</h1>
            </div>
          )}
          <div className="kard-image__bottom">
            <span className="kard-image__tagline">
              {this.state.isOpen ? this.props.category : this.props.devName || ""}
            </span>
            <a className="kard-image__cta" onClick={this.handleClick}>
              {this.state.isOpen ? `CLOSE` : `READ MORE`}
            </a>
          </div>
        </div>
        <div className="kard-text">
         
        </div>
      </div>
    );
  }
}

export default Details;
