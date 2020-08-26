document.write('<div id="computer" class="computer flat"><div class="big-card"></div><table class="aligner-table"><td><h1>Mi az ebéd?</h1><br><p id="date"></p><br><div class="arrow" id="back"></div><div class="arrow" id="next"></div></td><td><p id="lunch"></p></td></table><table class="info-button" onclick="ToggleClass("info", "show"), ToggleClass("info-phone", "show")"><td><i class="fas fa-info-circle"></i><div>Információk</div></td></table><div id="info"><div class="background-close" onclick="ToggleClass("info", "show"), ToggleClass("info-phone", "show")"></div><div class="container"><div class="aligner"><table class="close-button" onclick="ToggleClass("info", "show"), ToggleClass("info-phone", "show")"><td>×</td></table></div><div class="title">Információk</div><div class="description"><table class="info-line dm-btn-m"><td>Sötét téma:</td><td><div id="darkmode-btn" class="darkmode-btn"><div onclick="ToggleClass("body","darkmode"), ToggleClass("darkmode-btn", "darkmode-btn-on"), ToggleClass("darkmode-btn-phone", "darkmode-btn-on"), ToggleSetting("darkmode")"class="line"></div><tableonclick="ToggleClass("body","darkmode"), ToggleClass("darkmode-btn", "darkmode-btn-on"), ToggleClass("darkmode-btn-phone", "darkmode-btn-on"), ToggleSetting("darkmode")"><td class="circle"><div class="small-circle"></div></td></table></div></td></table><table class="info-line"><td>Készítette:</td><td class="highlight">Menyhárt Attila</td></table><table class="info-line"><td>Forrás:</td><td><a target="_blank" href="http://gek.hu/" class="link">GMK</a></td></table><table class="info-line"><td>Használt font:</td><td><a target="_blank" href="https://fonts.google.com/specimen/Roboto" class="link">Roboto</a></td></table><table class="info-line"><td>Ikonok:</td><td><a target="_blank" href="https://fontawesome.com/" class="link">Fontawesome</a></td></table><div class="text">Az oldal azon győri középiskolák étlapját mutatja, amik a GMK-tól kapják az ebédet.</div></div></div></div></div><div class="phone"><table class="centerer"><td><h1>Mi az ebéd?</h1></td></table><table class="centerer"><td><p id="lunch-phone"></p></td></table><p id="date-phone"></p><br><div class="arrow" id="back-phone"></div><div class="arrow" id="next-phone"></div><table class="info-button" onclick="ToggleClass("info", "show"), ToggleClass("info-phone", "show")"><td><i class="fas fa-info-circle"></i>Információk</td></table><div id="info-phone"><div class="background-close" onclick="ToggleClass("info", "show"), ToggleClass("info-phone", "show")"></div><div class="container"><div class="aligner"><table class="close-button" onclick="ToggleClass("info", "show"), ToggleClass("info-phone", "show")"><td>×</td></table></div><div class="title">Információk</div><div class="description"><table class="info-line dm-btn-m"><td>Sötét téma:</td><td><div id="darkmode-btn-phone" class="darkmode-btn"><div onclick="ToggleClass("body","darkmode"), ToggleClass("darkmode-btn", "darkmode-btn-on"), ToggleClass("darkmode-btn-phone", "darkmode-btn-on"), ToggleSetting("darkmode")"class="line"></div><tableonclick="ToggleClass("body","darkmode"), ToggleClass("darkmode-btn", "darkmode-btn-on"), ToggleClass("darkmode-btn-phone", "darkmode-btn-on"), ToggleSetting("darkmode")"><td class="circle"><div class="small-circle"></div></td></table></div></td></table><table class="info-line"><td>Készítette:</td><td class="highlight">Menyhárt Attila</td></table><table class="info-line"><td>Forrás:</td><td><a target="_blank" href="http://gek.hu/" class="link">GMK</a></td></table><table class="info-line"><td>Használt font:</td><td><a target="_blank" href="https://fonts.google.com/specimen/Roboto" class="link">Roboto</a></td></table><table class="info-line"><td>Ikonok:</td><td><a target="_blank" href="https://fontawesome.com/" class="link">Fontawesome</a></td></table><div class="text">Az oldal azon győri középiskolák étlapját mutatja, amik a GMK-tól kapják az ebédet.</div></div></div></div></div>');

