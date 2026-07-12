/**
 * MÓDULO: DESCARGA
 * Detecta el sistema operativo y descarga el instalador correcto
 */

const LINK_WINDOWS = "https://github.com/05jared/ESTADIAAA/releases/download/v1.0.0/App.Ema.Setup.1.0.0.exe";
const LINK_ANDROID = "https://github.com/05jared/ESTADIAAA/releases/download/v1.0.0/app-ema.apk"; // actualizar cuando exista

function detectarSistema() {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return "android";
  if (/windows/i.test(ua)) return "windows";
  return "otro";
}

function actualizarBotonDescarga() {
  const boton = document.getElementById('btn-descargar-pc');
  const texto = document.getElementById('btn-descargar-pc-texto');
  const icono = document.getElementById('btn-descargar-pc-icon');
  if (!boton) return;

  const sistema = detectarSistema();
  if (sistema === 'android') {
    icono.textContent = '📱';
    texto.textContent = 'Descargar para Android';
  } else {
    icono.textContent = '💻';
    texto.textContent = 'Descargar para PC';
  }
}

document.addEventListener('DOMContentLoaded', actualizarBotonDescarga);

function descargarApp() {
  const sistema = detectarSistema();
  if (sistema === "windows") {
    window.location.href = LINK_WINDOWS;
  } else if (sistema === "android") {
    window.location.href = LINK_ANDROID;
  } else {
    const elegir = confirm("¿Usas Windows? Aceptar = Windows, Cancelar = Android");
    window.location.href = elegir ? LINK_WINDOWS : LINK_ANDROID;
  }
}