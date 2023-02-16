import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@jr-ignite-ui/react'

export default {
  title: 'Typegraphy/Heading',
  component: Heading,

  args: {
    children: 'lorem ipsum',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        // da para inserir jsx aqui
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`,',
      },
    },
  },
}
