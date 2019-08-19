import React from "react";
import { MDBDatePicker, Container } from "mdbreact";
import DocsLink from "../DocsLink";

// import moment from 'moment';
// import 'moment/locale/pl';

// moment.locale('pl');

class DatePickerPage extends React.Component {
  getPickerValue = value => {
    console.log(value);
  };

  render() {
    return (
      <Container>
        <DocsLink
          title="Date Picker"
          href="https://mdbootstrap.com/docs/react/forms/date-picker/"
        />
        <MDBDatePicker clearable value={null} emptyLabel="Select Date" getValue={this.getPickerValue} />
        <MDBDatePicker clearable value={null} emptyLabel="Select Date"
          getValue={this.getPickerValue}
          theme={{
            palette: {
              primary: {
                main: '#ffbb33',
              },
              secondary: {
                main: '#FF8800',
                contrastText: '#ffcc00',
              },
            }
          }}
        />
        <MDBDatePicker getValue={this.getPickerValue} />
      </Container>
    );
  }
}

export default DatePickerPage;
