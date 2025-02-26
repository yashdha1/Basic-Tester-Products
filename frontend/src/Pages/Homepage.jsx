import React, { useEffect } from "react";
import { Container, VStack, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductState } from "../../store/product";
import ProductCard from "../components/ProductCard"; 
const Homepage = () => {

  // Getting all the Products from the Database....
  const { fetchProduct, products } = useProductState();
  useEffect(() => {
    fetchProduct();
    console.log("Fetching products...");
  }, [fetchProduct]);
  console.log("Products", products);

  return (
    <Container maxW="Container.xl" py={12}>
      <VStack spacing={8}>
        <Heading as="h2" size="xl" textAlign={"center"} mb={8}>
          Products List...
        </Heading>

        {/* adding the product list as the grid */}
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {/* map indivisual products using the .map function */}
          {products?.map((product) =>(
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {/* text when products is empty */}
        {products.length === 0 && (
					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>
				)}
      </VStack>
    </Container>
  );
};

export default Homepage;
