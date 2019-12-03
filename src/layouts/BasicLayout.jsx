import ProLayout from '@ant-design/pro-layout';
import React from 'react';
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
		>
			{props.children}
		</ProLayout>	
	);
};

export default BasicLayout;
  