// @flow

import React from 'react'

import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import Bar from 'components/base/Bar'

const stories = storiesOf('Components/Bar', module)

stories.add('basic', () => <Bar size={number('size', 1)} color="grey" />)
