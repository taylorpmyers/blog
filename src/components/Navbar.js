import React from 'react'
import { Link } from 'gatsby'
import smashwords from '../images/smashwords-icon.png'
import twitter from '../images/twitter-icon.png'
import amazon from '../images/amazon-icon.png'



const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-teal-500">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 ml-2 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
          <span className="font-semibold text-xl tracking-tight"><Link to="/">Teratomi</Link></span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-4 mr-4">About</Link>
            <Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-4 mr-4">Books</Link>
            <Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-4 mr-4">Blog</Link>
            <Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-4">Flash Fic</Link>
          </div>
          <div className = "mt-4">
            <a className="inline-block mt-4 text-sm leading-none ml-4 mt-4 lg:mt-0" href="https://www.twitter.com/"><img alt="twitter logo" src={twitter} width="32" height="32"></img></a>
            <a className="inline-block mt-4 text-sm leading-none ml-4 mt-4 lg:mt-0" href="https://www.amazon.com/"><img alt="amazon logo" src={amazon} width="32" height="32"></img></a>
            <a className="inline-block mt-4 text-sm leading-none ml-4 mt-4 lg:mt-0" href="https://www.smashwords.com/"><img alt="smashwords logo" src={smashwords} width="32" height="32"></img></a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
