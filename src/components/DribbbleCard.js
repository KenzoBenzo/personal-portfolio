import React from "react"
// import styled from "styled-components"
import { Image } from "@chakra-ui/core"

const DribbbleCard = ({ url, cover, title, description }) => (
  <a href={url} alt="A project by makenna">
    <Image
      src={cover}
      alt="Dribbble Shot from Makenna Smutz"
      fallbackSrc="https://via.placeholder.com/150"
      bgSize
    />
    <h2>{title}</h2>
    <p>{description}</p>
  </a>
)

export default DribbbleCard
