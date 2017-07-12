import React, { Component } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-scroller';
import 'datatables.net-select';

class Datatables extends Component {
  constructor(props) {
    super(props);
    this.table = null;
  }

  componentDidMount() {
    const { columns, dataArray } = this.props;
    this.table = $(this.tableRef).DataTable({
      columns,
      data: dataArray,
      deferRender: true,
      scroller: true,
      scrollY: 300,
      select: true,
      drawCallback() {

      }
    });
  }

  componentWillUnmount() {
    this.table.destroy();
  }

  render() {
    return (
      <table
        ref={(n) => this.tableRef = n}
        cellSpacing={0}
        width={`100%`}
      />
    )
  }
}

export default Datatables;
