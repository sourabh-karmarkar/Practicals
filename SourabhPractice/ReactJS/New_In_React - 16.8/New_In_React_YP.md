## What's new in React?

### Revision : Order of lifecycle methods called

---

#### Mounting Phase

    - Component Mounts
    - constructor
    - static getDerivedStateFromProps() (is a static function)
    - render
    - componentDidMount()

#### Updating Phase

    - static getDerivedStateFromProps()
    - shouldComponentUpdate() (if returns true then render)
    - render
    - getSnapshotBeforeUpdate() (gets called after diffing and before updating the DOM)
    - componentDidUpdate()

#### Pure Components

    - Pure components are same as normal components however they avoid unnecessary render as shouldComponentUpdate is already implemented.
    - Example:
    - If the parent gets updated then all the children are re-rendered even if not required.
    - This can be avoided by using pure components.

---

### ContextProvider

---

- Used for making values available to all the children of the specified component

### Steps :

1. Create the context
2. Provide it through Provider
3. Consume it

- Disadvantage : If you put Context in a component, then it will make that component tuff for reuse.

---

### Error Boundaries

---

- catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI

- getDerivedStateFromError() : render a fallback UI after an error has been thrown
- componentDidCatch() : to log error information

---

### Forwarding Refs

---

- Ref forwarding is a technique for automatically passing a ref through a component to one of its children. This is typically not necessary for most components in the application.

---
