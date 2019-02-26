import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{ margin: `0 0 0 auto`, }}>
        <li style={{ display: `inline-block`, margin: `0 0 0 1rem`
        }}><Link to="/" style={{ color: `#fff`, }}>Home</Link></li>
      <li style={{ display: `inline-block`, margin: `0 0 0 1rem`}}>
        <Link to="/about" style={{ color: `#fff`}}>About</Link></li>
      <li style={{ display: `inline-block`, margin: `0 0 0 1rem`}}>
        <Link to="/blog" style={{ color: `#fff`}}>Blog</Link></li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
