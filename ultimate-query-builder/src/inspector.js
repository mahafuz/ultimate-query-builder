import React from "react";
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl
} from "@wordpress/components";

import Repeater from "./components/Repeater";

export default function Inspector({ attributes, setAttributes }) {
    const { postType, taxonomy } = attributes;
    console.log(taxonomy);
    // console.log(window.uqbPlugins.terms[taxonomy]);
	return (
		<InspectorControls key="controls">
			<PanelBody>
                <SelectControl
                    label={ __( 'Select Post Type' ) }
                    options={window.uqbPlugins.publicPostTypes}
                    onChange={ (value) => setAttributes({ postType: value }) }
                />
                {postType && <SelectControl
                    label={ __( 'Select Post Taxonomy' ) }
                    options={window.uqbPlugins.taxonomies}
                    onChange={ (value) => setAttributes({ taxonomy: value }) }
                />}

                { taxonomy && <SelectControl
                    multiple
                    label={ __( 'Select Post Terms' ) }
                    options={window.uqbPlugins.terms[taxonomy]}
                />}
                
                <Repeater />
			</PanelBody>
		</InspectorControls>
	);
}