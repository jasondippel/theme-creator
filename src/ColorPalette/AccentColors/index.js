import React from 'react'
import { ColorGroup } from '../ColorGroup'
import { PrimaryColors } from './PrimaryColors'
import { ErrorColors } from './ErrorColors'
import { WarningColors } from './WarningColors'
import { SuccessColors } from './SuccessColors'

export const AccentColors = () => (
  <ColorGroup title={'Accents'}>
    <PrimaryColors />
    <SuccessColors />
    <WarningColors />
    <ErrorColors />
  </ColorGroup>
)
