//  React
import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';

import moment from 'moment';

//  React table
import ReactTable from 'react-table';
import "react-table/react-table.css"; 

//  Components
import Navbar from './NavBar';
import AddConfigItem from './AddConfigItem';
import EditConfigItem from './EditConfigItem';
import RemoveConfigItem from './RemoveConfigItem';
import UndoRemoveAlert from './UndoRemoveAlert';

class Main extends Component {

    render() {


        return (
            <div>
                <Navbar {...this.props} />

                <Container fluid>
                    
                    <Row className="page-heading">
                        <Col>
                            <h4>Welcome to CentralConfig</h4>
                            <p>
                                Manage your application configuration and feature flags from a central place. 
                                See configuration for a specific application by selecting it from the menu.                                
                            </p>
                            <p>
                                <AddConfigItem buttonLabel="Add a config item" />
                            </p> 
                        </Col>                                                                                               
                    </Row>
                    <Row>
                        <Col>
                        
                        <UndoRemoveAlert />

                        <ReactTable
                            data={this.props.configItems}
                            columns={[{                                
                                columns: [
                                {
                                    Header: 'Id',
                                    accessor: 'id',
                                    show: false
                                },{
                                    Header: 'Application',
                                    accessor: 'application'
                                }, {
                                    Header: 'Name',
                                    accessor: 'name'
                                }, {
                                    Header: 'Value',
                                    accessor: 'value'
                                }, {
                                    Header: 'Machine',
                                    accessor: 'machine'
                                }, {
                                    Header: 'Last updated',
                                    accessor: 'updated',
                                    Cell: ({row, original}) => {
                                        return (
                                            <div>{moment(row.updated).format('MMM-D h:mm a')}</div>
                                        )
                                    }                                
                                }, {
                                    Header: 'Actions',
                                    Cell: ({row, original}) => (
                                        <div>
                                            <EditConfigItem buttonLabel="Edit" item={row} /> 
                                            <RemoveConfigItem buttonLabel="Remove" item={row} />
                                        </div>
                                    ),
                                    sortable: false,
                                    width: 120
                                }]
                            }]}
                            defaultPageSize={10}
                            className="-striped -highlight"
                            defaultSorted={[
                                {
                                  id: "application",
                                  desc: true
                                }
                              ]}
                            noDataText="No config items found"
                        />
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        );
    }    

}

export default Main;