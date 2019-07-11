import React from "react"

export default function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto cold-md-6 text-white text-center text-capitalize">
            <h3 className="copyright">
              all right reserved &copy; {new Date().getFullYear()}
            </h3>
          </div>
        </div>
      </div>
    </footer>
  )
}
