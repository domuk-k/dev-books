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
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaBookmark, FaHashtag, FaHome, FaPlus } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../atom/ColorModeSwitcher';
import Logo from '../atom/Logo';

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
      borderColor={colorMode === 'dark' ? 'background.100' : 'background.light'}
    >
      <Flex direction="column" align="center" justify="center" h="100%">
        <VStack as="nav" spacing="2rem" flexGrow={1}>
          <Logo fontSize="2rem" />
          <IconButton
            as={NavLink}
            to="/home"
            _activeLink={{ color: 'brand' }}
            aria-label="book marks"
            _hover={{ bg: 'brandAlpha', color: 'brand' }}
            _active={{ bg: 'brandAlpha', color: 'brand' }}
            isRound={true}
            variant="ghost"
            h="48px"
            w="48px"
            fontSize="2xl"
          >
            <FaHome />
          </IconButton>
          <IconButton
            as={NavLink}
            to="/explore"
            _activeLink={{ color: 'brand' }}
            aria-label="book marks"
            _hover={{ bg: 'brandAlpha', color: 'brand' }}
            _active={{ bg: 'brandAlpha', color: 'brand' }}
            isRound={true}
            variant="ghost"
            h="48px"
            w="48px"
            fontSize="2xl"
          >
            <FaHashtag />
          </IconButton>
          <IconButton
            as={NavLink}
            to="/bookmarks"
            aria-label="book marks"
            _hover={{ bg: 'brandAlpha', color: 'brand' }}
            _active={{ bg: 'brandAlpha', color: 'brand' }}
            _activeLink={{ color: 'brand' }}
            isRound={true}
            variant="ghost"
            h="48px"
            w="48px"
            fontSize="2xl"
            icon={<FaBookmark />}
          ></IconButton>
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
