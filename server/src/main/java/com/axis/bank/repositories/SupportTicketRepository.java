package com.axis.bank.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.axis.bank.entities.SupportTicket;

public interface SupportTicketRepository extends JpaRepository<SupportTicket, Long> {
}

