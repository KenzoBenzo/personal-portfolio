import React from "react"
// import styled from "styled-components"
import { Image } from "@chakra-ui/core"

const DribbbleCard = ({ url, cover }) => (
  <a href={url} alt="A project by makenna">
    <Image
      src={cover}
      alt="Dribbble Shot from Makenna Smutz"
      fallbackSrc="https://via.placeholder.com/150"
      rounded={10}
      m={4}
      height={225}
      shadow="0px 0px 15px rgba(0, 0, 0, 0.15)"
    />
  </a>
)

export default DribbbleCard
