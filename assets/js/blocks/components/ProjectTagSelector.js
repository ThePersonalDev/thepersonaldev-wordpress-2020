import {Component} from '@wordpress/element'
import {PanelRow, SelectControl, Spinner} from '@wordpress/components'

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
  }

  /**
   * Render the multiselect field
   */
  render () {
    let {excludedTags} = this.props.attributes.excludedTags

    return (this.props.tags
      ? <PanelRow>
          <SelectControl multiple label="Excluded tags" value={excludedTags} options={this.props.tags} onChange={this.props.onChange} />
        </PanelRow>

      : <Spinner />
    )
  }
}