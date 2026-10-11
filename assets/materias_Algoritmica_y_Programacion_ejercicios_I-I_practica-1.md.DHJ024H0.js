import{_ as s,o as n,c as e,a2 as l}from"./chunks/framework.CgxQ0r6v.js";const m=JSON.parse('{"title":"Práctica 1: Secuencialidad y Metodología de las 4 Fases","description":"Ejercicios prácticos y código fuente en JavaScript para Algorítmica y Programación","frontmatter":{"title":"Práctica 1: Secuencialidad y Metodología de las 4 Fases","description":"Ejercicios prácticos y código fuente en JavaScript para Algorítmica y Programación"},"headers":[],"relativePath":"materias/Algoritmica_y_Programacion/ejercicios/I-I/practica-1.md","filePath":"materias/Algoritmica_y_Programacion/ejercicios/I-I/practica-1.md"}'),i={name:"materias/Algoritmica_y_Programacion/ejercicios/I-I/practica-1.md"};function o(p,a,c,t,r,d){return n(),e("div",null,[...a[0]||(a[0]=[l(`<h1 id="💻-practica-1-secuencialidad-y-metodologia-de-las-4-fases" tabindex="-1">💻 Práctica 1: Secuencialidad y Metodología de las 4 Fases <a class="header-anchor" href="#💻-practica-1-secuencialidad-y-metodologia-de-las-4-fases" aria-label="Permalink to &quot;💻 Práctica 1: Secuencialidad y Metodología de las 4 Fases&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">📌 Información de Cátedra</p><ul><li><strong>Materia:</strong> Algorítmica y Programación</li><li><strong>Trimestre:</strong> I-I</li><li><strong>Guía Teórica Vinculada:</strong> <a href="/pnfi-doc/materias/Algoritmica_y_Programacion/documentacion/I-I/Lectura_Catedra_Evaluacion_1">Lectura de Cátedra (L1)</a></li></ul></div><hr><h2 id="📋-enunciados-y-actividades-practicas" tabindex="-1">📋 Enunciados y Actividades Prácticas <a class="header-anchor" href="#📋-enunciados-y-actividades-practicas" aria-label="Permalink to &quot;📋 Enunciados y Actividades Prácticas&quot;">​</a></h2><p>Esta guía contiene los primeros ejercicios de lógica para aplicar la <strong>Metodología de las 4 Fases</strong>: Declaración, Entrada, Cálculo y Salida. Todos los ejercicios deben resolverse de forma secuencial (sin usar condiciones ni bucles todavía).</p><hr><ol><li><p><strong>Cálculo de Área de un Rectángulo</strong> Desarrolle un programa que permita calcular el área de un rectángulo. El sistema debe solicitar al usuario la medida de la base y la medida de la altura (en centímetros). Realice el cálculo matemático correspondiente y muestre el resultado final indicando el área total.</p></li><li><p><strong>Conversor de Moneda (USD a BS)</strong> Escriba un algoritmo que actúe como un conversor de divisas sencillo. El programa debe solicitar la cantidad de Dólares ($) que el usuario desea cambiar y el tipo de cambio actual (precio del dólar en Bolívares). Calcule el equivalente en Bolívares y muestre el monto total resultante.</p></li><li><p><strong>Promedio de Calificaciones Semanales</strong> Construya un programa que ayude a un estudiante a saber su rendimiento inicial. El sistema debe solicitar tres notas individuales (correspondientes a tres actividades). Sume las tres notas, calcule el promedio aritmético y reporte al usuario tanto la suma total como el promedio obtenido.</p></li><li><p><strong>Cálculo de Factura con IVA</strong> Diseñe un programa que genere el total de una compra sencilla. El sistema debe pedir el precio de un producto y la cantidad comprada. Calcule el subtotal, luego calcule el monto del IVA (16%) y finalmente muestre el subtotal, el monto del impuesto y el total neto a pagar.</p></li></ol><hr><hr><h2 id="📝-solucionario-logico-pseudocodigo-metodologia" tabindex="-1">📝 Solucionario Lógico (Pseudocódigo / Metodología) <a class="header-anchor" href="#📝-solucionario-logico-pseudocodigo-metodologia" aria-label="Permalink to &quot;📝 Solucionario Lógico (Pseudocódigo / Metodología)&quot;">​</a></h2><p>Este documento contiene la resolución lógica de los ejercicios de práctica siguiendo la <strong>Metodología de las 4 Fases</strong>.</p><hr><h3 id="_1-calculo-de-area-de-un-rectangulo" tabindex="-1">1. Cálculo de Área de un Rectángulo <a class="header-anchor" href="#_1-calculo-de-area-de-un-rectangulo" aria-label="Permalink to &quot;1. Cálculo de Área de un Rectángulo&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Algoritmo CalcularAreaRectangulo</span></span>
<span class="line"><span>Inicio</span></span>
<span class="line"><span>    // 1. Declaración</span></span>
<span class="line"><span>    Variable base, altura, area: Real</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 2. Entrada</span></span>
<span class="line"><span>    Escribir &quot;Ingrese la base (cm):&quot;</span></span>
<span class="line"><span>    base = Leer()</span></span>
<span class="line"><span>    Escribir &quot;Ingrese la altura (cm):&quot;</span></span>
<span class="line"><span>    altura = Leer()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 3. Cálculo</span></span>
<span class="line"><span>    area = base * altura</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 4. Salida</span></span>
<span class="line"><span>    Escribir &quot;El área total del rectángulo es: &quot;, area, &quot; cm²&quot;</span></span>
<span class="line"><span>Fin</span></span></code></pre></div><hr><h3 id="_2-conversor-de-moneda-usd-a-bs" tabindex="-1">2. Conversor de Moneda (USD a BS) <a class="header-anchor" href="#_2-conversor-de-moneda-usd-a-bs" aria-label="Permalink to &quot;2. Conversor de Moneda (USD a BS)&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Algoritmo ConvertirDolaresABolivares</span></span>
<span class="line"><span>Inicio</span></span>
<span class="line"><span>    // 1. Declaración</span></span>
<span class="line"><span>    Variable dolares, tasa_cambio, bolivares: Real</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 2. Entrada</span></span>
<span class="line"><span>    Escribir &quot;Ingrese la cantidad de Dólares ($):&quot;</span></span>
<span class="line"><span>    dolares = Leer()</span></span>
<span class="line"><span>    Escribir &quot;Ingrese el tipo de cambio actual (BS por $):&quot;</span></span>
<span class="line"><span>    tasa_cambio = Leer()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 3. Cálculo</span></span>
<span class="line"><span>    bolivares = dolares * tasa_cambio</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 4. Salida</span></span>
<span class="line"><span>    Escribir &quot;El monto total en Bolívares es: &quot;, bolivares, &quot; BS&quot;</span></span>
<span class="line"><span>Fin</span></span></code></pre></div><hr><h3 id="_3-promedio-de-calificaciones-semanales" tabindex="-1">3. Promedio de Calificaciones Semanales <a class="header-anchor" href="#_3-promedio-de-calificaciones-semanales" aria-label="Permalink to &quot;3. Promedio de Calificaciones Semanales&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Algoritmo CalcularPromedioNotas</span></span>
<span class="line"><span>Inicio</span></span>
<span class="line"><span>    // 1. Declaración</span></span>
<span class="line"><span>    Variable n1, n2, n3, suma, promedio: Real</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 2. Entrada</span></span>
<span class="line"><span>    Escribir &quot;Ingrese la nota 1:&quot;</span></span>
<span class="line"><span>    n1 = Leer()</span></span>
<span class="line"><span>    Escribir &quot;Ingrese la nota 2:&quot;</span></span>
<span class="line"><span>    n2 = Leer()</span></span>
<span class="line"><span>    Escribir &quot;Ingrese la nota 3:&quot;</span></span>
<span class="line"><span>    n3 = Leer()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 3. Cálculo</span></span>
<span class="line"><span>    suma = n1 + n2 + n3</span></span>
<span class="line"><span>    promedio = suma / 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 4. Salida</span></span>
<span class="line"><span>    Escribir &quot;Suma total: &quot;, suma</span></span>
<span class="line"><span>    Escribir &quot;Promedio final: &quot;, promedio</span></span>
<span class="line"><span>Fin</span></span></code></pre></div><hr><h3 id="_4-calculo-de-factura-con-iva" tabindex="-1">4. Cálculo de Factura con IVA <a class="header-anchor" href="#_4-calculo-de-factura-con-iva" aria-label="Permalink to &quot;4. Cálculo de Factura con IVA&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Algoritmo GenerarFacturaIVA</span></span>
<span class="line"><span>Inicio</span></span>
<span class="line"><span>    // 1. Declaración</span></span>
<span class="line"><span>    Variable precio, cantidad, subtotal, iva, total: Real</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 2. Entrada</span></span>
<span class="line"><span>    Escribir &quot;Ingrese el precio del producto:&quot;</span></span>
<span class="line"><span>    precio = Leer()</span></span>
<span class="line"><span>    Escribir &quot;Ingrese la cantidad comprada:&quot;</span></span>
<span class="line"><span>    cantidad = Leer()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 3. Cálculo</span></span>
<span class="line"><span>    subtotal = precio * cantidad</span></span>
<span class="line"><span>    iva = subtotal * 0.16</span></span>
<span class="line"><span>    total = subtotal + iva</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 4. Salida</span></span>
<span class="line"><span>    Escribir &quot;Subtotal: &quot;, subtotal</span></span>
<span class="line"><span>    Escribir &quot;IVA (16%): &quot;, iva</span></span>
<span class="line"><span>    Escribir &quot;Total Neto a Pagar: &quot;, total</span></span>
<span class="line"><span>Fin</span></span></code></pre></div><hr>`,24)])])}const g=s(i,[["render",o]]);export{m as __pageData,g as default};
