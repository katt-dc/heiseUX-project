import React from "react";
import ProgressBar from "./ProgressBar";
import Bookmarks from "./Bookmarks";
import "./App.css";
import "./styles.css";
import "./bookmarks.css"; 
import "./images/ipad-air-2024.jpg";
import "./images/Heise_Online_Logo_2024.png";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <div className="header-content">
        
          <div className="logo">
            <img src="public/Heise_Online_Logo_2024.png"  alt="" style={{ width: '200px' }}/>
          </div>
        </div>
      </header>
      <Bookmarks />
      <ProgressBar />
      <div style={{ padding: "20px" }}>
        <>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Artikel - Heise</title>
          <link rel="stylesheet" href="styles.css" />
          <main>
            <article className="article-content">
              <nav>
                <ul>
                  <li>
                    <a href="#">IT</a>
                  </li>
                  <li>
                    <a href="#">Wissen</a>
                  </li>
                  <li>
                    <a href="#">Mobiles</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a href="#">Developer</a>
                  </li>
                  <li>
                    <a href="#">Entertainment</a>
                  </li>
                  <li>
                    <a href="#">Netzpolitik</a>
                  </li>
                  <li>
                    <a href="#">Wirtschaft</a>
                  </li>
                  <li>
                    <a href="#">Journal</a>
                  </li>
                </ul>
              </nav>
              <div className="left">
                {/* Apple Artikel */}
                <h1>Apple iPad Air 2024 im Test: Das bezahlbare Pro</h1>
                <div className="chapter">
                <p>
                  An Bord hat das neue iPad Air einige Features der teuren
                  Pro-Modelle. Wir klären, für wen angesichts der
                  Preisunterschiede ein Air das bessere Pro ist.
                </p>
                {/* Bild */}
                <div className="chapterImage">
                <img src="public/ipad-air-2024.jpg" alt="Apple iPad Air 2024" />
                </div>
                <p className="author">Von Autor Name | Datum</p>
                <p>
                  Traditionell kombiniert Apple im iPad Air viele Komponenten
                  früherer iPad-Pro-Generationen zu einem attraktiven Mix aus
                  Leistungsfähigkeit und günstigerem Preis. So ist es auch bei
                  den neuen Modellen geschehen, die nun zum Beispiel den
                  M2-Prozessor des iPad Pro 2022 geerbt haben. Es gibt aber auch
                  einige Eigenschaften, die man beim Pro nicht findet, etwa den
                  Fingerabdrucksensor im Einschaltknopf und die Farbauswahl mit
                  Violett und Blau. Zum Test stand uns ein iPad Air 13″ mit 1
                  TByte Speicher zur Verfügung.
                  <br />
                  <br />
                  Das letzte iPad Air aus dem März 2022 gab es nur in der
                  Displaygröße 10,9 Zoll sowie in den fünf Farben Space-Grau,
                  Polarstern, Blau, Violett und Pink. Letztere ist nun nicht
                  mehr erhältlich, dafür kam eine neue Displaygröße von 13 Zoll
                  hinzu. Den Speicher des Basismodells hat Apple von 64 auf 128
                  GByte verdoppelt und bei allen Airs die Frontkamera auf die
                  längere Seite verlegt.
                </p>
                </div>
                <h2>Tastatur und Hülle</h2>
                <div className="chapter">
                <p>
                  Das vom iPad Pro 12,9″ bekannte Magic Keyboard für nun 399
                  Euro passt auch am iPad Air 13″. Es besteht aus Kunststoff und
                  besitzt ein kleines Trackpad. Es haftet magnetisch am iPad Air
                  und seine hintergrundbeleuchtete Tastatur wird von diesem über
                  den rückwärtigen Smart Connector gespeist, sodass es keinen
                  eignen Akku benötigt. In der Tastatur befindet sich eine
                  USB-C-Buchse, die Strom an das iPad durchleiten kann, aber
                  keine Daten überträgt. Das Magic Keyboard für das iPad Air 11″
                  besitzt aufgrund der geringeren Breite einige schmalere Tasten
                  und kostet 349 Euro. Auf beiden Keyboards lässt sich dank
                  Scherenmechanismus recht gut tippen, allerdings nicht ganz so
                  komfortabel wie auf den Tastaturen von aktuellen MacBooks und
                  auf den neuen (und gleich teuren) Magic Keyboards für die iPad
                  Pros 2024. Es gibt auch keine Funktionstasten
                </p>
                <p>
                  Apple bietet außerdem für das iPad Air 2024 eine neue Hülle
                  an, die sich dank weiterer Magnete in mehr Positionen
                  auffalten lässt. Aufrecht stehen drei Winkel zur Verfügung,
                  halb liegend eine weitere. Klappt man den Deckel über dem
                  Display zu, sorgen Magnete für den Start des Ruhezustands.
                  Erhältlich ist das neue Smart Folio in den Farben Hellviolett,
                  Anthrazit, Salbei und Denim – einem hellen Jeansblau. Für das
                  13-Zoll-Modell verlangt Apple 119 Euro, für das mit 11 Zoll 89
                  Euro.
                </p>
                </div>
                <h2>Herkömmliches IPS-Display</h2>
                <div className="chapter">
                <p>
                  Anders als den iPad Pros hat Apple den neuen Airs kein
                  OLED-Display spendiert. Zum Einsatz kommen wie bisher
                  Glossy-IPS-Panels mit laminierter Antireflexbeschichtung und
                  LED-Hintergrundbeleuchtung. Das 11-Zoll-Modell soll 500 Nits
                  (gleichzusetzen mit Candela/m2) schaffen, das 13-Zoll-Modell
                  600. Mit Letzterem erzielten wir im Test an einem geeichten
                  Leuchtdichtemessgerät in der Bildmitte 563 Nits.
                </p>
                <p>
                  Die Panels beherrschen die üblichen Features True Tone zur
                  Anpassung des Weißpunktes an die Tageszeit sowie den
                  erweiterten Farbraum DCI-P3. 120-Hertz-Technik und punktuell
                  erhöhte Helligkeit bei HDR-Inhalten bleiben den Pros
                  vorbehalten.
                </p>
                <p>
                  Das iPad Air 11″ besitzt mit 2360 × 1640 Pixeln genau so viel
                  wie der Vorgänger mit 10,9 Zoll. Auch die Pixeldichte blieb
                  mit 264 dpi gleich, ebenso wie die Gehäusemaße. Es handelt
                  sich bei der neuen Größenbezeichnung also um reines Marketing.
                </p>
                <p>
                  Die Pixelzahl des iPad Air 13″ von 2732 × 2028 entspricht
                  genau der vom bisherigen iPad Pro 12,9″, also auch hier eine
                  Namensanpassung ohne Änderung dahinter. Das Display wird im
                  Unterschied zum älteren iPad Pro 12,9″ nicht von Mini-LED
                  hinterleuchtet. Nichtsdestotrotz sehen Fotos und Videos auf
                  dem IPS-Screen gut und farbkräftig aus, Texte knackig scharf.
                  Lediglich beim Scrollen verschwimmen Letztere ein wenig bei
                  "nur" 60 Hertz. Wer von einem iPad Pro kommt, dürfte das als
                  Rückschritt empfinden.
                </p>
                </div>
                <h2>Fazit</h2>
                <div className="chapter">
                <p>
                  Klar ist der M2 besser als der M1 und der neue Pencil Pro
                  macht das künstlerische Malen und Zeichnen noch ähnlicher zum
                  analogen Stift oder Pinsel. Aber deshalb sein iPad Air der
                  fünften Generation zu verkaufen und sich das neue mit 11 Zoll
                  holen? Muss man wirklich nicht. Etwas anderes ist es, wenn man
                  mehr Fläche braucht. Da ist das neue 13-Zoll-Modell eine echte
                  Bereicherung, für die man früher stets zum noch teureren iPad
                  Pro greifen musste.
                </p>
                <p>
                  Das neue iPad Pro mit OLED-Bildschirm, 120 Hertz und 1600 Nits
                  sowie dem noch schnelleren M4 würde man sicher nicht von der
                  Tischkante schubsen, doch für diese Eigenschaften 600 Euro
                  mehr hinlegen, wollen sicher nur die Wenigsten. Wer mit dem
                  iPad sein Geld verdient, wird allerdings alle Funktionen haben
                  wollen und sich über ein entspiegeltes Display freuen. Eine
                  Alternative zum iPad Air 13" ist – mit gleichem Prozessor,
                  aber SIM-Slot, 120 Hz und Thunderbolt – das iPad Pro 12,9‟ von
                  2022, das man noch im Handel ab 1300 Euro bekommt. Wer sein
                  iPad nur zum Mailen oder Videos gucken einsetzen will, dürfte
                  wiederum auch mit einem einfachen iPad (ohne Air und Pro)
                  auskommen. Steht man vor einer Neuanschaffung, bietet das iPad
                  Air von Apples Tablets dennoch das beste
                  Preis-Leistungsverhältnis und sinnvolle Kreativ-Features wie
                  den neuen Pencil Pro.
                </p>
                </div>
                <h2>Testtabelle</h2>
                <div className="chapterTable">
                {/* Tabelle */}
                <section
                  id="myTable"
                  className="a-inline-table json-ld-paid-content-marker"
                >
                  <table className="a-inline-table__table">
                    <tbody>
                      <tr>
                        <td
                          className="heise-table-title"
                          colSpan={4}
                          style={{ textAlign: "left" }}
                        >
                          iPad Air 13" und Vorgänger
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="heise-table-title"
                          style={{ textAlign: "left" }}
                        />
                        <td
                          className="heise-table-title"
                          style={{ textAlign: "left" }}
                        />
                        <td
                          className="heise-table-title"
                          style={{ textAlign: "left" }}
                        />
                        <td
                          className="heise-table-title"
                          style={{ textAlign: "left" }}
                        />
                      </tr>
                      <tr>
                        <td
                          className="heise-table-title"
                          style={{ textAlign: "left" }}
                        />
                        <td
                          className="heise-table-title"
                          style={{ textAlign: "left" }}
                        >
                          iPad Air 5 (2022)
                        </td>
                        <td
                          className="heise-table-title"
                          style={{ textAlign: "left" }}
                        >
                          iPad Air 13" (2024)
                        </td>
                        <td
                          className="heise-table-title"
                          style={{ textAlign: "left" }}
                        >
                          iPad Pro 12,9" (2022)
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>Farben</td>
                        <td style={{ textAlign: "left" }}>
                          Polarstern, Space Grau, Violett, Blau
                        </td>
                        <td style={{ textAlign: "left" }}>
                          Polarstern, Space Grau, Violett, Blau
                        </td>
                        <td style={{ textAlign: "left" }}>
                          Silber, Space-Grau
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>Ausstattung</td>
                        <td style={{ textAlign: "left" }} />
                        <td style={{ textAlign: "left" }} />
                        <td style={{ textAlign: "left" }} />
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          Prozessor / Kerne / Takt
                        </td>
                        <td style={{ textAlign: "left" }}>
                          Apple M1 / 8 ( 4 + 4) / 2,4 GHz (Neural Engine mit 16
                          Kernen)
                        </td>
                        <td style={{ textAlign: "left" }}>
                          Apple M2 / 8 (4+4) / 3,5 GHz (Neural Engine mit 16
                          Kernen)
                        </td>
                        <td style={{ textAlign: "left" }}>
                          Apple M2 (neuronale Engine mit 16 Kernen) / 8 (4+4) /
                          3,5 GHz
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>Grafik / Kerne</td>
                        <td style={{ textAlign: "left" }}>Apple / 8</td>
                        <td style={{ textAlign: "left" }}>Apple / 9</td>
                        <td style={{ textAlign: "left" }}>Apple / 10</td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>Arbeitsspeicher</td>
                        <td style={{ textAlign: "left" }}>8 GByte</td>
                        <td style={{ textAlign: "left" }}>8 GByte</td>
                        <td style={{ textAlign: "left" }}>8 / 16 GByte</td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          Flashspeicher (Modelle)
                        </td>
                        <td style={{ textAlign: "left" }}>64 / 256 GByte</td>
                        <td style={{ textAlign: "left" }}>
                          128 / 256 / 512 / 1024 GByte
                        </td>
                        <td style={{ textAlign: "left" }}>
                          128 / 256 / 512 / 1024 / 2048 GByte
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          WLAN / max. Durchsatz
                        </td>
                        <td style={{ textAlign: "left" }}>
                          Wi-Fi 6 / 1,2 GBit/s
                        </td>
                        <td style={{ textAlign: "left" }}>
                          Wi-Fi 6E (inkl. 6 GHz) / 2,4 GBit/s
                        </td>
                        <td style={{ textAlign: "left" }}>
                          Wi-Fi 6E (inkl. 6 GHz) / 2,4 GBit/s
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          Mobile Datenverbindung
                        </td>
                        <td style={{ textAlign: "left" }}>5G</td>
                        <td style={{ textAlign: "left" }}>5G</td>
                        <td style={{ textAlign: "left" }}>5G</td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>Bluetooth / GPS</td>
                        <td style={{ textAlign: "left" }}>
                          5.0 / GPS und GNSS (nur 5G-Modell)
                        </td>
                        <td style={{ textAlign: "left" }}>
                          5.3 / GPS und GNSS (nur 5G-Modell)
                        </td>
                        <td style={{ textAlign: "left" }}>
                          5.3 / GPS und GNSS (nur 5G-Modell)
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>SIM</td>
                        <td style={{ textAlign: "left" }}>
                          Nano-SIM, eSIM (nur 5G-Modell)
                        </td>
                        <td style={{ textAlign: "left" }}>
                          eSIM (nur 5G-Modell)
                        </td>
                        <td style={{ textAlign: "left" }}>
                          Nano-SIM und eSIM (nur 5G-Modell)
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>Akku / Kapazität</td>
                        <td style={{ textAlign: "left" }}>
                          Lithium-Polymer / 28,6 Wh
                        </td>
                        <td style={{ textAlign: "left" }}>
                          Lithium-Polymer / 36,59 Wh
                        </td>
                        <td style={{ textAlign: "left" }}>
                          Lithium-Polymer / 40,88 Wh
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          Abmessungen (H × B × T)
                        </td>
                        <td style={{ textAlign: "left" }}>
                          248 mm × 179 mm × 6,1 mm
                        </td>
                        <td style={{ textAlign: "left" }}>
                          281 mm × 215 mm × 6,1 mm
                        </td>
                        <td style={{ textAlign: "left" }}>
                          280,6 mm × 214,9 mm × 6,4 mm
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>Gewicht</td>
                        <td style={{ textAlign: "left" }}>
                          462 / 461 g (ohne 5G)
                        </td>
                        <td style={{ textAlign: "left" }}>
                          618 / 617 g (ohne 5G)
                        </td>
                        <td style={{ textAlign: "left" }}>
                          684 / 682 g (ohne 5G)
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>Anschlüsse</td>
                        <td style={{ textAlign: "left" }}>USB-C</td>
                        <td style={{ textAlign: "left" }}>USB-C</td>
                        <td style={{ textAlign: "left" }}>
                          Typ-C mit USB 4 und Thunderbolt 3
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>Audio</td>
                        <td style={{ textAlign: "left" }}>
                          Stereo-Lautsprecher, 2 Mikrofone
                        </td>
                        <td style={{ textAlign: "left" }}>
                          Stereo-Lautsprecher, 2 Mikrofone
                        </td>
                        <td style={{ textAlign: "left" }}>
                          4 Lautsprecher, 5 Mikrofone
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>Kameras</td>
                        <td style={{ textAlign: "left" }} />
                        <td style={{ textAlign: "left" }} />
                        <td style={{ textAlign: "left" }} />
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          Hauptkamera-Auflösung Foto / Video
                        </td>
                        <td style={{ textAlign: "left" }}>
                          12 MPixel / 4K bei 60 fps
                        </td>
                        <td style={{ textAlign: "left" }}>
                          12 MPixel / 4K bei 60 fps
                        </td>
                        <td style={{ textAlign: "left" }}>
                          Weitwinkel, Ultra-Weitwinkel: 12 MPixel / 4K bei 60
                          fps
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          HDR / Panorama / Fotoleuchte
                        </td>
                        <td style={{ textAlign: "left" }}>✓ / ✓ / –</td>
                        <td style={{ textAlign: "left" }}>✓ / ✓ / –</td>
                        <td style={{ textAlign: "left" }}>✓ / ✓ / ✓</td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          Frontkamera-Auflösung Foto / Video
                        </td>
                        <td style={{ textAlign: "left" }}>
                          12 MPixel / 1080p bei 60 fps
                        </td>
                        <td style={{ textAlign: "left" }}>
                          12 MPixel / 1080p bei 60 fps
                        </td>
                        <td style={{ textAlign: "left" }}>
                          12 MPixel / 1080p bei 60 fps (Bokeh)
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>Sensoren</td>
                        <td style={{ textAlign: "left" }}>
                          Fingerabdruck, Barometer, 3-Achsen-Gyroskop,
                          Beschleunigung, Umgebungslicht
                        </td>
                        <td style={{ textAlign: "left" }}>
                          Fingerabdruck, Barometer, 3-Achsen-Gyroskop,
                          Beschleunigung, Umgebungslicht
                        </td>
                        <td style={{ textAlign: "left" }}>
                          Gesichtserkennung, Barometer, 3-Achsen-Gyroskop,
                          Beschleunigung, Umgebungslicht, LiDAR
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>Display</td>
                        <td style={{ textAlign: "left" }} />
                        <td style={{ textAlign: "left" }} />
                        <td style={{ textAlign: "left" }} />
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          max. Helligkeit (gemessen)
                        </td>
                        <td style={{ textAlign: "left" }}>
                          469 cd/m<sup>2</sup>
                        </td>
                        <td style={{ textAlign: "left" }}>
                          563 cd/m<sup>2</sup>
                        </td>
                        <td style={{ textAlign: "left" }}>
                          504 (1120 mit HDR) cd/m<sup>2</sup>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>Farbraum</td>
                        <td style={{ textAlign: "left" }}>DCI-P3</td>
                        <td style={{ textAlign: "left" }}>DCI-P3</td>
                        <td style={{ textAlign: "left" }}>DCI-P3</td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          Technik / Diagonale
                        </td>
                        <td style={{ textAlign: "left" }}>
                          IPS / 10,9 Zoll (27,69 cm)
                        </td>
                        <td style={{ textAlign: "left" }}>
                          IPS / 13 Zoll (33,02 cm)
                        </td>
                        <td style={{ textAlign: "left" }}>
                          IPS mit Mini-LEDs / 12,9 Zoll (32,8 cm), 120 Hz
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>Auflösung</td>
                        <td style={{ textAlign: "left" }}>
                          2360 × 1640 Pixel bei 264 dpi
                        </td>
                        <td style={{ textAlign: "left" }}>
                          2732 × 2048 Pixel bei 264 dpi
                        </td>
                        <td style={{ textAlign: "left" }}>
                          2732 × 2048 Pixel bei 264 dpi
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          sonstiger Lieferumfang
                        </td>
                        <td style={{ textAlign: "left" }}>
                          20-Watt-USB-C-Netzteil, USB-C-Kabel
                        </td>
                        <td style={{ textAlign: "left" }}>USB-C-Kabel</td>
                        <td style={{ textAlign: "left" }}>
                          20-Watt-USB-C-Netzteil, USB-C-Kabel
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>Apple-Zubehör</td>
                        <td style={{ textAlign: "left" }}>
                          Pencil 2, Magic oder Smart Keyboard
                        </td>
                        <td style={{ textAlign: "left" }}>
                          Pencil Pro/USB-C, Magic Keyboard
                        </td>
                        <td style={{ textAlign: "left" }}>
                          Pencil 2, Smart Keyboard, Magic Keyboard
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>Bewertungen</td>
                        <td style={{ textAlign: "left" }} />
                        <td style={{ textAlign: "left" }} />
                        <td style={{ textAlign: "left" }} />
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          Bedienung / Performance
                        </td>
                        <td style={{ textAlign: "left" }}>⊕⊕ / ⊕</td>
                        <td style={{ textAlign: "left" }}>⊕⊕ / ⊕⊕</td>
                        <td style={{ textAlign: "left" }}>⊕⊕ / ⊕⊕</td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          Ausstattung / Preis-Leistung
                        </td>
                        <td style={{ textAlign: "left" }}>○ / ○</td>
                        <td style={{ textAlign: "left" }}>⊕ / ⊕</td>
                        <td style={{ textAlign: "left" }}>⊕⊕ / ○</td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>Display</td>
                        <td style={{ textAlign: "left" }}>⊕</td>
                        <td style={{ textAlign: "left" }}>⊕</td>
                        <td style={{ textAlign: "left" }}>⊕⊕</td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>Laufzeit</td>
                        <td style={{ textAlign: "left" }}>⊕</td>
                        <td style={{ textAlign: "left" }}>⊕</td>
                        <td style={{ textAlign: "left" }}>⊕</td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          Kamera Fotos / Videos
                        </td>
                        <td style={{ textAlign: "left" }}>○ / ○</td>
                        <td style={{ textAlign: "left" }}>○ / ○</td>
                        <td style={{ textAlign: "left" }}>⊕⊕ / ⊕⊕</td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          Preise (bei Markteinführung)
                        </td>
                        <td style={{ textAlign: "left" }}>
                          769 / 969 € (64 GByte / mit 5G) und 969 / 1169 € (256
                          GByte / mit 5G)
                        </td>
                        <td style={{ textAlign: "left" }}>
                          949 / 1119 € (128 GByte / mit 5G), 1079 / 1249 € (256
                          GByte / mit 5G), 1329 / 1499 € (512 GByte / mit 5G),
                          1579 / 1749 € (1 TByte / mit 5G)
                        </td>
                        <td style={{ textAlign: "left" }}>
                          1449 / 1649 € (128 GByte / mit 5G), 1579 / 1779 € (256
                          GByte / mit 5G), 1829 / 2029 € (512 GByte / mit 5G),
                          2329 / 2524 € (1 TByte / mit 5G), 2829 / 3024 € (2
                          TByte / mit 5G)
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3} style={{ textAlign: "left" }}>
                          ⊕⊕ sehr gut ⊕ gut ○ zufriedenstellend ⊖ schlecht ⊖⊖
                          sehr schlecht ✓ vorhanden – nicht vorhanden
                        </td>
                        <td style={{ textAlign: "left" }} />
                      </tr>
                    </tbody>
                  </table>
                </section>
                </div>
                {/* Neuer Artikel */}
                <h2>Interaktive Grafiken</h2>
                <div className="chapter">
                <p>
                  Firmen suchen händeringend nach IT-Admins. Sie sind der
                  Grundstein für eine gute technische Infrastruktur. Wir zeigen,
                  was Administratoren verdienen.
                </p>
                </div>
                <h2>Durchschnittsgehälter nach Bundesland</h2>
                <div className="chapterImage">
                {/* Interaktive Grafik */}
                <iframe
                  aria-label="Karte"
                  data-external={1}
                  frameBorder={0}
                  height={759}
                  id="datawrapper-chart-H7Uub"
                  scrolling="no"
                  src="https://datawrapper.dwcdn.net/H7Uub/1/"
                  style={{
                    width: 610,
                    minWidth: "100% !important",
                    border: "none",
                  }}
                  title="Durchschnittsgehälter nach Bundesland"
                />
                </div>
                <div className="chapter">
                <p>
                  Kununu hat die Gehälter auch nach Bundesland aufgeschlüsselt.
                  Mit einem durchschnittlichen Bruttojahresgehalt von 51.500
                  Euro führt Hessen die Liste an und bietet Administratoren das
                  höchste Gehalt. Dies liegt deutlich über dem deutschen
                  Durchschnittsgehalt von 49.000 Euro für einen Admin. Es folgen
                  Hamburg und Baden-Württemberg, wo Administratoren im Schnitt
                  rund 51.400 Euro verdienen – auch das liegt über dem
                  Durchschnitt. Dazu verdienen nur noch die Bayern
                  überdurchschnittlich – Admins in den restlichen Bundesländern
                  verdienen also tendenziell weniger.
                </p>
                <p>
                  Am anderen Ende des Spektrums liegt Mecklenburg-Vorpommern, wo
                  das durchschnittliche Bruttojahresgehalt für Administratoren
                  bei 41.900 Euro liegt – 7100 Euro unter dem deutschen
                  Durchschnitt. Auch in Sachsen und Thüringen sind die Gehälter
                  mit 43.700 Euro beziehungsweise 43.800 Euro vergleichsweise
                  niedrig. Im Westen verdient man im Saarland am wenigsten, hier
                  sind nur 44.400 Euro drin, also 4600 Euro weniger als im
                  Bundesdurchschnitt.
                </p>
                <p>
                  Die Deutschlandkarte von Gehalt.de sieht ähnlich aus wie die
                  von Kununu. Das höchste Gehalt gibt es demnach in
                  Baden-Württemberg mit durchschnittlich 51.700 Euro brutto im
                  Jahr. Direkt danach folgt Hessen mit 51.400 Euro und Hamburg
                  mit 50.900 Euro. Schlusslicht bei Gehalt.de ist wie bei Kununu
                  Mecklenburg-Vorpommern: Hier erhält der Admin demnach nur
                  42.500 Euro brutto im Jahr.
                </p>
                </div>
                {/* Nerer Artikel */}
                <h2>Cell-Broadcast-Warnung auf dem Smartphone wiederfinden</h2>
                <div className="chapter">
                <p>
                  Bald ist es wieder so weit. Es gibt wieder SMS-CB am Warntag.
                  Wir zeigen verschiedene Wege, diese nochmal einzusehen.
                </p>
                </div>
                <div className="chapterVideo">
                {/* heise Video */}
                <div className="video-container">
                  <figure className="video video--fullwidth a-u-inline akwa-inline-video player">
                    <iframe
                      src="https://cfvod.kaltura.com/pd/p/2238431/sp/223843100/serveFlavor/entryId/1_12g2vdyu/ev/6/flavorId/1_1d5whu11/name/Cell_Broadcast.mp4"
                      frameBorder={0}
                      width="100%"
                      style={{ aspectRatio: "16 / 9" }}
                      allow="encrypted-media"
                    ></iframe>
                    <figcaption className="video_titel a-caption">
                      (Quelle: heise online)
                    </figcaption>
                  </figure>
                </div>
                </div>
                {/* Neuer Artikel */}
                <h2>Paradox Interactive stellt "Life by You" ein</h2>
                <div className="chapter">
                <p>
                  Der "Sims"-Konkurrent "Life by You" sollte gerade im Early
                  Access erscheinen – stattdessen stampft Publisher Paradox die
                  Entwicklung ein.
                </p>
                <p>
                  Der geplante "Sims"-Konkurrent "Life by You" wird nicht fertig
                  entwickelt. Das hat der schwedische Publisher Paradox
                  Interactive am Montagabend bekannt gegeben. Trotz mehrfacher
                  Verschiebungen habe die Entwicklung keine großen Fortschritte
                  gemacht, schreibt Paradox-Manager Mattias Lilja in einem
                  Foren-Eintrag.
                </p>
                <p>
                  Erst kürzlich hätte "Life by You" im Early Access erscheinen
                  und damit für die Öffentlichkeit spielbar werden sollen. Doch
                  den Release legte Paradox damals erneut nach hinten. Nun ist
                  klar: Der "Sims"-Konkurrent wird nie veröffentlicht. "Als wir
                  das Spiel aus einer breiteren Perspektive betrachteten, wurde
                  uns klar, dass der Weg bis zur Veröffentlichung viel zu lang
                  und ungewiss war", schreibt Lilja im Paradox-Forum.
                </p>
                <p>
                  "Das ist natürlich hart und enttäuschend für alle, die ihre
                  Zeit und ihren Enthusiasmus in dieses Projekt gesteckt haben,
                  vor allem, wenn unsere Entscheidung so spät kommt." Für die
                  Entwicklung von "Life by You" hatte Paradox mit Rod Humble
                  einen früheren Entwickler von "The Sims" geschnappt. Humble
                  war zudem als CEO von "Second Life"-Entwickler Linden Lab
                  tätig.
                </p>
                </div>
                <div className="chapterVideo">
                {/* Externes Video */}
                <figure className="video video--fullwidth a-u-inline">
                  <div className="video__yt-container">
                    <iframe
                      className="video__iframe"
                      frameBorder={0}
                      src="//www.youtube-nocookie.com/embed/U9c3WEYTJIU"
                      title="YouTube video player"
                      width="100%"
                      style={{ aspectRatio: "16 / 9" }}
                    />
                  </div>
                </figure>
                </div>
              </div>
            </article>
            {/* Artikel Ende, jetzt folgt Werbung etc. */}
            <article className="article-add">
              ...
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </article>
            <article className="article-add">
              ...
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </article>
          </main>
          <footer />
        </>
      </div>
    </div>
  );
};

export default App;