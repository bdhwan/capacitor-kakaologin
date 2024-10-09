import { registerPlugin } from '@capacitor/core';

import type { CapacitorKakaologinPlugin } from './definitions';

const CapacitorKakaologin = registerPlugin<CapacitorKakaologinPlugin>('CapacitorKakaologin', {
  web: () => import('./web').then((m) => new m.CapacitorKakaologinWeb()),
});

export * from './definitions';
export { CapacitorKakaologin };
