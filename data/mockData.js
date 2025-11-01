// data/mockData.js

/*
  Mock JSON data stored separately.
  This keeps App.js cleaner and allows easy updates later.
*/

export const MOCK = {
  races: [
    {
      id: 'r1',
      name: 'Monaco Grand Prix',
      date: '2025-05-25',
      circuit: 'Circuit de Monaco',
      winner: 'Max Verstappen',
      laps: 78,
    },
    {
      id: 'r2',
      name: 'British Grand Prix',
      date: '2025-07-06',
      circuit: 'Silverstone Circuit',
      winner: 'Lewis Hamilton',
      laps: 52,
    },
  ],
  drivers: [
    { id: 'd1', name: 'Max Verstappen', team: 'Red Bull Racing', number: 1, country: 'Netherlands' },
    { id: 'd2', name: 'Lewis Hamilton', team: 'Mercedes', number: 44, country: 'United Kingdom' },
    { id: 'd3', name: 'Charles Leclerc', team: 'Ferrari', number: 16, country: 'Monaco' },
  ],
  teams: [
    { id: 't1', name: 'Red Bull Racing', base: 'Milton Keynes, UK', championships: 6, drivers: ['Max Verstappen', 'Sergio Pérez'] },
    { id: 't2', name: 'Mercedes', base: 'Brackley, UK', championships: 8, drivers: ['Lewis Hamilton', 'George Russell'] },
    { id: 't3', name: 'Ferrari', base: 'Maranello, Italy', championships: 16, drivers: ['Charles Leclerc', 'Carlos Sainz'] },
  ],
  telemetrySamples: [
    {
      id: 'tel1',
      driver: 'Max Verstappen',
      session: 'Race Lap 12',
      speedKph: [310, 312, 308, 305, 315],
      throttlePercent: [100, 98, 95, 80, 100],
    },
    {
      id: 'tel2',
      driver: 'Lewis Hamilton',
      session: 'Qualifying Q3',
      speedKph: [300, 305, 307, 302, 308],
      throttlePercent: [95, 97, 99, 94, 96],
    },
  ],
  history: [
    { id: 'h1', season: 2024, champion: 'Max Verstappen', team: 'Red Bull Racing', races: 22 },
    { id: 'h2', season: 2023, champion: 'Max Verstappen', team: 'Red Bull Racing', races: 22 },
    { id: 'h3', season: 2022, champion: 'Max Verstappen', team: 'Red Bull Racing', races: 22 },
  ],
};
