# Követelményspecifikáció – Egyszerű Hírportál

## 1. Jelenlegi helyzet leírása

A szervezet jelenleg nem rendelkezik saját online felülettel, amelyen híreket tehetne közzé vagy rendszerezve elérhetővé tehetné.
A meglévő információk belső dokumentumokban, különböző csatornákon tárolódnak, de ezek nem kereshetők, nem strukturáltak, és nem nyilvánosan hozzáférhetők.
Ez megnehezíti a hírek gyors elérését a felhasználók számára.
Nincs olyan felület, amely összegyűjti és egységes formában mutatja be a híreket.
A hírekhez való hozzáférés rendszertelen, és nem biztosított a témák szerinti szűrés vagy kereshetőség.
A felhasználók számára nem áll rendelkezésre egyszerű, áttekinthető hírportál, amely kizárólag a hírek megjelenítésére koncentrál.

## 2. Vágyálomrendszer leírása

A tervezett rendszer egy egyszerű webes hírportál, amely lehetővé teszi a hírek közzétételét és rendszerezett megjelenítését.
A felhasználó a főoldalon azonnal látja a legfrissebb híreket, időrendben rendezve, rövid kivonattal együtt.
A hírek kategóriákhoz tartoznak, így a felhasználó szűrhet adott témákra, például sport, politika vagy technológia.
A kulcsszavas keresés lehetővé teszi, hogy a felhasználó gyorsan megtalálja a számára releváns híreket a címekben és a teljes szövegben.
Egy hír címére kattintva a felhasználó eléri a részletes nézetet, ahol megjelenik a teljes szöveg, a dátum és a kategória.
A rendszer egyszerű, letisztult felülettel rendelkezik, amely a navigációt és a tartalom gyors elérését támogatja.
Az MVP verzióban kizárólag a hírmegjelenítés és -böngészés funkciói szerepelnek, a regisztráció, hozzászólás vagy egyéb interakciók nem elérhetők.

## 3. Jelenlegi üzleti folyamatok modellje

- A hírek előállítása megtörténik, de jelenleg nincs egységes, digitális publikálási csatorna.
- A szervezet belsőleg rendelkezik a hírek tartalmával, de ezeket nem teszi nyilvánosan elérhetővé.
- A hírek tárolása nem szabványos, így a hozzáférés nem átlátható.
- Az érdeklődők nem tudnak központi helyen, rendszerezett formában híreket olvasni.
- A hírek frissítése lassú, és nincs egységes nyilvántartás a korábbi cikkekről.

## 4. Igényelt üzleti folyamatok modellje

- A felhasználó megnyitja az **Egyszerű Hírportál** főoldalát.
- A rendszer időrendi sorrendben listázza a híreket, rövid kivonattal.
- A felhasználó kiválaszthat kategóriát, és a rendszer csak az adott témakörhöz tartozó híreket mutatja.
- A felhasználó kulcsszó alapján keresést indíthat, amely csak releváns találatokat ad vissza.
- A felhasználó rákattint egy cikk címére, és megnyitja a részletes nézetet.
- A részletes nézetben a teljes szöveg, dátum és kategória látható.
- Ha sok hír van, a rendszer lapozási lehetőséget biztosít, hogy a felhasználó oldalanként böngészhessen.
- A rendszer hibakezelést biztosít, például „Nincs találat” üzenet a keresésnél, vagy hibaüzenet nem elérhető cikk esetén.
- A működés egyszerű és áttekinthető, a felhasználó könnyen eligazodik az oldalon.

## 5. Követelménylista

### Funkcionális követelmények
- Legfrissebb hírek listázása főoldalon.
- Kategóriák szerinti szűrés.
- Kulcsszavas keresés címben és szövegben.
- Részletes cikkmegtekintés.
- Lapozás nagy elemszám esetén.
- Hibakezelés: „Nincs találat” üzenet és nem elérhető cikk esetén hibaüzenet.

### Nem funkcionális követelmények
- Egyszerű, letisztult felület.
- Gyors válaszidő az alapvető funkcióknál.
- Stabil és folyamatos működés.
- Alapvető adatbiztonsági előírások betartása.

## 6. Fogalomszótár

- **MVP (Minimum Viable Product):** a rendszer első, működőképes verziója, amely tartalmazza az alapvető funkciókat, mint a hírek listázása, kategóriák szerinti szűrés, kulcsszavas keresés és részletes cikkmegtekintés.
