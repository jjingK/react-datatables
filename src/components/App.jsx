import React, { Component } from 'react';
import Datatables from './Datatables';

class App extends Component {
  getDummyData() {
    const data = [];
    for (let i = 0; i < 100; i++ ) {
      data.push(
        {
          "testScriptId": i,
          "testScriptName": "Bootstrap script " + i,
          "testSuiteCount": 3,
          "testCaseCount": 5,
          "createdDate": new Date().getTime(),
          "createdDateFormat": "2017.01.01 00:00:00",
          "createdByName": "manager 1",
          "createdByEmail": "manager01@rsupport.com"
        },
      );
    }
    return data;
  }

  render() {
    return (
      <div>
        <h1>Datatables</h1>
        <Datatables
          columns={[
            {title: 'NO', data: 'testScriptId'},
            {title: 'Script Name', data: 'testScriptName'},
            {title: 'case/suit', data: 'testSuiteCount'},
            {title: 'Create Date', data: 'createdDateFormat'},
            {title: 'Creator', data: 'createdByName'}
          ]}
          dataArray={this.getDummyData()}
        />
      </div>
    )
  };
}

export default App;
