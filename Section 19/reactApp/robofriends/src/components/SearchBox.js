import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<fragment className='pa2 grow'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search robots' 
				onChange = {searchChange}
			/>
		</fragment>
	);
}

export default SearchBox