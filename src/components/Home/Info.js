import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              illo distinctio quaerat facere odit sit quod adipisci, quam
              tempore harum saepe. Magnam minus alias tenetur tempore porro
              earum laboriosam excepturi, corporis iusto facilis, doloribus qui
              nobis illum eius quibusdam non esse eum reiciendis nostrum
              veritatis quas iure autem. Vitae, iure?
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase">about page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
