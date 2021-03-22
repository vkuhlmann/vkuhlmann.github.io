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

```
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
```

<script>
code = `
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
`;

function formatTI() {
  let el = document.querySelector("#tiCode");
  el.innerHTML = "";
  code = code.trim();
  for (let l of code.split("\n")) {
    let builtup = "";
    let remainingLength = 15;
    while (l.length > 0 || builtup.length == 0) {
      let text = l.substring(0, remainingLength);
      text = text.replace("&", "&amp;").replace("<", "&lt;").replace(">").replace(">", "&gr;");
      builtup += text + "<br/>";
      l = l.substring(remainingLength);
      remainingLength = 16;
    }

    let t = document.createElement("span");
    t.innerHTML = `
    <span style="user-select:none;">:</span>${builtup}
    `;
    el.appendChild(t);
  }
}

document.addEventListener("DOMContentLoaded", () => {
    formatTI();
});

</script>

<div id="tiCode" style="font-family:'Consolas','Courier New',monospace;">

</div>

<div style="font-family:'Consolas','Courier New',monospace;border:1px solid;
margin-bottom:5px;">
:ClrHome<br/>
:<br/>
:0→K<br/>
:1→S<br/>
:1→N<br/>
:1→J<br/>
:{0,0,0,0,0,0}→⌊<br/>
</div>
<div style="font-family:'Consolas','Courier New',monospace;border:1px solid;">
COUNT<br/>
:<br/>
:While K≠22 and <br/>
K≠45<br/>
:<br/>
:0→C<br/>
:For(I,1,N)<br/>
</div>


<div style="font-family:'Consolas','Courier New',monospace">
<div style="width:8em;text-align:left;">
<pre>
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
</pre>
</div>
</div>


## Solution 2: A redirection center <span id="redirectioncenter"></span>


## Solution 3: Abusing the call stack <span id="callstack"></span>


