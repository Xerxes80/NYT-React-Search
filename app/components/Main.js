var React = require("react");

var Link = require("react-router").Link;

var Main = React.createClass({

  render: function() {

    return (
      <div className="main-container">
        <div className="container">
          <nav className="navbar navbar-light bg-info light" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">Home</Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  {/* Using <Link> in place of <a> and "to" in place of "href" */}
                  <li><Link to="/search">Search</Link></li>
                  <li><Link to="/saved">Saved Articles</Link></li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="jumbotron">
            <h2 className="text-center text-info"><strong>New York Times Article Finder</strong></h2>
            <h3 className="text-center">Enter search terms to begin</h3>
          </div>


     
          {this.props.children}

          <footer>
            <hr />
            
          </footer>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Main;
