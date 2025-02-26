import { Button, Container, HStack, Text, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { MdOutlineLightMode } from "react-icons/md";
import { useProductState} from "../../store/product";

const Navbar = () => {
    const {colorMode, toggleColorMode } = useColorMode();  

  return (
    <Container maxWidth={"1140px"} px={4} maxH={"4px"} bg={ useColorModeValue("gray.100", "gray.900") }>
      <Flex
        h={"16"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "coloum",
          sm: "24",
        }}
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="extrabold"
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            {/* Adding the shit to the mongo...*/}
            <Button>
              <PlusSquareIcon> </PlusSquareIcon>
            </Button>
          </Link>
          {/* Toggle light and dark mode...*/}
          <Button onClick={toggleColorMode}>
            { colorMode === 'light' ? '🌙' : '☀️' } 
          </Button>
        </HStack>

      </Flex>
    </Container>
  );
};

export default Navbar;
