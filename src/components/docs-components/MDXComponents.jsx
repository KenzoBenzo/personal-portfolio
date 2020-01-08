import React, { forwardRef } from "react"
import {
  Box,
  Callout,
  Code,
  Heading,
  Kbd,
  PseudoBox,
  Text,
  useColorMode,
  Divider,
} from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
import CodeBlock from "./CodeBlock"

const Pre = props => (
  <Box my="2em" style={{ fontSize: "16px" }} rounded="sm" {...props} />
)

const Table = props => (
  <Box as="table" textAlign="left" mt="32px" width="full" {...props} />
)

const THead = props => {
  const { colorMode } = useColorMode()
  const bg = { light: "gray.50", dark: "whiteAlpha.100" }
  return (
    <Box
      as="th"
      bg={bg[colorMode]}
      fontWeight="semibold"
      p={2}
      fontSize="sm"
      {...props}
    />
  )
}

const TData = props => (
  <Box
    as="td"
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
)

const Link = forwardRef((props, ref) => (
  <PseudoBox
    ref={ref}
    color="blue.500"
    cursor="pointer"
    textDecoration="underline"
    outline="none"
    _hover={{ opacity: "0.8" }}
    _focus={{ boxShadow: "outline" }}
    {...props}
  />
))

const DocsHeading = props => (
  <Heading
    mb="1em"
    mt="2em"
    css={{
      "&[id]": {
        pointerEvents: "none",
      },
      "&[id]:before": {
        display: "block",
        height: " 6rem",
        marginTop: "-6rem",
        visibility: "hidden",
        content: `""`,
      },
      "&[id]:hover a": { opacity: 1 },
    }}
    {...props}
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <PseudoBox
          aria-label="anchor"
          as="a"
          color="teal.500"
          fontWeight="normal"
          outline="none"
          _focus={{ opacity: 1, boxShadow: "outline" }}
          opacity="0"
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </PseudoBox>
      )}
    </Box>
  </Heading>
)

const Quote = props => {
  const { colorMode } = useColorMode()
  return (
    <Callout
      mt={6}
      rounded="lg"
      variant="left-accent"
      color={colorMode === "light" ? "blue.900" : "blue.100"}
      status="info"
      css={{ "> *:first-of-type": { marginTop: 0 } }}
      {...props}
    />
  )
}

const StyledLink = ({ href, ...props }) => {
  const { colorMode } = useColorMode()
  return (
    <GatsbyLink to={href}>
      <Link
        {...props}
        color={`mode.${colorMode}.link`}
        textDecoration="none"
        style={{
          display: "inline-flex",
        }}
      />
    </GatsbyLink>
  )
}

const MDXComponents = {
  h1: props => (
    <Heading as="h1" size="xl" my="1em" fontWeight="900" {...props} />
  ),
  h2: props => <DocsHeading as="h2" size="lg" fontWeight="800" {...props} />,
  h3: props => <DocsHeading as="h3" size="md" fontWeight="700" {...props} />,
  inlineCode: props => <Code variantColor="blue" fontSize="xs" {...props} />,
  code: CodeBlock,
  pre: Pre,
  kbd: Kbd,
  br: props => <Box height="16px" {...props} />,
  hr: props => <Divider borderColor="gray.200" my={8} {...props} />,
  table: Table,
  th: THead,
  td: TData,
  a: StyledLink,
  p: props => <Text as="p" mt={4} lineHeight="tall" {...props} />,
  ul: props => <Box as="ul" pt="8px" pl="16px" {...props} />,
  ol: props => <Box as="ol" pt="8px" pl="16px" {...props} />,
  li: props => <Box as="li" pb="4px" {...props} />,
  blockquote: Quote,
}

export default MDXComponents
