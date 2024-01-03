package com.diniz;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.diniz.domain.model.Game;
import com.diniz.domain.repository.GameRepository;

@SpringBootApplication
public class DinizSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(DinizSpringApplication.class, args);
	}
	
	@Bean
	CommandLineRunner initDataBase(GameRepository gameRepository) {
		return args -> {
			gameRepository.deleteAll();

			Game newGame = new Game();
			newGame.setName("Tekken 7");
			newGame.setCategory("Luta");
			newGame.setPlatforms("Playstation 4");
			newGame.setReleaseYear(2015);
			newGame.setDescription("Tekken 7 é um jogo eletrônico"
					+ " de luta desenvolvido e publicado pela Bandai Namco Entertainment");
			newGame.setImg("https://cdn-ext.fanatical.com/production/"
					+ "product/1280x720/753730bd-7ba2-479c-bfdf-bac31b72ebea.jpeg");

			gameRepository.save(newGame);
		};
	}


}
