import React from "react"

export default function Footer() {
  return (
    <footer className="footer py-2">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto cold-md-6 text-white text-center text-capitalize">
            <h3 className="copyright">
              Designed & Developed by Shania Kiat&nbsp;
              {new Date().getFullYear()}
            </h3>
          </div>
        </div>
      </div>
    </footer>
  )
}
