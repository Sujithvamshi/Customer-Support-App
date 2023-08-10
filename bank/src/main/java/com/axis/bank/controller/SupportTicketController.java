package com.axis.bank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.axis.bank.model.SupportTicket;
import com.axis.bank.repository.SupportTicketRepository;

@RestController
@RequestMapping("/tickets")
public class SupportTicketController {

    @Autowired
    private SupportTicketRepository ticketRepository;

    @GetMapping
    public List<SupportTicket> getAllTickets() {
        return ticketRepository.findAll();
    }

    @PostMapping
    public SupportTicket createTicket(@RequestBody SupportTicket ticket) {
        return ticketRepository.save(ticket);
    }

    @PutMapping("/{id}")
    public SupportTicket updateTicket(@PathVariable Long id, @RequestBody SupportTicket ticket) {
        ticket.setId(id);
        return ticketRepository.save(ticket);
    }

    @DeleteMapping("/{id}")
    public void deleteTicket(@PathVariable Long id) {
        ticketRepository.deleteById(id);
    }
}
