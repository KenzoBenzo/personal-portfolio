import {
  Drawer,
  DrawerBody,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/core"
import React from "react"
import { SideNavContent } from "./SideNav"

const MobileNav = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        display={{ sm: "inline-flex", md: "none" }}
        aria-label="Navigation Menu"
        fontSize="20px"
        variant="ghost"
        icon="hamburger"
        onClick={onToggle}
      />
      <Drawer size="xs" isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody p={0}>
            <SideNavContent contentHeight="100vh" top="0" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileNav
