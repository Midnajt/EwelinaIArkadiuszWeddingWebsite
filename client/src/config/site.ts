const addPatternUrl = "https://midnajt.github.io/AddPattern.github.io/";

export const site = {
  name: "Ewelina & Arkadiusz",
  legalName: "Ewelina i Arkadiusz — strona ślubna",
  city: "Spytkowice",
  url: "https://ewelinaiarkadiusz.pl",
  couple: {
    bride: "Ewelina",
    groom: "Arkadiusz",
    initials: "E & A",
  },
  weddingDate: "2026-11-27",
  calendar: {
    startsAt: "2026-11-27T13:30:00",
    endsAt: "2026-11-28T04:00:00",
    timeZone: "Europe/Warsaw",
    filename: "slub-eweliny-i-arkadiusza.ics",
  },
  phone: "504 964 802",
  phoneHref: "tel:+48504964802",
  email: "Ewelina.Scibor@op.pl",
  emailHref: "mailto:Ewelina.Scibor@op.pl",
  contacts: {
    bride: {
      name: "Ewelina",
      phone: "504 964 802",
      phoneHref: "tel:+48504964802",
      email: "Ewelina.Scibor@op.pl",
      emailHref: "mailto:Ewelina.Scibor@op.pl",
    },
    groom: {
      name: "Arkadiusz",
      phone: "502 811 680",
      phoneHref: "tel:+48502811680",
      email: "Arkadiusz.Strzezek@strzezek.com",
      emailHref: "mailto:Arkadiusz.Strzezek@strzezek.com",
    },
  },
  ceremony: {
    namePl: "Kościół pw. Niepokalanego Poczęcia NMP",
    nameEn: "Church of the Immaculate Conception of the BVM",
    time: "14:00",
    street: "Spytkowice 21",
    postal: "34-745",
    city: "Spytkowice",
    full: "Spytkowice 21, 34-745 Spytkowice",
    mapEmbed:
      "https://maps.google.com/maps?q=Spytkowice+21,+34-745+Spytkowice&hl=pl&z=17&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Spytkowice+21,+34-745+Spytkowice",
  },
  reception: {
    namePl: "Restauracja „Przystań Kabanos”",
    nameEn: "Przystań Kabanos Restaurant",
    time: "16:30",
    street: "Spytkowice 625",
    postal: "34-745",
    city: "Spytkowice",
    full: "Spytkowice 625, 34-745 Spytkowice",
    url: "https://przystanwkabanosie.pl",
    mapEmbed:
      "https://maps.google.com/maps?q=Przysta%C5%84+w+Kabanosie+Spytkowice+625&hl=pl&z=17&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Przysta%C5%84+w+Kabanosie+Spytkowice+625",
  },
  witnesses: [
    {
      id: "maid",
      initials: "AK",
      name: "Anna Kowalska",
      phone: "500 100 210",
      phoneHref: "tel:+48500100210",
      email: "anna@example.pl",
      emailHref: "mailto:anna@example.pl",
    },
    {
      id: "bestMan",
      initials: "TN",
      name: "Tomasz Nowak",
      phone: "500 100 211",
      phoneHref: "tel:+48500100211",
      email: "tomasz@example.pl",
      emailHref: "mailto:tomasz@example.pl",
    },
  ],
  social: {
    facebook: "https://facebook.com",
  },
  addPattern: {
    name: "AddPattern Marcin Krzysztoszek",
    url: "https://addpattern.pl",
  },
  partners: [
    {
      id: "makeup",
      name: "Atelier Urody „Róża”",
      place: "Nowy Sącz",
      url: addPatternUrl,
    },
    {
      id: "florist",
      name: "Kwiaciarnia Nad Popradem",
      place: "Spytkowice",
      url: addPatternUrl,
    },
    {
      id: "hair",
      name: "Salon „Lok i Warkocz”",
      place: "Stary Sącz",
      url: addPatternUrl,
    },
    {
      id: "tailor",
      name: "Pracownia Krawiecka „Atłas”",
      place: "Nowy Sącz",
      url: addPatternUrl,
    },
    {
      id: "band",
      name: "Kapela „Harnasie znad Popradu”",
      place: "Spytkowice",
      url: addPatternUrl,
    },
    {
      id: "photo",
      name: "Fotografia Ślubna „Chwila”",
      place: "Spytkowice",
      url: addPatternUrl,
    },
  ],
} as const;
