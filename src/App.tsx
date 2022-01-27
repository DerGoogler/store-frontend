import axios from "axios";
import * as React from "react";
import { Icon, Page, Toolbar, ToolbarButton } from "react-onsenui";
import Details from "./builders/Details";
import typeCheck from "./misc/typeCheck";
import { AppProps, AppStates } from "./typings/interface/App";
import { DetailsListing } from "./typings/interface/Details";

class App extends React.Component<AppProps, AppStates> {
  public state = {
    data: [],
  };

  public componentDidMount = () => {
    // Use no slash at the start
    axios
      .get(window.location.href.replace(/(\?id=(.*)|\?)/gm, "") + "data/store.json")
      .then((res: { data: any }) => {
        this.setState({ data: res.data });
      });
  };

  private renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Store</div>
        <div className="right">
          <ToolbarButton>
            <Icon icon="ion-ios-menu, material:md-menu"></Icon>
          </ToolbarButton>
        </div>
      </Toolbar>
    );
  }

  public render() {
    const list = this.state.data.map((item: DetailsListing) => (
      <Details
        key={typeCheck(item.id, "")}
        id={typeCheck(item.id, "")}
        title={typeCheck(item.title, "")}
        category={typeCheck(item.category, "")}
        description={typeCheck(item.description, "")}
        image={typeCheck(item.image, "")}
        download={typeCheck(item.download, "")}
        // Sreenshot shit
        isSliderEnabled={typeCheck(item.screenshots?.enabled, false)}
        screenshots={typeCheck(item.screenshots?.data, [""])}
        // Dev shit
        isDeveloperEnabled={typeCheck(item.developer?.enabled, false)}
        devName={typeCheck(item.developer?.name, "")}
        devEmail={typeCheck(item.developer?.email, "")}
        devWebsite={typeCheck(item.developer?.website, "")}
      />
    ));

    return <Page renderToolbar={this.renderToolbar}>{list}</Page>;
  }
}

export default App;
