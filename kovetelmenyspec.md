# Követelményspecifikáció – Egyszerű Hírportál

## 1. Jelenlegi helyzet leírása

A szervezet jelenleg nem rendelkezik saját, nyilvánosan elérhető online felülettel, ahol híreket lehetne közzétenni és rendszerezett módon publikálni.  
Az információk jelenleg különféle csatornákon, például belső dokumentumokban, e-mailekben vagy szórványos jegyzetekben találhatók meg.  
Ez a széttagolt megoldás számos problémát okoz:

- **Átláthatatlanság:** A hírek nem strukturáltak, így nehéz őket gyorsan visszakeresni.  
- **Elérhetetlenség:** A hírek csak belső használatra vannak meg, a külső érdeklődők nem férhetnek hozzá.  
- **Rendszertelenség:** A hírek közlésének nincs kialakult folyamata vagy egységes felülete.  
- **Felhasználói nehézségek:** A felhasználók számára nem áll rendelkezésre könnyen kezelhető és áttekinthető hírportál.  

Ennek következtében a felhasználók információhoz jutása lassú, pontatlan és sokszor esetleges. Hiányzik egy olyan központi eszköz, amely biztosítaná a hírek egységes közzétételét és gyors elérhetőségét.

## 2. Vágyálomrendszer leírása

A jövőbeni rendszer egy egyszerű, letisztult webes **hírportál** lesz, amelynek fő célja a hírek könnyen elérhető és kereshető formában történő megjelenítése.  
Az alábbi tulajdonságokat fogja biztosítani:

- **Főoldali áttekintés:** A felhasználók a kezdőlapon azonnal láthatják a legfrissebb híreket, időrendbe rendezve. Minden hír rövid kivonattal jelenik meg, hogy gyorsan áttekinthető legyen a tartalom.  
- **Kategorizálás:** A hírek kategóriákhoz tartoznak (pl. sport, politika, technológia), így a felhasználók szűrhetnek egy-egy témára.  
- **Kulcsszavas keresés:** A rendszer támogatja a hírek címében és teljes szövegében való keresést, ezzel gyors elérést biztosítva a releváns információkhoz.  
- **Részletes nézet:** A hír címére kattintva a felhasználó elérheti a cikk teljes szövegét, a megjelenés dátumát és a kategóriát.  
- **Egyszerű használhatóság:** A felület minimalista és intuitív, amely lehetővé teszi, hogy a felhasználók technikai háttértudás nélkül is könnyedén használják.  
- **MVP fókusz:** A kezdeti verzióban a rendszer kizárólag a hírmegjelenítésre és böngészésre koncentrál, tehát nem tartalmaz bonyolult funkciókat (pl. regisztrációt, hozzászólásokat, személyre szabást).  

A vágyálomrendszer hosszú távon bővíthető, de az alapoknál a gyors, egyszerű és megbízható hírmegjelenítés az elsődleges cél.

## 3. Jelenlegi üzleti folyamatok modellje

- A hírek létrejönnek (pl. sajtóközlemények, belső kommunikációs anyagok), de ezek nem kerülnek egységes, digitális felületre.  
- A szervezet rendelkezik a tartalommal, de azt nem tudja nyilvánosan közzétenni.  
- A hírek széttagolt tárolása miatt a visszakeresés nehézkes, nem szabványosított.  
- Az érdeklődők csak esetlegesen, különböző csatornákon érhetnek el híreket, központi gyűjtőfelület nélkül.  
- Nincs automatizált rendszer a hírek publikálására és archiválására, ezért a régebbi anyagok elérhetősége korlátozott.  

Összességében a jelenlegi folyamat nem támogatja sem a belső munkafolyamatokat, sem a külső kommunikációt.

## 4. Igényelt üzleti folyamatok modellje

A jövőben a rendszer az alábbi egyszerű, felhasználóközpontú folyamatokat biztosítja:

1. **Főoldali böngészés:**  
   - A felhasználó megnyitja a hírportál főoldalát.  
   - A rendszer automatikusan időrendi sorrendben jeleníti meg a híreket rövid kivonattal.  

2. **Kategória szerinti szűrés:**  
   - A felhasználó kiválaszt egy kategóriát.  
   - A rendszer csak az adott témához tartozó híreket listázza ki.  

3. **Keresés kulcsszó alapján:**  
   - A felhasználó beír egy keresési kifejezést.  
   - A rendszer releváns találatokat ad vissza a címekből és a szövegekből.  

4. **Részletes megjelenítés:**  
   - A felhasználó egy hír címére kattintva elérheti a teljes szöveget.  
   - A részletes nézetben a hír dátuma és kategóriája is látható.  

5. **Lapozás és hibakezelés:**  
   - Ha sok hír van, a rendszer oldalanként teszi elérhetővé a cikkeket.  
   - Ha a keresés nem ad eredményt, a felhasználó „Nincs találat” üzenetet kap.  
   - Ha egy hír törölve lett vagy nem elérhető, a rendszer megfelelő hibaüzenetet jelenít meg.  

Ezek az igényelt folyamatok egyszerűek, átláthatóak és a felhasználói élményt helyezik középpontba.

## 5. Követelménylista



## 6. Fogalomszótár

