import React, { useState } from "react"
import {
  useColorMode,
  Avatar,
  Stack,
  Text,
  Box,
  Collapse,
  Button,
  Flex,
} from "@chakra-ui/core"

const TestimonialCard = ({ review, reviewer, avatar }) => {
  const { colorMode } = useColorMode()
  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)
  return (
    <Box
      backgroundColor={colorMode === "light" ? "gray.50" : "gray.800"}
      p={6}
      m={4}
      rounded="lg"
    >
      <Collapse startingHeight={64} isOpen={show}>
        <Text lineHeight="tall">{review}</Text>
      </Collapse>
      <Stack isInline alignItems="center" justifyContent="space-between" mt={4}>
        <Flex alignItems="center">
          <Avatar size="md" name={reviewer} src={avatar} mr={4} />
          <Text lineHeight="base" fontWeight={900}>
            {reviewer}
          </Text>
        </Flex>
        <Button
          size="sm"
          variant="ghost"
          variantColor="gray"
          onClick={handleToggle}
          fontWeight={600}
        >
          Show {show ? "Less" : "More"}
        </Button>
      </Stack>
    </Box>
  )
}

export default TestimonialCard
