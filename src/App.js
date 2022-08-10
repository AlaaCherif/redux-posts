import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import PostsList from './features/posts/postsList'

import { Navbar } from './app/Navbar'
import AddPostForm from './features/posts/AddPostForm'
import EditPost from './features/posts/EditPost'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddPostForm />
                <PostsList />
              </>
            )}
          />
          <Route exact path="/post/:id" component={EditPost} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
