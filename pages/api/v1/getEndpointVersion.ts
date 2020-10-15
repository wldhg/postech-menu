import http from 'http';
import clItem from 'resources/changes.yml';

const currentVersion = Object.keys(clItem).sort().reverse()[0];

const getEndpointVersion = (I: http.IncomingMessage, O: http.OutgoingMessage) => {
  O.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (process.env.NEXT_PUBLIC_DISABLE_SELF_API === 'true') {
    O.end(JSON.stringify({ listen: 'API endpoint functionality is disabled for this instance.' }));
  } else {
    O.end(JSON.stringify({ version: currentVersion }));
  }
};

export default getEndpointVersion;
