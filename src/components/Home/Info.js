import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="info py-5">
      <div className="container">
        <h1 className="story">our story</h1>
        <div className="row">
          <div className="col-10 col-sm-10">
            <p className="lead mb-5 text-left">
              Donut sweet cookie cake biscuit pastry ipsum apple vanilla
              sprinkles cake apple sweet pastry sweet cookie marzipan apple
              cream jelly. Cookie donut cookie candy sprinkles dolor sweet
              muffin cookie muffin orange apple marzipan jelly tiramisu
              croissant cookie tiramisu marzipan croissant. Sprinkles muffin
              cake biscuit cookie sweet vanilla orange jelly pastry vanilla
              apple dolor sweet dolor sprinkles cookie vanilla vanilla ipsum.
              Jelly apple ipsum dolor cookie marzipan marzipan tiramisu
              sprinkles sprinkles marzipan apple donut cream pastry marzipan
              jelly biscuit lollipop muffin.
            </p>
            <Link to="/about/">
              <button className="btn">about page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
