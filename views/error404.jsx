const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="/images/lion-404.jpg" alt="An up close pisture of a lion with it's mouth open" width="600" height="1000" />
              <div>
                Photo by <a href="https://unsplash.com/@rodlong?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Rod Long</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-lions-face-with-a-black-background-LLLMIdYhbCY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
              </div>
          </main>
      </Def>
    )
  }
  
module.exports = error404
