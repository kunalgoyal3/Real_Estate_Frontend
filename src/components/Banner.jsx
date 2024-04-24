import {
  HStack,
  VStack,
  Button,
  Text,
  Heading,
  Stack,
  Box,
  Image,
} from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";

import { bannerData } from "../data";
import Apartment1Lg from "../assets/images/apartments/a1lg.png";
import Apartment6Lg from "../assets/images/apartments/a6lg.png";

const Banner = () => {
  return (
    <>
      <Stack direction="row" my='6' overflow='hidden'>
        <VStack
          flexGrow='1'
          px={{ sm: "6", md: "10" }}
          py={{ sm: '8',  md: "16" }}
          bg="pink.100"
          justify="center"
          align="left"
          borderRadius="xl"
        >
          <Heading fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}>
            Find Real Estate That Suits You.
          </Heading>
          <Text fontSize="sm">
          Welcome to our vibrant real estate haven, where dreams find their address and aspirations come to life. Discover a world of endless possibilities as we guide you through our curated selection of properties, each one a masterpiece waiting to be called home.
          </Text>
          <Box pt="3" pb="8">
            <Button>Get Started</Button>
          </Box>

          <HStack spacing="3">
            {bannerData.map((item, index) => (
              <VStack
                key={index}
                bg="pink.200"
                p="4"
                borderRadius="md"
                align="left"
                pr="3"
              >
                <HStack>
                  <Text fontSize={{sm: '14px', md: 'md'}} fontWeight="extrabold" mr="-2">
                    {Object.keys(item)}
                  </Text>{" "}
                  <BiPlus style={{ color: "#ED64A6" }} />
                </HStack>
                <Text fontSize={{sm: '12px', md: 'sm'}}>{Object.values(item)}</Text>
              </VStack>
            ))}
          </HStack>
        </VStack>

        <VStack justify='center'>
          <Box h='100%' display={{ base: "none", lg: "block", xl:'none' }} >
            <Image
              src={Apartment1Lg}
              alt="house"
              h='100%'
              objectFit='cover'
            />
          </Box>
          <Box h='50%' display={{ base: "none", xl: "block" }}>
            <Image
              src={Apartment1Lg}
              alt="house"
              style={{height: '100%', width: '100%', objectFit: 'contain'}}
            />
          </Box>
          <Box h='50%' display={{ base: "none", xl: "block" }}>
            <Image
              src={Apartment6Lg}
              alt="house"
              style={{height: '100%', width: '100%', objectFit: 'contain'}}
            />
          </Box>
        </VStack>
      </Stack>
    </>
  );
};

export default Banner;
