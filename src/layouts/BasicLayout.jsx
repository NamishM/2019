import ProLayout from '@ant-design/pro-layout';
import React from 'react';
import { NavLink } from 'react-router-dom';
import RightContent from '../contentType/RightContent';
import AppMenu from '../modules/Common/components/AppMenu';

const footerRender = () => {
	return (
		<div style={{textAlign:"center",height:"50px"}}>© Test App. All Rights Reserved</div>
	)
};

const BasicLayout = props => {
	return (
		<ProLayout
			title={'Test App'}
			menuRender={() => {
				return <AppMenu />
			}}
			footerRender={footerRender}
			rightContentRender={rightProps => <RightContent />}
		/>
	);
};

export default BasicLayout;
  