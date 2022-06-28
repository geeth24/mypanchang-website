import React from "react";
import {
  chakra,
  Box,
  Flex,
  Link,
  useColorModeValue,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";

export default function Pricing() {
  return (
    <Flex
      w="full"
      bg={useColorModeValue("gray.50", "gray.900")}
      p={50}
      alignItems="center"
      justifyContent="center"
      id="pricing"
    >
      <Box
        maxW="7xl"
        px={4}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
        bg={useColorModeValue("white", "gray.800")}
        rounded="md"
        shadow="base"
      >
        <Box
          px={[0, 4]}
          py={20}
          borderWidth="1"
          borderColor={useColorModeValue("gray.100", "gray.700")}
        >
          <Box w={["full", "70%"]} mx="auto">
            <chakra.span
              fontSize="2xl"
              fontWeight="medium"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Pricing
            </chakra.span>
            <Text
              mb={2}
              fontSize="5xl"
              fontWeight={["bold", "extrabold"]}
              lineHeight="tight"
            >
              Free
            </Text>
            <chakra.p
              mb={6}
              fontSize={["lg", "xl"]}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              A detailed report of the day. Alternatively called as the mirror
              of the very sky, in paper and ink. Available only on App Store
            </chakra.p>
            <Stack
              display={["block", "flex"]}
              spacing={2}
              justifyContent="center"
              direction={["column", "row"]}
            >
              <Button
                as="a"
                w={["full", "auto"]}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                shadow="md"
                colorScheme="orange"
                variant="outline"
                href="https://apps.apple.com/us/app/mypanchang/id1567820028"
              >
                Download
              </Button>
              <Link href="https://radsoftinc.com/contact">
                <Button
                  w={["full", "auto"]}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  shadow="md"
                  colorScheme="orange"
                >
                  Support
                </Button>
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
