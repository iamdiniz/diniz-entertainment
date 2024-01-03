package com.diniz.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.diniz.domain.model.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

}
