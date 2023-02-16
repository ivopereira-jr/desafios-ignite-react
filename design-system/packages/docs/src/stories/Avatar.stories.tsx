import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@jr-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/ivopereira-jr.png',
    alt: 'Ivo pereira',
  },
  argTypes: {
    src: { control: 'text' },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
