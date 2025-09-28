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
**Tesztelő:** Molnár András

| Teszt ID | Teszt leírás | Teszt lépés | Várt eredmény | Tényleges eredmény | Státusz |
|----------|--------------|-------------|---------------|--------------------|---------|
| T01 | Keresőmező megjelenése | Nézd meg a fejlécet | A keresőmező látható | A keresőmező látható volt | Sikeres |
| T02 | Egyszerű kulcsszó keresés | Írd be: „politika” | Csak politikai hírek jelennek meg | Nem csak a politikai hírek jelentek meg | Sikertelen |
| T03 | Kis- és nagybetűs keresés | Írd be: „Sport” és „sport” | Azonos találatok jelennek meg | Azonos találatok jelentek meg | Sikeres |
| T04 | Keresés üres mezővel | Nyomj Entert üres mezőnél | Minden hír jelenjen meg | Minden hír megjelent | Sikeres |
| T05 | Nem létező kulcsszó | Írd be: „xyz123” | „Nincs találat” üzenet jelenik meg | Megjelent a „Nincs megjeleníthető hír ebben a kategóriában.” üzenet | Sikeres |
| T06 | Keresés törlése | Írj be valamit, majd töröld | Az összes hír újra megjelenik | Az összes hír újra megjelent | Sikeres |
| T07 | Keresés és lapozás | Keresés után lapozz a 2. oldalra | A találatok lapozhatóak | A találatok lapozhatóak voltak | Sikeres |
| T08 | Keresés és kategória kombinálása | Írd be: „drónok”, majd kattints a „Sport” kategóriára | Csak a sport kategórián belüli találatok maradnak | Csak sport kategórián belüli találatok maradtak | Sikeres |
| T09 | Keresőmező fókusz | Kattints a keresőmezőbe | A kurzor villog, írható | A kurzor villogott és lehetett írni | Sikeres |
| T10 | Rövid keresőkifejezés | Írj be a keresőbe 3 betűt és nyomd meg a "Keresés" gombot | Figyelmeztető üzenet jelenik meg: „A kereséshez legalább 5 karaktert kell megadni!” | Figyelmeztető üzenet megjelenik | Sikeres |
| T11 | Keresés teljes kifejezésre | Írj be egy létező kifejezést (pl. „gazdaság”) és nyomj Entert | A találatok között megjelennek a keresett témájú cikkek | Találatok nem jelennek meg | Sikertelen |
| T12 | Keresés speciális karakterrel | Írd be: „e-sport” | A rendszer a „e-sport” híreket keresi | A rendszer a „e-sport” híreket mutatta | Sikeres |
| T13 | Keresés számokra | Írd be: „2024” | A 2024-es évszámot tartalmazó hírek megjelennek | Figyelmeztető üzenet jelenik meg: „A kereséshez legalább 5 karaktert kell megadni!” | Sikertelen |
| T14 | Keresés hosszú szöveggel | Illessz be egy hosszabb mondatot | A releváns találatok jelennek meg | A releváns találatok megjelentek | Sikeres |
| T15 | Keresés Enter helyett gombbal | Írd be: „magyar”, majd kattints a kereső ikonra | Lefut a keresés | Lefutott a keresés | Sikeres |
| T16 | Keresés után oldal újratöltése | Írd be: „világbajnokság”, majd frissítsd az oldalt | Az alap lista jelenjen meg | Az alap lista jelent meg | Sikeres |
| T17 | Keresés mobil nézetben | Kis képernyőméretben írd be: „sport” | A találatok mobil nézethez igazodnak | A találatok mobil nézetben jól látszottak | Sikeres |
| T18 | Keresés ékezetekkel | Írd be: „űrtávcső” és „urtavcso” | Azonos találatok jelennek meg | Nem azonos találatok jelentek meg | Sikertelen |
| T19 | Keresőmező ürítése gombbal | Írd be: „politika”, majd kattints az X gombra | A kereső kiürül, minden hír látszik | A kereső nem ürül ki | Sikertelen |
| T20 | Keresés után cikk megnyitása | Keresés után kattints egy cikkre | Megnyílik a cikk részletező oldal | Megnyílt a cikk részletező oldal | Sikeres |

**Teszt dátuma:** 2025.09.28.
**Tesztelő:** Név3