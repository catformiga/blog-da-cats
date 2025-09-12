// app/data/posts.ts
export async function getPosts() {
  return [
    {
      slug: 'life-is-strange-e-a-psicologia',
      title: 'Life is Strange e a Psicologia: escolhas que curam',
      date: '2025-09-10',
      summary:
        'Um olhar sobre as escolhas do jogo e a relação com a psicologia.',
      category: 'games-e-emocoes',
    },
    {
      slug: 'o-dorama-que-mudou-minha-visao',
      title: 'O dorama que mudou minha visão sobre empatia',
      date: '2025-09-08',
      summary:
        'Como um dorama pode transformar nossa forma de entender o outro.',
      category: 'doramas-e-series',
    },
  ];
}
