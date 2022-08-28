import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";

import iosdev from "../../images/iosdev.svg";

export default function About() {
  return (
    <Flex
      bg={useColorModeValue("gray.50", "gray.900")}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      id="about"
    >
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"#0587B1"}
              fontWeight={600}
              fontSize={"sm"}
              p={2}
              alignSelf={"flex-start"}
              mb={4}
              rounded={"sm"}
            >
              About
            </Text>
            <Heading>MyPanchang</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              MyPanchang displays the three elements things in the Hindu
              Panchangam. First, it shows the Tithi. Second, it shows the
              Nakshatra. Finally, it shows the current Hindu Festival for the
              day. However, the best part of the app is viewing the Panchangam
              just from your home screen using widgets! Currently, MyPanchang is
              the only app that displays your live Panchanga right from your
              home screen with Widgets.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            ></Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={iosdev}
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
