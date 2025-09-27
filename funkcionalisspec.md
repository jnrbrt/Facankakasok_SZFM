# Funkcionális specifikáció – Egyszerű Hírportál

## 1. Jelenlegi helyzet leírása

A szervezet jelenleg nem rendelkezik olyan **online hírportállal**, amely egységes és rendszerezett formában tenné közzé a híreket.  
A hírek előállítása megtörténik, de az információk különféle csatornákon és dokumentumokban szétszórva jelennek meg.  

### Problémák a jelenlegi helyzetben
- **Nincs központi rendszer:** A hírek nem érhetők el egy helyen, így a felhasználók több forrást kénytelenek átnézni.  
- **Kereshetőség hiánya:** A tartalmakban való keresés nem lehetséges.  
- **Strukturálatlanság:** A hírek nincsenek kategóriák szerint rendezve.  
- **Nyilvános elérés hiánya:** Az érdeklődők külső platformról nem tudják követni a híreket.  
- **Frissítési nehézségek:** A hírek aktualizálása és archiválása manuális, lassú és nehezen nyomon követhető.  

A helyzet egyaránt problémát jelent a szervezet belső kommunikációja és a külső felhasználók tájékoztatása szempontjából.

---

## 2. Vágyálomrendszer leírása

A cél egy **egyszerű, webalapú hírportál** létrehozása, amely kizárólag a hírek rendszerezett megjelenítésére koncentrál.  

### Alapvető funkciók
- **Főoldali hírek:** A legfrissebb hírek listázása időrendben, rövid kivonattal.  
- **Kategorizálás:** Hírek szűrése témák szerint (pl. sport, politika, technológia).  
- **Keresés:** Kulcsszavas keresés a hírek címében és teljes szövegében.  
- **Részletes megtekintés:** A teljes cikk, dátum és kategória elérése egy kattintással.  
- **Lapozás:** Nagy elemszám esetén oldalankénti böngészés.  

### Tervezési irányelvek
- **Letisztult, egyszerű kezelhetőség:** Felhasználóbarát, minimalista felület.  
- **MVP szemlélet:** Csak a legfontosabb funkciókat tartalmazza; nincs regisztráció, kommentelés vagy reklám.  
- **Gyors működés:** A hírek megjelenítése és keresése rövid válaszidővel történjen.  

A vágyálomrendszer alapot biztosít a jövőbeli fejlesztésekhez (pl. felhasználói fiókok, személyre szabott hírfolyam), de első körben az **egyszerű, átlátható hírmegjelenítés** a cél.

---

## 3. Jelenlegi üzleti folyamatok modellje

A hírek előállítása folyamatosan történik, de:  

- nincs egységes publikálási csatorna,  
- a hírek nyilvánosan nem érhetők el,  
- a tárolás rendszertelen és nem szabványos,  
- az érdeklődők nem tudják egy központi helyen követni az eseményeket,  
- a keresés és szűrés teljesen hiányzik,  
- a frissítések manuálisan, lassan zajlanak.  

Ez az állapot nem támogatja sem a belső munkafolyamatokat, sem a felhasználók tájékoztatását.

---

## 4. Igényelt üzleti folyamatok modellje

A tervezett rendszer az alábbi folyamatokat biztosítja:

1. **Hírek böngészése főoldalon:**  
   - Felhasználó megnyitja a főoldalt.  
   - A rendszer automatikusan időrendi sorrendben jeleníti meg a híreket.  

2. **Kategóriák szerinti szűrés:**  
   - Felhasználó választ egy kategóriát.  
   - Csak az adott témához tartozó hírek jelennek meg.  

3. **Kulcsszavas keresés:**  
   - Felhasználó beír egy keresőkifejezést.  
   - A rendszer a releváns híreket listázza.  

4. **Részletes megtekintés:**  
   - Felhasználó egy hír címére kattint.  
   - A részletes nézetben teljes szöveg, dátum és kategória látható.  

