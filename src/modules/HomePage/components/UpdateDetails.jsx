import React from 'react';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  Radio,
} from 'antd';

const uuidv4 = require('uuid/v4');
const { Option } = Select;

class UpdateDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      name: '',
      phoneNumber: '',
      email: '',
      gender: '',
      location: [],
      confirmDirty: false,
		}
  }
  componentDidMount() {
    if (this.props.editRowDetails) {
      this.setState({
        name: this.props.editRowDetails.name,
        phoneNumber: this.props.editRowDetails.phoneNumber.split('+91-')[1].replace(/-/g,""),
        email: this.props.editRowDetails.emaiId,
        gender: this.props.editRowDetails.gender,
        location: this.props.editRowDetails.locations,
      });
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    const updatedItem = {
      id: this.props.operation === 'Add' ? uuidv4() : this.props.editRowDetails.id,
      name: this.state.name,
      phoneNumber: `+91-${this.state.phoneNumber.slice(0,3)}-${this.state.phoneNumber.slice(3,6)}-${this.state.phoneNumber.slice(6)}`,
      emaiId: this.state.email,
      gender: this.state.gender,
      locations: this.state.location
    };
    let arr = this.props.listingItems;
    if (this.props.operation === 'Add') {
      arr.push(updatedItem);
    } else {
      const index = arr.findIndex(item => item.id === this.props.editRowDetails.id);
      arr.splice(index, 1, updatedItem)
    }
    this.props.onItemsUpdateRequest(arr);
    this.props.myCallback();
  };
  nameChange = (e) => {
    this.setState({ name: e.target.value })
  }
  phoneChange = (e) => {
    this.setState({ phoneNumber: e.target.value })
  }
  emailChange = (e) => {
    this.setState({ email: e.target.value })
  }
  locationChange = (checkedValues) => {
    this.setState({ location: checkedValues });
  }
  genderChange = (e) => {
    this.setState({ gender: e.target.value });
  }
	render() {
    const {
      listingItems,
		} = this.props;
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '91',
    })(
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
      </Select>,
    );
		return (
			<Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <h2>{this.props.operation} Details</h2>
        <Form.Item
          label="Name"
        >
          {getFieldDecorator('name', {
            initialValue: this.state.name,
            rules: [{ required: true, message: 'Required', whitespace: true }],
          })(<Input value={this.state.name} onChange={this.nameChange} />)}
        </Form.Item>
        <Form.Item label="Phone Number">
          {getFieldDecorator('phone', {
            initialValue: this.state.phoneNumber,
            rules: [{ required: true, message: 'Required' }, {len: 10, message: 'Please enter 10 digits only'}],
          })(<Input type="number" addonBefore={prefixSelector} style={{ width: '100%' }} value={this.state.phoneNumber} onChange={this.phoneChange} />)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            initialValue: this.state.email,
            rules: [
              {
                type: 'email',
                message: 'Please enter correct email address',
              },
              {
                required: true,
                message: 'Required',
              },
            ],
          })(<Input value={this.state.email} onChange={this.emailChange} />)}
        </Form.Item>
        <Form.Item label="Gender">
          {getFieldDecorator('gender', {
            initialValue: this.state.gender,
            rules: [
              {
                required: true,
                message: 'Required',
              }
            ],
          })(
            <Radio.Group onChange={this.genderChange}>
              <Radio.Button value="Male">Male</Radio.Button>
              <Radio.Button value="Female">Female</Radio.Button>
            </Radio.Group>,
          )}
        </Form.Item>
        <Form.Item label="Location">
          {getFieldDecorator('Location', {
            initialValue: this.state.location,
            rules: [
              {
                required: true,
                message: 'Required'
              }
            ],
          })(
            <Checkbox.Group style={{ width: '100%' }} onChange={this.locationChange}>
              <Row>
                <Col span={8}>
                  <Checkbox value="Banglore">Banglore</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Mumbai">Mumbai</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Delhi">Delhi</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            {this.props.operation === 'Add' ? 'Submit' : 'Update'}
          </Button>
        </Form.Item>
      </Form>
		);
	}  
}

export const WrappedForm = Form.create({ name: 'register' })(UpdateDetails);