"use strict";(self.webpackChunkvkuhlmann_www=self.webpackChunkvkuhlmann_www||[]).push([[810],{5963:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=n(3485),l=["components"],s={sidebar_position:3},d="Installation",c={unversionedId:"configuration/installation",id:"configuration/installation",isDocsHomePage:!1,title:"Installation",description:"* Toubles compiling? See FIXING VS CODE *",source:"@site/latex/configuration/installation.md",sourceDirName:"configuration",slug:"/configuration/installation",permalink:"/latex/configuration/installation",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Config wizard",permalink:"/latex/configuration/configwizard"},next:{title:"Shortcuts",permalink:"/latex/configuration/shortcuts"}},u=[],p={toc:u};function m(e){var t=e.components,s=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Toubles compiling? See ",(0,i.kt)("a",{parentName:"strong",href:"/latex/configuration/fixingVSCode"},"FIXING VS CODE")," ")),(0,i.kt)("p",null,"Visual Studio Code (or VS Code) is a modern, open-source",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/vscode/wiki/Differences-between-the-repository-and-Visual-Studio-Code"},"*"),"\ncode editor with\nextension support, and is developed by Microsoft, together with a community.\nThere is an extension which adds the LaTeX-specific features, meaning we use\nthis beautiful editor for writing LaTeX code!"),(0,i.kt)("p",null,"See the image below for an impression. Clicking it opens the image in a new tab."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(8306).Z},(0,i.kt)("img",{alt:"Screenshot of writing LaTeX in Visual Studio Code",src:n(3276).Z}))),(0,i.kt)("p",null,"Download Visual Studio Code: ",(0,i.kt)("a",{href:"https://code.visualstudio.com/",target:"_blank"},"code.visualstudio.com"),"."),(0,i.kt)("p",null,"Visual Studio Code is the editor: it's mostly concerned with presenting the\ncode in a nice manner. To produce a ",(0,i.kt)("inlineCode",{parentName:"p"},".pdf")," file from a ",(0,i.kt)("inlineCode",{parentName:"p"},".tex")," file, we need\nanother program too. This is the compiler, which is part of a distribution.\nRefer to the following snippet taken from ",(0,i.kt)("a",{parentName:"p",href:"http://a-es2.nl/texnicie"},"a-es2.nl/texnicie")," to see which distribution you need to install:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows: ",(0,i.kt)("a",{parentName:"li",href:"https://miktex.org/download"},"MiKTeX")," (alternative: ",(0,i.kt)("a",{parentName:"li",href:"https://www.tug.org/texlive/acquire-netinstall.html"},"TeX Live"),")"),(0,i.kt)("li",{parentName:"ul"},"Mac: ",(0,i.kt)("a",{parentName:"li",href:"https://tug.org/mactex/mactex-download.html"},"MacTeX")," (alternative: ",(0,i.kt)("a",{parentName:"li",href:"https://miktex.org/download"},"MiKTeX"),")"),(0,i.kt)("li",{parentName:"ul"},"Linux: ",(0,i.kt)("a",{parentName:"li",href:"https://www.tug.org/texlive/acquire-netinstall.html"},"TeX Live")," (alternative: ",(0,i.kt)("a",{parentName:"li",href:"https://miktex.org/download"},"MiKTeX"),")",(0,i.kt)("br",null),"\nOn Debian you can do\n",(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt-get install texlive-full"),".")),(0,i.kt)("p",null,"The distributions don't differ much from each other. On Windows, MiKTeX can\ninstall packages automatically, TeX Live can't. TeX Live rather chooses to install\nall or most packages, which takes a couple of gigabytes of storage. TeX Live is\nhowever better integrated with the command line, if you plan on using that."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"LaTeX Workshop (see below) compiles your ",(0,i.kt)("inlineCode",{parentName:"p"},".tex")," by default with ",(0,i.kt)("inlineCode",{parentName:"p"},"latexmk")," (a\nprogram shipped by each distribution), which needs Perl installed on your\ncomputer. On Windows, Perl isn't installed by default, and only TeX Live comes\nbundled with it. If you want to use MiKTeX, you can configure VS Code to use\n",(0,i.kt)("inlineCode",{parentName:"p"},"pdflatex")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"latexmk")," (",(0,i.kt)("inlineCode",{parentName:"p"},"latexmk")," adds only marginal features on top of\nthe original ",(0,i.kt)("inlineCode",{parentName:"p"},"pdflatex"),"). Instructions for this are at ",(0,i.kt)("a",{parentName:"p",href:"/latex/configuration/fixingVSCode"},"FIXING VS\nCODE"),". Or you can install Perl from\n",(0,i.kt)("a",{parentName:"p",href:"https://strawberryperl.com"},"https://strawberryperl.com"),"."),(0,i.kt)("p",{parentName:"div"},"For more on ",(0,i.kt)("inlineCode",{parentName:"p"},"latexmk"),": ",(0,i.kt)("a",{parentName:"p",href:"https://mg.readthedocs.io/latexmk.html"},"https://mg.readthedocs.io/latexmk.html")))),(0,i.kt)("p",null,"Encountering installation problems? Restarting your computer and trying again\nmight help, else ask for help. For help outside a LaTeX course, send a mail to ",(0,i.kt)(r.Z,{inline:!0,endwithdot:!0,mdxType:"ShowEmail"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The installation can take some time. In the meantime you can already have a\nlook inside Visual Studio Code."),(0,i.kt)("p",null,"In Visual Studio Code you need to install the extension 'LaTeX Workshop'. In the\nmenu on the left (called 'the Activity bar'), select 'Extensions'.\nAlternatively, use the shortcut ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+X")," to open the menu. Search and\ninstall the extension. This mainly adds code syntax highlighting for LaTeX to\nVS Code, as well as a set of tools necessary for compiling the code into a PDF."),(0,i.kt)("p",null,"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"File > Open Folder")," and choose a new directory on your computer. Next,\ncreate a file (",(0,i.kt)("inlineCode",{parentName:"p"},"File > New File"),") and paste the following rudimentary document:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\documentclass[a4paper]{article}\n\n\\title{De titel}\n\\begin{document}\n    \\maketitle\n\n    Hallo!\n\\end{document}\n")),(0,i.kt)("p",null,"Save (",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+S"),") the file with name ",(0,i.kt)("inlineCode",{parentName:"p"},"document.tex")," (or something else ending in\n",(0,i.kt)("inlineCode",{parentName:"p"},".tex"),"). In the left menu (the Activity bar), an icon appears with the text\n'TeX'. In this menu, click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Build LaTeX project"),", or expand the menu and\nselect a specific Recipe. Wait till compilation is done."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of VS Code statusbar while compiling",src:n(8391).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of VS Code statusbar after succesful compilation",src:n(6723).Z})),(0,i.kt)("p",null,"If you don't get a success, have a look at ",(0,i.kt)("a",{parentName:"p",href:"/latex/configuration/fixingVSCode"},"FIXING VS CODE"),".\nIf you get the success checkmark, click the ",(0,i.kt)("inlineCode",{parentName:"p"},"View LaTeX project")," button."),(0,i.kt)("p",null,"Now change something in your ",(0,i.kt)("inlineCode",{parentName:"p"},".tex")," and press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+S")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Command+S")," to save.\nWith the default settings, LaTeX workshop should automatically compile your\nfile again, and the PDF viewer should refresh automatically after that compilation."),(0,i.kt)("p",null,"You see the project directory now contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"document.pdf")," alongside the\n",(0,i.kt)("inlineCode",{parentName:"p"},"document.tex"),". There are a bunch of other files too, like ",(0,i.kt)("inlineCode",{parentName:"p"},".aux"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".log"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},".synctex.gz")," and possibly more files. These are auxiliary files and you can\nignore them. If you want, you can harmlessly remove them by selecting\n",(0,i.kt)("inlineCode",{parentName:"p"},"Clean up auxiliary files")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Build LaTeX project")," menu."),(0,i.kt)("p",null,"The installation is now complete."))}m.isMDXComponent=!0},3485:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),o=(n(448),n(9882)),i=n(7200),r=(n(6486),{"docusaurus-highlight-code-line":"RBEB7zcsXE9TsOmfV5bE",imgCanvas:"u8A9mDumyo2I1dtFZZvL",sometest:"uuVXGL26WlRoGw7VDWN0","visually-hidden":"BpKjNuco7cNKpwDcP6_W","nav-link":"RRzEyqZJRRKXM2lNN5KJ","non-visual-context":"DRHPGotyxJlDKk7QSznZ","sidebar-menu":"T1Q7YDVkzsBmd9u_TJ8Z","visually-hidden-focusable":"Lto7YCJl3ZoPoIxBQz7S"}),l=n(8834),s=function(e){var t=(0,a.useContext)(o.Z),n=(0,a.useState)(a.createElement("span",null,"Not available")),s=n[0],d=n[1];(0,a.useEffect)((function(){d(function(){console.log("Styles is"),console.log(r);var e={fontFamily:"'Courier New', Courier, monospace"};return a.createElement(a.Fragment,null,a.createElement("span",{style:e},"vincent."),a.createElement("span",{className:r["visually-hidden"],style:{userSelect:"none"}},"incent."),a.createElement("span",{style:e},"kuhlma",["","",""].join("n")),a.createElement("span",{style:e},String.fromCharCode(64)),a.createElement("span",{style:e},"hotmail.com"))}())}),[]);var c=t.isDarkTheme?i.$_:i.Wb;return a.createElement(l.f,{theme:c},!e.inline&&a.createElement("span",null,"E-mail: "),s,e.endwithdot&&a.createElement("span",{style:{userSelect:"none"}},"."))}},7200:function(e,t,n){n.d(t,{$_:function(){return o},Wb:function(){return i}});var a={forms:{label:{fontSize:1,fontWeight:"bold"},input:{borderColor:"gray","&:focus":{borderColor:"primary",boxShadow:function(e){return"0 0 0 2px "+e.colors.primary},outline:"none"},"&:disabled":{backgroundColor:"disabledBackground",color:"disabledForeground"}},select:{borderColor:"gray","&:focus":{borderColor:"primary",boxShadow:function(e){return"0 0 0 2px "+e.colors.primary},outline:"none"}},textarea:{borderColor:"gray","&:focus":{borderColor:"primary",boxShadow:function(e){return"0 0 0 2px "+e.colors.primary},outline:"none"}},slider:{bg:"muted"}},buttons:{primary:{color:"background",bg:"primary"},secondary:{color:"background",bg:"secondary"},gray:{color:"background",bg:"gray"}},alerts:{danger:{color:"white",bg:"darkred"}}},o=Object.assign({},a,{colors:{text:"var(--ifm-font-color-base)",background:"var(--ifm-background-color)",primary:"var(--ifm-color-primary)",secondary:"#111199",muted:"#f6f6f6",highlight:"var(--ifm-color-primary-contrast-background)",gray:"#777777",accent:"#660099",darken:"rgba(0, 0, 0, 0.25)",disabledBackground:"hsl(0, 0%, 20%)",disabledForeground:"hsl(0, 0%, 50%)"}}),i=Object.assign({},a,{colors:{text:"var(--ifm-font-color-base)",background:"#fff",primary:"var(--ifm-color-primary)",secondary:"#111199",muted:"#f6f6f6",highlight:"var(--ifm-color-primary-contrast-background)",gray:"#777777",accent:"#660099",darken:"rgba(0, 0, 0, 0.25)",disabledBackground:"hsl(0, 0%, 90%)",disabledForeground:"hsl(0, 0%, 80%)"}})},8306:function(e,t,n){t.Z=n.p+"assets/files/VisualStudioCodeDemo-44dc77498e90e4586d28d7caf1c9547d.png"},6723:function(e,t,n){t.Z=n.p+"assets/images/VSCodeStatusbarCompiled-f93a512c5842a3a734327f1962922cf2.png"},8391:function(e,t,n){t.Z=n.p+"assets/images/VSCodeStatusbarCompiling-a67bf435b51d8ee5d2e53f63d4002bcf.png"},3276:function(e,t,n){t.Z=n.p+"assets/images/VisualStudioCodeDemo-44dc77498e90e4586d28d7caf1c9547d.png"}}]);