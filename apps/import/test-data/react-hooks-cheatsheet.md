# React Hooks — Complete Cheatsheet

A practical reference for every built-in React hook with examples, common mistakes, and best practices.

---

## useState

The most fundamental hook. Stores local component state.

```tsx
const [count, setCount] = useState(0)
const [user, setUser] = useState<User | null>(null)

// Functional update — always use this when new state depends on old state
setCount(prev => prev + 1)

// Lazy initializer — runs only on first render
const [data, setData] = useState(() => JSON.parse(localStorage.getItem('data') ?? 'null'))
```

**Common mistakes:**
- Calling `setState` in render (causes infinite loop)
- Mutating state directly: `state.items.push(x)` — always return a new object
- Depending on stale state: use functional update form instead

---

## useEffect

Runs side effects after render. Replaces `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.

```tsx
// Runs after every render
useEffect(() => { document.title = `Count: ${count}` })

// Runs once on mount (empty deps array)
useEffect(() => {
  fetchUser(id).then(setUser)
}, [])

// Runs when `id` changes
useEffect(() => {
  const sub = subscribe(id, handleEvent)
  return () => sub.unsubscribe()  // cleanup
}, [id])
```

**Rules:**
- Never conditionally call hooks
- List all values from component scope that effect uses in the deps array
- Return a cleanup function for subscriptions, timers, event listeners

---

## useCallback

Memoizes a function. Prevents child re-renders when passing callbacks as props.

```tsx
const handleSubmit = useCallback((values: FormValues) => {
  dispatch(saveAction(values))
}, [dispatch])

// Only recreates when `dispatch` changes
```

**When to use:** When passing a function to a `React.memo` child, or as a dep in another hook.

**When NOT to use:** Don't wrap everything in `useCallback` — it adds overhead. Profile first.

---

## useMemo

Memoizes a computed value. Only recomputes when deps change.

```tsx
const sortedItems = useMemo(
  () => [...items].sort((a, b) => a.priority - b.priority),
  [items]
)

const expensiveResult = useMemo(() => heavyComputation(input), [input])
```

**Rule of thumb:** Use for expensive computations (>1ms) or referential stability of objects/arrays passed as props.

---

## useRef

Holds a mutable value that does NOT trigger re-renders. Also used to access DOM nodes.

```tsx
// DOM access
const inputRef = useRef<HTMLInputElement>(null)
useEffect(() => { inputRef.current?.focus() }, [])

// Mutable value without re-render
const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
timerRef.current = setInterval(tick, 1000)
clearInterval(timerRef.current!)

// Tracking previous value
const prevCount = useRef(count)
useEffect(() => { prevCount.current = count })
```

---

## useContext

Reads from a React context. Triggers re-render when context value changes.

```tsx
// 1. Create context
const ThemeContext = createContext<Theme>('light')

// 2. Provide it
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

// 3. Consume it anywhere in the tree
const theme = useContext(ThemeContext)
```

**Performance tip:** Split large contexts into smaller ones. A component re-renders whenever *any* part of its context changes.

---

## useReducer

Alternative to `useState` for complex state logic. Similar to Redux but local.

```tsx
type State = { count: number; error: string | null }
type Action =
  | { type: 'INCREMENT' }
  | { type: 'RESET' }
  | { type: 'SET_ERROR'; payload: string }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT': return { ...state, count: state.count + 1 }
    case 'RESET':     return { count: 0, error: null }
    case 'SET_ERROR': return { ...state, error: action.payload }
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0, error: null })
dispatch({ type: 'INCREMENT' })
```

**Use when:** State has multiple sub-values, or next state depends on the previous in complex ways.

---

## useLayoutEffect

Same as `useEffect` but fires synchronously after DOM mutations, before paint. Use for DOM measurements.

```tsx
useLayoutEffect(() => {
  const { height } = ref.current.getBoundingClientRect()
  setHeight(height)
}, [])
```

**Warning:** Blocks paint — can cause jank. Use `useEffect` unless you specifically need pre-paint timing.

---

## useImperativeHandle

Customizes what a ref exposes when using `forwardRef`. Rarely needed.

```tsx
const FancyInput = forwardRef<{ focus: () => void }, Props>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }))

  return <input ref={inputRef} {...props} />
})
```

---

## useId

Generates a stable unique ID for accessibility. Do not use for keys.

```tsx
const id = useId()
// <label htmlFor={id}>Name</label>
// <input id={id} />
```

---

## useTransition (React 18+)

Marks a state update as non-urgent. Keeps the UI responsive during slow renders.

```tsx
const [isPending, startTransition] = useTransition()

function handleSearch(q: string) {
  setQuery(q)  // urgent — update input immediately
  startTransition(() => {
    setResults(filterData(q))  // non-urgent — can be deferred
  })
}
```

---

## useDeferredValue (React 18+)

Defers updating a value to keep the UI responsive. Alternative to `useTransition` when you don't control the state setter.

```tsx
const deferredQuery = useDeferredValue(query)
const results = useMemo(() => filterData(deferredQuery), [deferredQuery])
```

---

## Custom Hook Patterns

### useFetch — data fetching with loading/error

```tsx
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetch(url)
      .then(r => r.json())
      .then(d => { if (!cancelled) setData(d) })
      .catch(e => { if (!cancelled) setError(e) })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [url])

  return { data, loading, error }
}
```

### useLocalStorage — sync state with localStorage

```tsx
function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initial
    } catch { return initial }
  })

  const set = useCallback((newValue: T) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }, [key])

  return [value, set] as const
}
```

### useDebounce — delay a value update

```tsx
function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])
  return debounced
}
```

---

## Rules of Hooks

1. Only call hooks at the top level — never inside loops, conditions, or nested functions
2. Only call hooks from React function components or custom hooks
3. Custom hook names must start with `use`
4. The ESLint plugin `eslint-plugin-react-hooks` enforces these rules — always enable it
