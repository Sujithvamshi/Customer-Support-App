package com.axis.bank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.axis.bank.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
}

