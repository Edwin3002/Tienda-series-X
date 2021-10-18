$(document).ready(function(){

	$("#listarC").click(function(){
        $.get("http://localhost:8080/listaclientes",function(data, status){
            if(status=="success"){
                let longitud = data.length;
               let salida ="<br><div class=conten><table>";
                salida = salida + "<tr><th colspan='5'>TABLA DE CLIENTES</th></tr><td>CEDULA</td><td>NOMBRE</td><td>CORREO</td><td>DIRECCION</td><td>TELEFONO</td></tr>";
                for(let i=0;i<longitud;i++){
                    salida = salida + "<tr>";
                    salida = salida + "<td>"+data[i].id_usuario+"</td>";
                   
					salida = salida + "<td>"+data[i].nombre+"</td>";
					salida = salida + "<td>"+data[i].correo+"</td>";
					salida = salida + "<td>"+data[i].direccion+"</td>";
                    salida = salida + "<td>"+data[i].telefono+"</td>";
					salida = salida + "</tr>";
                }
                salida = salida +"</table>";
                $("#mensaje").html(salida);
            }
        });
    });

		$("#listarU").click(function(){
        $.get("http://localhost:8080/listausuarios",function(data, status){
            if(status=="success"){
                let longitud = data.length;
                let salida ="<br><table>";
                salida = salida + "<tr><th colspan='5'>TABLA DE USUARIOS</th></tr><tr><td>CEDULA</td><td>NOMBRE</td><td>CORREO</td><td>USUARIO</td><td>CLAVE</td></tr>";
                for(let i=0;i<longitud;i++){
                    salida = salida + "<tr>";
                    salida = salida + "<td>"+data[i].id_usuario+"</td>";
                    
					salida = salida + "<td>"+data[i].nombre+"</td>";
					salida = salida + "<td>"+data[i].correo+"</td>";
					salida = salida + "<td>"+data[i].usuario+"</td>";
                    salida = salida + "<td>"+data[i].clave+"</td>";
                    salida = salida + "</tr>";
                }
                salida = salida +"</table>";
                $("#mensaje").html(salida);
            }
        });
    });

$("#listarProvee").click(function(){
        $.get("http://localhost:8080/listaproveedores",function(data, status){
            if(status=="success"){
                let longitud = data.length;
                let salida ="<br><table>";
                salida = salida + "<tr><th colspan='5'>TABLA DE PROVEEDORES</th></tr><td>NIT</td><td>NOMBRE</td><td>CIUDAD</td><td>DIRECCION</td><td>TELEFONO</td></tr>";
                for(let i=0;i<longitud;i++){
                    salida = salida + "<tr>";
                    salida = salida + "<td>"+data[i].id_usuario+"</td>";
                   
					salida = salida + "<td>"+data[i].nombre+"</td>";
					salida = salida + "<td>"+data[i].ciudad+"</td>";
					salida = salida + "<td>"+data[i].direccion+"</td>";
                    salida = salida + "<td>"+data[i].telefono+"</td>";
                }
                salida = salida +"</table>";
                $("#mensaje").html(salida);
            }
        });
    });

$("#listarProduc").click(function(){
        $.get("http://localhost:8080/listaproductos",function(data, status){
            if(status=="success"){
                let longitud = data.length;
                let salida ="<br><table>";
                salida = salida + "<tr><th colspan='6'>TABLA DE PRODUCTOS</th></tr><tr><td>CODIGO</td><td>NOMBRE</td><td>NIT PROVEEDOR</td><td>PRECIO</td><td>IVA</td><td>VENTA</td></tr>";
                for(let i=0;i<longitud;i++){
                    salida = salida + "<tr>";
                    salida = salida + "<td>"+data[i].id_usuario+"</td>";
                   
					salida = salida + "<td>"+data[i].nombre+"</td>";
					salida = salida + "<td>"+data[i].nitprove+"</td>";
					salida = salida + "<td>"+data[i].precio+"</td>";
                    salida = salida + "<td>"+data[i].iva+"</td>";
					salida = salida + "<td>"+data[i].venta+"</td>";
					salida = salida + "</tr>";
                }
                salida = salida +"</table>";
                $("#mensaje").html(salida);
            }
        });
    });
		

$("#listarV").click(function(){
        $.get("http://localhost:8080/listaventas",function(data, status){
            if(status=="success"){
                let longitud = data.length;
                let salida ="<br><table>";
                salida = salida + "<tr><th colspan='6'>TABLA DE VENTAS</th></tr><tr><td>N. RECIBO</td><td>CEDULA CLIENTE</td><td>NOMBRE CLIENTE</td><td>JUEGO</td><td>CANTIDAD</td><td>TOTAL</td></tr>";
                for(let i=0;i<longitud;i++){
                    salida = salida + "<tr>";
					salida = salida + "<td>"+data[i].n_recibo+"</td>";
                    salida = salida + "<td>"+data[i].id_usuario+"</td>";
                    
					salida = salida + "<td>"+data[i].nombre+"</td>";
					
					salida = salida + "<td>"+data[i].juego+"</td>";
					salida = salida + "<td>"+data[i].cantidad+"</td>";

					salida = salida + "<td>"+data[i].totaliva+"</td>";
					
                }
                salida = salida +"</table>";
                $("#mensaje").html(salida);
            }
        });
    });


  
});
/**
 * 
 */