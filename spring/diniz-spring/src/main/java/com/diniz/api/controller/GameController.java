package com.diniz.api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diniz.domain.model.Game;
import com.diniz.domain.repository.GameRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/games")
public class GameController {

	private final GameRepository gameRepository;
	
	@GetMapping
	public List<Game> findAll() {
		return gameRepository.findAll();
	}
	
}
