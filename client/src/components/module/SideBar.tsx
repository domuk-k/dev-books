import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaBookmark, FaHashtag, FaHome, FaPlus } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../atom/ColorModeSwitcher';
import Logo from '../atom/Logo';
import NavButton from '../atom/NavButton';

interface Props {}

const SiderBar: React.FC<Props> = () => {
  const { onToggle } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <Center
      as="header"
      h="100vh"
      py={8}
      borderRight="1px solid"
      borderColor={useColorModeValue('background.100', 'background.light')}
    >
      <Flex direction="column" align="center" justify="center" h="100%">
        <VStack as="nav" spacing="2rem" flexGrow={1}>
          <Logo fontSize="2rem" />
          <NavButton toURL="home">
            <FaHome />
          </NavButton>
          <NavButton toURL="browse">
            <FaHashtag />
          </NavButton>
          <NavButton toURL="saved">
            <FaBookmark />
          </NavButton>

          <Link to="/add">
            <IconButton icon={<FaPlus />} aria-label="add a book to list" />
            {/* <Button>Add New Book</Button> */}
          </Link>
        </VStack>
        <VStack spacing="2rem">
          <ColorModeSwitcher />
          <Box>
            <Popover placement="top-start">
              <PopoverTrigger>
                <Avatar onClick={onToggle} bg="purple.900" />
              </PopoverTrigger>
              <PopoverContent>
                <Button as={Link} to="/signin">
                  logout
                </Button>
                <PopoverArrow />
              </PopoverContent>
            </Popover>
          </Box>
        </VStack>
      </Flex>
    </Center>
  );
};

export default SiderBar;
