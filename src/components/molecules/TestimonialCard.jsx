import React, { useState } from "react"
import {
  useColorMode,
  Avatar,
  Text,
  Box,
  Collapse,
  Button,
  Flex,
} from "@chakra-ui/core"

const TestimonialCard = ({ review, reviewer, avatar, ...props }) => {
  const { colorMode } = useColorMode()
  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)
  return (
    <Box
      backgroundColor={colorMode === "light" ? "gray.50" : "gray.800"}
      p={6}
      rounded="lg"
      {...props}
    >
      <Collapse startingHeight={64} isOpen={show}>
        <Text lineHeight="tall" fontSize="md" color={`mode.${colorMode}.text`}>
          {review}
        </Text>
      </Collapse>
      <Flex wrap="wrap" align="center" justify="space-between" mt={4}>
        <Flex alignItems="center">
          <Avatar size="md" name={reviewer} src={avatar} mr={4} />
          <Text
            lineHeight="base"
            fontSize="md"
            fontWeight={900}
            color={`mode.${colorMode}.text`}
          >
            {reviewer}
          </Text>
        </Flex>
        <Button
          size="sm"
          variant="ghost"
          variantColor="gray"
          onClick={handleToggle}
          fontWeight={600}
          mt={[4, 0]}
          color={`mode.${colorMode}.text`}
        >
          Show {show ? "Less" : "More"}
        </Button>
      </Flex>
    </Box>
  )
}

export default TestimonialCard
