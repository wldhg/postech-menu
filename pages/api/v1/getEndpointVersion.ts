import http from 'http';
import clItem from 'resources/changes.yml';

const versions = Object.keys(clItem).sort();
const currentVersion = versions[versions.length - 1];

const getEndpointVersion = (I: http.IncomingMessage, O: http.OutgoingMessage) => {
  O.setHeader('Content-Type', 'application/json; charset=utf-8');
  O.end(JSON.stringify({ currentVersion }));
};

export default getEndpointVersion;
