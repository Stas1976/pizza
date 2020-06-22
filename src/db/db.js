import * as ROUTES from "../constants/router";

//*/ List of the number menu Items */
//! 0 PIZZA
//! 1 SNACKS
//! 2 DRINKS
//! 3 DESERTS

export const db = [
  {
    title: "Picos",
    routeName: ROUTES.PIZZA,
    items: [
      {
        id: "p_1",
        name: "Mexican",
        imgUrl: "https://i.ibb.co/7KzdqmH/mexican.jpg",
        ingredients:
          "Pomidorai, mocarelos sūris, saliamis, vištiena, žalioji paprika, pievagrybiai, jalapeno griežinėliai, picų padažas",
        small: {
          carbs: 23,
          proteins: 9,
          fats: 5,
          size: 25,
          calories: 159,
          weight: "400-450",
          price: 8.5
        },
        medium: {
          carbs: 21,
          proteins: 8,
          fats: 5,
          size: 30,
          calories: 169,
          weight: "500-550",
          price: 9.5
        },
        large: {
          carbs: 23,
          proteins: 9,
          fats: 5,
          size: 35,
          calories: 180,
          weight: "750-800",
          price: 12.5
        }
      },
      {
        id: "p_2",
        name: "4 seasons",
        imgUrl: "https://i.ibb.co/pQdccwG/seasons4.jpg",
        ingredients:
          "Pomidorai, mocarelos sūris, kumpis, saliamis, pievagrybiai, picų padažas, oregano prieskoniai, fetos suris",
        small: {
          carbs: 27.6,
          proteins: 11.6,
          fats: 10.4,
          size: 25,
          calories: 245.6,
          weight: "400-450",
          price: 7.5
        },
        medium: {
          carbs: 29.5,
          proteins: 11.8,
          fats: 11.8,
          size: 30,
          calories: 259,
          weight: "500-550",
          price: 8.5
        },
        large: {
          carbs: 26.3,
          proteins: 10.8,
          fats: 10.6,
          size: 35,
          calories: 237,
          weight: "750-800",
          price: 11.5
        }
      },
      {
        id: "p_3",
        name: "Dodo",
        imgUrl: "https://i.ibb.co/X4k1nsN/dodo.jpg",
        ingredients:
          "Pomidorai, mocarelos sūris, kumpis, saliamis, žalioji paprika, pievagrybiai, picų padažas",
        small: {
          carbs: 29,
          proteins: 11,
          fats: 8.5,
          size: 25,
          calories: 239,
          weight: "400-450",
          price: 7.5
        },
        medium: {
          carbs: 21,
          proteins: 9,
          fats: 7,
          size: 30,
          calories: 184,
          weight: "500-550",
          price: 8.5
        },
        large: {
          carbs: 26.3,
          proteins: 10.8,
          fats: 10.6,
          size: 35,
          calories: 237,
          weight: "750-800",
          price: 11.5
        }
      },
      {
        id: "p_4",
        name: "Chicken BBQ",
        imgUrl: "https://i.ibb.co/B61h2dB/chicken-BBQ.jpg",
        ingredients:
          "Mocarelos sūris, šoninė, vištiena, raudonieji svogunai, picų padažas, bbq padažas",
        small: {
          carbs: 32,
          proteins: 12,
          fats: 5.5,
          size: 25,
          calories: 232,
          weight: "400-450",
          price: 7.5
        },
        medium: {
          carbs: 32,
          proteins: 12,
          fats: 5.5,
          size: 30,
          calories: 232,
          weight: "500-550",
          price: 8.5
        },
        large: {
          carbs: 32,
          proteins: 12,
          fats: 5.5,
          size: 35,
          calories: 237,
          weight: "750-800",
          price: 11.5
        }
      },
      {
        id: "p_5",
        name: "Crazy",
        imgUrl: "https://i.ibb.co/9nD50Ry/crazy.jpg",
        ingredients:
          "Saldžiarūgštis padažas, vištiena, mocarelos sūris, saliamis, picų padažas",
        small: {
          carbs: 24.77,
          proteins: 10.08,
          fats: 7.66,
          size: 25,
          calories: 216.32,
          weight: "400-450",
          price: 8.5
        },
        medium: {
          carbs: 24,
          proteins: 10.49,
          fats: 8.23,
          size: 30,
          calories: 219.71,
          weight: "500-550",
          price: 10.5
        },
        large: {
          carbs: 23.38,
          proteins: 9.39,
          fats: 8.06,
          size: 35,
          calories: 211.17,
          weight: "750-800",
          price: 12.5
        }
      },
      {
        id: "p_6",
        name: "Pepperoni",
        imgUrl: "https://i.ibb.co/tKMVs3X/pepperoni.jpg",
        ingredients: "Mocarelos sūris, saliamis, picų padažas",
        small: {
          carbs: 30.7,
          proteins: 10.9,
          fats: 10.9,
          size: 25,
          calories: 211.17,
          weight: "390",
          price: 8.75
        },
        medium: {
          carbs: 30.7,
          proteins: 11.9,
          fats: 11,
          size: 30,
          calories: 273.3,
          weight: "570",
          price: 10.85
        },
        large: {
          carbs: 30.7,
          proteins: 10.9,
          fats: 10.7,
          size: 35,
          calories: 272.6,
          weight: "740",
          price: 12.95
        }
      },
      {
        id: "p_7",
        name: "Hawaiian",
        imgUrl: "https://i.ibb.co/RTK11DH/hawaiian.jpg",
        ingredients: "Kumpis, mocarelos sūris, ananasai, picų padažas",
        small: {
          carbs: 30.7,
          proteins: 13,
          fats: 7.5,
          size: 25,
          calories: 245,
          weight: "500±50 g",
          price: 7.75
        },
        medium: {
          carbs: 30.7,
          proteins: 13,
          fats: 7.5,
          size: 30,
          calories: 245,
          weight: "690±50 g",
          price: 9.85
        },
        large: {
          carbs: 30.7,
          proteins: 13,
          fats: 7.5,
          size: 35,
          calories: 245,
          weight: "940±50 g",
          price: 11.95
        }
      },
      {
        id: "p_8",
        name: "Cheesburger",
        imgUrl: "https://i.ibb.co/9b0GcNW/cheesburger.jpg",
        ingredients:
          "Mocarelos sūris, pomidorai, šoninė, jautiena, raudonieji svogūnai, marinuoti agurkai, picų padažas",
        small: {
          carbs: 28.5,
          proteins: 18.1,
          fats: 7.4,
          size: 25,
          calories: 218.9,
          weight: "430±20 g",
          price: 7.75
        },
        medium: {
          carbs: 27.5,
          proteins: 8.1,
          fats: 7.3,
          size: 30,
          calories: 214,
          weight: "660±50 g",
          price: 9.95
        },
        large: {
          carbs: 27.1,
          proteins: 7.9,
          fats: 7,
          size: 35,
          calories: 208.4,
          weight: "940±50 g",
          price: 11.95
        }
      },
      {
        id: "p_9",
        name: "Vegetarian",
        imgUrl: "https://i.ibb.co/tmZ08mk/vegetarian.jpg",
        ingredients:
          "Pievagrybiai, pomidorai, mocarelos sūris, raudonieji svogūnai, žalioji paprika, juodosios alyvuogės, marinuoti agurkai, picų padažas, oregano prieskoniai, fetos sūris",
        small: {
          carbs: 20,
          proteins: 7,
          fats: 6,
          size: 25,
          calories: 169,
          weight: "400-500 g",
          price: 7.75
        },
        medium: {
          carbs: 21,
          proteins: 7,
          fats: 6,
          size: 30,
          calories: 146,
          weight: "500-600 g",
          price: 9.95
        },
        large: {
          carbs: 22,
          proteins: 8,
          fats: 7,
          size: 35,
          calories: 193,
          weight: "700-800 g",
          price: 11.95
        }
      },
      {
        id: "p_10",
        name: "Champion",
        imgUrl: "https://i.ibb.co/kmV6ZCm/champion.jpg",
        ingredients: "Pievagrybiai, mocarelos sūris, kumpis, picų padažas",
        small: {
          carbs: 27,
          proteins: 9,
          fats: 6,
          size: 25,
          calories: 180,
          weight: "480-530 g",
          price: 6.75
        },
        medium: {
          carbs: 30,
          proteins: 10,
          fats: 7,
          size: 30,
          calories: 225,
          weight: "540-590 g",
          price: 8.85
        },
        large: {
          carbs: 25,
          proteins: 9,
          fats: 6,
          size: 35,
          calories: 200,
          weight: "830-880 g",
          price: 10.95
        }
      }
    ]
  },
  {
    title: "Užkandžiai",
    routeName: ROUTES.SNACKS,
    items: [
      {
        id: "s1",
        name: "Cezario salotos",
        imgUrl: "https://i.ibb.co/YBbqFSZ/cezario.jpg",
        ingredients:
          "Vištiena, vynuoginiai pomidorai, gūžinės salotos Iceberg, skrebučiai, parmezano sūris, bazilikai ir cezario padažas",
        info: {},
        price: 3.5
      },
      {
        id: "s2",
        name: "Graikiškos salotos",
        imgUrl: "https://i.ibb.co/xDcfLDP/graikiskas.jpg",
        ingredients:
          "Vynuoginiai pomidorai, gūžinės salotos Iceberg, Feta sūris, agurkai, juodosios alyvuogės, paprikos, raudonėliai ir alyvuogių aliejus",
        inf0: {},
        price: 3.5
      },
      {
        id: "s3",
        name: "Brusketa su pomidorais, 25 cm",
        imgUrl: "https://i.ibb.co/nm32gY6/brusketa.jpg",
        ingredients: "",
        info: {
          carbs: 240,
          proteins: 8,
          fats: 10,
          calories: 240,
          weight: "380-430"
        },
        price: 5.5
      },
      {
        id: "s4",
        name: "Dodsteris",
        imgUrl: "https://i.ibb.co/chN8nMd/dodsteris.jpg",
        ingredients:
          "Dodsteriai yra unikalus produktas, mūsų išradimas. Atraskite dodsterius. Tai kai kas naujo!",
        info: {
          carbs: 37,
          proteins: 13,
          fats: 11,
          calories: 282,
          weight: "200-220"
        },
        price: 2.8
      },
      {
        id: "s5",
        name: "Vištienos kepsneliai, 7 vnt., 7 vnt.",
        imgUrl:
          "https://i.ibb.co/sq3RgkC/6799dce4-c948-46f7-97f6-7e77f888ad4c.jpg",
        ingredients: "Krosnyje kepti vištienos gabaliukai",
        info: {
          carbs: 26,
          proteins: 14,
          fats: 7,
          calories: 281,
          weight: "130"
        },
        price: 2.75
      },
      {
        id: "s6",
        name: "Aštrūs vištienos sparneliai Buffalo, 7 vnt.",
        imgUrl: "https://i.ibb.co/RpkFndM/sparneliai.jpg",
        ingredients: "Skanūs vištienos sparneliai.",
        info: {
          carbs: 17.8,
          proteins: 2.4,
          fats: 4.4,
          calories: 123.7,
          weight: "280-300"
        },
        price: 4.8
      }
    ]
  },
  {
    title: "Gėrimai",
    routeName: ROUTES.DRINKS,
    items: [
      {
        id: "d1",
        name: "Apelsinų sultys",
        imgUrl: "https://i.ibb.co/wybDTsf/apelsinu.jpg",
        ingredients: "CIDO (100%), 0,3 l",
        info: {
          carbs: "",
          proteins: "",
          fats: "",
          calories: "",
          weight: ""
        },
        price: 1.5
      },
      {
        id: "d2",
        name: "Obuolių sultys",
        imgUrl: "https://i.ibb.co/M5QvdDz/obuoliu.jpg",
        ingredients: "CIDO (100%), 0,3 l",
        info: {
          carbs: "",
          proteins: "",
          fats: "",
          calories: "",
          weight: ""
        },
        price: 1.5
      },
      {
        id: "d3",
        name: "Pomidorų sultys",
        imgUrl: "https://i.ibb.co/5GfJQXx/pomidoru.jpg",
        ingredients: "CIDO (100%), 0,3 l",
        info: {
          carbs: "",
          proteins: "",
          fats: "",
          calories: 123.7,
          weight: "280-300"
        },
        price: 1.5
      },
      {
        id: "d4",
        name: "Coca-Cola",
        imgUrl: "https://i.ibb.co/bKkdG4v/coca-cola.jpg",
        ingredients: "0,5 l",
        info: {
          carbs: "",
          proteins: "",
          fats: "",
          calories: "",
          weight: ""
        },
        price: 1.5
      },
      {
        id: "d5",
        name: "Coca-Cola Zero",
        imgUrl: "https://i.ibb.co/HTxJgDw/cola-zero.jpg",
        ingredients: "0,5 l",
        info: {
          carbs: "",
          proteins: "",
          fats: "",
          calories: "",
          weight: ""
        },
        price: 1.5
      },
      {
        id: "d6",
        name: "Fanta",
        imgUrl: "https://i.ibb.co/Bn3ys8c/fanta.jpg",
        ingredients: "0,5 l",
        info: {
          carbs: "",
          proteins: "",
          fats: "",
          calories: "",
          weight: ""
        },
        price: 1.5
      },
      {
        id: "d7",
        name: "Sprite",
        imgUrl: "https://i.ibb.co/BZWHh1W/sprite.jpg",
        ingredients: "0,5 l",
        info: {
          carbs: "",
          proteins: "",
          fats: "",
          calories: "",
          weight: ""
        },
        price: 1.5
      },
      {
        id: "d8",
        name: "Negazuotas vanduo",
        imgUrl: "https://i.ibb.co/SJQSHF2/neptunas.jpg",
        ingredients: "0,5 l",
        info: {
          carbs: "",
          proteins: "",
          fats: "",
          calories: "",
          weight: ""
        },
        price: 1.2
      }
    ]
  },
  {
    title: "Dėsertai",
    routeName: ROUTES.DESERTS,
    items: [
      {
        id: "deserts_1",
        name: "Cheesecake",
        imgUrl: "https://i.ibb.co/F0rYSx1/cheesecake.jpg",
        ingredients:
          "Dviejų sluoksnių švelnaus skonio sūrio tortas, iškeptas pagal originalų receptą. Sūrio sluoksnis pagamintas iš minkšto ricotta sūrio, viršus dekoruotas karamelizuotais trupiniais.",
        info: {
          carbs: "",
          proteins: "",
          fats: "",
          calories: "",
          weight: ""
        },
        price: 2.0
      },
      {
        id: "deserts_2",
        name: "Šviesus mufinas su šokolado lašais",
        imgUrl: "https://i.ibb.co/ykwDdT8/mufinas.jpg",
        ingredients:
          "Nuostabaus skonio keksiukas su šokolado lašais - idealus pasirinkimas tiek studentui, tiek prezidentui!",
        info: {},
        price: 1.5
      }
    ]
  },
  {
    title: "Padažai",
    routeName: ROUTES.SOUCE,
    items: [
      {
        id: "souse1",
        name: "Porcijins kečupas",
        imgUrl: "https://i.ibb.co/pwrr353/padazas.jpg",
        info: {},
        price: 0.15
      }
    ]
  }
];
