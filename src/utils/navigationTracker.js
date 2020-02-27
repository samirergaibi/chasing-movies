import ReactGA from "react-ga";

export function navigationTracker(path){
  ReactGA.initialize("UA-134911119-4");
  ReactGA.pageview(path);
}