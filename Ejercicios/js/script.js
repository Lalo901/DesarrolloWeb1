 let numero= parseInt(prompt('ingrese un valor'))
 document.write("<table border='1px'>")
 document.write("<th>numero</th><th>Resultado</th>")

 for( let i=1; i<=10; i++){
    document.write('<tr>'); // Abre una fila en la tabla
    document.write('<td style="text-align: center;">' + i + '*' + numero + '</td>'); // Celda con la operación i * numero
    document.write('<td style="text-align: center;">' + (i * numero) + '</td>'); // Celda con el resultado de la operación
    document.write('</tr>');

 }
 document.write("</table>")

 