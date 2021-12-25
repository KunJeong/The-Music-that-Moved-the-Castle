let piano = "piano";
let bowed = "bowed";
let plucked = "plucked";
let brass = "brass";
let wood = "wood";

let m = "main";
let o = "ornaments";
let r = "rhythm";
let a = "atmosphere";

let ff = "ff";
let f = "f";
let mf = "mf";
let mp = "mp";
let p = "p";
let pp = "pp";
let ppp = "ppp";
let songs = [
  {
    center: {
      centerX: 300,
      centerY: 300,
    },
    emotion: "peaceful",
    impact: 1,
    instruments: [
      { type: piano, role: m, volume: mf },
      { type: piano, role: a, volume: mp },
      { type: bowed, role: a, volume: mp },
    ],
    beats: 3,
  },
  {
    center: {
      centerX: 400,
      centerY: 750,
    },
    emotion: "scared",
    impact: 1,
    instruments: [
      { type: plucked, role: m, volume: mp },
      { type: plucked, role: r, volume: p },
      { type: plucked, role: o, volume: pp },
    ],
    beats: 3,
  },
  {
    center: {
      centerX: 650,
      centerY: 500,
    },
    emotion: "magical",
    impact: 2,
    instruments: [
      { type: bowed, role: m, volume: ff },
      { type: wood, role: o, volume: mf },
      { type: brass, role: r, volume: f },
    ],
    beats: 3,
  },
  {
    center: {
      centerX: 1100,
      centerY: 250,
    },
    emotion: "love",
    impact: 1,
    instruments: [
      { type: piano, role: m, volume: f },
      { type: bowed, role: a, volume: f },
      { type: plucked, role: o, volume: pp },
    ],
    beats: 3,
  },
  {
    center: {
      centerX: 750,
      centerY: 950,
    },
    emotion: "peaceful",
    impact: 2,
    instruments: [
      { type: brass, role: m, volume: f },
      { type: plucked, role: r, volume: p },
      { type: piano, role: o, volume: p },
    ],
    beats: 3,
  },
  {
    center: {
      centerX: 1050,
      centerY: 600,
    },
    emotion: "peaceful",
    impact: 2,
    instruments: [
      { type: wood, role: m, volume: f },
      { type: bowed, role: r, volume: p },
      { type: brass, role: o, volume: mf },
      { type: wood, role: o, volume: f },
    ],
    beats: 3,
  },
  {
    center: {
      centerX: 1500,
      centerY: 450,
    },
    emotion: "funny",
    impact: 2,
    instruments: [
      { type: plucked, role: m, volume: f },
      { type: brass, role: o, volume: f },
      { type: brass, role: r, volume: ff },
      { type: wood, role: o, volume: mf },
    ],
    beats: 3,
  },
  {
    center: {
      centerX: 900,
      centerY: 1300,
    },
    emotion: "magical",
    impact: 2,
    instruments: [
      { type: brass, role: m, volume: mf },
      { type: plucked, role: o, volume: ppp },
      { type: wood, role: o, volume: mf },
      { type: piano, role: o, volume: pp },
      { type: bowed, role: a, volume: p },
    ],
    beats: 3,
  },
  {
    center: {
      centerX: 1250,
      centerY: 900,
    },
    emotion: "peaceful",
    impact: 3,
    instruments: [
      { type: bowed, role: m, volume: ff },
      { type: wood, role: o, volume: mp },
      { type: plucked, role: r, volume: ppp },
      { type: brass, role: a, volume: pp },
    ],
    beats: 4,
  },
  {
    center: {
      centerX: 1900,
      centerY: 500,
    },
    emotion: "love",
    impact: 1,
    instruments: [
      { type: piano, role: m, volume: mf },
      { type: bowed, role: a, volume: f },
    ],
    beats: 3,
  },
  {
    center: {
      centerX: 1450,
      centerY: 1200,
    },
    emotion: "sad",
    impact: 1,
    instruments: [
      { type: piano, role: m, volume: mp },
      { type: bowed, role: o, volume: mf },
      { type: piano, role: r, volume: pp },
    ],
    beats: 3,
  },
  {
    center: {
      centerX: 1720,
      centerY: 900,
    },
    emotion: "funny",
    impact: 3,
    instruments: [
      { type: plucked, role: m, volume: ff },
      { type: plucked, role: r, volume: mf },
      { type: wood, role: o, volume: f },
    ],
    beats: 3,
  },
  {
    center: {
      centerX: 2350,
      centerY: 400,
    },
    emotion: "funny",
    impact: 1,
    instruments: [
      { type: plucked, role: m, volume: mf },
      { type: plucked, role: o, volume: mf },
      { type: plucked, role: o, volume: mp },
    ],
    beats: 5,
  },
  {
    center: {
      centerX: 2100,
      centerY: 900,
    },
    emotion: "love",
    impact: 2,
    instruments: [
      { type: wood, role: m, volume: mf },
      { type: wood, role: o, volume: mf },
      { type: brass, role: a, volume: p },
    ],
    beats: 4,
  },
  {
    center: {
      centerX: 2500,
      centerY: 700,
    },
    emotion: "scared",
    impact: 2,
    instruments: [
      { type: wood, role: m, volume: mp },
      { type: bowed, role: o, volume: mp },
      { type: bowed, role: r, volume: mf },
    ],
    beats: 4,
  },
  {
    center: {
      centerX: 2000,
      centerY: 1400,
    },
    emotion: "peaceful",
    impact: 3,
    instruments: [
      { type: bowed, role: m, volume: ff },
      { type: bowed, role: a, volume: f },
      { type: bowed, role: o, volume: mf },
    ],
    beats: 3,
  },
  {
    center: {
      centerX: 2410,
      centerY: 1150,
    },
    emotion: "scared",
    impact: 2,
    instruments: [
      { type: wood, role: m, volume: f },
      { type: bowed, role: o, volume: p },
      { type: brass, role: a, volume: pp },
    ],
    beats: 4,
  },
  {
    center: {
      centerX: 1850,
      centerY: 1900,
    },
    emotion: "love",
    impact: 1,
    instruments: [
      { type: piano, role: m, volume: mp },
      { type: piano, role: r, volume: mp },
    ],
    beats: 3,
  },
  {
    center: {
      centerX: 2400,
      centerY: 1600,
    },
    emotion: "love",
    impact: 3,
    instruments: [
      { type: bowed, role: m, volume: ff },
      { type: bowed, role: o, volume: mp },
      { type: bowed, role: a, volume: pp },
      { type: wood, role: o, volume: mf },
    ],
    beats: 3,
  },
  {
    center: {
      centerX: 1880,
      centerY: 2350,
    },
    emotion: "magical",
    impact: 3,
    instruments: [
      { type: brass, role: m, volume: f },
      { type: brass, role: r, volume: f },
      { type: bowed, role: o, volume: mp },
    ],
    beats: 4,
  },
  {
    center: {
      centerX: 2230,
      centerY: 1950,
    },
    emotion: "sad",
    impact: 3,
    instruments: [
      { type: bowed, role: m, volume: ff },
      { type: bowed, role: o, volume: mf },
    ],
    beats: 3,
  },
  {
    center: {
      centerX: 2380,
      centerY: 2370,
    },
    emotion: "peaceful",
    impact: 2,
    instruments: [
      { type: bowed, role: m, volume: ff },
      { type: bowed, role: a, volume: ff },
      { type: brass, role: r, volume: f },
      { type: brass, role: o, volume: f },
    ],
    beats: 3,
  },
];
