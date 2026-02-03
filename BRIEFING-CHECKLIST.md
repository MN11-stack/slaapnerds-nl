# Slaapnerds.nl - Landingpage Checkliste

## Projektübersicht

| Feld | Wert |
|------|------|
| **Domain** | www.slaapnerds.nl |
| **Zielgruppe** | Niederländische Kunden, Schwerpunkt Achterhoek (Winterswijk, Aalten, Groenlo, Doetinchem) |
| **Ansprache** | Du (je/jouw) |
| **Conversion-Ziel** | Afspraak boeken (Termin buchen) |
| **Hosting** | Vercel |
| **Wichtig** | Kein Webshop, keine Preise, keine Aktionen - EIN Ziel: Termin machen |

---

## Positionierung (Kernbotschaft)

> "Goed slapen koop je niet online.
> Dat ontdek je – met persoonlijk advies, net over de grens."

---

## Checkliste Seitenstruktur

### Phase 1: Grundstruktur erstellen

- [ ] **1.1** Projektordner & Dateien anlegen (HTML, CSS, Assets)
- [ ] **1.2** Design-System einrichten (Farben, Schriften gemäß Schlafnerds CI)
- [ ] **1.3** Responsive Grid-System (Mobile First)

### Phase 2: Sektionen erstellen

#### 2.1 Hero / Above-the-Fold
- [ ] H1: "Beter slapen begint niet online — maar met persoonlijk advies."
- [ ] Subline: "Bij Slaapnerds helpen gecertificeerde slaapadviseurs je..."
- [ ] Primärer CTA-Button: "Afspraak gratis boeken"
- [ ] Micro-copy: "Vrijblijvend · persoonlijk · 20 minuten rijden vanaf Winterswijk"
- [ ] Hero-Bild (echtes Beratungsfoto, kein Stock)

#### 2.2 Waarom niet online? (Warum nicht online?)
- [ ] Headline: "Waarom online matrassen zelden de juiste oplossing zijn"
- [ ] 3 Argumente:
  - Online koop je op specificaties – niet op gevoel
  - Je kunt niet vergelijken of proefliggen
  - Retourneren kost tijd en energie
- [ ] Übergangstext: "Goed slapen vraagt om ervaren, niet om gokken."

#### 2.3 Regionale Nähe (Achterhoek-Fokus)
- [ ] Headline: "Persoonlijk slaapadvies, vlakbij de Achterhoek"
- [ ] Text über Kunden aus Winterswijk, Aalten, Groenlo, Doetinchem
- [ ] Bulletpoints:
  - ±20 minuten rijden vanaf Winterswijk
  - Gratis levering ook in Nederland
  - Nederlands gesproken in de winkel

#### 2.4 Zo werkt het (So funktioniert's)
- [ ] Headline: "Zo verloopt jouw afspraak bij Slaapnerds"
- [ ] 4 Schritte visualisieren:
  1. Je boekt online een afspraak
  2. Persoonlijk advies & proefliggen in Bocholt
  3. Jij beslist in alle rust
  4. Levering & service bij jou thuis in NL

#### 2.5 Wat je krijgt (Was du bekommst)
- [ ] Liste mit Icons:
  - Gecertificeerde slaapadviseurs
  - Meerdere slaapoplossingen vergelijken
  - Advies afgestemd op jouw lichaam
  - Service voor én na aankoop

#### 2.6 Vertrouwen & zekerheid (Vertrauen)
- [ ] Google Reviews (Sterne-Bewertung)
- [ ] Testimonial: "Veel klanten uit de regio gingen je voor"
- [ ] Garantie & Nachsorge
- [ ] "Persoonlijk, transparant, geen verkooppraatjes"

#### 2.7 FAQ
- [ ] Accordion mit Fragen:
  - Is Bocholt ver rijden vanaf Winterswijk?
  - Spreken jullie Nederlands?
  - Wordt er ook in Nederland geleverd?
  - Is de afspraak echt vrijblijvend?
  - Waarom niet gewoon online kopen?

#### 2.8 Afspraak boeken (Final CTA)
- [ ] Headline: "Klaar om beter te slapen?"
- [ ] Button: "Afspraak gratis boeken"
- [ ] Link zu Calendly oder schlafnerds.de Buchungsseite

#### 2.9 Footer
- [ ] Adresse Bocholt
- [ ] Hinweis: "Slaapnerds is onderdeel van Schlafnerds (Duitsland)"
- [ ] Link zu schlafnerds.de
- [ ] Privacy / Impressum Links

### Phase 3: Design & UX

- [ ] **3.1** Mobile First Layout
- [ ] **3.2** Viel Whitespace, ruhiges Design
- [ ] **3.3** Farben:
  - CTA: `#31AFB4` (Türkis)
  - Akzente: `#AA407F` (Magenta)
- [ ] **3.4** Typografie:
  - Headlines: Newsreader
  - Body: Nunito (nicht Poppins - gemäß Schlafnerds CI)
- [ ] **3.5** Echte Bilder (Beratungsmomente, keine Stock-Fotos)

### Phase 4: Technische Umsetzung

- [ ] **4.1** CTA-Links → Deeplink zu schlafnerds.de/calendly
- [ ] **4.2** Optional: Embedded Buchungswidget
- [ ] **4.3** NL-Tracking separat messbar einrichten
- [ ] **4.4** SEO Meta-Tags (NL)
- [ ] **4.5** Open Graph Tags

### Phase 5: Deployment

- [ ] **5.1** GitHub Repository erstellen
- [ ] **5.2** Code pushen
- [ ] **5.3** Vercel mit GitHub verbinden
- [ ] **5.4** Custom Domain slaapnerds.nl einrichten
- [ ] **5.5** SSL/HTTPS aktivieren
- [ ] **5.6** DNS bei Checkdomain konfigurieren

### Phase 6: Testing & Launch

- [ ] **6.1** Mobile Test (verschiedene Geräte)
- [ ] **6.2** Desktop Test
- [ ] **6.3** Links testen (CTA, Footer)
- [ ] **6.4** Ladezeit prüfen
- [ ] **6.5** Go Live!

---

## Design-Vorgaben (aus Schlafnerds CI)

```css
:root {
    --color-primary: #31AFB4;    /* CTA Türkis */
    --color-secondary: #AA407F;  /* Akzent Magenta */
    --color-tagline: #474749;    /* Dunkelgrau */
    --color-text: #000000;       /* Schwarz */
    --color-white: #FFFFFF;
    --font-heading: 'Newsreader', Georgia, serif;
    --font-body: 'Nunito', Arial, sans-serif;
}
```

---

## Warum diese Seite konvertiert

1. **Klare Positionierung**: Persönliche Beratung vs. Online-Kauf
2. **Regionale Verankerung**: Achterhoek-Fokus normalisiert die Grenzüberschreitung
3. **Ein einziges Ziel**: Jede Sektion führt zum CTA
4. **Vertrauen aufbauen**: Reviews, Prozess-Transparenz, FAQ
5. **Mobile First**: Zielgruppe recherchiert oft mobil

---

## Nächster Schritt

Welche Phase sollen wir zuerst angehen?
