package com.axis.bank.model;

import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String accountID;
    private String name;
    private String contactDetails;
    private String email;
    private String address;
    private String customerID;
    private String password;
}
