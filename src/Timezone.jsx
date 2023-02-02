import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function Timezone() {
  const bgColor = useColorModeValue("gray.100", "gray.700");

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const toast = useToast();
  const color = useColorModeValue("#0587B1", "#0587B1");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      toast({
        title: "Please fill in all fields",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    } else {
      setIsSubmitting(true);
      await axios.post(
        "https://mailer.geethg.com/radsoftinc/send/timezone",
        new URLSearchParams({
          name: name,
          email: email,
          timezone: message,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setIsSubmitting(false);
      toast({
        title: "We received your request and will get back to you soon",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      <Navbar />
      <Flex align="center" justify="center" id="Timezone" bg={bgColor}>
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}
        >
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Heading
                fontSize={{
                  base: "4xl",
                  md: "5xl",
                }}
              >
                Request a Timezone
              </Heading>

              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: "column", md: "row" }}
              >
                <Box
                  bg={useColorModeValue("gray.50", "gray.800")}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue("blackAlpha.900", "whiteAlpha.900")}
                  shadow="base"
                >
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>

                      <InputGroup>
                        <InputLeftElement>
                          <BsPerson color={color} />
                        </InputLeftElement>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          color={color}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement>
                          <MdOutlineEmail color={color} />
                        </InputLeftElement>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          color={color}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Time Zone</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Timezone in the following format: Central Standard Time"
                        rows={6}
                        resize="none"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        color={color}
                      />
                    </FormControl>

                    <Button
                      color="#0587B1"
                      border="1px"
                      borderColor="#0587B1"
                      width="full"
                      variant="outline"
                      size="sm"
                      as="a"
                      cursor="pointer"
                      isLoading={isSubmitting}
                      onClick={handleSubmit}
                    >
                      Send Request
                    </Button>
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
export default Timezone;
