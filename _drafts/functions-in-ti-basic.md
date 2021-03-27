---
layout: post
title: "Functions in TI-BASIC: Challenge accepted"
author:
  - Vincent Kuhlmann

text_align: justify

---

At high school, I loved to mess around with my TI-84 Plus calculator. It was the
most techy thing you were allowed to use during school hours. It featured a very
stupid (read: challenging) programming language: TI-BASIC. I made a wild host of
programs on it, like a program to count down to the end of class, and a
text-to-morse converter.

Doesn't sound that bad, does it? Be blessed with ignorance. Anyway, this article
isn't a frustration outlet, rather I want to discuss one hurdle, and how I
solved it: functions.

In this post:
1. [Functions: The need](#theneed)
2. [Solution 1: Your own state machine](#statemachine)
2. [Solution 2: A redirection center](#redirectioncenter)
3. [Solution 3: Abusing the call stack](#callstack)

<!-- ![CNTDWN <3]({{ "/assets/calculator/calculator_countdown_minutes.jpg" | relative_url }} "CNTDWN <3") -->

<div style="display:flex;flex-flow:column nowrap;gap:10px;border-top:3px solid black;
border-bottom:3px solid black;padding-top:10px;padding-bottom:10px;">
  <div style="display:flex;width:100%;flex-flow:row wrap;gap:30px;">
    <div style="flex:1 1 200px;">
        <img src="{{ "/assets/calculator/calculator_countdown_minutes.jpg" | relative_url }}" alt="CNTDWN <3" 
          style="width:100%;"/>
    </div>
    <div style="flex:1 1 200px;">
      <img src="{{ "/assets/calculator/calculator_countdown_seconds.jpg" | relative_url }}" alt="CNTDWN <3"
        style="width:100%;"/>
    </div>
  </div>
  <div style="font-size:120%;">Figure 1: Screenshots of 'count-down-to-end-of-class'-program</div>
</div>

<!-- But
also at times I did had access to a proper computer, it was great fun. The
reason: TI basic, a very stupid, but hence also very challenging and curious
programming language. I made a wild host of programs on it, like a program to
count down to the end of class, and a text to morse converter.

How bad could that be? How stupid is TI basic? Well, to start with, the
calculator can only show seven lines of code at a time. There were programs in
which I would be scrolling for - what felt like - minutes. Better memorize
exactly how the code works, to avoid scrolling ages trying to figure it out. -->

<!-- Seen how few code lines you see, and seen the screen was only 16 characters
wide, indentation wasn't a thing. -->
<!-- Next on the list, copy+pasting, trying to move around code was - for
non-essential purposes - a practical no-go. There certainly was a way to do it
without reinputting it, and deleting it at the original place, but it involved
copying the whole program and deleting all below. -->

<!-- Just to give you a taste of things: moving/copying code around isn't very
pleasant either, and you want to save data? Guess what, your only solution is
to create a list of numbers. The list is global and has a name of at max 4 our
5 letters. Isn't that great? Anyway, the challenge I want to address in the
post is 

Simple tasks required
a huge amount of code, and you better memorized it well, if you didn't want to
be scrolling for ages. -->

## Functions: The need <span id="theneed"></span>

Functions are pieces of code that can be called from anywhere in the program.
For example, to redraw the screen after having processed a keystroke. They are
the bread and butter of all popular programming languages, but in TI-BASIC, they
don't exist. Sure, there are of course the primitive functions to instruct the
calculator to do things like clear the screen, but no ability to define a
function yourself. From worst to best, what are the solutions?

## Solution 1: Your own state machine <span id="statemachine"></span>

<script>
let code = `
ClrHome

0→K
1→S
1→N
1→J
{0,0,0,0,0,0}→⌊COUNT

While K≠22 and K≠45

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

0→K
While K=0
getKey→K
End

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

End
ClrHome
`;

code = code.replace("\r\n", "\n").replace("\r", "");
code = code.substring(1, code.length - 1);

document.addEventListener("DOMContentLoaded", () => {
    //formatTI();
    let el = document.querySelector("#tiCode").div;
    createTIBlocks(code, el);

    let srcGroups = [
      {
        name: "setup",
        begin: 1,
        end: 9,
        color: "yellow"
      },
      {
        name: "beginLoop",
        begin: 10,
        end: 12,
        color: "lightblue"
      },
      {
        name: "drawCountLines",
        begin: 13,
        end: 31,
        color: "lightgreen"
      },
      {
        name: "drawFurther",
        begin: 31,
        end: 47,
        color: "darkgreen"
      },
      {
        name: "waitForKey",
        begin: 48,
        end: 52,
        color: "orange"
      },
      {
        name: "handleKey_Setup",
        begin: 53,
        end: 79,
        color: "blue"
      },
      {
        name: "handleKey_Normal",
        begin: 80,
        end: 108,
        color: "darkblue"
      },
      {
        name: "endLoop",
        begin: 109,
        end: 110,
        color: "lightblue"
      },
    ];
    let groups = srcGroups;

    let nameToColor = {};
    produceGroups(groups, nameToColor);

    updateColors(el, l => {
      for (let g of groups) {
        if (l >= g.begin && l < g.end) {
          return g.color;
        }
      }
      return "hsla(0, 100%, 50%, 0%)";
    });


    let pseudoCode = `
[Pseudocode]
Setup
BeginLoop
  DrawCounts
  DrawAvg
  DrawSetupUI

  AwaitKey
  HandleKey_Setup
  HandleKey_Normal
EndLoop
    `;

    pseudoCode = pseudoCode.replace("\r\n", "\n").replace("\r", "\n");
    pseudoCode = pseudoCode.substring(1, pseudoCode.length - 1);

    el = document.querySelector("#pseudoCode");
    // createTIBlocks(pseudoCode, el);

    groups = [
      {
        name: "setup",
        begin: 1,
        end: 2
      },
      {
        name: "beginLoop",
        begin: 2,
        end: 3
      },
      {
        name: "drawCountLines",
        begin: 3,
        end: 4
      },
      {
        name: "drawFurther",
        begin: 4,
        end: 6
      },
      {
        name: "waitForKey",
        begin: 7,
        end: 8
      },
      {
        name: "handleKey_Setup",
        begin: 8,
        end: 9
      },
      {
        name: "handleKey_Normal",
        begin: 9,
        end: 10
      },
      {
        name: "endLoop",
        begin: 10,
        end: 11,
      },
    ];
    
    produceGroups(groups, nameToColor);

    updateColors(el, l => {
      for (let g of groups) {
        if (l >= g.begin && l < g.end) {
          return g.color;
        }
      }
      return "hsla(0, 100%, 50%, 0%)";
    });
});

</script>

<!-- <div id="tiCode" class="tiCode">

</div> -->

<div style="position:relative;width:calc(max(100%, 70vw));margin-left:calc((100% - max(100%, 70vw))/2);">
  <ti-viewer id="tiCode">

  </ti-viewer>
</div>

<div id="pseudoCode" class="pseudoCode">
  <span>[Pseudocode]</span>
  <span data-displayline="1">Setup</span>
  <span data-displayline="2">BeginLoop</span>
  <span data-displayline="3">&nbsp; DrawCounts</span>
  <span data-displayline="4">&nbsp; DrawAvg</span>
  <span data-displayline="5">&nbsp; DrawSetupUI</span>
  <span data-displayline="6"></span>
  <span data-displayline="7">&nbsp; AwaitKey</span>
  <span data-displayline="8">&nbsp; HandleKey_Setup</span>
  <span data-displayline="9">&nbsp; HandleKey_Normal</span>
  <span data-displayline="10">EndLoop</span>
</div>

This demonstrates a simple program where we have a number of counters, which we
can increment by pressing the '+'-button (key 95), go to line 90. We can also
reset a counter by pressing '0' (key 102, go to line 85). There are multiple
counters, and we can navigate between them using the arrows (go to line 97).

Additionally, there is a 'setup' mode, in which we can increase and decrease
the amount of counters. This mode is entered and leaved by pressing '2nd' (key
21).


## Solution 2: A redirection center <span id="redirectioncenter"></span>


## Solution 3: Abusing the call stack <span id="callstack"></span>


