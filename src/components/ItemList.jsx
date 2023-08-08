import {
  Box,
  Grid,
  Text,
  Heading,
  Spinner,
  Center,
  HStack,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import Item from "./Item";
import useDataFetching from "../hooks/fetchItemData";

const ItemList = ({
  handleAddCart,
  handleClearItems,
  itemQuantity,
  loading,
  error,
  data,
}) => {
  if (loading)
    return (
      <Center p={10}>
        <HStack spacing={5}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
          <Text>Loading...</Text>
        </HStack>
      </Center>
    );
  if (error) return <Text>{error.message + " Oops come back later"}</Text>;
  return (
    <>
      <Box>
        <Heading p={5} textAlign={"center"}>
          Today&apos;s Stock
        </Heading>
      </Box>
      <Grid templateColumns="repeat(1, 1fr)" gap={20} p={5}>
        {data.map((item) => (
          <Item
            key={item.id}
            itemId={item.id}
            image={item.image}
            desc={item.description}
            title={item.title}
            handleAddCart={handleAddCart}
            handleClearItems={handleClearItems}
            itemQuantity={itemQuantity}
          >
            <Text p={5} fontWeight={"semibold"} fontSize={"lg"}>
              {item.title}
            </Text>
            <Text> {}</Text>
            <Text
              textAlign={"end"}
              color={"green"}
              fontWeight={"bold"}
              fontSize={32}
            >
              ${item.price}
            </Text>
          </Item>
        ))}
      </Grid>
    </>
  );
};

ItemList.propTypes = {
  handleAddCart: PropTypes.func.isRequired,
  handleClearItems: PropTypes.func.isRequired,
  itemQuantity: PropTypes.func.isRequired,
};

export default ItemList;
