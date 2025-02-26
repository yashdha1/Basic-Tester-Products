import {
  Box,
  Container,
  Heading,
  Input,
  useColorModeValue,
  VStack,
  Button, 
  useToast
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useProductState } from "../../store/product";

const CreatePage = () => {
  // useState return the changes value and method to change that value
  const [ newProduct, setNewProduct ] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductState(); 
  const toast = useToast() 

  const handleAddProduct = async ()=>{
    const { success, message } = await createProduct(newProduct) 
    
    const displayMessage = message && message.trim() !== "" ? message : "Fill all the fields...";
    toast({
        title: success ? "Success" : "Error",
        description: displayMessage ,
        status: success ? "success" : "error", // Use "success" or "error"
        duration: 3000,
        isClosable: true,
      });
    
    console.log(displayMessage, success) 
    console.log(newProduct) 
  };

  return (
    <Container maxWidth={Container.md} display="flex" alignItems="center" justifyContent="center" minH="100vh">
      <VStack spacing={8}>
        <Box
          w={"sm"}
          bg={useColorModeValue("white", "gray.700")}
          p={"6"}
          rounded={"lg"}
          shadow={"md"}
          justifyContent={"center"}
        >
          <Heading as={"h1"} size={"2xl"} textAlign={"center"}   mb={8}>
             Create New Product.
          </Heading>
          <VStack spacing={6}>
            <Input
              placeholder="Name"
              type="String"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image link"
              name="image"
              type="String"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <Button 
            colorScheme='teal'
            onClick = {handleAddProduct} 
            w='max'
            >
                Add Product </Button>  
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage
