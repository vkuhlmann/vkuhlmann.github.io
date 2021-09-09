"use strict";(self.webpackChunkvkuhlmann_www=self.webpackChunkvkuhlmann_www||[]).push([[3810],{3087:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],r={sidebar_position:3},s="Installation",u={unversionedId:"configuration/installation",id:"configuration/installation",isDocsHomePage:!1,title:"Installation",description:"LaTeX can be written in Visual Studio Code. See the image below for an impression.",source:"@site/latex/configuration/installation.md",sourceDirName:"configuration",slug:"/configuration/installation",permalink:"/latex/configuration/installation",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Config wizard",permalink:"/latex/configuration/configwizard"},next:{title:"Shortcuts",permalink:"/latex/configuration/shortcuts"}},d=[],p={toc:d};function c(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"LaTeX can be written in Visual Studio Code. See the image below for an impression.\nClicking it opens the image in a new tab."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(8306).Z},(0,o.kt)("img",{alt:"Screenshot of writing LaTeX in Visual Studio Code",src:n(3276).Z}))),(0,o.kt)("p",null,"Download Visual Studio Code: ",(0,o.kt)("a",{href:"https://code.visualstudio.com/",target:"_blank"},"code.visualstudio.com"),"."),(0,o.kt)("p",null,"Visual Studio Code is the editor: it's mostly concerned with presenting the\ncode in a nice manner. To produce a ",(0,o.kt)("inlineCode",{parentName:"p"},".pdf")," file from a ",(0,o.kt)("inlineCode",{parentName:"p"},".tex")," file, we need\nanother program too. This is the compiler, which is part of a distribution.\nRefer to the following snippet of text taken from ",(0,o.kt)("a",{parentName:"p",href:"http://a-es2.nl/texnicie"},"a-es2.nl/texnicie")," to see which distribution you need to install:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows: ",(0,o.kt)("a",{parentName:"li",href:"https://miktex.org/download"},"MiKTeX")," (alternative: ",(0,o.kt)("a",{parentName:"li",href:"https://www.tug.org/texlive/acquire-netinstall.html"},"TeX Live"),")"),(0,o.kt)("li",{parentName:"ul"},"Mac: ",(0,o.kt)("a",{parentName:"li",href:"https://miktex.org/download"},"MiKTeX")," (alternative: ",(0,o.kt)("a",{parentName:"li",href:"https://tug.org/mactex/mactex-download.html"},"MacTeX"),")"),(0,o.kt)("li",{parentName:"ul"},"Linux: ",(0,o.kt)("a",{parentName:"li",href:"https://www.tug.org/texlive/acquire-netinstall.html"},"TeX Live"),"! (alternative: ",(0,o.kt)("a",{parentName:"li",href:"https://miktex.org/download"},"MiKTeX"),")",(0,o.kt)("br",null),"\nOn Debian you can do\n",(0,o.kt)("inlineCode",{parentName:"li"},"sudo apt-get install texlive-full"),".")),(0,o.kt)("p",null,"The distributions don't differ much from eachother. On Windows, MiKTeX can\ninstall packages automatically, TeX Live can't. TeX Live rather chooses to install\nall or most packages, which takes a couple of gigabytes of storage. TeX Live is\nhowever better integrated with the command line, if you plan on using that."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The installation can take some time. In the meantime you can already have a\nlook inside Visual Studio Code."),(0,o.kt)("p",null,"In Visual Studio Code you need to install the extension 'LaTeX Workshop'. In the\nmenu on the left (called 'the Activity bar'), select 'Extensions'.\nAlternatively, use the shortcut ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+X")," to open the menu. Search and\ninstall the extension. This mainly adds code syntax highlighting for LaTeX to\nVS Code, as well as a set of tools necessary for compiling the code into a PDF."),(0,o.kt)("p",null,"Encountering installation problems? Restarting your computer and trying again\nmight help, else ask for help."),(0,o.kt)("p",null,"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"File > Open Folder")," and choose a new directory on your computer. Next,\ncreate a file (",(0,o.kt)("inlineCode",{parentName:"p"},"File > New File"),") and paste the following rudimentary document:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-latex"},"\\documentclass[a4paper]{article}\n\n\\title{De titel}\n\\begin{document}\n    \\maketitle\n\n    Hallo!\n\\end{document}\n")),(0,o.kt)("p",null,"Save (",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+S"),") the file with name ",(0,o.kt)("inlineCode",{parentName:"p"},"document.tex")," (or something else ending in\n",(0,o.kt)("inlineCode",{parentName:"p"},".tex"),"). In the left menu (the Activity bar), an icon appears with the text\n'TeX'. In this meny, click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Build LaTeX project"),", followed by ",(0,o.kt)("inlineCode",{parentName:"p"},"View LaTeX\nproject"),". This should open a PDF view, showing the rudimentary document you just\ncopied."),(0,o.kt)("p",null,"You see the project directory now contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"document.pdf")," alongside the\n",(0,o.kt)("inlineCode",{parentName:"p"},"document.tex"),". There are a bunch of other files too, like ",(0,o.kt)("inlineCode",{parentName:"p"},".aux"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".log"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},".synctex.gz")," and possibly more files. These are auxiliary files and you can\nignore them."),(0,o.kt)("p",null,"The installation is now complete."))}c.isMDXComponent=!0},8306:function(e,t,n){t.Z=n.p+"assets/files/VisualStudioCodeDemo-44dc77498e90e4586d28d7caf1c9547d.png"},3276:function(e,t,n){t.Z=n.p+"assets/images/VisualStudioCodeDemo-44dc77498e90e4586d28d7caf1c9547d.png"}}]);