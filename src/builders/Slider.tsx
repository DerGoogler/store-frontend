import * as React from "react";
import { Carousel, CarouselItem } from "react-onsenui";
import { SliderProps, SliderStates } from "../typings/interface/Slider";

class Slider extends React.Component<SliderProps, SliderStates> {
  public state = {
    index: 0,
  };

  private handleChange = (e: any) => {
    this.setState({ index: e.activeIndex });
  };

  private setIndex = (index: number) => {
    this.setState({ index: index });
  };

  public render() {
    return (
      <>
        <Carousel
          // @ts-ignore
          onPostChange={this.handleChange}
          index={this.state.index}
          swipeable
          autoScroll
          style={{
            height: "calc(100vh - 56px - 10px)",
            width: "calc(100vw - 20px)",
          }}
        >
          {this.props.images.map((item: string, index: number) => (
            <CarouselItem
              key={index}
              style={{
                width: "calc(100vw - 20px)",
                background: "url(" + item + ") center center / cover",
                height: "calc((100vh - 56px) - 10px)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div style={{ marginTop: "50%", textAlign: "center" }}></div>
            </CarouselItem>
          ))}
        </Carousel>

        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            position: "absolute",
            bottom: "36px",
            left: "0px",
            right: "0px",
          }}
        >
          {this.props.images.map((item: string, index: number) => (
            <span
              key={index}
              style={{ cursor: "pointer" }}
              onClick={this.setIndex.bind(this, index)}
            >
              {this.state.index === index ? "\u2B24" : "\u25CB"}
            </span>
          ))}
        </div>
      </>
    );
  }
}

export default Slider;
