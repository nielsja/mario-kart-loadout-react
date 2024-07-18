interface Source {
  url: string;
  displayName: string;
  description?: string;
}
function Sources() {
  const sources: Source[] = [
    {
      url: 'https://www.mariowiki.com/Mario_Kart_8_Deluxe_in-game_statistics',
      displayName: 'Super Mario Wiki (MK8 page)',
      description: 'In-game statistics for drivers, karts, gliders, and tires.',
    },
    {
      url: 'https://www.mariowiki.com/Gallery:Mario_Kart_8_Deluxe',
      displayName: 'Super Mario Wiki (Gallery)',
      description:
        'Assets pulled for drivers, karts, gliders, tires, and various UI elements.',
    },
    {
      url: 'https://mk8dxbuilder.com/',
      displayName: 'MK8 Deluxe Builder',
      description:
        'Inspiration for UI design only. No code was copied from this site.',
    },
  ];

  const sourceListItems = sources.map((src, i) => {
    return (
      <li key={`src-${i}`}>
        <a href={src.url}>{src.displayName}</a>: <i>{src.description}</i>
      </li>
    );
  });

  return (
    <>
      <p>Sources</p>
      <div>
        <ul>{sourceListItems}</ul>
      </div>
    </>
  );
}

export default Sources;
