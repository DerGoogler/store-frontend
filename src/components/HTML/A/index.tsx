import * as React from "react";
import typeCheck from "../../../misc/typeCheck";
import AInterface from "./interface";

class A extends React.Component<AInterface> {
  public render() {
    const { download, href, hrefLang, media, ping, rel, target, type, children } = this.props;
    return (
      <>
        <a
          download={download}
          href={href}
          hrefLang={hrefLang}
          media={media}
          ping={ping}
          rel={rel}
          target={typeCheck(target, "_blank")}
          type={type}
          title={"Open " + href}
          style={{ cursor: "pointer" }}
        >
          {children}
        </a>
      </>
    );
  }
}

export default A;
