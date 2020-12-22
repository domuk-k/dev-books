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
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaBookmark, FaHashtag, FaHome, FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CombinedState } from '../../app/modules';
import { logout } from '../../app/modules/auth/actions';
import { startLogout } from '../../app/modules/auth/saga/saga';
import { AuthInfo } from '../../app/modules/auth/types';
import { ColorModeSwitcher } from '../atom/ColorModeSwitcher';
import Logo from '../atom/Logo';
import NavButton from '../atom/NavButton';

interface Props {}

const SiderBar: React.FC<Props> = () => {
  const { onToggle } = useDisclosure();
  const dispatch = useDispatch();
  const user = useSelector<CombinedState, AuthInfo | null>(
    state => state.auth.user
  );

  return (
    <Center as="header" h="100vh" userSelect="none">
      <Flex
        direction="column"
        py={8}
        px="1rem"
        pos="fixed"
        align="center"
        justify="center"
        h="100%"
        borderRight="1px solid"
        borderColor={useColorModeValue('borderLight', 'borderDark')}
      >
        <VStack as="nav" spacing="2rem" flexGrow={1}>
          <NavButton toURL="/">
            <Logo logoType={1} />
          </NavButton>
          <NavButton toURL="/my">
            <FaHome />
          </NavButton>
          <NavButton toURL="/browse">
            <FaHashtag />
          </NavButton>
          <NavButton toURL="/saved">
            <FaBookmark />
          </NavButton>

          <Link to="/add">
            <IconButton icon={<FaPlus />} aria-label="add a book to list" />
          </Link>
        </VStack>
        <Flex direction="column" justifyContent="center">
          <ColorModeSwitcher mb="2rem" />
          <Popover placement="top-start">
            <PopoverTrigger>
              <Avatar
                name={user?.username}
                onClick={onToggle}
                bg={useColorModeValue('brandLight', 'brandDark')}
                userSelect="none"
              />
            </PopoverTrigger>
            <PopoverContent>
              <Button onClick={() => dispatch(startLogout(user))}>
                logout
              </Button>
              <PopoverArrow />
            </PopoverContent>
          </Popover>
        </Flex>
      </Flex>
    </Center>
  );
};

export default SiderBar;
