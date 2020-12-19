import { IconButton, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  toURL: string;
}

const NavButton: React.FC<Props> = ({ children, toURL }) => {
  return (
    <IconButton
      as={NavLink}
      to={toURL}
      _activeLink={{
        color: useColorModeValue('brandDark', 'brandLight'),
      }}
      aria-label="book marks"
      isRound={true}
      variant="ghost"
      h="48px"
      w="48px"
      fontSize="2xl"
    >
      {children}
    </IconButton>
  );
};

export default NavButton;
