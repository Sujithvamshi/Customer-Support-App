package com.axis.bank.entities;
import lombok.*;
import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
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

}
