package com.diniz.domain.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@EqualsAndHashCode
@Setter
@Getter
@Entity
public class Game {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(length = 100, nullable = false)
	private String name;
	
	@Column(length = 30, nullable = false)
	private String category;
	
	@Column(nullable = false)
	private String platforms;
	
	@Column(nullable = false)
	private Integer releaseYear;
	
	@Column(length = 200, nullable = false)
	private String description;
	
	@Column(nullable = false)
	private String img;

}
