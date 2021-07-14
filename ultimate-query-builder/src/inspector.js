import React, { useEffect } from "react";
import { __ } from "@wordpress/i18n";
import MultiSelect from "multiselect-react-dropdown";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

import Repeater from "./components/Repeater";

import './editor.scss';

export default function Inspector({ attributes, setAttributes }) {
    const { postType, taxonomy, terms } = attributes;

	return (
		<InspectorControls key="controls">
			<PanelBody>
                <div className="uqb-select-post-type-control-wrap">
                    <h4>{ __( 'Select Post Type' ) }</h4>
                    <MultiSelect
                        id="uqb_post_type"
                        displayValue="label"
                        singleSelect
                        selectedValues={postType}
                        options={window.uqbPlugins.publicPostTypes}
                        onSelect={ (value) =>  setAttributes( { postType : value, taxonomy: null, terms: null } ) }
                        onRemove={ (value) => setAttributes( { postType : value, taxonomy: null, terms: null } ) }
                    />
                </div>               
                {postType && <div className="uqb-select-taxonomy-control-wrap">
                    <h4>{__( 'Select Post Taxonomy' )}</h4>
                    <MultiSelect
                        id="uqb_post_taxonomy"
                        displayValue="label"
                        singleSelect
                        selectedValues={taxonomy}
                        options={window.uqbPlugins.taxonomies[postType[0].value]}
                        onSelect={ (value) => setAttributes({ taxonomy: value, terms: null }) }
                        onRemove={ (value) => setAttributes({ taxonomy: value, terms: null }) }
                    />
                </div>}
                {taxonomy && <div className="uqb-select-terms-control-wrap">
                    <h4>{__( 'Select Terms' )}</h4>
                    <MultiSelect
                        id="uqb_post_terms"
                        displayValue="label"
                        selectedValues={terms}
                        options={window.uqbPlugins.terms[taxonomy[0].name]}
                        onSelect={ (value) => setAttributes({ terms: value }) }
                        onRemove={ (value) => setAttributes({ terms: value }) } 
                    />
                </div>}
                <Repeater
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
			</PanelBody>
		</InspectorControls>
	);
}