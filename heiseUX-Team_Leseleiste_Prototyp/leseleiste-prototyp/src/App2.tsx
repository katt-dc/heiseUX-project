import React from "react";
import ProgressBar from "./ProgressBar";
import Bookmarks from "./Bookmarks";
import "./App.css";
import "./styles.css";
import "./bookmarks.css";
import heiseLogo from "../img/Heise_Online_Logo_2024.png"
import admingehalt from "../img/2024_AdminGehalt.png"

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <div className="header-content">
          <div className="logo">
            <img
              src={heiseLogo}
              alt=""
              style={{ width: "200px" }}
            />
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
                {/* https://www.heise.de/hintergrund/Gehaelter-2024-Das-verdienen-Admins-in-Deutschland-9720222.html?seite=all */}
                <h1>Gehälter 2024: Das verdienen Admins in Deutschland</h1>
                <div className="chapter">
                  <p>
                    Firmen suchen händeringend nach IT-Admins. Sie sind der
                    Grundstein für eine gute technische Infrastruktur. Wir
                    zeigen, was Administratoren verdienen.
                  </p>

                  {/* Bild */}
                  <div className="chapterImage">
                    <img
                      src={admingehalt}
                      alt="Apple iPad Air 2024"
                    />
                  </div>
                  <p className="img-text">
                    (Bild: Gorodenkoff, IM Imagery, Dear Lady-Deer, artmakerbit
                    - Shutterstock)
                  </p>
                  <p className="author">Von Autor Name | Datum</p>
                  <p>
                    Ohne den IT-Administrator läuft in vielen Firmen nichts. Als
                    Verantwortlicher für die technische Infrastruktur kümmert
                    sich ein Admin darum, dass Computersysteme, Netzwerke und
                    Anwendungen reibungslos funktionieren. Weiterhin soll der
                    Admin Sicherheitsmaßnahmen implementieren und überwachen,
                    damit Hacker nicht einfach die Daten eines Unternehmens
                    abgreifen können.
                  </p>
                  <p>
                    Neben den technischen Fähigkeiten sind auch soziale gefragt:
                    auch in diesem Job menschelt es. Er muss etwa Kollegen bei
                    Problemen helfen, ihnen Security-Techniken beibringen oder
                    Daten in Reports für die Chef-Etage verständlich
                    aufbereiten.
                  </p>
                  <p>
                    Der Admin sorgt also dafür, dass der Laden läuft. Auch die
                    Nachfrage auf dem Job-Markt ist hoch. Im Unterschied zu
                    anderen IT-Berufen wie Security-Experte (Gehälter 2024) oder
                    Software-Entwickler erhält er aber kein besonders hohes
                    Jahresgehalt. In diesem Artikel zeigen wir, welche Aufgaben
                    ein Admin bewältigen muss, wie er aufsteigen kann und wie
                    die übliche Gehaltsspanne für IT-Administratoren in
                    Deutschland ausfällt.
                  </p>
                </div>
                <h2>Aufgaben</h2>
                <div className="chapter">
                  <p>
                    Als IT-Systemadministrator trägt man die Verantwortung für
                    die Installation und Wartung von Systemen in einer
                    Organisation. Die genauen Aufgaben können je nach
                    Unternehmensgröße variieren. In größeren Unternehmen
                    tendiert ein Administrator dazu, sich zu spezialisieren und
                    spezifische Aufgaben zu übernehmen, während er in kleineren
                    Unternehmen für alle möglichen IT-Aufgaben zuständig sein
                    kann.
                  </p>
                  <p>
                    Zu den Hauptaufgaben eines Administrators zählt die Arbeit
                    mit Software und Hardware. Er sollte also in der Lage sein,
                    neueste Versionen von Programmen und Betriebssystemen zu
                    erfassen, Software zu installieren und einzurichten,
                    Netzwerkeinstellungen zu konfigurieren, Benutzerkonten
                    anzulegen und vieles mehr. Auch die Installation und
                    Einrichtung von Hardware kann zu den Aufgaben gehören, wie
                    das Einsetzen einer neuen SSD oder die Konfiguration eines
                    Druckers.
                  </p>
                  <p>
                    Außerdem umfasst die Tätigkeit eines IT-Administrators die
                    Wartung von Netzwerken und Servern, damit die
                    IT-Infrastruktur reibungslos funktioniert. Dafür muss er
                    etwa Dutzende Netzwerkserver und Clients aktualisieren oder
                    Hardware und Software regelmäßig prüfen und sicherzustellen,
                    dass sie auf dem neuesten Stand sind.
                  </p>
                  <p>
                    Ein Administrator ist auch für die Überwachung der Leistung
                    der betreuten Systeme verantwortlich, damit sie optimal
                    funktionieren. Dafür beobachtet und analysiert er die
                    Systeme konstant und hat etwa die CPU-Auslastung, den
                    Arbeitsspeicher, den Festplattenspeicher und den
                    Netzwerkverkehr eines Servers im Blick. Um Leistungsprobleme
                    zu diagnostizieren und zu beheben, könnte er regelmäßige
                    Reports erstellen und auswerten.
                  </p>
                </div>
                <h2>Sicherheit und Menschen</h2>
                <div className="chapter">
                  <p>
                    Ein Admin ist zudem oft für die Sicherheit der betreuten
                    IT-Systeme verantwortlich. Dazu gehört die Einrichtung von
                    Firewalls, die Verschlüsselung sensibler Daten und die
                    Implementierung von Sicherheitsmaßnahmen, etwa PIN-Eingaben
                    und Gesichtserkennung. Administratoren überwachen die
                    Systeme auf verdächtiges Verhalten, untersuchen mögliche
                    Angriffe, beheben Sicherheitslücken und stellen die Systeme
                    im Falle eines Angriffs wieder her.
                  </p>
                  <p>
                    Neben den technischen Aspekten hat ein IT-Administrator auch
                    mit Menschen zu tun. Er kann etwa Mitarbeiter unterrichten,
                    wie sie eine bestimmte Software verwenden oder bei der Suche
                    nach Fehlern helfen. Oftmals gehören auch Schulungen zur
                    IT-Sicherheit dazu, in denen er Kollegen darüber aufklärt,
                    wie sie Phishing-E-Mails erkennen können und welche
                    Webseiten vertrauenswürdig sind.
                  </p>
                </div>
                <h2>Job-Aussichten</h2>
                <div className="chapter">
                  <p>
                    Der Personaldienstleister Hays ermittelt die Anzahl der
                    Stellenanzeigen für bestimmte IT-Berufe und wertet sie aus.
                    Demnach haben Unternehmen im ersten Quartal 2024 mehr
                    IT-Stellengesuche ausgeschrieben als im Q4 2023. Ein
                    Gewinner ist tatsächlich der Admin mit einem Plus von 48
                    Prozentpunkten – neben etwa Datenbankentwicklern oder
                    IT-Supportern gehört er zu den Top-Fünf-IT-Berufen mit dem
                    höchsten Nachfrageanstieg.
                  </p>
                  <p>
                    Hays nutzt für seinen Fachkräfteindex die Stellenanzeigen im
                    ersten Quartal 2015 als Referenz. Aktuell gibt es für Admins
                    188 Prozent mehr Gesuche als zu diesem Referenzzeitpunkt –
                    das ist der höchste Wert, den Admins bisher erreicht haben.
                    Der aktuelle Anstieg ist den Daten zufolge nicht nur ein
                    Quartalseffekt: Verglichen mit dem ersten Quartal 2023
                    konnte der Admin um 32 Prozentpunkte zulegen.
                  </p>
                  <p>
                    Auch die Experten der Branchenseite Get in IT sehen für den
                    Administator-Beruf im Jahr 2024 gute Chancen auf dem
                    Arbeitsmarkt: In ihrer Analyse zählt das Berufsfeld der
                    Admins und IT-Anwendungsbetreuer zu den gefragtesten in
                    diesem Jahr. Neben etwa KI-Entwicklern, Software-Entwicklern
                    oder Security-Experten.
                  </p>
                  <p>
                    Der Admin ist also ein Dauerbrenner unter den IT-Berufen.
                    Aber: Es ist kein hipper Trendberuf. So listet etwa Duncan
                    Smorfitt vom Personaldienstleister Robert Half fünf gefragte
                    IT-Jobs für 2024 auf. Darunter sind etwa KI-Spezialisten,
                    Cloud-Praktiker oder Experten für Marketing-Automatisierung
                    – und nicht etwa der Brot-und-Butter-Admin. Dabei wird er
                    dringend gebraucht. Eine Studie des Digitalverbands Bitkom
                    zeigt, dass der Fachkräftemangel im IT-Bereich 2023 weiter
                    gestiegen ist. Demnach waren 149.000 IT-Jobs unbesetzt – ein
                    neuer Rekord. "Der Mangel an IT-Fachkräften wird sich durch
                    die demografische Entwicklung in den kommenden Jahren weiter
                    verschärfen. Politik und Unternehmen müssen schnell und
                    massiv gegensteuern", so Bitkom-Präsident Ralf Wintergerst.
                    Das mag zwar insgesamt schlecht für die deutsche Wirtschaft
                    sein, ein Admin hat in diesem Umfeld aber gute
                    Berufschancen.
                  </p>
                </div>
                <h2>Voraussetzungen und Aufstieg</h2>
                <div className="chapter">
                  <p>
                    Für eine Karriere als IT-Systemadministrator ist in der
                    Regel eine Ausbildung oder ein Studium mit Informatik-Bezug
                    nötig. Da bietet sich natürlich das klassische
                    Informatik-Studium an oder eine Ausbildung zum
                    Fachinformatiker für Systemintegration.
                  </p>
                  <p>
                    Auch Quereinsteiger können als Admin anfangen,
                    vorausgesetzt, sie weisen genug praktische Erfahrung nach –
                    einige Unternehmen werben in ihren Stellenanzeigen sogar
                    explizit um diese Gruppe. Egal, ob Quereinsteiger oder
                    ausgebildete Fachkraft: Generell sollte der Administrator
                    Kenntnisse über Clients und Server besitzen sowie Erfahrung
                    mit Datenbanken und Netzwerkarchitektur mitbringen, etwa für
                    die Einrichtung eines VPN. Da viele Aufgaben automatisiert
                    werden, sind auch Kenntnisse in Skriptsprachen wie PHP und
                    Python nützlich.
                  </p>
                  <p>
                    Für Quereinsteiger stehen Weiterbildungskurse zur Verfügung,
                    etwa von der Industrie- und Handelskammer. Hier werden
                    Grundlagen zu Servern, Netzwerkaufbau und Datenbanken
                    vermittelt. Spezielle Fähigkeiten und Kenntnisse lassen sich
                    zudem durch Zertifikate nachweisen.
                  </p>
                </div>
                <h2>Aufstieg</h2>
                <div className="chapter">
                  <p>
                    Durch Erfahrung und Fachwissen kann der Admin die
                    Karriereleiter erklimmen, etwa als Teamleiter für andere
                    Administratoren oder als IT-Manager, der die gesamte
                    IT-Abteilung leitet. Dieser Weg erfordert in der Regel viel
                    Erfahrung und bietet nur wenige Abkürzungen.
                  </p>
                  <p>
                    Alternativ kann sich der Admin auf einen bestimmten Bereich
                    spezialisieren, etwa als Cloud-Experte auftreten, sich auf
                    Datenbanken konzentrieren oder seine Kenntnisse in der
                    Netzinfrastruktur vertiefen. Gerade größere Unternehmen
                    suchen vermehrt nach Fachleuten in speziellen Bereichen
                    anstatt nach Generalisten.
                  </p>
                  <p>
                    Der Job des Administrators kann auch als Sprungbrett für
                    andere Berufe dienen. Ein Systemadministrator kann
                    beispielsweise in Richtung Projektmanagement gehen und die
                    Planung sowie Koordination von IT-Projekten übernehmen. Die
                    praktische Erfahrung als Administrator ermöglicht es,
                    Projekte realistisch einzuschätzen. Eine weitere Möglichkeit
                    wäre eine Tätigkeit als IT-Berater: Mit der gesammelten
                    Erfahrung berät der ehemalige Administrator Unternehmen und
                    zeigt auf, wie sie ihre IT-Systeme und -Prozesse verbessern
                    können.
                  </p>
                </div>
                <h2>
                  Bruttojahresgehälter im Durchschnitt und nach Berufserfahrung
                </h2>
                <div className="chapter">
                  <p>
                    Die Website Kununu ist bekannt dafür, dass Mitarbeiter ihren
                    Arbeitgeber bewerten können. Zudem sammelt die Seite
                    Gehaltsdaten für verschiedene Berufe – knapp 17.000
                    IT-Administratoren haben dort ihre Vergütung angegeben, es
                    gibt also eine sehr solide Datengrundlage. Laut Kununu
                    verdient ein Admin in Deutschland im Schnitt 49.000 Euro
                    brutto im Jahr. Kununu geht von einem IT-Systemadministrator
                    aus, umfasst damit aber auch den generellen Jobtitel
                    "IT-Administrator".
                  </p>
                  <p>
                    Ein solches Durchschnittsgehalt kann natürlich nicht alle
                    möglichen Jobsituationen abdecken, das zeigt die
                    weitreichende Gehaltsspanne. Das niedrigste Gehalt, das ein
                    Admin bei Kununu eingegeben hat, beträgt 35.200 Euro brutto
                    im Jahr, das höchste 73.700 Euro. Ein Großteil der Befragten
                    verdient zwischen 42.900 Euro und 50.600 Euro, nämlich 30
                    Prozent. Am oberen Ende dieser Spanne liegt auch das
                    Durchschnittsgehalt von 49.000 Euro. Knapp 28 Prozent der
                    Befragten erhalten zudem zwischen 35.200 und 42.900 Euro im
                    Jahr, weitere knapp 20 Prozent liegen zwischen 50.600 Euro
                    und 58.300 Euro.
                  </p>
                  <p>
                    Auch der Personaldienstleister Robert Half wertet
                    IT-Gehälter aus. In ihrem Gehaltsreport 2024 hat das
                    Unternehmen die Daten von 500 Personalverantwortlichen und
                    1000 Mitarbeitern analysiert – über verschiedene Branchen
                    hinweg. Der Report weist das Gehalt für zwei relevante
                    Berufe aus, den Systemadministrator und den
                    Netzwerkadministrator. Hier kommt der Systemadmin auf ein
                    Mediangehalt von 86.700 Euro brutto im Jahr. Der
                    Netzwerkadmin erhält ein Bruttojahresgehalt von 66.500 Euro
                    im Median.
                  </p>
                  <p>
                    Beide Werte sind deutlich höher als der Durchschnittswert,
                    den Kununu ermittelt hat. Beim Durchschnitt teilt man die
                    Summe aller Werte durch die Anzahl. Der Median hingegen ist
                    genau der Wert, der in der Mitte der Datenmenge liegt. So
                    lassen sich Ausreißer nach oben und nach unten aus den Daten
                    filtern. Die eine Hälfte der Admins verdient weniger als der
                    Medianwert, die andere mehr.
                  </p>
                </div>
                <h2>Gehalt.de und Stepstone</h2>
                <div className="chapter">
                  <p>
                    Auch die Portale Gehalt.de und Stepstone ziehen den Median
                    heran, um das Gehalt abzubilden. So weist Gehalt.de für den
                    IT-Administrator ein Bruttojahresgehalt von 49.400 Euro aus.
                    Die Hälfte der Befragten verdient dabei zwischen 43.600 Euro
                    und 56.000 Euro. Zusätzlich findet man bei Gehalt.de noch
                    das Bruttojahresgehalt für den System- und
                    Netzwerkadministrator: Mit 48.300 Euro fällt es ähnlich hoch
                    aus wie das des generellen IT-Admins. Laut Gehalt.de kann
                    allerdings der Datenbank-Administrator mehr Geld verlangen,
                    nämlich 61.100 Euro brutto im Jahr.
                  </p>
                  <p>
                    Stepstone macht allgemein etwas niedrigere Gehaltsangaben
                    als andere Portale. So kommt der IT-Administrator hier auf
                    ein Bruttojahresgehalt von 44.700 Euro. Der
                    IT-Systemadministrator verdient etwas mehr, nämlich 45.200
                    Euro.
                  </p>
                </div>
                <div className="chapterImage">
                  {/* Interaktive Grafik */}
                  <iframe
                    aria-label="Tabelle"
                    data-external="1"
                    height="436"
                    id="datawrapper-chart-uN5S8"
                    src="https://datawrapper.dwcdn.net/uN5S8/1/"
                    style={{
                      width: 610,
                      minWidth: "100% !important",
                      border: "none",
                    }}
                    title="Bruttojahresgehalt nach Jobtitel und Quelle"
                  ></iframe>
                </div>
                <div className="chapter">
                  <p>
                    Alle Gehaltsangaben direkt miteinander zu vergleichen ist
                    schwierig, schließlich kommt jeder Dienst anders zu seinen
                    Zahlen. Trotzdem lässt sich ein Trend erkennen. Bei Kununu
                    und Gehalt.de pendelt sich der Admin mit einem Jahresgehalt
                    zwischen 49.000 und 50.000 Euro ein. Stepstone liegt leicht
                    niedriger, dort verdient man um die 45.000 Euro in dem
                    Beruf. Deutlich nach oben reißen die Gehaltsangaben von
                    Robert Half aus: Mit 66.000 Euro bis 87.000 Euro ist das
                    Gehalt für Admins sehr viel höher als bei de anderen drei
                    Diensten.
                  </p>
                </div>
                <h2>Berufserfahrung</h2>

                <iframe
                  aria-label="Interactive line chart"
                  data-external="1"
                  height="387"
                  id="datawrapper-chart-Xe6Ru"
                  src="https://datawrapper.dwcdn.net/Xe6Ru/1/"
                  style={{
                    width: 610,
                    minWidth: "100% !important",
                    border: "none",
                  }}
                  title="Bruttojahresgehalt nach Erfahrung"
                ></iframe>
                <div className="chapter">
                  <p>
                    Mit den Jahren gibts für Admins mehr Geld. Das
                    Einstiegsgehalt für Berufsanfänger mit weniger als drei
                    Jahren Erfahrung liegt im Schnitt bei 40.600 Euro brutto im
                    Jahr. Anschließend steigt es recht kontinuierlich an: Mit
                    drei bis sechs Jahren Erfahrung verdient man im Schnitt
                    46.100 Euro, mit sechs bis zehn Jahren sind es 51.000 Euro.
                    Wer länger als zehn Jahre als Admin arbeitet, kann ein
                    durchschnittliches Bruttojahresgehalt von 57.100 Euro
                    erwarten.
                  </p>
                </div>
                <h2>Gehälter nach Führungsrolle und Geschlecht</h2>
                <div className="chapter">
                  <p>
                    Wer Verantwortung übernimmt und als Admin eine Führungsrolle
                    antritt, der kann im Schnitt mehr Geld erwarten als seine
                    Kollegen ohne Personalverantwortung. Allerdings sind je nach
                    Erfahrung nur um die 2000 Euro bis 3000 Euro mehr pro Jahr
                    drin.
                  </p>
                </div>
                <iframe
                  aria-label="Interactive line chart"
                  data-external="1"
                  height="387"
                  id="datawrapper-chart-lUjeM"
                  src="https://datawrapper.dwcdn.net/lUjeM/1/"
                  style={{
                    width: 610,
                    minWidth: "100% !important",
                    border: "none",
                  }}
                  title="Durchschnittsgehälter für Führungskräfte nach Erfahrung"
                ></iframe>
                <div className="chapter">
                  <p>
                    Frischgebackene Führungskräfte, die weniger als drei Jahre
                    Erfahrung im Job haben, verdienen laut Kununu ein
                    Bruttojahresgehalt von 43.200 Euro. Das sind 2600 Euro mehr
                    als ein Admin ohne Personalverantwortung pro Jahr erhält.
                    Mit der Zeit verändern sich diese Abstände kaum. Bei mehr
                    als zehn Jahren Erfahrung verdient eine Führungskraft 59.300
                    Euro brutto im Schnitt. Ein Admin ohne diese Verantwortung
                    erhält bei gleicher Erfahrung 57.100 Euro, also 2200 Euro
                    weniger. Da werden es sich viele Admins vermutlich zweimal
                    überlegen, ob sie sich den Führungsstress für diesen
                    Zuschlag antun möchten.
                  </p>
                </div>
                <h2>Geschlechterverteilung</h2>
                <div className="chapter">
                  <p>
                    Wer auf einen Admin trifft, der begegnet in der Regel einem
                    Mann: Laut Kununu sind 95 Prozent der befragten Admins
                    männlich – der Frauenanteil beträgt also nur fünf Prozent.
                    In Führungsposition wird es nicht besser, aber auch nicht
                    schlechter. Hier sind ebenfalls zu 95 Prozent Männer
                    vertreten.
                  </p>
                  <p>
                    Die wenigen Frauen, die dabei sind, verdienen im Schnitt
                    weniger als ihre männlichen Kollegen: Ein weiblicher Admin
                    erhält im Schnitt 46.700 Euro brutto, ein männlicher 49.400
                    Euro für die Vollzeit-Arbeit. Beim Einstiegsgehalt beträgt
                    dieser Unterschied noch 200 Euro, mit mehr als zehn Jahren
                    Berufserfahrung beträgt der Gehaltsunterschied dann 2.400
                    Euro – Frauen verdienen mit dieser Erfahrung im Schnitt
                    55.100 Euro im Jahr und Männer 57.500 Euro.
                  </p>
                </div>
                <h2>Gehälter nach Firmengröße, Standort und Branche</h2>
                <iframe
                  aria-label="Tabelle"
                  data-external="1"
                  height="267"
                  id="datawrapper-chart-8o8lZ"
                  src="https://datawrapper.dwcdn.net/8o8lZ/1/"
                  style={{
                    width: 610,
                    minWidth: "100% !important",
                    border: "none",
                  }}
                  title="Durchschnittliches Bruttojahresgehalt nach Firmengröße"
                ></iframe>
                <div className="chapter">
                  <p>
                    Gehalt.de hat die Daten für Admins nach Unternehmensgröße
                    analysiert. So steigt die Vergütung mit der Mitarbeiterzahl
                    kontinuierlich an. In kleinen Unternehmen mit weniger als
                    100 Mitarbeitern erhält ein Admin demnach 44.300 Euro brutto
                    im Schnitt. Dagegen ist in großen Konzernen, die mehr als
                    20.000 Mitarbeiter vorweisen können, ein durchschnittliches
                    Bruttojahresgehalt von 60.100 Euro drin.
                  </p>
                </div>
                <h2>Durchschnittsgehälter nach Bundesland</h2>
                <iframe
                  aria-label="Karte"
                  data-external="1"
                  height="759"
                  id="datawrapper-chart-H7Uub"
                  src="https://datawrapper.dwcdn.net/H7Uub/1/"
                  style={{
                    width: 610,
                    minWidth: "100% !important",
                    border: "none",
                  }}
                  title="Durchschnittsgehälter nach Bundesland"
                ></iframe>

                <div className="chapter">
                  <p>
                    Kununu hat die Gehälter auch nach Bundesland
                    aufgeschlüsselt. Mit einem durchschnittlichen
                    Bruttojahresgehalt von 51.500 Euro führt Hessen die Liste an
                    und bietet Administratoren das höchste Gehalt. Dies liegt
                    deutlich über dem deutschen Durchschnittsgehalt von 49.000
                    Euro für einen Admin. Es folgen Hamburg und
                    Baden-Württemberg, wo Administratoren im Schnitt rund 51.400
                    Euro verdienen – auch das liegt über dem Durchschnitt. Dazu
                    verdienen nur noch die Bayern überdurchschnittlich – Admins
                    in den restlichen Bundesländern verdienen also tendenziell
                    weniger.
                  </p>
                  <p>
                    Am anderen Ende des Spektrums liegt Mecklenburg-Vorpommern,
                    wo das durchschnittliche Bruttojahresgehalt für
                    Administratoren bei 41.900 Euro liegt – 7100 Euro unter dem
                    deutschen Durchschnitt. Auch in Sachsen und Thüringen sind
                    die Gehälter mit 43.700 Euro beziehungsweise 43.800 Euro
                    vergleichsweise niedrig. Im Westen verdient man im Saarland
                    am wenigsten, hier sind nur 44.400 Euro drin, also 4600 Euro
                    weniger als im Bundesdurchschnitt.
                  </p>
                  <p>
                    Die Deutschlandkarte von Gehalt.de sieht ähnlich aus wie die
                    von Kununu. Das höchste Gehalt gibt es demnach in
                    Baden-Württemberg mit durchschnittlich 51.700 Euro brutto im
                    Jahr. Direkt danach folgt Hessen mit 51.400 Euro und Hamburg
                    mit 50.900 Euro. Schlusslicht bei Gehalt.de ist wie bei
                    Kununu Mecklenburg-Vorpommern: Hier erhält der Admin demnach
                    nur 42.500 Euro brutto im Jahr.
                  </p>
                </div>
                <h2>Branche</h2>
                <div className="chapter">
                  <p>
                    Je nach Branche lässt sich als Admin unterschiedlich viel
                    Geld verdienen, allerdings ist die Spanne nicht sehr groß.
                  </p>
                  <p>
                    Die Top-Branche ist Kununu zufolge die öffentliche
                    Verwaltung mit einem Durchschnittsgehalt von 52.100 Euro
                    brutto im Jahr. Das sind 3100 Euro mehr, als man im Schnitt
                    über alle Branchen hinweg verdient. Überdurchschnittlich
                    bekommt der Admin zudem in der Industrie,
                    unterdurchschnittlich in der IT-Branche und im Handel. Hier
                    sind jeweils 47.000 Euro brutto pro Jahr drin. Das sind 2000
                    Euro weniger als im Branchenschnitt.
                  </p>
                </div>
                <iframe
                  aria-label="Balken"
                  data-external="1"
                  height="287"
                  id="datawrapper-chart-oa27f"
                  src="https://datawrapper.dwcdn.net/oa27f/1/"
                  style={{
                    width: 610,
                    minWidth: "100% !important",
                    border: "none",
                  }}
                  title="Durchschnittliches Bruttojahresgehalt nach Branche"
                ></iframe>
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
