import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";

export default function City() {
  return (
    <>
    <Box borderRadius="4px" overflow="hidden">
      <Image src="/london.jpg" h="170px" w="100%" />
      <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">Londres</Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">Reino Unido</Text>
        </Flex>
        <Image src="/bandeira_reino_unido.png" w="30px" h="30px" borderRadius="50%" objectFit="cover" />
      </Flex>
    </Box>
    <Box borderRadius="4px" overflow="hidden">
      <Image src="/paris.jpg" h="170px" w="100%" />
      <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">Paris</Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">França</Text>
        </Flex>
        <Image src="/bandeira_franca.png" w="30px" h="30px" borderRadius="50%" objectFit="cover" />
      </Flex>
    </Box>
    <Box borderRadius="4px" overflow="hidden">
      <Image src="/roma.jpg" h="170px" w="100%" />
      <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">Roma</Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">Itália</Text>
        </Flex>
        <Image src="/bandeira_italia.png" w="30px" h="30px" borderRadius="50%" objectFit="cover" />
      </Flex>
    </Box>
    <Box borderRadius="4px" overflow="hidden">
      <Image src="/praga.jpg" h="170px" w="100%" />
      <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">Praga</Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">Republica Tcheca</Text>
        </Flex>
        <Image src="/bandeira_republica.png" w="30px" h="30px" borderRadius="50%" objectFit="cover" />
      </Flex>
    </Box>
    <Box borderRadius="4px" overflow="hidden">
      <Image src="/amsterda.jpg" h="170px" w="100%" />
      <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">Amsterdã</Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">Holanda</Text>
        </Flex>
        <Image src="/bandeira_holanda.png" w="30px" h="30px" borderRadius="50%" objectFit="cover" />
      </Flex>
    </Box>
    </>
  )
}