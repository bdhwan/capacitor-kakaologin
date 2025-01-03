import { WebPlugin } from '@capacitor/core';
import type { CapacitorKakaologinPlugin } from './definitions';

declare global {
  interface Window {
    Kakao: any; // You can replace 'any' with a more specific type if available
  }
}

export class CapacitorKakaologinWeb extends WebPlugin implements CapacitorKakaologinPlugin {
  private kakaoScriptId = 'kakao-js-sdk'; // Unique ID for the Kakao SDK script

  // Echo method
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  // Get Kakao access token and remove Kakao SDK
  async getAccessToken(): Promise<{ code?: string; error?: string }> {
    return { error: 'web sdk cannot get access token directly use getAuthToken method' };
  }

  async getAuthToken(web_key: string, returnUrl: string): Promise<{ code?: string; error?: string }> {
    console.log('getAccessToken in plugin', web_key, returnUrl);
    this.removeKakaoSdk();
    await this.loadKakaoSdk();
    if (typeof window['Kakao'] !== 'undefined') {
      window['Kakao'].init(web_key); // Initialize Kakao with your JavaScript key
    }

    if (typeof window['Kakao'] === 'undefined') {
      throw new Error('Kakao SDK not loaded');
    }

    const Kakao = window['Kakao'];
    Kakao.Auth.authorize({
      redirectUri: returnUrl,
    });

    this.removeKakaoSdk();
    return { error: 'web sdk cannot get' };
  }

  // Dynamically load the Kakao SDK
  private loadKakaoSdk(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Check if the script is already loaded
      if (document.getElementById(this.kakaoScriptId)) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.id = this.kakaoScriptId; // Set an ID to reference this script
      script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js';
      script.integrity = 'sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4';
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        console.log('Kakao SDK loaded!!!');
        resolve();
      };
      script.onerror = () => reject(new Error('Failed to load Kakao SDK'));
      document.head.appendChild(script);
    });
  }

  // Remove the Kakao SDK script after it is no longer needed
  private removeKakaoSdk(): void {
    const script = document.getElementById(this.kakaoScriptId);
    if (script) {
      document.head.removeChild(script); // Remove the script from the DOM
      console.log('Kakao SDK removed');
    }
  }
}
