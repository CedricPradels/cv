export const data = [
  {
    date: new Date("2020"),
    title: "Formation développeur",
    school: "Le Reéacteur",
    themes: ["React", "ReactNative", "JavaScript", "Express", "MongoDB"],
  },
  {
    date: new Date("2012-10-16"),
    title: "Licence Professionnelle Robotique",
    school: "IUT Cachan",
  },
  {
    date: new Date("2011-07-01"),
    title: "BTS Mécanique et Automatisme Industriels",
    school: "Lycée Gustave Eiffel",
  },
  {
    date: new Date("2009-07-15"),
    title: "Bac Professionnel Electrotechnique",
    school: "Foyer des PTT de cachan",
  },
  {
    date: new Date("2007-06-27"),
    title: "BEP Electrotechnique",
    school: "Foyer des PTT de cachan",
  },
].sort((a, b) => a.date.getTime() - b.date.getTime());
