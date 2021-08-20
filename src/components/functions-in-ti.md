

```jsx
export default ({children}) => (
    <MDXProvider components={{ code: TiViewer, pre: TiViewer }}>
        {children}
    </MDXProvider>
);
```



