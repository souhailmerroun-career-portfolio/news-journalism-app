
import { ComponentMeta } from '@storybook/react';
import Navbar from './Navbar';
import { titlePrefix } from '../storybookDefaultTitle';

export default {
  title: `${titlePrefix}/Navbar`,
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const LoggedIn = () => <Navbar loggedIn={true} />;

export const LoggedOut = () => <Navbar loggedIn={false} />;