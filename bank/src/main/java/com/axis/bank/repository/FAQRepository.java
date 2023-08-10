package com.axis.bank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.axis.bank.model.FAQ;

public interface FAQRepository extends JpaRepository<FAQ, Long> {
    // You can add custom query methods here if needed
}
