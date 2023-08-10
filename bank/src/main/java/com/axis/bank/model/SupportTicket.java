package com.axis.bank.model;

import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class SupportTicket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String subject;
    private String description;

    private String status;
    
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;
    
    // Other fields, getters, setters
}
