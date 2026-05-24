import { ServicePackage, Testimonial } from './types';

export const SYSTEM_SERVICES: ServicePackage[] = [
  {
    id: 'przeglad-bazowy',
    name: 'PRZEGLĄD PRZEDSEZONOWY / STARTOWY',
    price: 'OD 350 PLN',
    duration: '1-3 DNI ROBOCZE',
    specs: [
      'Kompletna diagnostyka silnika oraz kompresji',
      'Wymiana oleju silnikowego oraz filtra oleju i powietrza',
      'Kontrola stanu świecy zapłonowej i układu rozruchu',
      'Ostrzenie, wyważanie i czyszczenie noży tnących',
      'Kontrola zużycia pasków napędowych oraz rolek',
      'Smarowanie wszystkich punktów podwozia i piast',
      'Pomiar napięcia ładowania i sprawności akumulatora'
    ]
  },
  {
    id: 'serwis-naprawa',
    name: 'USŁUGA DIAGNOSTYCZNO-REMONOWA',
    price: 'WYCENA INDYWIDUALNA',
    duration: 'W ZALEŻNOŚCI OD USTERKI',
    specs: [
      'Fachowa diagnoza przyczyn utraty mocy, gaśnięcia lub brudnej pracy',
      'Wymiana uszkodzonych części na sprawdzone, wysokiej jakości zamienniki lub oryginały',
      'Naprawa i regeneracja skrzyń hydrostatycznych (objawy: brak siły pod górę)',
      'Spawanie i wyważanie agregatów tnących (kosisk)',
      'Elektro-diagnostyka (bezpieczniki, cewki, czujniki bezpieczeństwa)',
      'Rozwiązywanie problemów z nierównym cięciem trawnika lub wibracjami'
    ],
    recommended: true
  },
  {
    id: 'transport-logistyka',
    name: 'BEZPIECZNY TRANSPORT MASZYN',
    price: 'DOSTĘPNA DLA JASŁO I OKOLICE',
    duration: 'ZGODNA Z HARMONOGRAMEM',
    specs: [
      'Własny transport lawetą wyposażoną w pasy mocujące i najazdy',
      'Bezpieczny załadunek i rozładunek ciężkich traktorków ogrodowych',
      'Odbiór spod wskazanego adresu w Jaśle (38-200) i sąsiednich powiatach',
      'Odwóz naprawionej, umytej i w pełni gotowej do pracy kosiarki pod Twoje drzwi'
    ]
  }
];

export const WORKSHOP_STEPS = [
  {
    num: '01',
    title: 'Zgłoszenie i Transport',
    desc: 'Dzwonisz pod numer 503 198 307 lub wypełniasz formularz. Umawiamy szybki odbiór Twojego traktorka bezpiecznym transportem z Twojej posesji.'
  },
  {
    num: '02',
    title: 'Fachowa Diagnoza',
    desc: 'Nasi specjaliści precyzyjnie lokalizują źródło problemu (brak mocy, usterka skrzyni, hałas) i kontaktują się z Tobą w celu zatwierdzenia kosztów.'
  },
  {
    num: '03',
    title: 'Wymiana i Naprawa',
    desc: 'Używamy wyłącznie sprawdzonych części i certyfikowanych płynów eksploatacyjnych, co gwarantuje długą, bezpieczną i niezawodną pracę.'
  },
  {
    num: '04',
    title: 'Dostawa pod Drzwi',
    desc: 'Przetestowany i sprawny traktorek odwozimy z powrotem. Oszczędzasz czas, paliwo i nerwy, a Twój ogród znowu lśni wyglądem.'
  }
];

export const CLIENT_REVIEWS: Testimonial[] = [
  {
    author: 'Andrzej K.',
    location: 'Jasło',
    rating: 5,
    text: 'Mój traktorek Husqvarna po zimie nie chciał odpalić i strasznie dymił. Serwis odebrał maszynę z mojej działki, zrobili pełną diagnostykę, wymienili paski, filtr i naostrzyli noże. Traktorek chodzi jak nowy! Świetny kontakt i rzetelne podejście.',
    date: '12-05-2026'
  },
  {
    author: 'Mariusz Z.',
    location: 'Kołaczyce koło Jasła',
    rating: 5,
    text: 'Profesjonalna naprawa skrzyni hydrostatycznej. Inne warsztaty proponowały tylko wymianę na nową za miliony, a tutaj fachowo zdiagnozowano i zregenerowano układ. Transport traktorka w obie strony rozwiązał problem logistyczny. Polecam z czystym sumieniem!',
    date: '03-05-2026'
  },
  {
    author: 'Rafał P.',
    location: 'Jasło, Podzamcze',
    rating: 5,
    text: 'Szybki przegląd przed sezonem zrobiony profesjonalnie. Sprzęt odebrany rano, następnego dnia popołudniu już kosiłem. Super ceny części i rzetelność, której próżno szukać u dużych pseudo-autoryzowanych dealerów.',
    date: '28-04-2026'
  }
];
