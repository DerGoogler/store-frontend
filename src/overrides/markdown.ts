import Video from "../components/HTML/Video";
import Audio from "../components/HTML/Audio";
import Font from "../components/HTML/Font";
import Center from "../components/HTML/Center";
import Img from "../components/HTML/Img";
import BaseFont from "../components/HTML/BaseFont";
import DiscordWidget from "../components/DiscordWidget";
import A from "../components/HTML/A";

const markdownOverrides = {
  overrides: {
    video: {
      component: Video,
    },
    audio: {
      component: Audio,
    },
    a: {
      component: A,
    },
    font: {
      component: Font,
    },
    center: {
      component: Center,
    },
    img: {
      component: Img,
    },
    basefont: {
      component: BaseFont,
    },
    discordwidget: {
      component: DiscordWidget,
    },
  },
};

export default markdownOverrides;
