import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const options = [
	'c',
	'c#',
	'clojure',
	'cobol',
	'coffee',
	'cpp',
	'css',
	'dart',
	'django',
	'ejs',
	'elixir',
	'erlang',
	'f#',
	'fortran',
	'golang',
	'groovy',
	'haml',
	'haskell',
	'html',
	'java',
	'javascript',
	'json',
	'jsx',
	'julia',
	'kotlin',
	'less',
	'lua',
	'matlab',
	'mysql',
	'objectivec',
	'pascal',
	'perl',
	'perl6',
	'pgsql',
	'php',
	'plaintext',
	'prolong',
	'python',
	'r',
	'ruby',
	'rust',
	'sass',
	'scala',
	'scss',
	'sql',
	'svg',
	'swift',
	'text',
	'tsx',
	'typescript',
	'xml'
];

const ITEM_HEIGHT = 48;

class Dropdown extends React.Component {
	state = {
		anchorEl: null,
		language: 'plaintext'
	};

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = (language) => {
		this.props.changeLanguage(language);
		this.setState({
			anchorEl: null,
			language
		});
	};

	render() {
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);

		return (
			<div>
				<Button
					aria-label="More"
					aria-owns={open ? 'long-menu' : undefined}
					aria-haspopup="true"
					onClick={this.handleClick}
				>
					{this.state.language}
				</Button>
				<Menu
					id="long-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={this.handleClose}
					PaperProps={{
						style: {
							maxHeight: ITEM_HEIGHT * 4.5,
							width: 200,
						},
					}}
				>
					{options.map(option => (
						<MenuItem key={option} selected={option === this.state.language} onClick={() => this.handleClose(option)}>
							{option}
						</MenuItem>
					))}
				</Menu>
			</div>
		);
	}
}

export default Dropdown;