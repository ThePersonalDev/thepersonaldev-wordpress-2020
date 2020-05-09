import {Component} from '@wordpress/element'
import {InspectorControls} from '@wordpress/editor'
import {PanelBody, PanelRow, SelectControl, Spinner} from '@wordpress/components'

// @see https://www.ibenic.com/create-gutenberg-block-displaying-post/
export default class ProjectGridTagSelector extends Component {
  /**
   * Generate
   */
  static getInitialState ({excludedTags}) {
    return {
      tags: [],
      excludedTags
    }
  }
 
  /**
   * Set state
   */
  constructor () {
    super(...arguments)
    this.state = this.constructor.getInitialState(this.props.attributes)
    this.getTags()
  }

  /**
   * Fetch tags from the server
   */
  getTags () {
    console.log(this)
  }
  
  /**
   * Render the multiselect field
   */
  render () {
    let {excludedTags} = this.props.attributes.excludedTags
    let tags = []
    
    return (
      <InspectorControls>
        <PanelBody title="Tag Manager">
          {tags.length
            ? <PanelRow>
                <SelectControl multiple label="Excluded tags" value={excludedTags} options={tags} />
              </PanelRow>
    
            : <Spinner />
          }
        </PanelBody>
      </InspectorControls>
    )
  }
}