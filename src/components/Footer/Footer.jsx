import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaApple, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Text
          bgClip="text"
          bgGradient="linear(to-r, #F1BD73,#0587B1)"
          fontWeight="extrabold"
          fontSize={"2xl"}
        >
          Rad Soft, Inc.
        </Text>
        <Text fontSize={"sm"}>
          Designed by Geeth Gunnampalli
        </Text>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Rad Soft Inc. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/radsoftinc"}
            >
              <FaInstagram />
            </SocialButton>
            <SocialButton
              label={"Linkdin"}
              href={"https://www.linkedin.com/company/radsoftinc"}
            >
              <FaLinkedin />
            </SocialButton>
            <SocialButton
              label={"Apple"}
              href="https://apps.apple.com/us/app/mypanchang/id1567820028"
            >
              <FaApple />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
