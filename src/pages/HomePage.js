import React from 'react'
import Card from '../components/Card'

const HomePage = () => {
  return (
    <Card title={'Home page'}>
      React is an open-source, declarative, and efficient JavaScript library for
      building user interfaces. It was developed by Facebook and aims to make UI
      development easy, scalable, and maintainable by allowing the use of
      reusable components. React uses a virtual DOM and a one-way data flow,
      making it fast and efficient in rendering updates. It has become widely
      adopted in the industry and is often used in combination with other tools
      and frameworks to build complex web applications.
      <h3>Hooks</h3>
      <ul>
        <li>
          useState(): The basic hook in React that allows you to store and
          update state in a component.{' '}
        </li>
        <li>
          useEffect(): This hook allows you to specify side effects that should
          happen after a component's state has changed, such as manipulating the
          DOM, making network requests, or using other external APIs.{' '}
        </li>
        <li>
          useContext(): This hook enables the use of context in a component,
          allowing you to share data between components.{' '}
        </li>
        <li>
          useRef(): This hook returns a reference to a DOM element or other
          value that can be preserved and modified across the lifecycle of a
          component.{' '}
        </li>
        <li>
          useReducer(): This hook allows you to share and reuse application
          state across multiple components, while modifying the state through
          unique actions.{' '}
        </li>
        <li>
          useCallback(): This hook allows you to memoize functions so that they
          are not recreated on each render, potentially improving performance.{' '}
        </li>
        <li>
          useMemo(): This hook allows you to use memoized values that are only
          recomputed when their dependencies change.{' '}
        </li>
      </ul>
    </Card>
  )
}

export default HomePage
