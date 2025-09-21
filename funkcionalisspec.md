# Funkcionális specifikáció – Egyszerű Hírportál

## 1. Jelenlegi helyzet leírása

A szervezet jelenleg nem rendelkezik saját online felülettel, amelyen híreket rendszerezve és áttekinthető formában közzétehetne.
A hírek belső dokumentumokban és különböző csatornákon tárolódnak, de ezek nem kereshetők, nem strukturáltak, és nem nyilvánosak.
Ez megnehezíti az információ gyors elérését a felhasználók számára.
Jelenleg nincs olyan felület, amely összegyűjti és egységesen mutatja be a híreket.
A felhasználók számára nem áll rendelkezésre egyszerű, áttekinthető hírportál, amely kizárólag a hírek megjelenítésére koncentrál.
A hírek hozzáférése rendszertelen, és nincs lehetőség gyors keresésre vagy kategória szerinti szűrésre.
A meglévő folyamat lassú, a hírek frissítése nem automatizált, és nem biztosított a korábbi cikkek nyilvántartása.

## 2. Vágyálomrendszer leírása

A cél egy egyszerű, webes hírportál létrehozása, amely:  

- lehetővé teszi a hírek közzétételét és rendszerezett megjelenítését,
- a főoldalon azonnal mutatja a legfrissebb híreket időrendben rövid kivonattal,
- biztosítja a hírek kategóriák szerinti szűrését,
- lehetővé teszi kulcsszavas keresést címben és szövegben,
- részletes nézetet biztosít a teljes cikk, a dátum és a kategória megjelenítésével.

A felület egyszerű, áttekinthető, és kizárólag az MVP funkciókat tartalmazza.
Az MVP nem tartalmaz regisztrációt, hozzászólásokat, felhasználói interakciókat vagy reklámokat.
A rendszer célja, hogy gyors és könnyen használható legyen, minden funkció közvetlenül a hírek olvasását szolgálja.

## 3. Jelenlegi üzleti folyamatok modellje

- Hírek előállítása megtörténik, de nincs egységes, digitális publikálási csatorna.
- A szervezet belsőleg rendelkezik a hírek tartalmával, de nem nyilvános.
- A hírek tárolása nem szabványos, így a hozzáférés nem átlátható.
- Az érdeklődők nem tudnak központi helyen, rendszerezett formában híreket olvasni.
- A hírek frissítése lassú, és nincs egységes nyilvántartás a korábbi cikkekről.
- A jelenlegi folyamat nem támogatja a gyors keresést, szűrést vagy a kategóriák szerinti navigációt.
- A felhasználók számára a hírek elérése bizonytalan és nem egységes felületen történik.

## 4. Igényelt üzleti folyamatok modellje

- Felhasználó megnyitja a főoldalt.
- A rendszer listázza a híreket időrendben rövid kivonattal.
- Felhasználó kiválaszthat kategóriát, a rendszer szűri a híreket az adott témára.
- Felhasználó kulcsszót ad meg a kereséshez, a rendszer visszaadja a releváns találatokat.
- Felhasználó rákattint a címre, részletes nézet betöltődik.
- Részletes nézet tartalmazza a teljes szöveget, dátumot és kategóriát.
- Ha sok hír van, a rendszer lapozást biztosít, hogy a felhasználó oldalanként böngészhessen.
- Hibakezelés: „Nincs találat” üzenet a keresésnél, 404 hiba nem elérhető cikk esetén.
- A működés egyszerű és áttekinthető, a felhasználó könnyen eligazodik az oldalon.
- A rendszer biztosítja, hogy az alapvető funkciók gyorsan elérhetők legyenek, és minden hír azonnal betölthető legyen.

## 5. Követelménylista

### Funkcionális követelmények
- Legfrissebb hírek listázása főoldalon.
- Kategóriák szerinti szűrés.
- Kulcsszavas keresés címben és szövegben.
- Részletes cikkmegtekintés.
- Lapozás nagy elemszám esetén.
- Hibakezelés: „Nincs találat” és 404 hiba.

### Nem funkcionális követelmények
- Egyszerű, letisztult felület.
- Gyors válaszidő az alapvető műveleteknél.
- Stabil és folyamatos működés.
- Alapvető adatbiztonsági előírások betartása.
- Kódolási szabványok és alapvető webes kompatibilitás betartása.

## 6. Használati esetek (Use-case)

### Use-case 1: Hírek listázása főoldalon
- **Szereplő:** Felhasználó
- **Előfeltétel:** Felhasználó megnyitotta a főoldalt
- **Lépések:**
  1. A rendszer betölti az utolsó 10 hírt.
  2. Megjelenik cím, rövid kivonat és dátum.
- **Utófeltétel:** Felhasználó látja a hírek listáját.

### Use-case 2: Hír részletes megtekintése
- **Szereplő:** Felhasználó
- **Előfeltétel:** Hírek listája megjelenik
- **Lépések:**
  1. Felhasználó rákattint a cikk címére.
  2. Részletes nézet betöltődik: teljes szöveg, dátum, kategória.
- **Utófeltétel:** Felhasználó elolvashatja a cikket.

### Use-case 3: Keresés kulcsszó alapján
- **Szereplő:** Felhasználó
- **Előfeltétel:** Felhasználó a főoldalon van
- **Lépések:**
  1. Felhasználó beír egy kulcsszót a keresőmezőbe.
  2. A rendszer visszaadja a releváns találatokat.
- **Utófeltétel:** Felhasználó megkapja a keresett híreket, vagy „Nincs találat” üzenetet.

## 7. Képernyőtervek (leírás szöveges formában)

- **Főoldal:** Hírek listája időrendben, rövid kivonattal, kategória szűrő oldalsávban.
- **Részletes cikk:** Cím, teljes szöveg, dátum, kategória. Vissza gomb a főoldalra.
- **Keresőmező:** A főoldalon található, azonnali találatok megjelenítése lista formában.
- **Lapozás:** Oldalsáv vagy az oldal alján navigáció a következő/előző oldalakhoz.

## 8. Forgatókönyvek



## 9. Funkció – követelmény megfeleltetés

