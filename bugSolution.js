```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic for conditional rendering
    if (count > 5) {
      console.log('Count is greater than 5');
    } else {
      console.log('Count is not greater than 5');
    }
  }, [count]); // This dependency array is correct

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```