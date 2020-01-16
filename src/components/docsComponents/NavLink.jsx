import { Box, PseudoBox, useColorMode } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
import React, { cloneElement, forwardRef } from "react"
import useLocation from "../../hooks/Location"
import PropTypes from "prop-types"

const NavLink = ({ children, href, ...props }) => {
  let isActive = false

  let location = useLocation()

  if (location.location.pathname === href) {
    isActive = true
  } else {
    isActive = false
  }

  return (
    <GatsbyLink to={href} {...props}>
      {typeof children === "function" ? children(isActive) : children}
    </GatsbyLink>
  )
}

export const stringToUrl = (str, path = "/docs/") => {
  return `${path}${str
    .toLowerCase()
    .split(" ")
    .join("-")}/`
}

export const SideNavLink = forwardRef(({ children, icon, ...props }, ref) => {
  const { colorMode } = useColorMode()
  return (
    <PseudoBox
      ref={ref}
      mx={-2}
      display="flex"
      cursor="pointer"
      align="center"
      px={3}
      py="1"
      transition="all 0.2s"
      fontSize="sm"
      fontWeight="500"
      outline="none"
      _focus={{ shadow: "outline" }}
      color={`mode.${colorMode}.text`}
      _notFirst={{ mt: 1 }}
      {...props}
    >
      {icon && cloneElement(icon, { mr: 3 })}
      <Box>{children}</Box>
    </PseudoBox>
  )
})

export const TopNavLink = forwardRef(({ href, ...props }, ref) => {
  const { colorMode } = useColorMode()
  const hoverColor = { light: "gray.900", dark: "gray.50" }
  const activeColor = { light: "purple.500", dark: "purple.200" }
  const activeBg = { light: "purple.50", dark: "purple.800" }
  return (
    <NavLink href={href}>
      {isActive => (
        <SideNavLink
          ref={ref}
          aria-current={isActive ? "page" : undefined}
          _hover={{
            color: hoverColor[colorMode],
            transform: "translateX(2px)",
          }}
          {...(isActive && {
            bg: activeBg[colorMode],
            rounded: "md",
            color: activeColor[colorMode],
            _hover: {
              transform: "translateX(2px)",
            },
            fontWeight: 700,
          })}
          {...props}
        />
      )}
    </NavLink>
  )
})

export const ComponentLink = forwardRef(({ href, ...props }, ref) => {
  const { colorMode } = useColorMode()
  const hoverColor = { light: "gray.900", dark: "gray.50" }
  const activeColor = { light: "purple.500", dark: "purple.200" }
  const activeBg = { light: "purple.50", dark: "purple.800" }

  return (
    <NavLink href={href}>
      {isActive => (
        <SideNavLink
          ref={ref}
          aria-current={isActive ? "page" : undefined}
          _hover={{
            color: hoverColor[colorMode],
            transform: "translateX(2px)",
          }}
          {...(isActive && {
            bg: activeBg[colorMode],
            rounded: "md",
            color: activeColor[colorMode],
            _hover: {
              transform: "translateX(2px)",
            },
            fontWeight: 700,
          })}
          {...props}
        />
      )}
    </NavLink>
  )
})

ComponentLink.propTypes = {
  href: PropTypes.node.isRequired,
}
