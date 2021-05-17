---
title: "Afbeeldingen"
layout: latexReferentie
tab: "Materiaal"
---

### Samenvatting

* `\includegraphics[height=2cm]{image.jpg}`

* `figure`-environment:
```
\begin{figure}[htbp]
    \centering
    \includegraphics[width=0.8\linewidth,height=5cm,keepaspectratio]{pinguin.jpg}
    \caption{Een schattige pinguïn. Deze foto is van het internet.}\label{fig:pinguin}
\end{figure}
```

* Non-floating `figure`-environment: Gebruik plaatsingsoptie `H` `\usepackage{float}`

* `subfigure`-environment:
```
\begin{figure}[htbp]
    \centering
    \begin{subfigure}[b]{0.45\textwidth}
        \includegraphics[width=\textwidth]{AA}
        \caption{BB}
        \label{fig:dphiExample}
    \end{subfigure}\qquad
    \begin{subfigure}[b]{0.45\textwidth}
        \includegraphics[width=\textwidth]{CC}
        \caption{CC}
        \label{fig:fitExample}
    \end{subfigure}
    \caption{Meerdere afbeeldingen naast elkaar!}
\end{figure}
```
