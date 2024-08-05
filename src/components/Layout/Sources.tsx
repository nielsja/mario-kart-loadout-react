import { Fragment } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import './Sources.css';

interface Source {
  url: string;
  displayName: string;
  description: string;
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function renderTooltip(props: any, desc: string) {
    return (
      <Tooltip {...props} className="source-description">
        {desc}
      </Tooltip>
    );
  }

  const sourceListItems = sources.map((src, i) => {
    return (
      <Fragment key={`source-${i}`}>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => renderTooltip(props, src.description)}
        >
          <a href={src.url} className="source-link">
            {src.displayName}
          </a>
        </OverlayTrigger>
        {i < sources.length - 1 ? ' | ' : ''}
      </Fragment>
    );
  });

  return (
    <>
      <div className="sources-header">Sources</div>
      <div className="sources">{sourceListItems}</div>
    </>
  );
}

export default Sources;
