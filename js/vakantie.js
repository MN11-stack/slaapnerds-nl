/* Bedrijfsvakantie zomer 2026 — hinweis-banner (Pattern 4.6).
 *
 * Injiziert sich selbst über dem Header, damit das Markup nicht in 16 Seiten
 * dupliziert liegt. Läuft der Zeitraum ab, passiert nichts mehr — danach kann
 * diese Datei samt der <script>-Zeile in den Seiten ersatzlos raus.
 *
 * Datumsprüfung bewusst client-seitig: die Site ist statisch, ein zur
 * Build-Zeit ausgewertetes Datum würde einfrieren.
 */
(function () {
    "use strict";

    var LAATSTE_DAG = "2026-08-15T23:59:59";
    var DISMISS_KEY = "vakantieBannerDismissed";
    var DETAIL_URL = "/service-en-advies#bedrijfsvakantie";

    if (new Date() > new Date(LAATSTE_DAG)) return;

    try {
        if (localStorage.getItem(DISMISS_KEY) === "1") return;
    } catch (e) {
        /* localStorage gesperrt (Private Mode) — Banner trotzdem zeigen. */
    }

    var banner = document.createElement("div");
    banner.className = "announcement";
    banner.innerHTML =
        '<div class="announcement-inner">' +
        "<p>Bedrijfsvakantie van 25 juli t/m 15 augustus — advies op geselecteerde dagen, alleen op afspraak. " +
        '<a href="' + DETAIL_URL + '">Afspraakdagen bekijken</a></p>' +
        '<button type="button" class="announcement-close" aria-label="Melding sluiten">' +
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">' +
        '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>' +
        "</button></div>";

    document.body.insertBefore(banner, document.body.firstChild);

    /* Höhe an Header und Body durchreichen — gemessen, nicht hart gesetzt,
       sonst bricht das Layout sobald der Text mobil zweizeilig umbricht. */
    function meten() {
        document.documentElement.style.setProperty(
            "--banner-h",
            banner.offsetHeight + "px"
        );
    }

    meten();
    window.addEventListener("resize", meten);

    banner.querySelector(".announcement-close").addEventListener("click", function () {
        banner.remove();
        document.documentElement.style.setProperty("--banner-h", "0px");
        window.removeEventListener("resize", meten);
        try {
            localStorage.setItem(DISMISS_KEY, "1");
        } catch (e) {
            /* nicht speicherbar — Banner kommt beim nächsten Laden wieder. */
        }
    });
})();
