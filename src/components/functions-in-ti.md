

At high school, I loved to toy around with my TI-84 Plus calculator. It was the
most techy thing you were allowed to use during school hours. It featured a very
stupid (read: challenging) programming language: TI-BASIC. I made a wild host of
programs on it, like a program to count down to the end of class, and a
text-to-morse converter.

In this article, I want to focus on one hurdle, and how I solved it: functions.

```ti-basic tryit=true title="A try-it of the \"program\" in Solution 1"
## BEGIN "setup" yellow
  ClrHome

  0→K
  1→S
  1→N
  1→J
  {0,0,0,0,0,0}→⌊COUNT
## END "setup"

## BEGIN "beginLoop" lightblue
  While K≠22 and K≠45
## END "beginLoop"

## BEGIN "drawCountLines" lightgreen
  0→C
  For(I,1,N)
  C+⌊COUNT(I)→C
  If I=J and S=0
  Then
  Output(I,1,">")
  Else
  Output(I,1," ")
  End
  Output(I,2,"COUNT:")
  Output(I,9,"    ")
  Output(I,9,⌊COUNT(I))
  End
## END "drawCountLines"
## BEGIN "drawFurther" darkgreen
  Output(7,1,"AVG:")
  Output(7,9,"        ")
  Output(7,9,round(C/N,2))

  If S=1
  Then
  Output(8,1,"COUNTERS:")
  Output(8,11,N)
  Else
  Output(8,1,"           ")
  End
## END "drawFurther"

## BEGIN "waitForKey" orange
  0→K
  While K=0
  getKey→K
  End
## END "waitForKey"

## BEGIN "handleKey_Setup" blue
  If S=1
  Then

  If K=95
  Then
  min(N+1,dim(⌊COUNT))→N
  0→⌊COUNT(N)
  0→K
  End

  If K=85
  Then
  max(1,N-1)→N
  min(N,J)→J
  ClrHome
  0→K
  End

  If K=21
  Then
  0→S
  0→K
  End

  End
## END "handleKey_Setup"

## BEGIN "handleKey_Normal" darkblue
  If K=21
  Then
  1→S
  End

  If K=102
  Then
  0→⌊COUNT(J)
  End

  If K=95 or K=85
  Then
  ⌊COUNT(J)-1+2*(K=95)→⌊COUNT(J)
  End

  If K=34
  Then
  remainder(J,N)+1→J
  End

  If K=25
  Then
  remainder(J+N-2,N)+1→J
  End
## END "handleKey_Normal"

## BEGIN "endLoop" lightblue
  End
## END "endLoop"
ClrHome
```



```latex title="figure.tex test"
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\linewidth,height=5cm,keepaspectratio]{pinguin.jpg}
  \caption{Een schattige pinguïn. Deze foto is van het internet.}\label{fig:pinguin}
\end{figure}
```


```jsx
export default ({children}) => (
    <MDXProvider components={{ code: TiViewer, pre: TiViewer }}>
        {children}
    </MDXProvider>
);
```



