import React from "react"
import Layout from "../components/layouts/layout"
import { Link } from "gatsby"
import { Button, Text, Stack } from "@chakra-ui/core"

const NotFoundPage = () => (
  <Layout>
    <Stack justify="center" h="80vh" style={{ textAlign: "center" }}>
      <Text fontSize="6xl">NOT FOUND</Text>
      <Text fontSize="lg">
        You just hit a route that doesn&#39;t exist... the sadness.
      </Text>
      <Link to="/">
        <Button variantColor="primary" size="lg" m={8}>
          Go back home
        </Button>
      </Link>
    </Stack>
  </Layout>
)

export default NotFoundPage
