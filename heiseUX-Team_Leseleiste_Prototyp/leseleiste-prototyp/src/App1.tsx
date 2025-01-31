import React from "react";
import ProgressBar from "./ProgressBar";
import Bookmarks from "./Bookmarks";
import "./App.css";
import "./styles.css";
import "./bookmarks.css";
import Lightbox from "./lightbox";
import heiseLogo from "../img/Heise_Online_Logo_2024.png";
import iPadBild from "../img/ipad-air-2024.jpg";
import iPadKeyboardBild from "../img/ipad_air_magic_keyboard_seite.jpg";
import iPadBenchmark from "../img/Benchmarks_ipad.jpg";
import iPadFrontcam from "../img/ipad_air_frontkamera.jpg";
import iPadDisplay from "../img/ipad_air_display.jpg";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <div className="header-content">
          <div className="logo">
            <img src={heiseLogo} alt="" style={{ width: "200px" }} />
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
                {/* https://www.heise.de/tests/Apple-iPad-Air-2024-mit-13-Display-im-Test-Das-bezahlbare-Pro-9725741.html?seite=all */}
                <h1>Apple iPad Air 2024 im Test: Das bezahlbare Pro</h1>
                <div className="chapter">
                  <p>
                    An Bord hat das neue iPad Air einige Features der teuren
                    Pro-Modelle. Wir klären, für wen angesichts der
                    Preisunterschiede ein Air das bessere Pro ist.
                  </p>

                  {/* Bild */}
                  <Lightbox image={{ url: iPadBild, caption: "" }} />

                  <p className="author">Von Autor Name | Datum</p>
                  <p>
                    Traditionell kombiniert Apple im iPad Air viele Komponenten
                    früherer iPad-Pro-Generationen zu einem attraktiven Mix aus
                    Leistungsfähigkeit und günstigerem Preis. So ist es auch bei
                    den neuen Modellen geschehen, die nun zum Beispiel den
                    M2-Prozessor des iPad Pro 2022 geerbt haben. Es gibt aber
                    auch einige Eigenschaften, die man beim Pro nicht findet,
                    etwa den Fingerabdrucksensor im Einschaltknopf und die
                    Farbauswahl mit Violett und Blau. Zum Test stand uns ein
                    iPad Air 13″ mit 1 TByte Speicher zur Verfügung.
                  </p>
                  <p>
                    Das letzte iPad Air aus dem März 2022 gab es nur in der
                    Displaygröße 10,9 Zoll sowie in den fünf Farben Space-Grau,
                    Polarstern, Blau, Violett und Pink. Letztere ist nun nicht
                    mehr erhältlich, dafür kam eine neue Displaygröße von 13
                    Zoll hinzu. Den Speicher des Basismodells hat Apple von 64
                    auf 128 GByte verdoppelt und bei allen Airs die Frontkamera
                    auf die längere Seite verlegt.
                  </p>
                </div>
                <h2>Mitteldünnes Gehäuse</h2>
                <div className="chapter">
                  <p>
                    Beim kleinen iPad Air blieben trotz der auf die längere
                    Seite gewanderten Kamera die Gehäusemaße gleich – auch die
                    Dicke von 6,1 mm. Genauso dünn ist das 13-Zoll-Gerät mit
                    seinen Dimensionen einer DIN-A4-Zeitschrift. Angesichts des
                    nur 5,1 Millimeter schlanken iPad Pro 13″ ist nun das Air
                    nicht mehr das luftigste iPad und straft seinen Namen
                    genaugenommen Lügen.
                  </p>
                  <p>
                    Das iPad Air besitzt ein kantiges Aluminiumgehäuse mit
                    abgerundeten Ecken. Das ebenfalls an den Ecken abgerundete
                    Display wird von einem schmalen schwarzen Rahmen eingefasst.
                    Hüllen und Tastaturen vom iPad Air 10,9 Zoll passen auch dem
                    mit 11 Zoll, das weiterhin 462 Gramm wiegt. Beim iPad Air
                    13-Zoll beträgt das Gewicht 618 Gramm, 36 mehr als beim
                    neuen iPad Pro 13″.
                  </p>
                  <p>
                    Der Sensor für Touch ID residiert in der Einschalttaste, die
                    sich im Querformat an der linken Seite oben befindet und für
                    den rechten Zeigefinger umständlich zu erreichen ist.
                    Rechtshänder können als Gegenmaßnahme einfach auch den
                    linken – oder am besten beide – Zeigefinger hinterlegen.
                  </p>
                </div>
                <h2>Tastatur und Hülle</h2>
                <div className="chapter">
                  <p>
                    Das vom iPad Pro 12,9″ bekannte Magic Keyboard für nun 399
                    Euro passt auch am iPad Air 13″. Es besteht aus Kunststoff
                    und besitzt ein kleines Trackpad. Es haftet magnetisch am
                    iPad Air und seine hintergrundbeleuchtete Tastatur wird von
                    diesem über den rückwärtigen Smart Connector gespeist,
                    sodass es keinen eignen Akku benötigt. In der Tastatur
                    befindet sich eine USB-C-Buchse, die Strom an das iPad
                    durchleiten kann, aber keine Daten überträgt. Das Magic
                    Keyboard für das iPad Air 11″ besitzt aufgrund der
                    geringeren Breite einige schmalere Tasten und kostet 349
                    Euro. Auf beiden Keyboards lässt sich dank
                    Scherenmechanismus recht gut tippen, allerdings nicht ganz
                    so komfortabel wie auf den Tastaturen von aktuellen MacBooks
                    und auf den neuen (und gleich teuren) Magic Keyboards für
                    die iPad Pros 2024. Es gibt auch keine Funktionstasten
                  </p>

                  <Lightbox
                    image={{
                      url: iPadKeyboardBild,
                      caption:
                        "Das Magic Keyboard für das iPad Air bietet eine USB-C-Buchse für die Strom-, aber nicht die Datenübertragung. (Bild: Apple)",
                    }}
                  />
                  <p className="img-text">
                    Das Magic Keyboard für das iPad Air bietet eine USB-C-Buchse
                    für die Strom-, aber nicht die Datenübertragung. <br />{" "}
                    (Bild: Apple)
                  </p>
                  <p>
                    Apple bietet außerdem für das iPad Air 2024 eine neue Hülle
                    an, die sich dank weiterer Magnete in mehr Positionen
                    auffalten lässt. Aufrecht stehen drei Winkel zur Verfügung,
                    halb liegend eine weitere. Klappt man den Deckel über dem
                    Display zu, sorgen Magnete für den Start des Ruhezustands.
                    Erhältlich ist das neue Smart Folio in den Farben
                    Hellviolett, Anthrazit, Salbei und Denim – einem hellen
                    Jeansblau. Für das 13-Zoll-Modell verlangt Apple 119 Euro,
                    für das mit 11 Zoll 89 Euro.
                  </p>
                </div>
                <h2>Benchmarks, Display und Frontkamera</h2>
                <h2>M2 statt M1 bringt leichte Zuwächse</h2>
                <div className="chapter">
                  <p>
                    Der im iPad Pro 2022 bewährte M2-Chip kommt nun im Air statt
                    des M1 zum Einsatz. Die Zahl der CPU-Cores ist im Vergleich
                    zum Vorgänger geblieben – es gibt vier Performance- und vier
                    stromsparende Effizienzkerne. Allerdings steigerte Apple die
                    Taktfrequenz von 2,4 auf 3,5 GHz und gibt an, dass sich die
                    Leistung gegenüber dem M1 um bis zu 15 Prozent gesteigert
                    hat. Das bestätigen unsere Benchmarks mit Geekbench im
                    Mittel: Bei Single-Core-Anwendungen lag der Zuwachs bei rund
                    9 Prozent, im Multi-Core-Benchmark dafür bei 20 Prozent.
                    Neben der schnelleren Taktung dürften hier auch
                    Verbesserungen der Architektur für den Zuwachs sorgen.
                  </p>
                  <p>
                    [Update:] Apple hat nachträglich die technischen Daten für
                    das iPad Air geändert. Die Zahl der Grafikkerne wurde
                    demnach nicht von 8 auf 10 erhöht, sondern auf 9. Hier nennt
                    Apple eine Leistungssteigerung von 25 Prozent. Mit dem
                    Compute-Test von Geekbench konnten wir ein um 37 Prozent
                    besseres Ergebnis erzielen. Auffällig war aber, dass die
                    Werte gegenüber dem iPad Pro 12,9" mit M2 in allen
                    Grafik-Benchmarks deutlich niedriger ausfielen, in 3DMark
                    Wildlife Extreme etwa über 20 Prozent. Gegenüber dem alten
                    Pro-iPad fallen aber auch die CPU-Werte etwas schlechter aus
                    (siehe Benchmarks).
                  </p>
                  <p>
                    Die Neural Engine enthält wie gehabt 16 Kerne, soll aber 40
                    Prozent schneller arbeiten. Alle Varianten bringen 8 GByte
                    Arbeitsspeicher mit. Die Speicherbandbreite hat sich von 68
                    auf 102 GBit/s verbessert. Bei den Benchmarks wurde das
                    Gehäuse etwas mehr als handwarm.
                  </p>
                </div>
                <div className="chapterImageImportant">
                  <Lightbox
                    image={{
                      url: iPadBenchmark,
                      caption: "",
                    }}
                  />
                </div>

                <div className="chapter"></div>
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
                    Das iPad Air 11″ besitzt mit 2360 × 1640 Pixeln genau so
                    viel wie der Vorgänger mit 10,9 Zoll. Auch die Pixeldichte
                    blieb mit 264 dpi gleich, ebenso wie die Gehäusemaße. Es
                    handelt sich bei der neuen Größenbezeichnung also um reines
                    Marketing.
                  </p>
                  <p>
                    Die Pixelzahl des iPad Air 13″ von 2732 × 2028 entspricht
                    genau der vom bisherigen iPad Pro 12,9″, also auch hier eine
                    Namensanpassung ohne Änderung dahinter. Das Display wird im
                    Unterschied zum älteren iPad Pro 12,9″ nicht von Mini-LED
                    hinterleuchtet. Nichtsdestotrotz sehen Fotos und Videos auf
                    dem IPS-Screen gut und farbkräftig aus, Texte knackig
                    scharf. Lediglich beim Scrollen verschwimmen Letztere ein
                    wenig bei "nur" 60 Hertz. Wer von einem iPad Pro kommt,
                    dürfte das als Rückschritt empfinden.
                  </p>
                </div>
                <h2>Seitliche Frontkamera</h2>
                <div className="chapter">
                  <p>
                    Bei der Rückkamera bleibt es bei einem Weitwinkelobjektiv
                    mit 12-Megapixel-Sensor. Sie kann 4K-Videos mit 60 fps
                    liefern, Porträts mit Tiefenunschärfe (Bokeh) noch immer
                    nicht und ihr steht auch kein Blitz oder LiDAR zur Seite.
                    Bei guten Lichtverhältnissen gelangen mit der Kamera scharfe
                    Bilder mit realistischen Farben, bei wenig Licht kam es zu
                    Farbrauschen und Unschärfe. In 4K-Videos traten frühzeitig
                    leichte Wackler und Belichtungsfehler bei schnellen Schwenks
                    auf. In dieser Disziplin sind alle iPhones der letzten Jahre
                    besser.
                  </p>
                  <Lightbox
                    image={{
                      url: iPadFrontcam,
                      caption:
                        "Beim iPad Air 2024 sitzt die Frontkamera nun auch im Rand der langen Display-Seite, was bei Videochats den natürlicheren Blickwinkel liefert.",
                    }}
                  />
                  <p className="img-text">
                    Beim iPad Air 2024 sitzt die Frontkamera nun auch im Rand
                    der langen Display-Seite, was bei Videochats den
                    natürlicheren Blickwinkel liefert.
                  </p>
                  <p>
                    Die Frontkamera nutzt ein Ultraweitwinkelobjektiv und sitzt
                    nun wie beim iPad 10 und beim neuen Pro im Rand der
                    Längsseite, was für Videokonferenzen den natürlicheren
                    Blickwinkel liefert. Die Frontkamera unterstützt weiterhin
                    den Folgemodus "Center Stage". Dabei erfasst das iPad das
                    Bild in ihrem Winkel von 122 Grad, zeigt aber nur den
                    Ausschnitt mit dem Sprecher. Bewegt sich dieser, verschiebt
                    die Software den Ausschnitt, ähnlich einem Schwenk. Durch
                    die Verwendung eines Teilbereichs reduziert sich die
                    Auflösung der Kamera, die Videos ansonsten in Full HD
                    (1080p) aufnehmen kann. Das Qualitätsniveau von Videochats
                    entspricht in etwa dem von Mac-Kameras. Die Aufnahmen sind
                    bei üblicher Beleuchtung bereits etwas verrauscht.
                  </p>
                </div>
                <h2>Schnittstellen, Mobilfunk und Pencil Pro</h2>
                <h2>USB-C, Bluetooth und WLAN</h2>
                <div className="chapter">
                  <p>
                    Das iPad Air besitzt zwei Mikrofone, nimmt aber kein Stereo
                    auf. Das zweite Mikrofon dient lediglich der
                    Geräuschunterdrückung. Außerdem sind Stereo-Lautsprecher
                    eingebaut, die trotz des dünnen Gehäuses einen guten und
                    räumlichen Klang abgaben.
                  </p>
                  <p>
                    An der USB-C-Buchse liegt lediglich USB 3.2 Gen 2 mit 10
                    GBit/s an und kein Thunderbolt. Anschließen kann man
                    USB-C-Geräte wie externe SSDs, Speicherkartenlesegeräte,
                    Hubs, Docks, Tastaturen, Mäuse, Mikrofone oder Webcams. Von
                    einer USB-C-SSD von LaCie konnten wir in der Dateien-App
                    Daten mit 473 MByte/s lesen und mit 662 MByte/s darauf
                    schreiben. Einen externen USB-C-Monitor unterstützt das Air
                    mit bis zu 6K bei 60 Hz.
                  </p>
                  <p>
                    Bluetooth-Zubehör lässt sich über den Standard 5.3 (statt
                    bisher 5.0) koppeln, das als stabiler und potentiell
                    schneller gilt. Neu ist WLAN 6E an Bord, das auch das noch
                    wenig frequentierte 6-GHz-Band abdeckt. Die maximale
                    Bruttorate erhöht sich aber auch im 5-GHz-Band dank 160 MHz
                    breiter Kanäle von 1200 auf 2400 MBit/s.
                  </p>
                  <p>
                    Im Test gegen eine FritzBox 6660 Cable konnten wir bei einem
                    Abstand von einem Meter beim Upload 1394 und in Spitzen bis
                    zu 1644 MBit/s netto messen. Diese Geschwindigkeit bleibt
                    aber angesichts konkurrierender WLANs in städtischer
                    Bebauung ein Wunschtraum.
                  </p>
                </div>
                <h2>Mobilfunk nicht mehr per SIM-Karte</h2>
                <div className="chapter">
                  <p>
                    Bei den Mobilfunk-Varianten ist zwar weiterhin ein 5G-Modem
                    an Bord, allerdings hat Apple den Steckplatz für die
                    klassische SIM-Karte eingespart und verbaut nur noch eine
                    elektronische SIM (eSIM) für den Datentransfer. Verschiedene
                    eSIM-Profile lassen sich im Wechsel nutzen, etwa auf Reisen
                    mit einem örtlichen Anbieter. Die meisten großen Provider
                    bieten zwar inzwischen eSIMs an, aber zum Beispiel nicht
                    alle Discounter. Der Wegfall des SIM-Slots dürfte besonders
                    sporadische Mobilfunkanwender ärgern, da sie eventuell zu
                    einem teureren Vertrag gedrängt werden oder im Ausland nicht
                    einfach eine örtliche SIM-Karte einsetzen können.
                  </p>
                </div>
                <h2>Pencil Pro mit Haptic Engine</h2>
                <div className="chapter">
                  <p>
                    Mit den iPads 2024 hat Apple auch einen neuen Stift
                    vorgestellt, den Pencil Pro. Er ist etwas leichter als der
                    Pencil 2 und haftet wie dieser magnetisch an der Längsseite
                    des Tablets, wo auch er induktiv geladen wird. Wegen der
                    Kamera an derselben Gehäuseseite musste Apple aber den Sitz
                    der Ladespulen etwas verlagern, wodurch die neuen iPads
                    nicht mehr mit den alten Stiften kompatibel sind. Umgekehrt
                    arbeitet der neue Stift nicht mit älteren iPads. Ausnahme
                    ist lediglich der günstigere Pencil USB-C. Der Pencil Pro
                    erkennt wie sein Vorgänger Druckstufen, Neigung und
                    doppeltes Antippen, womit man in unterstützten Apps eine
                    Funktion wechselt – zum Beispiel vom Stift auf den
                    Radiergummi.
                  </p>
                  <p>
                    Dank eines kleinen elektromagnetischen Aktors, den Apple
                    "Haptic Engine" nennt, bekommt man mit dem Pencil Pro nun
                    physisches Feedback, wenn man den Schaft doppelt antippt und
                    iPadOS eine Aktion ausführt. So erspürt man etwa
                    versehentliche Werkzeugwechsel. Dieses Klopfen löst auch die
                    neue Quetschgeste ("Squeeze") aus: Dazu drückt man den Stift
                    mit Zeigefinger und Daumen leicht zusammen, in kompatiblen
                    Apps wird eine kleine Werkzeugauswahl direkt an der
                    Stiftspitze eingeblendet. Somit lässt sich das Zeichengerät
                    schneller wechseln und die große Palette am unteren
                    Bildschirmrand kann entfallen. Die Empfindlichkeit der
                    Quetschgeste kann man in iPadOS einstellen, die Belegung
                    wiederum innerhalb einer App
                  </p>

                  <Lightbox
                    image={{
                      url: iPadBild,
                      caption:
                        "Der neue Pencil Pro haftet und lädt seitlich am iPad Air.",
                    }}
                  />
                  <p className="img-text">
                    Der neue Pencil Pro haftet und lädt seitlich am iPad Air.
                  </p>
                  <p>
                    Neu im Pencil Pro ist das integrierte Gyroskop, das
                    Drehungen des Stifts um die eigene Achse erkennt, was Apple
                    "Barrel Roll" nennt. Damit lässt sich zum Beispiel die
                    Spitze des Textmarkers oder eines Pinsels drehen und dadurch
                    die Strichbreite verändern. Das ist sehr praktisch für
                    Kreative und das Markieren von Textstellen.
                  </p>
                  <p>
                    Der Pencil Pro unterstützt erstmals Apples Wo-ist-Funktion.
                    Hat man den Stift verlegt, sieht man in der App "Wo ist?"
                    den letzten bekannten Standort. Der neue Pencil kann aber
                    weder einen Suchton abspielen noch erlaubt er eine präzise
                    Suche mit Richtungspfeilen, da er anders als AirTags keinen
                    Ultrabreitbandchip beherbergt. Neu auf dem iPad Air ist die
                    Funktion "Schwebender Stift" (Hover): Nähert sich die Spitze
                    dem Bildschirm, zeigt das Display in einigen Apps eine Art
                    Vorschau, wohin man trifft. Das gab es zuvor nur auf dem
                    iPad Pro. Der Pencil Pro kombiniert die Funktion mit einer
                    Art Schatten, der in den Apple-Apps unter dem Stift das
                    Display minmal abdunkelt.
                  </p>
                  <p></p>
                </div>
                <h2>Akkulaufzeiten und Fazit</h2>
                <div className="chapter">
                  <p>
                    Trotz des etwas dickeren Gehäuses bringt das iPad Air 13″
                    mit 36,59 Wattstunden eine etwas geringere Akkukapazität als
                    das iPad Pro 12,9″ (40,88 Wh) und das iPad Pro 13‟ (38,99
                    Wh) mit. Im Test mit einem auf 200 Candela/m2 gedimmten
                    Display übertraf das iPad Air 13″ die Laufzeiten des iPad
                    Air 5 10,9‟ aus dem Jahr 2022 deutlich: Beim Surfen hielt es
                    12,5 statt 10,2 Stunden durch, bei der Wiedergabe eines
                    Videos 11,0 statt 9,1 Stunden und beim Spielen eines
                    3D-Games 8,0 statt 7,2 Stunden. Unterm Strich dürfte man mit
                    einer Akkuladung gut einen ganzen Arbeitstag auskommen,
                    sofern man nur selten die volle Power und Helligkeit des
                    iPad ausreizt.
                  </p>

                  <Lightbox
                    image={{
                      url: iPadDisplay,
                      caption:
                        "Das 13-Zoll-Display des großen iPad Air bietet eine Menge mehr Arbeitsfläche.",
                    }}
                  />
                  <p className="img-text">
                    Das 13-Zoll-Display des großen iPad Air bietet eine Menge
                    mehr Arbeitsfläche.
                  </p>
                  <p>
                    Seit dieser Generation des iPad Air hat Apple das Netzteil
                    eingespart. Im Lieferumfang befindet sich nur noch ein
                    textilummanteltes USB-C-Kabel, das farblich zum Gehäuse
                    passt. An einem Apple-Netzteil mit 67 Watt erreichte ein
                    leergelaufenes iPad Air nach 30 Minuten einen Ladestand von
                    lediglich 29 Prozent, zum Volltanken waren knapp zwei
                    Stunden nötig.
                  </p>
                </div>
                <h2>Mehr Speicher</h2>
                <div className="chapter">
                  <p>
                    Bei einer Speichergröße von 256 GByte hat Apple sogar den
                    Preis für das kleine iPad Air von zuletzt 969 auf 829 Euro
                    gesenkt. Die Basisvariante kostet mit 699 Euro nun 70 Euro
                    weniger als Anfang 2024. Angesichts von der doppelten
                    Speichermenge (128 statt 64 GByte) ist das doppelt gut.
                    Mobilfunk kostet einen Aufpreis von 170 Euro. Für das
                    13-Zoll-Display zahlt man einen vertretbaren Zuschlag von
                    250 Euro.
                  </p>
                  <p>
                    Für unser Testgerät mit 1 TByte Speicher und Mobilfunk muss
                    man bereits 1749 Euro berappen. Damit ist es das teuerste
                    iPad Air aller bisherigen Zeiten. Hinzu kommen eventuell
                    noch ein Pencil Pro für 149 Euro oder das Magic Keyboard für
                    349 oder 399 Euro.
                  </p>
                </div>
                <h2>Fazit</h2>
                <div className="chapter">
                  <p>
                    Klar ist der M2 besser als der M1 und der neue Pencil Pro
                    macht das künstlerische Malen und Zeichnen noch ähnlicher
                    zum analogen Stift oder Pinsel. Aber deshalb sein iPad Air
                    der fünften Generation zu verkaufen und sich das neue mit 11
                    Zoll holen? Muss man wirklich nicht. Etwas anderes ist es,
                    wenn man mehr Fläche braucht. Da ist das neue 13-Zoll-Modell
                    eine echte Bereicherung, für die man früher stets zum noch
                    teureren iPad Pro greifen musste.
                  </p>
                  <p>
                    Das neue iPad Pro mit OLED-Bildschirm, 120 Hertz und 1600
                    Nits sowie dem noch schnelleren M4 würde man sicher nicht
                    von der Tischkante schubsen, doch für diese Eigenschaften
                    600 Euro mehr hinlegen, wollen sicher nur die Wenigsten. Wer
                    mit dem iPad sein Geld verdient, wird allerdings alle
                    Funktionen haben wollen und sich über ein entspiegeltes
                    Display freuen. Eine Alternative zum iPad Air 13" ist – mit
                    gleichem Prozessor, aber SIM-Slot, 120 Hz und Thunderbolt –
                    das iPad Pro 12,9‟ von 2022, das man noch im Handel ab 1300
                    Euro bekommt. Wer sein iPad nur zum Mailen oder Videos
                    gucken einsetzen will, dürfte wiederum auch mit einem
                    einfachen iPad (ohne Air und Pro) auskommen. Steht man vor
                    einer Neuanschaffung, bietet das iPad Air von Apples Tablets
                    dennoch das beste Preis-Leistungsverhältnis und sinnvolle
                    Kreativ-Features wie den neuen Pencil Pro.
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
                            Apple M1 / 8 ( 4 + 4) / 2,4 GHz (Neural Engine mit
                            16 Kernen)
                          </td>
                          <td style={{ textAlign: "left" }}>
                            Apple M2 / 8 (4+4) / 3,5 GHz (Neural Engine mit 16
                            Kernen)
                          </td>
                          <td style={{ textAlign: "left" }}>
                            Apple M2 (neuronale Engine mit 16 Kernen) / 8 (4+4)
                            / 3,5 GHz
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
                          <td style={{ textAlign: "left" }}>
                            Akku / Kapazität
                          </td>
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
                            769 / 969 € (64 GByte / mit 5G) und 969 / 1169 €
                            (256 GByte / mit 5G)
                          </td>
                          <td style={{ textAlign: "left" }}>
                            949 / 1119 € (128 GByte / mit 5G), 1079 / 1249 €
                            (256 GByte / mit 5G), 1329 / 1499 € (512 GByte / mit
                            5G), 1579 / 1749 € (1 TByte / mit 5G)
                          </td>
                          <td style={{ textAlign: "left" }}>
                            1449 / 1649 € (128 GByte / mit 5G), 1579 / 1779 €
                            (256 GByte / mit 5G), 1829 / 2029 € (512 GByte / mit
                            5G), 2329 / 2524 € (1 TByte / mit 5G), 2829 / 3024 €
                            (2 TByte / mit 5G)
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
              <a href="https://www.hs-hannover.de/impressum/" target="_blank">
                Impressum
              </a>
              <br />
              <a
                href="https://www.hs-hannover.de/ueber-uns/organisation/datenschutz"
                target="_blank"
              >
                Privacy / Datenschutz
              </a>
            </article>
          </main>
          <footer />
        </>
      </div>
    </div>
  );
};

export default App;
