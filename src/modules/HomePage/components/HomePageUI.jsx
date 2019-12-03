import React from 'react';
import {
  Card,
  Breadcrumb,
} from 'antd';
import { DataTable } from '../../Common/components/DataTable';
import { WrappedForm } from './UpdateDetails';
import { NavLink } from 'react-router-dom';

class HomePageUI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addDetails: false,
			type: null,
			editRowDetails: null
		}
	}
	componentDidMount() {
		this.props.onItemsRequest();
	}
	myCallback = () => {
    this.setState({ addDetails: true });
	}
	myOtherCallback = (type) => {
		this.setState({ type })
	}
	setEditRowDetails = (record) => {
		this.setState({ editRowDetails: record })
	}
	backToResults= () => {
		this.setState({ addDetails: false, editRowDetails: null });
	}
	render() {
    const {
      listingItems,
			isLoading,
			onItemsDeleteRequest,
			onItemsUpdateRequest
    } = this.props;
		return (
			<div style={{ padding: '0 24px' }}>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/home">View Page</NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
				<Card bordered={false}>
					<div className={''}>
						{
							this.state.addDetails ? 
								<WrappedForm
									operation={this.state.type}
									onItemsUpdateRequest={onItemsUpdateRequest}
									myCallback={this.backToResults}
									listingItems={listingItems}
									editRowDetails={this.state.editRowDetails}
								/> :								
								<span>									
									<DataTable
										myCallback={this.myCallback}
										myOtherCallback={this.myOtherCallback}
										setEditRowDetails={this.setEditRowDetails}
										listingItems={listingItems}
										onItemsDeleteRequest={onItemsDeleteRequest}
										onItemsUpdateRequest={onItemsUpdateRequest}
									/>
								</span>								
						}
					</div>
				</Card>
			</div>	
		);
	}  
}

export default HomePageUI;