Registracija i prijava korisnika

Prilikom prvog korištenja aplikacije, korisnik mora izvršiti registraciju. Forma za registraciju sadrži osnovne informacije: ime, email adresu, lozinku i izbor teme (npr. svijetla ili tamna tema). Nakon uspješne registracije, podaci korisnika se čuvaju u Firebase Firestore bazi, dok se dio podataka koristi i u localStorage-u radi jednostavnijeg testiranja aplikacije.

Nakon registracije, korisnik se može prijaviti (login) koristeći svoj email i lozinku. Ukoliko su uneseni podaci tačni, korisnik se preusmjerava na glavnu stranicu aplikacije – dashboard. U slučaju pogrešnih podataka, sistem ispisuje odgovarajuću poruku.

Dashboard

Dashboard predstavlja centralni dio aplikacije. Nakon prijave, korisnik dolazi na ovu stranicu gdje ima pregled glavnih funkcionalnosti sistema. Dashboard sadrži navigaciju prema:

profilu korisnika,

sekciji Student Fun Zone,

sekciji My Trackers.

Dashboard je namjerno jednostavan i pregledan, kako bi korisnik lako mogao pristupiti željenim dijelovima aplikacije.

Profil korisnika

U sekciji View Profile, korisniku se prikazuju osnovne informacije koje je unio prilikom registracije, kao što su ime i email adresa. Ovi podaci se čitaju iz localStorage-a, što omogućava jednostavan prikaz bez dodatnih upita prema bazi. Ova funkcionalnost služi kao osnovni prikaz ličnih podataka korisnika.

My Trackers

Jedan od najvažnijih dijelova aplikacije je sekcija My Trackers. U ovoj sekciji korisnik ima pristup različitim trackerima, gdje je svaki tracker implementiran kao zasebna Angular komponenta.

Implementirani su sljedeći trackeri:

Sleep Tracker (praćenje sna),

Water Tracker (praćenje unosa vode),

Meal Tracker (praćenje obroka),

Habit Tracker (praćenje navika),

Mood Tracker (osnovna struktura).

Svaki tracker omogućava korisniku da unese određenu vrijednost (npr. broj sati sna ili čaša vode), da te podatke sačuva, resetuje ili ponovo pregleda. Podaci se čuvaju u localStorage-u, što omogućava da se prethodno stanje zadrži i nakon osvježavanja stranice.

Trackeri su prikazani kao klikabilne kartice, a svaki vodi na svoju posebnu stranicu.

Student Fun Zone

Sekcija Student Fun Zone je dio prethodnog projekta (Projekat 1) i integrisana je u ovu Angular aplikaciju. Ova sekcija sadrži razne zabavne i interaktivne funkcionalnosti poput kviza, binga, whiteboarda i kanban table.

Student Fun Zone se otvara u novom tabu, čime se zadržava funkcionalnost Angular aplikacije u pozadini.

Firebase integracija

U projektu je korišten Firebase kao online baza podataka i servis za autentifikaciju korisnika. Firebase je povezan sa Angular aplikacijom putem Firebase SDK-a, a korištene su sljedeće funkcionalnosti:

Firestore baza za čuvanje korisničkih podataka,

Firebase Authentication za email/password prijavu.

Firebase je uspješno povezan sa aplikacijom i spreman je za daljnje proširenje, kao što je čuvanje svih tracker podataka direktno u bazu.
