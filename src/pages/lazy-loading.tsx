import React, { lazy, Suspense } from 'react'

// lazy-loading
const Home = lazy(() => import('./lazy-loading/Home'))
const About = lazy(() => import('./lazy-loading/About'))

// code-splitting
import ("./lazy-loading/math").then((result) => {
    console.log("result", result.addNumbers(3,4));
})

function LazyLoading() {
  return (
    <div>
        <h1>LazyLoading</h1>
        <Suspense fallback={<div>
            Home Section Is Loading
        </div>}>
            <Home />
        </Suspense>
        <Suspense fallback={<div>
            About Section Is Loading
        </div>}>
            <About />
        </Suspense>
        
        <h1>Code Splitting</h1>

    </div>
  )
}

export default LazyLoading