import React, { lazy, Suspense } from 'react'

const Home = lazy(() => import('./lazy-loading/Home'))
const About = lazy(() => import('./lazy-loading/About'))

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
    </div>
  )
}

export default LazyLoading