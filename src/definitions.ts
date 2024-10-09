export interface CapacitorKakaologinPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  getAccessToken(web_key: string, returnUrl: string): Promise<{ code?: string; error?: string }>;
}
