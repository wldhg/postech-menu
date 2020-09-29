import http from 'http';

const version = String(process.env.NEXT_PUBLIC_ENDPOINT_VERSION);

const getEndpointVersion = (I: http.IncomingMessage, O: http.OutgoingMessage) => {
  // Set Locale
  O.end(JSON.stringify({ version }));
};

export default getEndpointVersion;
