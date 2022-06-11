import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

export default function Navbar() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.nav
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        position="sticky"
        top={0}
        zIndex={10}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1
              fontSize="xl"
              fontWeight="medium"
              ml="2"
              bgClip="text"
              bgGradient="linear(to-r, #e4b84a,rgb(248,75,24))"
            >
              MyPanchang
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="orange"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <Button w="full" variant="ghost">
                  About
                </Button>
              </Link>
              <Link
                to="features"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <Button w="full" variant="ghost">
                  Features
                </Button>
              </Link>
              <Link
                to="pricing"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
              </Link>
              <ChakraLink href="https://apps.apple.com/us/app/mypanchang/id1567820028">
                <Button w="full" variant="ghost">
                  Download
                </Button>
              </ChakraLink>
            </HStack>
            <Link href="https://radsoftinc.com/contact">
              <Button colorScheme="orange">Support</Button>
            </Link>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("grey.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
                color="orange"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  onClick={mobileNav.onClose}
                >
                  <Button w="full" variant="ghost">
                    About
                  </Button>
                </Link>
                <Link
                  to="features"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  onClick={mobileNav.onClose}
                >
                  <Button w="full" variant="ghost">
                    Features
                  </Button>
                </Link>
                <Link
                  to="pricing"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  onClick={mobileNav.onClose}
                >
                  <Button w="full" variant="ghost">
                    Pricing
                  </Button>
                </Link>
                <ChakraLink
                  href="https://apps.apple.com/us/app/mypanchang/id1567820028"
                  onClick={mobileNav.onClose}
                >
                  <Button w="full" variant="ghost">
                    Download
                  </Button>
                </ChakraLink>

                <Link
                  href="https://radsoftinc.com/contact"
                  onClick={mobileNav.onClose}
                >
                  <Button colorScheme="orange">Support</Button>
                </Link>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.nav>
    </React.Fragment>
  );
}
