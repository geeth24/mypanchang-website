import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Stack,
  GridItem,
  Image,
} from "@chakra-ui/react";

import icon from "../../images/Icon.png";

export default function Features() {
  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color={useColorModeValue("brand.500", "brand.300")}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="bold"
            lineHeight="6"
            color={useColorModeValue("gray.900")}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Box
      shadow="xl"
      bg={useColorModeValue("#ffffff", "gray.600")}
      px={8}
      py={20}
      mx="auto"
      id="features"
      m={10}
    >
      <SimpleGrid
        alignItems="center"
        columns={{ base: 1, lg: 3 }}
        spacingY={{ base: 10, lg: 32 }}
        spacingX={{ base: 10, lg: 24 }}
      >
        <Box alignSelf="start">
          <chakra.h2
            color={useColorModeValue("brand.500")}
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Everything you need
          </chakra.h2>
          <chakra.h2
            mb={3}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="extrabold"
            textAlign={{ base: "center", sm: "left" }}
            color={useColorModeValue("black")}
            lineHeight="shorter"
            letterSpacing="tight"
          >
            All-in-one App
          </chakra.h2>
          <Image
            src={icon}
            alt="MyPanchang"
            size="lg"
            rounded="full"
            boxSize="100px"
          />
        </Box>
        <GridItem colSpan={2}>
          <Stack
            spacing={{ base: 10, md: 0 }}
            display={{ md: "grid" }}
            gridTemplateColumns={{ md: "repeat(2,1fr)" }}
            gridColumnGap={{ md: 8 }}
            gridRowGap={{ md: 10 }}
          >
            <Feature title="Tithi">
              Tithi (तिथि) refers to a “lunar day”:—There are approximately 29.5
              lunar days in a lunar month. The first fifteen days begin with the
              first phase of the waxing moon (pratipat) and end with the full
              moon (pūrṇimā). The list then repeats itself with the first phase
              of the waning moon (pratipat) and ends with the new moon
              (amāvasyā).{" "}
            </Feature>
            <Feature title="Nakshatra">
              In Hindu astrology, Nakshatras play a very important role. Once a
              child is born, they should be given an auspicious name
              corresponding to the Nakshatra of the child. To derive the name
              one should first check and see to which nakshatra the moon is in
              at the moment of birth.
            </Feature>
            <Feature title="Festivals">
              {" "}
              Hindu festivals are combinations of religious ceremonies,
              semi-ritual spectacles, worship, prayer, lustrations, processions,
              music and dances, eating, drinking, lovemaking, licentiousness,
              feeding the poor, and other activities of a religious or
              traditional character.
            </Feature>
            <Feature title="Paksha">
              {" "}
              Literally meaning "side", a paksha is the period either side of
              the Full Moon Day ( Purnima ). A lunar month in the Hindu calendar
              has two fortnights, and begins with the New moon, ( Amavasya ).
              The lunar days are called tithis and each month has 30 tithis,
              which may vary from 20 – 27 hours.{" "}
            </Feature>
            <Feature title="Rithu">
              {" "}
              Ṛtu (ऋतु, “Period”):—Fourth of the eight Mātṛs born from the body
              of Śaśinī, according to the Kubjikāmata-tantra. These eight
              sub-manifestations ( mātṛ ), including Ṛtu, symbolize a connection
              to the moon. They are presided over by the Bhairava Krodha and his
              consort Vaiṣṇavī.
            </Feature>
            <Feature title="Sunrise & Sunset">
              {" "}
              Surya, as the sun god, represents the visible form of the divine,
              one that you can plainly see every day. Depicted as a red man with
              three eyes and four arms, the deity is commonly pulled around in a
              chariot, carried by either seven horses or one horse with seven
              heads. The east side is considered very auspicious for any
              activity or work like worship, puja etc.{" "}
            </Feature>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
