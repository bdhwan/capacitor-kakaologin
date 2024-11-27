package com.bdhwan.capacitor.kakaologin

import android.util.Log
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import com.kakao.sdk.auth.model.OAuthToken

@CapacitorPlugin(name = "CapacitorKakaologin")
class CapacitorKakaologinPlugin : Plugin() {
    private val implementation = CapacitorKakaologin()

    @PluginMethod
    fun echo(call: PluginCall) {
        val value = call.getString("value")

        val ret = JSObject()
        ret.put("value", implementation.echo(value!!))
        call.resolve(ret)
    }


    @PluginMethod
    fun getAccessToken(call: PluginCall) {
        Log.i("Echo", "getAccessToken")
        val callback: (OAuthToken?, Throwable?) -> Unit = { token, error ->
            if (error != null) {
                Log.e("TAG", "!!!카카오계정으로 로그인 실패", error)
                val ret = JSObject()
                ret.put("error", "${error}")
                call.resolve(ret)
            } else if (token != null) {
                Log.i("TAG", "!!!카카오계정으로 로그인 성공 ${token.accessToken}")
                val ret = JSObject()
                ret.put("code", "${token.accessToken}")
                Log.i("TAG", "will resolve ${token.accessToken}")
                call.resolve(ret)
                Log.i("TAG", "after resolve ${token.accessToken}")
            }
        }
        implementation.getAccessToken(context, callback)
    }
}
