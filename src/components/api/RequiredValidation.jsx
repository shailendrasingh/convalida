import React, { Component } from 'react';
import Viewport from '../Viewport';
import { Typography, withStyles, TableRow, TableCell } from '@material-ui/core';
import TableApi from '../common/TableApi';
import Code from '../common/Code';

const styles = theme => ({
  div: {
    marginTop: theme.spacing.unit * 12,
    marginLeft: theme.spacing.unit * 8,
    marginRight: theme.spacing.unit * 8,
  },
  tableText: {
    fontSize: 14
  }
});

class RequiredValidation extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Viewport>
        <div className={classes.div}>
          <Typography variant="title">
            Required Validation
          </Typography>
          <Typography style={{ marginTop: 32 }}>
            This validation is applied to fields that its value cannot be null or empty.
          </Typography>
          <Api classes={classes} />
          <Annotation classes={classes} />
          <DataBinding classes={classes} />
        </div>
      </Viewport>
    );
  }
}

const Api = props => (
  <div>
    <Typography variant="subheading" style={{ marginTop: 32 }}>
      API
    </Typography>

    <TableApi>
      <TableRow>
        <TableCell className={props.classes.tableText}>
          errorMessage
        </TableCell>
        <TableCell className={props.classes.tableText}>
          int (String Resource)
        </TableCell>
        <TableCell className={props.classes.tableText} />
        <TableCell className={props.classes.tableText}>
          The error message that will be displayed to user when field value is not valid.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={props.classes.tableText}>
          autoDismiss
        </TableCell>
        <TableCell className={props.classes.tableText}>
          boolean
        </TableCell>
        <TableCell className={props.classes.tableText}>
          true
        </TableCell>
        <TableCell className={props.classes.tableText}>
          If true, remove error message automatically when field value is valid.
        </TableCell>
      </TableRow>
    </TableApi>
  </div>
);

const Annotation = () => (
  <div>
    <Typography variant="subheading" style={{ marginTop: 32 }}>
      Using with Annotation
    </Typography>

    <Code style={{ marginTop: 8, fontSize: 16 }} language="java" code={`
@RequiredValidation(
  errorMessage = R.string.field_required,
  autoDismiss = true
)
EditText nameField;
    `} />
  </div>
);

const DataBinding = () => (
  <div>
    <Typography variant="subheading" style={{ marginTop: 32 }}>
      Using with Data Binding
    </Typography>

    <Code style={{ marginTop: 8, fontSize: 16 }} language="xml" code={`
&lt;EditText
  android:id="@+id/name_field"
  android:hint="@string/name"
  app:requiredValidationErrorMessage="@{@string/field_required}"
  app:requiredValidationAutoDismiss="@{true}" />
    `} />
  </div>
);

export default withStyles(styles)(RequiredValidation);