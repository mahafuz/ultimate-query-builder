import React, { useState } from 'react';
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import './style.scss';

const icons = {
	duplicate: (<svg  viewBox="-56 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m395.980469 112.582031-108.023438-108.023437c-2.960937-2.960938-6.949219-4.558594-11.019531-4.558594h-156.339844c-8.597656 0-15.578125 6.980469-15.578125 15.578125v89.445313h-89.441406c-8.597656 0-15.578125 6.976562-15.578125 15.578124v375.820313c0 8.597656 6.980469 15.578125 15.578125 15.578125h264.359375c8.601562 0 15.582031-6.980469 15.582031-15.578125v-89.445313h89.441407c8.597656 0 15.578124-6.976562 15.578124-15.578124v-267.796876c0-3.960937-1.523437-7.984374-4.558593-11.019531zm-26.597657 263.238281h-73.863281v-147.195312c0-4.035156-1.570312-8.03125-4.5625-11.023438l-108.019531-108.019531c-2.933594-2.9375-6.914062-4.5625-11.019531-4.5625h-35.738281v-73.863281h125.179687v92.445312c0 8.597657 6.980469 15.578126 15.578125 15.578126h92.445312zm-105.023437 105.023438h-233.203125v-344.664062h125.179688v92.445312c0 8.597656 6.980468 15.578125 15.582031 15.578125h92.441406zm-76.863281-322.636719 54.835937 54.835938h-54.835937zm159.855468-50.183593h-54.835937v-54.835938c6.855469 6.851562 49.367187 49.367188 54.835937 54.835938zm0 0"/></svg>),
	remove: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
		<g>
			<g>
				<path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
					L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
					c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
					l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
					L284.286,256.002z"/>
			</g>
		</g>
	</svg>),
	add: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
		<g>
		<path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26
			S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"/>
		<path d="M38.5,25H27V14c0-0.553-0.448-1-1-1s-1,0.447-1,1v11H13.5c-0.552,0-1,0.447-1,1s0.448,1,1,1H25v12c0,0.553,0.448,1,1,1
			s1-0.447,1-1V27h11.5c0.552,0,1-0.447,1-1S39.052,25,38.5,25z"/>
		</g>
	</svg>)
};

/**
  * The edit function describes the structure of your block in the context of the
  * editor. This represents what the editor will render when the block is used.
  *
  * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
  *
  * @return {WPElement} Element to render.
  */
export default function Repeater({ attributes, setAttributes }) {
	const [items, setItems] = useState([
		{ id: 1, key: 'meta_key_1', value: 'meta_key_value_1', operator: 'IN' },
		{ id: 2, key: 'meta_key_2', value: 'meta_key_value_2', operator: 'NOT IN' },
		{ id: 3, key: 'meta_key_3', value: 'meta_key_value_3', operator: '<'}
	]);

	const [collapsedId, setCollapsedId] = useState(null);

	const handleItemRemove = (id) => {
		const newItems = items.filter( (item) => item.id !== id );
		setItems(newItems);
	}

	const handleItemDuplicate = (id) => {
		let duplicate = items.find( (item) => item.id === id );
		let newItems  = [...items];
			duplicate = {
				...duplicate,
				id: items.length + 1
			};
		
		newItems.splice(id, 0, duplicate);
		setItems(newItems);
	}

	const handleAddItem = () => {
		const newItem = [{ id: items.length + 1, key: 'Title', value: '', operator: '' }];
		setItems([
			...items,
			...newItem
		]);
	}

    return (
		<div className="uqb-control-wrapper">
			<h4 className="uqb-control-title">{ __( 'Custom Fields key/value', 'uqb' ) }</h4>
			<div className="uqb-repeater-fields-wrapper">
				{ items.map( (item) => (
					<div className="uqb-repeater-fields" key={item.id}>
						<div className="uqb-repeater-row-tools">
							<div
								className="uqb-repeater-row-item-title"
								onClick={ () => setCollapsedId(item.id) }
							>
								{item.key}
							</div>

							<div
								className="uqb-repeater-row-tool uqb-repeater-tool-duplicate"
								onClick={ () => handleItemDuplicate(item.id) }
							>
								<span className="uqb-repeater-icon">{icons.duplicate}</span>
							</div>
						
							<div className="uqb-repeater-row-tool uqb-repeater-tool-remove" onClick={ () => handleItemRemove(item.id) }>
								<span className="uqb-repeater-icon">{icons.remove}</span>
							</div>
						</div>
						<div className={`uqb-repeater-row-controls${ item.id === collapsedId ? ' editable' : '' }`}>
							<div className="uqb-control">
								<div className="uqb-control-content">
									<label htmlFor="meta_key">
										{ __( 'Name/Key', 'uqb' ) }
										<input type="text" name="meta_key" value={item.key} />
									</label>
								</div>
							</div>
							<div className="uqb-control">
								<div className="uqb-control-content">
									<label htmlFor="meta_value">
										{ __( 'Value', 'uqb' ) }
										<input type="text" name="meta_value" value={item.value} />
									</label>
								</div>
							</div>
							<div className="uqb-control">
								<div className="uqb-control-content">
									<label htmlFor="compare_operator">
										{ __( 'Compare Operator', 'uqb' ) }
										<input type="text" name="compare_operator" value={item.operator} />
									</label>
								</div>
							</div>
						</div>
					</div>
				)) }
			</div>
			<div className="uqb-control-button-wrapper">
				<button class="uqb-repeater-add" type="button" onClick={handleAddItem}>{icons.add}{ __( 'Add Item', 'uqb' ) }</button>
			</div>
		</div>
    );
}
