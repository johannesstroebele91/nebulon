interface Quote {
  id: number;
  author: string;
  quote: string;
  userId: number;
}

export const quotes: Quote[] = [
  {
    id: 1,
    author: "Arnold Schwarzenegger",
    quote: "If it jiggles, it's fat.",
    userId: 2,
  },
  {
    id: 2,
    author: "Arnold Schwarzenegger",
    quote:
      "The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character.",
    userId: 2,
  },
  {
    id: 3,
    author: "Muhammad Ali",
    quote:
      "I don't count my sit-ups; I only start counting when it starts hurting because they’re the only ones that count.",
    userId: 3,
  },
  {
    id: 4,
    author: "Muhammad Ali",
    quote:
      "I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.’",
    userId: 3,
  },
  {
    id: 5,
    author: "Bruce Lee",
    quote:
      "It's not the daily increase but daily decrease. Hack away at the unessential.",
    userId: 3,
  },
  {
    id: 6,
    author: "Chris Evans",
    quote:
      "I have a love-hate relationship with the gym. Every time I go, I hate it. But then I feel great afterwards, so I love it.",
    userId: 1,
  },
  {
    id: 7,
    author: "Steve Jobs",
    quote: "The only way to do great work is to love what you do.",
    userId: 1,
  },
  {
    id: 8,
    author: "Rich Piana",
    quote:
      "If you still look good at the end of your workout, you didn't train hard enough.",
    userId: 1,
  },
  {
    id: 9,
    author: "Henry Ward Beecher",
    quote:
      "I always say, 'The body is like a piano, and happiness is like music.' It is needful to have the instrument in good order.",
    userId: 2,
  },
  {
    id: 10,
    author: "Markus Rühl",
    quote: "I don't do this to be healthy, I do this to get big muscles.",
    userId: 3,
  },
];
