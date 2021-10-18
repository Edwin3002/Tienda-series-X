package com.DTO.Tiendarosa;

public class VentaVO {
	private Long id_usuario;
	private String nombre;
	
	private int n_recibo;
	private String juego;
	private int cantidad;
	private int totaliva;
	

	
	public String getJuego() {
		return juego;
	}
	public void setJuego(String juego) {
		this.juego = juego;
	}
	public int getCantidad() {
		return cantidad;
	}
	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
	public int getN_recibo() {
		return n_recibo;
	}
	public void setN_recibo(int n_recibo) {
		this.n_recibo = n_recibo;
	}
	public Long getId_usuario() {
		return id_usuario;
	}
	public void setId_usuario(Long id_usuario) {
		this.id_usuario = id_usuario;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public int getTotaliva() {
		return totaliva;
	}
	public void setTotaliva(int totaliva) {
		this.totaliva = totaliva;
	}

	
}
