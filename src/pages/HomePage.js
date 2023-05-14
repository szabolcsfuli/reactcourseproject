import React from 'react'
import Card from '../components/Card'

const HomePage = () => {
  return (
    <Card title={'Home page'}>
      A React egy nyílt forráskódú, deklaratív és hatékony JavaScript könyvtár,
      amelyet a Facebook fejlesztett ki. A React célja, hogy könnyen kezelhetővé
      tegye a felhasználói felületek fejlesztését, és lehetővé tegye az
      újrafelhasználható komponensek használatát a kód optimalizálása és
      karbantarthatósága érdekében. A React használata lehetővé teszi a kód
      könnyű megértését és bővíthetőségét, valamint javítja az alkalmazás
      teljesítményét és hatékonyságát.
      <h3>Hook-ok</h3>
      <ul>
        <li>
          useState(): A React alapvető hookja, amely lehetővé teszi a komponens
          állapotának tárolását és frissítését.
        </li>
        <li>
          useEffect(): Ezzel a hookkal a komponens állapotának változása után
          futtatni kívánt mellékhatásokat lehet megadni, például a DOM
          manipulálását, hálózati kérések végrehajtását vagy más külső API-k
          használatát.
        </li>
        <li>
          useContext(): Ez a hook lehetővé teszi a kontextus használatát a
          komponensben, így megoszthatjuk az adatokat a komponensek között.
        </li>
        <li>
          useRef(): Ez a hook egy hivatkozást ad vissza egy DOM elemre vagy más
          értékre, amelyet a komponens életciklusa során megőrizhetünk és
          módosíthatunk.
        </li>
        <li>
          useReducer(): Ez a hook segítségével az alkalmazás állapotát több
          komponens között is megoszthatjuk és újrahasználhatjuk, miközben az
          állapotot egyedi akciók segítségével módosítjuk.
        </li>
        <li>
          useCallback(): Ezzel a hookkal a függvényeket lehet memóriában
          tartani, hogy ne kelljen azokat újra és újra létrehozni a renderelés
          során, ami javíthatja az alkalmazás teljesítményét.
        </li>
        <li>
          useMemo(): Ez a hook lehetővé teszi a memóriában tárolt értékek
          használatát, amelyek csak akkor számolódnak újra, ha a hozzájuk
          tartozó függőségek megváltoznak.
        </li>
      </ul>
    </Card>
  )
}

export default HomePage
