package com.axis.bank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.axis.bank.model.Feedback;
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    // You can add custom query methods here if needed
}

