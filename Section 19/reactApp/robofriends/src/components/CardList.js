import React, {fragment} from 'react';
import Card from './Card';
// import {robots} from './robots';

const CardList = ({ robots }) => {
	return (
		<fragment>
			{
				robots.map((user, i) =>{
					return (
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
						/>
					);
				})
			}
		</fragment>
	)
}

export default CardList;