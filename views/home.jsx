const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>REST-rant</h1>
              <div>
                <img src="/images/red-wine.jpg" alt="Glass of red wine" width="800" height="600" />
                <div>
                Photo by <a href="https://unsplash.com/@aliissinisalu?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Aliis Sinisalu</a> on <a href="https://unsplash.com/photos/silver-framed-wayfarer-style-eyeglass-on-blue-book-myLVlzvxKmk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  

module.exports = home
