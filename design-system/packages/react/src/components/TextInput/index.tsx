import { ComponentProps } from 'react'

import { Input, Preffix, TextInpuntContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInpuntContainer>
      {!!prefix && <Preffix></Preffix>}
      <Input {...props} />
    </TextInpuntContainer>
  )
}

TextInput.displayName = 'TextInput'
