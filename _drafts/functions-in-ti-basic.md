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
  <div style="font-size:120%;">Figure 1: Screenshots of 'count down to end of class'-program</div>
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

## Functions: The need

Functions are pieces of code that can be called from anywhere in the program.
For example, to redraw the screen after having processed a keystroke. They are
the bread and butter of all popular programming languages, but in TI-BASIC, they
don't exist. Sure, there are of course the primitive functions to instruct the
calculator to do things like clear the screen, but no ability to define a
function yourself. From worst to best, what are the solutions?

## Solution 1: your own state machine



## Solution 2: goto and a redirection center


## Solution 3: clever user of call stack


