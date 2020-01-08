import React from "react"
import { Image, useColorMode } from "@chakra-ui/core"

const DribbbleCard = ({ url, cover }) => {
  const { colorMode } = useColorMode()
  return (
    <a href={url} alt="A project by makenna">
      <Image
        src={cover}
        alt="Dribbble Shot from Makenna Smutz"
        fallbackSrc="https://via.placeholder.com/300x225"
        rounded={10}
        m={4}
        height={225}
        shadow="0px 0px 8px rgba(0, 0, 0, 0.1)"
        backgroundColor={`mode.${colorMode}.cardBG`}
      />
    </a>
  )
}

export default DribbbleCard
