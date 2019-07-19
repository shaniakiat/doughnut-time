import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function BackgroundSection({
  img,
  styleClass,
  title,
  children,
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-pink text-uppercase text-center display-2 font-weight-bold">
        {title}
      </h1>
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
