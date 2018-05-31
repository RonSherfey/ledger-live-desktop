// @flow

import React, { Component } from 'react'
import ReactSelect from 'react-select'
import { translate } from 'react-i18next'

import createStyles from './createStyles'
import createRenderers from './createRenderers'

type Props = {
  // required
  value: ?Option,
  options: Option[],
  onChange: Option => void,

  // custom renders
  renderOption: Option => Node,
  renderValue: Option => Node,

  // optional
  placeholder?: string,
  isClearable?: boolean,
  isDisabled?: boolean,
  isLoading?: boolean,
  isSearchable?: boolean,
  width: number,
  minWidth: number,
}

export type Option = {
  value: 'string',
  label: 'string',
  data: any,
}

class Select extends Component<Props> {
  handleChange = (value, { action }) => {
    const { onChange } = this.props
    if (action === 'select-option') {
      onChange(value)
    }
  }

  render() {
    const {
      value,
      isClearable,
      isSearchable,
      isDisabled,
      isLoading,
      placeholder,
      options,
      renderOption,
      renderValue,
      width,
      minWidth,
      ...props
    } = this.props

    return (
      <ReactSelect
        value={value}
        maxMenuHeight={300}
        classNamePrefix="select"
        options={options}
        components={createRenderers({ renderOption, renderValue })}
        styles={createStyles({ width, minWidth })}
        placeholder={placeholder}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isSearchable={isSearchable}
        blurInputOnSelect={false}
        onChange={this.handleChange}
        backspaceRemovesValue
        menuShouldBlockScroll
        {...props}
      />
    )
  }
}

export default translate()(Select)
