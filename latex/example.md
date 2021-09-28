---
sidebar_position: 3
---

# Example of a good preamble setup

```latex
\documentclass[a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[margin=2.54cm]{geometry}

\usepackage{amsmath,amssymb,amsthm}
\usepackage{commath,mathtools}
\usepackage{parskip}
\usepackage{graphicx}
\usepackage{xcolor}
\usepackage[english]{babel}
\usepackage[bookmarksnumbered]{hyperref}

\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}

\theoremstyle{definition}
\newtheorem{example}[theorem]{Example}
\newtheorem{definition}[theorem]{Definition}

\theoremstyle{remark}
\newtheorem{remark}[theorem]{Remark}

\theoremstyle{definition}
\newtheorem*{note}{Note}


\title{My document}
\author{Me}
\date{September 2021}

\setcounter{secnumdepth}{2}

\begin{document}
    \maketitle

    \tableofcontents
    %\newpage
    \section{Introduction}

    Hello everyone!

    \subsection{A subsection}
    \subsubsection{A subsubsection}

    \begin{theorem}
        AA
        \begin{proof}
            BB
        \end{proof}
    \end{theorem}

    \begin{lemma}[CC]
        DD
    \end{lemma}

    \section{Another section}

    \begin{definition}
        EE
    \end{definition}
\end{document}

```
