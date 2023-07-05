import React, { useRef } from "react";
import { Box, Flex, Link, Grid, Icon, useColorModeValue, useDisclosure, IconButton, Collapse } from "@chakra-ui/react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import "../../styles/header.css";
import { Icon as Iconify } from '@iconify/react';

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: !isOpen ? 'none' : 'inherit' }}
          onClick={onToggle}
        />
        <Box>
          <Link as={RouterLink} to="/home">
            <Flex alignItems={'center'}>
              <Iconify icon="mdi:car-limousine" color="white" />
              <Box ml={2}>ABC<br />Limo</Box>
            </Flex>
          </Link>
        </Box>
        <Box display={{ base: 'none', md: 'flex' }}>
          {navLinks.map((item, index) => (
            <NavLink
              to={item.path}
              fontSize={'xl'}
              color='gray.500'
              _hover={{ textDecoration: 'none', color: 'gray.800' }}
              key={index}
              activeClassName='active-link'  // apply 'active-link' class when route is active
            >
              {item.display}
            </NavLink>
          ))}
        </Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap={{ base: 4, md: 8 }}
        >
          {navLinks.map((item, index) => (
            <NavLink
              to={item.path}
              fontSize={'xl'}
              color='gray.500'
              _hover={{ textDecoration: 'none', color: 'gray.800' }}
              key={index}
              activeClassName='active-link'  // apply 'active-link' class when route is active
            >
              {item.display}
            </NavLink>
          ))}
        </Grid>
      </Collapse>
    </Box>
  );
};

export default Header;
