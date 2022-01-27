import * as React from "react";
import ImgInterface from "./interface";

class Img extends React.Component<ImgInterface> {
  public render() {
    const {
      alt,
      crossOrigin,
      decoding,
      height,
      loading,
      referrerPolicy,
      sizes,
      src,
      srcSet,
      useMap,
      width,
    } = this.props;
    return (
      <img
        alt={alt}
        crossOrigin={crossOrigin}
        decoding={decoding}
        height={height}
        loading={loading}
        referrerPolicy={referrerPolicy}
        sizes={sizes}
        src={src}
        srcSet={srcSet}
        useMap={useMap}
        width={width}
      ></img>
    );
  }
}

export default Img;
