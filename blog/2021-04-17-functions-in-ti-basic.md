---
title: "Functions in TI-BASIC: Challenge accepted"
author: Vincent Kuhlmann
slug: functions-in-ti-basic
author_url: https://github.com/vkuhlmann
author_image_url: /img/VK.png
tags: [ti, ti-basic, functions, calculator, programming]
---

At high school, I loved to toy around with my TI-84 Plus calculator. It was the
most techy thing you were allowed to use during school hours. It featured a very
stupid (read: challenging) programming language: TI-BASIC. I made a wild host of
programs on it, like a program to count down to the end of class, and a
text-to-morse converter.

In this article, I want to focus on one hurdle, and how I solved it: functions.

<!--truncate-->

import CodeBlock from "../src/components/CodeBlock.js"
import {MDXProvider} from '@mdx-js/react'

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

<!-- In this post:
1. [Functions: The need](#theneed)
2. [Solution 0: Everything in a separate program?](#separateprogram)
3. [Solution 1: A state machine](#statemachine)
4. [Solution 2: A redirection center](#redirectioncenter)
5. [Solution 3: Abusing the call stack](#callstack) -->

In this post:
1. [Functions: The need](#functions-the-need)
2. [Solution 0: Everything in a separate program?](#solution-0-everything-in-a-separate-program)
3. [Solution 1: A state machine](#solution-1-a-state-machine)
4. [Solution 2: A redirection center](#solution-2-a-redirection-center)
5. [Solution 3: Abusing the call stack](#solution-3-abusing-the-call-stack)

<div style={{ display:"flex", flexFlow: "column nowrap", gap: "10px", borderTop: "3px solid black",
borderBottom: "3px solid black",paddingTop:"10px",paddingBottom:"10px" }}>
  <div style={{ display:"flex", width:"100%",flexFlow:"row wrap",gap:"30px" }}>
    <div style={{ flex:"1 1 200px" }}>
        <img src="/img/calculator/calculator_countdown_minutes.jpg" alt="CNTDWN <3" 
          style={{width:"100%"}}/>
    </div>
    <div style={{flex:"1 1 200px"}}>
      <img src="/img/calculator/calculator_countdown_seconds.jpg"
        alt="CNTDWN <3"
        style={{width:"100%"}}/>
    </div>
  </div>
  <div style={{ fontSize: "120%" }}>Figure 1: Photo of 'count-down-to-end-of-class'-program running.</div>
</div>

## Functions: The need

Functions are pieces of code that can be called from anywhere in the program.
For example, to redraw the screen after having processed a keystroke. They are
the bread and butter of all popular programming languages, but in TI-BASIC, they
don't exist. Sure, there are of course the primitive functions to instruct the
calculator to do things like clear the screen, but no ability to define a
function yourself. From worst to best, what are the solutions?


## Solution 0: Everything in a separate program?

From within a program, you can call other programs. Even before getting to know
any caviats, for me there's a giant dealbreaker: a huge amount of programs. Even
with my self-contained programs, I have a long list of programs, and if each
would be split up in say four parts, that would be very unmanagable. Also, if
you need to distribute your program, that isn't very user friendly either. A
self-contained program is definitely my go-to.

## Solution 1: A state machine

In this method, you create a while-loop spanning the whole program. Suppose you
want to enter a 'setup' menu, then we change a variable 'S' from '0' to '1'.
When a key is pressed, you subsequently check if the mode is '0' (normal) or '1'
(setup), and handle the press accordingly. Do we want to leave 'setup' mode?
Then set `S=0` and the next iteration of the while-loop takes care of it.

I've added a simple demonstration program below.

```ti-basic title="" overwide collapsed mode="blocks"
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
    Output(I,1,"&gt;")
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

```ti-basic minimal mode="linear"
[Pseudocode]
Setup # MARK "setup" yellow
BeginLoop # MARK "beginLoop" lightblue
  DrawCounts # MARK "drawCountLines" lightgreen
  DrawAvg # BEGIN "drawFurther" darkgreen
  DrawSetupUI
  ## END "drawFurther"
  AwaitKey # MARK "waitForKey" orange
  HandleKey_Setup # MARK "handleKey_Setup" blue
  HandleKey_Normal # MARK "handleKey_Normal" darkblue
EndLoop # MARK "endLoop" lightblue
```

This demonstrates a simple program where we have a number of counters. Each
counter can be incremented by pressing the '+'-button (key 95, line 90). We
can also reset a counter by pressing '0' (key 102, line 85). There are
multiple counters, and we can navigate between them using the arrows (line
97).

Additionally, there is a 'setup' mode, in which we can increase and decrease
the amount of counters. This mode is entered and leaved by pressing '2nd' (key
21).


## Solution 2: A redirection center

We don't need to do one big while-loop. TI-BASIC features a `Goto` and `Lbl`
statement. A `Lbl` is succeeded with one or two characters, e.g. `Lbl A9`. Then,
from anywhere in your program (before or after), use a `Goto` statement with
the same pair, e.g. `Goto A9`. The program jumps to the `Goto` line and runs
the lines following it.

### The code

```ti-basic mode="blocks" overwide collapsed
ClrHome

"MIT 2021 VINCENT KUHLMANN"
0→K
1→N
1→J
{0,0,0,0,0,0}→⌊COUNT
{­-1}→⌊RED
Goto 20

:::::::::

"AWAITKEY"
Lbl 01
0→K
While K=0
getKey→K
End
If K=22 or K=45
Goto 99
Goto RE
:::::::::



"NORMAL"
Lbl 10
0→S

11→R
15→T
Goto RE
Lbl 11

12→R
01→T
Goto RE
Lbl 12

If K=21
Then
Goto 20
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

Goto 10
:::::::::




"DRAW"
Lbl 15

0→C
For(I,1,N)
C+⌊COUNT(I)→C
If I=J and S=0
Then
Output(I,1,"&gt;")
Else
Output(I,1," ")
End
Output(I,2,"COUNT:")
Output(I,9,"    ")
Output(I,9,⌊COUNT(I))
End
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
Goto RE
:::::::::



"SETUP"
Lbl 20
1→S

21→R
15→T
Goto RE
Lbl 21

22→R
01→T
Goto RE
Lbl 22

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
Goto 10
End

Goto 20
:::::::::





"REDIRECT"
Lbl RE
If R=-­1
Then
⌊RED(dim(⌊RED))→T
dim(⌊RED)-1→dim(⌊RED)

Else

R→⌊RED(dim(⌊RED)+1)
­1→R
End

If T=01
Goto 01

If T=11
Goto 11
If T=12
Goto 12
If T=13
Goto 13
If T=15
Goto 15

If T=21
Goto 21
If T=22
Goto 22
If T=23
Goto 23

Lbl 99
ClrHome
```

Sure, this program is longer and a bit slower than its Solution 1 equivalent,
but the investment has a return: we have a clear separation of the different
parts in our code, and can call between them however we like. I've gone to the
extremes by even giving each segment a name by ways of a loose string. **[1]**

The segmentation fulfills an extra role when programming on your calculator:
moving code around is very difficult. If instead, you only need to reorder the
function calls, in my opinion, this is a win. The extra colons are also
discarded, they are just for code clarity.

---

**[1]**: Simply evaluating an expression without using its value is valid. It's
value is stored in `Ans`. If it's the last statement of your program, the value
will be printed as a sort of 'result' of your program.


### Function call

Take a look at the `"NORMAL"` segment. It's code is basically
```ti-basic mode="linear"
"NORMAL"
Lbl 10
0→S

11→R
15→T
Goto RE
Lbl 11

12→R
01→T
Goto RE
Lbl 12

(Key handling)
Goto 10
```

Note the `Lbl 10` and `Goto 10` themselves generate a while-loop. The `S=0` is
necessary for the `"DRAW"`-segment, which will now be called. The following
four non-empty lines are the 'function call' of this solution. I set 'T' to the
label where we want to go, and set 'R' to where we need to come back after.
Setting `T=15`, means we will call the `"DRAW"`-segment. When the draw is done,
we need to return to our calling code. For this we place a label `Lbl 11` at the
end of our function call, and with `R=11` we need to indicate this. Next, we
jump to `RE`. This is what I call 'the redirection center'. And that's our
function call complete! We repeat the same again to call `"AWAITKEY"`.

Yes, I agree, this is bulky. But hey, when coding in TI-BASIC, bulkiness is the
name of the game. In return, we are now able to clearly split up our code, and
call it from multiple places, like the `"AWAITKEY"`-segment. After the call is
completed, we just resume where we left of.


### Dynamic Goto's

Ok, so what's the idea of a redirection center? The unfortunate thing of
`Goto`'s is its destination has to be hardcoded. Hence for each possible return
destination we have a `Goto`, and with `If`-statements, we select the right one.
Lines 178 through 195 do this. We do this in one place, which I've been calling
the 'redirection center'. In the previous example, we had set `R=11`, and upon
returning from the call, we use `Goto RE` to jump to the redirection center, and
it will execute the `Goto 11` line.

With this, the essence is

```ti-basic mode="linear"
Disp "A"

11→R
Goto 15
Lbl 11

Disp "B"
Stop

:::

Lbl 15
Disp "C"

Goto RE

:::

Lbl RE

If R=11
Goto 11
If R=12
Goto 12

Disp "E"
```

This outputs `ACDB`. Note we aren't using any `Lbl 12` yet, so `Goto 12` isn't
valid. But as long as we don't set `R=12`, the program won't notice it.

### Nesting

The code fragment from _Dynamic Goto's_ doesn't allow function nesting. In the
section _Function call_ we showed a slightly different function call code which
does allow for nesting, and that also requires some extra code in the
redirection center.

```ti-basic mode="linear"
"REDIRECT"
Lbl RE
If R=-­1
Then
⌊RED(dim(⌊RED))→T
dim(⌊RED)-1→dim(⌊RED)

Else

R→⌊RED(dim(⌊RED)+1)
­-1→R
End

(Goto statements)
```

We use a new list `RED` to keep track of the places we will to return to. At
the start of your program set `{­-1}→⌊RED` to create the list.

If we get `R` and `T` specified, we add `R` to the list. We then set `R=-1` so
if we consequently jump to `RE` for the end of the function, still `R=-1`, and
we know we are leaving a function instead of entering one. The goto statements
will then select the segment `T` refers to.

If we haven't set `R` and `T` before jumping to `RE`, then `R=-1`. In that case,
we need to return to the last caller return. For this, we set the target `T` to
the last element of the list, and shrink the list so the last element is
removed. The goto statements then jump to that old caller.


## Solution 3: Abusing the call stack

### The trick

Let me tell you something: when you don't close a scope with `End`, you won't
get any complaints: it's as if those are added at the very end of your program
implicitly. Ok, something for when you're very lazy, right? Well, not quite.
Without it, our program in Solution 2 would have gotten those errors when trying
to quit.

And there is even an obscure way that could let our program crash. An example
which could do the crash more easily:

```ti-basic mode="blocks"
ClrHome
Lbl 1A

startTmr→T
If remainder(T,2)=0
Then
Goto 1B
Else
Goto 1A
End

Lbl 1B
Output(1,1,T)
Goto 1A
```

A little program which displays even times on screen. The output is done in the
`1B` segment. But this unsuspecting program crashes with error ERR:MEMORY. In
fact, it's a stackoverflow. It might be more instructive to imagine a
`While`-loop instead of an `If`-block. If I write

```ti-basic mode="linear"
ClrHome
While 1
Output(1,1,startTmr)
End
```

then at each encounter of `End`, it needs to jump back to the start of the
`While`-loop. Hence, the calculator remembers what block we are in. However,
when we use `Goto`, this stack is preserved! In the main fragment, it is to the
calculator as if we are opening an infinite amount of `If` blocks, without ever 
having closed one!

This finding is our superhero in the quest for functions in TI-BASIC. Because,
if a `While`-, `For`- or `Repeat`-loop is open, encountering an `End` can return
execution to the start of the loop. This is done if the loops condition allows
a next iteration.

The strategy: we use `Goto` while a loop is open, the called segment finishes
with an extra `End`, which is matched against the open loop. Then, the loop
needs to be run another time, but of course without the `Goto` being called
a second time. This translates to the following scheme:

```ti-basic mode="linear" minimal
Disp "A"

## BEGIN "funcCall" blue
For(H,-­1,0
If H:Goto 15
End:-­1→H
## END "funcCall"

Disp "B"
Stop

Lbl 15
Disp "C"
:End
```

```ti-basic tryit=true
ClrHome
Disp "A"

## BEGIN "funcCall" blue
For(H,-­1,0
If H:Goto 15
End:-­1→H
## END "funcCall"

Disp "B"
Stop

Lbl 15
Disp "C"
:End
```

This outputs `ACB`. The variable `H` is chosen as it is a 'hook' in some way.
At the first iteration, `H=-1`, and `If` evaluates for any non-zero value. At
the second iteration, `H=0`, and the `Goto` won't be evaluated. Next `H=1`, and
this breaks the `For`-loop. Finally, we need to set `H=-1` again, because of
nesting: if we now encounter the `End` to return to a call from higher up,
the `H=1` will be incremented to `H=2`, but that is higher than the `0` the
`For`-loop requires. Hence it will not iterate that one, and our whole scheme
is broken. Therefore, you should always set `H=-1` again after a function call
has been performed.

Colons mean a separation of statements, that's also why the calculator renders
each new line with a preceding colon. You can add extra colons, doing so adds an
empty statement (like an empty line), so in most places this can be done purely
aesthetically. This is what I do to indicate the 'special' `End`'s; the `:End`
doesn't have a matching block begin above, it is there to return to our call
hook.


### The code

Now our program can be written as

```ti-basic overwide collapsed
ClrHome

"MIT 2021 VINCENT KUHLMANN"
0→K
1→N
1→J
{0,0,0,0,0,0}→⌊COUNT
Goto 20

:::::::::


"AWAITKEY"
Lbl 01
0→K
While K=0
getKey→K
End
If K=22 or K=45
Goto 99
:End
:::::::::



"NORMAL"
Lbl 10
0→S

## BEGIN "funcCall1" blue
For(H,­-1,0
If H:Goto 15
End:­-1→H
## END "funcCall1"

## BEGIN "funcCall2" blue
For(H,­-1,0
If H:Goto 01
End:­-1→H
## END "funcCall2"

If K=21
Goto 20


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

Goto 10
:::::::::
"DRAW"
Lbl 15

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
:End
:::::::::



"SETUP"
Lbl 20
1→S

## BEGIN "funcCall3" blue
For(H,-­1,0
If H:Goto 15
End:-­1→H
## END "funcCall3"

## BEGIN "funcCall4" blue
For(H,­-1,0)
If H:Goto 01
End:­-1→H
## END "funcCall4"

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
Goto 10

Goto 20
:::::::::
Lbl 99
ClrHome

```

```ti-basic tryit=true title="A try-it of the program in Solution 3:"
ClrHome

"MIT 2021 VINCENT KUHLMANN"
0→K
1→N
1→J
{0,0,0,0,0,0}→⌊COUNT
Goto 20

:::::::::


"AWAITKEY"
Lbl 01
0→K
While K=0
getKey→K
End
If K=22 or K=45
Goto 99
:End
:::::::::



"NORMAL"
Lbl 10
0→S

## BEGIN "funcCall1" blue
For(H,­-1,0
If H:Goto 15
End:­-1→H
## END "funcCall1"

## BEGIN "funcCall2" blue
For(H,­-1,0
If H:Goto 01
End:­-1→H
## END "funcCall2"

If K=21
Goto 20


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

Goto 10
:::::::::
"DRAW"
Lbl 15

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
:End
:::::::::



"SETUP"
Lbl 20
1→S

## BEGIN "funcCall3" blue
For(H,-­1,0
If H:Goto 15
End:-­1→H
## END "funcCall3"

## BEGIN "funcCall4" blue
For(H,­-1,0)
If H:Goto 01
End:­-1→H
## END "funcCall4"

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
Goto 10

Goto 20
:::::::::
Lbl 99
ClrHome
```


export default ({children, props}) => (
    <MDXProvider components={{ code: CodeBlock, pre: (props => <div {...props} />), }}>
        <main {...props}>
            {children}
        </main>
    </MDXProvider>
);

