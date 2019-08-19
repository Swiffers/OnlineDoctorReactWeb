import React from "react";
import { Container, PerfectScrollbar } from "mdbreact";
import DocsLink from "../DocsLink";

class ScrollBarPage extends React.Component {
  render() {
    const outerContainerStyle = { width: "800px", height: "400px" };
    return (
      <Container>
        <DocsLink title="ScrollBar" href="https://mdbootstrap.com/docs/react/" />
        <Container style={outerContainerStyle} className="mt-5">
          <PerfectScrollbar className="scrollbar-primary">
            <img
              alt=""
              src="https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg"
            />
          </PerfectScrollbar>
        </Container>
      </Container>
    );
  }
}

export default ScrollBarPage;
