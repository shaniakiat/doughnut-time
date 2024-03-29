import React from "react"

export default function Title({ title }) {
  return (
    <div className="row">
      <div className="col text-center mb-1">
        <h1 className="display-5 text-uppercase font-weight-bold">{title}</h1>
      </div>
    </div>
  )
}
