import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import LearningApi from '../LearningApi'
import LearningArrays from '../LearningArrays'
import HeaderNav from '../HeaderNav'

const RouterPage = () => (
  <Router>
    <div>
      <HeaderNav />

      <Route exact path="/api" component={ApiLearning} />
      <Route path="/array" component={ArraysLearning} />
    </div>
  </Router>
)

const ApiLearning = () => ( <LearningApi /> )
const ArraysLearning = () => ( <LearningArrays /> )

export default RouterPage
