import { registerBlockType } from "@wordpress/blocks";
import {
  PanelBody,
  Placeholder,
  RangeControl,
  
} from "@wordpress/components";
import {
  useBlockProps,
  ColorPalette,
  InspectorControls,
} from '@wordpress/block-editor';

import CategorySelect from './category-picker';

registerBlockType("peta/carousel", {
  title: "Post Carousel",
  icon: "slides",
  category: "common",
  attributes: {
    slides: {
      type: 'number',
      default: 3,
    },
    termId: {
			type: 'number',
			default: 0
		},
  },
  edit: function (props) {
    const { attributes, setAttributes } = props;
 
    const selectTerm = (termId) => {
      setAttributes({ termId: termId });
    }
    return (
      <div>
        <InspectorControls>
				<PanelBody
					title={'Slider Settings'}
					initialOpen={true}
				>
					<RangeControl
						label={'Number of slides'}
						value={attributes.slides}
						onChange={(val) => setAttributes({ slides: val })}
						min={1}
						max={10}
					/>
				</PanelBody>
			</InspectorControls>
        <Placeholder label={"Slider Category"}>
          <CategorySelect 
          selectedTermId={attributes.termId}
					selectTerm={selectTerm}
          />
        </Placeholder>
      </div>
    );
  },
  save: ({ className }) => (
    <div className={className}> I am the frontend</div>
  ),
});
