package com.axis.bank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.axis.bank.model.SupportTicket;

public interface SupportTicketRepository extends JpaRepository<SupportTicket, Long> {
    // You can add custom query methods here if needed
}