//     <div id="computer" class="computer flat">
//     <div class="big-card"></div>
//     <table class="aligner-table">
//         <td>
//             <h1>Mi az ebéd?</h1><br>
//             <p id="date"></p><br>
//             <div class="arrow" id="back"></div>
//             <div class="arrow" id="next"></div>
//         </td>
//         <td>
//             <p id="lunch"></p>
//         </td>
//     </table>
//     <table class="info-button" onclick="ToggleClass('info', 'show'), ToggleClass('info-phone', 'show')">
//         <td>
//             <i class="fas fa-info-circle"></i>
//             <div>Információk</div>
//         </td>
//     </table>
//     <div id="info">
//         <div class="background-close" onclick="ToggleClass('info', 'show'), ToggleClass('info-phone', 'show')"></div>
//         <div class="container">
//             <div class="aligner">
//                 <table class="close-button" onclick="ToggleClass('info', 'show'), ToggleClass('info-phone', 'show')">
//                     <td>×</td>
//                 </table>
//             </div>
//             <div class="title">Információk</div>
//             <div class="description">
//                 <table class="info-line dm-btn-m">
//                     <td>Sötét téma:</td>
//                     <td>
//                         <div id="darkmode-btn" class="darkmode-btn">
//                             <div onclick="ToggleClass('body','darkmode'), ToggleClass('darkmode-btn', 'darkmode-btn-on'), ToggleClass('darkmode-btn-phone', 'darkmode-btn-on'), ToggleSetting('darkmode')"
//                                 class="line"></div>
//                             <table
//                                 onclick="ToggleClass('body','darkmode'), ToggleClass('darkmode-btn', 'darkmode-btn-on'), ToggleClass('darkmode-btn-phone', 'darkmode-btn-on'), ToggleSetting('darkmode')">
//                                 <td class="circle">
//                                     <div class="small-circle"></div>
//                                 </td>
//                             </table>
//                         </div>
//                     </td>
//                 </table>
//                 <table class="info-line">
//                     <td>Készítette:</td>
//                     <td class="highlight">Menyhárt Attila</td>
//                 </table>
//                 <table class="info-line">
//                     <td>Forrás:</td>
//                     <td><a target="_blank" href="http://gek.hu/" class="link">GMK</a></td>
//                 </table>
//                 <table class="info-line">
//                     <td>Használt font:</td>
//                     <td><a target="_blank" href="https://fonts.google.com/specimen/Roboto" class="link">Roboto</a>
//                     </td>
//                 </table>
//                 <table class="info-line">
//                     <td>Ikonok:</td>
//                     <td><a target="_blank" href="https://fontawesome.com/" class="link">Fontawesome</a></td>
//                 </table>
//                 <div class="text">
//                     Az oldal azon győri középiskolák étlapját mutatja, amik a GMK-tól kapják az ebédet.
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// <div class="phone">
//     <table class="centerer">
//         <td>
//             <h1>Mi az ebéd?</h1>
//         </td>
//     </table>
//     <table class="centerer">
//         <td>
//             <p id="lunch-phone"></p>
//         </td>
//     </table>
//     <p id="date-phone"></p><br>
//     <div class="arrow" id="back-phone"></div>
//     <div class="arrow" id="next-phone"></div>
//     <table class="info-button" onclick="ToggleClass('info', 'show'), ToggleClass('info-phone', 'show')">
//         <td>
//             <i class="fas fa-info-circle"></i>
//             Információk
//         </td>
//     </table>
//     <div id="info-phone">
//         <div class="background-close" onclick="ToggleClass('info', 'show'), ToggleClass('info-phone', 'show')"></div>
//         <div class="container">
//             <div class="aligner">
//                 <table class="close-button" onclick="ToggleClass('info', 'show'), ToggleClass('info-phone', 'show')">
//                     <td>×</td>
//                 </table>
//             </div>
//             <div class="title">Információk</div>
//             <div class="description">
//                 <table class="info-line dm-btn-m">
//                     <td>Sötét téma:</td>
//                     <td>
//                         <div id="darkmode-btn-phone" class="darkmode-btn">
//                             <div onclick="ToggleClass('body','darkmode'), ToggleClass('darkmode-btn', 'darkmode-btn-on'), ToggleClass('darkmode-btn-phone', 'darkmode-btn-on'), ToggleSetting('darkmode')"
//                                 class="line"></div>
//                             <table
//                                 onclick="ToggleClass('body','darkmode'), ToggleClass('darkmode-btn', 'darkmode-btn-on'), ToggleClass('darkmode-btn-phone', 'darkmode-btn-on'), ToggleSetting('darkmode')">
//                                 <td class="circle">
//                                     <div class="small-circle"></div>
//                                 </td>
//                             </table>
//                         </div>
//                     </td>
//                 </table>
//                 <table class="info-line">
//                     <td>Készítette:</td>
//                     <td class="highlight">Menyhárt Attila</td>
//                 </table>
//                 <table class="info-line">
//                     <td>Forrás:</td>
//                     <td><a target="_blank" href="http://gek.hu/" class="link">GMK</a></td>
//                 </table>
//                 <table class="info-line">
//                     <td>Használt font:</td>
//                     <td><a target="_blank" href="https://fonts.google.com/specimen/Roboto" class="link">Roboto</a>
//                     </td>
//                 </table>
//                 <table class="info-line">
//                     <td>Ikonok:</td>
//                     <td><a target="_blank" href="https://fontawesome.com/" class="link">Fontawesome</a></td>
//                 </table>
//                 <div class="text">
//                     Az oldal azon győri középiskolák étlapját mutatja, amik a GMK-tól kapják az ebédet.
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>