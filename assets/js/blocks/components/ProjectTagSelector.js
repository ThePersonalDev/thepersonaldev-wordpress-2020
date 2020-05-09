import {Component} from '@wordpress/element'
import {InspectorControls} from '@wordpress/editor'
import {PanelBody, PanelRow, SelectControl, Spinner} from '@wordpress/components'
import apiFetch from '@wordpress/api-fetch'

// @see https://www.ibenic.com/create-gutenberg-block-displaying-post/
export default class ProjectGridTagSelector extends Component {
  /**
   * Generate
   */
  static getInitialState () {
    return {
      tags: []
    }
  }
 
  /**
   * Set state
   */
  constructor () {
    super(...arguments)
    this.state = this.constructor.getInitialState()
    this.getTags()
  }

  /**
   * Fetch tags from the server
   */
  getTags () {
    apiFetch({path: '/wp/v2/project_tag'}).then(results => {
      let tags = results.map(result => ({
        label: result.name,
        value: result.id
      }))

      this.state.tags = tags
    })
  }

  /**
   * Render the multiselect field
   */
  render () {
    let {excludedTags} = this.props.attributes.excludedTags
    let tags = this.state.tags

    return (
      <InspectorControls>
        <PanelBody title="Tag Manager">
          {tags
            ? <PanelRow>
                <SelectControl multiple label="Excluded tags" value={excludedTags} options={tags} onChange={this.props.onChange} />
              </PanelRow>
    
            : <Spinner />
          }
        </PanelBody>
      </InspectorControls>
    )
  }
}