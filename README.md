# plattenladen
1. Richte ein Repository für dein Backend-Projekt ein. Achte auf die passenden Branches, eine klare Struktur und die notwendigen "ersten Schritte": Module, Environment, Skripte.
2. Erstelle einen Express-Server, der auf `GET /` mit Status 200 und einem leeren Response antwortet.
3. Deploye deinen Server auf render.com. Wähle den passenden Branch dafür aus.
4. Beginne mit der Umsetzung der User Story zur Produktliste. Versuche so lange wie möglich ohne Datenbank auszukommen, indem du in den einzelnen Schritten Dummy-Daten verwendest.
Committe regelmäßig und mit aussagekräftigen Messages!


Aufgaben 8. Februar
Beendet die Aufgaben von gestern
Implementiert für die Get All Products Route, dass man einen Such Term als Query Parameter erwartet
Überlegt euch, wie ihr mithilfe von mongoose den Suchterm nutzen kann um Künstler und Titel zu suchen


Aufgaben 9. Februar
beendet Aufgaben von gestern
Erstelle eine Datenbankverbindung zu deiner mongodb auf Atlas
Erstelle eine Model für Records
Erstelle Validatoren, dass die notwendigen Daten Pflicht sind und URLs im richtigen Format abgespeichert werden
Baue eine Route und dazugehörige Methode, die alle Records zurück gibt. Nutze den Suchterm von gestern zum Filtern der Ergebnisse
Baue eine Seed Datei, die Records anlegt. Erstelle deine eigenen Daten oder nutze Faker
BONUS: Erstelle ein Model für User und die notwendigen Methoden und Routen für Login und Register inkl. hashing und Token