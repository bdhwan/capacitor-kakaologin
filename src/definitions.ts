export interface CapacitorKakaologinPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  getAccessToken(web_key: string, returnUrl: string): Promise<{ code?: string; error?: string }>;
  logout(web_key: string): Promise<{ result: boolean; error?: string }>;
  unlink(web_key: string): Promise<{ result: boolean; error?: string }>;
}
