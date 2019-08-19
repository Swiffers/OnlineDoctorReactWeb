import React from "react";
import { Spinner, Container } from "mdbreact";
import DocsLink from "../DocsLink";

const SpinnerPage = props => {
  return (
    <Container>
      <DocsLink
        title="Loader/Spinner"
        href="https://mdbootstrap.com/docs/react/components/spinners/"
      />
      <div className="container-fluid text-center">
        <div className="col-3">
          <Spinner green small />
        </div>
        <div className="col-4">
          <Spinner yellow />
        </div>
        <div className="col-5">
          <Spinner crazy big multicolor />
        </div>
      </div>
    </Container>
  );
};

export default SpinnerPage;
