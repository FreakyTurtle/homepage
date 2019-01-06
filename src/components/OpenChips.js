import React, {
	Component
} from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {
	grey50,
	grey500,
	teal300
} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class OpenChips extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: "",
			open: false,
			blurb: "",
			github: "",
			npm: ""
		}
		this.styles = {
			chip: {
				margin: 4,
				opacity: '1',
				display: 'inline-block'
			},
			wrapper: {},
		};
		this.skills = [{
				text: "testcafe-reporter-phil",
				classes: "",
				blurb: "A semi-styled html reporter for the testcafe automated testing framework.",
				github: "https://github.com/FreakyTurtle/testcafe-reporter-phil",
				npm: "https://www.npmjs.com/package/testcafe-reporter-phil"
			},
			{
				text: "simpleRTC",
				classes: "",
				blurb: "A library designed to make using the webRTC technology simpler.",
				github: "https://github.com/FreakyTurtle/simpleRTC#readme",
				npm: "https://www.npmjs.com/package/simplertc"
			},

		]
	}

	handleTouchTap = (i) => {
		this.setState({
			title: this.skills[i].text,
			blurb: this.skills[i].blurb,
			github: this.skills[i].github,
			npm: this.skills[i].npm,
			open: true
		});
	}

	handleOpen = () => {
		this.setState({
			open: true
		});
	};

	handleClose = () => {
		this.setState({
			open: false
		});
	};

	renderChip = (skill, i) => {
		return (
			<Chip
				onTouchTap = {() => this.handleTouchTap(i)}
				style = {this.styles.chip}
				backgroundColor = {teal300}
				labelColor = {grey50}
				key = {i}
			>
				<Avatar
					backgroundColor = {teal300}
					icon = {<FontIcon className = "fa fa-github"/>}
				/>
				{skill.text}
			</Chip>
		);
	}

	render() {
		const actions = [
			<FlatButton
				label="View On Github"
				target="_blank"
				secondary={true}
				href={this.state.github}
				labelPosition="before"
				icon={ <FontIcon className = "fab fa-github"/>}
			/>,
			<FlatButton
				label="View Npm Package"
				target="_blank"
				secondary={true}
				href={this.state.npm}
				labelPosition="before"
				icon={<FontIcon className = "fab fa-npm"/>}
			/>,
			<FlatButton
				label="Close"
				onTouchTap={this.handleClose}
			/>
		];
		return (
			<div
				className="chipcontainer"
				style={this.styles.wrapper}
			>
			{this.skills.map(this.renderChip)}
			<Dialog
				title={this.state.title}
				actions={actions}
				modal={false}
				open={this.state.open}
				onRequestClose={this.handleClose}
				bodyClassName="FTPurple"
			>
			{this.state.blurb}
			</Dialog>
			</div>
		);
	}
}
