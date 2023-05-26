/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('Titans').del()
  await knex('Titans').insert([
    {
      id: 1,
      name: 'Cronus',
      answer: 'Agriculture and the harvest',
      description:
        'Connected with agriculture, celebrated the harvest, he swallowed because his own parents had warned that he would be overthrown by his own child, but they were rescued by Rhea, who defeated Cronus by feeding him a rock instead of newborn Zues.',
      image: '/cronus.png',
    },
    {
      id: 2,
      name: 'Styx',
      answer: 'The River Styx',
      description: 'Goddess Titan of the River Styx',
      image: '/styx.png',
    },
    {
      id: 3,
      name: 'Hecatonchires',
      answer: 'Children of titans',
      description: 'Mis-shapen children of the Titan gods',
      image: '/hundredhanded.jpg',
    },
    {
      id: 4,
      name: 'Eos',
      answer: 'Dawn',
      description: 'Titan Goddess of dawn, married to Astraeus God of Dusk.',
      image: '/eos.png',
    },
    {
      id: 5,
      name: 'Prometheus',
      answer: 'Bringer of fire',
      description:
        'Prometheus stole fire from the gods and gifted it to humanity, which resulted in Zeus chaining Prometheus and sending an eagle to prey upon his continually regenerating liver.',
      image: '/prometheus.png',
    },
    {
      id: 6,
      name: 'Rhea',
      answer: 'Fruitfulness',
      description:
        'She was associated with fruitfulness and had affinities with Gaea (Earth). Rhea concealed the birth of Zeus, and overthrew her father Cronus',
      image: '/rhea.png',
    },
    {
      id: 7,
      name: 'Themis',
      answer: 'Justice',
      description:
        'Personification of justice, goddess of wisdom and good counsel',
      image: '/themis.png',
    },
    {
      id: 8,
      name: 'Hyperion',
      answer: 'Light, wisdom, and watchfulness',
      description: 'He was the father of the sun, the moon, and the dawn.',
      image: '/hyperion.png',
    },
    {
      id: 9,
      name: 'Asteria',
      answer: 'Nocturnal animals & the moon',
      description:
        'Asteria was the goddess of nocturnal oracles and shooting stars. Zeus pursued her, but Asteria instead turned into a quail and fell into the Aegean to escape.',
      image: '/asteria.jpg',
    },
    {
      id: 10,
      name: 'Atlas',
      answer: 'Titan who rebelled and was made to carry the sky',
      description:
        'Leader of the Titan rebellion against Zeus, and he got a fitting punishment after the end of the Titanomachy: he was condemned to eternally hold up the sky.',
      image: '/atlas.png',
    },
  ])
}

//info credit to greekmythology.com/Titans
