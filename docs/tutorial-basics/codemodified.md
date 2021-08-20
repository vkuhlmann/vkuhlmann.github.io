---
sidebar_position: 7
---

import {TiViewer, Clock} from "../../src/components/TiViewer.js"
import CodeBlockAA from "../../src/components/CodeBlock.js"
import {MDXProvider} from '@mdx-js/react'

# Code modified :)

```jsx
export default ({children}) => (
    <MDXProvider components={{ code: TiViewer, pre: TiViewer }}>
        {children}
    </MDXProvider>
);
```

export default ({children, props}) => (
    <MDXProvider components={{ code: CodeBlockAA }}>
        <main {...props}>
            {children}
        </main>
    </MDXProvider>
);
