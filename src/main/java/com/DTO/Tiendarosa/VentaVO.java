package com.DTO.Tiendarosa;

public class VentaVO {
	private Long id_usuario;
	private String nombre;
	private int totaliva;
	private int numrecibo;
	
	public int getNumrecibo() {
		return numrecibo;
	}
	public void setNumrecibo(int numrecibo) {
		this.numrecibo = numrecibo;
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
