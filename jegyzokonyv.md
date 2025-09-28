# Tesztjegyzőkönyv: Mini Híroldal

**Teszt dátuma:** 2025.09.27.
**Tesztelő:** Jánoskovics Norbert

| Teszt ID | Teszt leírás | Teszt lépés | Várt eredmény | Tényleges eredmény | Státusz |
|----------|--------------|-------------|---------------|--------------------|---------|
| T01 | Kategória lista megnyitása | Vidd az egeret a „☰ Kategóriák” menüre | A kategória lista lenyílik és látszanak a kategóriák | A kategória lista lenyílt és minden kategória látható | Sikeres |
| T02 | Tudomány kategória szűrése | Kattints a „Tudomány” kategóriára | Csak tudomány kategóriájú hírek jelennek meg | Csak a tudomány kategóriájú hírek jelentek meg | Sikeres |
| T03 | Tech kategória üres lista | Kattints a "Tech" kategóriára | „Nincs megjeleníthető hír…” szöveg jelenik meg | Megjelent az üzenet: „Nincs megjeleníthető hír ebben a kategóriában.” | Sikeres |
| T04 | Aktív kategória törlése | Kattints ismét a „Tudomány” kategóriára | Szűrő törlődik, minden hír újra megjelenik | Minden hír újra megjelent | Sikeres |
| T05 | Aktív kategória kiemelése | Kattints a „Sport” kategóriára | A Sport elem háttérszíne megváltozik | A Sport elem háttérszíne sötétebb lett | Sikeres |
| T06 | Kategóriák közötti váltás | Kattints a "Bulvár", majd a „Gazdaság” kategóriára | Először bulvár hírek, majd gazdasági hírek jelennek meg | Először bulvár hírek, majd gazdasági hírek jelentek meg | Sikeres |
| T07 | Hover esemény | Vidd az egeret a kategória lista fölé | A lista nyitva marad | A lista nyitva maradt | Sikeres |
| T08 | Görgetés a kategória listában | Görgesd végig a kategóriákat | A lista görgethető és minden elem elérhető | A lista görgethető volt és minden kategória látszott | Sikeres |
| T09 | Dark mode kategória lista színei | Kapcsold át a dark mode-ot és nyisd le a kategória listát | A kategória lista világos színekkel jelenik meg | A kategória lista sötét színekkel jelent meg | Sikeres |
| T10 | Főoldal teljes lista visszaállítása | Kattints kétszer ugyanarra a kategóriára | Az összes hír újra megjelenik | Az összes hír újra megjelent | Sikeres |
| T11 | Pagination frissül kategóriaváltás után | Kattints a „Sport” kategóriára | A lapozás újraszámolja az oldalszámokat | Az oldalszámok frissültek | Sikeres |
| T12 | Keresés és kategória együtt | Keresés után kattints egy kategóriára | Csak az adott kategóriában lévő találatok maradnak | Csak az adott kategóriában lévő találatok maradtak | Sikeres |
| T13 | Oldalszám reset kategóriaváltáskor | Lapozz a 2. oldalra, majd válts kategóriát | A lista az új kategória első oldaláról indul | Az új kategória 1. oldaláról indult | Sikeres |
| T14 | Kategória nevek helyessége | Ellenőrizd a listában szereplő kategóriákat | Tudomány, Politika, Gazdaság, Bulvár, Külföld, Sport, E-sport, Élet, Tech | Az összes kategória helyesen jelent meg | Sikeres |
| T15 | Oldal újratöltése kategória után | Válassz kategóriát, majd frissítsd az oldalt | Az alap lista (minden hír) jelenjen meg | Az alap lista jelent meg | Sikeres |
| T16 | Üres kategória elem kattintása | Kattints egy üres listapontra (ha lenne) | Nem történik semmi | Nem történt semmi | Sikeres |
| T17 | Mobil nézetben lista olvashatósága | Állítsd be kis kijelzőméretet és nyisd le a listát | A kategóriák olvashatóak és görgethetőek | A kategóriák olvashatóak és görgethetőek voltak | Sikeres |
| T18 | Egér elvitele a listáról | Mozgasd el az egeret a lista mellől | A lista automatikusan bezáródik | A lista bezáródott | Sikeres |
| T19 | Kategória menü és kereső együtt | Nyisd le a kategória listát, majd fókuszálj a keresőbe | A két funkció nem zavarja egymást | A kategória menü bezáródik amint elhagyja azt az egér | Sikertelen |
| T20 | Kategória választás után cikk linkek működnek | Kattints egy kategóriára, majd egy cikk címére | A cikk részletező oldal megnyílik | A cikk részletező oldal megnyílt | Sikeres |

**Teszt dátuma:** 2025.09.28.
**Tesztelő:** Név2


**Teszt dátuma:** 2025.09.28.
**Tesztelő:** Név3