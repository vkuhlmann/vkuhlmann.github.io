# Uitbreiding

import CodeInline from "../../../../src/components/CodeInline.js";
import DocsImage from "../../../../src/components/DocsImage.js";

#### Tabularx

In de slides van tabellen is er een code voorbeeld die tabularx gebruikt. Wat zijn de verschillen
met de slide ervoor? Wat kan tabularx dus doen?

#### Referentie aan subfigures

Kan je een <CodeInline code="\label{...}"/> toevoegen aan de caption van een subfigure?
Hoe ziet een referentie daaraan eruit?

#### Subfigure nesting

Plaats een subfigure binnen een andere subfigure. Hoe ziet dit eruit?
Hoe vreselijk voelt dat?

#### Commando <CodeInline code="\hfill"/>

Maak een figure met kleine subfigures erin. Wat gebeurt er als
je <CodeInline code="\hfill"/> toevoegt tussen de subfigures?

#### Commando <CodeInline code="\texorpdfstring"/>

Wat doet het command <CodeInline code="\texorpdfstring{...}{...}"/> van de hyperref package?
Zoek het op in de documentatie van de package.

#### Commando <CodeInline code="\pageref" />

Waarin verschilt het commando <CodeInline code="\pageref" /> van het simpele <CodeInline code="\ref" />?

#### Paginagrootte veranderingen

Voeg een aantal alinea's van https://lipsum.com toe aan je bestand, en spreidt
ze uit over meerdere pagina's:

- Pagina 1: Landscape A5-papier met marges 2 cm
- Pagina 2: Papier van dimensies 100 mm x 100 mm
            met marge 2 cm langs de onderkant, en 1 cm langs de andere kanten.
- Pagina 3: Portrait A6-papier met marges 0 cm

Hint: https://tex.stackexchange.com/a/528245/242407

Opmerking: de pagina grootte van A6-papier is 105mm:148mm

#### Commando <CodeInline code="\FloatBarrier" />

Zoek op wat het commando <CodeInline code="\FloatBarrier" /> van het package
placeins doet.

#### Wrapfigure

Zoek op wat het environment wrapfigure van het package wrapfig doet.
