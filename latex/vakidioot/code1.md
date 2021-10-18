---
sidebar_position: 1
---

# Code 1

```latex
\documentclass[a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[margin=2.54cm]{geometry}

\usepackage{amsmath,amssymb,amsthm}
\usepackage{commath,mathtools}
\usepackage{parskip}
\usepackage{graphicx}
\usepackage{xcolor}
\usepackage[dutch]{babel}
\usepackage[bookmarksnumbered]{hyperref}

\newtheorem{theorem}{Stelling}
\newtheorem{lemma}[theorem]{Lemma}

\theoremstyle{definition}
\newtheorem{example}[theorem]{Voorbeeld}
\newtheorem{exampleA}[theorem]{VoorbeeldA}
\newtheorem{exampleB}{VoorbeeldB}
\newtheorem{definition}[theorem]{Definitie}

\theoremstyle{remark}
\newtheorem{remark}[theorem]{Opmerking}

\theoremstyle{definition}
\newtheorem*{note}{Notitie}

\begin{document}
    \section{Voorbeelden}
    \begin{theorem}
        Een stelling
        \begin{proof}
            met bewijs.
        \end{proof}
    \end{theorem}
    \begin{exampleA}
        Voorbeeld.
    \end{exampleA}
    \begin{exampleB}
        $ \leftarrow $ Aparte nummering!
    \end{exampleB}
    \begin{theorem}
        Weer een stelling.
    \end{theorem}
\end{document}
```
