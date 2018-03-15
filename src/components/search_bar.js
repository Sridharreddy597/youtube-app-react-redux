import React, { Component } from 'react';

/*const SearchBar = () =>{
    return <input />;
};
*/

//state is a plane javascript object to record and react to the user events and re render it 
//each class based components has it own state object when ever componenet state is changed it immediately re renders and also forces its child componenets  to render 
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    render() {
        return (
            <div className='search-bar'>
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />

            </div>
        )
    }
    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);

    }

}

export default SearchBar;


