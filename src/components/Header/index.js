import React from 'react';
import Nav from '../Navigation';

function Header() {
  return (
    <header className="flex-row px-1 space-between my-5 mx-5">
      <h2>
        <a className="align-center" href="/">
          <img
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjRkZGNTlEIiBkPSJNMjQgMkEyMCAyMCAwIDEgMCAyNCA0MkEyMCAyMCAwIDEgMCAyNCAyWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGQkMwMkQiIGQ9Ik0zNywyMmMwLTcuNy02LjYtMTMuOC0xNC41LTEyLjljLTYsMC43LTEwLjgsNS41LTExLjQsMTEuNWMtMC41LDQuNiwxLjQsOC43LDQuNiwxMS4zYzEuNCwxLjIsMi4zLDIuOSwyLjMsNC44VjM3aDEydi0wLjFjMC0xLjgsMC44LTMuNiwyLjItNC44QzM1LjEsMjkuNywzNywyNi4xLDM3LDIyeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRkY1OUQiIGQ9Ik0zMC42LDIwLjJsLTMtMmMtMC4zLTAuMi0wLjgtMC4yLTEuMSwwTDI0LDE5LjhsLTIuNC0xLjZjLTAuMy0wLjItMC44LTAuMi0xLjEsMGwtMywyYy0wLjIsMC4yLTAuNCwwLjQtMC40LDAuN3MwLDAuNiwwLjIsMC44bDMuOCw0LjdWMzdoMlYyNmMwLTAuMi0wLjEtMC40LTAuMi0wLjZsLTMuMy00LjFsMS41LTFsMi40LDEuNmMwLjMsMC4yLDAuOCwwLjIsMS4xLDBsMi40LTEuNmwxLjUsMWwtMy4zLDQuMUMyNS4xLDI1LjYsMjUsMjUuOCwyNSwyNnYxMWgyVjI2LjRsMy44LTQuN2MwLjItMC4yLDAuMy0wLjUsMC4yLTAuOFMzMC44LDIwLjMsMzAuNiwyMC4yeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM1QzZCQzAiIGQ9Ik0yNCA0MUEzIDMgMCAxIDAgMjQgNDdBMyAzIDAgMSAwIDI0IDQxWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM5RkE4REEiIGQ9Ik0yNiw0NWgtNGMtMi4yLDAtNC0xLjgtNC00di01aDEydjVDMzAsNDMuMiwyOC4yLDQ1LDI2LDQ1eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM1QzZCQzAiIGQ9Ik0zMCA0MWwtMTEuNiAxLjZjLjMuNy45IDEuNCAxLjYgMS44bDkuNC0xLjNDMjkuOCA0Mi41IDMwIDQxLjggMzAgNDF6TTE4IDM4LjdMMTggNDAuNyAzMCAzOSAzMCAzN3oiPjwvcGF0aD48L3N2Zz4="
          />
          <span className="ml-5">Jinovation</span>
        </a>
      </h2>
      <Nav />
    </header>
  );
}

export default Header;
