import {
  Button,
  Form,
  Table,
  Skeleton,
  Divider,
  Popconfirm
} from 'antd';
import React from 'react';

class DatatTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredInfo: [],
      pagination: {}
    };
  }
  componentDidMount() {
    //this.fetch({page: 1, results: 10, gigType: this.state.filterGigType});    
    if (this.props.listingItems && this.props.listingItems.length) {
      const pagination = { ...this.state.pagination };
      pagination.total = this.props.listingItems.count;
      this.setState({ filteredInfo: this.commaSeparteLocation(this.props.listingItems), pagination });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.listingItems.length !==nextProps.listingItems.length && nextProps.listingItems.length) {
      const pagination = { ...this.state.pagination };
      pagination.total = nextProps.listingItems.count;
      this.setState({ filteredInfo: this.commaSeparteLocation(nextProps.listingItems), pagination });
    }
  }
  commaSeparteLocation = (items) => {
    items.map((item) => {
      const stringLocation = item.locations.toString();
      item['locations'] = stringLocation;
    })
    return items;
  }
  handleDelete = (id) => {
    const dataSource = [...this.state.filteredInfo];
    this.setState(
      { filteredInfo: dataSource.filter(item => item.id !== id) },
      () => this.props.onItemsUpdateRequest(this.state.filteredInfo)
    );
  };
  handleAdd = () => {
    this.props.myCallback();
    this.props.myOtherCallback('Add');
  }
  handleEdit = (record) => {
    this.props.myCallback();
    this.props.myOtherCallback('Edit');
    this.props.setEditRowDetails(record);
  }
  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [      
      {
        title: 'Name',
        dataIndex:'name'
       
      },
      {
        title: 'Phone Number',
        dataIndex: 'phoneNumber',     
      },
      {
        title: 'Email Id',
        dataIndex: 'emaiId',
      },     
      
      {
        title: 'Gender',
        dataIndex: 'gender',
        

      },
      {
        title: 'Locations',
        dataIndex: 'locations',
       
      },
      {
        title: 'Action 1',
        dataIndex: '',
        key: 'x',
        render: (text, record) => <Button onClick={() => this.handleEdit(record)}>Edit</Button>,
      },
      {
        title: 'Action 2',
        render: (text, record) =>
          this.state.filteredInfo.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.id)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
      
    ];
    const {
			listingItems
    } = this.props;
    return (
      <div>
        <h2>
          <Divider>Total Results {this.state.filteredInfo.length}</Divider>
        </h2>
        <React.Fragment>
          <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
            Add a row
          </Button>
          <Table
            columns={columns} 
            scroll={{ x: false, y: 'calc(100vh - 490px)' }}
            dataSource={this.state.filteredInfo}
            onChange={this.handleChange}
            pagination={this.state.pagination}
          />
        </React.Fragment>
      </div>
    );
  }
}
export const DataTable = Form.create({ name: 'app' })(DatatTable);