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
			
			Game newGame2 = new Game();
			newGame2.setName("Megaman X4");
			newGame2.setCategory("Ação");
			newGame2.setPlatforms("Playstation");
			newGame2.setReleaseYear(1997);
			newGame2.setDescription("Mega Man X4 é o quarto jogo da franquia Mega Man X."
					+ " Foi originalmente lançado em 1º de agosto de 1997 para o Sega Saturn e PlayStation.");
			newGame2.setImg("https://2.bp.blogspot.com/-iE1i_lk7VpM/Vb01mTYUPKI/AAAAAAAADBk/tgphtr8qVBQ/s1600/megaman_x4.jpg");
			
			Game newGame3 = new Game();
			newGame3.setName("Dark Souls");
			newGame3.setCategory("Role Playing");
			newGame3.setPlatforms("Xbox 360");
			newGame3.setReleaseYear(2011);
			newGame3.setDescription("Dark Souls é um jogo eletrônico de RPG de ação desenvolvido pela FromSoftware e publicado pela Namco Bandai Games");
			newGame3.setImg("https://s2-techtudo.glbimg.com/vrAOgq5ABsP8sBfbsZCYfFX2DDg=/"
					+ "0x0:695x392/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/"
					+ "AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/V/u/zndjdOTUAGNJIpsB8I5w/2015-02-10-dark-souls-imagem-capa.jpg");
			
			Game newGame4 = new Game();
			newGame4.setName("Metal Gear Solid 3: Snake Eater");
			newGame4.setCategory("Ação");
			newGame4.setPlatforms("Playstation 2");
			newGame4.setReleaseYear(2004);
			newGame4.setDescription("Metal Gear Solid 3: Snake Eater é um jogo de espionagem e ação dirigido por Hideo Kojima.");
			newGame4.setImg("https://www.konami.com/products_master/eu_publish/mgs3se/eu/en/images/64_mgs3se_gamemain.jpg");

			gameRepository.save(newGame);
			gameRepository.save(newGame2);
			gameRepository.save(newGame3);
			gameRepository.save(newGame4);
		};
	}


}
