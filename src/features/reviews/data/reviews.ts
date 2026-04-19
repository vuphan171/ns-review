import { faker } from '@faker-js/faker'

faker.seed(12345)

export const reviews = Array.from({ length: 50 }, () => {
  const slaValues = ['ON TIME', 'OVERDUE', '30-120M', 'CLOSED'] as const

  return {
    id: faker.number.int({ min: 1000, max: 9999 }),
    customer: faker.person.fullName(),
    businessName: faker.company.name(),
    reviewedAt: faker.date.past(),
    rating: faker.number.int({ min: 1, max: 5 }),
    feedback: faker.lorem.paragraph({ min: 1, max: 3 }),
    ownerName: faker.person.fullName(),
    slaValue: faker.helpers.arrayElement(slaValues),
  }
})
