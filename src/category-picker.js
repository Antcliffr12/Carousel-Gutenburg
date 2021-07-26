import { withSelect } from '@wordpress/data';
import {
    MenuGroup, 
    MenuItem 
    
  } from "@wordpress/components";
const CategorySelect = (props) => {
	const { terms, selectedTermId, selectTerm } = props;


    return(
        <MenuGroup
        className="category-select"
        >
           {terms && (
				terms.map((item) => (
					<MenuItem
                    role="menuitemradio"
                    isSelected={item.id == selectedTermId}
                    icon={item.id == selectedTermId ? 'yes' : 'no-alt'}
                    onClick={() => selectTerm(item.id)}
					>
						{item.name}
					</MenuItem>
				))
			)}
        </MenuGroup>
    );
}

export default withSelect((select, props) => {
	return {
		terms: select('core').getEntityRecords('taxonomy', 'category', {per_page: -1})
	}
})(CategorySelect);