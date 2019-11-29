import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon, Button } from 'antd';

export default class AppMenu extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			isActive: false,
			collapsed: false
    };
	}
	setActive = () => {
		this.setState({ isActive: true });
		return;
	}
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
	};
	getKeys = () => {
		const key = window.location.href.indexOf('home') !== -1 ? ['1'] : ['2'];
		return key;
	}
	render() {
		return(
			<div className="App-menu">
        <Button type="primary" onClick={this.toggleCollapsed} className="App-menu-btn">
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
				<div className="ant-pro-sider-menu-logo" id="logo">
					<NavLink to="/">
						<img src={require('../../../assets/favicon.png')} height={20} />
						<p style={{ fontSize: this.state.collapsed ? '14px' : '21px', color: '#fff' }}>React Test App</p>
					</NavLink>
				</div>
        <Menu
          defaultSelectedKeys={[window.location.href.indexOf('notInterested') !== -1 ? '2' : window.location.href.indexOf('submitted') !== -1 ? '3' : '1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" className="App-menu-li">
						<NavLink to="/home">
							<Icon type="desktop" />
							<span>View Page</span>
						</NavLink>
          </Menu.Item>         
        </Menu>
      </div>	
		)
	}
}