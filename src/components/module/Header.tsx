import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../atom/ColorModeSwitcher';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <Center as="header">
      <Flex align="center" h="73px" w={'90vw'}>
        <Box flexGrow={1}>
          <Text as="h1" fontSize="2.2em" fontWeight="800" letterSpacing="-2px">
            devooks
          </Text>
        </Box>
        <ColorModeSwitcher />
        {false ? (
          <Button>login</Button>
        ) : (
          <>
            <Button>
              <Link to="/add">add</Link>
            </Button>
            <Button>
              <Link to="/signin">logout</Link>
            </Button>
          </>
        )}
      </Flex>
    </Center>
  );
};

export default Header;
