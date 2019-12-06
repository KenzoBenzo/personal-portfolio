import React from "react"
import Layout from "../components/layout"
import { Box, Text, Tag, Stack, Button, Flex } from "@chakra-ui/core"

const HomePage = () => (
  <Layout>
    <Stack
      backgroundColor="gray.100"
      d="flex"
      isInline
      py={2}
      px={12}
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex isInline>
        <Tag variantColor="primary" rounded="full" size="sm" mr={4}>
          New Dribbble Shot
        </Tag>
        <Text m={0} fontSize="sm">
          New GraphCMS Website Design
        </Text>
      </Flex>
      <Button as="a" fontSize="sm" size="sm" m={0}>
        Check out the post ->
      </Button>
    </Stack>

    <Box></Box>
  </Layout>
)

export default HomePage
