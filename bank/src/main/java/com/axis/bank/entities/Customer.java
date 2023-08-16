package com.axis.bank.entities;

import lombok.*;
import jakarta.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique=true)
    private String accountID;
    private String name;
    private String contactDetails;
    private String email;
    private String address;

    @Column(unique=true)
    private String customerID;
    private String password;
}