import { CapacitorKakaologin } from 'capacitor-kakaologin';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    CapacitorKakaologin.echo({ value: inputValue })
}