5. **Lapozás és hibakezelés:**  
   - Nagy elemszám esetén a hírek több oldalra bontva jelennek meg.  
   - „Nincs találat” üzenet, ha nincs eredmény.  
   - 404 hiba, ha egy cikk nem elérhető.  

---

## 5. Követelménylista

### Funkcionális követelmények
- Hírek listázása főoldalon időrendi sorrendben.  
- Kategóriák szerinti szűrés.  
- Kulcsszavas keresés (cím + szöveg).  
- Részletes cikknézet dátummal és kategóriával.  
- Lapozás több hír esetén.  
- Hibakezelés: „Nincs találat”, 404-es oldal.  

### Nem funkcionális követelmények
- **Egyszerűség:** minimalista és felhasználóbarát felület.  
- **Teljesítmény:** gyors betöltés és keresés.  
- **Megbízhatóság:** folyamatos és stabil működés.  
- **Biztonság:** alapvető webes biztonsági szabályok betartása.  
- **Kompatibilitás:** működés minden modern böngészőben és eszközön.  
- **Karbantarthatóság:** jól strukturált, dokumentált kód.  

---

## 6. Használati esetek (Use-case)

### Use-case 1: Hírek listázása főoldalon
- **Szereplő:** Felhasználó  
- **Előfeltétel:** Felhasználó megnyitotta a főoldalt  
- **Lépések:**  
  1. A rendszer betölti a legutóbbi híreket (pl. 10 darab).  
  2. Megjelenik a cím, rövid kivonat és dátum.  
- **Utófeltétel:** Felhasználó áttekinti a híreket.  

### Use-case 2: Hír részletes megtekintése
- **Szereplő:** Felhasználó  
- **Előfeltétel:** Hírek listája megjelent  
- **Lépések:**  
  1. Felhasználó rákattint a cikk címére.  
  2. Megjelenik a részletes nézet teljes szöveggel, dátummal, kategóriával.  
- **Utófeltétel:** Felhasználó elolvassa a teljes cikket.  

### Use-case 3: Keresés kulcsszó alapján
- **Szereplő:** Felhasználó  
- **Előfeltétel:** Főoldal megnyitva  
- **Lépések:**  
  1. Felhasználó beír egy kulcsszót a keresőmezőbe.  
  2. Rendszer megjeleníti a releváns találatokat.  
- **Utófeltétel:** Felhasználó megkapja a keresett információt, vagy „Nincs találat” üzenetet.  

---

## 7. Képernyőtervek (leírás szöveges formában)

- **Főoldal:**  
  Időrendi hírek listája rövid kivonattal. Oldalsávban kategória szűrő. Fejlécben keresőmező.  

- **Részletes cikk nézet:**  
  Cikk címe, teljes szövege, dátuma, kategóriája. Vissza gomb a főoldalra.  

- **Keresés eredménye:**  
  A találatok listája cím + kivonat formában, azonos elrendezésben, mint a főoldalon.  

- **Lapozás:**  
  Az oldal alján navigáció a következő/előző oldalakhoz.  

---

## 8. Forgatókönyvek

1. **Egyszerű böngészés:**  
   Felhasználó megnyitja a főoldalt → hírek listája megjelenik → kiválaszt egy hírt → részletes nézet betöltődik → visszalép a főoldalra.  

2. **Keresés folyamata:**  
   Felhasználó beír egy kulcsszót → találatok megjelennek → felhasználó kiválaszt egy cikket → részletes nézet betöltődik.  

3. **Kategóriák szerinti böngészés:**  
   Felhasználó választ egy kategóriát → csak releváns hírek jelennek meg → lapozás szükség esetén.  

4. **Hibakezelés:**  
   Felhasználó keresést indít, de nincs eredmény → „Nincs találat” üzenet jelenik meg.  
   Felhasználó elér egy törölt hírt → rendszer 404-es oldalt ad vissza.  

---

## 9. Funkció – követelmény megfeleltetés

