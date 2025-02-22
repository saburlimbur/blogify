// utils/formatDate.js
export const formatDate = (createdAt) => {
  return new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const dummyPostArticle = [
  {
    id: 1,
    title:
      'Understanding color theory: the color wheel and finding complementary colors',
    content: [
      "Male sixth sea it a. Brought was signs female darkness signs form cattle land grass whose from subdue also they're their brought seas isn't, to day from bearing grass third midst after beginning man which you're. Dry, gathering beginning given made them evening.",
      // "Lights dry. Thing, likeness, forth shall replenish upon abundantly our green. Seed green sea that lesser divided creature beginning land him signs stars give firmament gathered. Wherein there their morning a he grass. Don't made moving for them bring creature us you'll tree second deep good unto good may. Us yielding.",
      // "Have. Man upon set multiply moved from under seasons abundantly earth brought a. They're open moved years saw isn't morning darkness. Over, waters, every let wherein great were fifth saw was lights very our place won't and him Third fourth moving him whales behold. Beast second stars lights great was don't green give subdue his. Third given made created, they're forth god replenish have whales first can't light was. Herb you'll them beast kind divided. Were beginning fly air multiply god Yielding sea don't were forth.",
    ],
    media:
      'https://dif.telkomuniversity.ac.id/wp-content/uploads/2024/10/coding.png',
    createdAt: '2025-02-19T14:08:07.087Z',
    updatedAt: '2025-02-19T14:08:07.087Z',
    authorId: 1,
    categoryId: 1,
    author: {
      id: 1,
      username: 'John Doe',
      email: 'alif@me.com',
      phone_number: '089123123123',
      password: '$2a$10$xWsXdnc6i9K8F/mNES5gD.4EQOQahD.IuSYSSmjBo.J06V6G4ebLK',
      position: 'Poetry',
      createdAt: '2025-02-19T12:25:20.671Z',
      updatedAt: '2025-02-19T12:25:20.671Z',
    },
    category: {
      id: 2,
      name: 'Teknologi',
      slug: 'teknologi',
    },
    tags: [
      {
        id: 5,
        tag_name: 'Tech',
        createdAt: '2025-02-19T14:08:07.087Z',
        updateAt: '2025-02-19T14:08:07.087Z',
      },
    ],
  },
];
