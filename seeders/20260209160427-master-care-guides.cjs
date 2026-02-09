'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CareGuides', [
      {
        species: 'Tulsi',
        watering: JSON.stringify({ frequency: 1, unit: 'days', rule: 'light watering daily, skip if rain > 10mm' }),
        sunlight: 'Direct sunlight, 4-6 hours',
        fertilizer: 'Organic compost every 2 weeks',
        pruning: 'Pinch off flowers to encourage leaf growth',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Mango',
        watering: JSON.stringify({ frequency: 2, unit: 'days', rule: 'skip if rain > 10mm' }),
        sunlight: 'Full sun, 6+ hours',
        fertilizer: 'Nitrogen-rich once a month',
        pruning: 'Light pruning in spring',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Rose',
        watering: JSON.stringify({ frequency: 1, unit: 'days', rule: 'daily in summer, every 2 days in winter' }),
        sunlight: 'Partial sun, 4-6 hours',
        fertilizer: 'Phosphorus-rich every 2 weeks',
        pruning: 'Remove dead flowers weekly',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'AloeVera',
        watering: JSON.stringify({ frequency: 7, unit: 'days', rule: 'water weekly, skip if soil moist' }),
        sunlight: 'Indirect sunlight, 4-6 hours',
        fertilizer: 'Diluted liquid fertilizer every 2 months',
        pruning: 'Remove damaged leaves',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'MoneyPlant',
        watering: JSON.stringify({ frequency: 3, unit: 'days', rule: 'keep soil slightly moist' }),
        sunlight: 'Indirect sunlight, avoid harsh rays',
        fertilizer: 'Balanced fertilizer once a month',
        pruning: 'Trim long vines to encourage bushy growth',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Hibiscus',
        watering: JSON.stringify({ frequency: 2, unit: 'days', rule: 'increase frequency in summer' }),
        sunlight: 'Full sun, 6+ hours',
        fertilizer: 'Potassium-rich every 2 weeks',
        pruning: 'Prune after flowering season',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Neem',
        watering: JSON.stringify({ frequency: 3, unit: 'days', rule: 'skip if rain > 10mm' }),
        sunlight: 'Full sun, 6+ hours',
        fertilizer: 'Organic compost every month',
        pruning: 'Minimal pruning, remove dead branches',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Basil',
        watering: JSON.stringify({ frequency: 1, unit: 'days', rule: 'light watering daily' }),
        sunlight: 'Direct sunlight, 6+ hours',
        fertilizer: 'Organic compost every 2 weeks',
        pruning: 'Pinch off flowers to prolong leaf harvest',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Tomato',
        watering: JSON.stringify({ frequency: 2, unit: 'days', rule: 'increase frequency in hot weather' }),
        sunlight: 'Full sun, 6-8 hours',
        fertilizer: 'Balanced fertilizer every 2 weeks',
        pruning: 'Remove suckers to improve yield',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Chili',
        watering: JSON.stringify({ frequency: 2, unit: 'days', rule: 'keep soil moist but not soggy' }),
        sunlight: 'Full sun, 6+ hours',
        fertilizer: 'Nitrogen-rich every 2 weeks',
        pruning: 'Remove weak branches',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'CurryLeaf',
        watering: JSON.stringify({ frequency: 3, unit: 'days', rule: 'reduce in winter' }),
        sunlight: 'Full sun, 5-6 hours',
        fertilizer: 'Organic compost every month',
        pruning: 'Trim regularly to encourage bushy growth',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Mint',
        watering: JSON.stringify({ frequency: 1, unit: 'days', rule: 'keep soil consistently moist' }),
        sunlight: 'Partial sun, 3-4 hours',
        fertilizer: 'Organic compost every 2 weeks',
        pruning: 'Trim regularly to prevent flowering',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Coriander',
        watering: JSON.stringify({ frequency: 2, unit: 'days', rule: 'avoid waterlogging' }),
        sunlight: 'Partial sun, 4-5 hours',
        fertilizer: 'Balanced fertilizer every 2 weeks',
        pruning: 'Harvest leaves regularly',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Spinach',
        watering: JSON.stringify({ frequency: 2, unit: 'days', rule: 'increase frequency in hot weather' }),
        sunlight: 'Partial sun, 4-6 hours',
        fertilizer: 'Nitrogen-rich every 2 weeks',
        pruning: 'Harvest outer leaves first',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Papaya',
        watering: JSON.stringify({ frequency: 3, unit: 'days', rule: 'increase in summer' }),
        sunlight: 'Full sun, 6+ hours',
        fertilizer: 'Organic compost every month',
        pruning: 'Remove yellow leaves',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Banana',
        watering: JSON.stringify({ frequency: 2, unit: 'days', rule: 'needs consistent moisture' }),
        sunlight: 'Full sun, 6+ hours',
        fertilizer: 'Potassium-rich every month',
        pruning: 'Remove old leaves',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Guava',
        watering: JSON.stringify({ frequency: 3, unit: 'days', rule: 'skip if rain > 10mm' }),
        sunlight: 'Full sun, 6+ hours',
        fertilizer: 'Balanced fertilizer every month',
        pruning: 'Prune lightly after fruiting',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Peas',
        watering: JSON.stringify({ frequency: 2, unit: 'days', rule: 'keep soil moist' }),
        sunlight: 'Partial sun, 4-6 hours',
        fertilizer: 'Nitrogen-rich every 2 weeks',
        pruning: 'Support vines with stakes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Potato',
        watering: JSON.stringify({ frequency: 3, unit: 'days', rule: 'avoid waterlogging' }),
        sunlight: 'Full sun, 6+ hours',
        fertilizer: 'Balanced fertilizer every 2 weeks',
        pruning: 'Remove flowers to boost tuber growth',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Pineapple',
        watering: JSON.stringify({ frequency: 3, unit: 'days', rule: 'keep soil moist but not soggy' }),
        sunlight: 'Full sun, 6+ hours',
        fertilizer: 'Balanced fertilizer every month',
        pruning: 'Remove old leaves',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Lavender',
        watering: JSON.stringify({ frequency: 5, unit: 'days', rule: 'water deeply, let soil dry' }),
        sunlight: 'Full sun, 6+ hours',
        fertilizer: 'Light compost every 2 months',
        pruning: 'Trim after flowering',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Ginger',
        watering: JSON.stringify({ frequency: 4, unit: 'days', rule: 'keep soil moist, avoid waterlogging' }),
        sunlight: 'Partial sun, 4-5 hours',
        fertilizer: 'Organic compost every month',
        pruning: 'Harvest rhizomes when mature',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: 'Strawberry',
        watering: JSON.stringify({ frequency: 2, unit: 'days', rule: 'increase frequency in hot weather' }),
        sunlight: 'Full sun, 6+ hours',
        fertilizer: 'Balanced fertilizer every 2 weeks',
        pruning: 'Remove runners to boost fruit yield',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

      async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CareGuides', {
      species: [
        'Tulsi', 'Mango', 'Rose', 'AloeVera', 'MoneyPlant', 'Hibiscus',
        'Neem', 'Basil', 'Tomato', 'Chili', 'CurryLeaf', 'Mint',
        'Coriander', 'Spinach', 'Papaya', 'Banana', 'Guava', 'Peas',
        'Potato', 'Pineapple', 'Lavender', 'Ginger', 'Strawberry'
      ]
    }, {});
  }
};
